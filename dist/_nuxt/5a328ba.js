(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{838:function(t,e,n){"use strict";n.r(e);var l=n(3),r=(n(27),n(4)),c=n(210),o=n(32),d=n(117),x=r.default.extend({components:{Loading:c.a},data:function(){return{loading:!1,slug:null,blog:{}}},head:function(){return{title:Object(d.j)(this.blog,"seo.title"),meta:[{hid:"description",name:"description",content:Object(d.j)(this.blog,"seo.description")}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,l=n.slug,e.abrupt("return",{slug:l});case 3:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(o.n)("blog");case 3:t.blog=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}}),m=n(11),component=Object(m.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white"},[Object.keys(t.blog).length<1&&t.loading?n("div",[n("div",{staticClass:"max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative",staticStyle:{"min-height":"500px"}},[n("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)]):n("div",{staticClass:"relative pt-16 pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8"},[n("div",{staticClass:"relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"},[t._v("\n          "+t._s(t.blog.title)+"\n        ")])]),t._v(" "),n("div",{staticClass:"mt-12 mx-auto grid gap-5 lg:grid-cols-4"},t._l(t.blog.articles,(function(article){return n("div",{key:article.id,staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[n("div",{staticClass:"flex-shrink-0"},[n("NuxtLink",{attrs:{to:article.url}},[n("img",{staticClass:"h-96 w-full object-cover",attrs:{src:article.image,alt:article.imageAlt}})])],1),t._v(" "),n("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[n("div",{staticClass:"flex-1"},[n("NuxtLink",{staticClass:"block mt-2",attrs:{to:article.url}},[n("p",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("\n                  "+t._s(article.title)+"\n                ")])]),t._v(" "),n("NuxtLink",{staticClass:"block mt-2 text-gray-500",attrs:{to:article.url}},[n("p",{staticClass:"mt-3 text-base text-gray-500"},[t._v("\n                  "+t._s(article.excerpt)+"\n                ")])])],1),t._v(" "),n("div",{staticClass:"mt-6 flex items-center"},[n("div",[n("p",{staticClass:"text-sm font-medium text-gray-900"},[n("a",{staticClass:"hover:underline",attrs:{href:"#"}},[t._v("\n                    "+t._s(article.author)+"\n                  ")])]),t._v(" "),n("div",{staticClass:"flex space-x-1 text-sm text-gray-500"},[n("time",{attrs:{datetime:"2020-03-16"}},[t._v("\n                    "+t._s(article.publishedAt)+"\n                  ")])])])])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);