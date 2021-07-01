(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/simple-table.md?vue&type=template&id=3aed7062

var simple_tablevue_type_template_id_3aed7062_hoisted_1 = {
  class: "doc-main-content"
};
var simple_tablevue_type_template_id_3aed7062_hoisted_2 = {
  class: "doc-content"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "SimpleTable 简单表格", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "SimpleTable 是一款非常轻量的表格组件。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-simple-table :cols=\"cols\" :data=\"tableData\">\n    <template #firstCol=\"{ col }\">\n      <hl-checkbox v-model=\"selectedAll\" @change=\"selectAll\"/>\n    </template>\n    <template #tableIndex=\"{ row }\">\n      <hl-checkbox v-model=\"selectedRows\" @change=\"selectRow(row.id)\" :label=\"row.id\">{{''}}</hl-checkbox>\n    </template>\n\n    <template #handle=\"{ row }\">\n      <hl-button type=\"link\">修改</hl-button>\n    </template>\n  </hl-simple-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        selectedAll: false,\n        selectedRows: [],\n        tableData: [\n          { id: 1, name: '范白露', sex: '女', org: '中国系统', des: '来自安全应急UED的设计师' },\n          { id: 2, name: 'xxx', sex: '男', org: '中国系统', des: '经验丰富的前端工程师' },\n          { id: 3, name: '王朝阳', sex: '男', org: '中国系统', des: '90后交互设计师' },\n        ],\n        cols: [\n          { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol' },\n          { title: '用户名', prop: 'name' },\n          { title: '性别', prop: 'sex' },\n          { title: '单位', prop: 'org' },\n          { title: '简介', prop: 'des' },\n          { title: '操作', slotName: 'handle', align: 'center' },\n        ],\n      }\n    },\n    methods: {\n      selectAll() {\n        if (this.selectedAll) {\n          this.selectedRows.splice(0, this.selectedRows.length)\n          this.selectedRows.push(...this.tableData.map(d => d.id))\n        } else {\n          this.selectedRows.splice(0, this.selectedRows.length)\n        }\n      },\n      selectRow() {\n        this.selectedAll = this.selectedRows.length === this.tableData.length\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "bian-kuang-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bian-kuang-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 边框样式")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bordered"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可为表格加上边框")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-simple-table :cols=\"cols\" :data=\"tableData\" bordered>\n    <template #tableIndex=\"{ row }\">\n      <span>{{row.rowIndex + 1}}</span>\n    </template>\n    <template #handle=\"{ row }\">\n      <hl-button type=\"link\">修改</hl-button>\n    </template>\n  </hl-simple-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！' },\n        ],\n        cols: [\n          { title: '#', slotName: 'tableIndex' },\n          { title: '用户名', prop: 'name' },\n          { title: '性别', prop: 'sex' },\n          { title: '单位', prop: 'org' },\n          { title: '简介', prop: 'des' },\n          { title: '操作', slotName: 'handle', align: 'center' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "xuan-ting-yang-shi-hover"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xuan-ting-yang-shi-hover"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 悬停样式 Hover")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Hover"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以在悬停在某一行时，呈现背景色。")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-simple-table :cols=\"cols\" :data=\"tableData\" hover>\n    <template #tableIndex=\"{ row }\">\n      <span>{{row.rowIndex + 1}}</span>\n    </template>\n    <template #handle=\"{ row }\">\n      <hl-button type=\"link\">修改</hl-button>\n    </template>\n  </hl-simple-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！' },\n        ],\n        cols: [\n          { title: '#', slotName: 'tableIndex' },\n          { title: '用户名', prop: 'name' },\n          { title: '性别', prop: 'sex' },\n          { title: '单位', prop: 'org' },\n          { title: '简介', prop: 'des' },\n          { title: '操作', slotName: 'handle', align: 'center' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tiao-wen-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tiao-wen-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 条纹样式")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "stripe"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性可以创建条纹的表格，以便区分出不同行的数据。")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-simple-table :cols=\"cols\" :data=\"tableData\" striped>\n    <template #tableIndex=\"{ row }\">\n      <span>{{row.rowIndex + 1}}</span>\n    </template>\n    <template #handle=\"{ row }\">\n      <hl-button type=\"link\">修改</hl-button>\n    </template>\n  </hl-simple-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！' },\n        ],\n        cols: [\n          { title: '#', slotName: 'tableIndex' },\n          { title: '用户名', prop: 'name' },\n          { title: '性别', prop: 'sex' },\n          { title: '单位', prop: 'org' },\n          { title: '简介', prop: 'des' },\n          { title: '操作', slotName: 'handle', align: 'center' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jin-cou-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-cou-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 紧凑样式")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "compact"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以使每一行数据展现的更为紧凑。")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-simple-table :cols=\"cols\" :data=\"tableData\" compact>\n    <template #tableIndex=\"{ row }\">\n      <span>{{row.rowIndex + 1}}</span>\n    </template>\n    <template #handle=\"{ row }\">\n      <hl-button type=\"link\">修改</hl-button>\n    </template>\n  </hl-simple-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！' },\n        ],\n        cols: [\n          { title: '#', slotName: 'tableIndex' },\n          { title: '用户名', prop: 'name' },\n          { title: '性别', prop: 'sex' },\n          { title: '单位', prop: 'org' },\n          { title: '简介', prop: 'des' },\n          { title: '操作', slotName: 'handle', align: 'center' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "lie-biao-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#lie-biao-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 列表样式")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "list"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可以将传统的表格呈现成列表的状态。")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("列表样式会为每一行表格加上圆角，你也可以自定义每一行的间距，例如："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "border-spacing: 0 6px;")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-simple-table :cols=\"cols\" :data=\"tableData\" list style=\"border-spacing: 0 0.5rem\">\n    <template #tableIndex=\"{ row }\">\n      <hl-icon :name=\"row.icon\" class=\"primary fill\" />\n    </template>\n    <template #handle=\"{ row }\">\n      <a>修改</a>\n    </template>\n  </hl-simple-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！', icon: 'Briefcase' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国', icon: 'ChartPie' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！', icon: 'Archive' },\n        ],\n        cols: [\n          { title: '#', slotName: 'tableIndex', align: 'center' },\n          { title: '用户名', prop: 'name' },\n          { title: '性别', prop: 'sex' },\n          { title: '单位', prop: 'org' },\n          { title: '简介', prop: 'des' },\n          { title: '操作', slotName: 'handle', align: 'center' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "gu-ding-biao-tou"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#gu-ding-biao-tou"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 固定表头")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-simple-table>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 加上 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "fixed-header"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以使表头固定在顶端。")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"table-scroll\" style=\"height: 200px\">\n    <hl-simple-table :cols=\"cols\" :data=\"tableData\" fixed-header>\n      <template #tableIndex=\"{ row }\">\n        <span>{{row.rowIndex + 1}}</span>\n      </template>\n      <template #handle=\"{ row }\">\n        <hl-button type=\"link\">修改</hl-button>\n      </template>\n    </hl-simple-table>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！' },\n        ],\n        // 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip\n        cols: [\n          { title: '序号', prop: '', slotName: 'tableIndex' },\n          { title: '姓名', prop: 'name', showTooltip: true },\n          { title: '性别', prop: 'sex' },\n          { title: '描述', prop: 'des', showTooltip: true },\n          { title: '单位', prop: 'org', showTooltip: true },\n          { title: '操作', prop: '', slotName: 'handle', align: 'center' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "gu-ding-lie"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#gu-ding-lie"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 固定列")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为某一列增加 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "fixed"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以使它固定，同时你可以传递 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来控制它固定在什么地方。例如 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "fixed: 'left'")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"table-scroll\">\n    <hl-simple-table :cols=\"cols\" :data=\"tableData\">\n      <template #tableIndex=\"{ row }\">\n        <span>{{row.rowIndex + 1}}</span>\n      </template>\n      <template #handle=\"{ row }\">\n        <hl-button type=\"link\">修改</hl-button>\n      </template>\n    </hl-simple-table>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！' },\n        ],\n        // 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip\n        cols: [\n          { title: '序号', prop: '', slotName: 'tableIndex', fixed: 'left' },\n          { title: '姓名', prop: 'name', showTooltip: true, width: '150px' },\n          { title: '性别', prop: 'sex', width: '150px' },\n          { title: '描述', prop: 'des', showTooltip: true, width: '500px' },\n          { title: '单位', prop: 'org', showTooltip: true, fixed: 'right' },\n          { title: '操作', prop: '', slotName: 'handle', align: 'center', fixed: 'right' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "gu-ding-tou-he-lie"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#gu-ding-tou-he-lie"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 固定头和列")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "表头和列可以同时设置固定。", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-scrollbar height=\"200px\">\n    <hl-simple-table :cols=\"cols\" :data=\"tableData\" fixed-header>\n      <template #tableIndex=\"{ row }\">\n        <span>{{row.rowIndex + 1}}</span>\n      </template>\n      <template #handle=\"{ row }\">\n        <hl-button type=\"link\">修改</hl-button>\n      </template>\n    </hl-simple-table>\n  </hl-scrollbar>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          { id: 1, name: '王二麻子', sex: '男', org: '中国系统', des: '来自中国南方的温暖城市！' },\n          { id: 2, name: '李四', sex: '男', org: '中国系统', des: '来自中国' },\n          { id: 3, name: '张三', sex: '男', org: '中国系统', des: '来自中国北方的寒冷的城市！' },\n        ],\n        // 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip\n        cols: [\n          { title: '序号', prop: '', slotName: 'tableIndex', fixed: 'left' },\n          { title: '姓名', prop: 'name', showTooltip: true, width: '150px' },\n          { title: '性别', prop: 'sex', width: '150px' },\n          { title: '描述', prop: 'des', showTooltip: true, width: '500px' },\n          { title: '单位', prop: 'org', showTooltip: true, fixed: 'right' },\n          { title: '操作', prop: '', slotName: 'handle', align: 'center', fixed: 'right' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"simple-table-attributes\"><a class=\"header-anchor\" href=\"#simple-table-attributes\"></a> Simple Table Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>bordered</td><td>为表格加上边框</td><td>Boolean</td><td></td><td></td></tr><tr><td>hover</td><td>表格悬停效果</td><td>Boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>表格条纹效果</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>compact</td><td>紧凑效果</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>list</td><td>列表样式</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>固定表头</td><td>Boolean</td><td></td><td>-</td></tr></tbody></table><h2 id=\"simple-table-column-attributes\"><a class=\"header-anchor\" href=\"#simple-table-column-attributes\"></a> Simple Table Column Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>表格标题</td><td>String</td><td></td><td></td></tr><tr><td>prop</td><td>表格列属性名称</td><td>String</td><td></td><td></td></tr><tr><td>show-tooltip</td><td>是否显示tooltip，需要配合固定列width值使用</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>align</td><td>对齐方式</td><td>String</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>列宽</td><td>String</td><td></td><td>-</td></tr><tr><td>fixed</td><td>固定列</td><td>String</td><td>left/right</td><td>-</td></tr><tr><td>slotName</td><td>列slot名称，默认参数为row，请参考示例</td><td>String</td><td>-</td><td>-</td></tr><tr><td>headerSlotName</td><td>列头slot名称，默认参数为col，请参考示例</td><td>String</td><td>-</td><td>-</td></tr></tbody></table>", 4);

