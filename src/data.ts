import { Kitten, Review, FAQ, GalleryItem, ServiceItem, BreedProfile } from "./types";
import persianImg from "./assets/images/persian_kitten_1780744925029.png";
import himalayanImg from "./assets/images/himalayan_kitten_1780744940674.png";
import catteryRoomImg from "./assets/images/cattery_room_1780744957819.png";

export const KITTENS_DATA: Kitten[] = [
  {
    id: "br-persian",
    name: "Royal Traditional Persian",
    breed: "Persian",
    gender: "Males & Females Available",
    age: "8 - 12 Weeks",
    color: "Pure White, Royal Golden, Silver Shaded & Calico",
    vaccinationStatus: "1st Dose Done & De-wormed",
    availability: "Available Litters",
    image: persianImg,
    features: ["Pristine Triple Coat", "Cute Flat Muzzle Profile", "Expressive Copper Eyes", "Ultra-Docile Temperament"],
    description: "Our Traditional Persian line is Hyderabad's absolute gold standard. These sweet baby kittens are quiet, extraordinarily affectionate, and raised entirely cage-free in friendly air-conditioned nurseries. Fully litter-trained and verified healthy.",
    temperament: "Serene, quiet, incredibly sweet, and loves being cuddled on laps. They thrive in calm household environments.",
    careNeeds: "Requires daily gentle brushing of their luxurious long triple coat to prevent matting, and routine weekly face cleansing."
  },
  {
    id: "br-himalayan",
    name: "Pointed Himalayan Royalty",
    breed: "Himalayan",
    gender: "Males & Females Available",
    age: "8 - 10 Weeks",
    color: "Seal Point, Blue Point & Flame Point",
    vaccinationStatus: "Fully Vaccinated Option",
    availability: "Reservation Open",
    image: himalayanImg,
    features: ["Sapphire Blue Eyes", "Distinctive Deep Points", "Plush Double Coat", "Champion Sired Lines"],
    description: "An elite cross combining the luxurious coat of the Persian with the spectacular point colors and sapphire gaze of Siamese bloodlines. Highly interactive, soft-voiced, and loves lap cuddling.",
    temperament: "Very playful, friendly, loyal, and highly expressive. They communicate with gentle, soft chirps.",
    careNeeds: "Requires grooming every other day, high-quality premium kitten kibbles, and interactive toys to satisfy their curiosity."
  },
  {
    id: "br-british",
    name: "Classic British Shorthair",
    breed: "British Shorthair",
    gender: "Males & Females Available",
    age: "9 - 12 Weeks",
    color: "Royal Blue, Lilac, Silver Tabby & Golden",
    vaccinationStatus: "Vetted & Immunized",
    availability: "Pre-Booking Open",
    image: "https://images.unsplash.com/photo-1574158622643-69d34d72650a?q=80&w=800&auto=format&fit=crop",
    features: ["Plush Teddy Bear Coat", "Signature Rounded Jowls", "Striking Gold Gaze", "Calm & Independent"],
    description: "Quiet, easygoing, and exceptionally elegant. Known for their round forms and dense plush coat that's irresistible to hold. They adapt beautifully to apartment livings and busy families.",
    temperament: "Independent, companionable, dignified, and incredibly easygoing. Great with kids and other pets.",
    careNeeds: "Low-maintenance plush coat needs weekly brushing. Prone to a healthy appetite, so portion control is recommended."
  },
  {
    id: "br-ragdoll",
    name: "Royal Blue-Eyed Ragdoll",
    breed: "Ragdoll",
    gender: "Males & Females Available",
    age: "10 - 12 Weeks",
    color: "Blue Bicolor, Seal Point & Mitted",
    vaccinationStatus: "First Dose Complete",
    availability: "Limited Litters",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
    features: ["Super Silky Coat", "Deep Aqua Sapphire Eyes", "Limp Cuddle Relaxation", "Dog-like Affection"],
    description: "Adored for their docile nature, these large kittens relax completely in your arms when picked up. Soft-furred, striking blue-eyed, and extraordinarily gentle with children and other pets.",
    temperament: "Exceptionally sweet, limp-relaxed when held, follows owners room-to-room (highly affectionate 'puppy-cats').",
    careNeeds: "Weekly combing of their silky, non-matting coat. High interest in human interaction, and thrives with family focus."
  },
  {
    id: "br-mainecoon",
    name: "Majestic Grand Maine Coon",
    breed: "Maine Coon",
    gender: "Males Available",
    age: "10 - 14 Weeks",
    color: "Red Tabby, Black Smoke & Silver Wood",
    vaccinationStatus: "De-wormed & Certified",
    availability: "Reservations Open",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
    features: ["Tufted Ears & Paws", "Sturdy Heavy Bone Build", "Bushy Plumed Feather Tail", "Energetic & Outgoing"],
    description: "The crown jewel of large cat breeds, Maine Coons are majestic, playful giants. They behave like friendly pups, enjoy water, and chirp or sing to interact with their loving families.",
    temperament: "Gentle giant, energetic, vocal, fascinated with splashing water, loves playing fetch and climbing.",
    careNeeds: "Furry coat requires brushing twice a week. Needs plenty of vertical space (tall cat trees) and larger litter pans."
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Aditya Verma",
    rating: 5,
    text: "Got my female Persian kitten from them, she is healthy and perfect. They explained everything from food to grooming habits and vaccine timeline. Best cattery in Hyderabad!",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: true
  },
  {
    id: "rev-2",
    name: "Sowmya Reddy",
    rating: 5,
    text: "Healthy Persian kitten at a reasonable price. SK Cattery is highly professional. They guided us on cat food, and provided home delivery directly to Gachibowli with high safety in minutes.",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: true
  },
  {
    id: "rev-3",
    name: "Major Praveen Kumar",
    rating: 5,
    text: "Quality is top notch and very friendly. The owners really care for their pets. I bought a Himalayan dual-color kitten who is the center of our lives now. 100% recommended.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: true
  },
  {
    id: "rev-4",
    name: "Shreya Ghoshal",
    rating: 5,
    text: "The post-adoption customer service is phenomenal. Whenever I text them about vaccination guidance or vitamins on WhatsApp, they respond immediately. My Persian kitten is growing into a beautiful healthy cat.",
    date: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: false
  },
  {
    id: "rev-5",
    name: "Karan Johar",
    rating: 5,
    text: "Incredible selection of premium cats. The cattery is remarkably spotless, air-conditioned, and organized. Every kitten gets personal playtime and love. Extremely satisfied with our kitten.",
    date: "3 months ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: false
  }
];

