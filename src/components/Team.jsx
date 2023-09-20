import React from 'react';

function Team({ title, team }) {
  return (
    <section className="team">
      <h2 className="title title_size_medium">{title}</h2>
      <ul className="team__list list">
        {team.map((worker, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className="team__card">
            <img
              src={worker.image}
              alt="Фото работника"
              className="team__photo"
            />
            <div className="team__person">
              <p className="team__name">{worker.name}</p>
              <p className="team__job">{worker.job}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Team;