function simple_tablevue_type_template_id_3aed7062_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", simple_tablevue_type_template_id_3aed7062_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", simple_tablevue_type_template_id_3aed7062_hoisted_2, [_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_6, _hoisted_7, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, {
    dark: ""
  }, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28, _hoisted_29, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    _: 1
  }), _hoisted_31]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/simple-table.md?vue&type=template&id=3aed7062

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/simple-table.md?vue&type=script&lang=ts


/* harmony default export */ var simple_tablevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode( /*#__PURE__*/_toDisplayString(''));

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData
        }, {
          firstCol: _withCtx(function (_ref) {
            var col = _ref.col;
            return [_createVNode(_component_hl_checkbox, {
              modelValue: _ctx.selectedAll,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.selectedAll = $event;
              }),
              onChange: _ctx.selectAll
            }, null, 8, ["modelValue", "onChange"])];
          }),
          tableIndex: _withCtx(function (_ref2) {
            var row = _ref2.row;
            return [_createVNode(_component_hl_checkbox, {
              modelValue: _ctx.selectedRows,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                return _ctx.selectedRows = $event;
              }),
              onChange: function onChange($event) {
                return _ctx.selectRow(row.id);
              },
              label: row.id
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 2
            }, 1032, ["modelValue", "onChange", "label"])];
          }),
          handle: _withCtx(function (_ref3) {
            var row = _ref3.row;
            return [_createVNode(_component_hl_button, {
              type: "link"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["cols", "data"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            selectedAll: false,
            selectedRows: [],
            tableData: [{
              id: 1,
              name: '范白露',
              sex: '女',
              org: '中国系统',
              des: '来自安全应急UED的设计师'
            }, {
              id: 2,
              name: 'xxx',
              sex: '男',
              org: '中国系统',
              des: '经验丰富的前端工程师'
            }, {
              id: 3,
              name: '王朝阳',
              sex: '男',
              org: '中国系统',
              des: '90后交互设计师'
            }],
            cols: [{
              title: '#',
              slotName: 'tableIndex',
              headerSlotName: 'firstCol'
            }, {
              title: '用户名',
              prop: 'name'
            }, {
              title: '性别',
              prop: 'sex'
            }, {
              title: '单位',
              prop: 'org'
            }, {
              title: '简介',
              prop: 'des'
            }, {
              title: '操作',
              slotName: 'handle',
              align: 'center'
            }]
          };
        },
        methods: {
          selectAll: function selectAll() {
            if (this.selectedAll) {
              var _this$selectedRows;

              this.selectedRows.splice(0, this.selectedRows.length);

              (_this$selectedRows = this.selectedRows).push.apply(_this$selectedRows, this.tableData.map(function (d) {
                return d.id;
              }));
            } else {
              this.selectedRows.splice(0, this.selectedRows.length);
            }
          },
          selectRow: function selectRow() {
            this.selectedAll = this.selectedRows.length === this.tableData.length;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData,
          bordered: ""
        }, {
          tableIndex: _withCtx(function (_ref4) {
            var row = _ref4.row;
            return [_createVNode("span", null, _toDisplayString(row.rowIndex + 1), 1)];
          }),
          handle: _withCtx(function (_ref5) {
            var row = _ref5.row;
            return [_createVNode(_component_hl_button, {
              type: "link"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["cols", "data"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！'
            }],
            cols: [{
              title: '#',
              slotName: 'tableIndex'
            }, {
              title: '用户名',
              prop: 'name'
            }, {
              title: '性别',
              prop: 'sex'
            }, {
              title: '单位',
              prop: 'org'
            }, {
              title: '简介',
              prop: 'des'
            }, {
              title: '操作',
              slotName: 'handle',
              align: 'center'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData,
          hover: ""
        }, {
          tableIndex: _withCtx(function (_ref6) {
            var row = _ref6.row;
            return [_createVNode("span", null, _toDisplayString(row.rowIndex + 1), 1)];
          }),
          handle: _withCtx(function (_ref7) {
            var row = _ref7.row;
            return [_createVNode(_component_hl_button, {
              type: "link"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["cols", "data"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！'
            }],
            cols: [{
              title: '#',
              slotName: 'tableIndex'
            }, {
              title: '用户名',
              prop: 'name'
            }, {
              title: '性别',
              prop: 'sex'
            }, {
              title: '单位',
              prop: 'org'
            }, {
              title: '简介',
              prop: 'des'
            }, {
              title: '操作',
              slotName: 'handle',
              align: 'center'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData,
          striped: ""
        }, {
          tableIndex: _withCtx(function (_ref8) {
            var row = _ref8.row;
            return [_createVNode("span", null, _toDisplayString(row.rowIndex + 1), 1)];
          }),
          handle: _withCtx(function (_ref9) {
            var row = _ref9.row;
            return [_createVNode(_component_hl_button, {
              type: "link"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["cols", "data"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！'
            }],
            cols: [{
              title: '#',
              slotName: 'tableIndex'
            }, {
              title: '用户名',
              prop: 'name'
            }, {
              title: '性别',
              prop: 'sex'
            }, {
              title: '单位',
              prop: 'org'
            }, {
              title: '简介',
              prop: 'des'
            }, {
              title: '操作',
              slotName: 'handle',
              align: 'center'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData,
          compact: ""
        }, {
          tableIndex: _withCtx(function (_ref10) {
            var row = _ref10.row;
            return [_createVNode("span", null, _toDisplayString(row.rowIndex + 1), 1)];
          }),
          handle: _withCtx(function (_ref11) {
            var row = _ref11.row;
            return [_createVNode(_component_hl_button, {
              type: "link"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["cols", "data"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！'
            }],
            cols: [{
              title: '#',
              slotName: 'tableIndex'
            }, {
              title: '用户名',
              prop: 'name'
            }, {
              title: '性别',
              prop: 'sex'
            }, {
              title: '单位',
              prop: 'org'
            }, {
              title: '简介',
              prop: 'des'
            }, {
              title: '操作',
              slotName: 'handle',
              align: 'center'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("a", null, "修改", -1);

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData,
          list: "",
          style: {
            "border-spacing": "0 0.5rem"
          }
        }, {
          tableIndex: _withCtx(function (_ref12) {
            var row = _ref12.row;
            return [_createVNode(_component_hl_icon, {
              name: row.icon,
              class: "primary fill"
            }, null, 8, ["name"])];
          }),
          handle: _withCtx(function (_ref13) {
            var row = _ref13.row;
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["cols", "data"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！',
              icon: 'Briefcase'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国',
              icon: 'ChartPie'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！',
              icon: 'Archive'
            }],
            cols: [{
              title: '#',
              slotName: 'tableIndex',
              align: 'center'
            }, {
              title: '用户名',
              prop: 'name'
            }, {
              title: '性别',
              prop: 'sex'
            }, {
              title: '单位',
              prop: 'org'
            }, {
              title: '简介',
              prop: 'des'
            }, {
              title: '操作',
              slotName: 'handle',
              align: 'center'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "table-scroll",
        style: {
          "height": "200px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData,
          "fixed-header": ""
        }, {
          tableIndex: _withCtx(function (_ref14) {
            var row = _ref14.row;
            return [_createVNode("span", null, _toDisplayString(row.rowIndex + 1), 1)];
          }),
          handle: _withCtx(function (_ref15) {
            var row = _ref15.row;
            return [_createVNode(_component_hl_button, {
              type: "link"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["cols", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！'
            }],
            // 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
            cols: [{
              title: '序号',
              prop: '',
              slotName: 'tableIndex'
            }, {
              title: '姓名',
              prop: 'name',
              showTooltip: true
            }, {
              title: '性别',
              prop: 'sex'
            }, {
              title: '描述',
              prop: 'des',
              showTooltip: true
            }, {
              title: '单位',
              prop: 'org',
              showTooltip: true
            }, {
              title: '操作',
              prop: '',
              slotName: 'handle',
              align: 'center'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "table-scroll"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_hl_simple_table, {
          cols: _ctx.cols,
          data: _ctx.tableData
        }, {
          tableIndex: _withCtx(function (_ref16) {
            var row = _ref16.row;
            return [_createVNode("span", null, _toDisplayString(row.rowIndex + 1), 1)];
          }),
          handle: _withCtx(function (_ref17) {
            var row = _ref17.row;
            return [_createVNode(_component_hl_button, {
              type: "link"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["cols", "data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！'
            }],
            // 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
            cols: [{
              title: '序号',
              prop: '',
              slotName: 'tableIndex',
              fixed: 'left'
            }, {
              title: '姓名',
              prop: 'name',
              showTooltip: true,
              width: '150px'
            }, {
              title: '性别',
              prop: 'sex',
              width: '150px'
            }, {
              title: '描述',
              prop: 'des',
              showTooltip: true,
              width: '500px'
            }, {
              title: '单位',
              prop: 'org',
              showTooltip: true,
              fixed: 'right'
            }, {
              title: '操作',
              prop: '',
              slotName: 'handle',
              align: 'center',
              fixed: 'right'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("修改");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_simple_table = _resolveComponent("hl-simple-table");

        var _component_hl_scrollbar = _resolveComponent("hl-scrollbar");

        return _openBlock(), _createBlock(_component_hl_scrollbar, {
          height: "200px"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_simple_table, {
              cols: _ctx.cols,
              data: _ctx.tableData,
              "fixed-header": ""
            }, {
              tableIndex: _withCtx(function (_ref18) {
                var row = _ref18.row;
                return [_createVNode("span", null, _toDisplayString(row.rowIndex + 1), 1)];
              }),
              handle: _withCtx(function (_ref19) {
                var row = _ref19.row;
                return [_createVNode(_component_hl_button, {
                  type: "link"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["cols", "data"])];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              name: '王二麻子',
              sex: '男',
              org: '中国系统',
              des: '来自中国南方的温暖城市！'
            }, {
              id: 2,
              name: '李四',
              sex: '男',
              org: '中国系统',
              des: '来自中国'
            }, {
              id: 3,
              name: '张三',
              sex: '男',
              org: '中国系统',
              des: '来自中国北方的寒冷的城市！'
            }],
            // 序号 slot名称唯一 tableIndex。 width: 设置宽度。align: 对齐方式。showTooltip: td是否一行显示,超出tooptip
            cols: [{
              title: '序号',
              prop: '',
              slotName: 'tableIndex',
              fixed: 'left'
            }, {
              title: '姓名',
              prop: 'name',
              showTooltip: true,
              width: '150px'
            }, {
              title: '性别',
              prop: 'sex',
              width: '150px'
            }, {
              title: '描述',
              prop: 'des',
              showTooltip: true,
              width: '500px'
            }, {
              title: '单位',
              prop: 'org',
              showTooltip: true,
              fixed: 'right'
            }, {
              title: '操作',
              prop: '',
              slotName: 'handle',
              align: 'center',
              fixed: 'right'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/simple-table.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/simple-table.md



simple_tablevue_type_script_lang_ts.render = simple_tablevue_type_template_id_3aed7062_render

/* harmony default export */ var simple_table = __webpack_exports__["default"] = (simple_tablevue_type_script_lang_ts);

/***/ })

}]);