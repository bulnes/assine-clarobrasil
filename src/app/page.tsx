import { Content } from "@/components/marketing/content";
import { Header } from "@/components/marketing/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Content />
      </main>
      {/* <WhatsAppFooter /> */}

      {/* Botão flutuante do WhatsApp */}
      {/* <WhatsAppFloatingButton /> */}
    </div>
  );
}
