import { Content } from "@/components/marketing/content";
import { FloatingButton } from "@/components/marketing/floating-button";
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
      <FloatingButton />
    </div>
  );
}
