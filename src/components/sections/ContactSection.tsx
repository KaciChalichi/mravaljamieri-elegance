import { Phone, MessageCircle, MapPin, Mail, Clock, Car, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { restaurantInfo } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

const days = [
  { key: "monday", label: "Monday", labelGe: "ორშაბათი" },
  { key: "tuesday", label: "Tuesday", labelGe: "სამშაბათი" },
  { key: "wednesday", label: "Wednesday", labelGe: "ოთხშაბათი" },
  { key: "thursday", label: "Thursday", labelGe: "ხუთშაბათი" },
  { key: "friday", label: "Friday", labelGe: "პარასკევი" },
  { key: "saturday", label: "Saturday", labelGe: "შაბათი" },
  { key: "sunday", label: "Sunday", labelGe: "კვირა" },
] as const;

export function ContactSection() {
  const { t } = useLanguage();
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1; // Adjust for our array (Monday = 0)

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Find Us", "მოგვძებნეთ")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("Location & Contact", "მდებარეობა და კონტაქტი")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {t("Address", "მისამართი")}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {restaurantInfo.address.full}
                  </p>
                  <a
                    href={restaurantInfo.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="cta" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {t("Get Directions", "მისამართი")}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={`tel:${restaurantInfo.phone}`} className="bg-card rounded-lg p-5 border hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t("Phone", "ტელეფონი")}</p>
                    <p className="font-medium text-foreground">{restaurantInfo.phone}</p>
                  </div>
                </div>
              </a>
              
              <a href={`https://wa.me/${restaurantInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-card rounded-lg p-5 border hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">{t("Message Us", "მოგვწერეთ")}</p>
                  </div>
                </div>
              </a>
              
              <a href={`mailto:${restaurantInfo.email}`} className="bg-card rounded-lg p-5 border hover:border-primary/30 transition-colors md:col-span-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t("Email", "ელ-ფოსტა")}</p>
                    <p className="font-medium text-foreground">{restaurantInfo.email}</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t("Opening Hours", "სამუშაო საათები")}
                </h3>
              </div>
              <div className="space-y-2">
                {days.map((day, index) => {
                  const hours = restaurantInfo.hours[day.key as keyof typeof restaurantInfo.hours];
                  const isToday = index === todayIndex;
                  
                  return (
                    <div
                      key={day.key}
                      className={cn(
                        "flex justify-between py-2 text-sm",
                        isToday && "bg-primary/5 -mx-2 px-2 rounded font-medium",
                        index !== days.length - 1 && "border-b"
                      )}
                    >
                      <span className={cn(
                        isToday ? "text-primary" : "text-muted-foreground"
                      )}>
                        {t(day.label, day.labelGe)}
                        {isToday && " ★"}
                      </span>
                      <span className={cn(
                        isToday ? "text-foreground" : "text-foreground/80"
                      )}>
                        {hours.closed ? t("Closed", "დახურულია") : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Transport Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{t("Parking", "პარკინგი")}</span>
                </div>
                <p className="text-xs text-muted-foreground">{restaurantInfo.parking}</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Train className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{t("Public Transit", "საზოგადოებრივი")}</span>
                </div>
                <p className="text-xs text-muted-foreground">{restaurantInfo.publicTransport}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-lg overflow-hidden border h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src={restaurantInfo.address.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
