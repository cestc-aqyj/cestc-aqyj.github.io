(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/menu.md?vue&type=template&id=79efbf5e

var menuvue_type_template_id_79efbf5e_hoisted_1 = {
  class: "doc-main-content"
};
var menuvue_type_template_id_79efbf5e_hoisted_2 = {
  class: "doc-content"
};

var menuvue_type_template_id_79efbf5e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "navmenu-dao-hang-cai-dan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#navmenu-dao-hang-cai-dan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" NavMenu 导航菜单")], -1);

var menuvue_type_template_id_79efbf5e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "为网站提供导航功能的菜单。", -1);

var menuvue_type_template_id_79efbf5e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "ding-lan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ding-lan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 顶栏")], -1);

var menuvue_type_template_id_79efbf5e_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "适用广泛的基础用法。", -1);

var menuvue_type_template_id_79efbf5e_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("导航菜单默认为垂直模式，通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "mode"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性可以使导航菜单变更为水平模式。另外，在菜单中通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "submenu"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件可以生成二级菜单。Menu 还提供了"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。")])], -1);

var menuvue_type_template_id_79efbf5e_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-menu :default-active=\"activeIndex\" mode=\"vertical\" @select=\"handleSelect\">\n  <hl-menu-item index=\"1\">处理中心</hl-menu-item>\n  <hl-submenu index=\"2\">\n    <template #title>我的工作台</template>\n    <hl-menu-item index=\"2-1\">选项1</hl-menu-item>\n    <hl-menu-item index=\"2-2\">选项2</hl-menu-item>\n    <hl-menu-item index=\"2-3\">选项3</hl-menu-item>\n    <hl-submenu index=\"2-4\">\n      <template #title>选项4</template>\n      <hl-menu-item index=\"2-4-1\">选项1</hl-menu-item>\n      <hl-menu-item index=\"2-4-2\">选项2</hl-menu-item>\n      <hl-menu-item index=\"2-4-3\">选项3</hl-menu-item>\n    </hl-submenu>\n  </hl-submenu>\n  <hl-menu-item index=\"3\" disabled>消息中心</hl-menu-item>\n  <hl-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">订单管理</a></hl-menu-item>\n</hl-menu>\n<div class=\"line\"></div>\n\n<hl-menu :default-active=\"activeIndex\" mode=\"horizontal\" @select=\"handleSelect\">\n  <hl-menu-item index=\"1\">处理中心</hl-menu-item>\n  <hl-submenu index=\"2\">\n    <template #title>我的工作台</template>\n    <hl-menu-item index=\"2-1\">选项1</hl-menu-item>\n    <hl-menu-item index=\"2-2\">选项2</hl-menu-item>\n    <hl-menu-item index=\"2-3\">选项3</hl-menu-item>\n    <hl-submenu index=\"2-4\">\n      <template #title>选项4</template>\n      <hl-menu-item index=\"2-4-1\">选项1</hl-menu-item>\n      <hl-menu-item index=\"2-4-2\">选项2</hl-menu-item>\n      <hl-menu-item index=\"2-4-3\">选项3</hl-menu-item>\n    </hl-submenu>\n  </hl-submenu>\n  <hl-menu-item index=\"3\" disabled>消息中心</hl-menu-item>\n  <hl-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">订单管理</a></hl-menu-item>\n</hl-menu>\n<div class=\"line\"></div>\n\n\n<hl-menu\n  :default-active=\"activeIndex2\"\n  class=\"hl-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\">\n  <hl-menu-item index=\"1\">处理中心</hl-menu-item>\n  <hl-submenu index=\"2\">\n    <template #title>我的工作台</template>\n    <hl-menu-item index=\"2-1\">选项1</hl-menu-item>\n    <hl-menu-item index=\"2-2\">选项2</hl-menu-item>\n    <hl-menu-item index=\"2-3\">选项3</hl-menu-item>\n    <hl-submenu index=\"2-4\">\n      <template #title>选项4</template>\n      <hl-menu-item index=\"2-4-1\">选项1</hl-menu-item>\n      <hl-menu-item index=\"2-4-2\">选项2</hl-menu-item>\n      <hl-menu-item index=\"2-4-3\">选项3</hl-menu-item>\n    </hl-submenu>\n  </hl-submenu>\n  <hl-menu-item index=\"3\" disabled>消息中心</hl-menu-item>\n  <hl-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">订单管理</a></hl-menu-item>\n</hl-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_79efbf5e_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "ce-lan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ce-lan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 侧栏")], -1);

var menuvue_type_template_id_79efbf5e_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "垂直菜单，可内嵌子菜单。", -1);

var menuvue_type_template_id_79efbf5e_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-menu-item-group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件可以实现菜单进行分组，分组名可以通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性直接设定，也可以通过具名 slot 来设定。")])], -1);

