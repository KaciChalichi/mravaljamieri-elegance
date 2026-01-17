// ============================================
// RESTAURANT DATA - EDIT THIS FILE TO UPDATE CONTENT
// ============================================
// This file contains all editable content for the restaurant website.
// Replace placeholder values with your actual information.

export const restaurantInfo = {
  name: "Mravaljamieri",
  tagline: "Georgian Tradition, Served Beautifully",
  description: "Seasonal dishes, warm halls, and the kind of hospitality you remember.",

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
    googleMapsUrl: "https://maps.app.goo.gl/fdvLqkpvXLYe4Uw3A",
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
    facebook: "https://www.facebook.com/profile.php?id=100063457289857",
    instagram: "https://www.instagram.com/restaurant_mravaljamieri",
    tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g294195-d3533547-Reviews-Mravaljamieri-Tbilisi.html",
    google: "https://maps.app.goo.gl/fdvLqkpvXLYe4Uw3A",
  },

  // Reviews placeholder - based on TripAdvisor
  rating: 4.5,
  reviewCount: 182,
  googleReviewsUrl: "https://maps.app.goo.gl/fdvLqkpvXLYe4Uw3A",

  // Parking info
  parking: "Free parking available on premises",
  publicTransport: "Accessible by public transport",
};

// Menu Categories - DO NOT CHANGE THE ORDER OR IDS
export const menuCategories = [
  { id: "gourmets", name: "Food for Gourmets", nameGe: "გურმანთათვის" },
  { id: "cold-salads", name: "Cold Dishes and Salads", nameGe: "ცივი კერძები და სალათები" },
  { id: "cold-dishes", name: "Cold Dishes", nameGe: "ცივი კერძები" },
  { id: "soups", name: "Soups", nameGe: "წვნიანები" },
  { id: "baked", name: "Baked", nameGe: "გამომცხვარი" },
] as const;

export type MenuCategoryId = (typeof menuCategories)[number]["id"];

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: string;
  nameGe?: string;
  description: string;
  descriptionGe?: string;
  price: number;
  currency: string;
  tags: ("signature" | "spicy" | "vegetarian" | "vegan" | "gluten-free" | "popular")[];
  image: string; // Image path - use placeholder.svg for now, replace with actual images
}

