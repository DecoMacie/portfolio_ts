export interface RepoSummary {
  name: string;
  createdAt: string;
  description: string;
  language: string | null;
  license: string | null;
  updatedAt: string;
  html_url: string;
}

export type Project = {
  name: string;
  liveUrl?: string;
  type?: "vercel" | "github";
}