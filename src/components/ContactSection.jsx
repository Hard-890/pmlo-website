import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="bg-black text-white py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-law">
            Contact PMLO
          </h2>

          <p className="text-gray-400 mt-4">
            Get in touch for professional legal guidance and consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="bg-yellow-500 text-black p-3 rounded-full">
                <MapPin size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl mb-1">
                  Office Address
                </h3>

                <p className="text-gray-300">
                  Parveen Munjal Law Office
                  <br />
                  Zirakpur, SAS Nagar,
                  Mohali, Punjab
                  <br />
                  (Chandigarh Tricity)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-yellow-500 text-black p-3 rounded-full">
                <Phone size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl mb-1">
                  Phone
                </h3>

                <a
                  href="tel:+919467707870"
                  className="text-gray-300 hover:text-yellow-500 transition"
                >
                  +91 94677 07870
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-yellow-500 text-black p-3 rounded-full">
                <Mail size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl mb-1">
                  Email
                </h3>

                <a
                  href="mailto:hmunjal01@gmail.com"
                  className="text-gray-300 hover:text-yellow-500 transition"
                >
                  hmunjal01@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Google Map */}

          <div className="rounded-2xl overflow-hidden border border-yellow-500 shadow-2xl">
            <iframe
              title="PMLO Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3431.826989424552!2d76.843!3d30.667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95005fb4685f%3A0x439634f0365c069c!2sPARVEEN%20MUNJAL%E2%80%99S%20LAW%20OFFICE!5e0!3m2!1sen!2sin!4v1780507394146!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default ContactSection;