export async function getGitHubImage(repo: string, path: string) {
  const res = await fetch(
    `/api/githubImage?repo=${repo}&path=${encodeURIComponent(path)}`
  );

  if (!res.ok) return null;

  const data = await res.json();

  return data.image;
}