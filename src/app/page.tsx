import { Benefits } from "@/components/marketing/benefits";
import { ClaroClient } from "@/components/marketing/claro-client";
import { Faq } from "@/components/marketing/faq";
import { FinalCTA } from "@/components/marketing/final-cta";
import { FloatingButton } from "@/components/marketing/floating-button";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { Hire } from "@/components/marketing/hire";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Social } from "@/components/marketing/social";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-white">
        <Hero />
        <Hire />
        <HowItWorks />
        <Benefits />
        <Social />
        <Faq />
        <FinalCTA />
        <ClaroClient />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
