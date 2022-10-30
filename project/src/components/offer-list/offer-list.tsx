import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
}

function OfferList ({offers}:OfferListProps): JSX.Element { //принимает массив офферов, перебираем его map и рендерим каждый оффер, которому передаем данные из моков
  return (
    <>
      {offers.map((offer) => <OfferCard offer={offer} key = {offer.id}/>)}
    </>
  );
}

export default OfferList;
