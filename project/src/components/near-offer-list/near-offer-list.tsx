import NearOfferCard from '../../components/near-offer-card/near-offer-card';
import {Offer} from '../../types/offer';

type NearOfferListProps = {
  nearOffers: Offer[];
}

function NearOfferList ({nearOffers}:NearOfferListProps): JSX.Element {

  // function changeSetActive (id: number) {
  //   onListItemHover(id);
  // }


  return (
    <>
      {nearOffers.map((nearOffer) => <NearOfferCard nearOffer={nearOffer} key = {nearOffer.id} />)}
    </>
  );
}

export default NearOfferList;
