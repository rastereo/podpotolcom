import './index.css'
import '../utils/emerge.js'

import { CountUp } from 'countup.js';


const numbers = Array.from(document.querySelectorAll('#number'))
const input = document.querySelector(".request__input_value_phone");
const anchors = document.querySelectorAll('a[href*="#"]')

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

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

numbers.forEach(number => {
  const countUp = new CountUp(number, number.textContent, {
    enableScrollSpy: true,
    scrollSpyDelay: -25,
    duration: 5,
    scrollSpyOnce: true
  });

  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
})
