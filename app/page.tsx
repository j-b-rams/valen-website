import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Designs } from "@/components/designs";

export default function Home() {
  return (
    <main className="relative pixel-grid">
      <div className="scanlines" />

      {/* ambient gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] right-[0%] w-[600px] h-[600px] bg-pink/10 rounded-full blur-[180px]" />
        <div className="absolute top-[35%] -left-[10%] w-[500px] h-[500px] bg-lavender/6 rounded-full blur-[160px]" />
        <div className="absolute top-[55%] right-[15%] w-[450px] h-[450px] bg-pink-deep/5 rounded-full blur-[170px]" />
        <div className="absolute top-[80%] left-[5%] w-[400px] h-[400px] bg-mint/4 rounded-full blur-[150px]" />
      </div>

      <Navigation />
      <Hero />
      <Work />
      <Designs />
    </main>
  );
}
