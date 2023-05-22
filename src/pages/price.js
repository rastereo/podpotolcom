import React from 'react';
import DocumentTitle from '../hooks/DocumentTitle';
import TitleBlock from '../components/TitleBlock'
import PriceCards from '../components/PriceCards';
import Request from '../components/Request'

function Price(props) {
  return (
    <main>
      <DocumentTitle title={props.content.documentTitle} />
      <TitleBlock title={props.content.title} description={props.content.description} />
      <PriceCards  prices={props.content.prices} rules={props.content.rules}  />
      <Request page={props.content.documentTitle} />
    </main>
  );
}

export default Price;
