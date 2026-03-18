import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '5516996325273';
  const message = 'Olá! Preciso de uma advogada especialista em Direito Trabalhista';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full shadow-lg animate-pulse-soft hover:animate-none hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />

      <span className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Entre em contato
      </span>
    </a>
  );
}