// Menu Items - REPLACE PLACEHOLDERS WITH REAL ITEMS
// To add images: replace "/placeholder.svg" with your image path like "/menu/khinkali.jpg"
export const menuItems: MenuItem[] = [
  // FOOD FOR GOURMETS
  {
    id: "g1",
    category: "gourmets",
    name: "Signature Khinkali",
    description: "Traditional Georgian dumplings with juicy meat filling, served with freshly ground black pepper",
    price: 35,
    currency: "₾",
    tags: ["signature", "popular"],
    image: "https://ibb.co/8h0wSYz",
  },
  {
    id: "g2",
    category: "gourmets",
    name: "Adjarian Khachapuri",
    description: "Boat-shaped bread filled with melted cheese, butter, and a runny egg",
    price: 28,
    currency: "₾",
    tags: ["signature", "vegetarian"],
    image: "/placeholder.svg",
  },
  {
    id: "g3",
    category: "gourmets",
    name: "Mtsvadi Selection",
    description: "Premium grilled meat skewers with pomegranate glaze",
    price: 45,
    currency: "₾",
    tags: ["signature"],
    image: "/placeholder.svg",
  },
  {
    id: "g4",
    category: "gourmets",
    name: "Satsivi Royale",
    description: "Tender chicken in rich walnut sauce with aromatic spices",
    price: 38,
    currency: "₾",
    tags: ["gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "g5",
    category: "gourmets",
    name: "Lobio Claypot",
    description: "Slow-cooked Georgian beans in traditional clay pot",
    price: 22,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "g6",
    category: "gourmets",
    name: "Chakhokhbili",
    description: "Chicken stewed with tomatoes, herbs, and Georgian spices",
    price: 32,
    currency: "₾",
    tags: ["gluten-free", "popular"],
    image: "/placeholder.svg",
  },

  // COLD DISHES AND SALADS
  {
    id: "cs1",
    category: "cold-salads",
    name: "Pkhali Trio",
    description: "Three varieties of vegetable pâté with walnut paste",
    price: 18,
    currency: "₾",
    tags: ["vegetarian", "vegan", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "cs2",
    category: "cold-salads",
    name: "Georgian Salad",
    description: "Fresh tomatoes, cucumbers, onions with walnut dressing",
    price: 16,
    currency: "₾",
    tags: ["vegetarian", "vegan", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "cs3",
    category: "cold-salads",
    name: "Eggplant Rolls",
    description: "Grilled eggplant with walnut-garlic filling",
    price: 20,
    currency: "₾",
    tags: ["vegetarian", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "cs4",
    category: "cold-salads",
    name: "Spinach Pkhali",
    description: "Spinach with walnut paste and pomegranate",
    price: 15,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "cs5",
    category: "cold-salads",
    name: "Beet Pkhali",
    description: "Beetroot with aromatic walnut paste",
    price: 15,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "cs6",
    category: "cold-salads",
    name: "Mixed Greens",
    description: "Seasonal herbs and greens from local farms",
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
    description: "Selection of Georgian cheeses with honey and walnuts",
    price: 28,
    currency: "₾",
    tags: ["vegetarian", "gluten-free", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "cd2",
    category: "cold-dishes",
    name: "Sulguni Rolls",
    description: "Smoked cheese rolls with fresh herbs",
    price: 22,
    currency: "₾",
    tags: ["vegetarian", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "cd3",
    category: "cold-dishes",
    name: "Nadughi",
    description: "Fresh cottage cheese wrapped in sulguni",
    price: 18,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
  {
    id: "cd4",
    category: "cold-dishes",
    name: "Jonjoli",
    description: "Pickled blossoms, a Georgian delicacy",
    price: 14,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "cd5",
    category: "cold-dishes",
    name: "Mchadi with Cheese",
    description: "Cornbread served with fresh cheese",
    price: 16,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
  {
    id: "cd6",
    category: "cold-dishes",
    name: "Georgian Pickles",
    description: "Assortment of traditional pickled vegetables",
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
    description: "Rich beef soup with rice, walnuts, and tkemali",
    price: 18,
    currency: "₾",
    tags: ["spicy", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "s2",
    category: "soups",
    name: "Chikhirtma",
    description: "Traditional chicken soup with egg and vinegar",
    price: 16,
    currency: "₾",
    tags: ["gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "s3",
    category: "soups",
    name: "Lobio Soup",
    description: "Hearty bean soup with fresh herbs",
    price: 14,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "s4",
    category: "soups",
    name: "Matsoni Soup",
    description: "Cold yogurt soup with fresh cucumbers",
    price: 12,
    currency: "₾",
    tags: ["vegetarian", "gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "s5",
    category: "soups",
    name: "Beef Broth",
    description: "Clear beef broth with fresh herbs",
    price: 15,
    currency: "₾",
    tags: ["gluten-free"],
    image: "/placeholder.svg",
  },
  {
    id: "s6",
    category: "soups",
    name: "Chicken Bouillon",
    description: "Light chicken soup with vermicelli",
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
    description: "Classic cheese-filled bread from Imereti region",
    price: 22,
    currency: "₾",
    tags: ["vegetarian", "signature"],
    image: "/placeholder.svg",
  },
  {
    id: "b2",
    category: "baked",
    name: "Megruli Khachapuri",
    description: "Double-cheese khachapuri, baked with cheese on top",
    price: 26,
    currency: "₾",
    tags: ["vegetarian", "popular"],
    image: "/placeholder.svg",
  },
  {
    id: "b3",
    category: "baked",
    name: "Lobiani",
    description: "Bean-filled bread with aromatic spices",
    price: 18,
    currency: "₾",
    tags: ["vegetarian", "vegan"],
    image: "/placeholder.svg",
  },
  {
    id: "b4",
    category: "baked",
    name: "Kubdari",
    description: "Meat-filled bread from Svaneti",
    price: 28,
    currency: "₾",
    tags: ["signature", "spicy"],
    image: "/placeholder.svg",
  },
  {
    id: "b5",
    category: "baked",
    name: "Achma",
    description: "Layered cheese bread, baked to perfection",
    price: 24,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
  {
    id: "b6",
    category: "baked",
    name: "Penovani",
    description: "Puff pastry filled with cheese",
    price: 20,
    currency: "₾",
    tags: ["vegetarian"],
    image: "/placeholder.svg",
  },
];

// Chef's Picks - IDs of featured menu items
export const chefsPicks = ["g1", "g2", "s1"];

// Gallery Categories - DO NOT CHANGE THE ORDER
export const galleryCategories = [
  { id: "great-hall", name: "Great Hall", nameGe: "დიდი დარბაზი" },
  { id: "painted-hall", name: "Painted Hall", nameGe: "მოხატული დარბაზი" },
  { id: "halls", name: "Halls", nameGe: "დარბაზები" },
  { id: "cabins", name: "Cabins", nameGe: "კაბინები" },
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
    description: "Grand celebrations for up to 200 guests",
    capacity: "100-300",
    image: "/placeholder.svg",
  },
  {
    id: "painted-hall",
    title: "Painted Hall",
    titleGe: "მოხატული დარბაზი",
    description: "Historic murals and intimate gatherings",
    capacity: "20-60",
    image: "/placeholder.svg",
  },
  {
    id: "halls",
    title: "Halls",
    titleGe: "დარბაზები",
    description: "Versatile spaces for any occasion",
    capacity: "30-100",
    image: "/placeholder.svg",
  },
  {
    id: "cabins",
    title: "Cabins",
    titleGe: "კაბინები",
    description: "Private dining for intimate moments",
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
    description: "Daily creations from our kitchen",
  },
  { icon: "Home", title: "Private Cabins", titleGe: "კერძო კაბინები", description: "Intimate dining experiences" },
  {
    icon: "Building",
    title: "Great Hall Celebrations",
    titleGe: "დიდი დარბაზის ზეიმი",
    description: "Events up to 200 guests",
  },
  {
    icon: "Leaf",
    title: "Seasonal Ingredients",
    titleGe: "სეზონური ინგრედიენტები",
    description: "Farm-fresh produce daily",
  },
  { icon: "Music", title: "Live Music", titleGe: "ცოცხალი მუსიკა", description: "Traditional performances" },
  { icon: "Users", title: "Group Dining", titleGe: "ჯგუფური სადილი", description: "Perfect for celebrations" },
];

// FAQ Items
export const faqItems = [
  {
    question: "Do you take reservations?",
    questionGe: "იღებთ ჯავშანს?",
    answer:
      "Yes, we highly recommend making a reservation, especially for weekends and holidays. You can call us directly or use our online reservation form.",
    answerGe: "დიახ, გირჩევთ წინასწარ დაჯავშნოთ ადგილი, განსაკუთრებით შაბათ-კვირისა და დღესასწაულების დღეებში.",
  },
  {
    question: "Do you have private cabins?",
    questionGe: "გაქვთ კერძო კაბინები?",
    answer:
      "Yes, we offer several private cabins that can accommodate 4-12 guests. Perfect for family gatherings or intimate celebrations.",
    answerGe: "დიახ, გვაქვს რამდენიმე კერძო კაბინა 4-12 სტუმრისთვის.",
  },
  {
    question: "Do you have vegetarian options?",
    questionGe: "გაქვთ ვეგეტარიანული კერძები?",
    answer:
      "Absolutely! Georgian cuisine has many delicious vegetarian dishes. Try our pkhali, lobio, or various cheese dishes.",
    answerGe: "რა თქმა უნდა! ქართულ სამზარეულოში ბევრი გემრიელი ვეგეტარიანული კერძია.",
  },
  {
    question: "Do you host birthdays?",
    questionGe: "მართავთ დაბადების დღეებს?",
    answer:
      "Yes, we love hosting birthday celebrations! We have spaces for intimate gatherings up to grand celebrations for 200+ guests.",
    answerGe: "დიახ, სიამოვნებით ვმასპინძლობთ დაბადების დღეებს!",
  },
  {
    question: "Do you have live music?",
    questionGe: "გაქვთ ცოცხალი მუსიკა?",
    answer: "Yes, we feature live traditional Georgian music on weekends. Check with us for the schedule.",
    answerGe: "დიახ, შაბათ-კვირას გვყავს ცოცხალი ქართული მუსიკა.",
  },
  {
    question: "Is there parking?",
    questionGe: "არის პარკინგი?",
    answer: "Yes, we have free parking available for our guests on the premises.",
    answerGe: "დიახ, სტუმრებისთვის გვაქვს უფასო პარკინგი.",
  },
  {
    question: "Can we book for large groups?",
    questionGe: "შეგვიძლია დიდი ჯგუფებისთვის ჯავშანი?",
    answer:
      "Absolutely! Our Great Hall can accommodate up to 200 guests, and we have various spaces for groups of all sizes.",
    answerGe: "რა თქმა უნდა! ჩვენს დიდ დარბაზში შეიძლება 200 სტუმრამდე მოთავსდეს.",
  },
  {
    question: "Do you offer takeaway?",
    questionGe: "გაქვთ წასაღები?",
    answer: "Yes, we offer takeaway for most of our menu items. Call ahead to place your order.",
    answerGe: "დიახ, მენიუს უმეტესი კერძები შეგიძლიათ წაიღოთ.",
  },
];

// Reviews placeholder
export const reviews = [
  {
    id: 1,
    name: "Giorgi M.",
    rating: 5,
    text: "The best khinkali in Tbilisi! Authentic atmosphere and wonderful service.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Anna K.",
    rating: 5,
    text: "We celebrated our anniversary here. The private cabin was perfect and the food was exceptional.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "David L.",
    rating: 5,
    text: "Traditional Georgian hospitality at its finest. The wine selection is impressive.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Nino T.",
    rating: 4,
    text: "Great food and atmosphere. The khachapuri was delicious. Slightly slow service during busy hours.",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Michael R.",
    rating: 5,
    text: "A must-visit for anyone wanting authentic Georgian cuisine. The Great Hall is stunning.",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Tamara S.",
    rating: 5,
    text: "Family celebrations here are always special. The staff remembers our preferences.",
    date: "1 month ago",
  },
];

// Navigation items - Updated for multi-page routing
export const navItems = [
  { id: "home", label: "Home", labelGe: "მთავარი", href: "/" },
  { id: "menu", label: "Menu", labelGe: "მენიუ", href: "/menu" },
  { id: "gallery", label: "Gallery", labelGe: "გალერეა", href: "/gallery" },
  { id: "about", label: "About", labelGe: "ჩვენს შესახებ", href: "/about" },
  { id: "events", label: "Events", labelGe: "ღონისძიებები", href: "/events" },
  { id: "contact", label: "Contact", labelGe: "კონტაქტი", href: "/contact" },
];
