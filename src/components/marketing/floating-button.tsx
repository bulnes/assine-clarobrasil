"use client";

import { MessageCircle } from "lucide-react";

export function FloatingButton() {
  const handleWhatsAppClick = () => {
    // Link do WhatsApp para conversão
    const whatsappUrl =
      "https://wa.me/5511999999999?text=Olá!%20Quero%20conhecer%20os%20planos%20da%20Claro";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Versão Desktop - botão arredondado completo */}
      <button
        onClick={handleWhatsAppClick}
        className="hidden sm:flex fixed bottom-4 right-4 z-50 items-center bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 rounded-full px-6 py-4 cursor-pointer"
      >
        {/* Texto */}
        <span className="text-white font-bold text-base mr-3">
          Compre pelo WhatsApp
        </span>

        {/* Ícone com badge */}
        <div className="relative">
          <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />

          {/* Badge de notificação */}
          <div className="absolute -top-1 -right-1 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xs w-5 h-5">
            1
          </div>
        </div>
      </button>

      {/* Versão Mobile - apenas círculo */}
      <div className="sm:hidden fixed bottom-4 right-4 z-[9999]">
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 rounded-full flex items-center justify-center relative shadow-lg"
        >
          {/* Ícone do WhatsApp */}
          <MessageCircle className="w-8 h-8 text-white" fill="currentColor" />

          {/* Badge de notificação mobile */}
          <div className="absolute -top-1 -right-1 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xs w-5 h-5">
            1
          </div>
        </button>
      </div>
    </>
  );
}
