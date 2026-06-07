import { projects } from "../data/projectsLink";

export function getDeployedURL(repoName: string): string | null {
  const project = projects.find((p) => p.name === repoName);

  if (!project) return null;

  // 1. If explicitly defined URL → use it
  if (project.liveUrl) {
    return project.liveUrl;
  }

  // 2. Fallback based on type
  if (project.type === "github") {
    return `https://decomacie.github.io/${project.name}/`;
  }

  if (project.type === "vercel") {
    return `https://${project.name}.vercel.app`;
  }

  return null;
}