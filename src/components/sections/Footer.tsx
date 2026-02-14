import { Link } from "react-router-dom";
import { Phone, MapPin, Calendar, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { restaurantInfo, navItems } from "@/data/restaurantData";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground pb-20 lg:pb-0">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-4">
              {restaurantInfo.name}
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              {t(
                "Experience the warmth of Georgian hospitality. Traditional recipes, seasonal ingredients, and celebrations to remember.",
                "გაიცანით ქართული სტუმართმოყვარეობის სითბო. ტრადიციული რეცეპტები, სეზონური ინგრედიენტები და დასამახსოვრებელი ზეიმი.",
                "Почувствуйте тепло грузинского гостеприимства. Традиционные рецепты, сезонные ингредиенты и незабываемые праздники."
              )}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="heroOutline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  {t("Call", "დარეკვა", "Звонок")}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t("Directions", "მისამართი", "Маршрут")}
                </Button>
              </Link>
              <a
                href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t("Reserve", "ჯავშანი", "Бронь")}
                </Button>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t("Quick Links", "სწრაფი ბმულები", "Быстрые ссылки")}
            </h4>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t(item.label, item.labelGe, item.labelRu)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t("Connect", "დაგვიკავშირდით", "Связь")}
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href={restaurantInfo.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                TripAdvisor
              </a>
            </div>
            
            <div className="text-sm text-primary-foreground/60">
              <p>{restaurantInfo.address.city}, {restaurantInfo.address.country}</p>
              <p className="mt-2">{restaurantInfo.phone}</p>
              <p>{restaurantInfo.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>
            © {currentYear} {restaurantInfo.name}. {t("All rights reserved.", "ყველა უფლება დაცულია.", "Все права защищены.")}
          </p>
          <p className="flex items-center gap-1">
            {t("Website by", "ვებსაიტი", "Сайт от")} 
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors ml-1">
              TableWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
