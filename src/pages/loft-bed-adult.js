import './loft-bed-adult.css'
import '../utils/postmail.js'

import { formValidationConfig } from '../utils/formValidationConfig.js';
import { carouselConfig } from '../utils/carouselConfig';
import { loftBedAdultData } from '../utils/loftBedAdultData.js';
import FormValidator from '../components/FormValidator.js';
import Content from '../components/content.js';
import Carousel from '../components/Carousel.js';
import Popup from '../components/Popup.js'
import Element from '../components/Element';

const input = document.querySelector(".request__input_value_phone");
const requestForm = document.querySelector('.request__form');
const cardList = document.querySelectorAll('.card');

const formValidator = new FormValidator(formValidationConfig, requestForm);
const carousel = new Carousel(carouselConfig);
const popupWithCarousel = new Popup('.popup');
const popupTitle = new Element('.title_size_small')
const popupDescription = new Element('.title-block__description_type_popup')

const content = new Content({
  data: loftBedAdultData,
  callback: (images, title, name, description) => {
    carousel.init(images, title, name);

    popupTitle.render(`${title} «${name}»`);
    popupDescription.render(description);

    popupWithCarousel.open();
  }
});

content.renderMainBlock();
content.renderPriceCard('#template-price-card', '.price__card', '.price');
content.renderCards('#template-card', '.card', '.assortment__container');

formValidator.enableValidation();
formValidator.resetValidation();

popupWithCarousel.setEventListeners();

const prefixNumber = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "8 (";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};

input.addEventListener("input", (e) => {
  const value = input.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result;
  if (input.value.includes("+8") || input.value[0] === "8") {
    result = "";
  } else {
    result = "+";
  }

  //
  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  //
  input.value = result;
});
