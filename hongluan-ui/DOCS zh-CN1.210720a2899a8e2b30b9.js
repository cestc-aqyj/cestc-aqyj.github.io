(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/autocomplete.md?vue&type=template&id=5280189a

var autocompletevue_type_template_id_5280189a_hoisted_1 = {
  class: "doc-main-content"
};
var autocompletevue_type_template_id_5280189a_hoisted_2 = {
  class: "doc-content"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Autocomplete 输入建议", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("autocomplete 是一个带输入建议的输入框组件，它拥有同"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Input"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件一样的属性。")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "fetch-suggestions"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\">\n    <p>激活即列出输入建议</p>\n    <hl-autocomplete v-model=\"state1\" prefix-icon=\"Point\" :fetch-suggestions=\"querySearch\" placeholder=\"请输入内容\" @select=\"handleSelect\" block fill clearable></hl-autocomplete>\n  </hl-col>\n\n  <hl-col span=\"col-md-12\">\n    <p>输入后匹配输入建议</p>\n    <hl-autocomplete class=\"inline-input\" v-model=\"state2\" :fetch-suggestions=\"querySearch\" placeholder=\"请输入内容\" :trigger-on-focus=\"false\" @select=\"handleSelect\" block></hl-autocomplete>\n  </hl-col>\n</hl-row>\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\n\nexport default defineComponent({\n  setup() {\n    const restaurants = ref([]);\n    const querySearch = (queryString, cb) => {\n      var results = queryString\n        ? restaurants.value.filter(createFilter(queryString))\n        : restaurants.value;\n      // 调用 callback 返回建议列表的数据\n      cb(results);\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const loadAll = () => {\n      return [\n        { value: \"三全鲜食（北新泾店）\", address: \"长宁区新渔路144号\" },\n        {\n          value: \"Hot honey 首尔炸鸡（仙霞路）\",\n          address: \"上海市长宁区淞虹路661号\",\n        },\n        {\n          value: \"新旺角茶餐厅\",\n          address: \"上海市普陀区真北路988号创邑金沙谷6号楼113\",\n        },\n        { value: \"泷千家(天山西路店)\", address: \"天山西路438号\" },\n        {\n          value: \"胖仙女纸杯蛋糕（上海凌空店）\",\n          address: \"上海市长宁区金钟路968号1幢18号楼一层商铺18-101\",\n        },\n        { value: \"贡茶\", address: \"上海市长宁区金钟路633号\" },\n        {\n          value: \"豪大大香鸡排超级奶爸\",\n          address: \"上海市嘉定区曹安公路曹安路1685号\",\n        },\n        {\n          value: \"茶芝兰（奶茶，手抓饼）\",\n          address: \"上海市普陀区同普路1435号\",\n        },\n        { value: \"十二泷町\", address: \"上海市北翟路1444弄81号B幢-107\" },\n        { value: \"星移浓缩咖啡\", address: \"上海市嘉定区新郁路817号\" },\n        { value: \"阿姨奶茶/豪大大\", address: \"嘉定区曹安路1611号\" },\n        { value: \"新麦甜四季甜品炸鸡\", address: \"嘉定区曹安公路2383弄55号\" },\n        {\n          value: \"Monica摩托主题咖啡店\",\n          address: \"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F\",\n        },\n        {\n          value: \"浮生若茶（凌空soho店）\",\n          address: \"上海长宁区金钟路968号9号楼地下一层\",\n        },\n        { value: \"NONO JUICE  鲜榨果汁\", address: \"上海市长宁区天山西路119号\" },\n        { value: \"CoCo都可(北新泾店）\", address: \"上海市长宁区仙霞西路\" },\n        {\n          value: \"快乐柠檬（神州智慧店）\",\n          address: \"上海市长宁区天山西路567号1层R117号店铺\",\n        },\n        {\n          value: \"Merci Paul cafe\",\n          address: \"上海市普陀区光复西路丹巴路28弄6号楼819\",\n        },\n        {\n          value: \"猫山王（西郊百联店）\",\n          address: \"上海市长宁区仙霞西路88号第一层G05-F01-1-306\",\n        },\n        { value: \"枪会山\", address: \"上海市普陀区棕榈路\" },\n        { value: \"纵食\", address: \"元丰天山花园(东门) 双流路267号\" },\n        { value: \"钱记\", address: \"上海市长宁区天山西路\" },\n        { value: \"壹杯加\", address: \"上海市长宁区通协路\" },\n        {\n          value: \"唦哇嘀咖\",\n          address: \"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元\",\n        },\n        { value: \"爱茜茜里(西郊百联)\", address: \"长宁区仙霞西路88号1305室\" },\n        {\n          value: \"爱茜茜里(近铁广场)\",\n          address:\n            \"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺\",\n        },\n        {\n          value: \"鲜果榨汁（金沙江路和美广店）\",\n          address: \"普陀区金沙江路2239号金沙和美广场B1-10-6\",\n        },\n        {\n          value: \"开心丽果（缤谷店）\",\n          address: \"上海市长宁区威宁路天山路341号\",\n        },\n        { value: \"超级鸡车（丰庄路店）\", address: \"上海市嘉定区丰庄路240号\" },\n        { value: \"妙生活果园（北新泾店）\", address: \"长宁区新渔路144号\" },\n        { value: \"香宜度麻辣香锅\", address: \"长宁区淞虹路148号\" },\n        {\n          value: \"凡仔汉堡（老真北路店）\",\n          address: \"上海市普陀区老真北路160号\",\n        },\n        { value: \"港式小铺\", address: \"上海市长宁区金钟路968号15楼15-105室\" },\n        { value: \"蜀香源麻辣香锅（剑河路店）\", address: \"剑河路443-1\" },\n        { value: \"北京饺子馆\", address: \"长宁区北新泾街道天山西路490-1号\" },\n        {\n          value: \"饭典*新简餐（凌空SOHO店）\",\n          address: \"上海市长宁区金钟路968号9号楼地下一层9-83室\",\n        },\n        {\n          value: \"焦耳·川式快餐（金钟路店）\",\n          address: \"上海市金钟路633号地下一层甲部\",\n        },\n        { value: \"动力鸡车\", address: \"长宁区仙霞西路299弄3号101B\" },\n        { value: \"浏阳蒸菜\", address: \"天山西路430号\" },\n        { value: \"四海游龙（天山西路店）\", address: \"上海市长宁区天山西路\" },\n        {\n          value: \"樱花食堂（凌空店）\",\n          address: \"上海市长宁区金钟路968号15楼15-105室\",\n        },\n        { value: \"壹分米客家传统调制米粉(天山店)\", address: \"天山西路428号\" },\n        {\n          value: \"福荣祥烧腊（平溪路店）\",\n          address: \"上海市长宁区协和路福泉路255弄57-73号\",\n        },\n        {\n          value: \"速记黄焖鸡米饭\",\n          address: \"上海市长宁区北新泾街道金钟路180号1层01号摊位\",\n        },\n        { value: \"红辣椒麻辣烫\", address: \"上海市长宁区天山西路492号\" },\n        {\n          value: \"(小杨生煎)西郊百联餐厅\",\n          address: \"长宁区仙霞西路88号百联2楼\",\n        },\n        { value: \"阳阳麻辣烫\", address: \"天山西路389号\" },\n        {\n          value: \"南拳妈妈龙虾盖浇饭\",\n          address: \"普陀区金沙江路1699号鑫乐惠美食广场A13\",\n        },\n      ];\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n    onMounted(() => {\n      restaurants.value = loadAll();\n    });\n    return {\n      restaurants,\n      state1: ref(''),\n      state2: ref(''),\n      querySearch,\n      createFilter,\n      loadAll,\n      handleSelect,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-mo-ban"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-mo-ban"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义模板")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "#default"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("自定义输入建议的模板。该 scope 的参数为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "item"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，表示当前输入建议对象。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-autocomplete\n  popper-class=\"my-autocomplete\"\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearch\"\n  placeholder=\"请输入内容\"\n  @select=\"handleSelect\"\n>\n  <template #suffix>\n    <i class=\"hl-icon-edit hl-input__icon\" @click=\"handleIconClick\"> </i>\n  </template>\n  <template #default=\"{ item }\">\n    <div class=\"name\">{{ item.value }}</div>\n    <span class=\"addr\">{{ item.address }}</span>\n  </template>\n</hl-autocomplete>\n\n<style>\n.my-autocomplete li {\n  line-height: normal;\n  padding: 7px;\n}\n.my-autocomplete li .name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.my-autocomplete li .addr {\n  font-size: 12px;\n  color: #b4b4b4;\n}\n.my-autocomplete li .highlighted .addr {\n  color: #ddd;\n}\n</style>\n\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\n\nexport default defineComponent({\n  setup() {\n    const restaurants = ref([]);\n\n    const querySearch = (queryString, cb) => {\n      var results = queryString\n        ? restaurants.value.filter(createFilter(queryString))\n        : restaurants.value;\n      // 调用 callback 返回建议列表的数据\n      cb(results);\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const loadAll = () => {\n      return [\n        { value: \"三全鲜食（北新泾店）\", address: \"长宁区新渔路144号\" },\n        {\n          value: \"Hot honey 首尔炸鸡（仙霞路）\",\n          address: \"上海市长宁区淞虹路661号\",\n        },\n        {\n          value: \"新旺角茶餐厅\",\n          address: \"上海市普陀区真北路988号创邑金沙谷6号楼113\",\n        },\n        { value: \"泷千家(天山西路店)\", address: \"天山西路438号\" },\n        {\n          value: \"胖仙女纸杯蛋糕（上海凌空店）\",\n          address: \"上海市长宁区金钟路968号1幢18号楼一层商铺18-101\",\n        },\n        { value: \"贡茶\", address: \"上海市长宁区金钟路633号\" },\n        {\n          value: \"豪大大香鸡排超级奶爸\",\n          address: \"上海市嘉定区曹安公路曹安路1685号\",\n        },\n        {\n          value: \"茶芝兰（奶茶，手抓饼）\",\n          address: \"上海市普陀区同普路1435号\",\n        },\n        { value: \"十二泷町\", address: \"上海市北翟路1444弄81号B幢-107\" },\n        { value: \"星移浓缩咖啡\", address: \"上海市嘉定区新郁路817号\" },\n        { value: \"阿姨奶茶/豪大大\", address: \"嘉定区曹安路1611号\" },\n        { value: \"新麦甜四季甜品炸鸡\", address: \"嘉定区曹安公路2383弄55号\" },\n        {\n          value: \"Monica摩托主题咖啡店\",\n          address: \"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F\",\n        },\n        {\n          value: \"浮生若茶（凌空soho店）\",\n          address: \"上海长宁区金钟路968号9号楼地下一层\",\n        },\n        { value: \"NONO JUICE  鲜榨果汁\", address: \"上海市长宁区天山西路119号\" },\n        { value: \"CoCo都可(北新泾店）\", address: \"上海市长宁区仙霞西路\" },\n        {\n          value: \"快乐柠檬（神州智慧店）\",\n          address: \"上海市长宁区天山西路567号1层R117号店铺\",\n        },\n        {\n          value: \"Merci Paul cafe\",\n          address: \"上海市普陀区光复西路丹巴路28弄6号楼819\",\n        },\n        {\n          value: \"猫山王（西郊百联店）\",\n          address: \"上海市长宁区仙霞西路88号第一层G05-F01-1-306\",\n        },\n        { value: \"枪会山\", address: \"上海市普陀区棕榈路\" },\n        { value: \"纵食\", address: \"元丰天山花园(东门) 双流路267号\" },\n        { value: \"钱记\", address: \"上海市长宁区天山西路\" },\n        { value: \"壹杯加\", address: \"上海市长宁区通协路\" },\n        {\n          value: \"唦哇嘀咖\",\n          address: \"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元\",\n        },\n        { value: \"爱茜茜里(西郊百联)\", address: \"长宁区仙霞西路88号1305室\" },\n        {\n          value: \"爱茜茜里(近铁广场)\",\n          address:\n            \"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺\",\n        },\n        {\n          value: \"鲜果榨汁（金沙江路和美广店）\",\n          address: \"普陀区金沙江路2239号金沙和美广场B1-10-6\",\n        },\n        {\n          value: \"开心丽果（缤谷店）\",\n          address: \"上海市长宁区威宁路天山路341号\",\n        },\n        { value: \"超级鸡车（丰庄路店）\", address: \"上海市嘉定区丰庄路240号\" },\n        { value: \"妙生活果园（北新泾店）\", address: \"长宁区新渔路144号\" },\n        { value: \"香宜度麻辣香锅\", address: \"长宁区淞虹路148号\" },\n        {\n          value: \"凡仔汉堡（老真北路店）\",\n          address: \"上海市普陀区老真北路160号\",\n        },\n        { value: \"港式小铺\", address: \"上海市长宁区金钟路968号15楼15-105室\" },\n        { value: \"蜀香源麻辣香锅（剑河路店）\", address: \"剑河路443-1\" },\n        { value: \"北京饺子馆\", address: \"长宁区北新泾街道天山西路490-1号\" },\n        {\n          value: \"饭典*新简餐（凌空SOHO店）\",\n          address: \"上海市长宁区金钟路968号9号楼地下一层9-83室\",\n        },\n        {\n          value: \"焦耳·川式快餐（金钟路店）\",\n          address: \"上海市金钟路633号地下一层甲部\",\n        },\n        { value: \"动力鸡车\", address: \"长宁区仙霞西路299弄3号101B\" },\n        { value: \"浏阳蒸菜\", address: \"天山西路430号\" },\n        { value: \"四海游龙（天山西路店）\", address: \"上海市长宁区天山西路\" },\n        {\n          value: \"樱花食堂（凌空店）\",\n          address: \"上海市长宁区金钟路968号15楼15-105室\",\n        },\n        { value: \"壹分米客家传统调制米粉(天山店)\", address: \"天山西路428号\" },\n        {\n          value: \"福荣祥烧腊（平溪路店）\",\n          address: \"上海市长宁区协和路福泉路255弄57-73号\",\n        },\n        {\n          value: \"速记黄焖鸡米饭\",\n          address: \"上海市长宁区北新泾街道金钟路180号1层01号摊位\",\n        },\n        { value: \"红辣椒麻辣烫\", address: \"上海市长宁区天山西路492号\" },\n        {\n          value: \"(小杨生煎)西郊百联餐厅\",\n          address: \"长宁区仙霞西路88号百联2楼\",\n        },\n        { value: \"阳阳麻辣烫\", address: \"天山西路389号\" },\n        {\n          value: \"南拳妈妈龙虾盖浇饭\",\n          address: \"普陀区金沙江路1699号鑫乐惠美食广场A13\",\n        },\n      ];\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n\n    const handleIconClick = (ev) => {\n      console.log(ev);\n    };\n\n    onMounted(() => {\n      restaurants.value = loadAll();\n    });\n\n    return {\n      restaurants,\n      state: ref(''),\n      querySearch,\n      createFilter,\n      loadAll,\n      handleSelect,\n      handleIconClick,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yuan-cheng-sou-suo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yuan-cheng-sou-suo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 远程搜索")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "从服务端搜索数据", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-autocomplete\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearchAsync\"\n  placeholder=\"请输入内容\"\n  @select=\"handleSelect\"\n></hl-autocomplete>\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\n\nexport default defineComponent({\n  setup() {\n    const restaurants = ref([]);\n    const loadAll = () => {\n      return [\n        { \n            value: \"三全鲜食（北新泾店）\", \n            address: \"长宁区新渔路144号\" \n        },\n        {\n            value: \"Hot honey 首尔炸鸡（仙霞路）\",\n            address: \"上海市长宁区淞虹路661号\",\n        },\n        {\n            value: \"新旺角茶餐厅\",\n            address: \"上海市普陀区真北路988号创邑金沙谷6号楼113\",\n        },\n        { value: \"泷千家(天山西路店)\", address: \"天山西路438号\" },\n        {\n          value: \"胖仙女纸杯蛋糕（上海凌空店）\",\n          address: \"上海市长宁区金钟路968号1幢18号楼一层商铺18-101\",\n        },\n        { value: \"贡茶\", address: \"上海市长宁区金钟路633号\" },\n        {\n          value: \"豪大大香鸡排超级奶爸\",\n          address: \"上海市嘉定区曹安公路曹安路1685号\",\n        },\n        {\n          value: \"茶芝兰（奶茶，手抓饼）\",\n          address: \"上海市普陀区同普路1435号\",\n        },\n        { value: \"十二泷町\", address: \"上海市北翟路1444弄81号B幢-107\" },\n        { value: \"星移浓缩咖啡\", address: \"上海市嘉定区新郁路817号\" },\n        { value: \"阿姨奶茶/豪大大\", address: \"嘉定区曹安路1611号\" },\n        { value: \"新麦甜四季甜品炸鸡\", address: \"嘉定区曹安公路2383弄55号\" },\n      ];\n    };\n\n    let timeout;\n    const querySearchAsync = (queryString, cb) => {\n      var results = queryString\n        ? restaurants.value.filter(createFilter(queryString))\n        : restaurants.value;\n\n      clearTimeout(timeout);\n      timeout = setTimeout(() => {\n        cb(results);\n      }, 110000);\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n    onMounted(() => {\n      restaurants.value = loadAll();\n    });\n    return {\n      restaurants,\n      state: ref(''),\n      querySearchAsync,\n      createFilter,\n      loadAll,\n      handleSelect,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>输入建议对象中用于显示的键名</td><td>string</td><td>—</td><td>value</td></tr><tr><td>value</td><td>必填值，输入绑定值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>获取输入建议的去抖延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td>top / top-start / top-end / bottom / bottom-start / bottom-end</td><td>bottom-start</td></tr><tr><td>fetch-suggestions</td><td>返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它</td><td>Function(queryString, callback)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>Autocomplete 下拉列表的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>trigger-on-focus</td><td>是否在输入框 focus 时显示建议列表</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>select-when-unmatched</td><td>在输入没有任何匹配建议的情况下，按下回车是否触发 <code>select</code> 事件</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label</td><td>输入框关联的label文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>输入框头部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>输入框尾部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-loading</td><td>是否隐藏远程加载时的加载图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>highlight-first-item</td><td>是否默认突出显示远程搜索建议中的第一项</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\"></a> Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容</td></tr><tr><td>suffix</td><td>输入框尾部内容</td></tr></tbody></table><h3 id=\"scoped-slot\"><a class=\"header-anchor\" href=\"#scoped-slot\"></a> Scoped Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>自定义输入建议，参数为 { item }</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击选中建议项时触发</td><td>选中建议项</td></tr><tr><td>change</td><td>在 Input 值改变时触发</td><td>(value: string | number)</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr></tbody></table>", 10);

