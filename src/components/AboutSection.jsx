import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-white py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-yellow-500 font-semibold uppercase">
              About PMLO
            </span>

            <h2 className="text-4xl md:text-5xl font-law font-bold mt-4">
              Trusted Legal Representation
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Parveen Munjal Law Office is a Chandigarh-based leading
              law firm practicing before the Hon'ble Supreme Court,
              Punjab & Haryana High Court and various Tribunals.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The firm provides focused representation in
              Constitutional Writs, Criminal Matters,
              Service Law Disputes, Civil Litigation and
              Consumer Rights Protection matters.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-lg">
                Aim
              </p>

              <p className="text-gray-600 mt-2">
                Resolving Complex Legal Challenges
                with Precision and Integrity.
              </p>
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-10">
            <h3 className="text-3xl font-law mb-6">
              Our Motto
            </h3>

            <div className="space-y-4 text-xl">
              <p className="text-yellow-500">
                Litigating Rights.
              </p>

              <p>
                Defending Liberty.
              </p>

              <p>
                Resolving Disputes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default AboutSection;