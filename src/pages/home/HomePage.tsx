import type { HomePageLoaderResult } from "./homePageLoader";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards";

export default function HomePage() {
  const { featuredRepos } = useLoaderData() as HomePageLoaderResult;

  // const elevatorPitch = ``

  return (
    <div className="container w-full  mx-auto">
      <div className="mt-10 flex flex-col justify-between md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-md">
        <div className="w-[50%]">
          <p className="text-gray-600 space-mono-regular text-sm mb-4">
            Hi, I'm{" "}
            <span className="space-mono-bold-italic text-black">
              Dercio Macie
            </span>{" "}
            — a web developer who turns ideas into interactive experiences.
          </p>

          <p className="text-gray-600 space-mono-regular text-sm mb-4">
            I specialize in building responsive, accessible, and
            performance-driven websites using modern technologies like{" "}
            <span className="text-blue-600">React</span>,{" "}
            <span className="text-purple-600">Redux</span>, and{" "}
            <span className="text-teal-600">Tailwind CSS</span>. .
          </p>

          <p className="text-gray-600 space-mono-regular text-sm mb-4">
            Whether it's a sleek landing page or a full-stack application, I
            focus on clean code, intuitive design, and seamless user
            experiences.
          </p>
        </div>
        <img
          src="https://placehold.co/600x400.png"
          alt="profile image"
          className="w-72 h-auto rounded-lg object-cover"
        />
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredRepos.map((repo) => (
          <Cards key={repo.name} cardData={repo} />
        ))}
      </div>
    </div>
  );
}
