(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/carousel.md?vue&type=template&id=76ea18d8

var carouselvue_type_template_id_76ea18d8_hoisted_1 = {
  class: "doc-main-content"
};
var carouselvue_type_template_id_76ea18d8_hoisted_2 = {
  class: "doc-content"
};

var carouselvue_type_template_id_76ea18d8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "carousel-zou-ma-deng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#carousel-zou-ma-deng"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Carousel 走马灯")], -1);

var carouselvue_type_template_id_76ea18d8_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "mo-ren-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mo-ren-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 默认样式")], -1);

var carouselvue_type_template_id_76ea18d8_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("结合使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-carousel"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-carousel-item"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，可以达到点击触发的效果。")])], -1);

var carouselvue_type_template_id_76ea18d8_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">默认 Hover 指示器触发</span>\n    <hl-carousel height=\"150px\"   >\n      <hl-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h4 class=\"small\">{{ item }}</h4>\n      </hl-carousel-item>\n    </hl-carousel>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Click 指示器触发 </span>\n    <hl-carousel trigger=\"click\" height=\"150px\" indicator-type=\"dot\">\n      <hl-carousel-item v-for=\"item in 4\" :key=\"item\">\n        <h4 class=\"small\">{{ item }}</h4>\n      </hl-carousel-item>\n    </hl-carousel>\n  </div>\n</template>\n\n<style>\n  .hl-carousel-item h4 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .hl-carousel-item:nth-child(2n) {\n     background-color: #99a9bf;\n  }\n\n  .hl-carousel-item:nth-child(2n+1) {\n     background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "zhi-shi-qi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhi-shi-qi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 指示器")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可以将指示器的显示位置设置在容器外部", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indicator-position"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "outside"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("则会显示在外部；设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "none"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("则不会显示指示器。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-carousel indicator-position=\"outside\">\n    <hl-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h4>{{ item }}</h4>\n    </hl-carousel-item>\n  </hl-carousel>\n</template>\n\n<style>\n  .hl-carousel-item h4 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .hl-carousel-item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .hl-carousel-item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "qie-huan-jian-tou"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qie-huan-jian-tou"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 切换箭头")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可以设置切换箭头的显示时机", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "arrow"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，则会一直显示；设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，则会一直隐藏。")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-carousel :interval=\"5000\" arrow=\"always\">\n    <hl-carousel-item v-for=\"item in 4\" :key=\"item\">\n      <h4>{{ item }}</h4>\n    </hl-carousel-item>\n  </hl-carousel>\n</template>\n\n<style>\n  .hl-carousel-item h4 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .hl-carousel-item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .hl-carousel-item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "qia-pian-hua"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qia-pian-hua"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 卡片化")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-carousel :interval=\"4000\" type=\"card\" height=\"200px\">\n    <hl-carousel-item v-for=\"item in 6\" :key=\"item\">\n      <h4 class=\"medium\">{{ item }}</h4>\n    </hl-carousel-item>\n  </hl-carousel>\n</template>\n\n<style>\n  .hl-carousel-item h4 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .hl-carousel-item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .hl-carousel-item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "fang-xiang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fang-xiang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 方向")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("默认情况下，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来让走马灯在垂直方向上显示。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-carousel height=\"200px\" direction=\"vertical\" :autoplay=\"false\">\n    <hl-carousel-item v-for=\"item in 3\" :key=\"item\">\n      <h4 class=\"medium\">{{ item }}</h4>\n    </hl-carousel-item>\n  </hl-carousel>\n</template>\n\n<style>\n  .hl-carousel-item h4 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .hl-carousel-item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .hl-carousel-item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "自定义指示器示例", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("自定义indicator时，使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-carousel-indicator"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，添加属性:index=\"index\"、indicator-type=\"custom\"、v-slot:indicator")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n   <span class=\"demonstration\">inside</span>\n    <hl-carousel class=\"hl-carousel-indicator-inside\" \n      height=\"150px\" indicator-type=\"custom\"   trigger=\"click\"  :autoplay=\"false\"  @change=\"change\" \n      @mouseenter.stop=\"carouselDisplay = true\"\n      @mouseleave.stop=\"carouselDisplay = false\"\n      :initial-index = '1'>\n      <hl-carousel-item v-for=\"item in imageData\" :key=\"item\">\n        <img :src=\"item.url\" width=\"340\" height=\"150\" />\n      </hl-carousel-item>\n      <template v-slot:indicator>\n        <div class=\"indicator-animation\" \n             :class=\"{'indicator-animation-active':carouselDisplay}\">\n          <hl-carousel-indicator v-for=\"(item,index) in imageData\" :key=\"item\" :index=\"index\">\n            <img :src=\"item.url\" />\n          </hl-carousel-indicator>\n        </div> \n      </template>\n    </hl-carousel>\n  </div>\n  <div class=\"block\">\n   <span class=\"demonstration\">outside</span>\n    <hl-carousel class=\"hl-carousel-indicator-outside\" height=\"120px\"       indicatorType=\"custom\"  trigger=\"click\"  :autoplay=\"false\"  @change=\"change\" indicatorPosition=\"outside\">\n      <hl-carousel-item v-for=\"item in imageData\" :key=\"item\">\n       <img :src=\"item.url\" width=\"340\" height=\"120\" />\n      </hl-carousel-item>\n      <template v-slot:indicator>\n        <hl-carousel-indicator v-for=\"(item,index) in imageData\" :key=\"item\" :index=\"index\">\n            <img :src=\"item.url\" />\n        </hl-carousel-indicator>\n      </template>\n    </hl-carousel>\n  </div>\n  <div class=\"block-vertical\">\n   <span class=\"demonstration\">right</span>\n    <hl-carousel class=\"hl-carousel-indicator-right\" height=\"200px\"   indicatorType=\"custom\"  trigger=\"click\"  :autoplay=\"true\"  @change=\"change\" direction=\"vertical\">\n      <hl-carousel-item v-for=\"item in imageData\" :key=\"item\">\n        <img :src=\"item.url\"/>\n      </hl-carousel-item>\n      <template v-slot:indicator> \n        <hl-carousel-indicator v-for=\"(item,index) in imageData\" :key=\"item\" :index=\"index\">\n          <img :src=\"item.url\" />\n        </hl-carousel-indicator> \n      </template>\n    </hl-carousel>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        imageData :[\n         {url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg6.ddove.com%2Fupload%2F20160620%2F130253841615.jpg&refer=http%3A%2F%2Fimg6.ddove.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=fe2adfe3cd3c67dbc5ea1652a98e9cfc'},\n         {url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F10%2F192621gvktnkenhheenken.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=758616c811511445b7c63570a47ecbfb'\n         },{url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201404%2F12%2F121109atlt9fz05lr05e5q.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=6ce4f8edde1507a463a3df0603accdf8'\n         }],\n         carouselDisplay:false\n      };\n    },\n    methods:{\n      change(current,prev){\n        //console.log(current,prev)\n      },\n    }\n  };\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "xian-shi-duo-zhang-tu-pian"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xian-shi-duo-zhang-tu-pian"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 显示多张图片")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可视区域显示多个items,hl-carousel-item的数量 - itemsNumber >= 2 && type !== 'card' && direction === 'horizontal'时生效，itemsNumber/itemsWidth必传，默认不显示indicator指示器;")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <hl-carousel height=\"150px\" :autoplay=\"false\" trigger=\"click\" :items-number=\"4\" :items-width=\"140\">\n      <hl-carousel-item v-for=\"item in 7\" :key=\"item\">\n        <h4 class=\"small\">{{ item }}</h4>\n      </hl-carousel-item>\n    </hl-carousel>\n  </div>\n</template>\n\n<style>\n  .hl-carousel-item h4 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n  .hl-carousel-item:nth-child(2n) {\n     background-color: #99a9bf;\n  }\n\n  .hl-carousel-item:nth-child(2n+1) {\n     background-color: #d3dce6;\n  }\n</style>\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"carousel-attributes\"><a class=\"header-anchor\" href=\"#carousel-attributes\"></a> Carousel Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>走马灯的高度</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>初始状态激活的幻灯片的索引，从 0 开始</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>指示器的触发方式</td><td>string</td><td>click</td><td>—</td></tr><tr><td>autoplay</td><td>是否自动切换</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>自动切换的时间间隔，单位为毫秒</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>指示器的位置</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>切换箭头的显示时机</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>走马灯的类型</td><td>string</td><td>card</td><td>—</td></tr><tr><td>loop</td><td>是否循环显示</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>direction</td><td>走马灯展示的方向</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>pause-on-hover</td><td>鼠标悬浮时暂停自动切换</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>indicator-type</td><td>指示器类型</td><td>string</td><td>line/dot/custom(自定义)</td><td>line</td></tr><tr><td>slot</td><td>自定义指示器具名插槽</td><td>v-slot:indicator</td><td></td><td></td></tr><tr><td>items-number</td><td>可视区域显示items个数,</td><td>number</td><td></td><td>大于1</td></tr><tr><td>items-width</td><td>items-number &gt; 1时，items宽度有效</td><td>string/number</td><td></td><td></td></tr></tbody></table><h3 id=\"carousel-events\"><a class=\"header-anchor\" href=\"#carousel-events\"></a> Carousel Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>幻灯片切换时触发</td><td>目前激活的幻灯片的索引，原幻灯片的索引</td></tr></tbody></table><h3 id=\"carousel-methods\"><a class=\"header-anchor\" href=\"#carousel-methods\"></a> Carousel Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setActiveItem</td><td>手动切换幻灯片</td><td>需要切换的幻灯片的索引，从 0 开始；或相应 <code>hl-carousel-item</code> 的 <code>name</code> 属性值</td></tr><tr><td>prev</td><td>切换至上一张幻灯片</td><td>—</td></tr><tr><td>next</td><td>切换至下一张幻灯片</td><td>—</td></tr></tbody></table><h3 id=\"carousel-item-attributes\"><a class=\"header-anchor\" href=\"#carousel-item-attributes\"></a> Carousel-Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>幻灯片的名字，可用作 <code>setActiveItem</code> 的参数</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>该幻灯片所对应指示器的文本</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"carousel-indicator-attributes\"><a class=\"header-anchor\" href=\"#carousel-indicator-attributes\"></a> Carousel-Indicator Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>指示器索引</td><td>number</td><td></td><td></td></tr></tbody></table><h3 id=\"carousel-indicator-events\"><a class=\"header-anchor\" href=\"#carousel-indicator-events\"></a> Carousel-Indicator Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>指示器click时触发</td><td>目前激活的幻灯片的索引</td></tr><tr><td>hover</td><td>指示器hover时触发</td><td>目前激活的幻灯片的索引</td></tr></tbody></table>", 12);

