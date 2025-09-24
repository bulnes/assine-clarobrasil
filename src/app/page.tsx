import { Content } from "@/components/marketing/content";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      {/* <WhatsAppFloatingButton /> */}
    </div>
  );
}
