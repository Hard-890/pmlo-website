import {
  ShieldCheck,
  Scale,
  Clock3,
  Users,
  Briefcase,
  FileCheck,
} from "lucide-react";

import { motion } from "framer-motion";

function WhyChooseUs() {
  const features = [
    {
      icon: <Scale size={32} />,
      title: "Focused Legal Expertise",
      desc: "Specialized representation across constitutional, criminal, civil and service law matters.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Integrity & Ethics",
      desc: "Professional legal services delivered with transparency, honesty and accountability.",
    },
    {
      icon: <Clock3 size={32} />,
      title: "Timely Action",
      desc: "Prompt responses and proactive legal strategies for every matter.",
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric Approach",
      desc: "Every client receives personalized attention and practical legal guidance.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Courtroom Experience",
      desc: "Representation before the Supreme Court, High Courts and various Tribunals.",
    },
    {
      icon: <FileCheck size={32} />,
      title: "Practical Solutions",
      desc: "Focused on delivering effective legal outcomes and dispute resolution.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-law">
            Why Choose PMLO
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Trusted legal representation backed by experience,
            professionalism and unwavering commitment to justice.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-8
                hover:border-yellow-500
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;