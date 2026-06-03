import { motion } from "framer-motion";

function ConsultationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot anti-spam check
    if (e.target.website.value) {
      return;
    }

    alert(
      "Thank you for contacting PMLO. We will get back to you shortly."
    );
  };

  return (
    <motion.section
      id="consultation"
      className="bg-white py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-law">
            Book a Consultation
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discuss your legal matter with an experienced legal
            professional and receive focused guidance tailored
            to your situation.
          </p>
        </div>

        {/* Trust Banner */}

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mb-8">
          <p className="text-gray-700">
            All consultations are handled with complete
            confidentiality and professional discretion.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 md:p-10"
        >

          {/* Hidden Anti-Bot Field */}

          <input
            type="text"
            name="website"
            className="hidden"
            autoComplete="off"
          />

          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                required
                minLength={3}
                maxLength={100}
                placeholder="Enter your full name"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  p-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-500
                "
              />
            </div>

            {/* Phone */}

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                placeholder="Enter phone number"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  p-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-500
                "
              />
            </div>

          </div>

          {/* Email */}

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-500
              "
            />
          </div>

          {/* Practice Area */}

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Legal Matter
            </label>

            <select
              required
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-500
              "
            >
              <option value="">
                Select Practice Area
              </option>

              <option>Constitutional Writs</option>
              <option>Criminal Matters</option>
              <option>Service Law Disputes</option>
              <option>Civil Litigation</option>
              <option>Consumer Rights Protection</option>
            </select>
          </div>

          {/* Message */}

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Brief Description
            </label>

            <textarea
              rows="5"
              required
              minLength={20}
              maxLength={1000}
              placeholder="Please describe your legal issue"
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-500
              "
            />
          </div>

          {/* Submit Button */}

          <div className="mt-8">
            <button
              type="submit"
              className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                font-semibold
                px-8
                py-3
                rounded-lg
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
              "
            >
              Request Consultation
            </button>
          </div>

        </form>

      </div>
    </motion.section>
  );
}

export default ConsultationForm;