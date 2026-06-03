import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-yellow-500/20 shadow-xl">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-4"
          >
            <img
              src={logo}
              alt="PMLO Logo"
              className="
                h-14
                w-14
                rounded-full
                border
                border-yellow-500
                shadow-[0_0_15px_rgba(234,179,8,0.4)]
              "
            />

            <div>
              <h1 className="text-white font-bold text-lg md:text-2xl">
                Parveen Munjal Law Office
              </h1>

              <p className="text-yellow-500 text-xs md:text-sm">
                Litigating Rights. Defending Liberty.
              </p>
            </div>
          </a>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">

            <a
              href="#home"
              className="text-white hover:text-yellow-500 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-white hover:text-yellow-500 transition"
            >
              About
            </a>

            <a
              href="#practice"
              className="text-white hover:text-yellow-500 transition"
            >
              Practice Areas
            </a>

            <a
              href="#contact"
              className="text-white hover:text-yellow-500 transition"
            >
              Contact
            </a>

            <a
              href="#consultation"
              className="
                bg-yellow-500
                text-black
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-yellow-400
                hover:scale-105
                transition-all
              "
            >
              Book Consultation
            </a>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden bg-black border-t border-zinc-800">

          <div className="flex flex-col p-6 space-y-6">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              About
            </a>

            <a
              href="#practice"
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              Practice Areas
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              Contact
            </a>

            <a
              href="#consultation"
              onClick={() => setIsOpen(false)}
              className="
                bg-yellow-500
                text-black
                px-5
                py-3
                rounded-lg
                font-semibold
                text-center
              "
            >
              Book Consultation
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;