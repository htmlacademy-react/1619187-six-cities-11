import {Offer} from '../types/offer';

export const offers: Offer[] = [{
  id: 1,
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
  isFavorite: true,
  isPremium: true,
  type: 'Apartment',
  rating: 4.6,
  bedrooms: 3,
  maxAdults: 4,
  price: 120,
  insideList: ['Wi-Fi', 'Washing machine', 'Kitchen'],
  previewImage: 'img/apartment-01.jpg',
  hostInformation: {
    id: 3,
    avatarUrl: 'img/1.png',
    isPro: true,
    name: 'Angelina'
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  }
},
{
  id: 2,
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
  isFavorite: false,
  isPremium: true,
  type: 'room',
  rating: 5,
  bedrooms: 1,
  maxAdults: 2,
  price: 62,
  insideList: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Cable TV'],
  previewImage: 'img/apartment-02.jpg',
  hostInformation: {
    id: 1,
    avatarUrl: 'img/1.png',
    isPro: true,
    name: 'Marcella'
  },
  location: {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  }
},
{
  id: 3,
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
  isPremium: false,
  type: 'house',
  rating: 4,
  bedrooms: 3,
  maxAdults: 4,
  price: 658,
  insideList: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Heating', 'Air conditioner'],
  previewImage: 'img/apartment-01.jpg',
  hostInformation: {
    id: 2,
    avatarUrl: 'img/1.png',
    isPro: false,
    name: 'Willie'
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8,
  }
},
{
  id: 4,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  images: ['img/img/apartment-02.jpg'],
  title: 'Hotel is situated in the hip, up-and-coming neighbourhood of Amsterdam Noord',
  description: 'Our restaurant is the perfect place to hang out, all day long. ',
  isFavorite: false,
  isPremium: false,
  type: 'hotel',
  rating: 4.7,
  bedrooms: 1,
  maxAdults: 2,
  price: 135,
  insideList: ['Wi-Fi'],
  previewImage: 'img/apartment-03.jpg',
  hostInformation: {
    id: 4,
    avatarUrl: 'img/1.png',
    isPro: false,
    name: 'Bunk'
  },
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8,
  }
}];
