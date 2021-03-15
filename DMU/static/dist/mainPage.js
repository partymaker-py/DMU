!function(){"use strict";var n={370:function(n,r,t){var e=t(645),i=t.n(e),o=t(667),a=t.n(o),c=t(329),s=i()((function(n){return n[1]})),p=a()(c.Z);s.push([n.id,"h1, h2 {\r\n    letter-spacing: 0;\r\n    font-size: 24px;\r\n}\r\n.intro{\r\n    margin-top: -60px;\r\n    height: 594.69px;\r\n    background: url("+p+");\r\n}\r\n.main-main-title-of-page{\r\n    padding-top: 450px;\r\n    margin-left: 20%;\r\n    color: #ffffff;\r\n    display: grid;\r\n    grid-template-rows: 50px 150px;\r\n    grid-template-columns: 230px;\r\n}\r\n.title-of-page{\r\n    opacity: 0;\r\n    margin-top: 0;\r\n    text-transform: uppercase;\r\n}\r\n.know-more-link{\r\n    display: block;\r\n    margin-top: 20px;\r\n    width: 131px;\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    padding: 10px 20px;\r\n    background-color: #ff0000;\r\n    opacity: 0;\r\n    transition: .2s linear;\r\n}\r\n.know-more-link:hover{\r\n    background-color: #000000;\r\n}\r\n.video-container {\r\n    margin-top: -60px;\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n} \r\n.container-info-contacts {\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n.about-us-text {\r\n    margin-left: 40px;\r\n    width: 600px\r\n}\r\n.contacts-info {\r\n    align-self: center;\r\n    padding-left: 20px;\r\n    height: 476px;\r\n    width: 324px;\r\n    border: 2px solid;\r\n    border-color: #ff0000;\r\n}\r\n.contacts-list__element {\r\n    margin-top: 20px;\r\n    width: 100%;\r\n}\r\n.about-us {\r\n    display: block;\r\n    width: 75px;\r\n}\r\n/* Подровнять линию */\r\n.about-us-line {\r\n    width: 42px;\r\n    margin-left: 0;\r\n    border-color: #ff0000;\r\n}\r\n.statistic {\r\n    padding-top: 50px;\r\n    padding-bottom: 30px;\r\n    margin-top: 200px;\r\n    background-color: #f9f9f9;\r\n}\r\n.statistic-rating{\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    padding-bottom: 30px;\r\n}\r\n.statistic-rating-counters {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n.projects,\r\n.years,\r\n.customers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.counter {\r\n    width: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 25px;\r\n}\r\n.counter > hr {\r\n    width: 100%;\r\n    border: .5px solid #000;\r\n}\r\n.projects > h3,\r\n.years > h3,\r\n.customers > h3 {\r\n    font-size: 1rem;\r\n}\r\n.niches{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 200px;\r\n}\r\n.occupied-niches {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 370px);\r\n    grid-gap: 30px;\r\n    margin: 0 auto;\r\n}\r\n.infrastructure-design, \r\n.development-of-construction-documentation,\r\n.implementation-of-investment-projects {\r\n    text-align: center;\r\n}\r\n.niches-subheader {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.our-customers-and-partners{\r\n    margin-top: 200px;\r\n    background-color: #f9f9f9;\r\n}\r\n.customers-and-partners {\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    padding-top: 50px;\r\n    padding-bottom: 100px;\r\n}\r\n.customers-and-partners>h2{\r\n    width: 300px;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n.customers-and-partners>h2>hr {\r\n    height: 2px;\r\n    width: 42px;\r\n    margin-left: 0;\r\n    background-color: #ff0000;\r\n}\r\n.services{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n.photo-and-services-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 500px);\r\n    grid-gap: 15px;\r\n}\r\n.services-list1 {\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.services-list2 {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap\r\n}\r\n.service-header-link {\r\n    text-decoration: none;\r\n    color: #000000;\r\n}\r\n\r\n/* Новости */\r\n.some-news {\r\n    margin-top: 100px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.main-title {\r\n    margin-bottom: 50px;\r\n}\r\n.main-title > hr {\r\n    width: 40px;\r\n    margin-left: 0;\r\n}\r\n.news-articles {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n@media (max-width: 1793px) {\r\n    \r\n}\r\n@media (max-width: 1540px) { \r\n    .partnersImg {\r\n        width: 1000px;\r\n        height: auto;\r\n    }\r\n    \r\n}\r\n@media (max-width: 1300px){\r\n    .occupied-niches{\r\n        margin-left: 30px; \r\n        margin-right: 30px;\r\n        display: flex;\r\n        justify-content: space-around;\r\n        flex-wrap: wrap;\r\n    }\r\n    .customers-and-partners {\r\n        margin-left: 10%;\r\n    }\r\n    .photo-and-services-list{\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 300px);\r\n        grid-gap: 35px;\r\n    }\r\n}\r\n\r\n@media (max-width: 1111px) {\r\n    .statistic-rating-counters {\r\n        flex-direction: column;\r\n        justify-self: center;\r\n        align-items: center;\r\n    }\r\n    .projects,\r\n    .years,\r\n    .customers {\r\n        width: 150px;\r\n        text-align: center;\r\n    }\r\n    .statistic-rating-info > p {\r\n        text-align: center;\r\n    }\r\n}\r\n@media (max-width: 1076px) {\r\n    .partnersImg {\r\n        width: 700px;\r\n        padding-left: 10%;\r\n    }\r\n}\r\n@media (max-width: 1019px) {\r\n\r\n}\r\n@media (max-width: 950px) {\r\n    .partnersImg {\r\n        width: 500px;\r\n        padding-left: 15%;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    .container-info-contacts {\r\n        flex-direction: column-reverse;\r\n        align-items: center;\r\n    }\r\n    .about-us {\r\n        margin: 0 auto;\r\n    }\r\n    .about-us-line {\r\n        width: 100%;\r\n    }\r\n    .about-us-text {\r\n        margin-bottom: 50px;\r\n        margin-left: 0;\r\n        text-align: center;\r\n        width: 100%;\r\n    }\r\n}\r\n@media (max-width: 680px) { \r\n    .partnersImg {\r\n        padding-left: 0;\r\n    }\r\n    .video-container{\r\n        display: none;\r\n    }\r\n    .photo-and-services-list{\r\n        display: grid;\r\n        grid-template-columns: 300px;\r\n        grid-gap: 35px;\r\n    }\r\n    .occupied-niches{\r\n        margin: 0 auto;\r\n        flex-direction: column;\r\n    }\r\n    .title-and-selectors{\r\n        flex-direction: column;\r\n    }\r\n    .title-and-line > hr{\r\n        margin: auto;\r\n    }\r\n    .title-and-line {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n@media (max-width: 538px) {\r\n    .partnersImg {\r\n        width: 300px;\r\n        padding-left: 10%;\r\n    }\r\n    .news-photo {\r\n        width: 300px;\r\n        height: auto;\r\n    }\r\n}\r\n@media (max-width: 385px) {\r\n    .partnersImg {\r\n        padding-left: 0;\r\n    }\r\n    .container-info-contacts {\r\n        margin-left: 10px;\r\n    }\r\n    .contacts-info {\r\n        margin-left: 10px;\r\n        width: 210px;\r\n        height: auto;\r\n    }\r\n    .statistic-rating {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        margin: 0 auto;\r\n        width: 210px;\r\n        text-align: center;\r\n    }\r\n    .infrastructure-design, \r\n    .development-of-construction-documentation,\r\n    .implementation-of-investment-projects {\r\n        width: 210px;\r\n        height: auto;\r\n    }\r\n    .implementation-photo, \r\n    .development-photo, \r\n    .infrastructure-photo {\r\n        width: 210px;\r\n        height: auto;\r\n    }\r\n    .niches {\r\n        flex-direction: column;\r\n    }\r\n    .services {\r\n        margin-left: 0;\r\n    }\r\n    .photo-and-services-list {\r\n        grid-template-columns: 210px;\r\n    }\r\n    .news-photo {\r\n        width: 210px;\r\n        height: auto;\r\n    }\r\n    .projects {\r\n        margin-left: 0;\r\n    }\r\n    .service {\r\n        text-align: center;\r\n\r\n    }\r\n\r\n}",""]),r.Z=s},645:function(n){n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(e)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},667:function(n){n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},329:function(n,r,t){r.Z=t.p+"4188c81fab81c30152d749f89c20316c.jpg"},379:function(n,r,t){var e,i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),o=[];function a(n){for(var r=-1,t=0;t<o.length;t++)if(o[t].identifier===n){r=t;break}return r}function c(n,r){for(var t={},e=[],i=0;i<n.length;i++){var c=n[i],s=r.base?c[0]+r.base:c[0],p=t[s]||0,l="".concat(s," ").concat(p);t[s]=p+1;var d=a(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:l,updater:g(u,r),references:1}),e.push(l)}return e}function s(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var p,l=(p=[],function(n,r){return p[n]=r,p.filter(Boolean).join("\n")});function d(n,r,t,e){var i=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=l(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function u(n,r,t){var e=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var f=null,m=0;function g(n,r){var t,e,i;if(r.singleton){var o=m++;t=f||(f=s(r)),e=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=s(r),e=u.bind(null,t,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var i=a(t[e]);o[i].references--}for(var s=c(n,r),p=0;p<t.length;p++){var l=a(t[p]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=s}}}}},r={};function t(e){if(r[e])return r[e].exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,{a:r}),r},t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},function(){var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n}(),function(){var n=t(379),r=t.n(n),e=t(370);r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals;const i=document.querySelector(".projects-counter"),o=document.querySelector(".years-counter"),a=document.querySelector(".customers-counter"),c=document.querySelector(".title-of-page"),s=document.querySelector(".know-more-link"),p=(n,r,t)=>{let e=n,i=setInterval((()=>{e===r&&clearInterval(i),t.textContent=e++}),200)};let l=!1;document.addEventListener("scroll",(()=>{if(document.body.scrollTop>600||document.documentElement.scrollTop>600){if(l)return;l=!0,p(1,5,i),p(1480,1510,a),p(0,3,o)}})),document.addEventListener("load",(()=>{let n=0,r=20,t=0,e=0;setInterval((()=>{10!==n?(n++,t+=.1,c.style.paddingTop=n+"px",c.style.opacity=t):0!==r?(r--,e+=.1,s.style.marginTop=r+"px",s.style.opacity=e):clearInterval()}),60)})())}()}();