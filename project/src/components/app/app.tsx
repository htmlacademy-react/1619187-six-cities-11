//pages импортируем в app, что бы дальше уже сформировалась карта сайта для перехода между страницами

import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  placeCardCount: number;
}

function App({placeCardCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placeCardCount={placeCardCount} />
  );
}

export default App;
