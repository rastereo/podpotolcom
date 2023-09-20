/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ClosePopupOnKeydown from '../hooks/ClosePopupOnKeydown';

function PopupWithCarousel({
  isOpen,
  onClose,
  title,
  name,
  description,
}) {
  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      onClick={(evt) => evt.target.classList.contains('popup') && onClose()}
    >
      <div className="popup__container">
        <section className="title-block title-block_display_flex tittle-block_padding_none">
          <h1 className="title title_size_small">
            {`${title} «${name}»`}
          </h1>
          <p className="title-block__description title-block__description_position_popup">
            {description}
          </p>
        </section>
        <div className="carousel">
          <div className="carousel__section-scroll">
            <ul className="carousel__section-list list"></ul>
            <button
              type="button"
              className="carousel__button carousel__button_type_prev-arrow"
              aria-label="preview"
            >
            </button>
            <button
              type="button"
              className="carousel__button carousel__button_type_next-arrow"
              aria-label="next"
            >
            </button>
          </div>
          <ul className="carousel__preview-list list"></ul>
        </div>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
          aria-label="close"
        >
        </button>
      </div>
      {isOpen && <ClosePopupOnKeydown action={onClose} />}
    </div>
  );
}

export default PopupWithCarousel;