function autocompletevue_type_template_id_5280189a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", autocompletevue_type_template_id_5280189a_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", autocompletevue_type_template_id_5280189a_hoisted_2, [_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/autocomplete.md?vue&type=template&id=5280189a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/autocomplete.md?vue&type=script&lang=ts


/* harmony default export */ var autocompletevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "激活即列出输入建议", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "输入后匹配输入建议", -1);

      function render(_ctx, _cache) {
        var _component_hl_autocomplete = _resolveComponent("hl-autocomplete");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_autocomplete, {
                  modelValue: _ctx.state1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.state1 = $event;
                  }),
                  "prefix-icon": "Point",
                  "fetch-suggestions": _ctx.querySearch,
                  placeholder: "请输入内容",
                  onSelect: _ctx.handleSelect,
                  block: "",
                  fill: "",
                  clearable: ""
                }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_autocomplete, {
                  class: "inline-input",
                  modelValue: _ctx.state2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.state2 = $event;
                  }),
                  "fetch-suggestions": _ctx.querySearch,
                  placeholder: "请输入内容",
                  "trigger-on-focus": false,
                  onSelect: _ctx.handleSelect,
                  block: ""
                }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */],
          onMounted = vue_esm_browser_prod["D" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var restaurants = ref([]);

          var querySearch = function querySearch(queryString, cb) {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value; // 调用 callback 返回建议列表的数据

            cb(results);
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var loadAll = function loadAll() {
            return [{
              value: "三全鲜食（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "Hot honey 首尔炸鸡（仙霞路）",
              address: "上海市长宁区淞虹路661号"
            }, {
              value: "新旺角茶餐厅",
              address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
            }, {
              value: "泷千家(天山西路店)",
              address: "天山西路438号"
            }, {
              value: "胖仙女纸杯蛋糕（上海凌空店）",
              address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
            }, {
              value: "贡茶",
              address: "上海市长宁区金钟路633号"
            }, {
              value: "豪大大香鸡排超级奶爸",
              address: "上海市嘉定区曹安公路曹安路1685号"
            }, {
              value: "茶芝兰（奶茶，手抓饼）",
              address: "上海市普陀区同普路1435号"
            }, {
              value: "十二泷町",
              address: "上海市北翟路1444弄81号B幢-107"
            }, {
              value: "星移浓缩咖啡",
              address: "上海市嘉定区新郁路817号"
            }, {
              value: "阿姨奶茶/豪大大",
              address: "嘉定区曹安路1611号"
            }, {
              value: "新麦甜四季甜品炸鸡",
              address: "嘉定区曹安公路2383弄55号"
            }, {
              value: "Monica摩托主题咖啡店",
              address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
            }, {
              value: "浮生若茶（凌空soho店）",
              address: "上海长宁区金钟路968号9号楼地下一层"
            }, {
              value: "NONO JUICE  鲜榨果汁",
              address: "上海市长宁区天山西路119号"
            }, {
              value: "CoCo都可(北新泾店）",
              address: "上海市长宁区仙霞西路"
            }, {
              value: "快乐柠檬（神州智慧店）",
              address: "上海市长宁区天山西路567号1层R117号店铺"
            }, {
              value: "Merci Paul cafe",
              address: "上海市普陀区光复西路丹巴路28弄6号楼819"
            }, {
              value: "猫山王（西郊百联店）",
              address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
            }, {
              value: "枪会山",
              address: "上海市普陀区棕榈路"
            }, {
              value: "纵食",
              address: "元丰天山花园(东门) 双流路267号"
            }, {
              value: "钱记",
              address: "上海市长宁区天山西路"
            }, {
              value: "壹杯加",
              address: "上海市长宁区通协路"
            }, {
              value: "唦哇嘀咖",
              address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
            }, {
              value: "爱茜茜里(西郊百联)",
              address: "长宁区仙霞西路88号1305室"
            }, {
              value: "爱茜茜里(近铁广场)",
              address: "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
            }, {
              value: "鲜果榨汁（金沙江路和美广店）",
              address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
            }, {
              value: "开心丽果（缤谷店）",
              address: "上海市长宁区威宁路天山路341号"
            }, {
              value: "超级鸡车（丰庄路店）",
              address: "上海市嘉定区丰庄路240号"
            }, {
              value: "妙生活果园（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "香宜度麻辣香锅",
              address: "长宁区淞虹路148号"
            }, {
              value: "凡仔汉堡（老真北路店）",
              address: "上海市普陀区老真北路160号"
            }, {
              value: "港式小铺",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "蜀香源麻辣香锅（剑河路店）",
              address: "剑河路443-1"
            }, {
              value: "北京饺子馆",
              address: "长宁区北新泾街道天山西路490-1号"
            }, {
              value: "饭典*新简餐（凌空SOHO店）",
              address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
            }, {
              value: "焦耳·川式快餐（金钟路店）",
              address: "上海市金钟路633号地下一层甲部"
            }, {
              value: "动力鸡车",
              address: "长宁区仙霞西路299弄3号101B"
            }, {
              value: "浏阳蒸菜",
              address: "天山西路430号"
            }, {
              value: "四海游龙（天山西路店）",
              address: "上海市长宁区天山西路"
            }, {
              value: "樱花食堂（凌空店）",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "壹分米客家传统调制米粉(天山店)",
              address: "天山西路428号"
            }, {
              value: "福荣祥烧腊（平溪路店）",
              address: "上海市长宁区协和路福泉路255弄57-73号"
            }, {
              value: "速记黄焖鸡米饭",
              address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
            }, {
              value: "红辣椒麻辣烫",
              address: "上海市长宁区天山西路492号"
            }, {
              value: "(小杨生煎)西郊百联餐厅",
              address: "长宁区仙霞西路88号百联2楼"
            }, {
              value: "阳阳麻辣烫",
              address: "天山西路389号"
            }, {
              value: "南拳妈妈龙虾盖浇饭",
              address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
            }];
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          onMounted(function () {
            restaurants.value = loadAll();
          });
          return {
            restaurants: restaurants,
            state1: ref(''),
            state2: ref(''),
            querySearch: querySearch,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "name"
      };
      var _hoisted_2 = {
        class: "addr"
      };

      function render(_ctx, _cache) {
        var _component_hl_autocomplete = _resolveComponent("hl-autocomplete");

        return _openBlock(), _createBlock(_component_hl_autocomplete, {
          "popper-class": "my-autocomplete",
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.state = $event;
          }),
          "fetch-suggestions": _ctx.querySearch,
          placeholder: "请输入内容",
          onSelect: _ctx.handleSelect
        }, {
          suffix: _withCtx(function () {
            return [_createVNode("i", {
              class: "hl-icon-edit hl-input__icon",
              onClick: _cache[1] || (_cache[1] = function () {
                return _ctx.handleIconClick && _ctx.handleIconClick.apply(_ctx, arguments);
              })
            })];
          }),
          default: _withCtx(function (_ref) {
            var item = _ref.item;
            return [_createVNode("div", _hoisted_1, _toDisplayString(item.value), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.address), 1)];
          }),
          _: 1
        }, 8, ["modelValue", "fetch-suggestions", "onSelect"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */],
          onMounted = vue_esm_browser_prod["D" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var restaurants = ref([]);

          var querySearch = function querySearch(queryString, cb) {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value; // 调用 callback 返回建议列表的数据

            cb(results);
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var loadAll = function loadAll() {
            return [{
              value: "三全鲜食（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "Hot honey 首尔炸鸡（仙霞路）",
              address: "上海市长宁区淞虹路661号"
            }, {
              value: "新旺角茶餐厅",
              address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
            }, {
              value: "泷千家(天山西路店)",
              address: "天山西路438号"
            }, {
              value: "胖仙女纸杯蛋糕（上海凌空店）",
              address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
            }, {
              value: "贡茶",
              address: "上海市长宁区金钟路633号"
            }, {
              value: "豪大大香鸡排超级奶爸",
              address: "上海市嘉定区曹安公路曹安路1685号"
            }, {
              value: "茶芝兰（奶茶，手抓饼）",
              address: "上海市普陀区同普路1435号"
            }, {
              value: "十二泷町",
              address: "上海市北翟路1444弄81号B幢-107"
            }, {
              value: "星移浓缩咖啡",
              address: "上海市嘉定区新郁路817号"
            }, {
              value: "阿姨奶茶/豪大大",
              address: "嘉定区曹安路1611号"
            }, {
              value: "新麦甜四季甜品炸鸡",
              address: "嘉定区曹安公路2383弄55号"
            }, {
              value: "Monica摩托主题咖啡店",
              address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
            }, {
              value: "浮生若茶（凌空soho店）",
              address: "上海长宁区金钟路968号9号楼地下一层"
            }, {
              value: "NONO JUICE  鲜榨果汁",
              address: "上海市长宁区天山西路119号"
            }, {
              value: "CoCo都可(北新泾店）",
              address: "上海市长宁区仙霞西路"
            }, {
              value: "快乐柠檬（神州智慧店）",
              address: "上海市长宁区天山西路567号1层R117号店铺"
            }, {
              value: "Merci Paul cafe",
              address: "上海市普陀区光复西路丹巴路28弄6号楼819"
            }, {
              value: "猫山王（西郊百联店）",
              address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
            }, {
              value: "枪会山",
              address: "上海市普陀区棕榈路"
            }, {
              value: "纵食",
              address: "元丰天山花园(东门) 双流路267号"
            }, {
              value: "钱记",
              address: "上海市长宁区天山西路"
            }, {
              value: "壹杯加",
              address: "上海市长宁区通协路"
            }, {
              value: "唦哇嘀咖",
              address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
            }, {
              value: "爱茜茜里(西郊百联)",
              address: "长宁区仙霞西路88号1305室"
            }, {
              value: "爱茜茜里(近铁广场)",
              address: "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
            }, {
              value: "鲜果榨汁（金沙江路和美广店）",
              address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
            }, {
              value: "开心丽果（缤谷店）",
              address: "上海市长宁区威宁路天山路341号"
            }, {
              value: "超级鸡车（丰庄路店）",
              address: "上海市嘉定区丰庄路240号"
            }, {
              value: "妙生活果园（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "香宜度麻辣香锅",
              address: "长宁区淞虹路148号"
            }, {
              value: "凡仔汉堡（老真北路店）",
              address: "上海市普陀区老真北路160号"
            }, {
              value: "港式小铺",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "蜀香源麻辣香锅（剑河路店）",
              address: "剑河路443-1"
            }, {
              value: "北京饺子馆",
              address: "长宁区北新泾街道天山西路490-1号"
            }, {
              value: "饭典*新简餐（凌空SOHO店）",
              address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
            }, {
              value: "焦耳·川式快餐（金钟路店）",
              address: "上海市金钟路633号地下一层甲部"
            }, {
              value: "动力鸡车",
              address: "长宁区仙霞西路299弄3号101B"
            }, {
              value: "浏阳蒸菜",
              address: "天山西路430号"
            }, {
              value: "四海游龙（天山西路店）",
              address: "上海市长宁区天山西路"
            }, {
              value: "樱花食堂（凌空店）",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "壹分米客家传统调制米粉(天山店)",
              address: "天山西路428号"
            }, {
              value: "福荣祥烧腊（平溪路店）",
              address: "上海市长宁区协和路福泉路255弄57-73号"
            }, {
              value: "速记黄焖鸡米饭",
              address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
            }, {
              value: "红辣椒麻辣烫",
              address: "上海市长宁区天山西路492号"
            }, {
              value: "(小杨生煎)西郊百联餐厅",
              address: "长宁区仙霞西路88号百联2楼"
            }, {
              value: "阳阳麻辣烫",
              address: "天山西路389号"
            }, {
              value: "南拳妈妈龙虾盖浇饭",
              address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
            }];
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          var handleIconClick = function handleIconClick(ev) {
            console.log(ev);
          };

          onMounted(function () {
            restaurants.value = loadAll();
          });
          return {
            restaurants: restaurants,
            state: ref(''),
            querySearch: querySearch,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect,
            handleIconClick: handleIconClick
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_autocomplete = _resolveComponent("hl-autocomplete");

        return _openBlock(), _createBlock(_component_hl_autocomplete, {
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.state = $event;
          }),
          "fetch-suggestions": _ctx.querySearchAsync,
          placeholder: "请输入内容",
          onSelect: _ctx.handleSelect
        }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */],
          onMounted = vue_esm_browser_prod["D" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var restaurants = ref([]);

          var loadAll = function loadAll() {
            return [{
              value: "三全鲜食（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "Hot honey 首尔炸鸡（仙霞路）",
              address: "上海市长宁区淞虹路661号"
            }, {
              value: "新旺角茶餐厅",
              address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
            }, {
              value: "泷千家(天山西路店)",
              address: "天山西路438号"
            }, {
              value: "胖仙女纸杯蛋糕（上海凌空店）",
              address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
            }, {
              value: "贡茶",
              address: "上海市长宁区金钟路633号"
            }, {
              value: "豪大大香鸡排超级奶爸",
              address: "上海市嘉定区曹安公路曹安路1685号"
            }, {
              value: "茶芝兰（奶茶，手抓饼）",
              address: "上海市普陀区同普路1435号"
            }, {
              value: "十二泷町",
              address: "上海市北翟路1444弄81号B幢-107"
            }, {
              value: "星移浓缩咖啡",
              address: "上海市嘉定区新郁路817号"
            }, {
              value: "阿姨奶茶/豪大大",
              address: "嘉定区曹安路1611号"
            }, {
              value: "新麦甜四季甜品炸鸡",
              address: "嘉定区曹安公路2383弄55号"
            }];
          };

          var timeout;

          var querySearchAsync = function querySearchAsync(queryString, cb) {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
              cb(results);
            }, 110000);
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          onMounted(function () {
            restaurants.value = loadAll();
          });
          return {
            restaurants: restaurants,
            state: ref(''),
            querySearchAsync: querySearchAsync,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/autocomplete.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/autocomplete.md



autocompletevue_type_script_lang_ts.render = autocompletevue_type_template_id_5280189a_render

/* harmony default export */ var autocomplete = __webpack_exports__["default"] = (autocompletevue_type_script_lang_ts);

/***/ })

}]);