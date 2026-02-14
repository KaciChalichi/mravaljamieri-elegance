import { useState, useEffect } from "react";
import { ArrowUp, Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurantInfo } from "@/data/restaurantData";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function FloatingActions() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-40 p-3 bg-card rounded-full shadow-medium transition-all duration-300",
          "hover:bg-primary hover:text-primary-foreground",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Floating Reserve Button - Desktop only */}
      <div className="hidden lg:block fixed bottom-8 right-20 z-40">
        <a
          href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="cta"
            size="lg"
            className="shadow-elegant"
          >
            <Calendar className="h-5 w-5 mr-2" />
            {t("Reserve Now", "დაჯავშნა", "Забронировать")}
          </Button>
        </a>
      </div>
    </>
  );
}
