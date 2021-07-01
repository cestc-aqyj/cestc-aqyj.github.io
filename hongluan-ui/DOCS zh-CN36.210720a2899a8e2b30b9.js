(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/progress.md?vue&type=template&id=5ae9947d

var progressvue_type_template_id_5ae9947d_hoisted_1 = {
  class: "doc-main-content"
};
var progressvue_type_template_id_5ae9947d_hoisted_2 = {
  class: "doc-content"
};

var progressvue_type_template_id_5ae9947d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Progress 进度条", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "用于展示操作进度，告知用户当前状态和预期。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "percentage"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可，表示进度条对应的百分比，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("strong", null, "必填"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，必须在 0-100。通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来指定进度条文字内容。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-progress :percentage=\"40\" :format=\"format\" class=\"m-b-xxl\"></hl-progress>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: '自定义内容',\n      }\n    },\n    methods: {\n      format(percentage) {\n        return `${percentage}%  Complete`\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jin-du-tiao-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-du-tiao-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 进度条状态")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置进度条当前状态。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"md\">\n  <hl-col span=\"col-lg-6\">\n    <hl-progress :percentage=\"68\" type=\"primary\" :format=\"formatSuccess\"></hl-progress>\n  </hl-col>\n  <hl-col span=\"col-lg-6\">\n    <hl-progress :percentage=\"68\" type=\"success\" :format=\"formatSuccess\"></hl-progress>\n  </hl-col>\n  <hl-col span=\"col-lg-6\">\n    <hl-progress :percentage=\"68\" type=\"warning\" :format=\"formatWarning\"></hl-progress>\n  </hl-col>\n  <hl-col span=\"col-lg-6\">\n    <hl-progress :percentage=\"68\" type=\"danger\" :format=\"formatDanger\"></hl-progress>\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    methods: {\n      formatSuccess(percentage) {\n        return `${percentage}%  success`\n      },\n      formatWarning(percentage) {\n        return `${percentage}%  warning`\n      },\n      formatDanger(percentage) {\n        return `${percentage}%  danger`\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jie-duan-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jie-duan-yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 阶段颜色")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 设置进度条不同阶段的颜色，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可以接受颜色字符串，函数和数组。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-lg-8\">\n    <hl-progress :percentage=\"percentage\" :color=\"customColor\"></hl-progress>\n  </hl-col>\n  <hl-col span=\"col-lg-8\">\n    <hl-progress :percentage=\"percentage\" :color=\"customColorMethod\"></hl-progress>\n  </hl-col>\n  <hl-col span=\"col-lg-8\">\n    <hl-progress :percentage=\"percentage\" :color=\"customColors\"></hl-progress>\n  </hl-col>\n</hl-row>\n\n<hl-group merge indent class=\"m-t-lg\">\n  <hl-button class=\"group-item\" icon=\"minus\" @click=\"decrease\"></hl-button>\n  <hl-button class=\"group-item\" icon=\"plus\" @click=\"increase\"></hl-button>\n</hl-group>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 20,\n        customColor: '#409eff',\n        customColors: [\n          { color: '#f56c6c', percentage: 20 },\n          { color: '#e6a23c', percentage: 40 },\n          { color: '#5cb87a', percentage: 60 },\n          { color: '#1989fa', percentage: 80 },\n          { color: '#6f7ad3', percentage: 100 },\n        ],\n      }\n    },\n    methods: {\n      customColorMethod(percentage) {\n        if (percentage < 30) {\n          return '#909399'\n        } else if (percentage < 70) {\n          return '#e6a23c'\n        } else {\n          return '#67c23a'\n        }\n      },\n      increase() {\n        this.percentage += 10\n        if (this.percentage > 100) {\n          this.percentage = 100\n        }\n      },\n      decrease() {\n        this.percentage -= 10\n        if (this.percentage < 0) {\n          this.percentage = 0\n        }\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tiao-wen-zhuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tiao-wen-zhuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 条纹状")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "striped"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置条纹状, 添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置滚动条纹。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"md\">\n  <hl-col :span=\"12\">\n    <hl-progress :percentage=\"50\" striped :format=\"format\"></hl-progress>\n  </hl-col>\n  <hl-col :span=\"12\">\n    <hl-progress :percentage=\"50\" striped active :format=\"formatActive\"></hl-progress>\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return `${percentage}%  静态条纹`\n      },\n      formatActive(percentage) {\n        return `${percentage}%  滚动条纹`\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "mai-chong-zhuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mai-chong-zhuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 脉冲状")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indicating"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置静态脉冲状, 添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置脉冲状。")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"md\">\n  <hl-col :span=\"12\">\n    <hl-progress :percentage=\"50\" indicating :format=\"format\"></hl-progress>\n  </hl-col>\n  <hl-col :span=\"12\">\n    <hl-progress :percentage=\"50\" indicating active :format=\"formatActive\"></hl-progress>\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return `${percentage}%  静态`\n      },\n      formatActive(percentage) {\n        return `${percentage}%  脉冲`\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dui-die-zhuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dui-die-zhuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 堆叠状")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加属性"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("值为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "stack"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("时变为堆叠状，用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "stack"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 传参。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可选值："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "percentage"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "striped"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indicating"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 等属性")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-progress showAs=\"stack\" :stack=\"list\"></hl-progress>\n<br />\n<hl-progress showAs=\"stack\" :stack=\"list\" show-text :stroke-width=\"30\"></hl-progress>\n<script>\n  export default {\n    data() {\n      return {\n        list: [\n          {\n            percentage: 35,\n            striped: true,\n            active: false,\n          },\n          {\n            percentage: 20,\n            type: 'warning',\n            indicating: true,\n            active: true,\n          },\n          {\n            percentage: 20,\n            type: 'danger',\n            format: p => `自定义内容${p}%`,\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "xian-tiao-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xian-tiao-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 线条样式")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加属性"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "line"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("成为线条样式，添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "text"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性自定义左上角内容")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-progress :percentage=\"75\" :text=\"text\" line></hl-progress>\n<br />\n<hl-progress :percentage=\"75\" :stroke-width=\"1\" line hideLabel></hl-progress>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: '正在下载 hongluan-ui_v_1.2.1.rar',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "huan-xing-jin-du-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#huan-xing-jin-du-tiao"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 环形进度条")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Progress 组件可通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来指定使用环形进度条，在环形进度条中，还可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来设置其大小。")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group indent=\"var(--lg)\">\n  <hl-progress showAs=\"circle\" type=\"primary\" :percentage=\"0\"></hl-progress>\n  <hl-progress showAs=\"circle\" type=\"danger\" :percentage=\"25\"></hl-progress>\n  <hl-progress showAs=\"circle\" type=\"warning\" :percentage=\"100\"></hl-progress>\n  <hl-progress showAs=\"circle\" type=\"success\" :stroke-width=\"6\" :percentage=\"70\">\n  <template #=\"{percentage}\">\n    <div class=\"progress-content\">\n      <h5>测试：{{ percentage }}</h5>\n    </div>\n  </template>\n  </hl-progress>\n  <hl-progress showAs=\"circle\" type=\"info\" :stroke-width=\"6\" :percentage=\"50\" text=\"Label\"></hl-progress>\n</hl-group>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "yi-biao-pan-xing-jin-du-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yi-biao-pan-xing-jin-du-tiao"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 仪表盘形进度条")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来指定使用仪表盘形进度条。")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n    <hl-col span=\"col-md-12\">\n        <hl-group indent=\"1rem\" class=\"middle\">\n            <hl-button icon=\"Minus\" @click=\"decrease\"></hl-button>\n            <hl-progress showAs=\"dashboard\" :percentage=\"percentage\" :color=\"colors\"></hl-progress>\n            <hl-button icon=\"Plus\" @click=\"increase\"></hl-button>\n        </hl-group>\n    </hl-col>\n    <hl-col span=\"col-md-12\">\n      <hl-progress showAs=\"dashboard\" :percentage=\"percentage2\" :color=\"colors\"></hl-progress>\n    </hl-col>\n\n</hl-row>\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 10,\n        percentage2: 0,\n        colors: [\n          {color: '#f56c6c', percentage: 20},\n          {color: '#e6a23c', percentage: 40},\n          {color: '#5cb87a', percentage: 60},\n          {color: '#1989fa', percentage: 80},\n          {color: '#6f7ad3', percentage: 100}\n        ]\n      };\n    },\n    methods: {\n      increase() {\n        this.percentage += 10;\n        if (this.percentage > 100) {\n          this.percentage = 100;\n        }\n      },\n      decrease() {\n        this.percentage -= 10;\n        if (this.percentage < 0) {\n          this.percentage = 0;\n        }\n      }\n    },\n    mounted() {\n      setInterval(() => {\n        this.percentage2 = (this.percentage2 % 100) + 10\n      }, 500)\n    }\n  }\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-nei-rong"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义内容")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "通过默认插槽添加自定义内容。", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-progress :percentage=\"40\" text=\"自定义内容\" class=\"m-b-xxl\">\n  <span>自定义内容</span>\n</hl-progress>\n\n<hl-progress :percentage=\"40\" text=\"自定义内容\" class=\"m-b-xxl\">\n  <template #=\"{percentage, text}\">\n    <span class=\"progress-label\">{{ text }}</span>\n    <span class=\"progress-percentage\">{{ percentage }}%</span>\n  </template>\n</hl-progress>\n\n<hl-progress showAs=\"stack\" :stack=\"list\" class=\"m-b-xxl\">\n  <template #=\"{percentage}\">\n    <strong>进度：{{percentage}}%</strong>\n  </template>\n</hl-progress>\n\n<script>\n  export default {\n    data() {\n      return {\n        list: [\n          {\n            percentage: 35,\n          },\n          {\n            percentage: 20,\n            status: 'warning',\n          },\n          {\n            percentage: 20,\n            status: 'danger',\n          },\n        ],\n        text: '自定义内容',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>percentage</td><td>百分比</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>show-as</td><td>进度条展现形式</td><td>string</td><td>stack / circle / dashboard</td><td>—</td></tr><tr><td>stroke-width</td><td>进度条的高度，单位 px</td><td>number/string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>进度条当前状态</td><td>string</td><td>primary/success/warning/danger</td><td>—</td></tr><tr><td>color</td><td>进度条背景色（会覆盖 status 状态颜色）(showAs 为 stack 时不可用)</td><td>string/function/array</td><td>—</td><td></td></tr><tr><td>show-text</td><td>是否显示进度条文字内容</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>format</td><td>指定进度条文字内容</td><td>function(percentage)</td><td>—</td><td>—</td></tr><tr><td>text</td><td>指定进度条描述文字，主要用在line=true时，显示左侧文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>stack</td><td>指定进度条集合（只在 showAs 为 stack 时可用）</td><td>array[{percentage, type, striped, indicating, active, format}]</td><td>—</td><td>—</td></tr><tr><td>line</td><td>是否为line样式</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\"></a> Slot</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容，参数默认为 { percentage, text }，showAs=stack 时{percentage, type, striped, indicating, active, format}</td></tr></tbody></table>", 4);

