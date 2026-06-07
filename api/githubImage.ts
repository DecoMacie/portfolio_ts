import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { repo, path } = req.query;

    if (!repo || !path) {
      return res.status(400).json({ error: "Missing repo or path" });
    }

    const response = await fetch(
      `https://api.github.com/repos/DecoMacie/${repo}/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "GitHub request failed",
      });
    }

    const data = await response.json();

    if (!data.download_url) {
      return res.status(404).json({
        error: "No image download URL found",
      });
    }

    return res.status(200).json({
      image: data.download_url,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}