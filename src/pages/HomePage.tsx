export default function HomePage() {
  return (
    <div className="container w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-md">
        <p className="text-gray-700 text-justify max-w-xl space-mono-regular">
          Hi, I'm{" "}
          <span className="space-mono-bold-italic text-black">
            Dercio Macie
          </span>{" "}
          — a web developer who turns ideas into interactive experiences. I
          specialize in building responsive, accessible, and performance-driven
          websites using modern technologies like{" "}
          <span className="font-medium text-blue-600">React</span>,{" "}
          <span className="font-medium text-purple-600">Redux</span>, and{" "}
          <span className="font-medium text-teal-600">Tailwind CSS</span>.
          Whether it's a sleek landing page or a full-stack application, I focus
          on clean code, intuitive design, and seamless user experiences.
        </p>
        <img
          src="https://placehold.co/600x400.png"
          alt="profile image"
          className="w-72 h-auto rounded-lg object-cover"
        />
      </div>
      <div>Cards</div>
    </div>
  );
}
