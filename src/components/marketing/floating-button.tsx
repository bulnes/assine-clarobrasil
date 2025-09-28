"use client";

import { getWhatsappLink } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingButton() {
  const whatsappLink = getWhatsappLink();

  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (!isExpanded) return;

    // Faz a versão extendida aparecer após 10 segundos, e desaparecer após 5 segundos
    const timer = setTimeout(() => {
      setIsExpanded(true);

      const hideTimer = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isExpanded]);

  function handleCloseExpandedButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsExpanded(false);
  }

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
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row-reverse items-center justify-center"
        >
          <button className="w-16 h-16 bg-[#25D366] transition-all duration-300 rounded-full flex items-center justify-center shadow-lg border-2 border-white drop-shadow-lg drop-shadow-[#25D366]/50 z-10">
            {/* Ícone do WhatsApp */}
            <Image
              src="/icon-whatsapp-default.svg"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 z-10"
            />

            {/* Badge de notificação mobile */}
            <div className="absolute -top-3 -right-2 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xs w-7 h-7 border-2 border-white z-20">
              1
            </div>
          </button>

          {/* Versão expandida */}
          {isExpanded && (
            <div
              className={`relative bg-[#25D366] rounded-2xl flex flex-col justify-center px-4 py-1 pr-20 -mr-14 drop-shadow-lg drop-shadow-[#25D366]/50`}
            >
              <span className="text-white text-base font-bold text-left">
                Desconto Especial
              </span>
              <span className="flex items-center justify-start gap-2 text-left">
                <span className="inline-block h-2 w-2 bg-[#E30613] rounded-full"></span>
                <span className="text-white font-light text-sm">
                  Oferta exclusiva hoje
                </span>
              </span>

              {/* Botão para fechar a versão expandida */}
              <button
                className="absolute -top-2 -left-2 text-white bg-black rounded-full w-5 h-5 flex items-center justify-center text-lg leading-none z-10"
                onClick={handleCloseExpandedButton}
              >
                <X className="w-3 h-3" />
                <span className="sr-only">Fechar</span>
              </button>
            </div>
          )}
        </Link>
      </div>
    </>
  );
}
