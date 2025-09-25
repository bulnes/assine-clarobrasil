import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const whatsappLink = getWhatsappLink();

  return (
    <header className="bg-[#da291c] shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/claro-logo-transparente-hd.png"
                alt="Logo Claro"
                className="h-16 w-auto"
                width={64}
                height={64}
                priority
              />
            </div>
          </div>

          {/* CTAs Desktop only */}
          <div className="hidden lg:flex items-center">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#1ea952] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                <MessageCircle className="w-4 h-4 mr-3" />
                Conhecer os planos Claro
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
          </div>

          {/* CTAs Mobile only */}
          <div className="flex lg:hidden items-center gap-2">
            {/* CTA Suporte - Preto */}
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm w-20">
                Suporte
              </Button>
            </Link>

            {/* CTA Ver planos - Verde WhatsApp */}
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#1ea952] text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm w-20">
                Ver planos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
