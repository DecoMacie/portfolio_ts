import { useNavigate } from "react-router-dom";
import { getDeployedURL } from "../api/queries/getDeployedURL";
import type { RepoSummary } from "../api/types/repoSummary";

interface CardProps {
  cardData: RepoSummary;
}

export default function Cards({ cardData }: CardProps) {
  const navigate = useNavigate();

  const handleClick = async () => {
    const deployedURL = await getDeployedURL(cardData.name);
    if (deployedURL) {
      // Redirect to external GitHub Pages URL
      window.open(deployedURL, "_blank");
    } else {
      // Optionally navigate to an internal fallback route
      console.log(deployedURL);
      navigate("/not-found");
    }
  };

  return (
    <div className="flex flex-col h-full max-w-sm rounded-lg overflow-hidden shadow-md bg-white hover:drop-shadow-[0_0_6px_#E1AD01] transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://placehold.co/600x400.png"
        alt={cardData.name}
      />
      <div className="flex flex-col grow p-6">
        <h2 className="text-xl space-mono-bold text-gray-800 mb-2">
          {cardData.name}
        </h2>
        <p className="text-gray-600 space-mono-regular text-sm mb-4">
          {cardData.description}
        </p>
        <div className="mt-auto">
          <div className="flex items-center justify-between space-mono-regular text-sm text-gray-500 mb-4">
            <span>{cardData.language}</span>
            <span>{cardData.license ?? "No License"}</span>
          </div>
          <div className="flex justify-between">
            <a
              href={cardData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="space-mono-bold inline-block px-4 py-2 bg-[#E1AD01] text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Open GitHub
            </a>
            <button
              onClick={handleClick}
              className="space-mono-bold inline-block px-4 py-2 bg-[#E1AD01] text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Open Browser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
