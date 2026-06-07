import { useNavigate } from "react-router-dom";
import { getDeployedURL } from "../api/queries/getDeployedURL";
import { getGitHubImage } from "../api/queries/getGitHubImage";
import type { RepoSummary, Project } from "../api/types/repoSummary";
import { useEffect, useState } from "react";

interface CardProps {
  cardData: RepoSummary & Project;
}

export default function Cards({ cardData }: CardProps) {
  const [image, setImage] = useState<string>(
    "https://placehold.co/600x400?text=Loading...",
  );

  const navigate = useNavigate();

  const deployedURL = getDeployedURL(cardData.name);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      if (!isMounted) return;
      const img = await getGitHubImage(
        cardData.name,
        "src/assets/DisplayImage.png",
      );

      if (!isMounted) return;

      setImage(img ?? "https://placehold.co/600x400?text=No+Image");
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [cardData.name]);

  const handleClick = () => {
    if (deployedURL) {
      window.open(deployedURL, "_blank", "noopener,noreferrer");
    } else {
      navigate("/not-found");
    }
    console.log(deployedURL);
  };

  return (
    <div
      className="
    flex flex-col h-full max-w-sm rounded-lg overflow-hidden
    bg-white border border-[#E7E5E0]
    shadow-sm
    hover:shadow-lg hover:border-[#D9A400]/40
    transition-all duration-300
  "
    >
      <div className="relative w-full h-48">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={cardData.name}
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="flex flex-col grow p-6">
        <h2 className="text-xl space-mono-bold text-[#1C1C1C] mb-2">
          {cardData.name}
        </h2>

        <p className="text-gray-600 space-mono-regular text-sm mb-4">
          {cardData.description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>{cardData.language}</span>
            <span>{cardData.license ?? "No License"}</span>
          </div>

          <div className="flex justify-between gap-3">
            {/* Primary button */}
            <a
              href={cardData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex-1 text-center
              space-mono-bold px-4 py-2 rounded-lg
              bg-[#D9A400] text-white
              hover:bg-[#B88900]
              transition-colors
            "
            >
              Open GitHub
            </a>

            {/* Secondary button */}
            <button
              onClick={handleClick}
              className="
              flex-1 text-center
              space-mono-bold px-4 py-2 rounded-lg
              border border-[#D9A400] text-[#D9A400]
              hover:bg-[#D9A400] hover:text-white
              transition-colors
            "
            >
              Open Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
