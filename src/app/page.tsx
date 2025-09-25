import { Content } from "@/components/marketing/content";
import { FloatingButton } from "@/components/marketing/floating-button";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { Hire } from "@/components/marketing/hire";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-white">
        {/* Seção Hero */}
        <Hero />
        {/* O que você pode contratar */}
        <Hire />
        <Content />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