function progressvue_type_template_id_5ae9947d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_hl_demo7 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo7");

  var _component_hl_demo8 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo8");

  var _component_hl_demo9 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo9");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", progressvue_type_template_id_5ae9947d_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", progressvue_type_template_id_5ae9947d_hoisted_2, [progressvue_type_template_id_5ae9947d_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_24, _hoisted_25, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_36]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/progress.md?vue&type=template&id=5ae9947d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/progress.md?vue&type=script&lang=ts


/* harmony default export */ var progressvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        return _openBlock(), _createBlock(_component_hl_progress, {
          percentage: 40,
          format: _ctx.format,
          class: "m-b-xxl"
        }, null, 8, ["format"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            text: '自定义内容'
          };
        },
        methods: {
          format: function format(percentage) {
            return percentage + "%  Complete";
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-6"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 68,
                  type: "primary",
                  format: _ctx.formatSuccess
                }, null, 8, ["format"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-6"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 68,
                  type: "success",
                  format: _ctx.formatSuccess
                }, null, 8, ["format"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-6"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 68,
                  type: "warning",
                  format: _ctx.formatWarning
                }, null, 8, ["format"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-6"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 68,
                  type: "danger",
                  format: _ctx.formatDanger
                }, null, 8, ["format"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        methods: {
          formatSuccess: function formatSuccess(percentage) {
            return percentage + "%  success";
          },
          formatWarning: function formatWarning(percentage) {
            return percentage + "%  warning";
          },
          formatDanger: function formatDanger(percentage) {
            return percentage + "%  danger";
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-8"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: _ctx.percentage,
                  color: _ctx.customColor
                }, null, 8, ["percentage", "color"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-8"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: _ctx.percentage,
                  color: _ctx.customColorMethod
                }, null, 8, ["percentage", "color"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-8"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: _ctx.percentage,
                  color: _ctx.customColors
                }, null, 8, ["percentage", "color"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_group, {
          merge: "",
          indent: "",
          class: "m-t-lg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "group-item",
              icon: "minus",
              onClick: _ctx.decrease
            }, null, 8, ["onClick"]), _createVNode(_component_hl_button, {
              class: "group-item",
              icon: "plus",
              onClick: _ctx.increase
            }, null, 8, ["onClick"])];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            percentage: 20,
            customColor: '#409eff',
            customColors: [{
              color: '#f56c6c',
              percentage: 20
            }, {
              color: '#e6a23c',
              percentage: 40
            }, {
              color: '#5cb87a',
              percentage: 60
            }, {
              color: '#1989fa',
              percentage: 80
            }, {
              color: '#6f7ad3',
              percentage: 100
            }]
          };
        },
        methods: {
          customColorMethod: function customColorMethod(percentage) {
            if (percentage < 30) {
              return '#909399';
            } else if (percentage < 70) {
              return '#e6a23c';
            } else {
              return '#67c23a';
            }
          },
          increase: function increase() {
            this.percentage += 10;

            if (this.percentage > 100) {
              this.percentage = 100;
            }
          },
          decrease: function decrease() {
            this.percentage -= 10;

            if (this.percentage < 0) {
              this.percentage = 0;
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 50,
                  striped: "",
                  format: _ctx.format
                }, null, 8, ["format"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 50,
                  striped: "",
                  active: "",
                  format: _ctx.formatActive
                }, null, 8, ["format"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        methods: {
          format: function format(percentage) {
            return percentage + "%  \u9759\u6001\u6761\u7EB9";
          },
          formatActive: function formatActive(percentage) {
            return percentage + "%  \u6EDA\u52A8\u6761\u7EB9";
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 50,
                  indicating: "",
                  format: _ctx.format
                }, null, 8, ["format"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  percentage: 50,
                  indicating: "",
                  active: "",
                  format: _ctx.formatActive
                }, null, 8, ["format"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        methods: {
          format: function format(percentage) {
            return percentage + "%  \u9759\u6001";
          },
          formatActive: function formatActive(percentage) {
            return percentage + "%  \u8109\u51B2";
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("br", null, null, -1);

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_progress, {
          showAs: "stack",
          stack: _ctx.list
        }, null, 8, ["stack"]), _hoisted_1, _createVNode(_component_hl_progress, {
          showAs: "stack",
          stack: _ctx.list,
          "show-text": "",
          "stroke-width": 30
        }, null, 8, ["stack"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            list: [{
              percentage: 35,
              striped: true,
              active: false
            }, {
              percentage: 20,
              type: 'warning',
              indicating: true,
              active: true
            }, {
              percentage: 20,
              type: 'danger',
              format: function format(p) {
                return "\u81EA\u5B9A\u4E49\u5185\u5BB9" + p + "%";
              }
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("br", null, null, -1);

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_progress, {
          percentage: 75,
          text: _ctx.text,
          line: ""
        }, null, 8, ["text"]), _hoisted_1, _createVNode(_component_hl_progress, {
          percentage: 75,
          "stroke-width": 1,
          line: "",
          hideLabel: ""
        })], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            text: '正在下载 hongluan-ui_v_1.2.1.rar'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "progress-content"
      };

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_component_hl_group, {
          indent: "var(--lg)"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_progress, {
              showAs: "circle",
              type: "primary",
              percentage: 0
            }), _createVNode(_component_hl_progress, {
              showAs: "circle",
              type: "danger",
              percentage: 25
            }), _createVNode(_component_hl_progress, {
              showAs: "circle",
              type: "warning",
              percentage: 100
            }), _createVNode(_component_hl_progress, {
              showAs: "circle",
              type: "success",
              "stroke-width": 6,
              percentage: 70
            }, {
              default: _withCtx(function (_ref) {
                var percentage = _ref.percentage;
                return [_createVNode("div", _hoisted_1, [_createVNode("h5", null, "测试：" + _toDisplayString(percentage), 1)])];
              }),
              _: 1
            }), _createVNode(_component_hl_progress, {
              showAs: "circle",
              type: "info",
              "stroke-width": 6,
              percentage: 50,
              text: "Label"
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_progress = _resolveComponent("hl-progress");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  indent: "1rem",
                  class: "middle"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      icon: "Minus",
                      onClick: _ctx.decrease
                    }, null, 8, ["onClick"]), _createVNode(_component_hl_progress, {
                      showAs: "dashboard",
                      percentage: _ctx.percentage,
                      color: _ctx.colors
                    }, null, 8, ["percentage", "color"]), _createVNode(_component_hl_button, {
                      icon: "Plus",
                      onClick: _ctx.increase
                    }, null, 8, ["onClick"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_progress, {
                  showAs: "dashboard",
                  percentage: _ctx.percentage2,
                  color: _ctx.colors
                }, null, 8, ["percentage", "color"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            percentage: 10,
            percentage2: 0,
            colors: [{
              color: '#f56c6c',
              percentage: 20
            }, {
              color: '#e6a23c',
              percentage: 40
            }, {
              color: '#5cb87a',
              percentage: 60
            }, {
              color: '#1989fa',
              percentage: 80
            }, {
              color: '#6f7ad3',
              percentage: 100
            }]
          };
        },
        methods: {
          increase: function increase() {
            this.percentage += 10;

            if (this.percentage > 100) {
              this.percentage = 100;
            }
          },
          decrease: function decrease() {
            this.percentage -= 10;

            if (this.percentage < 0) {
              this.percentage = 0;
            }
          }
        },
        mounted: function mounted() {
          var _this = this;

          setInterval(function () {
            _this.percentage2 = _this.percentage2 % 100 + 10;
          }, 500);
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo9": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "自定义内容", -1);

      var _hoisted_2 = {
        class: "progress-label"
      };
      var _hoisted_3 = {
        class: "progress-percentage"
      };

      function render(_ctx, _cache) {
        var _component_hl_progress = _resolveComponent("hl-progress");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_progress, {
          percentage: 40,
          text: "自定义内容",
          class: "m-b-xxl"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_progress, {
          percentage: 40,
          text: "自定义内容",
          class: "m-b-xxl"
        }, {
          default: _withCtx(function (_ref2) {
            var percentage = _ref2.percentage,
                text = _ref2.text;
            return [_createVNode("span", _hoisted_2, _toDisplayString(text), 1), _createVNode("span", _hoisted_3, _toDisplayString(percentage) + "%", 1)];
          }),
          _: 1
        }), _createVNode(_component_hl_progress, {
          showAs: "stack",
          stack: _ctx.list,
          class: "m-b-xxl"
        }, {
          default: _withCtx(function (_ref3) {
            var percentage = _ref3.percentage;
            return [_createVNode("strong", null, "进度：" + _toDisplayString(percentage) + "%", 1)];
          }),
          _: 1
        }, 8, ["stack"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            list: [{
              percentage: 35
            }, {
              percentage: 20,
              status: 'warning'
            }, {
              percentage: 20,
              status: 'danger'
            }],
            text: '自定义内容'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/progress.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/progress.md



progressvue_type_script_lang_ts.render = progressvue_type_template_id_5ae9947d_render

/* harmony default export */ var progress = __webpack_exports__["default"] = (progressvue_type_script_lang_ts);

/***/ })

}]);