(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/upload.md?vue&type=template&id=52b54a24

var uploadvue_type_template_id_52b54a24_hoisted_1 = {
  class: "doc-main-content"
};
var uploadvue_type_template_id_52b54a24_hoisted_2 = {
  class: "doc-content"
};

var uploadvue_type_template_id_52b54a24_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Upload 上传", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "通过点击或者拖拽上传文件", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "limit"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("来限制上传文件的个数和定义超出限制时的行为。可通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("来阻止文件移除操作。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload style=\"width: 400px\" action=\"http://192.168.31.150/up/\" :on-preview=\"handlePreview\" :on-remove=\"handleRemove\" :before-remove=\"beforeRemove\" multiple :limit=\"5\" :on-exceed=\"handleExceed\" :file-list=\"fileList\">\n  <hl-button type=\"primary\" icon=\"upload\" icon-position=\"left\">点击上传</hl-button>\n  <template #tip>\n    <div class=\"text-danger m-t-sm\">只能上传 jpg/png 文件，且不超过 500kb</div>\n  </template>\n</hl-upload>\n\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)\n      },\n      beforeRemove(file, fileList) {\n        // alert(`确定移除 ${file.name}？`)\n        return confirm(`确定移除 ${file.name}？`)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yong-hu-tou-xiang-shang-chuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yong-hu-tou-xiang-shang-chuan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 用户头像上传")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 限制用户上传的图片格式和大小。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload action=\"http://192.168.31.150/up/\" :show-file-list=\"false\" :on-success=\"handleAvatarSuccess\" :before-upload=\"beforeAvatarUpload\">\n  <hl-thumb v-if=\"imageUrl\" round :src=\"imageUrl\" fit=\"cover\"></hl-thumb>\n  <hl-thumb v-else type=\"primary\" effect=\"light\" round>\n    <hl-icon name=\"upload\"></hl-icon>\n  </hl-thumb>\n</hl-upload>\n\n<script>\n  export default {\n    data() {\n      return {\n        imageUrl: '',\n      }\n    },\n    methods: {\n      handleAvatarSuccess(res, file) {\n        this.imageUrl = URL.createObjectURL(file.raw)\n      },\n      beforeAvatarUpload(file) {\n        const isJPG = file.type === 'image/jpeg'\n        const isLt2M = file.size / 1024 / 1024 < 2\n\n        if (!isJPG) {\n          alert('上传头像图片只能是 JPG 格式!')\n        }\n        if (!isLt2M) {\n          alert('上传头像图片大小不能超过 2MB!')\n        }\n        return isJPG && isLt2M\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zhao-pian-qiang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhao-pian-qiang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 照片墙")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来设置文件列表的样式。")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload action=\"http://192.168.31.150/up/\" list-type=\"card\" :on-preview=\"handlePictureCardPreview\" :on-remove=\"handleRemove\">\n  <hl-icon name=\"upload\"></hl-icon>\n</hl-upload>\n<hl-dialog title=\"查看图片\" modalClass=\"is-center\" :width=\"600\" v-model=\"dialogVisible\">\n  <hl-thumb :src=\"dialogImageUrl\" class=\"full\"></hl-thumb>\n</hl-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "wen-jian-suo-lue-tu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wen-jian-suo-lue-tu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 文件缩略图")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 去设置缩略图模版。")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload action=\"#\" list-type=\"card\" :auto-upload=\"false\">\n  <template #default>\n    <hl-icon name=\"Picture\" type=\"danger\" fill></hl-icon>\n  </template>\n  <template #file=\"{file}\">\n    <div>\n      <img class=\"item-thumb\" :src=\"file.url\" alt=\"\" />\n      <span class=\"item-actions\">\n        <span class=\"item-preview\" @click=\"handlePictureCardPreview(file)\">\n          <hl-icon name=\"zoomIn\"></hl-icon>\n        </span>\n        <span v-if=\"!disabled\" class=\"item-delete\" @click=\"handleDownload(file)\">\n          <hl-icon name=\"download\"></hl-icon>\n        </span>\n        <span v-if=\"!disabled\" class=\"item-delete\" @click=\"handleRemove(file)\">\n          <hl-icon name=\"delete\"></hl-icon>\n        </span>\n      </span>\n    </div>\n  </template>\n</hl-upload>\n<hl-dialog modalClass=\"is-center\" v-model=\"dialogVisible\">\n  <div style=\"width:300px;height:300px;\">\n    <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n  </div>\n</hl-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n        disabled: false,\n      }\n    },\n    methods: {\n      handleRemove(file) {\n        console.log(file)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n      handleDownload(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tu-pian-lie-biao-suo-lue-tu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-pian-lie-biao-suo-lue-tu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 图片列表缩略图")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload action=\"http://192.168.31.150/up/\" :on-preview=\"handlePreview\" :on-remove=\"handleRemove\" :file-list=\"fileList\" list-type=\"picture\">\n  <hl-button type=\"primary\" icon=\"upload\" icon-position=\"left\">点击上传</hl-button>\n  <template #tip>\n    <div class=\"text-danger m-t-sm\">只能上传 jpg/png 文件，且不超过 500kb</div>\n  </template>\n</hl-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "shang-chuan-wen-jian-lie-biao-kong-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shang-chuan-wen-jian-lie-biao-kong-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 上传文件列表控制")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 钩子函数来对列表进行控制")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload action=\"http://192.168.31.150/up/\" :on-change=\"handleChange\" :file-list=\"fileList\">\n  <hl-button type=\"primary\" icon=\"upload\" icon-position=\"left\">点击上传</hl-button>\n  <template #tip>\n    <div class=\"text-danger m-t-sm\">只能上传 jpg/png 文件，且不超过 500kb</div>\n  </template>\n</hl-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.fileList = fileList.slice(-3)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tuo-zhuai-shang-chuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tuo-zhuai-shang-chuan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 拖拽上传")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload drag action=\"http://192.168.31.150/up/\" multiple>\n  <hl-icon name=\"upload\" :border=\"1.2\"></hl-icon>\n  <div class=\"m-t-md\">将文件拖到此处，或 <em class=\"text-primary\">点击上传</em></div>\n</hl-upload>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "shou-dong-shang-chuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shou-dong-shang-chuan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 手动上传")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-upload ref=\"upload\" action=\"http://192.168.31.150/up/\" :on-preview=\"handlePreview\" :on-remove=\"handleRemove\" :file-list=\"fileList\" :auto-upload=\"false\">\n\n    <template #trigger>\n      <hl-button type=\"primary\">选取文件</hl-button>\n    </template>\n    <hl-button type=\"primary\" icon=\"server\" class=\"m-l-md\" effect=\"light\" @click=\"submitUpload\">上传到服务器</hl-button>\n  <template #tip>\n    <div class=\"text-danger m-t-sm\">只能上传 jpg/png 文件，且不超过 500kb</div>\n  </template>\n</hl-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      submitUpload() {\n        this.$refs.upload.submit()\n      },\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"attribute\"><a class=\"header-anchor\" href=\"#attribute\"></a> Attribute</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>action</td><td>必选参数，上传的地址</td><td>string</td><td>—</td><td>—</td></tr><tr><td>headers</td><td>设置上传的请求头部</td><td>object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>data</td><td>上传时附带的额外参数</td><td>object</td><td>—</td><td>—</td></tr><tr><td>name</td><td>上传的文件字段名</td><td>string</td><td>—</td><td>file</td></tr><tr><td>with-credentials</td><td>支持发送 cookie 凭证信息</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-file-list</td><td>是否显示已上传文件列表</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>drag</td><td>是否启用拖拽上传</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>accept</td><td>接受上传的<a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept\">文件类型</a>（thumbnail-mode 模式下此参数无效）</td><td>string</td><td>—</td><td>—</td></tr><tr><td>on-preview</td><td>点击文件列表中已上传的文件时的钩子</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>on-remove</td><td>文件列表移除文件时的钩子</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-success</td><td>文件上传成功时的钩子</td><td>function(response, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-error</td><td>文件上传失败时的钩子</td><td>function(err, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-progress</td><td>文件上传时的钩子</td><td>function(event, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-change</td><td>文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>before-upload</td><td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>before-remove</td><td>删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>list-type</td><td>文件列表的类型</td><td>string</td><td>text/picture/card</td><td>text</td></tr><tr><td>auto-upload</td><td>是否在选取文件后立即进行上传</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>file-list</td><td>上传的文件列表, 例如: [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>http-request</td><td>覆盖默认的上传行为，可以自定义上传的实现</td><td>function</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>limit</td><td>最大允许上传个数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>on-exceed</td><td>文件超出个数限制时的钩子</td><td>function(files, fileList)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\"></a> Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>trigger</td><td>触发文件选择框的内容</td></tr><tr><td>tip</td><td>提示说明文字</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>clearFiles</td><td>清空已上传的文件列表（该方法不支持在 before-upload 中调用）</td><td>—</td></tr><tr><td>abort</td><td>取消上传请求</td><td>（ file: fileList 中的 file 对象 ）</td></tr><tr><td>submit</td><td>手动上传文件列表</td><td>—</td></tr></tbody></table>", 6);

