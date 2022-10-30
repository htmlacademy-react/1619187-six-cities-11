export type Host = {
  id: number;
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

export type Offer = {
  id: number;
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
  reviews: number[]; //уточнить про связь отзывов и самого предложения жилья
  previewImage: string; //предварительный просмотр изображения
}[];

