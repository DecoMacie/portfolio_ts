import type { RepoSummary } from "../api/types/repoSummary";

interface CardProps {
  cardData: RepoSummary;
}

export default function Cards({ cardData }: CardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-yellow-500/50 transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://placehold.co/600x400.png"
        alt={cardData.name}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {cardData.name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{cardData.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{cardData.language}</span>
          <span>{cardData.license ?? "No License"}</span>
        </div>
        <a
          href={cardData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
