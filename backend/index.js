// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import fetch from "node-fetch";

// dotenv.config();

// const app = express();
// const PORT = 3001;

// app.use(cors());

// app.get("/api/screenshot", async (req, res) => {
//   const { url } = req.query;

//   if (!url) {
//     return res.status(400).json({ error: "Missing URL" });
//   }

//   const apiKey = process.env.API_FLASH_KEY;
//   const apiFlashUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${apiKey}&url=${encodeURIComponent(
//     url
//   )}`;

//   try {
//     const response = await fetch(apiFlashUrl);

//     const contentType = response.headers.get("content-type");

//     if (!response.ok || !contentType?.startsWith("image")) {
//       const errorText = await response.text();
//       console.error("API Flash Error Response:", errorText);
//       return res
//         .status(500)
//         .json({ error: "Screenshot API failed", detail: errorText });
//     }

//     const buffer = await response.arrayBuffer();
//     res.set("Content-Type", "image/jpeg");
//     res.send(Buffer.from(buffer));
//     res.set("Content-Type", "image/jpeg");
//     res.send(Buffer.from(buffer));
//   } catch (err) {
//     console.error("Screenshot fetch error:", err);
//     res.status(500).json({ error: "Failed to generate screenshot" });
//   }
// });

// app.get("/api/test-image", (req, res) => {
//   res.sendFile(path.join(__dirname, "sample.jpg")); // a local test image
// });

// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/screenshot", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: "Missing URL parameter" });
  }

  const apiKey = process.env.API_FLASH_KEY;

  const apiFlashUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${apiKey}&url=${encodeURIComponent(
    targetUrl
  )}&format=jpeg&response_type=image`;

  try {
    const response = await fetch(apiFlashUrl);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch screenshot" });
    }

    res.setHeader("Content-Type", "image/jpeg");
    response.body.pipe(res);
  } catch (error) {
    console.error("Screenshot error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
