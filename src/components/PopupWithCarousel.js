import React from "react";
import ClosePopupOnKeydown from "../hooks/ClosePopupOnKeydown";

function PopupWithCarousel(props) {
  return (
    <div
      className={`popup ${props.isOpen && 'popup_opened'}`}
      onClick={(evt) => evt.target.classList.contains('popup') && props.onClose()}
    >
      <div className="popup__container">
        <section className="title-block title-block_display_flex tittle-block_padding_none">
          <h1 className="title title_size_small">{`${props.title} «${props.name}»`}</h1>
          <p className="title-block__description title-block__description_type_popup">{props.description}</p>
        </section>
        <div className="carousel">
          <div className="carousel__section-scroll">
            <ul className="carousel__section-list list"></ul>
            <button type="button" className="carousel__button carousel__button_type_prev-arrow"></button>
            <button type="button" className="carousel__button carousel__button_type_next-arrow"></button>
          </div>
          <ul className="carousel__preview-list list"></ul>
        </div>
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
      </div>
      {props.isOpen && <ClosePopupOnKeydown action={props.onClose} />}
    </div>
  );
}

export default PopupWithCarousel;
