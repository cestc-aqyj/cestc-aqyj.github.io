(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/selector.md?vue&type=template&id=3c436f30

var selectorvue_type_template_id_3c436f30_hoisted_1 = {
  class: "doc-main-content"
};
var selectorvue_type_template_id_3c436f30_hoisted_2 = {
  class: "doc-content"
};

var selectorvue_type_template_id_3c436f30_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Selector 选择器", -1);

var selectorvue_type_template_id_3c436f30_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "下拉选择器，自定义下拉框内容，实现单选以及多选效果。", -1);

var selectorvue_type_template_id_3c436f30_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "下拉选择器配合树组件实现下拉单选树节点以及输入过滤功能。")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row justify=\"center\" gap=\"xl\">\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>下拉树单选+过滤</p>\n    <hl-selector\n      ref=\"selector1\"\n      filterable\n      clearable\n      block\n      @input=\"handleTreeInput\"\n      @clear=\"handleTreeInput('')\"\n      @resize=\"resize\"\n    >\n      <template #prefix>\n        <hl-icon name=\"Point\" />\n      </template>\n      <hl-tree\n        ref=\"hlTreeSingle\"\n        :style=\"treeStyle\"\n        node-key=\"value\"\n        :data=\"options\"\n        :filter-node-method=\"filterNode\"\n        @node-click=\"clickTree\"\n      />\n    </hl-selector>\n  </hl-col>\n  <hl-col span=\"col-md-12 col-lg-10\">\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        treeStyle: {},\n        options: [{\n          value: 'zhinan',\n          label: '指南',\n          children: [{\n            value: 'shejiyuanze',\n            label: '设计原则',\n            children: [{\n              value: 'yizhi',\n              label: '一致',\n            }, {\n              value: 'fankui',\n              label: '反馈'\n            }, {\n              value: 'xiaolv',\n              label: '效率'\n            }, {\n              value: 'kekong',\n              label: '可控'\n            }]\n          }, {\n            value: 'daohang',\n            label: '导航',\n            children: [{\n              value: 'cexiangdaohang',\n              label: '侧向导航'\n            }, {\n              value: 'dingbudaohang',\n              label: '顶部导航'\n            }]\n          }]\n        }, {\n          value: 'zujian',\n          label: '组件',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout 布局'\n            }, {\n              value: 'color',\n              label: 'Color 色彩'\n            }, {\n              value: 'typography',\n              label: 'Typography 字体'\n            }, {\n              value: 'icon',\n              label: 'Icon 图标'\n            }, {\n              value: 'button',\n              label: 'Button 按钮'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio 单选框'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox 复选框'\n            }, {\n              value: 'input',\n              label: 'Input 输入框'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber 计数器'\n            }, {\n              value: 'select',\n              label: 'Select 选择器'\n            }, {\n              value: 'cascader',\n              label: 'Cascader 级联选择器'\n            }, {\n              value: 'switch',\n              label: 'Switch 开关'\n            }, {\n              value: 'slider',\n              label: 'Slider 滑块'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker 时间选择器'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker 日期选择器'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker 日期时间选择器'\n            }, {\n              value: 'upload',\n              label: 'Upload 上传'\n            }, {\n              value: 'rate',\n              label: 'Rate 评分'\n            }, {\n              value: 'form',\n              label: 'Form 表单'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table 表格'\n            }, {\n              value: 'tag',\n              label: 'Tag 标签'\n            }, {\n              value: 'progress',\n              label: 'Progress 进度条'\n            }, {\n              value: 'tree',\n              label: 'Tree 树形控件'\n            }, {\n              value: 'pagination',\n              label: 'Pagination 分页'\n            }, {\n              value: 'badge',\n              label: 'Badge 徽章'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert 警告'\n            }, {\n              value: 'loading',\n              label: 'Loading 加载'\n            }, {\n              value: 'message',\n              label: 'Message 消息提示'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox 弹框'\n            }, {\n              value: 'notification',\n              label: 'Notification 通知'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu 导航菜单'\n            }, {\n              value: 'tabs',\n              label: 'Tabs 标签页'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb 面包屑'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown 下拉菜单'\n            }, {\n              value: 'steps',\n              label: 'Steps 步骤条'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog 对话框'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip 文字提示'\n            }, {\n              value: 'popover',\n              label: 'Popover 弹出框'\n            }, {\n              value: 'card',\n              label: 'Card 卡片'\n            }, {\n              value: 'carousel',\n              label: 'Carousel 走马灯'\n            }, {\n              value: 'collapse',\n              label: 'Collapse 折叠面板'\n            }]\n          }]\n        }, {\n          value: 'ziyuan',\n          label: '资源',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'jiaohu',\n            label: '组件交互文档'\n          }]\n        }]\n      };\n    },\n    methods: {\n      resize({offsetWidth}) {\n        this.treeStyle.width = offsetWidth + 'px'\n      },\n      clickTree(data) {\n        this.$refs.selector1.setValue(data.label)\n        this.$refs.hlTreeSingle.filter('')\n      },\n      filterNode(value, data) {\n        if (!value) return true\n        return data.label.indexOf(value) !== -1\n      },\n      handleTreeInput(val) {\n        this.$refs.hlTreeSingle.filter(val)\n      },\n    }\n  };\n</script>\n")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "下拉选择器配合树组件实现下拉多选树节点以及输入过滤功能。")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row justify=\"center\" gap=\"xl\">\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>下拉树多选</p>\n    <hl-selector\n      ref=\"selector2\"\n      clearable\n      filterable\n      block\n      multiple\n      @input=\"handleTreeInput\"\n      @remove-tag=\"removeTag\"\n      @clear=\"clearTags\"\n    >\n      <hl-scrollbar>\n        <hl-tree\n          ref=\"hlTree\"\n          node-key=\"value\"\n          show-checkbox\n          style=\"width: 300px; max-height:400px\"\n          :data=\"options\"\n          :filter-node-method=\"filterNode\"\n          @check-change=\"chooseTree\"\n        />\n      </hl-scrollbar>\n      <template #tag=\"{ tag }\">\n        <span>{{ tag.text.label }}</span>\n      </template>\n    </hl-selector>\n  </hl-col>\n  <hl-col span=\"col-md-12 col-lg-10\">\n      \n  </hl-col>\n</hl-row>\n<script>\n  export default {\n    data() {\n      return {\n        treeNodes: [],\n        options: [{\n          value: 'zhinan',\n          label: '指南',\n          children: [{\n            value: 'shejiyuanze',\n            label: '设计原则',\n            children: [{\n              value: 'yizhi',\n              label: '一致',\n            }, {\n              value: 'fankui',\n              label: '反馈'\n            }, {\n              value: 'xiaolv',\n              label: '效率'\n            }, {\n              value: 'kekong',\n              label: '可控'\n            }]\n          }, {\n            value: 'daohang',\n            label: '导航',\n            children: [{\n              value: 'cexiangdaohang',\n              label: '侧向导航'\n            }, {\n              value: 'dingbudaohang',\n              label: '顶部导航'\n            }]\n          }]\n        }, {\n          value: 'zujian',\n          label: '组件',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout 布局'\n            }, {\n              value: 'color',\n              label: 'Color 色彩'\n            }, {\n              value: 'typography',\n              label: 'Typography 字体'\n            }, {\n              value: 'icon',\n              label: 'Icon 图标'\n            }, {\n              value: 'button',\n              label: 'Button 按钮'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio 单选框'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox 复选框'\n            }, {\n              value: 'input',\n              label: 'Input 输入框'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber 计数器'\n            }, {\n              value: 'select',\n              label: 'Select 选择器'\n            }, {\n              value: 'cascader',\n              label: 'Cascader 级联选择器'\n            }, {\n              value: 'switch',\n              label: 'Switch 开关'\n            }, {\n              value: 'slider',\n              label: 'Slider 滑块'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker 时间选择器'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker 日期选择器'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker 日期时间选择器'\n            }, {\n              value: 'upload',\n              label: 'Upload 上传'\n            }, {\n              value: 'rate',\n              label: 'Rate 评分'\n            }, {\n              value: 'form',\n              label: 'Form 表单'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table 表格'\n            }, {\n              value: 'tag',\n              label: 'Tag 标签'\n            }, {\n              value: 'progress',\n              label: 'Progress 进度条'\n            }, {\n              value: 'tree',\n              label: 'Tree 树形控件'\n            }, {\n              value: 'pagination',\n              label: 'Pagination 分页'\n            }, {\n              value: 'badge',\n              label: 'Badge 徽章'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert 警告'\n            }, {\n              value: 'loading',\n              label: 'Loading 加载'\n            }, {\n              value: 'message',\n              label: 'Message 消息提示'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox 弹框'\n            }, {\n              value: 'notification',\n              label: 'Notification 通知'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu 导航菜单'\n            }, {\n              value: 'tabs',\n              label: 'Tabs 标签页'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb 面包屑'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown 下拉菜单'\n            }, {\n              value: 'steps',\n              label: 'Steps 步骤条'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog 对话框'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip 文字提示'\n            }, {\n              value: 'popover',\n              label: 'Popover 弹出框'\n            }, {\n              value: 'card',\n              label: 'Card 卡片'\n            }, {\n              value: 'carousel',\n              label: 'Carousel 走马灯'\n            }, {\n              value: 'collapse',\n              label: 'Collapse 折叠面板'\n            }]\n          }]\n        }, {\n          value: 'ziyuan',\n          label: '资源',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'jiaohu',\n            label: '组件交互文档'\n          }]\n        }]\n      };\n    },\n    methods: {\n      removeTag(tag) {\n        this.treeNodes = this.treeNodes.filter(n => n !== tag.text)\n        this.$refs.hlTree.setCheckedNodes(this.treeNodes)\n      },\n      clearTags() {\n        this.treeNodes = []\n        this.$refs.hlTree.setCheckedNodes(this.treeNodes)\n      },\n      filterNode(value, data) {\n        if (!value) return true\n        return data.label.indexOf(value) !== -1\n      },\n      handleTreeInput(val) {\n        this.$refs.hlTree.filter(val)\n      },\n      chooseTree() {\n        this.treeNodes = this.$refs.hlTree.getCheckedNodes();\n        this.$refs.selector2.setValue(this.treeNodes);\n      }\n    }\n  };\n</script>\n")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "下拉选择器配合表格实现表格选择。")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row justify=\"center\" gap=\"xl\">\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>下拉表格多选</p>\n    <hl-selector\n      ref=\"selectorTable\"\n      clearable\n      block\n      multiple\n      size=\"sm\"\n      @remove-tag=\"handleTableInput\"\n      @clear=\"handleTableInput('')\"\n    >\n    <template #prefix>\n        <hl-icon name=\"Point\" />\n      </template>\n      <hl-table\n        ref=\"multipleTable\"\n        :data=\"tableData\"\n        tooltip-effect=\"dark\"\n        style=\"width: 100%\"\n        @selection-change=\"handleSelectionChange\"\n      >\n        <hl-table-column type=\"selection\" width=\"55\"> </hl-table-column>\n        <hl-table-column prop=\"name\" label=\"姓名\" width=\"120\"> </hl-table-column>\n        <hl-table-column prop=\"tel\" label=\"电话\" show-overflow-tooltip>\n        </hl-table-column>\n      </hl-table>\n    </hl-selector>\n  </hl-col>\n  <hl-col span=\"col-md-12 col-lg-10\">\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            name: '王小虎',\n            tel: '16787812234',\n          },\n          {\n            name: '王2虎',\n            tel: '17787812234',\n          },\n          {\n            name: '王3虎',\n            tel: '18787812234',\n          },\n          {\n            name: '王4虎',\n            tel: '19787812234',\n          },\n          {\n            name: '王5虎',\n            tel: '10787812234',\n          },\n          {\n            name: '王6虎',\n            tel: '11787812234',\n          },\n          {\n            name: '王7虎',\n            tel: '12787812234',\n          },\n        ],\n        multipleSelection: [],\n      };\n    },\n    methods: {\n      resize({offsetWidth}) {\n        this.$refs.multipleTable.$el.style.width = 100 + offsetWidth + 'px'\n      },\n      handleSelectionChange(val) {\n        this.multipleSelection = val\n        this.$refs.selectorTable.setValue(this.multipleSelection.map(s => s.name))\n      },\n      handleTableInput(tag) {\n        if (tag === '') {\n          this.$refs.multipleTable.clearSelection()\n        } else {\n          this.$refs.multipleTable.toggleRowSelection(this.tableData.find(d => d.name === tag.text))\n        }\n      },\n    }\n  };\n</script>\n")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "实现自定义选择内容，下面一图片以及视频为例。")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row justify=\"center\" gap=\"xl\">\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>自定义多选Icon</p>\n    <hl-selector\n      ref=\"selector3\"\n      clearable\n      block\n      multiple\n      @remove-tag=\"removeIcon\"\n      @clear=\"clearIcons\"\n      @resize=\"input => resize(input, 'selector3')\"\n    >\n      <ul class=\"icon-list clearfix selector-content\" ref=\"selector3Dom\" @click=\"selectIcon\">\n        <li title=\"😀笑嘻嘻\"><span>😀</span></li>\n        <li title=\"😁笑嘻嘻的脸，含笑的眼睛\"><span>😁</span></li>\n        <li title=\"😂脸上带着喜悦的泪水\"><span>😂</span></li>\n        <li title=\"😃开口笑脸\"><span>😃</span></li>\n        <li title=\"😄开口笑脸和微笑的眼睛\"><span>😄</span></li>\n        <li title=\"😅笑脸淌冷汗\"><span>😅</span></li>\n        <li title=\"😆开口笑紧闭的眼睛\"><span>😆</span></li>\n        <li title=\"😉眨眼表情\"><span>😉</span></li>\n        <li title=\"😊面带微笑的眼睛\"><span>😊</span></li>\n        <li title=\"😋品尝美味食物表情\"><span>😋</span></li>\n        <li title=\"😎太阳镜笑脸\"><span>😎</span></li>\n        <li title=\"😍面带心形眼睛\"><span>😍</span></li>\n        <li title=\"😘飞吻表情\"><span>😘</span></li>\n        <li title=\"😗亲吻表情\"><span>😗</span></li>\n        <li title=\"😙含笑亲吻表情\"><span>😙</span></li>\n        <li title=\"😚闭眼亲吻表情\"><span>😚</span></li>\n        <li title=\"☺笑脸\"><span>☺</span></li>\n        <li title=\"😇光环笑脸\"><span>😇</span></li>\n        <li title=\"😐中性面\"><span>😐</span></li>\n        <li title=\"😑面无表情\"><span>😑</span></li>\n        <li title=\"😶没有嘴的脸\"><span>😶</span></li>\n        <li><span>😏</span></li>\n        <li><span>😣</span></li>\n        <li><span>😥</span></li>\n        <li><span>😮</span></li>\n        <li><span>😯</span></li>\n        <li title=\"😪困\"><span>😪</span></li>\n        <li><span>😫</span></li>\n        <li><span>😴</span></li>\n        <li title=\"😌安心\"><span>😌</span></li>\n        <li title=\"😛吐舌头\"><span>😛</span></li>\n        <li><span>😜</span></li>\n        <li><span>😝</span></li>\n        <li><span>😒</span></li>\n        <li><span>😓</span></li>\n        <li><span>😔</span></li>\n        <li><span>😕</span></li>\n        <li title=\"😲惊讶\"><span>😲</span></li>\n        <li title=\"😷戴口罩\"><span>😷</span></li>\n        <li title=\"😖被打败\"><span>😖</span></li>\n        <li><span>😞</span></li>\n        <li><span>😟</span></li>\n        <li title=\"😤面带胜利\"><span>😤</span></li>\n        <li title=\"😢哭泣的脸\"><span>😢</span></li>\n        <li title=\"😭大声哭泣的脸\"><span>😭</span></li>\n        <li title=\"😦张嘴哭\"><span>😦</span></li>\n        <li title=\"😧痛苦\"><span>😧</span></li>\n        <li title=\"😨恐惧\"><span>😨</span></li>\n        <li><span>😬</span></li>\n        <li title=\"😰淌冷汗\"><span>😰</span></li>\n        <li title=\"😱尖叫恐惧\"><span>😱</span></li>\n        <li title=\"😳红扑扑的脸蛋\"><span>😳</span></li>\n        <li title=\"😵晕\"><span>😵</span></li>\n        <li><span>😡</span></li>\n        <li><span>😠</span></li>\n        <li><span>😈</span></li>\n        <li><span>👿</span></li>\n        <li title=\"👹日本食人魔\"><span>👹</span></li>\n        <li><span>👺</span></li>\n        <li><span>💀</span></li>\n        <li><span>☠</span></li>\n        <li><span>👻</span></li>\n        <li><span>👽</span></li>\n      </ul>\n      <template #tag=\"{ tag }\">\n        <span v-html=\"tag.text\" style=\"width: 22px\"></span>\n      </template>\n    </hl-selector>\n  </hl-col>\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>自定义多选视频</p>\n    <hl-selector\n      ref=\"selector4\"\n      clearable\n      block\n      multiple\n      @remove-tag=\"removeVideo\"\n      @clear=\"clearVideos\"\n      @resize=\"input => resize(input, 'selector4')\"\n    >\n      <div ref=\"selector4Dom\" class=\"selector-content video-list clearfix\">\n        <video\n          v-for=\"url in videoUrls\"\n          width=\"120\"\n          height=\"100\"\n          :key=\"url\"\n          :src=\"url\"\n          @click.stop=\"chooseVideo(url)\"\n        >\n        </video>\n      </div>\n      <template #tag=\"{ tag }\">\n        <video\n          width=\"100\"\n          height=\"100\"\n          style=\"object-fit:cover\"\n          :src=\"tag.text\"\n          controls=\"controls\"\n        >\n        </video>\n      </template>\n    </hl-selector>\n  </hl-col>\n</hl-row>\n<script>\n  export default {\n    data() {\n      return {\n        icons: [],\n        videos: [],\n        videoUrls: [\n          'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',\n          'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',\n          'https://v-cdn.zjol.com.cn/276998.mp4',\n          'https://v-cdn.zjol.com.cn/277003.mp4',\n          'https://v-cdn.zjol.com.cn/277000.mp4',\n          'https://v-cdn.zjol.com.cn/277001.mp4',\n          'https://v-cdn.zjol.com.cn/277002.mp4',\n        ],\n      };\n    },\n    methods: {\n      resize({offsetWidth}, which) {\n        this.$refs[which + 'Dom'].style.width = offsetWidth + 'px'\n      },\n      selectIcon(evt) {\n        console.log(evt)\n        if (evt.target.tagName.toUpperCase() === 'SPAN') {\n          if (!this.icons.includes(evt.target.innerHTML)) {\n            this.icons.push(evt.target.innerHTML)\n          }\n          this.$refs.selector3.setValue(this.icons)\n        }\n      },\n      chooseIcon(name) {\n        if (!this.icons.includes(name)) {\n          this.icons.push(name)\n        }\n        this.$refs.selector3.setValue(this.icons)\n      },\n      clearIcons() {\n        this.icons = []\n      },\n      removeIcon(tag) {\n        this.icons = this.icons.filter(i => i !== tag.text)\n      },\n      chooseVideo(name) {\n        if (!this.videos.includes(name)) {\n          this.videos.push(name)\n        }\n        this.$refs.selector4.setValue(this.videos)\n      },\n      clearVideos() {\n        this.videos = []\n      },\n      removeVideo(tag) {\n        this.videos = this.videos.filter(i => i !== tag.text)\n      },\n    }\n  };\n</script>\n")], -1);

