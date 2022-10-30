import {Offer} from '../types/offer';

export const offers: Offer[] = [{
  id: 1,
  images: ['img/img/apartment-02.jpg', 'img/img/apartment-01.jpg', 'img/img/apartment-03.jpg'],
  title: 'Beautiful & luxurious studio at great location',
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  isFavorite: true,
  isPremium: true,
  type: 'Apartment',
  rating: 4.8,
  bedrooms: 3,
  maxAdults: 4,
  price: 120,
  insideList: ['Wi-Fi', 'Washing machine', 'Kitchen'],
  previewImage: 'img/1.png',
  hostInformation: {
    id: 3,
    avatarUrl: 'img/1.png',
    isPro: true,
    name: 'Angelina'
  },
  reviews: [1,2], //ид отзыва, подходящего для данного предложения,правильно ли связала их?
},
{
  id: 2,
  images: ['img/img/apartment-02.jpg', 'img/img/apartment-01.jpg'],
  title: 'A great base for anyone who wants to explore the best tourist attractions',
  description: 'We are within 30 minutes reach from our awesome capital city Amsterdam, the typical Dutch village Zaanse Schans.',
  isFavorite: false,
  isPremium: false,
  type: 'room',
  rating: 5,
  bedrooms: 1,
  maxAdults: 2,
  price: 62,
  insideList: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Cable TV'],
  previewImage: 'img/1.png',
  hostInformation: {
    id: 1,
    avatarUrl: 'img/1.png',
    isPro: true,
    name: 'Marcella'
  },
  reviews: [1], //ид отзыва, подходящего для данного предложенияправильно ли связала их?
},
{
  id: 3,
  images: ['img/img/apartment-03.jpg'],
  title: 'Welcome to this stunning 200m2 monumental canal house on the most beautiful canal area close to Dam square and nine streets!',
  description: 'Enjoy its many windows, the comfortable boxspring beds and bathtub overlooking the canal ;-)',
  isFavorite: true,
  isPremium: false,
  type: 'house',
  rating: 5,
  bedrooms: 3,
  maxAdults: 4,
  price: 658,
  insideList: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Heating', 'Air conditioner'],
  previewImage: 'img/1.png',
  hostInformation: {
    id: 2,
    avatarUrl: 'img/1.png',
    isPro: false,
    name: 'Willie'
  },
  reviews: [2,3], //ид отзыва, подходящего для данного предложенияправильно ли связала их?
},
{
  id: 4,
  images: ['img/img/apartment-02.jpg'],
  title: 'Hotel Amsterdam is situated in the hip, up-and-coming neighbourhood of Amsterdam Noord',
  description: 'Our restaurant is the perfect place to hang out, all day long. ',
  isFavorite: false,
  isPremium: false,
  type: 'hotel',
  rating: 4.7,
  bedrooms: 1,
  maxAdults: 2,
  price: 135,
  insideList: ['Wi-Fi'],
  previewImage: 'img/1.png',
  hostInformation: {
    id: 4,
    avatarUrl: 'img/1.png',
    isPro: false,
    name: 'Bunk'
  },
  reviews: [1,2,3], //ид отзыва, подходящего для данного предложения,правильно ли связала их?
}];
