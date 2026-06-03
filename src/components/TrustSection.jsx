import { Scale, ShieldCheck, Landmark, Gavel } from "lucide-react";
import { motion } from "framer-motion";

function TrustSection() {
  const items = [
    {
      icon: <Scale size={36} />,
      title: "Constitutional Representation",
      desc: "Focused legal representation in constitutional and writ matters.",
    },
    {
      icon: <Gavel size={36} />,
      title: "Litigation Expertise",
      desc: "Handling complex civil, criminal and service law disputes.",
    },
    {
      icon: <Landmark size={36} />,
      title: "Higher Court Practice",
      desc: "Representation before Supreme Court, High Court and Tribunals.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Client Confidentiality",
      desc: "Professional handling of every legal matter with discretion.",
    },
  ];

  return (
    <section className="bg-yellow-500 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-law font-bold text-black">
            Why Clients Trust PMLO
          </h2>

          <p className="mt-4 text-black/80">
            Professional representation backed by integrity,
            preparation and commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustSection;