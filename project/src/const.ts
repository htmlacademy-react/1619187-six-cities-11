export enum AppRoute { //перечисление всех маршрутов
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer',
}

export enum AuthorizationStatus { //перечисление вариантов авторизации
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN', //сначала "думаем", что статус Unknown, потом делаем запрос к серверу
}
