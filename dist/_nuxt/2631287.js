(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{624:function(t,e,r){t.exports=r.p+"img/014812a.svg"},626:function(t,e,r){"use strict";r(29),r(20),r(21),r(42),r(26),r(34);var o=r(3),n=r(10),l=(r(27),r(4)),c=r(117),d=r(24);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=l.default.extend({data:function(){return{formatMoney:c.d}},props:{product:{type:Object,required:!0},gradient:{type:Boolean,default:!1}},computed:f(f({},Object(d.c)("shop/shop",["currentMaxDeliveryTime"])),{},{productTitle:function(){return this.gradient&&"Default Title"!==this.product.firstVariant.title?this.product.firstVariant.title:this.product.title}}),methods:f(f({},Object(d.b)("shop/cart",["addLine"])),{},{addToCart:function(t){var e=arguments,r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.length>1&&void 0!==e[1]?e[1]:1,o.next=3,r.addLine({variantId:t,quantity:n});case 3:r.$root.$emit("addNotification","Toegevoegd","Product toegevoegd aan winkelmandje");case 4:case"end":return o.stop()}}),o)})))()}})}),h=r(11),component=Object(h.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col items-center transition-all shadow-none rounded-lg"},[r("NuxtLink",{attrs:{to:t.product.url,prefetch:""}},[r("img",{staticClass:"rounded-lg",attrs:{loading:"lazy",src:t.product.firstMediaSrc,alt:t.product.title,width:"100%",height:"100%"}})]),t._v(" "),r("NuxtLink",{staticClass:"w-full text-left flex-grow flex-1 h-full block mt-2",class:{"text-white text-2xl font-bold":t.gradient,"text-md text-black":!t.gradient},attrs:{to:t.product.url}},[t._v("\n    "+t._s(t.productTitle)+"\n  ")]),t._v(" "),t.gradient?t._e():r("div",{staticClass:"w-full"},[t.product.deliveryDate?r("div",{staticClass:"text-left relative py-2 w-full"},[r("dt",{staticClass:"block md:flex"},[r("p",{staticClass:"block text-green-500 text-xs leading-6 font-medium"},[t._v(t._s(t.product.deliveryDate))])])]):r("div",{staticClass:"relative py-2 text-left w-full"},[r("dt",{staticClass:"block md:flex"},[r("p",{staticClass:"block text-green-500 text-xs leading-6 font-medium"},[t._v(t._s(t.currentMaxDeliveryTime))])])])]),t._v(" "),t.gradient?r("div",{staticClass:"w-full"},[r("p",{staticClass:"text-md w-full text-white text-left block mt-2 extralight opacity-50"},[t._v("\n      "+t._s(t.formatMoney(t.product.price))+"\n    ")]),t._v(" "),r("div",{},[r("NuxtLink",{attrs:{to:t.product.url}},[r("div",{staticClass:"mt-3 uppercase inline-flex items-center space-x-4 tracking-wide shadow-md p-3 px-6 items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-gradient-to-r from-indigo-400 to-purple-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"},[r("span",[t._v("Bekijken")]),t._v(" "),r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])],1)]):r("div",{staticClass:"flex items-center justify-space-between w-full"},[r("p",{staticClass:"text-md w-full text-black text-left block mt-2 font-extralight"},[t._v("\n      "+t._s(t.formatMoney(t.product.price))+"\n    ")]),t._v(" "),r("div",{staticClass:"w-full text-right"},[r("button",{staticClass:"mt-3 inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",attrs:{type:"submit",name:"add",id:"AddToCart"},on:{click:function(e){return e.preventDefault(),t.addToCart(t.product.firstVariantId,1)}}},[r("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})])])])])],1)}),[],!1,null,null,null);e.a=component.exports},627:function(t,e,r){"use strict";r(29),r(20),r(21),r(42),r(26),r(34);var o=r(3),n=r(10),l=(r(27),r(4)),c=r(117),d=r(24);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=l.default.extend({data:function(){return{formatMoney:c.d}},props:{product:{type:Object,required:!0},gradient:{type:Boolean,default:!1}},computed:f({},Object(d.c)("shop/shop",["currentMaxDeliveryTime"])),methods:f(f({},Object(d.b)("shop/cart",["addLine"])),{},{addToCart:function(t){var e=arguments,r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.length>1&&void 0!==e[1]?e[1]:1,o.next=3,r.addLine({variantId:t,quantity:n});case 3:r.$root.$emit("addNotification","Toegevoegd","Product toegevoegd aan winkelmandje");case 4:case"end":return o.stop()}}),o)})))()}})}),h=r(11),component=Object(h.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col items-center transition-all shadow-none rounded-lg relative"},[r("NuxtLink",{staticClass:"relative",attrs:{to:t.product.url,prefetch:""}},[r("img",{staticClass:"rounded-lg",attrs:{loading:"lazy",src:t.product.firstMediaSrc,alt:t.product.title,width:"100%",height:"100%"}}),t._v(" "),r("span",{staticClass:"absolute rounded-lg inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-90",attrs:{"aria-hidden":"true"}}),t._v(" "),r("div",{staticClass:"text-white text-xs block mt-2 absolute bottom-5 left-5 right-5"},[t._v(t._s(t.product.title))])])],1)}),[],!1,null,null,null);e.a=component.exports},629:function(t,e,r){"use strict";r(29),r(20),r(21),r(42),r(26),r(34);var o=r(10),n=r(3),l=(r(27),r(211)),c=r(150),d=r(4),v=r(32);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=d.default.extend({components:{FormField:l.a},data:function(){return{loading:!1,fields:{email:"",firstName:"",lastName:"",message:"Nieuwsbrief inschrijving",name:"Nieuwsbrief inschrijving"}}},methods:{submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:if(t.loading=!0,t.$v.$touch(),!t.$v.$invalid){e.next=8;break}t.$root.$emit("addNotification","Niet gelukt!","Vul alle velden correct in","error"),e.next=20;break;case 8:return e.prev=8,e.next=11,Object(v.v)("/newsletter/klaviyo",x({},t.fields));case 11:t.$v.$reset(),t.fields.email="",t.$root.$emit("addNotification","Gelukt!","Je bent geabonneerd, bedankt!","",5e3),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),t.$root.$emit("addNotification","Oops.","Er is iets fout gegaan.","error");case 19:t.loading=!1;case 20:case"end":return e.stop()}}),e,null,[[8,16]])})))()}},validations:{fields:{email:{required:c.required,email:c.email}}}}),m=(r(660),r(11)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full bg-white py-8 px-3"},[o("div",{staticClass:"newsletter-block max-w-7xl mx-auto  p-4 bg-white md:px-32 md:py-24 rounded-xl border-2 border-indigo-400"},[o("form",{staticClass:"flex flex-col text-center justify-center",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[o("img",{staticClass:"h-8 w-auto mb-8",attrs:{src:r(213),alt:"Lideka Home"}}),t._v(" "),o("h2",{staticClass:"text-3xl font-bold uppercase text-white"},[t._v("\n      Ontvang gratis ebooks en exclusieve deals van Lideka\n    ")]),t._v(" "),o("p",{staticClass:"mt-6 px-4 text-white"},[t._v("\n      Meld je aan voor de nieuwsbrief en ontvang gratis e-boeken en speciaal nieuws en aanbiedingen van de lideka.\n    ")]),t._v(" "),o("div",{staticClass:"md:flex md:w-1/2 my-6 mx-auto space-y-4 md:space-y-0"},[o("FormField",{staticClass:"flex-1",attrs:{"hide-label":!0,name:"Voer je e-mailadres in",errors:t.$v.fields.email,"model-value":t.fields.email,"input-type":"email"},on:{"update:modelValue":function(e){return t.$set(t.fields,"email",e)},"update:model-value":function(e){return t.$set(t.fields,"email",e)}}}),t._v(" "),o("button",{staticClass:"ml-4 uppercase tracking-wide shadow-md py-1 px-6 border border-transparent rounded text-md text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",attrs:{type:"submit"}},[t._v("\n        Aanmelden\n      ")])],1),t._v(" "),o("p",{staticClass:"text-white"},[t._v("\n      Door je aan te melden, ga je akkoord met het\n      "),o("NuxtLink",{staticClass:"underline",attrs:{to:"/privacy-statement",target:"_blank",rel:"noopener"}},[t._v("privacybeleid")]),t._v("\n      en de\n      "),o("NuxtLink",{staticClass:"underline",attrs:{to:"/algemene-voorwaarden",target:"_blank",rel:"noopener"}},[t._v("gebruiksvoorwaarden")])],1)])])])}),[],!1,null,null,null);e.a=component.exports},631:function(t,e,r){"use strict";var o=r(4).default.extend({data:function(){return{options:{loop:!0,perPage:1,space:10,slideCount:1,paginationEnabled:!1,autoplay:!0,scrollPerPage:!1},nextLabel:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" style="color: white;" class="bi bi-caret-right" viewBox="0 0 16 16">\n<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>\n</svg>',prevLabel:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" style="color: white;" class="bi bi-caret-left" viewBox="0 0 16 16">\n<path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>\n</svg>'}}}),n=(r(735),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-7xl mx-auto"},[r("client-only",[r("carousel",t._b({attrs:{perPageCustom:[[480,1],[768,2],[1022,3]],"navigation-enabled":!0,"navigation-prev-label":t.prevLabel,"navigation-next-label":t.nextLabel}},"carousel",t.options,!1),[r("slide",{staticClass:"relative"},[r("div",{staticClass:"_living-room hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strip-woonkamer"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Woonkamer")])])])],1)]),t._v(" "),r("slide",{staticClass:"relative"},[r("div",{staticClass:"col-span-1 lg:col-span-7 _bedroom hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strip-slaapkamer"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Slaapkamer")])])])],1)]),t._v(" "),r("slide",{staticClass:"relative"},[r("div",{staticClass:"col-span-1 lg:col-span-8 _kitchen hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strip-keuken"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Keuken")])])])],1)]),t._v(" "),r("slide",{staticClass:"relative"},[r("div",{staticClass:"col-span-1 lg:col-span-4 _gameroom hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strip-gamekamer"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Game kamer")])])])],1)]),t._v(" "),r("slide",{staticClass:"relative"},[r("div",{staticClass:"col-span-1 lg:col-span-4 _bathroom hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strip-badkamer"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Badkamer")])])])],1)]),t._v(" "),r("slide",{staticClass:"relative"},[r("div",{staticClass:"col-span-1 lg:col-span-4 _ceiling hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strip-plafond"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Plafond")])])])],1)]),t._v(" "),r("slide",{staticClass:"relative"},[r("div",{staticClass:"col-span-1 lg:col-span-4 _bed hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strip-bed"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Bed")])])])],1)]),t._v(" "),r("slide",{staticClass:"relative"},[r("div",{staticClass:"col-span-1 lg:col-span-4 _other hover:opacity-50 transition-all mx-2"},[r("NuxtLink",{attrs:{to:"/categorie/led-strips"}},[r("div",{staticClass:"flex items-end justify-center text-center",staticStyle:{height:"400px"}},[r("h2",{staticClass:"p-6 text-white text-2xl font-bold tracking-wide uppercase"},[t._v("Overige")])])])],1)])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},632:function(t,e,r){"use strict";var o=r(4).default.extend({props:{to:{type:String,required:!0}}}),n=r(11),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-center"},[r("NuxtLink",{staticClass:"flex items-center transition-all space-x-4 shadow-md p-3 px-6 items-center justify-center border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-400 to-purple-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-bold tracking-wide",attrs:{to:t.to}},[r("span",[t._t("default")],2),t._v(" "),r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])],1)}),[],!1,null,null,null);e.a=component.exports},633:function(t,e,r){"use strict";var o=r(4),n=r(32),l=o.default.extend({props:{title:{type:String,default:""},showVideoReviews:{type:Boolean,default:!0},forProduct:{type:String,default:null}},data:function(){return{reviews:[],options:{loop:!0,perPage:1,slideCount:1,paginationEnabled:!1,autoplay:!0,autoplayTimeout:5e3},nextLabel:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" style="color: white;" class="bi bi-caret-right" viewBox="0 0 16 16">\n<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>\n</svg>',prevLabel:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" style="color: white;" class="bi bi-caret-left" viewBox="0 0 16 16">\n<path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>\n</svg>'}},methods:{openModal:function(t){"daniel"===t?this.$root.$emit("openModal",{video:"https://cdn.shopify.com/s/files/1/0570/2352/9109/files/daniel.mp4?v=1638879155"}):"3"===t?this.$root.$emit("openModal",{video:"https://cdn.shopify.com/s/files/1/0570/2352/9109/files/UGC__link_pizza.mov?v=1640707713"}):"2"===t?this.$root.$emit("openModal",{video:"https://cdn.shopify.com/s/files/1/0570/2352/9109/files/Video_4-f8fa061c-f1e9-4f78-8128-904db4b0d0ce.mov?v=1640707712"}):"a1"===t?this.$root.$emit("openModal",{video:"https://lideka.s3.eu-central-1.amazonaws.com/1.mp4"}):"a2"===t?this.$root.$emit("openModal",{video:"https://lideka.s3.eu-central-1.amazonaws.com/2-big.mp4"}):"a3"===t?this.$root.$emit("openModal",{video:"https://lideka.s3.eu-central-1.amazonaws.com/3-big.mp4"}):"a4"===t?this.$root.$emit("openModal",{video:"https://lideka.s3.eu-central-1.amazonaws.com/4-big.mp4"}):"a5"===t?this.$root.$emit("openModal",{video:"https://lideka.s3.eu-central-1.amazonaws.com/5-big.mp4"}):this.$root.$emit("openModal",{video:"https://cdn.shopify.com/s/files/1/0570/2352/9109/files/isabelle.lois.mp4?v=1638874209"})}},created:function(){var t=this,e={};this.forProduct&&(e={params:{product:this.forProduct}}),Object(n.j)("/reviews/all",e).then((function(e){var data=e.data;t.reviews=null!=data?data:[]}))}}),c=r(11),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",{staticClass:"uppercase text-white font-bold text-3xl mx-auto mb-6 max-w-5xl"},[t._v("Wat zeggen anderen over de Service En Kwaliteit van Lideka?")]),t._v(" "),o("client-only",[t.showVideoReviews?o("carousel",t._b({attrs:{perPageCustom:[[480,1],[768,1],[1022,2]],"navigation-enabled":!0,"navigation-prev-label":t.prevLabel,"navigation-next-label":t.nextLabel}},"carousel",t.options,!1),[o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("lois")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(663)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "Verliefd op Lideka LED-strips" '),o("i",[t._v("Lois")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])]),t._v(" "),o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("daniel")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(664)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "Mega enthousiast!" '),o("i",[t._v("Daniel")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2 cursor-pointer"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])]),t._v(" "),o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("2")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(665)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "Geweldige kwaliteit!" '),o("i",[t._v("Lisa")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])]),t._v(" "),o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("a1")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(666)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "Alle feestjes voortaan op mijn kamer!" '),o("i",[t._v("Manon")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2 cursor-pointer"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])]),t._v(" "),o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("a2")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(667)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "10x mooiere kamer!" '),o("i",[t._v("Jade")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2 cursor-pointer"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])]),t._v(" "),o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("a3")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(668)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "Onwijs leuke sfeer in je kamer!" '),o("i",[t._v("Renzo")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2 cursor-pointer"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])]),t._v(" "),o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("a4")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(669)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "Super makkelijk te bedienen!" '),o("i",[t._v("Anouk")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2 cursor-pointer"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])]),t._v(" "),o("slide",{staticClass:"pl-1 pr-1"},[o("div",{staticClass:"rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-4 text-white animate-pulse transition-all transform hover:opacity-50 cursor-pointer",on:{click:function(e){return t.openModal("a5")}}},[o("div",{staticClass:"flex items-center space-x-4"},[o("div",[o("img",{staticClass:"object-cover w-28 h-28 rounded-full",attrs:{src:r(670)}})]),t._v(" "),o("div",[o("div",{staticClass:"mb-2 flex items-center"},t._l(5,(function(i){return o("svg",{staticClass:"text-yellow-400 h-8 w-8 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"text-white font-bold tracking-wide text-lg pb-6"},[t._v('\n                "Super simpel gemonteerd!" '),o("i",[t._v("Tibor")])]),t._v(" "),o("div",{staticClass:"flex items-center space-x-2 cursor-pointer"},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}})]),t._v(" "),o("span",{staticClass:"font-bold tracking-wide"},[t._v("Bekijk video")])])])])])])],1):t._e()],1),t._v(" "),o("h2",{staticClass:"text-left md:text-center text-white max-w-4xl mx-auto font-bold text-3xl uppercase tracking-wide mb-10"},[t._v(t._s(t.title))]),t._v(" "),o("client-only",[o("carousel",t._b({attrs:{perPageCustom:[[480,1],[768,3],[1022,4]],"navigation-enabled":!0,"navigation-prev-label":t.prevLabel,"navigation-next-label":t.nextLabel}},"carousel",t.options,!1),t._l(t.reviews,(function(e){return o("slide",{staticClass:"pl-1 pr-1 "},[o("div",{staticClass:"lg:col-span-2 h-full rounded-3xl p-4"},[o("div",{staticClass:"flex items-center"},[o("div",{staticClass:"flex items-center"},[o("div",{staticClass:"mt-1 flex items-center"},t._l(e.stars,(function(i){return o("svg",{staticClass:"text-yellow-400 h-5 w-5 flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])})),0),t._v(" "),o("p",{staticClass:"sr-only"},[t._v(t._s(e.stars)+" out of 5 stars")])])]),t._v(" "),o("h4",{staticClass:"mt-1 font-bold text-white"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"mt-1"},[o("p",{staticClass:"text-sm text-gray-400"},[t._v("\n              "+t._s(e.description)+"\n            ")])]),t._v(" "),e.photos.length>0?o("div",{staticClass:"mt-4 flex space-x-4"},t._l(e.photos,(function(t){return o("a",{key:t,attrs:{"data-fancybox":e.id,href:t}},[o("img",{staticClass:"h-20 w-20 rounded-lg bg-center bg-cover",attrs:{src:t,loading:"lazy",alt:"Photo for review"}})])})),0):t._e()])])})),1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},634:function(t,e,r){t.exports=r.p+"img/e8baa36.svg"},635:function(t,e,r){t.exports=r.p+"img/81d7d16.svg"},637:function(t,e,r){t.exports=r.p+"img/8f0f938.svg"},639:function(t,e,r){t.exports=r.p+"img/a272917.svg"},641:function(t,e,r){"use strict";var o=r(11),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto max-w-7xl"},[r("div",{staticClass:"grid grid-cols-2 lg:grid-cols-3 gap-4"},[r("NuxtLink",{staticClass:"bg-gradient-to-r from-indigo-400 to-purple-500 p-6 block text-white rounded-lg cursor-pointer hover:opacity-50 transition-all",attrs:{to:"/categorie/led-strip-2-meter"}},[r("span",{staticClass:"text-extrabold font-bold"},[t._v("2 meter")])]),t._v(" "),r("NuxtLink",{staticClass:"bg-gradient-to-r from-indigo-400 to-purple-500  p-6 block text-white rounded-lg cursor-pointer hover:opacity-50",attrs:{to:"/categorie/led-strip-3-meter"}},[r("span",{staticClass:"text-extrabold font-bold"},[t._v("3 meter")])]),t._v(" "),r("NuxtLink",{staticClass:"bg-gradient-to-r from-indigo-400 to-purple-500  p-6 block text-white rounded-lg cursor-pointer hover:opacity-50",attrs:{to:"/categorie/led-strip-5-meter"}},[r("span",{staticClass:"text-extrabold font-bold"},[t._v("5 meter")])]),t._v(" "),r("NuxtLink",{staticClass:"bg-gradient-to-r from-indigo-400 to-purple-500  p-6 block text-white rounded-lg cursor-pointer hover:opacity-50",attrs:{to:"/categorie/led-strip-10-meter"}},[r("span",{staticClass:"text-extrabold font-bold"},[t._v("10 meter")])]),t._v(" "),r("NuxtLink",{staticClass:"bg-gradient-to-r from-indigo-400 to-purple-500  p-6 block text-white rounded-lg cursor-pointer hover:opacity-50",attrs:{to:"/categorie/led-strip-15-meter"}},[r("span",{staticClass:"text-extrabold font-bold"},[t._v("15 meter")])]),t._v(" "),r("NuxtLink",{staticClass:"bg-gradient-to-r from-indigo-400 to-purple-500  p-6 block text-white rounded-lg cursor-pointer hover:opacity-50",attrs:{to:"/categorie/led-strip-20-meter"}},[r("span",{staticClass:"text-extrabold font-bold"},[t._v("20 meter")])])],1)])}),[],!1,null,null,null);e.a=component.exports},642:function(t,e,r){t.exports=r.p+"img/dd696d4.svg"},652:function(t,e,r){var content=r(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("657d4765",content,!0,{sourceMap:!1})},653:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},657:function(t,e,r){t.exports=r.p+"img/58ac301.svg"},660:function(t,e,r){"use strict";r(652)},661:function(t,e,r){var o=r(76),n=r(653),l=r(662),c=o((function(i){return i[1]})),d=n(l);c.push([t.i,".newsletter-block{background:url("+d+") no-repeat;background-position:50%}.newsletter-block button{background:linear-gradient(100.91deg,#5ab6e7 -6.75%,#8560cd 111.47%)}",""]),c.locals={},t.exports=c},662:function(t,e,r){t.exports=r.p+"img/a09d36d.png"},663:function(t,e,r){t.exports=r.p+"img/85a1cfa.jpg"},664:function(t,e,r){t.exports=r.p+"img/dba6ade.jpg"},665:function(t,e,r){t.exports=r.p+"img/276f604.jpg"},666:function(t,e,r){t.exports=r.p+"img/7d7f69d.jpg"},667:function(t,e,r){t.exports=r.p+"img/4666e00.jpg"},668:function(t,e,r){t.exports=r.p+"img/8c3408c.jpg"},669:function(t,e,r){t.exports=r.p+"img/552b436.jpg"},670:function(t,e,r){t.exports=r.p+"img/0e19880.jpg"},682:function(t,e,r){t.exports=r.p+"img/0f7dbf4.png"},683:function(t,e,r){t.exports=r.p+"img/4c63e11.png"},684:function(t,e,r){t.exports=r.p+"img/3f5be9a.png"},686:function(t,e,r){var content=r(736);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("932295c6",content,!0,{sourceMap:!1})},693:function(t,e,r){t.exports=r.p+"img/af69ddc.jpg"},735:function(t,e,r){"use strict";r(686)},736:function(t,e,r){var o=r(76)((function(i){return i[1]}));o.push([t.i,".VueCarousel-navigation-button.VueCarousel-navigation-next{right:20px!important;border-radius:50%;background-color:rgba(0,0,0,.75)}.VueCarousel-navigation-button.VueCarousel-navigation-prev{left:20px!important;border-radius:50%;background-color:rgba(0,0,0,.75)}@media (max-width:800px){.VueCarousel-navigation-button.VueCarousel-navigation-prev{left:30px!important}.VueCarousel-navigation-button.VueCarousel-navigation-next{right:30px!important}}",""]),o.locals={},t.exports=o}}]);