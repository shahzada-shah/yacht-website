export interface NavigationItem {
  label: string;
  href: string;
}

export interface Yacht {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  year: number;
  length: number;
  location: string;
  cabins: number;
  guests: number;
  condition?: 'Pre-owned' | 'New';
  isNew?: boolean;
}

export interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  yachtType: string;
  priceFrom: string;
  guests: string;
}
