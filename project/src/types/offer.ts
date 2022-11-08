export type Host = {
  id: number;
  avatarUrl: string;
  name: string;
  isPro: boolean;
}
export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type Offer = {
  id: number;
  city: {
    location: Location;
    name: string;
  };
  images: string[];
  title: string;
  description: string;
  type: string;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  price: number;
  insideList: string[];
  hostInformation: Host;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  location: Location;
};

