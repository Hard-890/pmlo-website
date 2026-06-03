import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Firm Info */}

          <div>
            <h3 className="text-2xl font-law font-bold">
              Parveen Munjal Law Office
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Chandigarh-based law firm providing focused legal
              representation before the Supreme Court of India,
              Punjab & Haryana High Court and various Tribunals.
            </p>

            <p className="mt-4 text-yellow-500 font-medium">
              Litigating Rights. Defending Liberty.
              Resolving Disputes.
            </p>
          </div>

          {/* Practice Areas */}

          <div>
            <h4 className="font-bold mb-4 text-lg">
              Practice Areas
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Constitutional Writs</li>
              <li>Criminal Matters</li>
              <li>Service Law Disputes</li>
              <li>Civil Litigation</li>
              <li>Consumer Rights Protection</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-bold mb-4 text-lg">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="tel:+919467707870"
                  className="hover:text-yellow-500 transition"
                >
                  +91 94677 07870
                </a>
              </li>

              <li>
                <a
                  href="mailto:hmunjal01@gmail.com"
                  className="hover:text-yellow-500 transition"
                >
                  hmunjal01@gmail.com
                </a>
              </li>

              <li>
                Zirakpur, SAS Nagar,
                <br />
                Mohali, Punjab
              </li>
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h4 className="font-bold mb-4 text-lg">
              Legal
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-yellow-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-yellow-500 transition"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-zinc-800 mt-10 pt-8 text-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Parveen Munjal Law Office.
            All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Designed & Developed with professionalism and integrity.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;