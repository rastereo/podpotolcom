import React from 'react';
import DocumentTitle from '../hooks/DocumentTitle';
import TitleBlock from '../components/TitleBlock';
import Contact from '../components/Contact';
import Team from '../components/Team';
import Request from '../components/Request'

function Contacts(props) {
  return (
    <main>
      <DocumentTitle title={props.content.documentTitle} />
      <TitleBlock title={props.content.title} description={props.content.description} />
      <Contact image={props.content.teamImage} info={props.content.info} />
      <Team title={props.content.teamTitle} team={props.content.team} />
      <Request page={props.content.documentTitle} />
    </main>
  );
}

export default Contacts;
