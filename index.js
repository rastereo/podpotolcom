/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={481:()=>{function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(){"use strict";var e="emerge",n="emerge-spin-element",r=new WeakMap,i=new WeakMap,a=500,o=Object.freeze({spinSize:24,spinColor:"#404040",spinDirection:"clockwise",spinPeriod:1333,duration:a}),s=["backgroundImage","borderImage","borderCornerImage","listStyleImage","cursor"],l=/url\(\s*(['"]?)(.*?)\1\s*\)/g;function u(t,e,n,r,i){var a=document.createElement("div");Object.assign(a.style,{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",transition:"opacity ".concat(i,"ms ease-out")}),a.innerHTML="<svg viewBox='0 0 100 100' display='block'><defs><mask id='cut'><rect width='100' height='100' fill='white' stroke='none' /><circle r='40' cx='50' cy='50' fill='black' stroke='none' /><polygon points='50,50 100,25 150,50 100,75' fill='black'stroke='none' transform-origin='center center' /></mask></defs><circle r='50' cx='50' cy='50' mask='url(#cut)' stroke='none' /></svg>";var o=a.firstElementChild;return o.setAttribute("width",t),o.setAttribute("hight",t),o.lastElementChild.setAttribute("fill",e),a.firstElementChild.animate([{transform:"rotate(0turn)"},{transform:"rotate(1turn)"}],{duration:Number(r),iterations:1/0,direction:"counter-clockwise"===n?"reverse":"normal"}),a}function c(t){var e=Math.min(document.body.clientHeight,document.documentElement.clientHeight);return t.getBoundingClientRect().top-(window.pageYOffset||document.documentElement.scrollTop)<e}function d(){return Array.from(document.querySelectorAll(".".concat(e)))}var h,f=(h=Object.create(null),function(t){return void 0!==h[t]||(h[t]=new Promise((function(e){var n=document.createElement("img");n.src=t,n.complete?e():(n.addEventListener("load",(function(){return e()})),n.addEventListener("error",(function(){return e()})))}))),h[t]});function p(t){var e=i.get(t);e&&(e.style.opacity=0,setTimeout((function(){"relative"===t.parentNode.style.position&&(t.parentNode.style.position=null),e.remove()}),a)),t.style.transition="opacity ".concat(a,"ms ease-out"),t.style.opacity=1;var n=t.dataset["style-2"];n&&t.setAttribute("style",t.getAttribute("style")+"; "+n),console.log("  FIRED!",t.id)}var m=new IntersectionObserver((function(t,e){t.forEach((function(t){(t.isIntersecting||c(t.target))&&(r.has(t.target)&&r.get(t.target)(),r.delete(t.target),e.unobserve(t.target),p(t.target))}))}));function g(){var e=new WeakMap;d().forEach((function(d,h,g){if(d.dataset.await&&null===document.getElementById(d.dataset.await))throw"Emerge: Element with ID “".concat(d.dataset.await,"” not found.");var y=g[h-1],v=d.getBoundingClientRect(),w=d.dataset.duration||a,b="",V="",E=d.dataset.effect||!1;if(d.dataset.opaque&&(d.style.opacity=1),E){var A={},S="transform",F=d.dataset.up||0,x=d.dataset.down||0,k=d.dataset.left||0,C=d.dataset.right||0,I=d.dataset.angle||"90",N=d.dataset.scale||-1,O=d.dataset.origin||"50% 50%";x&&"--"===(F="-"+x).substr(0,2)&&(F=F.substr(2)),C&&"--"===(k="-"+C).substr(0,2)&&(k=k.substr(2)),"relax"===E&&(-1===N&&(N=.92),"50% 50%"===O&&(O="top"),A={one:"scaleY("+N+")",two:"scaleY(1)",orn:O,crv:"cubic-bezier(0, 0, 0.001, 1)"}),"slide"===E&&(F||(F="20px"),A={one:"translate("+k+","+F+")",two:"translate(0,0)",crv:"cubic-bezier(0, 0.9, 0.1, 1)"}),"zoom"===E&&(-1===N&&(N=.5),A={one:"scale("+N+")",two:"scale(1)",orn:O,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}),"screw"===E&&(-1===N&&(N=.5),I||(I=90),A={one:"scale("+N+") rotate("+I+"deg)",two:"scale(1) rotate(0)",orn:O,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}),A&&(b+="".concat(S,": ").concat(A.one,";")+"".concat("transform-origin",": ").concat(A.orn,";"),V+=S+": "+A.two+"; transition: opacity "+w+"ms ease-out, "+"".concat(S," ").concat(w,"ms ").concat(A.crv,";")),d.dataset["style-1"]=b,d.dataset["style-2"]=V}b||(b=d.dataset["style-1"]),b&&d.setAttribute("style",d.getAttribute("style")+"; "+b);var D=[];D.push(Promise.all([d].concat(Array.from(d.querySelectorAll("*"))).reduce((function(t,e){"img"===e.nodeName.toLowerCase()?t.push(f(e.src)):"video"===e.nodeName.toLowerCase()&&t.push(function(t,e){return new Promise((function(n){t.readyState>=4?n():t.addEventListener(e,(function(){return n()}))}))}(e,e.dataset["emerge-event"]||"canplaythrough"));var n=getComputedStyle(e);return s.forEach((function(e){var r,i=n[e];if(i&&-1!==i.indexOf("url("))for(;null!==(r=l.exec(i));)t.push(f(r[2]))})),t}),[])));var P,T=function(t,e){return void 0!==t.dataset.await?document.getElementById(t.dataset.await):void 0!==t.dataset.continue?e:void 0}(d,y);void 0===T||function(t){for(var e=t;void 0!==e.dataset.await;){if(null===(e=document.getElementById(e.dataset.await)))return!1;if(e===t)return!0}return!1}(d)||D.push(new Promise((function(t){queueMicrotask((function(){e.get(T).then(t)}))})));var M,j,q,L=Number(d.dataset.hold);if(void 0===d.dataset.expose||c(d)?Number.isNaN(L)?P=Promise.resolve():(j=new Promise((function(t){M=t})),P=function(){return setTimeout(M,L),j}):P=new Promise((function(t){m.observe(d),r.set(d,t)})),e.set(d,Promise.all(D).then((function(){return"function"==typeof P?P():P}))),e.get(d).then((function(){p(d)})),d.dataset.spin){var B,Y=document.getElementById(d.dataset.spinElement);if(null!==Y)(B=Y.cloneNode(!0)).style.position="absolute",B.style.display="block";else{var z=Object.keys(o).reduce((function(t,e){return t[e]=void 0===d.dataset[e]?o[e]:d.dataset[e],t}),{});B=u.apply(void 0,function(e){if(Array.isArray(e))return t(e)}(q=Object.values(z))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(q)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(q)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}B.style.width="100%",B.style.height=Math.min(v.height,document.body.clientHeight-(d.getBoundingClientRect().top+window.pageYOffset))+"px",B.classList.add(n),"static"===getComputedStyle(d.parentNode).position&&(d.parentNode.style.position="relative"),d.parentNode.insertBefore(B,d),i.set(d,B)}}))}function y(t){t.preventDefault(),console.log("REPLAY"),d().forEach((function(t){t.style.transition=null,t.style.opacity=null})),document.querySelectorAll(".".concat(n)).forEach((function(t){t.remove()})),g()}if(void 0!==window.IntersectionObserver&&void 0!==document.documentElement.animate){if(window.navigator&&"preview"===window.navigator.loadPurpose)return d().forEach((function(t){t.style.transition="none",t.style.opacity=1})),!1;var v,w=document.createElement("style");w.innerHTML=".".concat(e," { opacity: 0; }"),document.head.append(w),v=function(){g(),document.querySelectorAll(".emerge-replay").forEach((function(t){t.addEventListener("click",y)}))},"loading"!==document.readyState?v():document.addEventListener("readystatechange",(function(){"interactive"===document.readyState&&v()}),{passive:!0})}}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}(()=>{"use strict";n(481);var t=function(){return(t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},e=function(){function e(e,n,r){var i=this;this.endVal=n,this.options=r,this.version="2.6.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a,o=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var s=(e+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){a="";for(var l=3,u=0,c=0,d=n.length;c<d;++c)i.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(a=i.options.separator+a),u++,a=n[d-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),o+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=t(t({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);null!==(e=this.options.plugin)&&void 0!==e&&e.render?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},e.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=Array.from(document.querySelectorAll("#number")),a=document.querySelector(".request__input_value_phone"),o=document.querySelectorAll('a[href*="#"]');a.addEventListener("input",(function(t){var e,n,r=a.value.replace(/\D+/g,"");e=a.value.includes("+8")||"8"===a.value[0]?"":"+";for(var i=0;i<r.length&&i<11;i++){switch(i){case 0:e+="7"===(n=r[i])?"7 (":"8"===n?"8 (":"9"===n?"7 (9":"7 (";continue;case 4:e+=") ";break;case 7:case 9:e+="-"}e+=r[i]}a.value=e}));var s,l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}(o);try{var u=function(){var t=s.value;t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(l.s();!(s=l.n()).done;)u()}catch(t){l.e(t)}finally{l.f()}i.forEach((function(t){var n=new e(t,t.textContent,{enableScrollSpy:!0,scrollSpyDelay:-25,duration:5,scrollSpyOnce:!0});n.error?console.error(n.error):n.start()}))})()})();