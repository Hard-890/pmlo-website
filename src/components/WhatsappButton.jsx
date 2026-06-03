import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919467707870"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export default WhatsAppButton;