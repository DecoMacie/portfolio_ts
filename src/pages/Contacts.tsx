import { contacts } from "../api/data/contacts";

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
        {contacts.map((contact) => (
          <a
            href={contact.link}
            className="
            bg-white border border-[#E7E5E0]
            rounded-lg p-6
            shadow-sm hover:shadow-md
            hover:border-[#D4A017]
            transition-all duration-300
          "
          >
            <div className="flex items-center gap-4">
              <contact.icon className="text-3xl text-[#D4A017]" />

              <div>
                <h2 className="space-mono-bold text-lg text-[#2C2C2C]">
                  {contact.name}
                </h2>
                <p className="space-mono-regular text-[#6B7280]">
                  {contact.extraText}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