var selectorvue_type_template_id_3c436f30_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<div class=\"tip\"><p>下拉框的宽度需要自定设置，默认会有一个最小宽度。但可以用resize事件参数中的input宽度为参考值进行设置，也可以设置固定宽度。</p></div><div class=\"tip\"><p>自定义tag slot参数为{ tag }，tag数据类型为: <code>{key: string, text: unknown}</code>。当tag折叠时，key值为&#39;-1&#39;；其余tag key值为随机数字。text值为setValue方法传入的任意参数。</p></div><div class=\"tip\"><p>选择器并不负责处理Form表单的验证事件，需用户自定义处理</p></div><h3 id=\"selector-attributes\"><a class=\"header-anchor\" href=\"#selector-attributes\"></a> Selector Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td>string</td><td>md / lg / xs</td><td>md</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>是否支持清空选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-all-levels</td><td>输入框中是否显示选中值的完整路径</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>collapse-tags</td><td>多选模式下是否折叠Tag</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>separator</td><td>选项分隔符</td><td>string</td><td>—</td><td>斜杠&#39; / &#39;</td></tr><tr><td>filterable</td><td>是否可搜索选项</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>自定义浮层类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>block</td><td>是否拉伸至父容器宽度</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>input-style</td><td>input元素的style</td><td>object</td><td>-</td><td>{}</td></tr><tr><td>placement</td><td>下拉框弹出位置</td><td>string</td><td>参考popover</td><td>bottom-start</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h3 id=\"selector-events\"><a class=\"header-anchor\" href=\"#selector-events\"></a> Selector Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>blur</td><td>当失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>当获得焦点时触发</td><td>(event: Event)</td></tr><tr><td>input</td><td>可搜索时用户输入内容</td><td>输入的内容</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr><tr><td>popper-visible</td><td>下拉框出现时触发，后于visible-change触发</td><td></td></tr><tr><td>remove-tag</td><td>在多选模式下，移除Tag时触发</td><td>移除的Tag对应的节点的值</td></tr><tr><td>clear</td><td>点击清除icon时触发</td><td></td></tr><tr><td>resize</td><td>更新弹框样式时触发</td><td>内部input框节点</td></tr><tr><td>after-leave</td><td>弹框关闭时触发</td><td></td></tr><tr><td>keyboard-down</td><td>点击键盘向下箭头时触发，可以在这个事件中对下拉框中的某个进行focus</td><td></td></tr></tbody></table><h3 id=\"selector-methods\"><a class=\"header-anchor\" href=\"#selector-methods\"></a> Selector Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setValue</td><td>设置选择器内容</td><td>val 可以为任意类型或者任意数组类型。为数组时，自动切换成多选模式</td></tr><tr><td>togglePopperVisible</td><td>切换下拉框显示或者隐藏</td><td>visible（true/false），可选</td></tr></tbody></table><h3 id=\"selector-slots\"><a class=\"header-anchor\" href=\"#selector-slots\"></a> Selector Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>自定义下拉框内容</td></tr><tr><td>tag</td><td>自定义多选tag显示，参数为{ tag }，setValue传入的内容</td></tr><tr><td>prefix</td><td>自定义前缀</td></tr></tbody></table>", 11);

