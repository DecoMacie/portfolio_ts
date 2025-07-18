import type { PortfolioLoaderResult } from "./portfolioLoader";
import { useLoaderData } from "react-router-dom";

export default function Portfolio() {
  const { portfolioSummary } = useLoaderData() as PortfolioLoaderResult;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <ul className="space-y-4">
        {portfolioSummary.map((repo) => (
          <li key={repo.name} className="p-4 border rounded shadow-sm">
            <h3 className="text-lg font-bold">{repo.name}</h3>
            <p className="text-gray-600">{repo.description}</p>
            <p className="text-sm text-gray-500">
              Language: {repo.language} • Updated:{" "}
              {new Date(repo.updatedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
