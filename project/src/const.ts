import {Offer} from './types/offer';

export enum AppRoute { //перечисление всех маршрутов
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  NearOffers = '/hotels/{hotelId}/nearby',
  Reviews = '/comments/{hotelId}',
}

export enum AuthorizationStatus { //перечисление вариантов авторизации
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN', //сначала "думаем", что статус Unknown, потом делаем запрос к серверу
}

export const CITIES = [
  {title: 'Paris',
    lat: 48.85612303673775,
    lng: 2.3549292541869713,
    zoom: 10
  },
  {title: 'Cologne',
    lat: 50.94420919620896,
    lng: 6.94534141210058,
    zoom: 10
  },
  {title: 'Brussels',
    lat: 50.84860056882877,
    lng: 4.362368745827621,
    zoom: 10
  },
  {title: 'Amsterdam',
    lat: 52.370216,
    lng: 4.895168,
    zoom: 10
  },
  {title: 'Hamburg',
    lat: 53.55987613787982,
    lng: 9.999201777218904,
    zoom: 10
  },
  {title: 'Dusseldorf',
    lat: 51.23192226557335,
    lng: 6.770396652909783,
    zoom: 10
  }];


export const SortType = {
  POPULAR: 'Popular',
  PRICELOWTOHIGHT: 'Price: low to high',
  PRICEHIGHTTOLOW: 'Price: high to low',
  RAITING: 'Top rated first',
};

export const sortOffersByPrice = (offerA: Offer, offerB: Offer) => {
  const priceA = offerA.price;
  const priceB = offerB.price;
  if (priceA < priceB) {
    return 1;
  }
  if (priceA > priceB) {
    return -1;
  }
  return 0;
};

