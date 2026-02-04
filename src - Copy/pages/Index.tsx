import { Header } from "@/components/layout/Header";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickActionsSection, MobileActionBar } from "@/components/sections/QuickActionsSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { HallsSection } from "@/components/sections/HallsSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <QuickActionsSection />
        <HighlightsSection />
        <HallsSection />
      </main>
      <Footer />
      <FloatingActions />
      <MobileActionBar />
    </div>
  );
};

export default Index;
