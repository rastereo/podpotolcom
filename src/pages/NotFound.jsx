import React from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from '../hooks/DocumentTitle';

function NotFound() {
  return (
    <main>
      <DocumentTitle title="404 Not Found" />
      <section className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__description">
            Упс, кажется, страница которую вы ищите где-то потерялась.
          </p>
          <Link
            to="/"
            className="not-found__link"
          >
            Перейти на главную
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
