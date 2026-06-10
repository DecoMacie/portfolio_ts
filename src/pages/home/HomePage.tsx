import type { HomePageLoaderResult } from "./homePageLoader";
import { useLoaderData } from "react-router-dom";
import profileImage from "../../assets/Profile 5.1.png";
import ElevatorPitch from "./ElevatorPitch";
import Cards from "../../components/Cards";

export default function HomePage() {
  const { featuredRepos } = useLoaderData() as HomePageLoaderResult;

  return (
    <div className="container w-full mx-auto">
      {/* HERO SECTION */}
      <div
        className="
    mt-10
    flex flex-col md:flex-row
    items-center
    justify-center
    gap-8
    p-6
    bg-white
    border border-[#E7E5E0]
    rounded-lg
    shadow-sm
    hover:shadow-md
    transition-shadow duration-300
  "
      >
        {/* TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <ElevatorPitch />
        </div>

        {/* IMAGE */}
        <img
          src={profileImage}
          alt="profile image"
          className="
      w-40 sm:w-52 md:w-72
      h-auto
      rounded-lg
      object-cover
      border-b-2 border-[#E7E5E0]
    "
        />
      </div>

      {/* PROJECT GRID */}
      <div
        className="
      mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
    "
      >
        {featuredRepos.map((repo) => (
          <Cards key={repo.name} cardData={repo} />
        ))}
      </div>
    </div>
  );
}
