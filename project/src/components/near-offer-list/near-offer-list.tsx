import NearOfferCard from '../../components/near-offer-card/near-offer-card';
import {Offer} from '../../types/offer';

type NearOfferListProps = {
  nearOffers: Offer[];
  onListItemHover: (id: number)=> void;
}

function NearOfferList ({nearOffers, onListItemHover}:NearOfferListProps): JSX.Element {

  function changeSetActive (id: number) {
    onListItemHover(id);
  }


  return (
    <>
      {nearOffers.map((nearOffer) => <NearOfferCard nearOffer={nearOffer} key = {nearOffer.id} changeSetActive={changeSetActive}/>)}
    </>
  );
}

export default NearOfferList;
