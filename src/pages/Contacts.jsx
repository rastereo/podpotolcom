import React from 'react';
import DocumentTitle from '../hooks/DocumentTitle';
import TitleBlock from '../components/TitleBlock';
import Contact from '../components/Contact';
import Team from '../components/Team';
import Request from '../components/Request';

function Contacts({ content }) {
  const {
    documentTitle,
    title,
    description,
    teamImage,
    info,
    teamTitle,
    team,
  } = content;

  return (
    <main>
      <DocumentTitle title={documentTitle} />
      <TitleBlock title={title} description={description} />
      <Contact image={teamImage} info={info} />
      <Team title={teamTitle} team={team} />
      <Request page={documentTitle} />
    </main>
  );
}

export default Contacts;
