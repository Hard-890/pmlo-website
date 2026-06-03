import {
  Scale,
  Shield,
  Briefcase,
  FileText,
  Gavel,
} from "lucide-react";

import { motion } from "framer-motion";

function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Constitutional Writs",
      description:
        "Representation in constitutional matters and writ petitions before constitutional courts.",
      icon: <Scale size={32} />,
    },
    {
      title: "Criminal Matters",
      description:
        "Legal assistance in bail matters, trials, appeals and criminal litigation.",
      icon: <Shield size={32} />,
    },
    {
      title: "Service Law Disputes",
      description:
        "Representation in employment and service-related disputes before courts and tribunals.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Civil Litigation",
      description:
        "Resolution of property disputes, contracts, recovery suits and civil matters.",
      icon: <FileText size={32} />,
    },
    {
      title: "Consumer Rights Protection",
      description:
        "Legal remedies against unfair trade practices and consumer grievances.",
      icon: <Gavel size={32} />,
    },
  ];

  return (
    <section
      id="practice"
      className="bg-white py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-law">
            Practice Areas
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Focused legal representation across key areas of law,
            providing strategic solutions tailored to every client.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {practiceAreas.map((area) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black mb-6">
                {area.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {area.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PracticeAreas;