function selectorvue_type_template_id_3c436f30_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", selectorvue_type_template_id_3c436f30_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", selectorvue_type_template_id_3c436f30_hoisted_2, [selectorvue_type_template_id_3c436f30_hoisted_3, selectorvue_type_template_id_3c436f30_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_7];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_9];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [selectorvue_type_template_id_3c436f30_hoisted_11];
    }),
    _: 1
  }), selectorvue_type_template_id_3c436f30_hoisted_13]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/selector.md?vue&type=template&id=3c436f30

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/selector.md?vue&type=script&lang=ts


/* harmony default export */ var selectorvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "下拉树单选+过滤", -1);

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_tree = _resolveComponent("hl-tree");

        var _component_hl_selector = _resolveComponent("hl-selector");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          justify: "center",
          gap: "xl"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_selector, {
                  ref: "selector1",
                  filterable: "",
                  clearable: "",
                  block: "",
                  onInput: _ctx.handleTreeInput,
                  onClear: _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.handleTreeInput('');
                  }),
                  onResize: _ctx.resize
                }, {
                  prefix: _withCtx(function () {
                    return [_createVNode(_component_hl_icon, {
                      name: "Point"
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_tree, {
                      ref: "hlTreeSingle",
                      style: _ctx.treeStyle,
                      "node-key": "value",
                      data: _ctx.options,
                      "filter-node-method": _ctx.filterNode,
                      onNodeClick: _ctx.clickTree
                    }, null, 8, ["style", "data", "filter-node-method", "onNodeClick"])];
                  }),
                  _: 1
                }, 8, ["onInput", "onResize"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            treeStyle: {},
            options: [{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 复选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 徽章'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
              }]
            }]
          };
        },
        methods: {
          resize: function resize(_ref) {
            var offsetWidth = _ref.offsetWidth;
            this.treeStyle.width = offsetWidth + 'px';
          },
          clickTree: function clickTree(data) {
            this.$refs.selector1.setValue(data.label);
            this.$refs.hlTreeSingle.filter('');
          },
          filterNode: function filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          },
          handleTreeInput: function handleTreeInput(val) {
            this.$refs.hlTreeSingle.filter(val);
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
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "下拉树多选", -1);

      function render(_ctx, _cache) {
        var _component_hl_tree = _resolveComponent("hl-tree");

        var _component_hl_scrollbar = _resolveComponent("hl-scrollbar");

        var _component_hl_selector = _resolveComponent("hl-selector");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          justify: "center",
          gap: "xl"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_selector, {
                  ref: "selector2",
                  clearable: "",
                  filterable: "",
                  block: "",
                  multiple: "",
                  onInput: _ctx.handleTreeInput,
                  onRemoveTag: _ctx.removeTag,
                  onClear: _ctx.clearTags
                }, {
                  tag: _withCtx(function (_ref2) {
                    var tag = _ref2.tag;
                    return [_createVNode("span", null, _toDisplayString(tag.text.label), 1)];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_scrollbar, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_tree, {
                          ref: "hlTree",
                          "node-key": "value",
                          "show-checkbox": "",
                          style: {
                            "width": "300px",
                            "max-height": "400px"
                          },
                          data: _ctx.options,
                          "filter-node-method": _ctx.filterNode,
                          onCheckChange: _ctx.chooseTree
                        }, null, 8, ["data", "filter-node-method", "onCheckChange"])];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onInput", "onRemoveTag", "onClear"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            treeNodes: [],
            options: [{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 复选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 徽章'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
              }]
            }]
          };
        },
        methods: {
          removeTag: function removeTag(tag) {
            this.treeNodes = this.treeNodes.filter(function (n) {
              return n !== tag.text;
            });
            this.$refs.hlTree.setCheckedNodes(this.treeNodes);
          },
          clearTags: function clearTags() {
            this.treeNodes = [];
            this.$refs.hlTree.setCheckedNodes(this.treeNodes);
          },
          filterNode: function filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          },
          handleTreeInput: function handleTreeInput(val) {
            this.$refs.hlTree.filter(val);
          },
          chooseTree: function chooseTree() {
            this.treeNodes = this.$refs.hlTree.getCheckedNodes();
            this.$refs.selector2.setValue(this.treeNodes);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "下拉表格多选", -1);

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_table_column = _resolveComponent("hl-table-column");

        var _component_hl_table = _resolveComponent("hl-table");

        var _component_hl_selector = _resolveComponent("hl-selector");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          justify: "center",
          gap: "xl"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_selector, {
                  ref: "selectorTable",
                  clearable: "",
                  block: "",
                  multiple: "",
                  size: "sm",
                  onRemoveTag: _ctx.handleTableInput,
                  onClear: _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.handleTableInput('');
                  })
                }, {
                  prefix: _withCtx(function () {
                    return [_createVNode(_component_hl_icon, {
                      name: "Point"
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_table, {
                      ref: "multipleTable",
                      data: _ctx.tableData,
                      "tooltip-effect": "dark",
                      style: {
                        "width": "100%"
                      },
                      onSelectionChange: _ctx.handleSelectionChange
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_table_column, {
                          type: "selection",
                          width: "55"
                        }), _createVNode(_component_hl_table_column, {
                          prop: "name",
                          label: "姓名",
                          width: "120"
                        }), _createVNode(_component_hl_table_column, {
                          prop: "tel",
                          label: "电话",
                          "show-overflow-tooltip": ""
                        })];
                      }),
                      _: 1
                    }, 8, ["data", "onSelectionChange"])];
                  }),
                  _: 1
                }, 8, ["onRemoveTag"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              name: '王小虎',
              tel: '16787812234'
            }, {
              name: '王2虎',
              tel: '17787812234'
            }, {
              name: '王3虎',
              tel: '18787812234'
            }, {
              name: '王4虎',
              tel: '19787812234'
            }, {
              name: '王5虎',
              tel: '10787812234'
            }, {
              name: '王6虎',
              tel: '11787812234'
            }, {
              name: '王7虎',
              tel: '12787812234'
            }],
            multipleSelection: []
          };
        },
        methods: {
          resize: function resize(_ref3) {
            var offsetWidth = _ref3.offsetWidth;
            this.$refs.multipleTable.$el.style.width = 100 + offsetWidth + 'px';
          },
          handleSelectionChange: function handleSelectionChange(val) {
            this.multipleSelection = val;
            this.$refs.selectorTable.setValue(this.multipleSelection.map(function (s) {
              return s.name;
            }));
          },
          handleTableInput: function handleTableInput(tag) {
            if (tag === '') {
              this.$refs.multipleTable.clearSelection();
            } else {
              this.$refs.multipleTable.toggleRowSelection(this.tableData.find(function (d) {
                return d.name === tag.text;
              }));
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _withModifiers = vue_esm_browser_prod["hb" /* withModifiers */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "自定义多选Icon", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("li", {
        title: "😀笑嘻嘻"
      }, [/*#__PURE__*/_createVNode("span", null, "😀")], -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("li", {
        title: "😁笑嘻嘻的脸，含笑的眼睛"
      }, [/*#__PURE__*/_createVNode("span", null, "😁")], -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("li", {
        title: "😂脸上带着喜悦的泪水"
      }, [/*#__PURE__*/_createVNode("span", null, "😂")], -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("li", {
        title: "😃开口笑脸"
      }, [/*#__PURE__*/_createVNode("span", null, "😃")], -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("li", {
        title: "😄开口笑脸和微笑的眼睛"
      }, [/*#__PURE__*/_createVNode("span", null, "😄")], -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("li", {
        title: "😅笑脸淌冷汗"
      }, [/*#__PURE__*/_createVNode("span", null, "😅")], -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("li", {
        title: "😆开口笑紧闭的眼睛"
      }, [/*#__PURE__*/_createVNode("span", null, "😆")], -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("li", {
        title: "😉眨眼表情"
      }, [/*#__PURE__*/_createVNode("span", null, "😉")], -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("li", {
        title: "😊面带微笑的眼睛"
      }, [/*#__PURE__*/_createVNode("span", null, "😊")], -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("li", {
        title: "😋品尝美味食物表情"
      }, [/*#__PURE__*/_createVNode("span", null, "😋")], -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("li", {
        title: "😎太阳镜笑脸"
      }, [/*#__PURE__*/_createVNode("span", null, "😎")], -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("li", {
        title: "😍面带心形眼睛"
      }, [/*#__PURE__*/_createVNode("span", null, "😍")], -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("li", {
        title: "😘飞吻表情"
      }, [/*#__PURE__*/_createVNode("span", null, "😘")], -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("li", {
        title: "😗亲吻表情"
      }, [/*#__PURE__*/_createVNode("span", null, "😗")], -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("li", {
        title: "😙含笑亲吻表情"
      }, [/*#__PURE__*/_createVNode("span", null, "😙")], -1);

      var _hoisted_17 = /*#__PURE__*/_createVNode("li", {
        title: "😚闭眼亲吻表情"
      }, [/*#__PURE__*/_createVNode("span", null, "😚")], -1);

      var _hoisted_18 = /*#__PURE__*/_createVNode("li", {
        title: "☺笑脸"
      }, [/*#__PURE__*/_createVNode("span", null, "☺")], -1);

      var _hoisted_19 = /*#__PURE__*/_createVNode("li", {
        title: "😇光环笑脸"
      }, [/*#__PURE__*/_createVNode("span", null, "😇")], -1);

      var _hoisted_20 = /*#__PURE__*/_createVNode("li", {
        title: "😐中性面"
      }, [/*#__PURE__*/_createVNode("span", null, "😐")], -1);

      var _hoisted_21 = /*#__PURE__*/_createVNode("li", {
        title: "😑面无表情"
      }, [/*#__PURE__*/_createVNode("span", null, "😑")], -1);

      var _hoisted_22 = /*#__PURE__*/_createVNode("li", {
        title: "😶没有嘴的脸"
      }, [/*#__PURE__*/_createVNode("span", null, "😶")], -1);

      var _hoisted_23 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😏")], -1);

      var _hoisted_24 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😣")], -1);

      var _hoisted_25 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😥")], -1);

      var _hoisted_26 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😮")], -1);

      var _hoisted_27 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😯")], -1);

      var _hoisted_28 = /*#__PURE__*/_createVNode("li", {
        title: "😪困"
      }, [/*#__PURE__*/_createVNode("span", null, "😪")], -1);

      var _hoisted_29 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😫")], -1);

      var _hoisted_30 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😴")], -1);

      var _hoisted_31 = /*#__PURE__*/_createVNode("li", {
        title: "😌安心"
      }, [/*#__PURE__*/_createVNode("span", null, "😌")], -1);

      var _hoisted_32 = /*#__PURE__*/_createVNode("li", {
        title: "😛吐舌头"
      }, [/*#__PURE__*/_createVNode("span", null, "😛")], -1);

      var _hoisted_33 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😜")], -1);

      var _hoisted_34 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😝")], -1);

      var _hoisted_35 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😒")], -1);

      var _hoisted_36 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😓")], -1);

      var _hoisted_37 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😔")], -1);

      var _hoisted_38 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😕")], -1);

      var _hoisted_39 = /*#__PURE__*/_createVNode("li", {
        title: "😲惊讶"
      }, [/*#__PURE__*/_createVNode("span", null, "😲")], -1);

      var _hoisted_40 = /*#__PURE__*/_createVNode("li", {
        title: "😷戴口罩"
      }, [/*#__PURE__*/_createVNode("span", null, "😷")], -1);

      var _hoisted_41 = /*#__PURE__*/_createVNode("li", {
        title: "😖被打败"
      }, [/*#__PURE__*/_createVNode("span", null, "😖")], -1);

      var _hoisted_42 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😞")], -1);

      var _hoisted_43 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😟")], -1);

      var _hoisted_44 = /*#__PURE__*/_createVNode("li", {
        title: "😤面带胜利"
      }, [/*#__PURE__*/_createVNode("span", null, "😤")], -1);

      var _hoisted_45 = /*#__PURE__*/_createVNode("li", {
        title: "😢哭泣的脸"
      }, [/*#__PURE__*/_createVNode("span", null, "😢")], -1);

      var _hoisted_46 = /*#__PURE__*/_createVNode("li", {
        title: "😭大声哭泣的脸"
      }, [/*#__PURE__*/_createVNode("span", null, "😭")], -1);

      var _hoisted_47 = /*#__PURE__*/_createVNode("li", {
        title: "😦张嘴哭"
      }, [/*#__PURE__*/_createVNode("span", null, "😦")], -1);

      var _hoisted_48 = /*#__PURE__*/_createVNode("li", {
        title: "😧痛苦"
      }, [/*#__PURE__*/_createVNode("span", null, "😧")], -1);

      var _hoisted_49 = /*#__PURE__*/_createVNode("li", {
        title: "😨恐惧"
      }, [/*#__PURE__*/_createVNode("span", null, "😨")], -1);

      var _hoisted_50 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😬")], -1);

      var _hoisted_51 = /*#__PURE__*/_createVNode("li", {
        title: "😰淌冷汗"
      }, [/*#__PURE__*/_createVNode("span", null, "😰")], -1);

      var _hoisted_52 = /*#__PURE__*/_createVNode("li", {
        title: "😱尖叫恐惧"
      }, [/*#__PURE__*/_createVNode("span", null, "😱")], -1);

      var _hoisted_53 = /*#__PURE__*/_createVNode("li", {
        title: "😳红扑扑的脸蛋"
      }, [/*#__PURE__*/_createVNode("span", null, "😳")], -1);

      var _hoisted_54 = /*#__PURE__*/_createVNode("li", {
        title: "😵晕"
      }, [/*#__PURE__*/_createVNode("span", null, "😵")], -1);

      var _hoisted_55 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😡")], -1);

      var _hoisted_56 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😠")], -1);

      var _hoisted_57 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "😈")], -1);

      var _hoisted_58 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "👿")], -1);

      var _hoisted_59 = /*#__PURE__*/_createVNode("li", {
        title: "👹日本食人魔"
      }, [/*#__PURE__*/_createVNode("span", null, "👹")], -1);

      var _hoisted_60 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "👺")], -1);

      var _hoisted_61 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "💀")], -1);

      var _hoisted_62 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "☠")], -1);

      var _hoisted_63 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "👻")], -1);

      var _hoisted_64 = /*#__PURE__*/_createVNode("li", null, [/*#__PURE__*/_createVNode("span", null, "👽")], -1);

      var _hoisted_65 = /*#__PURE__*/_createVNode("p", null, "自定义多选视频", -1);

      var _hoisted_66 = {
        ref: "selector4Dom",
        class: "selector-content video-list clearfix"
      };

      function render(_ctx, _cache) {
        var _component_hl_selector = _resolveComponent("hl-selector");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          justify: "center",
          gap: "xl"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_selector, {
                  ref: "selector3",
                  clearable: "",
                  block: "",
                  multiple: "",
                  onRemoveTag: _ctx.removeIcon,
                  onClear: _ctx.clearIcons,
                  onResize: _cache[2] || (_cache[2] = function (input) {
                    return _ctx.resize(input, 'selector3');
                  })
                }, {
                  tag: _withCtx(function (_ref4) {
                    var tag = _ref4.tag;
                    return [_createVNode("span", {
                      innerHTML: tag.text,
                      style: {
                        "width": "22px"
                      }
                    }, null, 8, ["innerHTML"])];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode("ul", {
                      class: "icon-list clearfix selector-content",
                      ref: "selector3Dom",
                      onClick: _cache[1] || (_cache[1] = function () {
                        return _ctx.selectIcon && _ctx.selectIcon.apply(_ctx, arguments);
                      })
                    }, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62, _hoisted_63, _hoisted_64], 512)];
                  }),
                  _: 1
                }, 8, ["onRemoveTag", "onClear"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_65, _createVNode(_component_hl_selector, {
                  ref: "selector4",
                  clearable: "",
                  block: "",
                  multiple: "",
                  onRemoveTag: _ctx.removeVideo,
                  onClear: _ctx.clearVideos,
                  onResize: _cache[3] || (_cache[3] = function (input) {
                    return _ctx.resize(input, 'selector4');
                  })
                }, {
                  tag: _withCtx(function (_ref5) {
                    var tag = _ref5.tag;
                    return [_createVNode("video", {
                      width: "100",
                      height: "100",
                      style: {
                        "object-fit": "cover"
                      },
                      src: tag.text,
                      controls: "controls"
                    }, null, 8, ["src"])];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode("div", _hoisted_66, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.videoUrls, function (url) {
                      return _openBlock(), _createBlock("video", {
                        width: "120",
                        height: "100",
                        key: url,
                        src: url,
                        onClick: _withModifiers(function ($event) {
                          return _ctx.chooseVideo(url);
                        }, ["stop"])
                      }, null, 8, ["src", "onClick"]);
                    }), 128))], 512)];
                  }),
                  _: 1
                }, 8, ["onRemoveTag", "onClear"])];
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
            icons: [],
            videos: [],
            videoUrls: ['http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4', 'https://v-cdn.zjol.com.cn/276998.mp4', 'https://v-cdn.zjol.com.cn/277003.mp4', 'https://v-cdn.zjol.com.cn/277000.mp4', 'https://v-cdn.zjol.com.cn/277001.mp4', 'https://v-cdn.zjol.com.cn/277002.mp4']
          };
        },
        methods: {
          resize: function resize(_ref6, which) {
            var offsetWidth = _ref6.offsetWidth;
            this.$refs[which + 'Dom'].style.width = offsetWidth + 'px';
          },
          selectIcon: function selectIcon(evt) {
            console.log(evt);

            if (evt.target.tagName.toUpperCase() === 'SPAN') {
              if (!this.icons.includes(evt.target.innerHTML)) {
                this.icons.push(evt.target.innerHTML);
              }

              this.$refs.selector3.setValue(this.icons);
            }
          },
          chooseIcon: function chooseIcon(name) {
            if (!this.icons.includes(name)) {
              this.icons.push(name);
            }

            this.$refs.selector3.setValue(this.icons);
          },
          clearIcons: function clearIcons() {
            this.icons = [];
          },
          removeIcon: function removeIcon(tag) {
            this.icons = this.icons.filter(function (i) {
              return i !== tag.text;
            });
          },
          chooseVideo: function chooseVideo(name) {
            if (!this.videos.includes(name)) {
              this.videos.push(name);
            }

            this.$refs.selector4.setValue(this.videos);
          },
          clearVideos: function clearVideos() {
            this.videos = [];
          },
          removeVideo: function removeVideo(tag) {
            this.videos = this.videos.filter(function (i) {
              return i !== tag.text;
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/selector.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/selector.md



selectorvue_type_script_lang_ts.render = selectorvue_type_template_id_3c436f30_render

/* harmony default export */ var selector = __webpack_exports__["default"] = (selectorvue_type_script_lang_ts);

/***/ })

}]);