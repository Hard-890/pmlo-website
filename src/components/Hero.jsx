import heroBg from "../assets/images/hero-bg.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden pt-28"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-500 font-semibold tracking-wider uppercase">
            Supreme Court • High Court • Tribunals
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight font-law">
            Litigating Rights.
            <br />
            <span className="text-yellow-500">
              Defending Liberty.
            </span>
            <br />
            Resolving Disputes.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl">
            Parveen Munjal Law Office is a Chandigarh-based leading law
            firm providing focused legal representation before the
            Hon'ble Supreme Court of India, Punjab & Haryana High Court,
            Chandigarh and various Tribunals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#consultation"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </a>

            <a
              href="tel:+919467707870"
              className="border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm md:text-base text-gray-300">
            <span>✓ Constitutional Writs</span>
            <span>✓ Criminal Matters</span>
            <span>✓ Civil Litigation</span>
            <span>✓ Consumer Rights Protection</span>
          </div>
        </motion.div>

        {/* Right Side Card */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-yellow-500 rounded-2xl p-8 shadow-2xl max-w-lg w-full">

            <h3 className="text-2xl font-bold mb-4">
              Need Legal Assistance?
            </h3>

            <p className="text-gray-300 mb-6">
              Speak with an experienced legal professional and
              receive guidance tailored to your legal matter.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-yellow-500 font-semibold">
                  Phone
                </p>

                <a
                  href="tel:+919467707870"
                  className="text-white hover:text-yellow-500 transition"
                >
                  +91 94677 07870
                </a>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">
                  Email
                </p>

                <a
                  href="mailto:hmunjal01@gmail.com"
                  className="text-white hover:text-yellow-500 transition"
                >
                  hmunjal01@gmail.com
                </a>
              </div>

              <div>
                <p className="text-yellow-500 font-semibold">
                  Location
                </p>

                <p className="text-white">
                  Zirakpur, SAS Nagar, Mohali, Punjab
                  <br />
                  (Chandigarh Tricity)
                </p>
              </div>

              <div className="pt-4 border-t border-yellow-500/30 space-y-2">
                <p className="text-green-400 text-sm">
                  ✓ Confidential Consultation
                </p>

                <p className="text-green-400 text-sm">
                  ✓ Quick Response
                </p>

                <p className="text-green-400 text-sm">
                  ✓ Professional Legal Guidance
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;