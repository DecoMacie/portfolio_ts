interface PagesGithub {
  html_url: string;
}

export async function getDeployedURL(name: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/DecoMacie/${name}/pages`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // Required!
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!res.ok) {
      return null;
    }

    const data: PagesGithub = await res.json();

    return data.html_url;
  } catch (err) {
    console.error("Link does not exist or failed:", err);
    return null;
  }
}
