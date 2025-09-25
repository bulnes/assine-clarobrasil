"use client";

import { ImageWithFallback } from "@/components/marketing/image-with-fallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Building,
  Cloud,
  Headphones,
  Home,
  MessageCircle,
  Package,
  Phone,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";
import React from "react";

export function Content() {
  const [isContactDialogOpen, setIsContactDialogOpen] = React.useState(false);

  const handleWhatsAppClick = () => {
    // Simular redirecionamento para WhatsApp
    console.log("Redirecionando para WhatsApp...");
  };

  const handleSaberMais = () => {
    // Simular ação de saber mais
    console.log("Saber mais sobre o serviço...");
  };

  const handleContactDialogOpen = () => {
    setIsContactDialogOpen(true);
  };

  const residentialServices = [
    {
      icon: <Wifi className="w-7 h-7 stroke-2" />,
      title: "Internet Fibra:",
      description: "até 1 Giga de velocidade com Wi-Fi incluso",
    },
    {
      icon: <Smartphone className="w-7 h-7 stroke-2" />,
      title: "Celular Claro:",
      description: "Planos Pós, Controle e Pré com apps ilimitados",
    },
    {
      icon: <Tv className="w-7 h-7 stroke-2" />,
      title: "TV Claro:",
      description: "Claro TV+ e Box TV com canais e streaming inclusos",
    },
    {
      icon: <Package className="w-7 h-7 stroke-2" />,
      title: "Combos Multi:",
      description: "Internet + Celular + TV em uma única fatura com desconto",
    },
  ];

  const businessServices = [
    {
      icon: <Building className="w-7 h-7 stroke-2" />,
      title: "Internet Empresarial:",
      description: "Fibra dedicada e estabilidade máxima",
    },
    {
      icon: <Phone className="w-7 h-7 stroke-2" />,
      title: "Telefonia Móvel Empresarial:",
      description: "Multi-linhas com gestão digital e dados compartilhados",
    },
    {
      icon: <Cloud className="w-7 h-7 stroke-2" />,
      title: "Soluções Digitais:",
      description: "Cloud, PABX Virtual, IoT e segurança digital",
    },
    {
      icon: <Shield className="w-7 h-7 stroke-2" />,
      title: "Combos Empresariais:",
      description: "Internet + Fixo + Móvel com suporte especializado",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Conecte com nossa IA",
      description:
        "Nossa assistente virtual está pronta para te atender 24/7 no WhatsApp",
      tech: "Inteligência Artificial",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Análise personalizada",
      description:
        "IA analisa seu perfil e encontra os melhores planos para você",
      tech: "Machine Learning",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Ativação instantânea",
      description: "Contratação automatizada e ativação em tempo real",
      tech: "Automação Digital",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rápido e prático",
      description: "Assine seu plano Claro em poucos minutos",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Tudo no WhatsApp",
      description: "Processo 100% pelo WhatsApp, sem complicação",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Planos completos",
      description: "Internet, celular, TV e combos disponíveis",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte humano",
      description: "Atendimento humano disponível se precisar",
    },
  ];

  const testimonials = [
    {
      name: "Ana Paula",
      location: "São Paulo, SP",
      rating: 5,
      text: "Super fácil! Assinei pelo WhatsApp em 5 minutos. A IA da Claro é muito eficiente!",
    },
    {
      name: "Carlos Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Incrível como é rápido. Não precisei sair de casa e já estava navegando na Claro.",
    },
    {
      name: "Marina Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Melhor experiência de contratação que já tive. Recomendo!",
    },
  ];

  const faqItems = [
    {
      question: "Como funciona o atendimento via WhatsApp?",
      answer:
        "Nossa inteligência artificial responde suas dúvidas 24h por dia pelo WhatsApp. Você pode consultar planos, verificar cobertura e até mesmo finalizar sua assinatura.",
    },
    {
      question: "É seguro contratar pelo WhatsApp?",
      answer:
        "Sim, totalmente seguro. Utilizamos criptografia de ponta a ponta e todos os processos seguem os padrões de segurança da Claro.",
    },
    {
      question: "Posso falar com um atendente humano se precisar?",
      answer:
        "Claro! Se a IA não conseguir resolver sua dúvida, você será direcionado para um atendente humano especializado.",
    },
    {
      question: "Quais planos posso contratar pelo WhatsApp?",
      answer:
        "Todos os nossos planos estão disponíveis: internet fibra, móvel, TV por assinatura e combos. Nossa IA te ajuda a escolher o ideal.",
    },
    {
      question: "Quanto tempo demora para ativar meu plano?",
      answer:
        "Após a confirmação da contratação, a ativação é imediata para planos móveis. Para fibra, agendamos a instalação em até 5 dias úteis.",
    },
  ];

  return (
    <div className="bg-white">
      {/* O que você pode contratar */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que você pode contratar pelo WhatsApp
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Você apresenta sua necessidade, e nossa IA mostra as melhores
              opções para você ou para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Residencial */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-8">
                <Home className="w-8 h-8 text-[#E60000] mr-3 stroke-2" />
                <h3 className="text-3xl font-bold text-[#E60000]">
                  RESIDENCIAL
                </h3>
              </div>

              <div className="space-y-5">
                {residentialServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 text-[#E60000] mt-1">
                          {service.icon}
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-800 mb-4 leading-relaxed">
                            <span className="font-bold">{service.title}</span>{" "}
                            {service.description}
                          </p>
                          <Button
                            onClick={handleSaberMais}
                            size="sm"
                            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                          >
                            Saber mais
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Empresarial */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-8">
                <Building className="w-8 h-8 text-[#E60000] mr-3 stroke-2" />
                <h3 className="text-3xl font-bold text-[#E60000]">
                  EMPRESARIAL
                </h3>
              </div>

              <div className="space-y-5">
                {businessServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 text-[#E60000] mt-1">
                          {service.icon}
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-800 mb-4 leading-relaxed">
                            <span className="font-bold">{service.title}</span>{" "}
                            {service.description}
                          </p>
                          <Button
                            onClick={handleSaberMais}
                            size="sm"
                            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                          >
                            Saber mais
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #e2e8f0 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #cbd5e1 0.5px, transparent 0.5px)`,
              backgroundSize: "50px 50px, 30px 30px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-full px-6 py-3 mb-6 border border-gray-200 shadow-sm">
              <Sparkles className="w-5 h-5 text-gray-700 mr-2" />
              <span className="text-gray-700 font-medium">
                Tecnologia de Ponta
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Como funciona nossa
              <span className="text-[#E30613]"> IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os serviços Claro, sem burocracia
            </p>
          </div>

          <div className="relative">
            {/* Linha conectora tech */}
            <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-full w-px h-8 bg-gradient-to-b from-blue-300 to-transparent transform -translate-x-1/2"></div>
                  )}

                  <div className="relative">
                    {/* Card */}
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center transition-all duration-500 group-hover:scale-105 group-hover:border-[#E30613] group-hover:shadow-2xl group-hover:shadow-[#E30613]/10 shadow-lg">
                      {/* Número do passo */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-[#E30613] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          <span className="text-white font-bold text-xl relative z-10">
                            {step.number}
                          </span>
                        </div>

                        {/* Tech badge */}
                        <div className="inline-flex items-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                          <div className="w-2 h-2 bg-black rounded-full animate-pulse mr-2"></div>
                          <span className="text-gray-700 text-sm font-medium">
                            {step.tech}
                          </span>
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E30613] transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow connector */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action tech */}
          <div className="text-center mt-16">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#1ea952] text-white text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Conhecer os Planos Claro
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que assinar pelo WhatsApp?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center text-[#25D366] mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA abaixo dos benefícios */}
          <div className="text-center mt-12">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#1ea952] text-white text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Conhecer os Planos Claro
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mais de <span className="text-[#E30613]">100 milhões</span> de
              brasileiros já assinaram a{" "}
              <span className="text-[#E30613]">Claro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="text-center">
                    <p className="font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as principais dúvidas sobre nosso atendimento
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:text-[#E30613] py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para assinar Claro em minutos?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nossa IA está online agora e pronta para te atender!
          </p>

          <Button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#1ea952] text-white text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Conhecer os Planos Claro
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>

          <div className="mt-8 flex justify-center items-center space-x-4 text-gray-300">
            <span className="text-sm">✅ Rápido</span>
            <span>•</span>
            <span className="text-sm">✅ Seguro</span>
          </div>
        </div>
      </section>

      {/* Já é cliente Claro? */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Já é cliente Claro?
            </h2>
            <p className="text-xl text-gray-700">
              Resolva tudo pelo app ou encontre a central de atendimento certa
              para você.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* App Minha Claro */}
            <Card className="bg-white border border-[#E5E5E5] rounded-lg shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Smartphone className="w-6 h-6 text-[#E60000] mr-3" />
                  <h3 className="text-2xl font-bold text-black">
                    App Minha Claro
                  </h3>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  O jeito mais rápido de resolver sua conta, faturas e
                  benefícios.
                </p>

                <div className="flex items-center justify-between">
                  {/* Lado esquerdo - QR Code e instruções */}
                  <div className="flex items-center space-x-6">
                    {/* QR Code */}
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src="figma:asset/2296cdc8bd3b65d0894281322b6c5f0c0a9cb33d.png"
                        alt="QR Code para download do App Minha Claro"
                        className="w-28 h-28 rounded-lg"
                      />
                    </div>

                    {/* Textos e botão */}
                    <div className="flex flex-col">
                      <p className="text-gray-600 text-sm mb-1">
                        Acesse o QR Code
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        com seu celular
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        ou Clique abaixo
                      </p>

                      <Button className="bg-[#E60000] hover:bg-[#CC0000] text-white px-6 py-2 rounded-lg transition-colors duration-200 w-fit">
                        Baixar App
                      </Button>
                    </div>
                  </div>

                  {/* Lado direito - Imagem da mão com celular */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <ImageWithFallback
                      src="figma:asset/ca4f82eea08c13c58153067049177f09413a7af2.png"
                      alt="Mão segurando celular com app Minha Claro"
                      className="w-48 h-auto max-w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Centrais de Atendimento */}
            <Card className="bg-white border border-[#E5E5E5] rounded-lg shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Headphones className="w-8 h-8 text-[#E60000] mr-3" />
                  <h3 className="text-2xl font-bold text-black">
                    Centrais de Atendimento
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Residencial */}
                  <div className="flex items-start space-x-4">
                    <Home className="w-6 h-6 text-[#E60000] mt-1 stroke-2" />
                    <div>
                      <p className="text-gray-800 font-medium">Residencial:</p>
                      <p className="text-gray-700">10621 / 10699</p>
                    </div>
                  </div>

                  {/* Celular */}
                  <div className="flex items-start space-x-4">
                    <Smartphone className="w-6 h-6 text-[#E60000] mt-1 stroke-2" />
                    <div>
                      <p className="text-gray-800 font-medium">Celular:</p>
                      <p className="text-gray-700">
                        1052 /{" "}
                        <span className="text-[#E60000] underline cursor-pointer">
                          WhatsApp
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Empresas */}
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-[#E60000] mt-1 stroke-2" />
                    <div>
                      <p className="text-gray-800 font-medium">Empresas:</p>
                      <p className="text-gray-700">0800 721 1021 / 10321</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span
                      onClick={handleContactDialogOpen}
                      className="text-[#E60000] hover:underline cursor-pointer"
                    >
                      Mais números e acessibilidade →
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dialog para Centrais de Atendimento */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-black text-center">
              Centrais de Atendimento Claro
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Encontre o número certo para seu produto e acesso à acessibilidade
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 py-4">
            {/* Produtos Claro na Sua Residência */}
            <div>
              <div className="flex items-center mb-4">
                <Home className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produtos Claro na Sua Residência
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Banda Larga, TV, Telefone Fixo e Claro Multi
                  </span>
                  <span className="font-bold text-[#E60000]">10621</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    TV via Satélite e Internet via satélite
                  </span>
                  <span className="font-bold text-[#E60000]">10699</span>
                </div>
              </div>
            </div>

            {/* Produtos Claro no seu Celular */}
            <div>
              <div className="flex items-center mb-4">
                <Smartphone className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produtos Claro no seu Celular
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Celular (Pré Pago, Controle e Pós Pago) e Internet Móvel
                  </span>
                  <span className="font-bold text-[#E60000]">1052</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Atendimento Claro no Exterior
                  </span>
                  <span className="font-bold text-[#E60000]">
                    +55 11 99199-5555
                  </span>
                </div>
              </div>
            </div>

            {/* Produtos PME */}
            <div>
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produtos PME (Pequenas e Médias Empresas)
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    PME Residencial - Banda Larga, TV, Telefone Fixo e Claro
                    Multi
                  </span>
                  <span className="font-bold text-[#E60000]">10621</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    PME Residencial - TV via Satélite e Internet via Satélite
                  </span>
                  <span className="font-bold text-[#E60000]">10699</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    PME Móvel - Celular (Pré Pago, Controle e Pós Pago) e
                    Internet Móvel
                  </span>
                  <span className="font-bold text-[#E60000]">1052</span>
                </div>
              </div>
            </div>

            {/* Produto Grandes Empresas */}
            <div>
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produto Grandes Empresas (Embratel)
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Todos os Produtos</span>
                  <span className="font-bold text-[#E60000]">
                    0800 721 1021
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Produtos Longa Distância (LD21)
                  </span>
                  <span className="font-bold text-[#E60000]">10321</span>
                </div>
              </div>
            </div>

            {/* Ouvidoria Claro */}
            <div>
              <div className="flex items-center mb-4">
                <Headphones className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Ouvidoria Claro
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Todos os Produtos</span>
                  <span className="font-bold text-[#E60000]">
                    0800 701 0180
                  </span>
                </div>
              </div>
            </div>

            {/* Atendimento com acessibilidade */}
            <div>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Atendimento com acessibilidade
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Todos os produtos</span>
                  <a
                    href="https://www.claro.com.br/institucional/regulatorio/acessibilidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E60000] underline hover:text-[#CC0000] transition-colors"
                  >
                    claro.com.br/acessibilidade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
