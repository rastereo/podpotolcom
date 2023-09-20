import React from 'react';

import Presentation from '../components/Presentation';
import Assortment from '../components/Assortment';
import Achievement from '../components/Achievement';
import AboutUs from '../components/AboutUs';
import ScrollAnchor from '../hooks/ScrollAnchor';
import DocumentTitle from '../hooks/DocumentTitle';
import Request from '../components/Request';

function Home({ content }) {
  const {
    documentTitle,
    title,
    description,
    buttonConnect,
    mainImages,
    assortment,
    achievement,
    aboutUs,
  } = content;

  return (
    <main>
      <DocumentTitle title={documentTitle} />
      <Presentation
        title={title}
        description={description}
        buttonName={buttonConnect}
        images={mainImages}
      />
      <Assortment
        title={assortment.title}
        description={assortment.description}
        beds={assortment.beds}
      />
      <Achievement
        title={achievement.title}
        numbers={achievement.numbers}
        feats={achievement.feats}
      />
      <AboutUs
        title={aboutUs.title}
        texts={aboutUs.texts}
        image={aboutUs.image}
      />
      <Request page={documentTitle} />
      <ScrollAnchor />
    </main>
  );
}

export default Home;