export const GOOGLE_HIGHLIGHTS = [
  {
    quote: "Got my female Persian kitten from them, she is healthy and perfect.",
    author: "Aditya V."
  },
  {
    quote: "Healthy Persian kitten at a reasonable price.",
    author: "Sowmya R."
  },
  {
    quote: "Quality is top notch and very friendly.",
    author: "Major Praveen K."
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "Are your kittens vaccinated?",
    answer: "Yes, all our kittens receive age-appropriate vaccination doses. Before leaving our cattery, they undergo de-worming and general checklist tests. We provide a complete health/vaccination schedule to simplify future checkups.",
    category: "Health & Vaccination"
  },
  {
    id: "faq-2",
    question: "Do you provide home delivery?",
    answer: "Absolutely! We provide safe, air-conditioned home delivery inside Hyderabad (same-day delivery to areas like Gachibowli, Jubilee Hills, Secunderabad, etc.) and reliable pet-shipping service to nearby states. Your kitten's comfort and safety are our number one priority.",
    category: "Delivery & Reservation"
  },
  {
    id: "faq-3",
    question: "What breeds are available at SK Cattery?",
    answer: "We specialize primarily in high-end, purebred Persian Cats (both punch-faced and doll-faced) and elegant Himalayan Cats. All our kittens are raised in a cage-free, loving domestic setup in Hyderabad.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "Can I reserve a kitten online?",
    answer: "Yes. You can filter and view available kittens on our website, then click 'Reserve on WhatsApp' or fill our booking form. You can schedule a video call to observe your selected kitten, book with a minimal advance, and take home or get it delivered.",
    category: "Delivery & Reservation"
  },
  {
    id: "faq-5",
    question: "Do you provide cat care guidance?",
    answer: "Yes, we provide lifetime guidance! We give you a welcome kit list including food recommendations, litter details, grooming items, and health checklists. You can message us anytime on WhatsApp for any support.",
    category: "Care & Diet"
  },
  {
    id: "faq-6",
    question: "How can I contact or visit SK Cattery?",
    answer: "We are located at 3-334, New Hafeezpet, Aditya Nagar, Hafeezpet, Hyderabad. We are open 24 Hours. You can call us directly at +91 88015 92068, message us on WhatsApp, or follow directions on Google Maps.",
    category: "General"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g-1",
    category: "Kittens",
    imageUrl: persianImg,
    title: "Playful Persian Doll",
    description: "Cute kitten interacting with toys in our play area"
  },
  {
    id: "g-2",
    category: "Kittens",
    imageUrl: himalayanImg,
    title: "Sapphire blue-eyed Himalayan",
    description: "Our signature high-contrast seal-point coloration"
  },
  {
    id: "g-3",
    category: "Facility",
    imageUrl: catteryRoomImg,
    title: "SK Play Haven",
    description: "Spacious, air-conditioned cage-free climbing room"
  },
  {
    id: "g-4",
    category: "Happy Customers",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    title: "Ananya & Snowflake",
    description: "Delightful pickup morning at Aditya Nagar"
  },
  {
    id: "g-5",
    category: "Parents",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
    title: "Grand Champion Oliver",
    description: "Our premium stud white Persian with deep orange eyes"
  },
  {
    id: "g-6",
    category: "Happy Customers",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    title: "Rahul's Family Himalayan",
    description: "Home delivery arrival moments at Kondapur"
  },
  /* Added beautiful cats details to the gallery */
  {
    id: "g-7",
    category: "Parents",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
    title: "Majestic Golden Shaded Classic",
    description: "Elite pedigree breeding stud with flawless line structure"
  },
  {
    id: "g-8",
    category: "Kittens",
    imageUrl: "https://images.unsplash.com/photo-1574158622643-69d34d72650a?q=80&w=800&auto=format&fit=crop",
    title: "Silver Tabby British Shorthair",
    description: "Exquisite chubby cheeks and dense plush coat outline"
  },
  {
    id: "g-9",
    category: "Kittens",
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800&auto=format&fit=crop",
    title: "Blue-Point Himalayan Kitten",
    description: "Deep sea blue eyes contrasting striking graphite point colors"
  },
  {
    id: "g-10",
    category: "Parents",
    imageUrl: "https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?q=80&w=800&auto=format&fit=crop",
    title: "Empress Cleo Traditional",
    description: "Triple-coated cream Persian parent resting in royal playroom"
  },
  {
    id: "g-11",
    category: "Kittens",
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
    title: "Copper-Eyed Red Self Kitten",
    description: "Rare pristine flat-face kitten with full dense red lion collar"
  },
  {
    id: "g-12",
    category: "Facility",
    imageUrl: "https://images.unsplash.com/photo-1513360309081-36f560743b1a?q=80&w=800&auto=format&fit=crop",
    title: "Constant Grooming Salon",
    description: "Our dedicated professional coat grooming and disinfection parlor"
  }
];

