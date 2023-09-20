import { useState, useEffect } from 'react';

import DocumentTitle from '../hooks/DocumentTitle';
import TitleBlock from '../components/TitleBlock';
import Request from '../components/Request';
import PriceCards from '../components/PriceCards';
import Assortment from '../components/Assortment';
import PopupWithCarousel from '../components/PopupWithCarousel';
import Carousel from '../components/Carousel';

import carouselConfig from '../utils/carouselConfig';

function Product({ content }) {
  const {
    documentTitle,
    title,
    description,
    mainImages,
    prices,
    beds,
    popupTitle,
  } = content;

  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    if (popupContent != null) {
      const carousel = new Carousel(carouselConfig);

      carousel.init(popupContent.images, popupContent.name);
    }
  }, [popupContent]);

  function handleClickCard(data) {
    setPopupContent(data);

    console.log(data);
  }

  function closePopup() {
    setPopupContent(null);
  }

  return (
    <main>
      <DocumentTitle title={documentTitle} />
      <TitleBlock
        isGrid
        title={title}
        description={description}
        images={mainImages}
      />
      <PriceCards prices={prices} />
      <Assortment
        isFlex
        beds={beds}
        handleClickCard={handleClickCard}
      />
      <Request page={documentTitle} />
      {popupContent != null
        && (
          <PopupWithCarousel
            title={popupTitle}
            name={popupContent.name}
            description={popupContent.description}
            isOpen={popupContent != null}
            onClose={closePopup}
          />
        )}
    </main>
  );
}

export default Product;
