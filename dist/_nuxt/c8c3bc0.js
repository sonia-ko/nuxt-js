(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{336:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("138e571c",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";n.r(e);n(32),n(36);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},r=n(21),component=Object(r.a)(o,(function(){this._self._c;return this._e()}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){"use strict";n(336)},342:function(t,e,n){var o=n(38)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.product-container[data-v-b80f05cc]{\n  display:flex;\n  font-size:1.25rem;\n  width:100%\n}\n.image-section[data-v-b80f05cc]{\n  width:50%\n}\n.text-section[data-v-b80f05cc]{\n  width:40%\n}\n.img[data-v-b80f05cc]{\n  width:50%\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},367:function(t,e,n){"use strict";n.r(e);n(32),n(36),n(118);var o=n(9),r=(n(37),{layout:"product",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,o=t.$axios,e.next=3,o.$get("https://api.nuxtjs.dev/mountains/".concat(n.mountain));case 3:return r=e.sent,e.abrupt("return",{mountain:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=(n(341),n(21)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto"},[e("SocialHead",{attrs:{title:t.mountain.title,description:t.mountain.description,image:t.mountain.image}}),t._v(" "),e("div",{staticClass:"relative py-16 bg-white overflow-hidden"},[e("NuxtLink",{attrs:{to:"/products"}},[t._v(" ← Go back to mountains ")])],1),t._v(" "),e("p",{staticClass:"text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase"},[t._v("\n    "+t._s(t.mountain.continent)+"\n  ")]),t._v(" "),e("h1",{staticClass:"mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl"},[t._v("\n    "+t._s(t.mountain.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"relative px-4 sm:px-6 lg:px-8 product-container"},[e("div",{staticClass:"image-section"},[e("div",{staticClass:"text-lg max-w-prose mx-auto mb-6"}),t._v(" "),e("figure",[e("img",{staticClass:"w-auto rounded-lg mx-auto",attrs:{src:t.mountain.image,alt:t.mountain.title,width:"1310",height:"873"}}),t._v(" "),e("figcaption",{staticClass:"text-center"},[t._v(t._s(t.mountain.title))])])]),t._v(" "),e("div",{staticClass:"text-section"},[e("div",{staticClass:"mt-4 prose prose-lg text-gray-500 mx-auto description"},[e("ul",[e("li",[e("span",{staticClass:"font-bold"},[t._v("Height:")]),t._v(" "+t._s(t.mountain.height)+"\n          ")]),t._v(" "),e("li",[e("span",{staticClass:"font-bold"},[t._v("Country:")]),t._v("\n            "+t._s(t.mountain.countries.join(", "))+"\n          ")])]),t._v(" "),e("p",[t._v("\n          "+t._s(t.mountain.description)+"\n        ")])])])])],1)}),[],!1,null,"b80f05cc",null);e.default=component.exports;installComponents(component,{SocialHead:n(340).default})}}]);