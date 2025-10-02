import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const whatsappLink = getWhatsappLink();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-6 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout Mobile - Tudo na primeira tela */}
        <div className="lg:hidden">
          {/* Imagem no topo - mais horizontal */}
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-xs">
              <Image
                src="/hero-image.svg"
                alt=""
                className="w-full object-cover object-center"
                height={192}
                width={1080}
              />
            </div>
          </div>

          {/* Textos logo abaixo da imagem */}
          <div className="text-center mb-4 max-w-xs mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Assine a <span className="text-[#E30613]">Claro</span> direto pelo
              WhatsApp
            </h1>
            <p className="text-xl text-gray-600 mb-4 px-2">
              Internet, TV, celular, e planos
              <br />
              empresariais em um só lugar.
            </p>
          </div>

          {/* CTA em destaque */}
          <div className="flex justify-center mb-3">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#1ea952] text-white text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <Image
                  src="/icon-whatsapp-default.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-3"
                />
                Conhecer os planos Claro
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>

          {/* Texto de benefícios */}
          <p className="text-center text-sm text-gray-500">
            ✅ Rápido • ✅ Seguro
          </p>
        </div>

        {/* Layout Desktop - Original */}
        <div className="hidden lg:grid grid-cols-2 gap-8 items-center">
          <div className="text-left min-w-2xl">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Assine a <span className="text-[#E30613]">Claro</span> direto pelo
              WhatsApp
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Internet, TV, celular, e planos empresariais em um só lugar.
            </p>

            <div className="flex justify-start">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#1ea952] text-white text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center w-full max-w-[330px]">
                  <Image
                    src="/icon-whatsapp-default.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-3"
                  />
                  Conhecer os planos Claro
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center max-w-[330px]">
              ✅ Rápido • ✅ Seguro
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/hero-image.svg"
              alt=""
              className="w-full max-w-2xl h-auto object-cover object-center"
              height={192}
              width={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
