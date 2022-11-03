import React from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
}

function OfferList ({offers}:OfferListProps): JSX.Element { //принимает массив офферов, перебираем его map и рендерим каждый оффер, которому передаем данные из моков

  const [, setActive] = React.useState(0); //будем сохранять в состояние id карточки, на которую навели курсор. active - пока удалила, тк не испольщуется

  function changeSetActive (id: number) {
    setActive(id);
  }

  return (
    <>
      {offers.map((offer) => <OfferCard offer={offer} key = {offer.id} changeSetActive={changeSetActive} />)}
    </>
  );
}

export default OfferList;
