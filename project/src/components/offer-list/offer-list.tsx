import { memo } from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  classnameForCard: string;
  classnameForImg: string;
  onListItemHover?: (id: number)=> void;
}

function OfferList ({offers, classnameForCard, classnameForImg, onListItemHover}:OfferListProps): JSX.Element { //принимает массив офферов, перебираем его map и рендерим каждый оффер, которому передаем данные из моков
  function changeSetActive (id: number) {
    onListItemHover?.(id);
  }

  return (
    <>
      {offers.map((offer) => <OfferCard offer={offer} offerId = {offer.id} key = {offer.id} classNameForCard={classnameForCard} classNameForImg={classnameForImg} changeSetActive={changeSetActive} />)}
    </>
  );
}

export default memo(OfferList);