var menuvue_type_template_id_79efbf5e_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row class=\"tac\">\n  <hl-col :span=\"12\">\n    <h5>默认颜色</h5>\n    <hl-menu\n      default-active=\"2\"\n      class=\"hl-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\">\n      <hl-submenu index=\"1\">\n        <template #title>\n          <hl-icon name=\"point\"></hl-icon>\n          <span>导航一</span>\n        </template>\n        <hl-menu-item-group>\n          <template #title>分组一</template>\n          <hl-menu-item index=\"1-1\">选项1</hl-menu-item>\n          <hl-menu-item index=\"1-2\">选项2</hl-menu-item>\n        </hl-menu-item-group>\n        <hl-menu-item-group title=\"分组2\">\n          <hl-menu-item index=\"1-3\">选项3</hl-menu-item>\n        </hl-menu-item-group>\n        <hl-submenu index=\"1-4\">\n          <template #title>选项4</template>\n          <hl-menu-item index=\"1-4-1\">选项1</hl-menu-item>\n        </hl-submenu>\n      </hl-submenu>\n      <hl-menu-item index=\"2\">\n        <hl-icon name=\"application\"></hl-icon>\n        <template #title>导航二</template>\n      </hl-menu-item>\n      <hl-menu-item index=\"3\" disabled>\n        <hl-icon name=\"file\"></hl-icon>\n        <template #title>导航三</template>\n      </hl-menu-item>\n      <hl-menu-item index=\"4\">\n        <hl-icon name=\"setting\"></hl-icon>\n        <template #title>导航四</template>\n      </hl-menu-item>\n    </hl-menu>\n  </hl-col>\n  <hl-col :span=\"12\">\n    <h5>自定义颜色</h5>\n    <hl-menu\n      :uniqueOpened=\"true\"\n      default-active=\"2\"\n      class=\"hl-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\">\n      <hl-submenu index=\"1\">\n        <template #title>\n          <hl-icon name=\"point\"></hl-icon>\n          <span>导航一</span>\n        </template>\n        <hl-menu-item-group>\n          <template #title>分组一</template>\n          <hl-menu-item index=\"1-1\">选项1</hl-menu-item>\n          <hl-menu-item index=\"1-2\">选项2</hl-menu-item>\n        </hl-menu-item-group>\n        <hl-menu-item-group title=\"分组2\">\n          <hl-menu-item index=\"1-3\">选项3</hl-menu-item>\n        </hl-menu-item-group>\n        <hl-submenu index=\"1-4\">\n          <template #title>选项4</template>\n          <hl-menu-item index=\"1-4-1\">选项1</hl-menu-item>\n        </hl-submenu>\n      </hl-submenu>\n      <hl-menu-item index=\"2\">\n        <hl-icon name=\"application\"></hl-icon>\n        <template #title>导航二</template>\n      </hl-menu-item>\n      <hl-menu-item index=\"3\" disabled>\n        <hl-icon name=\"file\"></hl-icon>\n        <template #title>导航三</template>\n      </hl-menu-item>\n      <hl-menu-item index=\"4\">\n        <hl-icon name=\"setting\"></hl-icon>\n        <template #title>导航四</template>\n      </hl-menu-item>\n      <hl-submenu index=\"5\">\n        <template #title>\n          <hl-icon name=\"point\"></hl-icon>\n          <span>导航一</span>\n        </template>\n        <hl-menu-item-group>\n          <template #title>分组一</template>\n          <hl-menu-item index=\"5-1\">选项1</hl-menu-item>\n          <hl-menu-item index=\"5-2\">选项2</hl-menu-item>\n        </hl-menu-item-group>\n        <hl-menu-item-group title=\"分组2\">\n          <hl-menu-item index=\"5-3\">选项3</hl-menu-item>\n        </hl-menu-item-group>\n      </hl-submenu>\n    </hl-menu>\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_79efbf5e_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "zhe-die"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhe-die"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 折叠")], -1);

