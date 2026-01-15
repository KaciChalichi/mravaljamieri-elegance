import { ChefHat, Home, Building, Leaf, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { highlights } from "@/data/restaurantData";

const iconMap = {
  ChefHat,
  Home,
  Building,
  Leaf,
  Music,
  Users,
};

export function HighlightsSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Why Choose Us", "რატომ ჩვენ")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("The Mravaljamieri Experience", "მრავალჟამიერის გამოცდილება")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Where every meal becomes a celebration of Georgian hospitality",
              "სადაც ყოველი კვება ქართული სტუმართმოყვარეობის ზეიმი ხდება"
            )}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap];
            
            return (
              <div
                key={index}
                className="group bg-card rounded-lg p-6 md:p-8 text-center card-hover border border-transparent hover:border-primary/10"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-inherit" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                  {t(highlight.title, highlight.titleGe)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="cta"
            size="lg"
            onClick={() => {
              const element = document.getElementById("events");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Users className="h-5 w-5 mr-2" />
            {t("Book for a Group", "დაჯავშნეთ ჯგუფისთვის")}
          </Button>
        </div>
      </div>
    </section>
  );
}
