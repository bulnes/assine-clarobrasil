import { getWhatsappLink } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingButton() {
  const whatsappLink = getWhatsappLink();

  return (
    <>
      {/* Versão Desktop - botão arredondado completo */}
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="hidden sm:flex fixed bottom-4 right-4 z-50 items-center bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 rounded-full px-6 py-4 cursor-pointer">
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
      </Link>

      {/* Versão Mobile - apenas círculo */}
      <div className="sm:hidden fixed bottom-4 right-4 z-[9999]">
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 rounded-full flex items-center justify-center relative shadow-lg">
            {/* Ícone do WhatsApp */}
            <MessageCircle className="w-8 h-8 text-white" fill="currentColor" />

            {/* Badge de notificação mobile */}
            <div className="absolute -top-1 -right-1 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xs w-5 h-5">
              1
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
