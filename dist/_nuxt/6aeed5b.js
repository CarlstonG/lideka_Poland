(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{834:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(29),r(20),r(21),r(42),r(26),r(34),r(3)),c=r(10),l=(r(27),r(150)),d=r(211),m=r(117),f=r(24),v=r(32);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w=n.default.extend({components:{FormField:d.a},data:function(){return{fields:{email:"",password:""}}},validations:{fields:{password:{required:l.required,minLength:Object(l.minLength)(6)},email:{required:l.required,email:l.email}}},computed:h({},Object(f.c)("shop/cart",["checkoutId"])),methods:h(h({},Object(f.b)("shop/customer",["setAccessToken","fetchCustomer"])),{},{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.$touch(),!e.$v.$invalid){t.next=5;break}e.$root.$emit("addNotification","Niet gelukt!","Vul alle velden correct in","error"),t.next=30;break;case 5:return t.prev=5,t.next=8,Object(v.k)({input:h({},e.fields)});case 8:if(r=t.sent,n=r.customerAccessTokenCreate,"UNIDENTIFIED_CUSTOMER"!==Object(m.j)(n,"customerUserErrors.0.code")){t.next=14;break}return e.$root.$emit("addNotification","Fout.","Inloggegevens niet gevonden.","error",1e4),t.abrupt("return");case 14:if((o=Object(m.j)(n,"customerAccessToken.accessToken"))||e.$root.$emit("addNotification","Oops.","Er is iets fout gegaan.","error"),!e.checkoutId){t.next=19;break}return t.next=19,Object(v.d)({checkoutId:e.checkoutId,customerAccessToken:o});case 19:return t.next=21,e.setAccessToken(o);case 21:return t.next=23,e.fetchCustomer();case 23:return t.next=25,e.$router.push("/");case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(5),e.$root.$emit("addNotification","Oops.","Er is iets fout gegaan.","error");case 30:case"end":return t.stop()}}),t,null,[[5,27]])})))()}})}),O=r(11),k=Object(O.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",{staticClass:"space-y-6"},[r("FormField",{attrs:{errors:e.$v.fields.email,"model-value":e.fields.email,name:"E-mailadres","input-type":"email"},on:{"update:modelValue":function(t){return e.$set(e.fields,"email",t)},"update:model-value":function(t){return e.$set(e.fields,"email",t)}}}),e._v(" "),r("FormField",{attrs:{errors:e.$v.fields.password,"model-value":e.fields.password,name:"Wachtwoord","input-type":"password"},on:{"update:modelValue":function(t){return e.$set(e.fields,"password",t)},"update:model-value":function(t){return e.$set(e.fields,"password",t)}}}),e._v(" "),r("div",{staticClass:"flex items-center justify-between"},[e._m(0),e._v(" "),r("div",{staticClass:"text-sm"},[r("NuxtLink",{staticClass:"font-medium text-blue-600 hover:text-blue-500",attrs:{to:"/account/recover"}},[e._v("\n          Wachtwoord vergeten?\n        ")])],1)]),e._v(" "),e._m(1)],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center"},[r("input",{staticClass:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",attrs:{id:"remember_me",name:"remember_me",type:"checkbox"}}),e._v(" "),r("label",{staticClass:"ml-2 block text-sm text-gray-900",attrs:{for:"remember_me"}},[e._v("\n          Onthouden\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{staticClass:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",attrs:{type:"submit"}},[e._v("\n        Inloggen\n      ")])])}],!1,null,null,null).exports,_=n.default.extend({components:{Login:k}}),j=Object(O.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-black py-16 pb-32"},[r("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md mb-8"},[r("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-white"},[e._v("\n      Inloggen\n    ")]),e._v(" "),r("p",{staticClass:"mt-2 text-center text-sm text-gray-600"},[e._v("\n      Of\n      "),r("NuxtLink",{staticClass:"font-medium text-indigo-400 hover:text-indigo-300",attrs:{to:"/account/register"}},[e._v("\n        maak een account aan\n      ")])],1)]),e._v(" "),r("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[r("div",{staticClass:"bg-white py-16 px-4 shadow rounded-lg sm:px-10"},[r("Login")],1)])])}),[],!1,null,null,null);t.default=j.exports}}]);