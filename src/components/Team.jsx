import React from 'react';

import sasha from '../images/team/Sasha.jpg';
import vorobei from '../images/team/Vorobei.jpg';

function Team({ title }) {
  return (
    <section className="team">
      <h2 className="title title_size_medium">{title}</h2>
      <ul className="team__list list">
        <li className="team__card">
          <img
            src={vorobei}
            alt="Фото работника"
            className="team__photo"
          />
          <div className="team__person">
            <p className="team__name">Александр Воробьёв</p>
            <p className="team__job">Ведущий специалист-замер, проект, сборка</p>
          </div>
        </li>
        <li className="team__card">
          <img
            src={sasha}
            alt="Фото работника"
            className="team__photo"
          />
          <div className="team__person">
            <p className="team__name">Александра Воробьёва</p>
            <p className="team__job">Администратор-ведение вашего проекта от звонка до сборки</p>
          </div>
        </li>
        <li className="team__card">
          <img
            src="http://placehold.it/416"
            alt="Фото работника"
            className="team__photo"
          />
          <div className="team__person">
            <p className="team__name">Александр Соловьёв</p>
            <p className="team__job">Столяр плотник-мастер золотые руки</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Team;
