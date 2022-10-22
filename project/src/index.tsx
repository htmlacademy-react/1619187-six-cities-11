//входной файл для старта работы приложения
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = { //enum- перечисление в виде объекта. В результате компиляции получится обычный JavaScript-объект.
  PlaceCardCount: 5,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App placeCardCount= {Setting.PlaceCardCount}/>
  </React.StrictMode>
);
