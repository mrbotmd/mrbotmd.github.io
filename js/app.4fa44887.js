!function(e){function t(t){for(var r,c,s=t[0],o=t[1],l=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;i.push([124,1]),n()}({122:function(e,t){var n=document.getElementById("mode-switch"),r=document.getElementById("body");n.addEventListener("change",(function(){this.checked?(r.classList.remove("light"),r.classList.add("dark")):(r.classList.remove("dark"),r.classList.add("light"))}))},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);n(76),n(86),n(88),n(57),n(95),n(96),n(61),n(63),n(68),n(113),n(116),n(117),n(118),n(119),n(120),n(75),n(121);function r(e,t,n,r,a,i,c){try{var s=e[i](c),o=s.value}catch(e){return void n(e)}s.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var c=e.apply(t,n);function s(e){r(c,a,i,s,o,"next",e)}function o(e){r(c,a,i,s,o,"throw",e)}s(void 0)}))}}n(122);function i(e,t,n,r,a,i,c){try{var s=e[i](c),o=s.value}catch(e){return void n(e)}s.done?t(o):Promise.resolve(o).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function s(e){i(c,r,a,s,o,"next",e)}function o(e){i(c,r,a,s,o,"throw",e)}s(void 0)}))}}var s=document.querySelector(".search__result"),o=document.querySelector(".search__form__option-selector"),l=document.querySelector(".search__form__btn"),u=document.querySelector(".search__form__input"),d="https://swapi.co/api/";function p(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");return e.setAttribute("class","spinner--dual-ring"),t.setAttribute("class","spinner__inner-1--dual-ring"),n.setAttribute("class","spinner__inner-2--dual-ring"),e.appendChild(t),e.appendChild(n),e}function m(e){if(void 0===e){O(s);var t=document.createElement("p");return t.setAttribute("class","search__result__failed"),t.textContent="We couldn't reach the server. Please try again later",void s.appendChild(t)}return e}function h(e){return f.apply(this,arguments)}function f(){return(f=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(s),s.appendChild(p()),e.next=5,v();case 5:if(void 0!==(n=e.sent)){e.next=8;break}return e.abrupt("return",m(n));case 8:C(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return u.value?b("".concat(d).concat(o.value,"/?search=").concat(u.value.replace(/\s/g,"+"))):b("".concat(d).concat(o.value,"/"))}function b(e){return _.apply(this,arguments)}function _(){return(_=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).then((function(e){return e.count?{output:e.results,next:e.next,previous:e.previous,count:Math.ceil(e.count/10)}:0==e.count?void 0:e})).catch((function(e){if(e){var t=document.createElement("p");t.setAttribute("class","search__result__failed"),t.textContent="Sorry, we coudn't reach the server. Try again.",s.appendChild(t)}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){O(s),function(e){function t(e,t){e.addEventListener("click",a(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:if(void 0!==(n=e.sent)){e.next=5;break}return e.abrupt("return",m(n));case 5:C(n);case 6:case"end":return e.stop()}}),e)}))))}!function(e){var n=document.createElement("div"),r=document.createElement("a"),a=document.createElement("a");n.setAttribute("class","paginator"),r.setAttribute("href","#/"),r.setAttribute("class","paginator__link"),a.setAttribute("href","#/"),a.setAttribute("class","paginator__link"),e.next&&e.previous?(a.textContent="Prev Page",r.textContent="Next Page",n.appendChild(a),n.appendChild(r),s.appendChild(n),t(a,e.previous),t(r,e.next)):e.next?(r.textContent="Next Page",n.appendChild(r),s.appendChild(n),t(r,e.next)):!e.next&&e.previous&&(a.textContent="Prev Page",n.appendChild(a),s.appendChild(n),t(a,e.previous))}(e)}(e),function(e,t){var n={people:L,films:P,planets:M,species:S,vehicles:R,starships:T};return void 0===e.output?r(e):r(e.output);function r(e){for(var r in n)e[0].url.includes("api/".concat(r))&&n[r](e,t)}}(e,["characters","films","homeworld","species","vehicles","starships"])}function g(e){return E.apply(this,arguments)}function E(){return(E=c(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.dataset.apilink,r=n.split(","),a=[],e.next=5,Promise.all(r.map(function(){var e=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return n=e.sent,a.push(n),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return x.apply(this,arguments)}function x(){return(x=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(s),s.appendChild(p()),e.next=4,g(t);case 4:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return",m(n));case 7:C(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=c(regeneratorRuntime.mark((function e(t){var n,r,a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.parentElement,r=t.target,console.log("parent",n),console.log("element",r),a=p(),n.appendChild(a),e.next=8,g(t);case 8:i=e.sent,(c=document.createElement("ul")).setAttribute("class","result__info-sublist"),i.forEach((function(e){var t=document.createElement("a");if("films"==r.text){t.textContent=e.title,t.setAttribute("data-apilink",e);var n=k(e.url,e.title);n.setAttribute("class","result__info-sublist__item"),n.firstChild.removeEventListener("click",y),n.firstChild.addEventListener("click",A),c.appendChild(n)}else{var a=k(e.url,e.name);a.setAttribute("class","result__info-sublist__item"),a.firstChild.removeEventListener("click",y),a.firstChild.addEventListener("click",A),t.textContent=e.name,t.setAttribute("data-apilink",e),c.appendChild(a)}})),n.removeChild(a),n.appendChild(c);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){var n=document.createElement("li"),r=document.createElement("a");return r.setAttribute("href","#/"),r.setAttribute("class","result__info-list__item-link"),r.setAttribute("data-apilink",e),r.addEventListener("click",y,{once:!0}),r.textContent=t,n.appendChild(r),n}function L(e,t){var n=[];if(e instanceof Array)n=e;else{if(e)throw new Error("buildItem can't be null");n.push(e)}n.forEach((function(e){var n=document.createElement("article");n.setAttribute("class","search__result__item"),o.value="people";var r=document.createElement("img");r.setAttribute("class","result__img"),r.setAttribute("src","https://source.unsplash.com/collection/2081954/300x150");!function(e){var a=document.createElement("p");a.setAttribute("class","result__info-text");var i=document.createElement("ul");i.setAttribute("class","result__info-list");var c=document.createElement("header"),s=document.createElement("h1");s.textContent=e.name,s.setAttribute("data-apilink",e.url),s.addEventListener("click",A);var o=document.createElement("div");o.setAttribute("class","container--flex"),a.innerHTML="\n          Height: ".concat(e.height," <br />\n          Mass: ").concat(e.mass," <br />\n          Hair Color: ").concat(e.hair_color," <br />\n          Skin Color: ").concat(e.skin_color," <br />\n          Eye Color: ").concat(e.eye_color," <br />\n          Birth Year: ").concat(e.birth_year," <br />\n          Gender: ").concat(e.gender," <br />"),c.appendChild(s),n.appendChild(c),n.appendChild(o),o.appendChild(r),o.appendChild(a),o.appendChild(i),t.forEach((function(t){null!=e[t]&&0!=e[t].length&&i.appendChild(k(e[t],t)).setAttribute("class","result__info-list__item")}))}(e),s.appendChild(n)}))}function P(e,t){var n=[];if(e instanceof Array)n=e;else{if(e)throw new Error("buildItem can't be null");n.push(e)}n.forEach((function(e){var n=document.createElement("article");n.setAttribute("class","search__result__item"),o.value="films";var r=document.createElement("img");r.setAttribute("src","https://source.unsplash.com/collection/2081954/300x150"),r.setAttribute("class","result__img");!function(e){var a=document.createElement("p");a.setAttribute("class","result__info-text");var i=document.createElement("ul");i.setAttribute("class","result__info-list");var c=document.createElement("header"),s=document.createElement("h1");s.textContent=e.title,s.setAttribute("data-apilink",e.url),s.addEventListener("click",A);var o=document.createElement("div");o.setAttribute("class","container--flex"),a.innerHTML="\n        Title: ".concat(e.title," <br />\n        Episode: ").concat(e.episode_id,' <br />\n        <details class="film-crawl">\n        <summary>\n        Opening crawl\n        </summary>\n        <p>').concat(e.opening_crawl,"</p></details> <br />\n        Director: ").concat(e.director," <br />\n        Producer: ").concat(e.producer," <br />\n        Release Date: ").concat(e.release_date," <br />"),c.appendChild(s),n.appendChild(c),n.appendChild(o),o.appendChild(r),o.appendChild(a),o.appendChild(i),t.forEach((function(t){null!=e[t]&&0!=e[t].length&&i.appendChild(k(e[t],t)).setAttribute("class","result__info-list__item")}))}(e),s.appendChild(n)}))}function M(e,t){var n=[];if(e instanceof Array)n=e;else{if(e)throw new Error("buildItem can't be null");n.push(e)}n.forEach((function(e){var n=document.createElement("article");n.setAttribute("class","search__result__item"),o.value="planets";var r=document.createElement("img");r.setAttribute("src","https://source.unsplash.com/collection/2081954/300x150"),r.setAttribute("class","result__img");!function(e){var a=document.createElement("p");a.setAttribute("class","result__info-text");var i=document.createElement("ul");i.setAttribute("class","result__info-list");var c=document.createElement("header"),s=document.createElement("h1");s.textContent=e.name,s.setAttribute("data-apilink",e.url),s.addEventListener("click",A);var o=document.createElement("div");o.setAttribute("class","container--flex"),a.innerHTML="\n        Title: ".concat(e.name," <br />\n        Rotation Period: ").concat(e.rotation_period," <br />\n        Orbital Period: ").concat(e.orbital_period," <br />\n        Diameter: ").concat(e.diameter," <br />\n        Climate: ").concat(e.climate," <br />\n        Gravity: ").concat(e.gravity," <br />\n        Terrain: ").concat(e.terrain," <br />\n        Surface Water: ").concat(e.surface_water," <br />\n        Population: ").concat(e.population," <br />"),c.appendChild(s),n.appendChild(c),n.appendChild(o),o.appendChild(r),o.appendChild(a),o.appendChild(i),t.forEach((function(t){null!=e[t]&&0!=e[t].length&&i.appendChild(k(e[t],t)).setAttribute("class","result__info-list__item")}))}(e),s.appendChild(n)}))}function S(e,t){var n=[];if(e instanceof Array)n=e;else{if(e)throw new Error("buildItem can't be null");n.push(e)}n.forEach((function(e){var n=document.createElement("article");n.setAttribute("class","search__result__item"),o.value="species";var r=document.createElement("img");r.setAttribute("src","https://source.unsplash.com/collection/2081954/300x150"),r.setAttribute("class","result__img");!function(e){var a=document.createElement("p");a.setAttribute("class","result__info-text");var i=document.createElement("ul");i.setAttribute("class","result__info-list");var c=document.createElement("header"),s=document.createElement("h1");s.textContent=e.name,s.setAttribute("data-apilink",e.url),s.addEventListener("click",A);var o=document.createElement("div");o.setAttribute("class","container--flex"),a.innerHTML="\n        Name: ".concat(e.name," <br />\n        Classification: ").concat(e.classification," <br />\n        Designation: ").concat(e.designation," <br />\n        Average Height: ").concat(e.average_height," <br />\n        Skin Colors: ").concat(e.skin_colors," <br />\n        Hair Colors: ").concat(e.hair_colors," <br />\n        Eye Colors: ").concat(e.eye_colors," <br />\n        Average Lifespan: ").concat(e.average_lifespan," <br />\n        Language: ").concat(e.language," <br />"),c.appendChild(s),n.appendChild(c),n.appendChild(o),o.appendChild(r),o.appendChild(a),o.appendChild(i),t.forEach((function(t){null!=e[t]&&0!=e[t].length&&i.appendChild(k(e[t],t)).setAttribute("class","result__info-list__item")}))}(e),s.appendChild(n)}))}function R(e,t){var n=[];if(e instanceof Array)n=e;else{if(e)throw new Error("buildItem can't be null");n.push(e)}n.forEach((function(e){var n=document.createElement("article");n.setAttribute("class","search__result__item"),o.value="vehicles";var r=document.createElement("img");r.setAttribute("src","https://source.unsplash.com/collection/2081954/300x150"),r.setAttribute("class","result__img");!function(e){var a=document.createElement("p");a.setAttribute("class","result__info-text");var i=document.createElement("ul");i.setAttribute("class","result__info-list");var c=document.createElement("header"),s=document.createElement("h1");s.textContent=e.name,s.setAttribute("data-apilink",e.url),s.addEventListener("click",A);var o=document.createElement("div");o.setAttribute("class","container--flex"),a.innerHTML="\n        Title: ".concat(e.name," <br />\n        Model: ").concat(e.model," <br />\n        Manufacturer: ").concat(e.manufacturer," <br />\n        Cost In Creditst: ").concat(e.cost_in_credits," <br />\n        Length: ").concat(e.length," <br />\n        Max Atmosphering Speed: ").concat(e.max_atmosphering_speed," <br />\n        Crew: ").concat(e.crew," <br />\n        Passengers: ").concat(e.passengers," <br />\n        Cargo Capacity: ").concat(e.cargo_capacity," <br />\n        Consumables: ").concat(e.consumables," <br />\n        Vehicle Class: ").concat(e.vehicles_class," <br />"),c.appendChild(s),n.appendChild(c),n.appendChild(o),o.appendChild(r),o.appendChild(a),o.appendChild(i),t.forEach((function(t){null!=e[t]&&0!=e[t].length&&i.appendChild(k(e[t],t)).setAttribute("class","result__info-list__item")}))}(e),s.appendChild(n)}))}function T(e,t){var n=[];if(e instanceof Array)n=e;else{if(e)throw new Error("buildItem can't be null");n.push(e)}n.forEach((function(e){var n=document.createElement("article");n.setAttribute("class","search__result__item"),o.value="starships";var r=document.createElement("img");r.setAttribute("src","https://source.unsplash.com/collection/2081954/300x150"),r.setAttribute("class","result__img");!function(e){var a=document.createElement("p");a.setAttribute("class","result__info-text");var i=document.createElement("ul");i.setAttribute("class","result__info-list");var c=document.createElement("header"),s=document.createElement("h1");s.textContent=e.name,s.setAttribute("data-apilink",e.url),s.addEventListener("click",A);var o=document.createElement("div");o.setAttribute("class","container--flex"),a.innerHTML="\n        Title: ".concat(e.name," <br />\n        Model: ").concat(e.model," <br />\n        Manufacturer: ").concat(e.manufacturer," <br />\n        Cost In Creditst: ").concat(e.cost_in_credits," <br />\n        Length: ").concat(e.length," <br />\n        Max Atmosphering Speed: ").concat(e.max_atmosphering_speed," <br />\n        Crew: ").concat(e.crew," <br />\n        Passengers: ").concat(e.passengers," <br />\n        Cargo Capacity: ").concat(e.cargo_capacity," <br />\n        Consumables: ").concat(e.consumables," <br />\n        Hyperdrive Rating: ").concat(e.hyperdrive_rating," <br />\n        MGLT: ").concat(e.MGLT," <br />\n        Starship Class: ").concat(e.starship_class," <br />"),c.appendChild(s),n.appendChild(c),n.appendChild(o),o.appendChild(r),o.appendChild(a),o.appendChild(i),t.forEach((function(t){null!=e[t]&&0!=e[t].length&&i.appendChild(k(e[t],t)).setAttribute("class","result__info-list__item")}))}(e),s.appendChild(n)}))}function O(e){for(;e.firstChild;)e.removeChild(e.firstChild)}l.addEventListener("click",h),document.querySelector("form").addEventListener("submit",h),u.addEventListener("input",(function(){u.value?(l.classList.add("glow"),l.textContent="Dew It"):(l.classList.remove("glow"),l.textContent="Search")})),l.addEventListener("mouseenter",(function(){l.textContent="Dew It"})),l.addEventListener("mouseleave",(function(){l.textContent="Search"}));n(123)}});
//# sourceMappingURL=app.4fa44887.js.map