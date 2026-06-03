import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggle);

    return () =>
      window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-24 right-6 bg-black text-white p-3 rounded-full shadow-lg z-50"
      >
        <ChevronUp size={22} />
      </button>
    )
  );
}

export default ScrollToTop;