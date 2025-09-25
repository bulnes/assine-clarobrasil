import { Benefits } from "@/components/marketing/benefits";
import { Content } from "@/components/marketing/content";
import { FloatingButton } from "@/components/marketing/floating-button";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { Hire } from "@/components/marketing/hire";
import { HowItWorks } from "@/components/marketing/how-it-works";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-white">
        {/* Seção Hero */}
        <Hero />
        {/* O que você pode contratar */}
        <Hire />
        {/* Como Funciona */}
        <HowItWorks />
        {/* Benefícios */}
        <Benefits />
        <Content />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
