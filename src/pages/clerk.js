import './clerk.css'

import PopupWithImage from '../components/PopupWithImage.js';

const imageList = Array.from(document.querySelectorAll('.gallery__photo'))
const popupWithImage = new PopupWithImage('.popup_name_image');
const input = document.querySelector(".request__input_value_phone");

popupWithImage.setEventListeners()

imageList.forEach(image => {
  image.addEventListener('click', () => popupWithImage.open(image.src))
})

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
