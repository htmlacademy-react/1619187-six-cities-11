import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  onListItemHover: (id: number)=> void;
}

function OfferList ({offers, onListItemHover}:OfferListProps): JSX.Element { //принимает массив офферов, перебираем его map и рендерим каждый оффер, которому передаем данные из моков


  function changeSetActive (id: number) {
    onListItemHover(id);
  }


  return (
    <>
      {offers.map((offer) => <OfferCard offer={offer} key = {offer.id} changeSetActive={changeSetActive} />)}
    </>
  );
}

export default OfferList;
