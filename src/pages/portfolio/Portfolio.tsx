import type { PortfolioLoaderResult } from "./portfolioLoader";
import { useLoaderData } from "react-router-dom";

export default function Portfolio() {
  const { portfolioSummary } = useLoaderData() as PortfolioLoaderResult;

  return (
    <div>
      <h1 className="text-3xl space-mono-bold mb-6 text-[#1C1C1C]">
        My Projects • Total: {portfolioSummary.length}
      </h1>

      <ul className="space-y-4">
        {portfolioSummary.map((repo) => (
          <li
            key={repo.name}
            className="
            p-4 bg-white border border-[#E7E5E0]
            rounded-lg shadow-sm
            hover:shadow-md hover:border-[#D9A400]/40
            transition-all duration-300
          "
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-2"
            >
              {/* Title */}
              <h3 className="text-lg space-mono-bold text-[#1C1C1C] hover:text-[#14B8A6] transition-colors">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 space-mono-regular">
                {repo.description}
              </p>

              {/* Meta */}
              <p className="text-sm text-gray-500 space-mono-regular">
                Language:{" "}
                <span className="text-[#14B8A6]">{repo.language}</span> •
                Updated: {new Date(repo.updatedAt).toLocaleDateString()}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
