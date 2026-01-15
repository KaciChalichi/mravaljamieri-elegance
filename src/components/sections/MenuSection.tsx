import { useState, useMemo } from "react";
import { Search, Download, ChevronRight, Flame, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { menuCategories, menuItems, chefsPicks, MenuItem } from "@/data/restaurantData";
import { cn } from "@/lib/utils";

const dietaryFilters = [
  { id: "vegetarian", label: "Vegetarian", labelGe: "ვეგეტარიანული", icon: Leaf },
  { id: "vegan", label: "Vegan", labelGe: "ვეგანური", icon: Leaf },
  { id: "spicy", label: "Spicy", labelGe: "ცხარე", icon: Flame },
  { id: "gluten-free", label: "Gluten-Free", labelGe: "უგლუტენო", icon: null },
];

function MenuItemCard({ item }: { item: MenuItem }) {
  const { t } = useLanguage();
  
  return (
    <div className="group bg-card rounded-lg p-4 md:p-5 border border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {t(item.name, item.nameGe)}
            </h4>
            {item.tags.includes("popular") && (
              <Badge variant="secondary" className="bg-gold/20 text-gold-dark text-xs">
                <Star className="h-3 w-3 mr-1 fill-current" />
                {t("Popular", "პოპულარული")}
              </Badge>
            )}
            {item.tags.includes("signature") && (
              <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                {t("Signature", "საფირმო")}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {t(item.description, item.descriptionGe)}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {item.tags.includes("vegetarian") && (
              <span className="text-xs text-green-600 flex items-center gap-1">
                <Leaf className="h-3 w-3" /> {t("Veg", "ვეგ")}
              </span>
            )}
            {item.tags.includes("vegan") && (
              <span className="text-xs text-green-700 flex items-center gap-1">
                <Leaf className="h-3 w-3" /> {t("Vegan", "ვეგანური")}
              </span>
            )}
            {item.tags.includes("spicy") && (
              <span className="text-xs text-red-500 flex items-center gap-1">
                <Flame className="h-3 w-3" /> {t("Spicy", "ცხარე")}
              </span>
            )}
            {item.tags.includes("gluten-free") && (
              <span className="text-xs text-amber-600">GF</span>
            )}
          </div>
        </div>
        <div className="text-right">
          <span className="font-display text-xl font-bold text-primary">
            {item.price}{item.currency}
          </span>
        </div>
      </div>
    </div>
  );
}

function ChefPicksSlider() {
  const { t } = useLanguage();
  const picks = menuItems.filter(item => chefsPicks.includes(item.id));

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
          <Star className="h-5 w-5 text-gold fill-gold" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground">
          {t("Chef's Picks", "შეფ-მზარეულის არჩევანი")}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {picks.map(item => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg p-5 border border-gold/20"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-display text-lg font-semibold text-foreground">
                {t(item.name, item.nameGe)}
              </h4>
              <span className="font-display text-lg font-bold text-primary">
                {item.price}{item.currency}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t(item.description, item.descriptionGe)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MenuSection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      // Category filter
      if (item.category !== activeCategory) return false;
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        const nameGeMatch = item.nameGe?.toLowerCase().includes(query);
        if (!nameMatch && !descMatch && !nameGeMatch) return false;
      }
      
      // Dietary filters
      if (activeFilters.length > 0) {
        const hasAllFilters = activeFilters.every(filter => 
          item.tags.includes(filter as any)
        );
        if (!hasAllFilters) return false;
      }
      
      return true;
    });
  }, [activeCategory, searchQuery, activeFilters]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <section id="menu" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
            {t("Our Cuisine", "ჩვენი სამზარეულო")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("The Menu", "მენიუ")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Traditional Georgian recipes crafted with love and the finest seasonal ingredients",
              "ტრადიციული ქართული რეცეპტები, დამზადებული სიყვარულით და საუკეთესო სეზონური ინგრედიენტებით"
            )}
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
              placeholder={t("Search menu...", "მოძებნეთ მენიუში...")}
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
                {t(filter.label, filter.labelGe)}
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
                {t(category.name, category.nameGe)}
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
            <p>{t("No items found matching your criteria", "ვერაფერი მოიძებნა")}</p>
          </div>
        )}

        {/* Download Menu CTA */}
        <div className="text-center pt-8 border-t">
          <Button variant="ctaOutline" size="lg">
            <Download className="h-5 w-5 mr-2" />
            {t("Download Full Menu (PDF)", "ჩამოტვირთეთ მენიუ (PDF)")}
          </Button>
        </div>

        {/* Edit Note (hidden in production) */}
        <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-dashed border-muted-foreground/30 text-sm text-muted-foreground">
          <strong>📝 Owner Note:</strong> Replace menu items in <code>src/data/restaurantData.ts</code> - look for the <code>menuItems</code> array.
        </div>
      </div>
    </section>
  );
}
