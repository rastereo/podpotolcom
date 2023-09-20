import React from 'react';
import DocumentTitle from '../hooks/DocumentTitle';
import TitleBlock from '../components/TitleBlock';
import PriceCards from '../components/PriceCards';
import Request from '../components/Request';

function Price({ content }) {
  const {
    documentTitle,
    title,
    description,
    prices,
    rules,
  } = content;

  return (
    <main>
      <DocumentTitle title={documentTitle} />
      <TitleBlock
        title={title}
        description={description}
      />
      <PriceCards
        prices={prices}
        rules={rules}
      />
      <Request page={documentTitle} />
    </main>
  );
}

export default Price;
