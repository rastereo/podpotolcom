(()=>{var t={600:()=>{var t={access_token:"pzso0zyz60vrrh0fndjv1by8"},e=document.querySelector(".request__form"),i=e.querySelector(".request__button-submit"),n=i.textContent;i.onclick=function(){i.textContent="Отправляю…",i.disabled=!0;var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status?(e.reset(),i.textContent=n,i.disabled=!1):4==r.readyState&&(i.textContent=n,i.disabled=!1,alert("Ошибка: ".concat(r.status," (").concat(r.statusText,")")))};var o=e.name.value,s=e.phone.value,c=document.querySelector(".title").textContent;t.subject="Хотят обсудить проект!",t.text="Имя: ".concat(o,"\nТелефон: ").concat(s,"\nЗапрос пришел со страницы: ").concat(c);var a=function(t){var e=[];for(var i in t)e.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return e.join("&")}(t);return r.open("POST","https://postmail.invotes.com/send",!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.send(a),!1},e.addEventListener("submit",(function(t){t.preventDefault()}))}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(o)?o:String(o)),r)}var o}i(600);var n=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=i}var i,n;return i=t,n=[{key:"_makeInvalidInput",value:function(t){t.classList.add(this._inputErrorClass)}},{key:"_removeInvalidInput",value:function(t){t.classList.remove(this._inputErrorClass)}},{key:"_showErrorMessage",value:function(t,e){e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideErrorMessage",value:function(t){t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleInputValidation",value:function(t,e){t.validity.valid?(this._removeInvalidInput(t),this._hideErrorMessage(e)):(this._makeInvalidInput(t),this._showErrorMessage(t,e))}},{key:"_checkInputsInvalid",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_addDisabledSubmit",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass)}},{key:"_removeDisabledSubmit",value:function(){this._submitButton.disabled=!1,this._submitButton.classList.remove(this._inactiveButtonClass)}},{key:"_toggleDisabledSubmit",value:function(){this._checkInputsInvalid()?this._addDisabledSubmit():this._removeDisabledSubmit()}},{key:"_getErrorSelector",value:function(t){return this._error=this._form.querySelector(".request__error_name_".concat(t.name)),this._error}},{key:"_setEventListeners",value:function(t,e){var i=this;t.addEventListener("input",(function(){i._toggleInputValidation(t,e),i._toggleDisabledSubmit()}))}},{key:"enableValidation",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputList.forEach((function(e){t._setEventListeners(e,t._getErrorSelector(e))}))}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._removeInvalidInput(e),t._hideErrorMessage(t._getErrorSelector(e))})),this._toggleDisabledSubmit()}}],n&&e(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===r(o)?o:String(o)),n)}var o}var s=function(){function t(e){var i=e.data,n=e.callback;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=i.title,this._popupTitle=i.popupTitle,this._description=i.description,this._mainImages=i.mainImages,this._prices=i.prices,this._beds=i.beds,this._callback=n}var e,i;return e=t,(i=[{key:"_getTemplateCard",value:function(t,e){return document.querySelector(t).content.querySelector(e).cloneNode(!0)}},{key:"_getListItem",value:function(t,e){var i=document.createElement("li"),n=document.createElement("p");return n.textContent=t,n.classList.add(e),i.append(n),i}},{key:"renderMainBlock",value:function(){var t=this;this._mainBlockElement=document.querySelector(".title-block"),this._titleElement=this._mainBlockElement.querySelector(".title"),this._descriptionElement=this._mainBlockElement.querySelector(".title-block__description"),this._containerElement=this._mainBlockElement.querySelector(".title-block__grid"),this._titleElement.textContent=this._title,this._descriptionElement.textContent=this._description,this._mainImages.forEach((function(e){var i=document.createElement("img");i.src=e,i.classList.add("title-block__image"),i.alt="Фото ".concat(t._title),t._containerElement.append(i)}))}},{key:"renderPriceCard",value:function(t,e,i){var n=this;this._priceContainerElement=document.querySelector(i),this._prices.forEach((function(i){var r=n._getTemplateCard(t,e),o=r.querySelector(".price__title"),s=r.querySelector(".price__sizes"),c=r.querySelector(".price__options");if(o.textContent=i.title,i.sizes.forEach((function(t){s.append(n._getListItem(t,"price__size"))})),i.options.forEach((function(t){c.append(n._getListItem(t,"price__option"))})),i.optionsPlus){var a=r.querySelector(".price__options_name_plus");i.optionsPlus.forEach((function(t){a.append(n._getListItem(t,"price__option"))}))}n._priceContainerElement.append(r)}))}},{key:"renderCards",value:function(t,e,i){var n=this;this._assortmentContainertElement=document.querySelector(i),this._beds.forEach((function(i){var r=n._getTemplateCard(t,e),o=r.querySelector(".card__description"),s=r.querySelector(".card__image");o.textContent=i.name,s.src=i.cover,s.alt="Фото ".concat(n._popupTitle," «").concat(i.name,"»"),r.addEventListener("click",(function(){n._callback(i.images,n._popupTitle,i.name,i.description)})),n._assortmentContainertElement.append(r)}))}}])&&o(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==c(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(r)?r:String(r)),n)}var r}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._carousel=document.querySelector(e.carouselSelector),this._sectionContainer=this._carousel.querySelector(e.sectionSelector),this._previewContainer=this._carousel.querySelector(e.prewiewSelector),this._prevBtn=this._carousel.querySelector(e.prevBtnSelector),this._nextBtn=this._carousel.querySelector(e.nextBtnSelector),this._slideSelector=e.slideSelector,this._prewiewItemSelector=e.previewItemSelector,this._previewClass=e.previewSelector,this._previeActiveClass=e.previeActiveClass,this._keyDown=this._handleNextSlide.bind(this),this._nextSlide=this._next.bind(this),this._prevSlide=this._prev.bind(this)}var e,i;return e=t,(i=[{key:"_render",value:function(){var t=this;this._offset=0,this._slides.forEach((function(e,i){i<t._currentIndex&&(t._offset+=e.offsetWidth)})),this._sectionContainer.style.transform="translateX(-".concat(this._offset,"px)"),this._previews.forEach((function(e,i){i===t._currentIndex?e.classList.add(t._previeActiveClass):e.classList.remove(t._previeActiveClass)}))}},{key:"_prev",value:function(){0===this._currentIndex?this._currentIndex=this._slides.length-1:this._currentIndex--,this._render()}},{key:"_next",value:function(){this._currentIndex===this._slides.length-1?this._currentIndex=0:this._currentIndex++,this._render()}},{key:"_goTo",value:function(t){t<0||t>this._slides.length-1||(this._currentIndex=t,this._render())}},{key:"_handleNextSlide",value:function(t){"ArrowLeft"===t.key&&this._prev(),"ArrowRight"===t.key&&this._next()}},{key:"_getListItem",value:function(t,e,i,n,r){var o=document.createElement("li"),s=document.createElement("img");return o.classList.add(t),s.classList.add(e),s.src=i,s.alt="Фото ".concat(n," ").concat(r),o.append(s),o}},{key:"_setEventListeners",value:function(){var t=this;this._prevBtn.addEventListener("click",this._prevSlide),this._nextBtn.addEventListener("click",this._nextSlide),document.addEventListener("keydown",this._keyDown),this._previews.forEach((function(e,i){e.addEventListener("click",(function(){return t._goTo(i)}))}))}},{key:"_removeEventListeners",value:function(){this._prevBtn.removeEventListener("click",this._prevSlide),this._nextBtn.removeEventListener("click",this._nextSlide),document.removeEventListener("keydown",this._keyDown)}},{key:"init",value:function(t,e,i){var n=this;this._currentIndex=0,this._sectionContainer.innerHTML="",this._previewContainer.innerHTML="",this._removeEventListeners(),t.forEach((function(t){var r=n._getListItem("carousel__section","carousel__image",t,e,i),o=n._getListItem("carousel__preview","carousel__preview-image",t,e,i);n._sectionContainer.append(r),n._previewContainer.append(o)})),this._slides=this._carousel.querySelectorAll(this._slideSelector),this._previews=this._carousel.querySelectorAll(this._prewiewItemSelector),this._render(),this._setEventListeners()}}])&&a(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function p(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==u(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(r)?r:String(r)),n)}var r}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeEsc=this._handleEscClose.bind(this)}var e,i;return e=t,(i=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleTarget",value:function(t){t.target.classList.contains("popup")&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeEsc)}},{key:"setEventListeners",value:function(){var t=this;this._closeButton=this._popup.querySelector(".popup__close-button"),this._closeButton.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("click",(function(e){return t._handleTarget(e)}))}}])&&p(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==m(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(r)?r:String(r)),n)}var r}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(e)}var e,i;return e=t,(i=[{key:"render",value:function(t){this._container.textContent=t}}])&&_(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f=document.querySelector(".request__input_value_phone"),v=new n({formSelector:".request__form",inputSelector:".request__input",submitButtonSelector:".request__button-submit",inactiveButtonClass:"request__button-submit_disabled",inputErrorClass:"request__input_type_error",errorClass:"request__error_visible"},document.querySelector(".request__form")),b=new l({carouselSelector:".carousel",sectionSelector:".carousel__section-list",slideSelector:".carousel__section",prewiewSelector:".carousel__preview-list",previewItemSelector:".carousel__preview",prevBtnSelector:".carousel__button_type_prev-arrow",nextBtnSelector:".carousel__button_type_next-arrow",previeActiveClass:"carousel__preview_active"}),y=new d(".popup"),g=new h(".title_size_small"),S=new h(".title-block__description_type_popup"),w=new s({data:{title:"Другая мебель",popupTitle:"Другая мебель",description:"Кровать из массива сосны, ящик и полочка. Лестница-стеллаж и кормушка для птиц. Мы открыты любому проекту из дерева.",mainImages:["https://static.tildacdn.com/tild6162-3964-4264-b662-653565613334/11951374_83041502374.jpg","https://static.tildacdn.com/tild6564-3939-4734-b534-613939633934/128.png","https://static.tildacdn.com/tild3034-6435-4062-b732-633366623831/z_01d574c8_1.jpg"],prices:[{title:"Кроватка для новорожденного",sizes:["При размере не более 120х60 на колёсиках -15800 ₽, с ящиком -19900 ₽"],options:["Покраска лаком — БЕСПЛАТНО","Кроватку привозим в сборе, доставка включена в стоимость. Кроватка БЕЗ матраса."]},{title:"Дополнительно",sizes:["Полка под кровать — 5 000 ₽ в цвет кровати, габаритные размеры (ВхШхГ) не более 30х200х20"],options:["Выезд на замер внутри МКАД — 500 ₽","Макет кровати в 3D — 500 ₽","При заказе кровати замер и макет — БЕСПЛАТНО","Доставка и сборка за МКАД: в пределах ММК — 2 200 ₽, в пределах БМК — 3 500 ₽"],optionsPlus:["Мы можем сделать бортик выше стандартного:","40-60 см — 2000 ₽, выше 60 см от дна спального места обговаривается индивидуально."]}],beds:[{name:"Лестница- комод",description:"или лестница-стеллаж, или лестница-стеллаж с ящиками. Придумывайте, а мы воплотим!",cover:"https://static.tildacdn.com/tild3438-6430-4366-a361-356561613466/_126.jpg",images:["https://static.tildacdn.com/tild3438-6430-4366-a361-356561613466/_126.jpg","https://static.tildacdn.com/tild6164-3536-4765-b032-633761366534/_124.jpg","https://static.tildacdn.com/tild3766-3031-4131-a464-653935326232/123.jpg","https://static.tildacdn.com/tild6437-6633-4732-a163-323337613531/IMG_3328.jpg","https://static.tildacdn.com/tild3866-6233-4534-b134-333832316137/127.jpg","https://static.tildacdn.com/tild3166-3739-4463-b532-623638313237/_125.jpg"]},{name:"Кровать для взрослых (подиум)",description:"Те виды кроватей что не парят Pod potolcom, а стоят крепко на полу.",cover:"https://static.tildacdn.com/tild6636-3333-4735-b734-626238383834/noroot.png",images:["https://static.tildacdn.com/tild6164-3137-4561-b138-343733363934/57155586_23412737026.jpg","https://static.tildacdn.com/tild3430-6433-4563-b437-336134323234/57289379_23412735793.jpg","https://static.tildacdn.com/tild3032-3265-4966-b438-663135306332/1901428_571975462918.jpg","https://static.tildacdn.com/tild6162-3964-4264-b662-653565613334/11951374_83041502374.jpg"]},{name:"Кровать домик",description:"Это то, что мы до последнего отказывались делать. Но увидев однажды, результаты труда коллег, решили, что не имеем права дальше оставлять вас без хорошо и крепко сделанной кровати.",cover:"https://static.tildacdn.com/tild3262-3530-4465-a566-613539633538/37578814_19575100476.jpg",images:["https://thumb.tildacdn.com/tild3337-3039-4033-b434-386534646536/-/format/webp/IMG_2384.PNG","https://thumb.tildacdn.com/tild3136-6339-4462-b831-623361366534/-/format/webp/IMG_2381.PNG","https://thumb.tildacdn.com/tild6663-3462-4337-b938-353939343132/-/format/webp/58732985_23590887108.jpg","https://thumb.tildacdn.com/tild6639-6265-4365-b132-656535623065/-/format/webp/58727340_23590888042.jpg","https://thumb.tildacdn.com/tild3262-3530-4465-a566-613539633538/-/format/webp/37578814_19575100476.jpg","https://thumb.tildacdn.com/tild6631-3231-4430-b939-666230303761/-/format/webp/58462171_23590887575.jpg"]},{name:"Наклонная лестница",description:"В торце или подлинной стороне кровати. С приступком или без. Прямая или ломанная. ",cover:"https://thumb.tildacdn.com/tild6239-3064-4538-a663-373938376133/-/format/webp/WP_20160128_003.jpg",images:["https://thumb.tildacdn.com/tild6532-6433-4533-a433-383664306330/-/format/webp/2_4.jpg","https://thumb.tildacdn.com/tild6563-3136-4432-a661-306330303037/-/format/webp/IMG_9898.jpg","https://thumb.tildacdn.com/tild3330-3266-4061-b465-653138333333/-/format/webp/photo.jpg","https://thumb.tildacdn.com/tild3961-3363-4636-b232-326639393439/-/format/webp/P1060511_1.jpg","https://thumb.tildacdn.com/tild6663-6138-4232-b236-616334376534/-/format/webp/DSC_0051-2.JPG","https://thumb.tildacdn.com/tild6663-6136-4965-a633-386661363837/-/format/webp/bur_447602.JPG","https://thumb.tildacdn.com/tild3364-3861-4432-b330-646634346636/-/format/webp/2.jpg","https://thumb.tildacdn.com/tild6239-3064-4538-a663-373938376133/-/format/webp/WP_20160128_003.jpg","https://thumb.tildacdn.com/tild3364-6337-4563-b230-353231616239/-/format/webp/5.jpg","https://thumb.tildacdn.com/tild3836-3865-4239-b163-353538313035/-/format/webp/photo.jpg","https://static.tildacdn.com/tild3532-6665-4265-b766-326363303737/21317990_15179198883.jpg","https://thumb.tildacdn.com/tild3739-6136-4231-b330-633537383439/-/format/webp/4.jpg","https://thumb.tildacdn.com/tild3332-3438-4163-a631-376430663264/-/format/webp/3.jpg"]},{name:"Кровать для новорождённого",description:"Мы готовы сделать её для вашего малыша- любого размера!",cover:"https://static.tildacdn.com/tild3138-3732-4637-a364-323634356233/z_01d574c8_1.jpg",images:["https://static.tildacdn.com/tild3138-3732-4637-a364-323634356233/z_01d574c8_1.jpg","https://thumb.tildacdn.com/tild3833-3032-4133-b836-383630613138/-/format/webp/z_350ffc47.jpg","https://static.tildacdn.com/tild6163-3934-4634-a263-376133663533/10422509_68336539177.jpg"]},{name:"Вертикальная лестница",description:"В торце или подлинной стороне кровати. А может быть и по стене. ",cover:"https://static.tildacdn.com/tild6533-3139-4338-a362-613663336262/71183653_26308459936.jpg",images:["https://thumb.tildacdn.com/tild6636-3930-4334-b965-343539626138/-/format/webp/69808625_25864770048.jpg","https://thumb.tildacdn.com/tild3666-6336-4536-a661-643432323035/-/format/webp/71077651_26308461103.jpg","https://thumb.tildacdn.com/tild6533-3139-4338-a362-613663336262/-/format/webp/71183653_26308459936.jpg","https://static.tildacdn.com/tild3264-6430-4633-b039-366635353134/SSgBFmYwZeY.jpg","https://thumb.tildacdn.com/tild3166-3332-4632-b139-376163303132/-/format/webp/_2.jpg","https://thumb.tildacdn.com/tild6232-3731-4464-a362-613435396336/-/format/webp/042022-2.jpg","https://thumb.tildacdn.com/tild3761-3838-4434-b861-343939646464/-/format/webp/11880603_83196548025.jpg"]},{name:"Другое",description:"Полочки, наличники, рамочки, ящики и т.п.",cover:"https://static.tildacdn.com/tild6162-6334-4934-a439-326265373030/22539995_15656607568.jpg",images:["https://static.tildacdn.com/tild3931-3738-4336-b061-373733626634/noroot.jpg","https://static.tildacdn.com/tild3033-3038-4136-b866-333234303630/IMAG0176.jpg","https://static.tildacdn.com/tild3132-3262-4031-b432-616336393964/B48a6GkUsco.jpg","https://static.tildacdn.com/tild6162-6334-4934-a439-326265373030/22539995_15656607568.jpg","https://static.tildacdn.com/tild3364-6561-4736-a536-396362336232/22281604_15580121009.jpg","https://static.tildacdn.com/tild3363-3236-4733-b534-643635653234/IMG_43801.JPG","https://static.tildacdn.com/tild3164-3632-4132-a330-666339623639/37915540_19709173163.jpg","https://static.tildacdn.com/tild3230-6235-4734-b438-306231356363/37905787_19709172596.jpg"]}]},callback:function(t,e,i,n){b.init(t,e,i),g.render("".concat(e," «").concat(i,"»")),S.render(n),setTimeout((function(){return y.open()}),200)}});w.renderMainBlock(),w.renderPriceCard("#template-price-card",".price__card",".price"),w.renderCards("#template-card",".card",".assortment__container"),v.enableValidation(),v.resetValidation(),y.setEventListeners(),f.addEventListener("input",(function(t){var e,i,n=f.value.replace(/\D+/g,"");e=f.value.includes("+8")||"8"===f.value[0]?"":"+";for(var r=0;r<n.length&&r<11;r++){switch(r){case 0:e+="7"===(i=n[r])?"7 (":"8"===i?"8 (":"9"===i?"7 (9":"7 (";continue;case 4:e+=") ";break;case 7:case 9:e+="-"}e+=n[r]}f.value=e}))})()})();