// https://postmail.invotes.com/
//https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript
//update this with your requestForm selector

const data_js = {
  "access_token": "pzso0zyz60vrrh0fndjv1by8" // лимит в день: 25 писем :(
};

// function js_onSuccess() {
//   // remove this to avoid redirect
//   window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
// }

// function js_onError(error) {
//   // remove this to avoid redirect
//   window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
// }

const requestForm = document.querySelector('.request__form');
const sendButton = requestForm.querySelector('.request__button-submit');
const sendButtonValue = sendButton.textContent;

function js_send() {
  sendButton.textContent = 'Отправляю…';
  sendButton.disabled = true;

  const request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      // js_onSuccess();

      requestForm.reset();

      sendButton.textContent = sendButtonValue;
      sendButton.disabled = false;
    } else if (request.readyState == 4) {
      // js_onError(request.response)

      sendButton.textContent = sendButtonValue;
      sendButton.disabled = false;

      alert(`Ошибка: ${request.status} (${request.statusText})`);
    }
  };

  // const subject = document.querySelector("#" + form_id_js + " [name='name']").value;
  const name = requestForm.name.value; // Имя
  const phone = requestForm.phone.value; // Телефон
  const pageTitle = document.querySelector('.title').textContent; // Страница откуда пришел запрос. Отправляю h1 страницы

  data_js['subject'] = "Хотят обсудить проект!"; // Тема письма
  data_js['text'] = `Имя: ${name}\nТелефон: ${phone}\nЗапрос пришел со страницы: ${pageTitle}` // Текст письма

  const params = toParams(data_js);

  request.open("POST", "https://postmail.invotes.com/send", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.send(params);

  return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
  const form_data = [];
  for (const key in data_js) {
    form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
  }

  return form_data.join("&");
}

requestForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
