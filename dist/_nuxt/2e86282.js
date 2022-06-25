(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{836:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(29),r(20),r(21),r(42),r(26),r(34),r(10)),l=r(3),c=(r(27),r(150)),d=r(211),m=r(117),f=r(32);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x=n.default.extend({components:{FormField:d.a},data:function(){return{fields:{email:"",firstName:"",lastName:"",password:"",acceptsMarketing:!0}}},validations:{fields:{firstName:{required:c.required},lastName:{required:c.required},password:{required:c.required,minLength:Object(c.minLength)(6)},email:{required:c.required,email:c.email}}},methods:{submit:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,code,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.$touch(),!e.$v.$invalid){t.next=5;break}e.$root.$emit("addNotification","Niet gelukt!","Vul alle velden correct in","error"),t.next=26;break;case 5:return t.prev=5,t.next=8,Object(f.f)({input:w({},e.fields)});case 8:if(r=t.sent,n=r.customerCreate,code=Object(m.j)(n,"customerUserErrors.0.code"),o=Object(m.j)(n,"customerUserErrors.0.message"),"TAKEN"!==code){t.next=15;break}return e.$root.$emit("addNotification","E-mailadres is in gebruik!","Het e-mailadres is al in gebruik, je kunt gewoon inloggen of wachtwoord vergeten drukken.","error",5e3),t.abrupt("return");case 15:if("BAD_DOMAIN"!==code){t.next=18;break}return e.$root.$emit("addNotification","Fout.","Ongeldige domeinnaam.","error",5e3),t.abrupt("return");case 18:return o?e.$root.$emit("addNotification","Account aangemaakt",o,"",1e4):e.$root.$emit("addNotification","Account aangemaakt","Je kunt nu inloggen met je e-mailadres en wachtwoord.","",1e4),t.next=21,e.$router.push("/account/login");case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(5),e.$root.$emit("addNotification","Oops.","Er is iets fout gegaan.","error");case 26:case"end":return t.stop()}}),t,null,[[5,23]])})))()}}}),$=r(11),O=Object($.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",{staticClass:"space-y-6"},[r("FormField",{attrs:{errors:e.$v.fields.firstName,"model-value":e.fields.firstName,name:"Voornaam","input-type":"text"},on:{"update:modelValue":function(t){return e.$set(e.fields,"firstName",t)},"update:model-value":function(t){return e.$set(e.fields,"firstName",t)}}}),e._v(" "),r("FormField",{attrs:{errors:e.$v.fields.lastName,"model-value":e.fields.lastName,name:"Achternaam","input-type":"text"},on:{"update:modelValue":function(t){return e.$set(e.fields,"lastName",t)},"update:model-value":function(t){return e.$set(e.fields,"lastName",t)}}}),e._v(" "),r("FormField",{attrs:{errors:e.$v.fields.email,"model-value":e.fields.email,name:"E-mailadres","input-type":"email"},on:{"update:modelValue":function(t){return e.$set(e.fields,"email",t)},"update:model-value":function(t){return e.$set(e.fields,"email",t)}}}),e._v(" "),r("FormField",{attrs:{errors:e.$v.fields.password,"model-value":e.fields.password,name:"Wachtwoord","input-type":"password"},on:{"update:modelValue":function(t){return e.$set(e.fields,"password",t)},"update:model-value":function(t){return e.$set(e.fields,"password",t)}}}),e._v(" "),e._m(0)],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{staticClass:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",attrs:{type:"submit"}},[e._v("\n        Account aanmaken\n      ")])])}],!1,null,null,null).exports,h=n.default.extend({components:{Register:O}}),j=Object($.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-black py-16 pb-32"},[r("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md mb-8"},[r("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-white"},[e._v("\n      Account aanmaken\n    ")]),e._v(" "),r("p",{staticClass:"mt-2 text-center text-sm text-gray-600"},[e._v("\n      Of\n      "),r("NuxtLink",{staticClass:"font-medium text-indigo-400 hover:text-indigo-300",attrs:{to:"/account/login"}},[e._v("\n        inloggen\n      ")])],1)]),e._v(" "),r("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[r("div",{staticClass:"bg-white py-16 px-4 shadow rounded-lg sm:px-10"},[r("Register")],1)])])}),[],!1,null,null,null);t.default=j.exports}}]);