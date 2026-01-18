import { Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { hallCards } from "@/data/restaurantData";

export function HallsSection() {
  const { t } = useLanguage();

  const scrollToGallery = (categoryId: string) => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Trigger category change after scroll
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("gallery-category", { detail: categoryId }));
      }, 500);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Our Spaces", "ჩვენი სივრცეები")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("Halls & Atmosphere", "დარბაზები და ატმოსფერო")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Perfect for birthdays, family feasts, company dinners, and unforgettable celebrations",
              "იდეალურია დაბადების დღეებისთვის, საოჯახო ზეიმისთვის, კორპორატივებისთვის"
            )}
          </p>
        </div>

        {/* Halls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hallCards.map((hall) => (
            <button
              key={hall.id}
              onClick={() => scrollToGallery(hall.id)}
              className="group text-left"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img
                  src={hall.image}
                  alt={hall.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary-foreground/90 backdrop-blur-sm rounded-full p-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {t(hall.title, hall.titleGe)}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {hall.description}
              </p>
              <div className="flex items-center gap-1 text-sm text-primary">
                <Users className="h-4 w-4" />
                <span>{hall.capacity} {t("guests", "სტუმარი")}</span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg">
              {t("Plan Your Event", "დაგეგმეთ ღონისძიება")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
