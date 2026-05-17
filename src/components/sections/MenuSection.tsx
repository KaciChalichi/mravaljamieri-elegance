import { useState, useMemo, useRef } from "react";
import { Search, Download, ChevronLeft, ChevronRight, Flame, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { menuCategories, menuItems, MenuItem } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

const dietaryFilters = [
  { id: "vegetarian", label: "Vegetarian", labelGe: "ვეგეტარიანული", labelRu: "Вегетарианское", icon: Leaf },
  { id: "vegan", label: "Vegan", labelGe: "ვეგანური", labelRu: "Веганское", icon: Leaf },
  { id: "spicy", label: "Spicy", labelGe: "ცხარე", labelRu: "Острое", icon: Flame },
  { id: "gluten-free", label: "Gluten-Free", labelGe: "უგლუტენო", labelRu: "Без глютена", icon: null },
];

const formatPrice = (price: number) => {
  if (Number.isInteger(price)) return String(price);
  return String(price).replace(/\.0+$/g, "");
};

const formatCurrency = (currency: string) => {
  if (currency === "₾") return "GEL";
  return currency;
};

// Render numeric tokens with a clean font so decorative display fonts don't distort digits
const renderTextWithCleanNumbers = (text: string) => {
  if (!text) return text;
  const parts = text.split(/(\d+(?:[\.,]\d+)?)/g);
  return parts.map((part, idx) => {
    const isNumber = /^\d+(?:[\.,]\d+)?$/.test(part);
    return isNumber ? (
      <span key={idx} className="font-body tabular-nums lining-nums">{part}</span>
    ) : (
      <span key={idx}>{part}</span>
    );
  });
};

/* ── Chef's Picks Slider ─────────────────────────────────────────────── */

function ChefPicksSlider() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const chefPicks = useMemo(() => menuItems.filter(item => item.tags.includes("signature")).slice(0, 6), []);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  if (chefPicks.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
            ★ {t("Chef's Picks", "შეფის არჩევანი", "Выбор шефа")}
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground mt-1">
            {t("Our Signature Dishes", "ჩვენი საფირმო კერძები", "Наши фирменные блюда")}
          </h3>
        </div>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 bg-card rounded-full border hover:bg-secondary transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 bg-card rounded-full border hover:bg-secondary transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1" style={{ scrollSnapType: "x mandatory" }}>
        {chefPicks.map(item => {
          const displayName = t(item.name, item.nameGe, item.nameRu);
          const displayDesc = t(item.description, item.descriptionGe, item.descriptionRu);
          return (
            <div key={item.id} className="flex-shrink-0 w-72 bg-card rounded-lg overflow-hidden border shadow-soft group" style={{ scrollSnapAlign: "start" }}>
              <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gold text-charcoal text-xs font-semibold">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {t("Chef's Pick", "შეფის არჩევანი", "Выбор шефа")}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{renderTextWithCleanNumbers(displayName)}</h4>
                {displayDesc && <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{renderTextWithCleanNumbers(displayDesc)}</p>}
                <span className="font-body text-lg font-extrabold text-primary tabular-nums">{formatPrice(item.price)}</span>
                <span className="ml-1 font-body text-xs font-semibold text-muted-foreground">{formatCurrency(item.currency)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Menu Item Card ───────────────────────────────────────────────────── */

function MenuItemCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage();
  const displayName = t(item.name, item.nameGe, item.nameRu);
  const displayDescription = t(item.description, item.descriptionGe, item.descriptionRu);
  
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {renderTextWithCleanNumbers(displayName)}
              </h4>
              {item.tags.includes("popular") && (
                <Badge variant="secondary" className="bg-gold/20 text-gold-dark text-xs">
                  <Star className="h-3 w-3 mr-1 fill-current" />{t("Popular", "პოპულარული", "Популярное")}
                </Badge>
              )}
              {item.tags.includes("signature") && (
                <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                  {t("Signature", "საფირმო", "Фирменное")}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{renderTextWithCleanNumbers(displayDescription)}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {item.tags.includes("vegetarian") && <span className="text-xs text-green-600 flex items-center gap-1"><Leaf className="h-3 w-3" /> {t("Veg", "ვეგ", "Вег")}</span>}
              {item.tags.includes("vegan") && <span className="text-xs text-green-700 flex items-center gap-1"><Leaf className="h-3 w-3" /> {t("Vegan", "ვეგანური", "Веган")}</span>}
              {item.tags.includes("spicy") && <span className="text-xs text-red-500 flex items-center gap-1"><Flame className="h-3 w-3" /> {t("Spicy", "ცხარე", "Острое")}</span>}
              {item.tags.includes("gluten-free") && <span className="text-xs text-amber-600">GF</span>}
            </div>
          </div>
          <div className="text-right shrink-0 min-w-[80px]">
            <span className="inline-flex items-center whitespace-nowrap leading-none">
              <span className="font-body text-xl font-extrabold text-primary tabular-nums lining-nums tracking-tight">{formatPrice(item.price)}</span>
              <span className="ml-2 font-body text-xs font-semibold text-muted-foreground tracking-wide">{formatCurrency(item.currency)}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Menu Section ────────────────────────────────────────────────── */

export function MenuSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      if (item.category !== activeCategory) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        const nameGeMatch = item.nameGe?.toLowerCase().includes(query);
        const nameRuMatch = item.nameRu?.toLowerCase().includes(query);
        if (!nameMatch && !descMatch && !nameGeMatch && !nameRuMatch) return false;
      }
      if (activeFilters.length > 0) {
        const hasAllFilters = activeFilters.every(filter => item.tags.includes(filter as any));
        if (!hasAllFilters) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery, activeFilters]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => prev.includes(filterId) ? prev.filter(f => f !== filterId) : [...prev, filterId]);
  };

  return (
    <section id="menu" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Our Cuisine", "ჩვენი სამზარეულო", "Наша кухня")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("The Menu", "მენიუ", "Меню")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("Traditional Georgian recipes crafted with love and the finest seasonal ingredients", "ტრადიციული ქართული რეცეპტები, დამზადებული სიყვარულით", "Традиционные грузинские рецепты из лучших сезонных ингредиентов")}
          </p>
        </div>

        {/* Chef's Picks */}
        <ChefPicksSlider />

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("Search menu...", "მოძებნეთ მენიუში...", "Поиск по меню...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {dietaryFilters.map(filter => (
              <Button
                key={filter.id}
                variant={activeFilters.includes(filter.id) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(filter.id)}
                className="text-xs"
              >
                {filter.icon && <filter.icon className="h-3 w-3 mr-1" />}
                {t(filter.label, filter.labelGe, filter.labelRu)}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-secondary/50 p-1">
            {menuCategories.map(category => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 text-sm whitespace-nowrap"
              >
                {t(category.name, category.nameGe, category.nameRu)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>{t("No items found matching your criteria", "ვერაფერი მოიძებნა", "Ничего не найдено")}</p>
          </div>
        )}

        {/* Download Menu CTA */}
        <div className="text-center pt-8 border-t">
          <Button variant="ctaOutline" size="lg">
            <Download className="h-5 w-5 mr-2" />
            {t("Download Full Menu (PDF)", "ჩამოტვირთეთ მენიუ (PDF)", "Скачать меню (PDF)")}
          </Button>
        </div>
      </div>
    </section>
  );
}
