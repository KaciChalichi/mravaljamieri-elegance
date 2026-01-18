import { Link } from "react-router-dom";
import { ChevronDown, Clock, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { restaurantInfo } from "@/data/restaurantData";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get today's hours
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;
  const today = days[new Date().getDay()];
  const todayHours = restaurantInfo.hours[today];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal/80" />

      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto stagger-children">
          {/* Ornamental line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold/60" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
              {t("Est. 1995", "დაარსდა 1995")}
            </span>
            <span className="w-12 h-px bg-gold/60" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            {t("Georgian Tradition,", "ქართული ტრადიცია,")}
            <br />
            <span className="text-gold">{t("Served Beautifully", "მშვენივრად მირთმეული")}</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {t(
              "Seasonal dishes, warm halls, and the kind of hospitality you remember.",
              "სეზონური კერძები, თბილი დარბაზები და სტუმართმოყვარეობა, რომელსაც დაიმახსოვრებთ.",
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/menu">
              <Button variant="hero">{t("View Menu", "მენიუ")}</Button>
            </Link>
            <a
              href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline">{t("Reserve a Table", "დაჯავშნეთ მაგიდა")}</Button>
            </a>
          </div>

          {/* Quick Info Chips */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm">
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="h-4 w-4 text-gold" />
              <span>
                {t("Today", "დღეს")}:{" "}
                {todayHours.closed ? t("Closed", "დახურულია") : `${todayHours.open} - ${todayHours.close}`}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-gold" />
              <span>{restaurantInfo.address.city}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-gold fill-gold" />
              <span>
                {restaurantInfo.rating} ({restaurantInfo.reviewCount}+ {t("reviews", "შეფასება")})
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={() => scrollToSection("quick-actions")}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">{t("Scroll to explore", "გადაახვიეთ")}</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
