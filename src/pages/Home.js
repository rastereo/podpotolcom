import React from 'react';

import Presentation from '../components/Presentation';
import Assortment from '../components/Assortment';
import Achievement from '../components/Achievement';
import AboutUs from '../components/AboutUs';
import ScrollAnchor from '../hooks/ScrollAnchor';
import DocumentTitle from '../hooks/DocumentTitle';
import Request from '../components/Request';

function Home(props) {
  return (
    <main>
      <DocumentTitle title={props.content.documentTitle} />
      <Presentation
        title={props.content.title}
        description={props.content.description}
        buttonName={props.content.buttonConnect}
        images={props.content.mainImages}
      />
      <Assortment
        title={props.content.assortment.title}
        description={props.content.assortment.description}
        beds={props.content.assortment.beds}
      />
      <Achievement
        title={props.content.achievement.title}
        numbers={props.content.achievement.numbers}
        feats={props.content.achievement.feats}
      />
      <AboutUs
        title={props.content.aboutUs.title}
        texts={props.content.aboutUs.texts}
        image={props.content.aboutUs.image}
      />
      <Request page={props.content.documentTitle} />
      <ScrollAnchor />
    </main>
  );
}

export default Home;
