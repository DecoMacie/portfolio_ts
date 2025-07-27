interface PagesGithub {
  html_url: string;
}

export async function getDeployedURL(name: string): Promise<string | null> {
  const userName = "DecoMacie"
    const res = await fetch(
      `https://api.github.com/repos/${userName}/${name}/pages`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // Required!
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
      console.warn(`GitHub Pages not enabled for ${name}`);
      return null;
    }
    throw new Error(`Failed to fetch deployment info for ${name}`);
    }

    const data: PagesGithub = await res.json();

    return data.html_url || null;
  // } catch (err) {
  //   console.error("Link does not exist or failed:", err);
  //   return null;
  // }
}