var menuvue_type_template_id_79efbf5e_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <hl-radio :label=\"false\">展开</hl-radio>\n  <hl-radio :label=\"true\">收起</hl-radio>\n</hl-radio-group>\n<hl-menu default-active=\"1-4-1\" class=\"hl-menu-vertical-demo\" @open=\"handleOpen\" @close=\"handleClose\" :collapse=\"isCollapse\">\n  <hl-submenu index=\"1\">\n    <template #title>\n      <hl-icon name=\"point\"></hl-icon>\n      <span>导航一</span>\n    </template>\n    <hl-menu-item-group>\n      <template #title>分组一</template>\n      <hl-menu-item index=\"1-1\">选项1</hl-menu-item>\n      <hl-menu-item index=\"1-2\">选项2</hl-menu-item>\n    </hl-menu-item-group>\n    <hl-menu-item-group title=\"分组2\">\n      <hl-menu-item index=\"1-3\">选项3</hl-menu-item>\n    </hl-menu-item-group>\n    <hl-submenu index=\"1-4\">\n      <template #title>选项4</template>\n      <hl-menu-item index=\"1-4-1\">选项1</hl-menu-item>\n    </hl-submenu>\n  </hl-submenu>\n  <hl-menu-item index=\"2\">\n    <hl-icon name=\"application\"></hl-icon>\n    <template #title>导航二</template>\n  </hl-menu-item>\n  <hl-menu-item index=\"3\" disabled>\n    <hl-icon name=\"file\"></hl-icon>\n    <template #title>导航三</template>\n  </hl-menu-item>\n  <hl-menu-item index=\"4\">\n    <hl-icon name=\"setting\"></hl-icon>\n    <template #title>导航四</template>\n  </hl-menu-item>\n</hl-menu>\n\n<style>\n  .hl-menu-vertical-demo:not(.hl-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_79efbf5e_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"menu-attribute\"><a class=\"header-anchor\" href=\"#menu-attribute\"></a> Menu Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>模式</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>菜单的背景色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>当前激活菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>当前激活菜单的 index</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>当前打开的 sub-menu 的 index 的数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>是否只保持一个子菜单的展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>是否开启折叠动画</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id=\"menu-methods\"><a class=\"header-anchor\" href=\"#menu-methods\"></a> Menu Methods</h3><table><thead><tr><th>方法名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>展开指定的 sub-menu</td><td>index: 需要打开的 sub-menu 的 index</td></tr><tr><td>close</td><td>收起指定的 sub-menu</td><td>index: 需要收起的 sub-menu 的 index</td></tr></tbody></table><h3 id=\"menu-events\"><a class=\"header-anchor\" href=\"#menu-events\"></a> Menu Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>菜单激活回调</td><td>index: 选中菜单项的 index, indexPath: 选中菜单项的 index path</td></tr><tr><td>open</td><td>sub-menu 展开的回调</td><td>index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path</td></tr><tr><td>close</td><td>sub-menu 收起的回调</td><td>index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path</td></tr></tbody></table><h3 id=\"submenu-attribute\"><a class=\"header-anchor\" href=\"#submenu-attribute\"></a> SubMenu Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>popper-class</td><td>弹出菜单的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>展开 sub-menu 的延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>收起 sub-menu 的延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性</td><td>boolean</td><td>—</td><td>一级子菜单：true / 非一级子菜单：false</td></tr></tbody></table><h3 id=\"menu-item-attribute\"><a class=\"header-anchor\" href=\"#menu-item-attribute\"></a> Menu-Item Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string</td><td>—</td><td>—</td></tr><tr><td>route</td><td>Vue Router 路径对象</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"menu-group-attribute\"><a class=\"header-anchor\" href=\"#menu-group-attribute\"></a> Menu-Group Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>分组标题</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 12);

function menuvue_type_template_id_79efbf5e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", menuvue_type_template_id_79efbf5e_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", menuvue_type_template_id_79efbf5e_hoisted_2, [menuvue_type_template_id_79efbf5e_hoisted_3, menuvue_type_template_id_79efbf5e_hoisted_4, menuvue_type_template_id_79efbf5e_hoisted_5, menuvue_type_template_id_79efbf5e_hoisted_6, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [menuvue_type_template_id_79efbf5e_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [menuvue_type_template_id_79efbf5e_hoisted_7];
    }),
    _: 1
  }), menuvue_type_template_id_79efbf5e_hoisted_9, menuvue_type_template_id_79efbf5e_hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [menuvue_type_template_id_79efbf5e_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [menuvue_type_template_id_79efbf5e_hoisted_11];
    }),
    _: 1
  }), menuvue_type_template_id_79efbf5e_hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [menuvue_type_template_id_79efbf5e_hoisted_14];
    }),
    _: 1
  }), menuvue_type_template_id_79efbf5e_hoisted_15]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/menu.md?vue&type=template&id=79efbf5e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/menu.md?vue&type=script&lang=ts


