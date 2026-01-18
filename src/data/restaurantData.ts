// ============================================
// RESTAURANT DATA - EDIT THIS FILE TO UPDATE CONTENT
// ============================================
// This file contains all editable content for the restaurant website.
// Replace placeholder values with your actual information.

export const restaurantInfo = {
  name: "Mravaljamieri",
  tagline: "Georgian Tradition, Served Beautifully",
  taglineGe: "ქართული ტრადიცია, მშვენივრად მირთმეული",
  taglineRu: "Грузинская традиция, красиво поданная",
  description: "Seasonal dishes, warm halls, and the kind of hospitality you remember.",
  descriptionGe: "სეზონური კერძები, თბილი დარბაზები და ის სტუმართმოყვარეობა, რომელსაც ახსოვხართ.",
  descriptionRu: "Сезонные блюда, тёплые залы и гостеприимство, которое запоминается.",

  // Contact Information
  phone: "+995 570 20 03 00",
  whatsapp: "995570200300", // WhatsApp number without spaces or +
  email: "mravaljamieri0ffice@gmail.com",

  // Address
  address: {
    street: "Tbilisi",
    city: "Tbilisi",
    country: "Georgia",
    postalCode: "",
    full: "Tbilisi, Georgia",
    googleMapsUrl: "https://maps.app.goo.gl/G8m3BR73f2XQyX1E9",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.23251511832!2d44.7732729!3d41.7370774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472ec0f6ae42b%3A0xa59ba012fddb9757!2sMravaljamieri!5e0!3m2!1sen!2sge!4v1768678656806!5m2!1sen!2sge",
  },

  // Hours - 10:30 AM to 12:00 AM (midnight)
  hours: {
    monday: { open: "10:30", close: "00:00", closed: false },
    tuesday: { open: "10:30", close: "00:00", closed: false },
    wednesday: { open: "10:30", close: "00:00", closed: false },
    thursday: { open: "10:30", close: "00:00", closed: false },
    friday: { open: "10:30", close: "00:00", closed: false },
    saturday: { open: "10:30", close: "00:00", closed: false },
    sunday: { open: "10:30", close: "00:00", closed: false },
  },

  // Social Links - Real accounts
  social: {
    facebook: "https://www.facebook.com/www.mravaljamier.ge",
    instagram: "https://www.instagram.com/restaurant_mravaljamieri",
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-g294195-d7271547-Reviews-Mravaljamieri-Tbilisi.html?m=69573",
    google: "https://maps.app.goo.gl/G8m3BR73f2XQyX1E9",
  },

  // Reviews placeholder - based on TripAdvisor
  rating: 4.5,
  reviewCount: 182,
  googleReviewsUrl: "https://maps.app.goo.gl/G8m3BR73f2XQyX1E9",

  // Parking info
  parking: "Free parking available on premises",
  parkingGe: "უფასო პარკინგი ტერიტორიაზე",
  parkingRu: "Бесплатная парковка на территории",
  publicTransport: "Accessible by public transport",
  publicTransportGe: "ხელმისაწვდომია საზოგადოებრივი ტრანსპორტით",
  publicTransportRu: "Доступен общественным транспортом",
};

// Menu Categories - DO NOT CHANGE THE ORDER OR IDS
export const menuCategories = [
  { id: "gourmets", name: "Food for Gourmets", nameGe: "გურმანთათვის", nameRu: "Для гурманов" },
  { id: "cold-salads", name: "Cold Dishes and Salads", nameGe: "ცივი კერძები და სალათები", nameRu: "Холодные блюда и салаты" },
  { id: "cold-dishes", name: "Cold Dishes", nameGe: "ცივი კერძები", nameRu: "Холодные блюда" },
  { id: "soups", name: "Soups", nameGe: "წვნიანები", nameRu: "Супы" },
  { id: "baked", name: "Baked", nameGe: "გამომცხვარი", nameRu: "Выпечка" },
] as const;

export type MenuCategoryId = (typeof menuCategories)[number]["id"];

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: string;
  nameGe?: string;
  nameRu?: string;
  description: string;
  descriptionGe?: string;
  descriptionRu?: string;
  price: number;
  currency: string;
  tags: ("signature" | "spicy" | "vegetarian" | "vegan" | "gluten-free" | "popular")[];
  image: string;
}

