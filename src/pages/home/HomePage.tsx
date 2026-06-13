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
          alt="Dercio Macie"
          className="
            w-40 sm:w-52 md:w-72
            h-auto
            rounded-lg
            object-cover
            border border-[#E7E5E0]
          "
        />
      </div>

      <div className="mt-12 mb-6 border-t border-[#E7E5E0] pt-8"></div>

      {/* FEATURED PROJECTS HEADER */}
      <section className="mt-12 mb-6 text-center md:text-left">
        <h2 className="text-3xl space-mono-bold text-[#2C2C2C] mb-2">
          Featured Projects
        </h2>
      </section>

      {/* PROJECT GRID */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {featuredRepos.map((repo) => (
          <Cards key={repo.name} cardData={repo} />
        ))}
      </div>
    </div>
  );
}
