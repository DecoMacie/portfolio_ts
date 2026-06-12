import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div
        className="
          bg-white border border-[#E7E5E0]
          rounded-lg shadow-sm
          p-8 mb-10
        "
      >
        <h1 className="text-3xl space-mono-bold text-[#2C2C2C] mb-4">
          Get In Touch
        </h1>

        <p className="space-mono-regular text-[#6B7280] max-w-2xl">
          Whether you have a project in mind, a collaboration opportunity, or
          simply want to connect, feel free to reach out through any of the
          platforms below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="mailto:decomacie@gmail.com"
          className="
            bg-white border border-[#E7E5E0]
            rounded-lg p-6
            shadow-sm hover:shadow-md
            hover:border-[#D4A017]
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-[#D4A017]" />

            <div>
              <h2 className="space-mono-bold text-lg text-[#2C2C2C]">Email</h2>
              <p className="space-mono-regular text-[#6B7280]">
                decomacie@gmail.com
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/decomacie"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white border border-[#E7E5E0]
            rounded-lg p-6
            shadow-sm hover:shadow-md
            hover:border-[#D4A017]
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-3xl text-[#D4A017]" />

            <div>
              <h2 className="space-mono-bold text-lg text-[#2C2C2C]">
                LinkedIn
              </h2>
              <p className="space-mono-regular text-[#6B7280]">
                Connect professionally
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/DecoMacie"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white border border-[#E7E5E0]
            rounded-lg p-6
            shadow-sm hover:shadow-md
            hover:border-[#D4A017]
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-4">
            <FaGithub className="text-3xl text-[#D4A017]" />

            <div>
              <h2 className="space-mono-bold text-lg text-[#2C2C2C]">GitHub</h2>
              <p className="space-mono-regular text-[#6B7280]">
                Browse my projects
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white border border-[#E7E5E0]
            rounded-lg p-6
            shadow-sm hover:shadow-md
            hover:border-[#D4A017]
            transition-all duration-300
          "
        >
          <div className="flex items-center gap-4">
            <FaInstagram className="text-3xl text-[#D4A017]" />

            <div>
              <h2 className="space-mono-bold text-lg text-[#2C2C2C]">
                Instagram
              </h2>
              <p className="space-mono-regular text-[#6B7280]">
                Follow my journey
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