export const BREED_PROFILES: BreedProfile[] = [
  {
    id: "br-1",
    name: "Persian Cats",
    description: "Known for their majestic long double-coat, sturdy bone structures, cute short muzzle profiles, and expressive doll or punch faces.",
    temperament: "Remarkably affectionate, graceful, calm, and highly content with indoor domestic living.",
    traits: ["Luxurious Triple Coat", "Fluffy Muzzle / Punch Face", "Warm Expressive Eyes", "Gentle Quiet Voices"],
    careRequirement: "Requires daily combing to prevent matting, a high-protein raw/dry meal diet, and loving eye-wipes.",
    image: persianImg
  },
  {
    id: "br-2",
    name: "Himalayan Cats",
    description: "An elite cross combining the luxurious long fur of the Persian cat with the spectacular point colorings and deep sapphire eyes of the Siamese.",
    temperament: "Extremely serene, intelligent, interactive with caregivers, and pleasantly playful.",
    traits: ["Stunning Sapphire Eyes", "Sleek Dark Color Points", "Sturdy Rounded Bodyset", "highly Social Personality"],
    careRequirement: "Regular coating brushing, occasional baths, and quality scratching posts to burn playful energy.",
    image: himalayanImg
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Premium Kitten Sales",
    description: "Healthy, verified, and well-socialized Persian and Himalayan kittens raised cage-free in friendly domestic spaces.",
    iconName: "Cat"
  },
  {
    id: "serv-2",
    title: "Safe Home Delivery",
    description: "Stress-free, comfortable, same-day temperature-regulated transport across Hyderabad with live location tracking.",
    iconName: "Truck"
  },
  {
    id: "serv-3",
    title: "Vaccination Guidance",
    description: "Complete primary checkups, vaccination calendars, and partner vet recommendations for trouble-free growth.",
    iconName: "ShieldCheck"
  },
  {
    id: "serv-4",
    title: "Cat Care Consultation",
    description: "A lifelong help desk on food brands, raw diet, grooming hacks, and environmental adaptation advice.",
    iconName: "PhoneCall"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Healthy Kittens",
    desc: "Every single kitten undergoes comprehensive vet inspections, routine active de-worming, and initial vaccinations.",
    icon: "Heart"
  },
  {
    title: "Vaccination Support",
    desc: "Complete documentation and clear guidance on future booster schedules and vet directories.",
    icon: "Syringe"
  },
  {
    title: "Safe Delivery Inside Hyderabad",
    desc: "Air-conditioned delivery units protect kittens from stress, direct sun, or transport shocks.",
    icon: "MapPin"
  },
  {
    title: "Aesthetic Play Havens",
    desc: "Cage-free, spotless play room so our kittens grow up active, extremely gentle, and highly social.",
    icon: "Sparkles"
  },
  {
    title: "Cat Care Consultation",
    desc: "Step-by-step master welcome manual on litter toilet training, premium nutrition, and scratching needs.",
    icon: "BookOpen"
  },
  {
    title: "24/7 Support Line",
    desc: "Post-adoption support. We are a direct click away on WhatsApp to assist with your pet queries.",
    icon: "Phone"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose Your Dream Kitten",
    desc: "Browse our beautiful available kittens or breed portfolios right here. Filter by breed, age, and colors to find your match."
  },
  {
    step: "02",
    title: "WhatsApp or Call Us",
    desc: "Click 'Reserve' or Chat with us to request real-time kitten photos, video calls, or live playroom viewing sessions on your phone."
  },
  {
    step: "03",
    title: "Reserve & Confirm",
    desc: "Book your favorite kitten with a safe booking booking. We'll finalize vaccination checkups and delivery calendars immediately."
  },
  {
    step: "04",
    title: "Bring Your Friend Home",
    desc: "Take home your healthy kitten or relax as we deliver safely directly to your doorstep in Hyderabad with a free start care-package."
  }
];