/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("处理中心");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("我的工作台");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("选项4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("消息中心");

      var _hoisted_11 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "订单管理", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("处理中心");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("我的工作台");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("选项4");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("消息中心");

      var _hoisted_23 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "订单管理", -1);

      var _hoisted_24 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      var _hoisted_25 = /*#__PURE__*/_createTextVNode("处理中心");

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("我的工作台");

      var _hoisted_27 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_28 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_29 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_30 = /*#__PURE__*/_createTextVNode("选项4");

      var _hoisted_31 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_32 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_33 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_34 = /*#__PURE__*/_createTextVNode("消息中心");

      var _hoisted_35 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "订单管理", -1);

      function render(_ctx, _cache) {
        var _component_hl_menu_item = _resolveComponent("hl-menu-item");

        var _component_hl_submenu = _resolveComponent("hl-submenu");

        var _component_hl_menu = _resolveComponent("hl-menu");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_menu, {
          "default-active": _ctx.activeIndex,
          mode: "vertical",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_2];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_hl_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_hl_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_hl_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"]), _hoisted_12, _createVNode(_component_hl_menu, {
          "default-active": _ctx.activeIndex,
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_hl_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                }), _createVNode(_component_hl_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_hl_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_hl_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_19];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_20];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_21];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"]), _hoisted_24, _createVNode(_component_hl_menu, {
          "default-active": _ctx.activeIndex2,
          class: "hl-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect,
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_25];
              }),
              _: 1
            }), _createVNode(_component_hl_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_26];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_27];
                  }),
                  _: 1
                }), _createVNode(_component_hl_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_28];
                  }),
                  _: 1
                }), _createVNode(_component_hl_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_29];
                  }),
                  _: 1
                }), _createVNode(_component_hl_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_30];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_31];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_32];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_33];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_34];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_35];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect: function handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("h5", null, "默认颜色", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "导航一", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("分组一");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("选项4");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("导航二");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("导航三");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("导航四");

      var _hoisted_12 = /*#__PURE__*/_createVNode("h5", null, "自定义颜色", -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("span", null, "导航一", -1);

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("分组一");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("选项4");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("导航二");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("导航三");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("导航四");

      var _hoisted_23 = /*#__PURE__*/_createVNode("span", null, "导航一", -1);

      var _hoisted_24 = /*#__PURE__*/_createTextVNode("分组一");

      var _hoisted_25 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_27 = /*#__PURE__*/_createTextVNode("选项3");

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_menu_item = _resolveComponent("hl-menu-item");

        var _component_hl_menu_item_group = _resolveComponent("hl-menu-item-group");

        var _component_hl_submenu = _resolveComponent("hl-submenu");

        var _component_hl_menu = _resolveComponent("hl-menu");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          class: "tac"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_menu, {
                  "default-active": "2",
                  class: "hl-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "point"
                        }), _hoisted_2];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_3];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_4];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_5];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_menu_item_group, {
                          title: "分组2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_6];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_8];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "application"
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_10];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "file"
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "4"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_11];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "setting"
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_12, _createVNode(_component_hl_menu, {
                  uniqueOpened: true,
                  "default-active": "2",
                  class: "hl-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose,
                  "background-color": "#545c64",
                  "text-color": "#fff",
                  "active-text-color": "#ffd04b"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "point"
                        }), _hoisted_13];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_15];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_16];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_menu_item_group, {
                          title: "分组2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_17];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_18];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_19];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "2"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_20];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "application"
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_21];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "file"
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "4"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_22];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "setting"
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_submenu, {
                      index: "5"
                    }, {
                      title: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "point"
                        }), _hoisted_23];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_menu_item_group, null, {
                          title: _withCtx(function () {
                            return [_hoisted_24];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "5-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_25];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_menu_item, {
                              index: "5-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_26];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_menu_item_group, {
                          title: "分组2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_menu_item, {
                              index: "5-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_27];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("展开");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("收起");

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "导航一", -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("分组一");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("选项2");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("选项3");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("选项4");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("选项1");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("导航二");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("导航三");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("导航四");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        var _component_hl_radio_group = _resolveComponent("hl-radio-group");

        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_menu_item = _resolveComponent("hl-menu-item");

        var _component_hl_menu_item_group = _resolveComponent("hl-menu-item-group");

        var _component_hl_submenu = _resolveComponent("hl-submenu");

        var _component_hl_menu = _resolveComponent("hl-menu");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.isCollapse = $event;
          }),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_radio, {
              label: false
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: true
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_menu, {
          "default-active": "1-4-1",
          class: "hl-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_submenu, {
              index: "1"
            }, {
              title: _withCtx(function () {
                return [_createVNode(_component_hl_icon, {
                  name: "point"
                }), _hoisted_3];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_menu_item_group, null, {
                  title: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_menu_item, {
                      index: "1-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_menu_item, {
                      index: "1-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_hl_menu_item_group, {
                  title: "分组2"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_menu_item, {
                      index: "1-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_hl_submenu, {
                  index: "1-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_8];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_menu_item, {
                      index: "1-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_10];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_icon, {
                  name: "application"
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "3",
              disabled: ""
            }, {
              title: _withCtx(function () {
                return [_hoisted_11];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_icon, {
                  name: "file"
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_menu_item, {
              index: "4"
            }, {
              title: _withCtx(function () {
                return [_hoisted_12];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_icon, {
                  name: "setting"
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            isCollapse: true
          };
        },
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_79efbf5e_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);