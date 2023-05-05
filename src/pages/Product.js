import { useState, useEffect } from 'react';

import DocumentTitle from '../hooks/DocumentTitle';
import TitleBlock from '../components/TitleBlock';
import Request from '../components/Request'
import PriceCards from '../components/PriceCards';
import Assortment from '../components/Assortment';
import PopupWithCarousel from '../components/PopupWithCarousel';
import Carousel from '../components/Carousel';

import { carouselConfig } from '../utils/carouselConfig';

function Product(props) {
  const [popupContet, setPopupContent] = useState(null)

  useEffect(() => {
    if (popupContet != null) {
    const carousel = new Carousel(carouselConfig)

      carousel.init(popupContet.images, popupContet.name);
    }
  }, [popupContet])

  function handleClickCard(data) {
    setPopupContent(data)
    console.log(data)
  }

  function closePopup() {
    setPopupContent(null)
  }

  return (
    <main>
      <DocumentTitle title={props.content.documentTitle} />
      <TitleBlock
        isGrid
        title={props.content.title}
        description={props.content.description}
        images={props.content.mainImages}
      />
      <PriceCards prices={props.content.prices} />
      <Assortment
        isFlex
        beds={props.content.beds}
        handleClickCard={handleClickCard}
      />
      <Request />
      {popupContet != null &&
        <PopupWithCarousel
          title={props.content.popupTitle}
          name={popupContet.name}
          description={popupContet.description}
          isOpen={popupContet != null ? true : false}
          onClose={closePopup}
        />
      }
    </main>
  );
}

export default Product;
