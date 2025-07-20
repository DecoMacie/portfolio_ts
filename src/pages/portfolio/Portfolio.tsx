import type { PortfolioLoaderResult } from "./portfolioLoader";
import { useLoaderData } from "react-router-dom";

export default function Portfolio() {
  const { portfolioSummary } = useLoaderData() as PortfolioLoaderResult;

  return (
    <div>
      <h1 className="text-3xl space-mono-bold mb-4 text-white  drop-shadow-[0_0_3px_black]">
        My Projects • Total: {portfolioSummary.length}
      </h1>
      <ul className="space-y-4">
        {portfolioSummary.map((repo) => (
          <li
            key={repo.name}
            className="p-4 bg-white rounded-lg shadow-md hover:drop-shadow-[0_0_6px_#E1AD01]"
          >
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#228B22]"
            >
              <h3 className="text-lg space-mono-bold">{repo.name}</h3>
              <p className="text-gray-600 space-mono-regular">
                {repo.description}
              </p>
              <p className="text-sm text-gray-500 space-mono-regular">
                Language: {repo.language} • Updated:{" "}
                {new Date(repo.updatedAt).toLocaleDateString()}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