function carouselvue_type_template_id_76ea18d8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", carouselvue_type_template_id_76ea18d8_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", carouselvue_type_template_id_76ea18d8_hoisted_2, [carouselvue_type_template_id_76ea18d8_hoisted_3, carouselvue_type_template_id_76ea18d8_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [carouselvue_type_template_id_76ea18d8_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [carouselvue_type_template_id_76ea18d8_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_28]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md?vue&type=template&id=76ea18d8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/carousel.md?vue&type=script&lang=ts


/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "默认 Hover 指示器触发", -1);

      var _hoisted_3 = {
        class: "small"
      };
      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Click 指示器触发 ", -1);

      var _hoisted_6 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        var _component_hl_carousel_item = _resolveComponent("hl-carousel-item");

        var _component_hl_carousel = _resolveComponent("hl-carousel");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_hl_carousel, {
          height: "150px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h4", _hoisted_3, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_hl_carousel, {
          trigger: "click",
          height: "150px",
          "indicator-type": "dot"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h4", _hoisted_6, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_carousel_item = _resolveComponent("hl-carousel-item");

        var _component_hl_carousel = _resolveComponent("hl-carousel");

        return _openBlock(), _createBlock(_component_hl_carousel, {
          "indicator-position": "outside"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h4", null, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_carousel_item = _resolveComponent("hl-carousel-item");

        var _component_hl_carousel = _resolveComponent("hl-carousel");

        return _openBlock(), _createBlock(_component_hl_carousel, {
          interval: 5000,
          arrow: "always"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h4", null, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_hl_carousel_item = _resolveComponent("hl-carousel-item");

        var _component_hl_carousel = _resolveComponent("hl-carousel");

        return _openBlock(), _createBlock(_component_hl_carousel, {
          interval: 4000,
          type: "card",
          height: "200px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(6, function (item) {
              return _createVNode(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h4", _hoisted_1, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];
      var _hoisted_1 = {
        class: "medium"
      };

      function render(_ctx, _cache) {
        var _component_hl_carousel_item = _resolveComponent("hl-carousel-item");

        var _component_hl_carousel = _resolveComponent("hl-carousel");

        return _openBlock(), _createBlock(_component_hl_carousel, {
          height: "200px",
          direction: "vertical",
          autoplay: false
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (item) {
              return _createVNode(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h4", _hoisted_1, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _withModifiers = vue_esm_browser_prod["hb" /* withModifiers */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "inside", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "outside", -1);

      var _hoisted_5 = {
        class: "block-vertical"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "right", -1);

      function render(_ctx, _cache) {
        var _component_hl_carousel_item = _resolveComponent("hl-carousel-item");

        var _component_hl_carousel_indicator = _resolveComponent("hl-carousel-indicator");

        var _component_hl_carousel = _resolveComponent("hl-carousel");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_hl_carousel, {
          class: "hl-carousel-indicator-inside",
          height: "150px",
          "indicator-type": "custom",
          trigger: "click",
          autoplay: false,
          onChange: _ctx.change,
          onMouseenter: _cache[1] || (_cache[1] = _withModifiers(function ($event) {
            return _ctx.carouselDisplay = true;
          }, ["stop"])),
          onMouseleave: _cache[2] || (_cache[2] = _withModifiers(function ($event) {
            return _ctx.carouselDisplay = false;
          }, ["stop"])),
          "initial-index": 1
        }, {
          indicator: _withCtx(function () {
            return [_createVNode("div", {
              class: ["indicator-animation", {
                'indicator-animation-active': _ctx.carouselDisplay
              }]
            }, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.imageData, function (item, index) {
              return _openBlock(), _createBlock(_component_hl_carousel_indicator, {
                key: item,
                index: index
              }, {
                default: _withCtx(function () {
                  return [_createVNode("img", {
                    src: item.url
                  }, null, 8, ["src"])];
                }),
                _: 2
              }, 1032, ["index"]);
            }), 128))], 2)];
          }),
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.imageData, function (item) {
              return _openBlock(), _createBlock(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("img", {
                    src: item.url,
                    width: "340",
                    height: "150"
                  }, null, 8, ["src"])];
                }),
                _: 2
              }, 1024);
            }), 128))];
          }),
          _: 1
        }, 8, ["onChange"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_hl_carousel, {
          class: "hl-carousel-indicator-outside",
          height: "120px",
          indicatorType: "custom",
          trigger: "click",
          autoplay: false,
          onChange: _ctx.change,
          indicatorPosition: "outside"
        }, {
          indicator: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.imageData, function (item, index) {
              return _openBlock(), _createBlock(_component_hl_carousel_indicator, {
                key: item,
                index: index
              }, {
                default: _withCtx(function () {
                  return [_createVNode("img", {
                    src: item.url
                  }, null, 8, ["src"])];
                }),
                _: 2
              }, 1032, ["index"]);
            }), 128))];
          }),
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.imageData, function (item) {
              return _openBlock(), _createBlock(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("img", {
                    src: item.url,
                    width: "340",
                    height: "120"
                  }, null, 8, ["src"])];
                }),
                _: 2
              }, 1024);
            }), 128))];
          }),
          _: 1
        }, 8, ["onChange"])]), _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_hl_carousel, {
          class: "hl-carousel-indicator-right",
          height: "200px",
          indicatorType: "custom",
          trigger: "click",
          autoplay: true,
          onChange: _ctx.change,
          direction: "vertical"
        }, {
          indicator: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.imageData, function (item, index) {
              return _openBlock(), _createBlock(_component_hl_carousel_indicator, {
                key: item,
                index: index
              }, {
                default: _withCtx(function () {
                  return [_createVNode("img", {
                    src: item.url
                  }, null, 8, ["src"])];
                }),
                _: 2
              }, 1032, ["index"]);
            }), 128))];
          }),
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.imageData, function (item) {
              return _openBlock(), _createBlock(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("img", {
                    src: item.url
                  }, null, 8, ["src"])];
                }),
                _: 2
              }, 1024);
            }), 128))];
          }),
          _: 1
        }, 8, ["onChange"])])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            imageData: [{
              url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg6.ddove.com%2Fupload%2F20160620%2F130253841615.jpg&refer=http%3A%2F%2Fimg6.ddove.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=fe2adfe3cd3c67dbc5ea1652a98e9cfc'
            }, {
              url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F10%2F192621gvktnkenhheenken.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=758616c811511445b7c63570a47ecbfb'
            }, {
              url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201404%2F12%2F121109atlt9fz05lr05e5q.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=6ce4f8edde1507a463a3df0603accdf8'
            }],
            carouselDisplay: false
          };
        },
        methods: {
          change: function change(current, prev) {//console.log(current,prev)
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];
      var _hoisted_1 = {
        class: "small"
      };

      function render(_ctx, _cache) {
        var _component_hl_carousel_item = _resolveComponent("hl-carousel-item");

        var _component_hl_carousel = _resolveComponent("hl-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hl_carousel, {
          height: "150px",
          autoplay: false,
          trigger: "click",
          "items-number": 4,
          "items-width": 140
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(7, function (item) {
              return _createVNode(_component_hl_carousel_item, {
                key: item
              }, {
                default: _withCtx(function () {
                  return [_createVNode("h4", _hoisted_1, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_76ea18d8_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ })

}]);