import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AgentureIntro } from "@/components/AgentureIntro";
import { Services } from "@/components/Services";
import { OutsourceIT } from "@/components/OutsourceIT";
import { Partners } from "@/components/Partners";
import { News } from "@/components/News";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <AgentureIntro />
      <Services />
      <OutsourceIT />
      <Partners />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
