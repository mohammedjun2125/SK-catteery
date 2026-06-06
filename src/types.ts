export interface Kitten {
  id: string;
  name: string; // Breed Display Name (e.g., "Traditional Persian")
  breed: string; // "Persian" | "Himalayan" | "British Shorthair" etc.
  gender: string; // "Male & Female" or similar
  age: string; // "8-12 Weeks"
  color: string; // "Pure White, Silver & Golden"
  vaccinationStatus: string; // "First Doses & Dewormed"
  availability: string; // "Litters Available Now"
  image: string;
  features: string[];
  description: string;
  temperament?: string;
  careNeeds?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number; // 1-5
  text: string;
  date: string;
  avatar?: string;
  isGoogleReview?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Health & Vaccination" | "Delivery & Reservation" | "Care & Diet";
}

export interface GalleryItem {
  id: string;
  category: "Kittens" | "Parents" | "Happy Customers" | "Facility";
  imageUrl: string;
  title: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BreedProfile {
  id: string;
  name: string;
  description: string;
  temperament: string;
  traits: string[];
  careRequirement: string;
  image: string;
}
