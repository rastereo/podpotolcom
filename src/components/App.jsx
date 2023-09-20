import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// import mainData from '../utils/data/mainData.json'
// import priceData from '../utils/data/priceData.json'
import contactsData from '../utils/data/contactsData.json';
// import loftBedAdultData from '../utils/data/loftBedAdultData.json'
import tablesData from '../utils/data/tablesData.json';

import ScrollToTop from '../hooks/ScrollToTop';

import Header from './Header';
import Footer from './Footer';
import ContactMenu from './ContactMenu';

import Home from '../pages/Home';
import Price from '../pages/Price';
import Contacts from '../pages/Contacts';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

function App() {
  const [mainContent, setMainContent] = useState(null);
  const [priceContent, setPriceContent] = useState(null);
  const [contactsContent, setContactsContent] = useState(null);
  const [loftBedAdultContent, setLoftBedAdultContent] = useState(null);
  const [loftBedChildrenContent, setLoftBedChildrenContent] = useState(null);
  const [bunkBedContent, setBunkBedContent] = useState(null);
  const [tablesContent, setTablesContent] = useState(null);
  const [otherContent, setOtherContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('https://podpotolkom.transcendent.app/mainData')
      .then((res) => setMainContent(res.data))
      .catch((err) => setError(err.message));

    axios('https://podpotolkom.transcendent.app/priceData')
      .then((res) => setPriceContent(res.data))
      .catch((err) => setError(err.message));

    // axios('https://podpotolkom.transcendent.app/contactsData')
    //   .then((res) => setContactsContent(res.data))
    //   .catch((err) => setError(err.message))

    setContactsContent(contactsData);

    axios('https://podpotolkom.transcendent.app/loftBedAdultData')
      .then((res) => setLoftBedAdultContent(res.data))
      .catch((err) => setError(err.message));

    axios('https://podpotolkom.transcendent.app/loftBedChildrenData')
      .then((res) => setLoftBedChildrenContent(res.data))
      .catch((err) => setError(err.message));

    axios('https://podpotolkom.transcendent.app/bunkBedData')
      .then((res) => setBunkBedContent(res.data))
      .catch((err) => setError(err.message));

    // axios('https://podpotolkom.transcendent.app/tablesData')
    //   .then((res) => setTablesContent(res.data))
    //   .catch((err) => setError(err.message))

    setTablesContent(tablesData);

    axios('https://podpotolkom.transcendent.app/otherData')
      .then((res) => setOtherContent(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              mainContent != null
                ? <Home content={mainContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="/price"
            element={
              priceContent != null
                ? <Price content={priceContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="/contacts"
            element={
              contactsContent
                ? <Contacts content={contactsContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="/loft-bed-adult"
            element={
              loftBedAdultContent
                ? <Product content={loftBedAdultContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="/loft-bed-children"
            element={
              loftBedChildrenContent
                ? <Product content={loftBedChildrenContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="/bunk-bed"
            element={
              bunkBedContent
                ? <Product content={bunkBedContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="/tables"
            element={
              tablesContent
                ? <Product content={tablesContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="/other"
            element={
              otherContent
                ? <Product content={otherContent} />
                : <h1 style={{ color: 'red' }}>{error}</h1>
            }
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </ScrollToTop>
      <Footer />
      <ContactMenu />
    </>
  );
}

export default App;
