import { useState } from "react";
import { Calendar, Clock, Users, Phone, MessageCircle, Building, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { restaurantInfo } from "@/data/restaurantData";
import { useToast } from "@/hooks/use-toast";

export function EventsSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I'd like to make a reservation:
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Notes: ${formData.notes || "None"}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: t("Reservation Request Sent!", "ჯავშანი გაიგზავნა!"),
      description: t("We'll confirm your reservation shortly.", "მალე დაგიკავშირდებით დასადასტურებლად."),
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="events" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Reservation Form */}
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              {t("Book Your Table", "დაჯავშნეთ მაგიდა")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              {t("Make a Reservation", "ჯავშანი")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                "Fill out the form below and we'll get back to you shortly to confirm your booking.",
                "შეავსეთ ფორმა და მალე დაგიკავშირდებით დასადასტურებლად."
              )}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t("Your Name", "თქვენი სახელი")} *
                  </label>
                  <Input
                    required
                    placeholder={t("John Doe", "სახელი გვარი")}
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t("Phone Number", "ტელეფონი")} *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+995 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t("Date", "თარიღი")} *
                  </label>
                  <Input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t("Time", "დრო")} *
                  </label>
                  <Select onValueChange={(v) => handleChange("time", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("Select time", "აირჩიეთ დრო")} />
                    </SelectTrigger>
                    <SelectContent>
                      {["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map(time => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t("Guests", "სტუმარი")} *
                  </label>
                  <Select onValueChange={(v) => handleChange("guests", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("Number", "რაოდენობა")} />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+", "20+", "50+"].map(num => (
                        <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t("Special Requests", "სპეციალური მოთხოვნები")}
                </label>
                <Textarea
                  placeholder={t("Allergies, occasion, seating preferences...", "ალერგიები, შემთხვევა, სავარძლის პრეფერენციები...")}
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={3}
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                <Calendar className="h-5 w-5 mr-2" />
                {t("Submit Reservation Request", "გაგზავნეთ ჯავშანის მოთხოვნა")}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                {t("We confirm quickly – usually within 1 hour", "სწრაფად ვადასტურებთ – ჩვეულებრივ 1 საათში")}
              </p>
            </form>

            {/* Alternative contact options */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">{t("Prefer to call?", "გსურთ დარეკვა?")}</p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${restaurantInfo.phone}`}>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    {t("Call Us", "დაგვირეკეთ")}
                  </Button>
                </a>
                <a href={`https://wa.me/${restaurantInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Events Info */}
          <div>
            <div className="bg-card rounded-lg p-6 md:p-8 border mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {t("Book a Hall or Cabin", "დაჯავშნეთ დარბაზი ან კაბინა")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("For private events and celebrations", "კერძო ღონისძიებებისა და ზეიმისთვის")}
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">{t("Cabins (4-12 guests)", "კაბინები (4-12 სტუმარი)")}</span>
                  <span className="font-medium">{t("Min. 300₾", "მინ. 300₾")}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">{t("Halls (20-60 guests)", "დარბაზები (20-60 სტუმარი)")}</span>
                  <span className="font-medium">{t("Min. 1000₾", "მინ. 1000₾")}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">{t("Great Hall (50-200 guests)", "დიდი დარბაზი (50-200 სტუმარი)")}</span>
                  <span className="font-medium">{t("Min. 3000₾", "მინ. 3000₾")}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * {t("Minimum spend applies to food and beverages", "მინიმალური ხარჯი ვრცელდება კერძებსა და სასმელებზე")}
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Utensils className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {t("Catering & Corporate", "კეითერინგი და კორპორატივი")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("We bring the feast to you", "ზეიმს თქვენთან მოვიტანთ")}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {t(
                  "Planning a corporate event or need catering for your special occasion? Contact us for a custom menu and quote.",
                  "გეგმავთ კორპორატიულ ღონისძიებას ან გჭირდებათ კეითერინგი? დაგვიკავშირდით ინდივიდუალური მენიუსა და შეთავაზებისთვის."
                )}
              </p>
              <a href={`mailto:${restaurantInfo.email}?subject=Catering Inquiry`}>
                <Button variant="outline" className="w-full">
                  {t("Inquire About Catering", "შეიტყვეთ კეითერინგზე")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
