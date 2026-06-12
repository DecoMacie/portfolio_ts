import type { VercelRequest, VercelResponse } from "@vercel/node";

const FEATURED_REPOS = [
  "calculator-js",
  "smart_travel_companion",
  "registry",
  "Weather_Dashboard",
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("Token exists:", !!process.env.GITHUB_TOKEN);
  try {
    const responses = await Promise.all(
      FEATURED_REPOS.map(async (repo) => {
        const response = await fetch(
          `https://api.github.com/repos/DecoMacie/${repo}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              Accept: "application/vnd.github+json",
            },
          },
        );
        
        console.log(`${repo}: ${response.status}`);
        if (!response.ok) {
          const body = await response.text();

          console.error("Repo:", repo);
          console.error("Status:", response.status);
          console.error("Response:", body);

          throw new Error(`Failed to fetch ${repo}`);
        }

        return response.json();
      }),
    );

    const data = responses.map(
      ({
        name,
        created_at,
        description,
        language,
        license,
        updated_at,
        html_url,
      }) => ({
        name,
        createdAt: created_at,
        description: description ?? "No Description",
        language,
        license: license?.name ?? null,
        updatedAt: updated_at,
        html_url,
      }),
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch repositories",
    });
  }
}
