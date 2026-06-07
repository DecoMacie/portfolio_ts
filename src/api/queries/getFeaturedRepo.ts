export async function getFeaturedRepo() {
  const response = await fetch("/api/featuredRepos");

  if (!response.ok) {
    throw new Error("Failed to fetch featured repositories");
  }

  return response.json();
}