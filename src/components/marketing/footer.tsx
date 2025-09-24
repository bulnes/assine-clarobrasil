import { ImageWithFallback } from "@/components/marketing/image-with-fallback";
import { Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#E30613] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e Sobre a Claro */}
          <div className="space-y-4">
            <div className="mb-4">
              <ImageWithFallback
                src="figma:asset/f144c56e9afe6b949b7eae4153c2958426a84ba4.png"
                alt="Logo Claro"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              A melhor cobertura e tecnologia para você ficar sempre conectado.
            </p>
          </div>

          {/* Coluna 2 - Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.claro.com.br/atendimento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Planos e Ofertas
                </a>
              </li>
              <li>
                <a
                  href="https://www.claro.com.br/atendimento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Cobertura
                </a>
              </li>
              <li>
                <a
                  href="https://www.claro.com.br/atendimento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  App Minha Claro
                </a>
              </li>
              <li>
                <a
                  href="https://www.claro.com.br/atendimento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Segunda Via da Conta
                </a>
              </li>
              <li>
                <a
                  href="https://www.claro.com.br/atendimento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Atendimento */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">*1052</div>
                  <div className="text-white/80">Clientes de Celular</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">10621</div>
                  <div className="text-white/80">Clientes do Residencial</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">0800 721 1021</div>
                  <div className="text-white/80">Clientes Empresa</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">0800 036 2525</div>
                  <div className="text-white/80">Vendas</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-white/90">24h por dia</span>
              </div>
            </div>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Siga a Claro</h3>
            <div className="space-y-2">
              <a
                href="https://www.facebook.com/clarobrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/90 hover:text-white transition-colors block"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/clarobrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/90 hover:text-white transition-colors block"
              >
                Instagram
              </a>
              <a
                href="https://x.com/clarobrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/90 hover:text-white transition-colors block"
              >
                X
              </a>
              <a
                href="https://www.youtube.com/user/clarobrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/90 hover:text-white transition-colors block"
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/clarobrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/90 hover:text-white transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@clarobrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/90 hover:text-white transition-colors block"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80 text-center md:text-left">
              © 2025 Claro S.A. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-white/80">
              <a
                href="https://www.claro.com.br/privacidade/politica-de-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
