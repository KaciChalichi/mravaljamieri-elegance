import { Header } from "@/components/layout/Header";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { OwnerGuide } from "@/components/layout/OwnerGuide";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickActionsSection, MobileActionBar } from "@/components/sections/QuickActionsSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HallsSection } from "@/components/sections/HallsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <QuickActionsSection />
        <HighlightsSection />
        <MenuSection />
        <AboutSection />
        <HallsSection />
        <GallerySection />
        <EventsSection />
        <ReviewsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingActions />
      <MobileActionBar />
      <CookieBanner />
      <OwnerGuide />
    </div>
  );
};

export default Index;
