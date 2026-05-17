import { useState, useEffect } from "react";
import { X, FileText, Image, Clock, Phone, MapPin, Globe, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function OwnerGuide() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "E") {
        e.preventDefault();
        setVisible(v => !v);
      }
    };
    window.addEventListener("keydown", handler);

    // Also support #admin hash
    if (window.location.hash === "#admin") setVisible(true);
    const hashHandler = () => { if (window.location.hash === "#admin") setVisible(true); };
    window.addEventListener("hashchange", hashHandler);

    return () => { window.removeEventListener("keydown", handler); window.removeEventListener("hashchange", hashHandler); };
  }, []);

  if (!visible) return null;

  const sections = [
    {
      icon: Clock,
      title: "Update Hours, Phone, Address",
      steps: [
        "Open src/data/restaurantData.ts",
        "Find the restaurantInfo object at the top",
        "Edit phone, email, address, hours fields",
        "Hours use 24h format: { open: '10:30', close: '00:00', closed: false }",
        "Set closed: true for days when restaurant is closed",
      ],
    },
    {
      icon: FileText,
      title: "Add/Edit Menu Items",
      steps: [
        "Open src/data/restaurantData.ts",
        "Find the menuItems array",
        "Each item has: id, category, name, nameGe, nameRu, description, price, currency, tags, image",
        "Category must match one of the menuCategories IDs",
        "Tags: 'signature', 'popular', 'spicy', 'vegetarian', 'vegan', 'gluten-free'",
        "For images: put files in public/menu/ and set image: '/menu/filename.jpg'",
      ],
    },
    {
      icon: Image,
      title: "Add Gallery Images",
      steps: [
        "Upload images to public/gallery/ folder",
        "Open src/data/restaurantData.ts",
        "Find the galleryImages array",
        "Replace /placeholder.svg with your image path: '/gallery/great-hall-1.jpg'",
        "Categories: great-hall, painted-hall, halls, cabins",
        "Each image needs: id, category, src, alt, caption",
      ],
    },
    {
      icon: Globe,
      title: "Update Social Links",
      steps: [
        "Open src/data/restaurantData.ts",
        "Find restaurantInfo.social object",
        "Update facebook, instagram, tripadvisor, google URLs",
      ],
    },
    {
      icon: MapPin,
      title: "Update Map",
      steps: [
        "Go to Google Maps and find your restaurant",
        "Click Share → Embed a map → Copy the src URL",
        "Open src/data/restaurantData.ts",
        "Paste into restaurantInfo.address.googleMapsEmbed",
      ],
    },
    {
      icon: Settings,
      title: "File Structure",
      steps: [
        "src/data/restaurantData.ts — ALL editable content (menu, gallery, info, reviews, FAQ)",
        "src/components/sections/ — Visual section components",
        "src/components/layout/ — Header, Footer, floating elements",
        "src/assets/ — Hero background and other images",
        "public/ — Static files (favicon, menu images, gallery images)",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-3xl mx-auto p-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-foreground">Owner Edit Guide</h2>
            <p className="text-primary-foreground/60 text-sm mt-1">Press Ctrl+Shift+E to toggle this panel</p>
          </div>
          <button onClick={() => setVisible(false)} className="p-2 text-primary-foreground/60 hover:text-primary-foreground">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <section.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">{section.title}</h3>
              </div>
              <ol className="space-y-2">
                {section.steps.map((step, j) => (
                  <li key={j} className="text-sm text-primary-foreground/80 flex gap-2">
                    <span className="text-gold font-mono text-xs mt-0.5">{j + 1}.</span>
                    <span className={cn(step.includes("src/") || step.includes("public/") ? "font-mono text-xs bg-primary-foreground/10 px-1 py-0.5 rounded" : "")}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/40 text-xs mt-8">This panel is not visible to public visitors.</p>
      </div>
    </div>
  );
}