// Menu Items - REPLACE PLACEHOLDERS WITH REAL ITEMS
export const menuItems: MenuItem[] = [
  // ═══════════════════════════════════════════════════════════════
  // FOOD FOR GOURMETS
  // ═══════════════════════════════════════════════════════════════

  // PHOTO FOR MRAVALJAMIERI - Restaurant's signature dish
  {
    id: "g1-mravaljamieri",
    category: "gourmets",
    name: "Mravaljamieri",
    nameGe: "მრავალჟამიერი",
    nameRu: "Мравалжамиери",
    description: "Pyramid from juicy kebab (Pork, veal, chicken, vegetables, fried quail)",
    descriptionGe: "ცვრიანი მწვადების პირამიდა (ღორის მწვადი; ხბოს მწვადი; ქათმის მწვადი; ბოსტნეულის მწვადი; ქაბაბი; შემწვარი მწყერი)",
    descriptionRu: "Пирамида из сочного шашлыка (свинина, телятина, курица, овощи, кабаб, жареная перепелка)",
    price: 119, // PRICE: Mravaljamieri - 119 GEL
    currency: "₾",
    tags: ["signature"],
    image: "/placeholder.svg", // REPLACE: Photo for Mravaljamieri
  },

  // PHOTO FOR KHARACHOGLURI - Three types of grilled barbecue
  {
    id: "g2-kharachogluri",
    category: "gourmets",
    name: "Kharachogluri",
    nameGe: "ყარაჩოღლური",
    nameRu: "Карачоглури",
    description: "Three types of grilled barbecue (chicken, veal, pork) served on clay brazier",
    descriptionGe: "სამი სახის მწვადი შემწვარი მაყალზე (ქათმის; ღორის და ხბოს მწვადი)",
    descriptionRu: "Шашлык трёх видов (курица, телятина, свинина) подаётся на глиняном мангале",
    price: 77, // PRICE: Kharachogluri - 77 GEL
    currency: "₾",
    tags: ["signature"],
    image: "/placeholder.svg", // REPLACE: Photo for Kharachogluri
  },

  // PHOTO FOR SAJI VEAL - Tender veal with vegetables
  {
    id: "g3-saji-veal",
    category: "gourmets",
    name: "Saji (Veal)",
    nameGe: "საჯი ხბოს",
    nameRu: "Саджи (телятина)",
    description: "Tender pieces of veal cooked with vegetables and fruit",
    descriptionGe: "ხბოს ხორცი მომზადებული საჯზე, შემწვარ ბოსტნეულთან და ხილთან ერთად",
    descriptionRu: "Мясо телятина приготовленная на саджи с овощами и фруктами",
    price: 97, // PRICE: Saji Veal - 97 GEL
    currency: "₾",
    tags: ["signature"],
    image: "/placeholder.svg", // REPLACE: Photo for Saji Veal
  },

  // PHOTO FOR SAJI CHICKEN - Tender chicken with vegetables
  {
    id: "g4-saji-chicken",
    category: "gourmets",
    name: "Saji (Chicken)",
    nameGe: "საჯი ქათმის",
    nameRu: "Саджи (курица)",
    description: "Tender pieces of chicken cooked with vegetables and fruit",
    descriptionGe: "ქათმის ხორცი მომზადებული საჯზე, შემწვარ ბოსტნეულთან და ხილთან ერთად",
    descriptionRu: "Куринное мясо приготовленная на саджи с овощами и фруктами",
    price: 76, // PRICE: Saji Chicken - 76 GEL
    currency: "₾",
    tags: ["popular"],
    image: "/placeholder.svg", // REPLACE: Photo for Saji Chicken
  },

  // PHOTO FOR TROUT DUKE - Premium trout dish
  {
    id: "g5-trout-duke",
    category: "gourmets",
    name: "Trout Duke",
    nameGe: "კალმახი ჰერცოგულად",
    nameRu: "Форель по Герцогський",
    description: "", // No description provided
    descriptionGe: "",
    descriptionRu: "",
    price: 56, // PRICE: Trout Duke - 56 GEL
    currency: "₾",
    tags: [],
    image: "/placeholder.svg", // REPLACE: Photo for Trout Duke
  },

  // PHOTO FOR THAI CHICKEN - Thai-style chicken
  {
    id: "g6-thai-chicken",
    category: "gourmets",
    name: "Thai Chicken",
    nameGe: "ქათამი ტაილანდურად",
    nameRu: "Цыпленок по Тайский",
    description: "", // No description provided
    descriptionGe: "",
    descriptionRu: "",
    price: 62, // PRICE: Thai Chicken - 62 GEL
    currency: "₾",
    tags: ["spicy"],
    image: "/placeholder.svg", // REPLACE: Photo for Thai Chicken
  },

  // PHOTO FOR VEAL ON CLAY PAN - Veal with signature sauce
  {
    id: "g7-veal-clay-pan",
    category: "gourmets",
    name: "Veal on Clay Pan",
    nameGe: "ხბო კეცზე საფირმო სოუსით",
    nameRu: "Телятина в фирменном соусе",
    description: "", // No description provided
    descriptionGe: "",
    descriptionRu: "",
    price: 35, // PRICE: Veal on Clay Pan - 35 GEL
    currency: "₾",
    tags: ["signature"],
    image: "/placeholder.svg", // REPLACE: Photo for Veal on Clay Pan
  },

  // COLD DISHES AND SALADS
  {
    id: "cs1",
    category: "cold-salads",
    name: "Pkhali Trio",
    nameGe: "ფხალის ტრიო",
    nameRu: "Трио пхали",
    description: "Three varieties of vegetable pâté with walnut paste",
    descriptionGe: "სამი სახეობის ბოსტნეულის ფხალი ნიგვზის პასტით",
    descriptionRu: "Три вида овощного паштета с ореховой пастой",
    price: 18,
    currency: "₾",
    tags: ["vegetarian", "vegan", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "cs2",
    category: "cold-salads",
    name: "Georgian Salad",
    nameGe: "ქართული სალათა",
    nameRu: "Грузинский салат",
    description: "Fresh tomatoes, cucumbers, onions with walnut dressing",
    descriptionGe: "ახალი პომიდვრები, კიტრი, ხახვი ნიგვზის სოუსით",
    descriptionRu: "Свежие помидоры, огурцы, лук с ореховой заправкой",
    price: 16,
    currency: "₾",
    tags: ["vegetarian", "vegan", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "cs3",
    category: "cold-salads",
    name: "Eggplant Rolls",
    nameGe: "ბადრიჯნის რულეტი",
    nameRu: "Рулетики из баклажанов",
    description: "Grilled eggplant with walnut-garlic filling",
    descriptionGe: "შემწვარი ბადრიჯანი ნიგვზისა და ნივრის შიგთავსით",
    descriptionRu: "Жареные баклажаны с орехово-чесночной начинкой",
    price: 20,
    currency: "₾",
    tags: ["vegetarian", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "cs4",
    category: "cold-salads",
    name: "Spinach Pkhali",
    nameGe: "ისპანახის ფხალი",
    nameRu: "Пхали из шпината",
    description: "Spinach with walnut paste and pomegranate",
    descriptionGe: "ისპანახი ნიგვზის პასტითა და ბროწეულით",
    descriptionRu: "Шпинат с ореховой пастой и гранатом",
    price: 15,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "cs5",
    category: "cold-salads",
    name: "Beet Pkhali",
    nameGe: "ჭარხლის ფხალი",
    nameRu: "Пхали из свёклы",
    description: "Beetroot with aromatic walnut paste",
    descriptionGe: "ჭარხალი არომატული ნიგვზის პასტით",
    descriptionRu: "Свёкла с ароматной ореховой пастой",
    price: 15,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "cs6",
    category: "cold-salads",
    name: "Mixed Greens",
    nameGe: "შერეული მწვანილი",
    nameRu: "Микс зелени",
    description: "Seasonal herbs and greens from local farms",
    descriptionGe: "სეზონური მწვანილები ადგილობრივი ფერმებიდან",
    descriptionRu: "Сезонная зелень с местных ферм",
    price: 12,
    currency: "₾",
    tags: ["vegetarian", "vegan", "gluten-free"],
    image: "/placeholder.svg",
  },

  // COLD DISHES
  {
    id: "cd1",
    category: "cold-dishes",
    name: "Assorted Cheese Plate",
    nameGe: "ყველის ასორტი",
    nameRu: "Сырная тарелка ассорти",
    description: "Selection of Georgian cheeses with honey and walnuts",
    descriptionGe: "ქართული ყველების არჩევანი თაფლითა და ნიგვზით",
    descriptionRu: "Ассорти грузинских сыров с мёдом и орехами",
    price: 28,
    currency: "₾",
    tags: ["vegetarian", "gluten-free", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "cd2",
    category: "cold-dishes",
    name: "Sulguni Rolls",
    nameGe: "სულგუნის რულეტი",
    nameRu: "Рулетики из сулугуни",
    description: "Smoked cheese rolls with fresh herbs",
    descriptionGe: "შებოლილი ყველის რულეტი ახალი მწვანილებით",
    descriptionRu: "Рулетики из копчёного сыра со свежей зеленью",
    price: 22,
    currency: "₾",
    tags: ["vegetarian", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "cd3",
    category: "cold-dishes",
    name: "Nadughi",
    nameGe: "ნადუღი",
    nameRu: "Надуги",
    description: "Fresh cottage cheese wrapped in sulguni",
    descriptionGe: "ახალი ხაჭო გახვეული სულგუნში",
    descriptionRu: "Свежий творог, завёрнутый в сулугуни",
    price: 18,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
  {
    id: "cd4",
    category: "cold-dishes",
    name: "Jonjoli",
    nameGe: "ჯონჯოლი",
    nameRu: "Джонджоли",
    description: "Pickled blossoms, a Georgian delicacy",
    descriptionGe: "დამარინადებული ყვავილები, ქართული დელიკატესი",
    descriptionRu: "Маринованные соцветия, грузинский деликатес",
    price: 14,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "cd5",
    category: "cold-dishes",
    name: "Mchadi with Cheese",
    nameGe: "მჭადი ყველით",
    nameRu: "Мчади с сыром",
    description: "Cornbread served with fresh cheese",
    descriptionGe: "სიმინდის პური ახალი ყველით",
    descriptionRu: "Кукурузная лепёшка со свежим сыром",
    price: 16,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
  {
    id: "cd6",
    category: "cold-dishes",
    name: "Georgian Pickles",
    nameGe: "ქართული მჟავეები",
    nameRu: "Грузинские соленья",
    description: "Assortment of traditional pickled vegetables",
    descriptionGe: "ტრადიციული დამარინადებული ბოსტნეულის ასორტი",
    descriptionRu: "Ассорти традиционных маринованных овощей",
    price: 12,
    currency: "₾",
    tags: ["vegetarian", "vegan", "gluten-free"],
    image: "/placeholder.svg",
  },

  // SOUPS
  {
    id: "s1",
    category: "soups",
    name: "Kharcho",
    nameGe: "ხარჩო",
    nameRu: "Харчо",
    description: "Rich beef soup with rice, walnuts, and tkemali",
    descriptionGe: "მდიდარი საქონლის წვნიანი ბრინჯით, ნიგვზითა და ტყემალით",
    descriptionRu: "Наваристый говяжий суп с рисом, орехами и ткемали",
    price: 18,
    currency: "₾",
    tags: ["spicy", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "s2",
    category: "soups",
    name: "Chikhirtma",
    nameGe: "ჩიხირთმა",
    nameRu: "Чихиртма",
    description: "Traditional chicken soup with egg and vinegar",
    descriptionGe: "ტრადიციული ქათმის წვნიანი კვერცხითა და ძმრით",
    descriptionRu: "Традиционный куриный суп с яйцом и уксусом",
    price: 16,
    currency: "₾",
    tags: ["gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "s3",
    category: "soups",
    name: "Lobio Soup",
    nameGe: "ლობიოს წვნიანი",
    nameRu: "Суп из лобио",
    description: "Hearty bean soup with fresh herbs",
    descriptionGe: "მდიდარი ლობიოს წვნიანი ახალი მწვანილებით",
    descriptionRu: "Наваристый фасолевый суп со свежей зеленью",
    price: 14,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "s4",
    category: "soups",
    name: "Matsoni Soup",
    nameGe: "მაწვნის წვნიანი",
    nameRu: "Суп из мацони",
    description: "Cold yogurt soup with fresh cucumbers",
    descriptionGe: "ცივი მაწვნის წვნიანი ახალი კიტრით",
    descriptionRu: "Холодный йогуртовый суп со свежими огурцами",
    price: 12,
    currency: "₾",
    tags: ["vegetarian", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "s5",
    category: "soups",
    name: "Beef Broth",
    nameGe: "საქონლის ბულიონი",
    nameRu: "Говяжий бульон",
    description: "Clear beef broth with fresh herbs",
    descriptionGe: "გამჭვირვალე საქონლის ბულიონი ახალი მწვანილებით",
    descriptionRu: "Прозрачный говяжий бульон со свежей зеленью",
    price: 15,
    currency: "₾",
    tags: ["gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "s6",
    category: "soups",
    name: "Chicken Bouillon",
    nameGe: "ქათმის ბულიონი",
    nameRu: "Куриный бульон",
    description: "Light chicken soup with vermicelli",
    descriptionGe: "მსუბუქი ქათმის წვნიანი ვერმიშელით",
    descriptionRu: "Лёгкий куриный суп с вермишелью",
    price: 14,
    currency: "₾",
    tags: [],
    image: "/placeholder.svg",
  },

  // BAKED
  {
    id: "b1",
    category: "baked",
    name: "Imeruli Khachapuri",
    nameGe: "იმერული ხაჭაპური",
    nameRu: "Имерули хачапури",
    description: "Classic cheese-filled bread from Imereti region",
    descriptionGe: "კლასიკური ყველით სავსე პური იმერეთის რეგიონიდან",
    descriptionRu: "Классический хлеб с сыром из региона Имерети",
    price: 22,
    currency: "₾",
    tags: ["vegetarian", "signature"],
    image: "/placeholder.svg",
  },
  {
    id: "b2",
    category: "baked",
    name: "Megruli Khachapuri",
    nameGe: "მეგრული ხაჭაპური",
    nameRu: "Мегрельский хачапури",
    description: "Double-cheese khachapuri, baked with cheese on top",
    descriptionGe: "ორმაგი ყველით ხაჭაპური, გამომცხვარი ყველით ზემოდან",
    descriptionRu: "Хачапури с двойным сыром, запечённый с сыром сверху",
    price: 26,
    currency: "₾",
    tags: ["vegetarian", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "b3",
    category: "baked",
    name: "Lobiani",
    nameGe: "ლობიანი",
    nameRu: "Лобиани",
    description: "Bean-filled bread with aromatic spices",
    descriptionGe: "ლობიოთი სავსე პური არომატული სუნელებით",
    descriptionRu: "Лепёшка с фасолью и ароматными специями",
    price: 18,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "b4",
    category: "baked",
    name: "Kubdari",
    nameGe: "კუბდარი",
    nameRu: "Кубдари",
    description: "Meat-filled bread from Svaneti",
    descriptionGe: "ხორცით სავსე პური სვანეთიდან",
    descriptionRu: "Лепёшка с мясом из Сванетии",
    price: 28,
    currency: "₾",
    tags: ["signature", "spicy"],
    image: "/placeholder.svg",
  },
  {
    id: "b5",
    category: "baked",
    name: "Achma",
    nameGe: "აჩმა",
    nameRu: "Ачма",
    description: "Layered cheese bread, baked to perfection",
    descriptionGe: "ფენოვანი ყველიანი პური, სრულყოფილად გამომცხვარი",
    descriptionRu: "Слоёный сырный хлеб, идеально запечённый",
    price: 24,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
  {
    id: "b6",
    category: "baked",
    name: "Penovani",
    nameGe: "ფენოვანი",
    nameRu: "Пеновани",
    description: "Puff pastry filled with cheese",
    descriptionGe: "ფენოვანი ცომი ყველით სავსე",
    descriptionRu: "Слоёное тесто с сырной начинкой",
    price: 20,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
];


// Gallery Categories - DO NOT CHANGE THE ORDER
export const galleryCategories = [
  { id: "great-hall", name: "Great Hall", nameGe: "დიდი დარბაზი", nameRu: "Большой зал" },
  { id: "painted-hall", name: "Painted Hall", nameGe: "მოხატული დარბაზი", nameRu: "Расписной зал" },
  { id: "halls", name: "Halls", nameGe: "დარბაზები", nameRu: "Залы" },
  { id: "cabins", name: "Cabins", nameGe: "კაბინები", nameRu: "Кабинеты" },
] as const;

export type GalleryCategoryId = (typeof galleryCategories)[number]["id"];

export interface GalleryImage {
  id: string;
  category: GalleryCategoryId;
  src: string;
  alt: string;
  caption?: string;
}

// Gallery Images - REPLACE PLACEHOLDERS WITH REAL IMAGES
export const galleryImages: GalleryImage[] = [
  // GREAT HALL
  {
    id: "gh1",
    category: "great-hall",
    src: "/placeholder.svg",
    alt: "Great Hall overview",
    caption: "The magnificent Great Hall",
  },
  {
    id: "gh2",
    category: "great-hall",
    src: "/placeholder.svg",
    alt: "Great Hall tables",
    caption: "Elegant table settings",
  },
  {
    id: "gh3",
    category: "great-hall",
    src: "/placeholder.svg",
    alt: "Great Hall chandelier",
    caption: "Historic chandelier",
  },
  { id: "gh4", category: "great-hall", src: "/placeholder.svg", alt: "Great Hall entrance", caption: "Grand entrance" },
  {
    id: "gh5",
    category: "great-hall",
    src: "/placeholder.svg",
    alt: "Great Hall detail",
    caption: "Architectural details",
  },
  { id: "gh6", category: "great-hall", src: "/placeholder.svg", alt: "Great Hall event", caption: "Special events" },
  { id: "gh7", category: "great-hall", src: "/placeholder.svg", alt: "Great Hall decor", caption: "Traditional decor" },
  { id: "gh8", category: "great-hall", src: "/placeholder.svg", alt: "Great Hall night", caption: "Evening ambiance" },

  // PAINTED HALL
  {
    id: "ph1",
    category: "painted-hall",
    src: "/placeholder.svg",
    alt: "Painted Hall murals",
    caption: "Historic murals",
  },
  {
    id: "ph2",
    category: "painted-hall",
    src: "/placeholder.svg",
    alt: "Painted Hall ceiling",
    caption: "Painted ceiling",
  },
  {
    id: "ph3",
    category: "painted-hall",
    src: "/placeholder.svg",
    alt: "Painted Hall tables",
    caption: "Intimate dining",
  },
  {
    id: "ph4",
    category: "painted-hall",
    src: "/placeholder.svg",
    alt: "Painted Hall art",
    caption: "Georgian artistry",
  },
  { id: "ph5", category: "painted-hall", src: "/placeholder.svg", alt: "Painted Hall corner", caption: "Cozy corner" },
  {
    id: "ph6",
    category: "painted-hall",
    src: "/placeholder.svg",
    alt: "Painted Hall window",
    caption: "Natural light",
  },
  {
    id: "ph7",
    category: "painted-hall",
    src: "/placeholder.svg",
    alt: "Painted Hall detail",
    caption: "Artistic details",
  },
  { id: "ph8", category: "painted-hall", src: "/placeholder.svg", alt: "Painted Hall view", caption: "Full view" },

  // HALLS
  { id: "h1", category: "halls", src: "/placeholder.svg", alt: "Main dining hall", caption: "Main dining area" },
  { id: "h2", category: "halls", src: "/placeholder.svg", alt: "Private hall", caption: "Private gatherings" },
  { id: "h3", category: "halls", src: "/placeholder.svg", alt: "Event hall", caption: "Event space" },
  { id: "h4", category: "halls", src: "/placeholder.svg", alt: "Celebration hall", caption: "Celebrations" },
  { id: "h5", category: "halls", src: "/placeholder.svg", alt: "Party hall", caption: "Party setup" },
  { id: "h6", category: "halls", src: "/placeholder.svg", alt: "Banquet hall", caption: "Banquet style" },
  { id: "h7", category: "halls", src: "/placeholder.svg", alt: "Reception area", caption: "Reception area" },
  { id: "h8", category: "halls", src: "/placeholder.svg", alt: "Lounge area", caption: "Lounge space" },

  // CABINS
  { id: "c1", category: "cabins", src: "/placeholder.svg", alt: "Private cabin", caption: "Intimate cabin" },
  { id: "c2", category: "cabins", src: "/placeholder.svg", alt: "Cabin interior", caption: "Cabin interior" },
  { id: "c3", category: "cabins", src: "/placeholder.svg", alt: "Cozy cabin", caption: "Cozy atmosphere" },
  { id: "c4", category: "cabins", src: "/placeholder.svg", alt: "Cabin dining", caption: "Private dining" },
  { id: "c5", category: "cabins", src: "/placeholder.svg", alt: "Family cabin", caption: "Family gatherings" },
  { id: "c6", category: "cabins", src: "/placeholder.svg", alt: "VIP cabin", caption: "VIP cabin" },
  { id: "c7", category: "cabins", src: "/placeholder.svg", alt: "Romantic cabin", caption: "Romantic setting" },
  { id: "c8", category: "cabins", src: "/placeholder.svg", alt: "Traditional cabin", caption: "Traditional style" },
];

// Halls/Atmosphere Cards
export const hallCards = [
  {
    id: "great-hall",
    title: "Great Hall",
    titleGe: "დიდი დარბაზი",
    titleRu: "Большой зал",
    description: "Grand celebrations for up to 200 guests",
    descriptionGe: "დიდი ზეიმი 200 სტუმრამდე",
    descriptionRu: "Грандиозные торжества до 200 гостей",
    capacity: "100-300",
    image: "/placeholder.svg",
  },
  {
    id: "painted-hall",
    title: "Painted Hall",
    titleGe: "მოხატული დარბაზი",
    titleRu: "Расписной зал",
    description: "Historic murals and intimate gatherings",
    descriptionGe: "ისტორიული ფრესკები და ინტიმური შეკრებები",
    descriptionRu: "Исторические фрески и уютные собрания",
    capacity: "20-60",
    image: "/placeholder.svg",
  },
  {
    id: "halls",
    title: "Halls",
    titleGe: "დარბაზები",
    titleRu: "Залы",
    description: "Versatile spaces for any occasion",
    descriptionGe: "მრავალმხრივი სივრცეები ნებისმიერი შემთხვევისთვის",
    descriptionRu: "Универсальные пространства для любого повода",
    capacity: "30-100",
    image: "/placeholder.svg",
  },
  {
    id: "cabins",
    title: "Cabins",
    titleGe: "კაბინები",
    titleRu: "Кабинеты",
    description: "Private dining for intimate moments",
    descriptionGe: "კერძო სადილი განსაკუთრებული მომენტებისთვის",
    descriptionRu: "Приватный ужин для особых моментов",
    capacity: "4-12",
    image: "/placeholder.svg",
  },
];

// Features/Highlights
export const highlights = [
  {
    icon: "ChefHat",
    title: "Chef's Specials",
    titleGe: "შეფ-მზარეულის სპეციალი",
    titleRu: "Блюда от шефа",
    description: "Daily creations from our kitchen",
    descriptionGe: "ახალი კერძები ყოველდღე ჩვენი სამზარეულოდან",
    descriptionRu: "Ежедневные творения нашей кухни",
  },
  {
    icon: "Home",
    title: "Private Cabins",
    titleGe: "კერძო კაბინები",
    titleRu: "Приватные кабинеты",
    description: "Intimate dining experiences",
    descriptionGe: "უშფოთველი სადილი მყუდრო გარემოში",
    descriptionRu: "Уютная обстановка для особых моментов",
  },
  {
    icon: "Building",
    title: "Great Hall Celebrations",
    titleGe: "დიდი დარბაზის ზეიმი",
    titleRu: "Торжества в Большом зале",
    description: "Events up to 200 guests",
    descriptionGe: "ღონისძიებები 200 სტუმრამდე",
    descriptionRu: "Мероприятия до 200 гостей",
  },
  {
    icon: "Leaf",
    title: "Seasonal Ingredients",
    titleGe: "სეზონური ინგრედიენტები",
    titleRu: "Сезонные ингредиенты",
    description: "Farm-fresh produce daily",
    descriptionGe: "ფერმერული ახალი პროდუქტები ყოველდღე",
    descriptionRu: "Свежие фермерские продукты ежедневно",
  },
  {
    icon: "Music",
    title: "Live Music",
    titleGe: "ცოცხალი მუსიკა",
    titleRu: "Живая музыка",
    description: "Traditional performances",
    descriptionGe: "ტრადიციული წარმოდგენები",
    descriptionRu: "Традиционные выступления",
  },
  {
    icon: "Users",
    title: "Group Dining",
    titleGe: "ჯგუფური სადილი",
    titleRu: "Групповые обеды",
    description: "Perfect for celebrations",
    descriptionGe: "იდეალურია ზეიმისთვის",
    descriptionRu: "Идеально для торжеств",
  },
];

// FAQ Items
export const faqItems = [
  {
    question: "Do you take reservations?",
    questionGe: "იღებთ ჯავშანს?",
    questionRu: "Вы принимаете бронирование?",
    answer:
      "Yes, we highly recommend making a reservation, especially for weekends and holidays. You can call us directly or use our online reservation form.",
    answerGe: "დიახ, გირჩევთ წინასწარ დაჯავშნოთ ადგილი, განსაკუთრებით შაბათ-კვირისა და დღესასწაულების დღეებში.",
    answerRu: "Да, мы настоятельно рекомендуем бронировать столик, особенно на выходные и праздники.",
  },
  {
    question: "Do you have private cabins?",
    questionGe: "გაქვთ კერძო კაბინები?",
    questionRu: "Есть ли у вас приватные кабинеты?",
    answer:
      "Yes, we offer several private cabins that can accommodate 4-12 guests. Perfect for family gatherings or intimate celebrations.",
    answerGe: "დიახ, გვაქვს რამდენიმე კერძო კაბინა 4-12 სტუმრისთვის.",
    answerRu: "Да, у нас есть несколько приватных кабинетов на 4-12 гостей.",
  },
  {
    question: "Do you have vegetarian options?",
    questionGe: "გაქვთ ვეგეტარიანული კერძები?",
    questionRu: "Есть ли вегетарианские блюда?",
    answer:
      "Absolutely! Georgian cuisine has many delicious vegetarian dishes. Try our pkhali, lobio, or various cheese dishes.",
    answerGe: "რა თქმა უნდა! ქართულ სამზარეულოში ბევრი გემრიელი ვეგეტარიანული კერძია.",
    answerRu: "Конечно! В грузинской кухне много вкусных вегетарианских блюд.",
  },
  {
    question: "Do you host birthdays?",
    questionGe: "მართავთ დაბადების დღეებს?",
    questionRu: "Вы проводите дни рождения?",
    answer:
      "Yes, we love hosting birthday celebrations! We have spaces for intimate gatherings up to grand celebrations for 200+ guests.",
    answerGe: "დიახ, სიამოვნებით ვმასპინძლობთ დაბადების დღეებს!",
    answerRu: "Да, мы с удовольствием проводим дни рождения!",
  },
  {
    question: "Do you have live music?",
    questionGe: "გაქვთ ცოცხალი მუსიკა?",
    questionRu: "Есть ли живая музыка?",
    answer: "Yes, we feature live traditional Georgian music on weekends. Check with us for the schedule.",
    answerGe: "დიახ, შაბათ-კვირას გვყავს ცოცხალი ქართული მუსიკა.",
    answerRu: "Да, по выходным у нас играет живая традиционная грузинская музыка.",
  },
  {
    question: "Is there parking?",
    questionGe: "არის პარკინგი?",
    questionRu: "Есть ли парковка?",
    answer: "Yes, we have free parking available for our guests on the premises.",
    answerGe: "დიახ, სტუმრებისთვის გვაქვს უფასო პარკინგი.",
    answerRu: "Да, для наших гостей есть бесплатная парковка на территории.",
  },
  {
    question: "Can we book for large groups?",
    questionGe: "შეგვიძლია დიდი ჯგუფებისთვის ჯავშანი?",
    questionRu: "Можно забронировать для большой группы?",
    answer:
      "Absolutely! Our Great Hall can accommodate up to 200 guests, and we have various spaces for groups of all sizes.",
    answerGe: "რა თქმა უნდა! ჩვენს დიდ დარბაზში შეიძლება 200 სტუმრამდე მოთავსდეს.",
    answerRu: "Конечно! Наш Большой зал вмещает до 200 гостей.",
  },
  {
    question: "Do you offer takeaway?",
    questionGe: "გაქვთ წასაღები?",
    questionRu: "Есть ли доставка/еда навынос?",
    answer: "Yes, we offer takeaway for most of our menu items. Call ahead to place your order.",
    answerGe: "დიახ, მენიუს უმეტესი კერძები შეგიძლიათ წაიღოთ.",
    answerRu: "Да, большинство блюд можно заказать навынос.",
  },
];

// Reviews placeholder
export const reviews = [
  {
    id: 1,
    name: "Giorgi M.",
    rating: 5,
    text: "The best khinkali in Tbilisi! Authentic atmosphere and wonderful service.",
    textGe: "საუკეთესო ხინკალი თბილისში! ავთენტური ატმოსფერო და შესანიშნავი მომსახურება.",
    textRu: "Лучшие хинкали в Тбилиси! Аутентичная атмосфера и прекрасное обслуживание.",
    date: "2 weeks ago",
    dateGe: "2 კვირის წინ",
    dateRu: "2 недели назад",
  },
  {
    id: 2,
    name: "Anna K.",
    rating: 5,
    text: "We celebrated our anniversary here. The private cabin was perfect and the food was exceptional.",
    textGe: "აქ აღვნიშნეთ ჩვენი წლისთავი. კერძო კაბინა იდეალური იყო და საკვები განსაკუთრებული.",
    textRu: "Мы отмечали здесь годовщину. Приватный кабинет был идеален, а еда — исключительной.",
    date: "1 month ago",
    dateGe: "1 თვის წინ",
    dateRu: "1 месяц назад",
  },
  {
    id: 3,
    name: "David L.",
    rating: 5,
    text: "Traditional Georgian hospitality at its finest. The wine selection is impressive.",
    textGe: "ტრადიციული ქართული სტუმართმოყვარეობა თავის საუკეთესო გამოვლინებაში. ღვინის არჩევანი შთამბეჭდავია.",
    textRu: "Традиционное грузинское гостеприимство в лучшем виде. Выбор вин впечатляет.",
    date: "3 weeks ago",
    dateGe: "3 კვირის წინ",
    dateRu: "3 недели назад",
  },
  {
    id: 4,
    name: "Nino T.",
    rating: 4,
    text: "Great food and atmosphere. The khachapuri was delicious. Slightly slow service during busy hours.",
    textGe: "შესანიშნავი საკვები და ატმოსფერო. ხაჭაპური გემრიელი იყო. მომსახურება ოდნავ ნელი იყო დატვირთულ საათებში.",
    textRu: "Отличная еда и атмосфера. Хачапури был вкусный. Обслуживание немного медленное в час пик.",
    date: "1 week ago",
    dateGe: "1 კვირის წინ",
    dateRu: "1 неделю назад",
  },
  {
    id: 5,
    name: "Michael R.",
    rating: 5,
    text: "A must-visit for anyone wanting authentic Georgian cuisine. The Great Hall is stunning.",
    textGe: "აუცილებლად სანახავი ყველასთვის, ვისაც ავთენტური ქართული სამზარეულო სურს. დიდი დარბაზი თვალწარმტაცია.",
    textRu: "Обязательно к посещению для всех, кто хочет настоящую грузинскую кухню. Большой зал потрясающий.",
    date: "2 months ago",
    dateGe: "2 თვის წინ",
    dateRu: "2 месяца назад",
  },
  {
    id: 6,
    name: "Tamara S.",
    rating: 5,
    text: "Family celebrations here are always special. The staff remembers our preferences.",
    textGe: "ოჯახური ზეიმები აქ ყოველთვის განსაკუთრებულია. პერსონალი ჩვენს პრეფერენციებს იმახსოვრებს.",
    textRu: "Семейные торжества здесь всегда особенные. Персонал помнит наши предпочтения.",
    date: "1 month ago",
    dateGe: "1 თვის წინ",
    dateRu: "1 месяц назад",
  },
];

// Navigation items - Updated for multi-page routing
export const navItems = [
  { id: "home", label: "Home", labelGe: "მთავარი", labelRu: "Главная", href: "/" },
  { id: "menu", label: "Menu", labelGe: "მენიუ", labelRu: "Меню", href: "/menu" },
  { id: "gallery", label: "Gallery", labelGe: "გალერეა", labelRu: "Галерея", href: "/gallery" },
  { id: "about", label: "About", labelGe: "ჩვენს შესახებ", labelRu: "О нас", href: "/about" },
  { id: "events", label: "Events", labelGe: "ღონისძიებები", labelRu: "Мероприятия", href: "/events" },
  { id: "contact", label: "Contact", labelGe: "კონტაქტი", labelRu: "Контакты", href: "/contact" },
];
