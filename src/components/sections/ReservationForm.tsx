import { useState } from "react";
import { Calendar, Clock, Users, User, Phone, MessageSquare, Send, Check, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { restaurantInfo } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

const timeSlots = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 30, 50];

export function ReservationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    phone: "",
    note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t("Name is required", "სახელი აუცილებელია", "Имя обязательно");
    if (!formData.phone.trim()) newErrors.phone = t("Phone is required", "ტელეფონი აუცილებელია", "Телефон обязателен");
    if (!formData.date) newErrors.date = t("Select a date", "აირჩიეთ თარიღი", "Выберите дату");
    if (!formData.time) newErrors.time = t("Select a time", "აირჩიეთ დრო", "Выберите время");
    if (!formData.guests) newErrors.guests = t("Select guests", "აირჩიეთ სტუმრები", "Выберите гостей");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMessage = () => {
    return `Reservation Request — Mravaljamieri\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\n${formData.note ? `Note: ${formData.note}` : ""}`;
  };

  const handleEmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Reservation — ${formData.name} — ${formData.date}`);
    const body = encodeURIComponent(buildMessage());
    window.open(`mailto:${restaurantInfo.email}?subject=${subject}&body=${body}`, "_self");
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${text}`, "_blank");
    setIsSubmitted(true);
  };

  const handleCall = () => {
    window.open(`tel:${restaurantInfo.phone}`, "_self");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

  // Get today's date in YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg p-8 md:p-10 border text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          {t("Request Sent!", "მოთხოვნა გაიგზავნა!", "Запрос отправлен!")}
        </h3>
        <p className="text-muted-foreground mb-6">
          {t(
            "We'll contact you shortly to confirm your reservation.",
            "მალე დაგიკავშირდებით დასადასტურებლად.",
            "Мы свяжемся с вами в ближайшее время для подтверждения."
          )}
        </p>
        <Button variant="ctaOutline" onClick={() => { setIsSubmitted(false); setFormData({ date: "", time: "", guests: "", name: "", phone: "", note: "" }); }}>
          {t("Make Another Reservation", "ახალი ჯავშანი", "Новое бронирование")}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 border">
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        {t("Reserve Your Table", "დაჯავშნეთ მაგიდა", "Забронируйте столик")}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        {t(
          "Fill in your details and we'll confirm within 30 minutes.",
          "შეავსეთ ინფორმაცია და ჩვენ დავადასტურებთ 30 წუთში.",
          "Заполните данные, и мы подтвердим в течение 30 минут."
        )}
      </p>

      <div className="space-y-4">
        {/* Date & Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              {t("Date", "თარიღი", "Дата")} *
            </label>
            <Input
              type="date"
              min={today}
              value={formData.date}
              onChange={e => handleChange("date", e.target.value)}
              className={cn(errors.date && "border-red-500")}
            />
            {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {t("Time", "დრო", "Время")} *
            </label>
            <select
              value={formData.time}
              onChange={e => handleChange("time", e.target.value)}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                errors.time && "border-red-500"
              )}
            >
              <option value="">{t("Select time", "აირჩიეთ დრო", "Выберите время")}</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1.5">
            <Users className="h-4 w-4 text-primary" />
            {t("Number of Guests", "სტუმრების რაოდენობა", "Количество гостей")} *
          </label>
          <select
            value={formData.guests}
            onChange={e => handleChange("guests", e.target.value)}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              errors.guests && "border-red-500"
            )}
          >
            <option value="">{t("Select", "აირჩიეთ", "Выберите")}</option>
            {guestOptions.map(n => (
              <option key={n} value={n}>{n} {t("guests", "სტუმარი", "гостей")}</option>
            ))}
            <option value="50+">{t("50+ (contact us)", "50+ (დაგვიკავშირდით)", "50+ (свяжитесь)")}</option>
          </select>
          {errors.guests && <p className="text-xs text-red-500 mt-1">{errors.guests}</p>}
        </div>

        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1.5">
              <User className="h-4 w-4 text-primary" />
              {t("Your Name", "თქვენი სახელი", "Ваше имя")} *
            </label>
            <Input
              type="text"
              placeholder={t("Full name", "სახელი და გვარი", "Полное имя")}
              value={formData.name}
              onChange={e => handleChange("name", e.target.value)}
              className={cn(errors.name && "border-red-500")}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1.5">
              <Phone className="h-4 w-4 text-primary" />
              {t("Phone", "ტელეფონი", "Телефон")} *
            </label>
            <Input
              type="tel"
              placeholder="+995 ..."
              value={formData.phone}
              onChange={e => handleChange("phone", e.target.value)}
              className={cn(errors.phone && "border-red-500")}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-1.5">
            <MessageSquare className="h-4 w-4 text-primary" />
            {t("Special Requests", "სპეციალური მოთხოვნები", "Пожелания")}
          </label>
          <textarea
            placeholder={t(
              "Allergies, birthday, occasion, seating preference...",
              "ალერგიები, დაბადების დღე, ადგილის სურვილი...",
              "Аллергии, день рождения, повод, предпочтения..."
            )}
            value={formData.note}
            onChange={e => handleChange("note", e.target.value)}
            rows={3}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
          />
        </div>

        {/* Submit Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <Button variant="cta" className="w-full" onClick={handleEmail}>
            <Mail className="h-4 w-4" />
            {t("Send Email", "ელ-ფოსტა", "Эл. почта")}
          </Button>
          <Button variant="default" className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleWhatsApp}>
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          <Button variant="ctaOutline" className="w-full" onClick={handleCall}>
            <Phone className="h-4 w-4" />
            {t("Call Now", "დარეკვა", "Позвонить")}
          </Button>
        </div>

        {/* Or use online booking */}
        <div className="text-center pt-2">
          <a
            href="https://rezto.ge/reservation/restaurantmravaljamieri?rwg_token=AFd1xnFRJQKX2f3QGLZpBu14jadt7R7E5x-UEK2wS81evWbYP-wd3wqHLbHoOsO45h2Hx4HJ9YEl2iBcx58lACcjNj2SkHDk2xs43_O6hLXNg-YbUOSMbgY%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            <Send className="h-3 w-3" />
            {t("Or reserve online via Rezto.ge", "ან დაჯავშნეთ ონლაინ Rezto.ge-ზე", "Или забронируйте онлайн на Rezto.ge")}
          </a>
        </div>

        {/* Trust */}
        <p className="text-center text-xs text-muted-foreground pt-1">
          ✓ {t("We confirm reservations quickly — usually within 30 minutes", "ჩვენ ჯავშანს სწრაფად ვადასტურებთ — ჩვეულებრივ 30 წუთში", "Мы подтверждаем бронирование быстро — обычно в течение 30 минут")}
        </p>
      </div>
    </div>
  );
}
