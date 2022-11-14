import {Offer} from '../types/offer';

export const nearOffers: Offer[] = [{
  id: 11,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  images: ['img/img/apartment-02.jpg', 'img/img/apartment-01.jpg', 'img/img/apartment-03.jpg'],
  title: 'Beautiful & luxurious studio at great location',
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  isFavorite: false,
  isPremium: false,
  type: 'Apartment',
  rating: 4,
  bedrooms: 2,
  maxAdults: 3,
  price: 100,
  goods: ['Washing machine', 'Kitchen'],
  previewImage: 'img/apartment-01.jpg',
  hostInformation: {
    id: 3,
    avatarUrl: 'img/1.png',
    isPro: true,
    name: 'Angelina'
  },
  location: {
    latitude: 52.37548585990128,
    longitude: 4.8588706874558,
    zoom: 8,
  }
},
{
  id: 12,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  images: ['img/img/apartment-02.jpg', 'img/img/apartment-01.jpg'],
  title: 'A great base for anyone who wants to explore the best tourist attractions',
  description: 'We are within 30 minutes reach from our awesome capital city Amsterdam, the typical Dutch village Zaanse Schans.',
  isFavorite: true,
  isPremium: true,
  type: 'room',
  rating: 5,
  bedrooms: 3,
  maxAdults: 6,
  price: 620,
  goods: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Cable TV'],
  previewImage: 'img/apartment-02.jpg',
  hostInformation: {
    id: 1,
    avatarUrl: 'img/1.png',
    isPro: true,
    name: 'Marcella'
  },
  location: {
    latitude: 52.33400379783423,
    longitude: 4.793305242405964,
    zoom: 8,
  }
},
{
  id: 13,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  images: ['img/img/apartment-03.jpg'],
  title: 'Welcome to this stunning 200m2 monumental house!',
  description: 'Enjoy its many windows, the comfortable boxspring beds and bathtub overlooking the canal ;-)',
  isFavorite: true,
  isPremium: true,
  type: 'house',
  rating: 5,
  bedrooms: 5,
  maxAdults: 10,
  price: 800,
  goods: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Heating', 'Air conditioner'],
  previewImage: 'img/apartment-01.jpg',
  hostInformation: {
    id: 2,
    avatarUrl: 'img/1.png',
    isPro: false,
    name: 'Willie'
  },
  location: {
    latitude: 52.375306367779665,
    longitude:  4.814180339260396,
    zoom: 8,
  }
},
];