function uploadvue_type_template_id_52b54a24_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_hl_demo7 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo7");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", uploadvue_type_template_id_52b54a24_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", uploadvue_type_template_id_52b54a24_hoisted_2, [uploadvue_type_template_id_52b54a24_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_25]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/upload.md?vue&type=template&id=52b54a24

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/upload.md?vue&type=script&lang=ts


/* harmony default export */ var uploadvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击上传");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "text-danger m-t-sm"
      }, "只能上传 jpg/png 文件，且不超过 500kb", -1);

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_upload = _resolveComponent("hl-upload");

        return _openBlock(), _createBlock(_component_hl_upload, {
          style: {
            "width": "400px"
          },
          action: "http://192.168.31.150/up/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "before-remove": _ctx.beforeRemove,
          multiple: "",
          limit: 5,
          "on-exceed": _ctx.handleExceed,
          "file-list": _ctx.fileList
        }, {
          tip: _withCtx(function () {
            return [_hoisted_2];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary",
              icon: "upload",
              "icon-position": "left"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove", "before-remove", "on-exceed", "file-list"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },
        methods: {
          handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview: function handlePreview(file) {
            console.log(file);
          },
          handleExceed: function handleExceed(files, fileList) {
            this.$message.warning("\u5F53\u524D\u9650\u5236\u9009\u62E9 3 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 " + files.length + " \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 " + (files.length + fileList.length) + " \u4E2A\u6587\u4EF6");
          },
          beforeRemove: function beforeRemove(file, fileList) {
            // alert(`确定移除 ${file.name}？`)
            return confirm("\u786E\u5B9A\u79FB\u9664 " + file.name + "\uFF1F");
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _createCommentVNode = vue_esm_browser_prod["k" /* createCommentVNode */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_upload = _resolveComponent("hl-upload");

        return _openBlock(), _createBlock(_component_hl_upload, {
          action: "http://192.168.31.150/up/",
          "show-file-list": false,
          "on-success": _ctx.handleAvatarSuccess,
          "before-upload": _ctx.beforeAvatarUpload
        }, {
          default: _withCtx(function () {
            return [_ctx.imageUrl ? (_openBlock(), _createBlock(_component_hl_thumb, {
              key: 0,
              round: "",
              src: _ctx.imageUrl,
              fit: "cover"
            }, null, 8, ["src"])) : (_openBlock(), _createBlock(_component_hl_thumb, {
              key: 1,
              type: "primary",
              effect: "light",
              round: ""
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_icon, {
                  name: "upload"
                })];
              }),
              _: 1
            }))];
          }),
          _: 1
        }, 8, ["on-success", "before-upload"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            imageUrl: ''
          };
        },
        methods: {
          handleAvatarSuccess: function handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload: function beforeAvatarUpload(file) {
            var isJPG = file.type === 'image/jpeg';
            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              alert('上传头像图片只能是 JPG 格式!');
            }

            if (!isLt2M) {
              alert('上传头像图片大小不能超过 2MB!');
            }

            return isJPG && isLt2M;
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
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_upload = _resolveComponent("hl-upload");

        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_dialog = _resolveComponent("hl-dialog");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_upload, {
          action: "http://192.168.31.150/up/",
          "list-type": "card",
          "on-preview": _ctx.handlePictureCardPreview,
          "on-remove": _ctx.handleRemove
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_icon, {
              name: "upload"
            })];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove"]), _createVNode(_component_hl_dialog, {
          title: "查看图片",
          modalClass: "is-center",
          width: 600,
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_thumb, {
              src: _ctx.dialogImageUrl,
              class: "full"
            }, null, 8, ["src"])];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false
          };
        },
        methods: {
          handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview: function handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
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
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _createCommentVNode = vue_esm_browser_prod["k" /* createCommentVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */];
      var _hoisted_1 = {
        class: "item-actions"
      };
      var _hoisted_2 = {
        style: {
          "width": "300px",
          "height": "300px"
        }
      };

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_upload = _resolveComponent("hl-upload");

        var _component_hl_dialog = _resolveComponent("hl-dialog");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_upload, {
          action: "#",
          "list-type": "card",
          "auto-upload": false
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_icon, {
              name: "Picture",
              type: "danger",
              fill: ""
            })];
          }),
          file: _withCtx(function (_ref) {
            var file = _ref.file;
            return [_createVNode("div", null, [_createVNode("img", {
              class: "item-thumb",
              src: file.url,
              alt: ""
            }, null, 8, ["src"]), _createVNode("span", _hoisted_1, [_createVNode("span", {
              class: "item-preview",
              onClick: function onClick($event) {
                return _ctx.handlePictureCardPreview(file);
              }
            }, [_createVNode(_component_hl_icon, {
              name: "zoomIn"
            })], 8, ["onClick"]), !_ctx.disabled ? (_openBlock(), _createBlock("span", {
              key: 0,
              class: "item-delete",
              onClick: function onClick($event) {
                return _ctx.handleDownload(file);
              }
            }, [_createVNode(_component_hl_icon, {
              name: "download"
            })], 8, ["onClick"])) : _createCommentVNode("", true), !_ctx.disabled ? (_openBlock(), _createBlock("span", {
              key: 1,
              class: "item-delete",
              onClick: function onClick($event) {
                return _ctx.handleRemove(file);
              }
            }, [_createVNode(_component_hl_icon, {
              name: "delete"
            })], 8, ["onClick"])) : _createCommentVNode("", true)])])];
          }),
          _: 1
        }), _createVNode(_component_hl_dialog, {
          modalClass: "is-center",
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", _hoisted_2, [_createVNode("img", {
              width: "100%",
              src: _ctx.dialogImageUrl,
              alt: ""
            }, null, 8, ["src"])])];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
          };
        },
        methods: {
          handleRemove: function handleRemove(file) {
            console.log(file);
          },
          handlePictureCardPreview: function handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
          handleDownload: function handleDownload(file) {
            console.log(file);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击上传");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "text-danger m-t-sm"
      }, "只能上传 jpg/png 文件，且不超过 500kb", -1);

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_upload = _resolveComponent("hl-upload");

        return _openBlock(), _createBlock(_component_hl_upload, {
          action: "http://192.168.31.150/up/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          "list-type": "picture"
        }, {
          tip: _withCtx(function () {
            return [_hoisted_2];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary",
              icon: "upload",
              "icon-position": "left"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },
        methods: {
          handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview: function handlePreview(file) {
            console.log(file);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击上传");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "text-danger m-t-sm"
      }, "只能上传 jpg/png 文件，且不超过 500kb", -1);

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_upload = _resolveComponent("hl-upload");

        return _openBlock(), _createBlock(_component_hl_upload, {
          action: "http://192.168.31.150/up/",
          "on-change": _ctx.handleChange,
          "file-list": _ctx.fileList
        }, {
          tip: _withCtx(function () {
            return [_hoisted_2];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary",
              icon: "upload",
              "icon-position": "left"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["on-change", "file-list"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },
        methods: {
          handleChange: function handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "m-t-md"
      }, [/*#__PURE__*/_createTextVNode("将文件拖到此处，或 "), /*#__PURE__*/_createVNode("em", {
        class: "text-primary"
      }, "点击上传")], -1);

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_upload = _resolveComponent("hl-upload");

        return _openBlock(), _createBlock(_component_hl_upload, {
          drag: "",
          action: "http://192.168.31.150/up/",
          multiple: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_icon, {
              name: "upload",
              border: 1.2
            }, null, 8, ["border"]), _hoisted_1];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("选取文件");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("上传到服务器");

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "text-danger m-t-sm"
      }, "只能上传 jpg/png 文件，且不超过 500kb", -1);

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_upload = _resolveComponent("hl-upload");

        return _openBlock(), _createBlock(_component_hl_upload, {
          ref: "upload",
          action: "http://192.168.31.150/up/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          "auto-upload": false
        }, {
          trigger: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          tip: _withCtx(function () {
            return [_hoisted_3];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary",
              icon: "server",
              class: "m-l-md",
              effect: "light",
              onClick: _ctx.submitUpload
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }, 8, ["onClick"])];
          }),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },
        methods: {
          submitUpload: function submitUpload() {
            this.$refs.upload.submit();
          },
          handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview: function handlePreview(file) {
            console.log(file);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/upload.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/upload.md



uploadvue_type_script_lang_ts.render = uploadvue_type_template_id_52b54a24_render

/* harmony default export */ var upload = __webpack_exports__["default"] = (uploadvue_type_script_lang_ts);

/***/ })

}]);