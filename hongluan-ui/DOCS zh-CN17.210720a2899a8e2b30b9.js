(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/form.md?vue&type=template&id=9749715c

var formvue_type_template_id_9749715c_hoisted_1 = {
  class: "doc-main-content"
};
var formvue_type_template_id_9749715c_hoisted_2 = {
  class: "doc-content"
};

var formvue_type_template_id_9749715c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Form 表单", -1);

var formvue_type_template_id_9749715c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据", -1);

var formvue_type_template_id_9749715c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker")], -1);

var formvue_type_template_id_9749715c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form ref=\"form\" :model=\"form\" :width=\"['col-lg-4','col-lg-20']\" :label-position=\"['left', 'middle']\">\n  <hl-form-item label=\"活动名称\">\n    <hl-input v-model=\"form.name\" placeholder=\"请输入活动名称\" block></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"活动区域\">\n    <hl-select v-model=\"form.region\" placeholder=\"请选择活动区域\">\n      <hl-option label=\"区域一\" value=\"shanghai\"></hl-option>\n      <hl-option label=\"区域二\" value=\"beijing\"></hl-option>\n    </hl-select>\n  </hl-form-item>\n  <hl-form-item label=\"活动时间\">\n    <hl-date-picker type=\"date\" placeholder=\"选择日期\" class=\"m-r-sm\" v-model=\"form.date1\"></hl-date-picker>\n  </hl-form-item>\n\n  <hl-form-item label=\"特殊资源\">\n    <hl-radio-group v-model=\"form.resource\" type=\"primary\">\n      <hl-radio label=\"1\">线上品牌商赞助</hl-radio>\n      <hl-radio label=\"2\">线下场地免费</hl-radio>\n    </hl-radio-group>\n  </hl-form-item>\n  <hl-form-item label=\"活动形式\">\n    <hl-input native-type=\"textarea\" v-model=\"form.desc\" rows=\"3\" block></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"&nbsp;\">\n    <hl-button type=\"primary\" class=\"m-r-md\" @click=\"onSubmit\">立即创建</hl-button>\n    <hl-button>取消</hl-button>\n  </hl-form-item>\n</hl-form>\n<script>\n  export default {\n    data() {\n      return {\n        form: {\n          name: '',\n          region: 'shanghai',\n          date1: '',\n          type: [],\n          resource: '1',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

var formvue_type_template_id_9749715c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("W3C 标准中有如下"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  href: "https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"
}, "规定"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("：")]), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-form>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 标签上添加 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "@submit.native.prevent"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var formvue_type_template_id_9749715c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "xing-nei-biao-dan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xing-nei-biao-dan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 行内表单")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "当垂直方向空间受限且表单较简单时，可以在一行内放置表单。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "inline"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以让表单域变为行内的表单域")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form inline :model=\"formInline\" :width=\"['auto','col']\">\n  <hl-form-item label=\"审批人\" required>\n    <hl-input v-model=\"formInline.user\" placeholder=\"审批人\"></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"活动区域\">\n    <hl-select v-model=\"formInline.region\" placeholder=\"活动区域\">\n      <hl-option label=\"区域一\" value=\"shanghai\"></hl-option>\n      <hl-option label=\"区域二\" value=\"beijing\"></hl-option>\n    </hl-select>\n  </hl-form-item>\n  <hl-form-item>\n    <hl-button type=\"primary\" @click=\"onSubmit\">查询</hl-button>\n  </hl-form-item>\n</hl-form>\n<script>\n  export default {\n    data() {\n      return {\n        formInline: {\n          user: '',\n          region: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chui-zhi-biao-dan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chui-zhi-biao-dan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 垂直表单")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可以在把标题和表单元素分行放置。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "100%"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form :model=\"formInline\" :width=\"['col-24','col-24']\">\n  <hl-form-item label=\"审批人\">\n    <hl-input v-model=\"formInline.user\" placeholder=\"审批人\" block></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"活动区域\">\n    <hl-select v-model=\"formInline.region\" placeholder=\"活动区域\" block>\n      <hl-option label=\"区域一\" value=\"shanghai\"></hl-option>\n      <hl-option label=\"区域二\" value=\"beijing\"></hl-option>\n    </hl-select>\n  </hl-form-item>\n  <hl-form-item>\n    <hl-button type=\"primary\" @click=\"onSubmit\" block>查询</hl-button>\n  </hl-form-item>\n</hl-form>\n<script>\n  export default {\n    data() {\n      return {\n        formInline: {\n          user: '',\n          region: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dui-qi-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dui-qi-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 对齐方式")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "根据具体目标和制约因素，选择最佳的标签对齐方式。", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label-position"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以改变表单域标签的位置，可选值为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，当设为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 时标签会置于表单域的顶部")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form :label-position=\"[labelPosition, labelPosition2]\" :width=\"['col-md-6','col-md-18']\" :model=\"formLabelAlign\">\n  <hl-form-item label=\"Label对齐：\">\n    <hl-select v-model=\"labelPosition\" placeholder=\"水平对齐\" class=\"m-r-sm\">\n      <hl-option label=\"left\" value=\"left\"></hl-option>\n      <hl-option label=\"center\" value=\"center\"></hl-option>\n      <hl-option label=\"right\" value=\"right\"></hl-option>\n    </hl-select>\n    <hl-select v-model=\"labelPosition2\" placeholder=\"水平对齐\">\n      <hl-option label=\"top\" value=\"top\"></hl-option>\n      <hl-option label=\"middle\" value=\"middle\"></hl-option>\n      <hl-option label=\"bottom\" value=\"bottom\"></hl-option>\n    </hl-select>\n  </hl-form-item>\n  <hl-form-item label=\"活动区域：\">\n    <hl-input v-model=\"formLabelAlign.region\" block></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"活动形式：\">\n    <hl-input v-model=\"formLabelAlign.type\" block></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"活动形式：\">\n    <hl-input native-type=\"textarea\" rows=\"3\" v-model=\"formLabelAlign.type\" block></hl-input>\n  </hl-form-item>\n</hl-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        labelPosition: 'left',\n        labelPosition2: 'middle',\n        formLabelAlign: {\n          name: '',\n          region: '',\n          type: '',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "biao-dan-yan-zheng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#biao-dan-yan-zheng"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 表单验证")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Form 组件提供了表单验证的功能，只需要通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "rules"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性传入约定的验证规则，并将 Form-Item 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性设置为需校验的字段名即可。校验规则参见 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  href: "https://github.com/yiminghe/async-validator"
}, "async-validator")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form :model=\"ruleForm\" :rules=\"rules\" ref=\"ruleForm\" :width=\"['col-md-4','col']\">\n  <hl-form-item label=\"活动名称\" prop=\"name\">\n    <hl-input v-model=\"ruleForm.name\"></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"活动地点\" prop=\"location\">\n    <hl-cascader v-model=\"ruleForm.location\" :options=\"locations\"></hl-cascader>\n  </hl-form-item>\n  <hl-form-item label=\"活动区域\" prop=\"region\">\n    <hl-select v-model=\"ruleForm.region\" placeholder=\"请选择活动区域\">\n      <hl-option label=\"区域一\" value=\"shanghai\"></hl-option>\n      <hl-option label=\"区域二\" value=\"beijing\"></hl-option>\n    </hl-select>\n  </hl-form-item>\n  <hl-form-item label=\"活动时间\" required>\n    <hl-row>\n      <hl-col :span=\"12\">\n        <hl-form-item prop=\"date1\">\n          <hl-date-picker type=\"date\" placeholder=\"选择日期\" v-model=\"ruleForm.date1\" block></hl-date-picker>\n        </hl-form-item>\n      </hl-col>\n      <hl-col :span=\"12\">\n        <hl-form-item prop=\"date2\">\n          <hl-time-picker placeholder=\"选择时间\" v-model=\"ruleForm.date2\" block></hl-time-picker>\n        </hl-form-item>\n      </hl-col>\n    </hl-row>\n  </hl-form-item>\n  <hl-form-item label=\"即时配送\" prop=\"delivery\">\n    <hl-switch v-model=\"ruleForm.delivery\" type=\"primary\"></hl-switch>\n  </hl-form-item>\n  <hl-form-item label=\"活动性质\" prop=\"type\">\n    <hl-checkbox-group v-model=\"ruleForm.type\">\n      <hl-checkbox label=\"美食/餐厅线上活动\" name=\"type\"></hl-checkbox>\n      <hl-checkbox label=\"地推活动\" name=\"type\"></hl-checkbox>\n    </hl-checkbox-group>\n  </hl-form-item>\n  <hl-form-item label=\"特殊资源\" prop=\"resource\">\n    <hl-radio-group v-model=\"ruleForm.resource\">\n      <hl-radio label=\"线上品牌商赞助\"></hl-radio>\n      <hl-radio label=\"线下场地免费\"></hl-radio>\n    </hl-radio-group>\n  </hl-form-item>\n  <hl-form-item label=\"活动形式\" prop=\"desc\">\n    <hl-input native-type=\"textarea\" v-model=\"ruleForm.desc\" block></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\" \">\n    <hl-button type=\"primary\" @click=\"submitForm('ruleForm')\" class=\"m-r-sm\">立即创建</hl-button>\n    <hl-button @click=\"resetForm('ruleForm')\" class=\"m-r-sm\">重置</hl-button>\n  </hl-form-item>\n</hl-form>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          location: [],\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        rules: {\n          name: [\n            { required: true, message: '请输入活动名称', trigger: 'blur' },\n            {\n              min: 3,\n              max: 5,\n              message: '长度在 3 到 5 个字符',\n              trigger: 'blur',\n            },\n          ],\n          location: [{ required: true, message: '请选择活动地点', trigger: 'change' }],\n          region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],\n          date1: [\n            {\n              type: 'date',\n              required: true,\n              message: '请选择日期',\n              trigger: 'change',\n            },\n          ],\n          date2: [\n            {\n              type: 'date',\n              required: true,\n              message: '请选择时间',\n              trigger: 'change',\n            },\n          ],\n          type: [\n            {\n              type: 'array',\n              required: true,\n              message: '请至少选择一个活动性质',\n              trigger: 'change',\n            },\n          ],\n          resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],\n          desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],\n        },\n        locations: [\n          {\n            value: 'BJ',\n            label: '北京',\n            children: [\n              { value: 'HD', label: '海淀区' },\n              { value: 'XW', label: '宣武区' },\n              {\n                value: 'CW',\n                label: '崇文区',\n                children: [\n                  { value: 'WFJ', label: '王府井' },\n                  { value: 'DD', label: '东单' },\n                ],\n              },\n            ],\n          },\n        ],\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate(valid => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-xiao-yan-gui-ze"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-xiao-yan-gui-ze"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义校验规则")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form :model=\"ruleForm\" :rules=\"rules\" ref=\"ruleForm\" :width=\"['col-md-4','col']\" class=\"demo-ruleForm\">\n  <hl-form-item label=\"密码\" prop=\"pass\">\n    <hl-input native-type=\"password\" v-model=\"ruleForm.pass\" autocomplete=\"off\"></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"确认密码\" prop=\"checkPass\">\n    <hl-input native-type=\"password\" v-model=\"ruleForm.checkPass\" autocomplete=\"off\"></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"年龄\" prop=\"age\">\n    <hl-input v-model.number=\"ruleForm.age\"></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\" \">\n    <hl-button type=\"primary\" @click=\"submitForm('ruleForm')\" class=\"m-r-sm\">提交</hl-button>\n    <hl-button @click=\"resetForm('ruleForm')\">重置</hl-button>\n  </hl-form-item>\n</hl-form>\n<script>\n  export default {\n    data() {\n      var checkAge = (rule, value, callback) => {\n        if (!value) {\n          return callback(new Error('年龄不能为空'))\n        }\n        setTimeout(() => {\n          if (!Number.isInteger(value)) {\n            callback(new Error('请输入数字值'))\n          } else {\n            if (value < 18) {\n              callback(new Error('必须年满18岁'))\n            } else {\n              callback()\n            }\n          }\n        }, 1000)\n      }\n      var validatePass = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('请输入密码'))\n        } else {\n          if (this.ruleForm.checkPass !== '') {\n            this.$refs.ruleForm.validateField('checkPass')\n          }\n          callback()\n        }\n      }\n      var validatePass2 = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('请再次输入密码'))\n        } else if (value !== this.ruleForm.pass) {\n          callback(new Error('两次输入密码不一致!'))\n        } else {\n          callback()\n        }\n      }\n      return {\n        ruleForm: {\n          pass: '',\n          checkPass: '',\n          age: '',\n        },\n        rules: {\n          pass: [{ validator: validatePass, trigger: 'blur' }],\n          checkPass: [{ validator: validatePass2, trigger: 'blur' }],\n          age: [{ validator: checkAge, trigger: 'blur' }],\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate(valid => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("自定义校验 callback 必须被调用。 更多高级用法可参考 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  href: "https://github.com/yiminghe/async-validator"
}, "async-validator"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dong-tai-zeng-jian-biao-dan-xiang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-tai-zeng-jian-biao-dan-xiang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 动态增减表单项")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form :model=\"dynamicValidateForm\" ref=\"dynamicValidateForm\" :width=\"['col-md-4','col']\">\n  <hl-form-item\n    prop=\"email\"\n    label=\"邮箱\"\n    :rules=\"[\n      { required: true, message: '请输入邮箱地址', trigger: 'blur' },\n      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }\n    ]\"\n  >\n    <hl-input v-model=\"dynamicValidateForm.email\"></hl-input>\n  </hl-form-item>\n  <hl-form-item\n    v-for=\"(domain, index) in dynamicValidateForm.domains\"\n    :label=\"'域名' + index\"\n    :key=\"domain.key\"\n    :prop=\"'domains.' + index + '.value'\"\n    :rules=\"{\n      required: true, message: '域名不能为空', trigger: 'blur'\n    }\"\n  >\n    <hl-input v-model=\"domain.value\"></hl-input>\n    <hl-button type=\"primary\" effect=\"light\" icon=\"delete\" class=\"m-l-sm\" equal @click.prevent=\"removeDomain(domain)\" />\n  </hl-form-item>\n  <hl-form-item label=\" \">\n    <hl-button type=\"primary\" @click=\"submitForm('dynamicValidateForm')\" class=\"m-r-sm\">提交</hl-button>\n    <hl-button @click=\"addDomain\" class=\"m-r-sm\">新增域名</hl-button>\n  </hl-form-item>\n</hl-form>\n<script>\n  export default {\n    data() {\n      return {\n        dynamicValidateForm: {\n          domains: [\n            {\n              value: '',\n            },\n          ],\n          email: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate(valid => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n      removeDomain(item) {\n        var index = this.dynamicValidateForm.domains.indexOf(item)\n        if (index !== -1) {\n          this.dynamicValidateForm.domains.splice(index, 1)\n        }\n      },\n      addDomain() {\n        this.dynamicValidateForm.domains.push({\n          value: '',\n          key: Date.now(),\n        })\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "shu-zi-lei-xing-yan-zheng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shu-zi-lei-xing-yan-zheng"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 数字类型验证")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("数字类型的验证需要在 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 处加上 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的修饰符，这是 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Vue"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自身提供的用于将绑定值转化为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 类型的修饰符。")])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-form :model=\"numberValidateForm\" ref=\"numberValidateForm\" inline :width=\"['auto','col']\">\n  <hl-form-item\n    label=\"年龄\"\n    prop=\"age\"\n    :rules=\"[\n      { required: true, message: '年龄不能为空'},\n      { type: 'number', message: '年龄必须为数字值'}\n    ]\"\n  >\n    <hl-input native-type=\"age\" v-model.number=\"numberValidateForm.age\" autocomplete=\"off\"></hl-input>\n  </hl-form-item>\n  <hl-form-item>\n    <hl-button type=\"primary\" @click=\"submitForm('numberValidateForm')\" class=\"m-r-sm\">提交</hl-button>\n    <hl-button @click=\"resetForm('numberValidateForm')\">重置</hl-button>\n  </hl-form-item>\n</hl-form>\n<script>\n  import { HlMessage } from 'hongluan-ui'\n  export default {\n    data() {\n      return {\n        numberValidateForm: {\n          age: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate(valid => {\n          if (valid) {\n            HlMessage('submit')\n          } else {\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "biao-dan-nei-zu-jian-chi-cun-kong-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#biao-dan-nei-zu-jian-chi-cun-kong-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 表单内组件尺寸控制")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置 Form 上的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，直接为这个表单项或表单组件设置自己的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可。")])], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "尺寸：<hl-radio-group v-model=\"size\">\n  <hl-radio label=\"sm\">小</hl-radio>\n  <hl-radio label=\"md\">默认</hl-radio>\n  <hl-radio label=\"lg\">大</hl-radio>\n</hl-radio-group>\n<br /><br />\n\n<hl-form ref=\"form\" :model=\"sizeForm\" :width=\"['col-md-4','col']\" :size=\"size\">\n  <hl-form-item label=\"活动名称\">\n    <hl-input v-model=\"sizeForm.name\"></hl-input>\n  </hl-form-item>\n  <hl-form-item label=\"活动区域\">\n    <hl-select v-model=\"sizeForm.region\" placeholder=\"请选择活动区域\">\n      <hl-option label=\"区域一\" value=\"shanghai\"></hl-option>\n      <hl-option label=\"区域二\" value=\"beijing\"></hl-option>\n    </hl-select>\n  </hl-form-item>\n  <hl-form-item label=\"活动时间\">\n    <hl-group merge indent>\n    <hl-date-picker type=\"date\" placeholder=\"选择日期\" v-model=\"sizeForm.date1\"></hl-date-picker>\n    <hl-time-picker placeholder=\"选择时间\" v-model=\"sizeForm.date2\"></hl-time-picker>\n    </hl-group>\n  </hl-form-item>\n  <hl-form-item label=\"活动性质\">\n    <hl-checkbox-group v-model=\"sizeForm.type\">\n      <hl-checkbox label=\"美食/餐厅线上活动\" name=\"type\"></hl-checkbox>\n      <hl-checkbox label=\"地推活动\" name=\"type\"></hl-checkbox>\n      <hl-checkbox label=\"线下主题活动\" name=\"type\"></hl-checkbox>\n    </hl-checkbox-group>\n  </hl-form-item>\n  <hl-form-item label=\"特殊资源\">\n    <hl-radio-group v-model=\"sizeForm.resource\">\n      <hl-radio label=\"线上品牌商赞助\"></hl-radio>\n      <hl-radio label=\"线下场地免费\"></hl-radio>\n    </hl-radio-group>\n  </hl-form-item>\n  <hl-form-item label=\" \">\n    <hl-button type=\"primary\" @click=\"onSubmit\" class=\"m-r-sm\">立即创建</hl-button>\n    <hl-button>取消</hl-button>\n  </hl-form-item>\n</hl-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        size: 'md',\n        sizeForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"form-attributes\"><a class=\"header-anchor\" href=\"#form-attributes\"></a> Form Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>表单数据对象</td><td>object</td><td>—</td><td>—</td></tr><tr><td>rules</td><td>表单验证规则</td><td>object</td><td>—</td><td>—</td></tr><tr><td>inline</td><td>行内表单模式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label-position</td><td>表单域标签的位置，水平（left,center,right）和垂直（top,middle,bottom）方向</td><td>string/array</td><td>right/left/top</td><td>-</td></tr><tr><td>width</td><td>表单域标签以及表单元素的宽度，还可以使用 Layout 中提供了响应式类（col-*）</td><td>string/array</td><td>—</td><td>—</td></tr><tr><td>label-suffix</td><td>表单域标签的后缀</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-prefix</td><td>表单域标签的前缀</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-required-asterisk</td><td>是否显示必填字段的标签旁边的红色星号</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-message</td><td>是否显示校验错误信息</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>responsive-form</td><td>是否使用响应式表单，默认将会在 Form-Item 上添加 row 样式，当 width 中使用 col-*样式时，表单将 \b 自动响应式布局</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>validate-on-rule-change</td><td>是否在 <code>rules</code> 属性改变后立即触发一次验证</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>用于控制该表单内组件的尺寸</td><td>string</td><td>sm / lg</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id=\"form-methods\"><a class=\"header-anchor\" href=\"#form-methods\"></a> Form Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>validate</td><td>对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>对部分表单字段进行校验的方法</td><td>Function(props: array | string, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td><td>—</td></tr><tr><td>clearValidate</td><td>移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果</td><td>Function(props: array | string)</td></tr></tbody></table><h2 id=\"form-events\"><a class=\"header-anchor\" href=\"#form-events\"></a> Form Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>validate</td><td>任一表单项被校验后触发</td><td>被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）</td></tr></tbody></table><h2 id=\"form-item-attributes\"><a class=\"header-anchor\" href=\"#form-item-attributes\"></a> Form-Item Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>prop</td><td>表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的</td><td>string</td><td>传入 Form 组件的 <code>model</code> 中的字段</td><td>—</td></tr><tr><td>label</td><td>标签文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-position</td><td>表单域标签的位置，水平（left,center,right）和垂直（top,middle,bottom）方向</td><td>string/array</td><td>right/left/top</td><td>-</td></tr><tr><td>width</td><td>表单域标签以及表单元素的宽度，还可以使用 Layout 中提供了响应式类（col-*）。</td><td>string/array</td><td>—</td><td>—</td></tr><tr><td>required</td><td>是否必填，如不设置，则会根据校验规则自动生成</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>rules</td><td>表单验证规则, 具体配置见下表, 更多内容参考<a href=\"https://github.com/yiminghe/async-validator\">async-validator</a></td><td>object / array</td><td>—</td><td>—</td></tr><tr><td>error</td><td>表单域验证错误信息, 设置该值会使表单验证状态变为<code>error</code>，并显示该错误信息</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-message</td><td>是否显示校验错误信息</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>用于控制该表单域下组件的尺寸</td><td>string</td><td>sm / lg</td><td>-</td></tr></tbody></table><h2 id=\"rules\"><a class=\"header-anchor\" href=\"#rules\"></a> Rules</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>验证触发方式</td><td>string</td><td>blur / change</td><td>—</td></tr></tbody></table><h2 id=\"form-item-slot\"><a class=\"header-anchor\" href=\"#form-item-slot\"></a> Form-Item Slot</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Form Item 的内容</td></tr><tr><td>label</td><td>标签文本的内容</td></tr></tbody></table><h2 id=\"form-item-scoped-slot\"><a class=\"header-anchor\" href=\"#form-item-scoped-slot\"></a> Form-Item Scoped Slot</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>error</td><td>自定义表单校验信息的显示方式，参数为 { error }</td></tr></tbody></table><h2 id=\"form-item-methods\"><a class=\"header-anchor\" href=\"#form-item-methods\"></a> Form-Item Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>resetField</td><td>对该表单项进行重置，将其值重置为初始值并移除校验结果</td><td>-</td></tr><tr><td>clearValidate</td><td>移除该表单项的校验结果</td><td>-</td></tr></tbody></table>", 16);

function formvue_type_template_id_9749715c_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", formvue_type_template_id_9749715c_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", formvue_type_template_id_9749715c_hoisted_2, [formvue_type_template_id_9749715c_hoisted_3, formvue_type_template_id_9749715c_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [formvue_type_template_id_9749715c_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [formvue_type_template_id_9749715c_hoisted_5];
    }),
    _: 1
  }), formvue_type_template_id_9749715c_hoisted_7, formvue_type_template_id_9749715c_hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
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
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_34, _hoisted_35, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    _: 1
  }), _hoisted_38]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/form.md?vue&type=template&id=9749715c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/form.md?vue&type=script&lang=ts


/* harmony default export */ var formvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("线上品牌商赞助");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("线下场地免费");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("立即创建");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("取消");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_radio = _resolveComponent("hl-radio");

        var _component_hl_radio_group = _resolveComponent("hl-radio-group");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          ref: "form",
          model: _ctx.form,
          width: ['col-lg-4', 'col-lg-20'],
          "label-position": ['left', 'middle']
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "活动名称"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.form.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.form.name = $event;
                  }),
                  placeholder: "请输入活动名称",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动区域"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_select, {
                  modelValue: _ctx.form.region,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.form.region = $event;
                  }),
                  placeholder: "请选择活动区域"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_option, {
                      label: "区域一",
                      value: "shanghai"
                    }), _createVNode(_component_hl_option, {
                      label: "区域二",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动时间"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_date_picker, {
                  type: "date",
                  placeholder: "选择日期",
                  class: "m-r-sm",
                  modelValue: _ctx.form.date1,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.form.date1 = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "特殊资源"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_radio_group, {
                  modelValue: _ctx.form.resource,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.form.resource = $event;
                  }),
                  type: "primary"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_radio, {
                      label: "1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_radio, {
                      label: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动形式"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  "native-type": "textarea",
                  modelValue: _ctx.form.desc,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.form.desc = $event;
                  }),
                  rows: "3",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: " "
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  class: "m-r-md",
                  onClick: _ctx.onSubmit
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_hl_button, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            form: {
              name: '',
              region: 'shanghai',
              date1: '',
              type: [],
              resource: '1',
              desc: ''
            }
          };
        },
        methods: {
          onSubmit: function onSubmit() {
            console.log('submit!');
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
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("查询");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          inline: "",
          model: _ctx.formInline,
          width: ['auto', 'col']
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "审批人",
              required: ""
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.formInline.user,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.formInline.user = $event;
                  }),
                  placeholder: "审批人"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动区域"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_select, {
                  modelValue: _ctx.formInline.region,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.formInline.region = $event;
                  }),
                  placeholder: "活动区域"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_option, {
                      label: "区域一",
                      value: "shanghai"
                    }), _createVNode(_component_hl_option, {
                      label: "区域二",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  onClick: _ctx.onSubmit
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            formInline: {
              user: '',
              region: ''
            }
          };
        },
        methods: {
          onSubmit: function onSubmit() {
            console.log('submit!');
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
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("查询");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          model: _ctx.formInline,
          width: ['col-24', 'col-24']
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "审批人"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.formInline.user,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.formInline.user = $event;
                  }),
                  placeholder: "审批人",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动区域"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_select, {
                  modelValue: _ctx.formInline.region,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.formInline.region = $event;
                  }),
                  placeholder: "活动区域",
                  block: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_option, {
                      label: "区域一",
                      value: "shanghai"
                    }), _createVNode(_component_hl_option, {
                      label: "区域二",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  onClick: _ctx.onSubmit,
                  block: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            formInline: {
              user: '',
              region: ''
            }
          };
        },
        methods: {
          onSubmit: function onSubmit() {
            console.log('submit!');
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
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          "label-position": [_ctx.labelPosition, _ctx.labelPosition2],
          width: ['col-md-6', 'col-md-18'],
          model: _ctx.formLabelAlign
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "Label对齐："
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_select, {
                  modelValue: _ctx.labelPosition,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.labelPosition = $event;
                  }),
                  placeholder: "水平对齐",
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_option, {
                      label: "left",
                      value: "left"
                    }), _createVNode(_component_hl_option, {
                      label: "center",
                      value: "center"
                    }), _createVNode(_component_hl_option, {
                      label: "right",
                      value: "right"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"]), _createVNode(_component_hl_select, {
                  modelValue: _ctx.labelPosition2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.labelPosition2 = $event;
                  }),
                  placeholder: "水平对齐"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_option, {
                      label: "top",
                      value: "top"
                    }), _createVNode(_component_hl_option, {
                      label: "middle",
                      value: "middle"
                    }), _createVNode(_component_hl_option, {
                      label: "bottom",
                      value: "bottom"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动区域："
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.formLabelAlign.region,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.formLabelAlign.region = $event;
                  }),
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动形式："
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.formLabelAlign.type,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.formLabelAlign.type = $event;
                  }),
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动形式："
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  "native-type": "textarea",
                  rows: "3",
                  modelValue: _ctx.formLabelAlign.type,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.formLabelAlign.type = $event;
                  }),
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["label-position", "model"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            labelPosition: 'left',
            labelPosition2: 'middle',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            }
          };
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
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("立即创建");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("重置");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_cascader = _resolveComponent("hl-cascader");

        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_time_picker = _resolveComponent("hl-time-picker");

        var _component_hl_row = _resolveComponent("hl-row");

        var _component_hl_switch = _resolveComponent("hl-switch");

        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        var _component_hl_checkbox_group = _resolveComponent("hl-checkbox-group");

        var _component_hl_radio = _resolveComponent("hl-radio");

        var _component_hl_radio_group = _resolveComponent("hl-radio-group");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          model: _ctx.ruleForm,
          rules: _ctx.rules,
          ref: "ruleForm",
          width: ['col-md-4', 'col']
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "活动名称",
              prop: "name"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.ruleForm.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.ruleForm.name = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动地点",
              prop: "location"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_cascader, {
                  modelValue: _ctx.ruleForm.location,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.ruleForm.location = $event;
                  }),
                  options: _ctx.locations
                }, null, 8, ["modelValue", "options"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动区域",
              prop: "region"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_select, {
                  modelValue: _ctx.ruleForm.region,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.ruleForm.region = $event;
                  }),
                  placeholder: "请选择活动区域"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_option, {
                      label: "区域一",
                      value: "shanghai"
                    }), _createVNode(_component_hl_option, {
                      label: "区域二",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动时间",
              required: ""
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, {
                      span: 12
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_form_item, {
                          prop: "date1"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_date_picker, {
                              type: "date",
                              placeholder: "选择日期",
                              modelValue: _ctx.ruleForm.date1,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                return _ctx.ruleForm.date1 = $event;
                              }),
                              block: ""
                            }, null, 8, ["modelValue"])];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_col, {
                      span: 12
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_form_item, {
                          prop: "date2"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_time_picker, {
                              placeholder: "选择时间",
                              modelValue: _ctx.ruleForm.date2,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                return _ctx.ruleForm.date2 = $event;
                              }),
                              block: ""
                            }, null, 8, ["modelValue"])];
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
            }), _createVNode(_component_hl_form_item, {
              label: "即时配送",
              prop: "delivery"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_switch, {
                  modelValue: _ctx.ruleForm.delivery,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return _ctx.ruleForm.delivery = $event;
                  }),
                  type: "primary"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动性质",
              prop: "type"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_checkbox_group, {
                  modelValue: _ctx.ruleForm.type,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                    return _ctx.ruleForm.type = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_checkbox, {
                      label: "美食/餐厅线上活动",
                      name: "type"
                    }), _createVNode(_component_hl_checkbox, {
                      label: "地推活动",
                      name: "type"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "特殊资源",
              prop: "resource"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_radio_group, {
                  modelValue: _ctx.ruleForm.resource,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                    return _ctx.ruleForm.resource = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_radio, {
                      label: "线上品牌商赞助"
                    }), _createVNode(_component_hl_radio, {
                      label: "线下场地免费"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动形式",
              prop: "desc"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  "native-type": "textarea",
                  modelValue: _ctx.ruleForm.desc,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                    return _ctx.ruleForm.desc = $event;
                  }),
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: " "
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  onClick: _cache[10] || (_cache[10] = function ($event) {
                    return _ctx.submitForm('ruleForm');
                  }),
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_hl_button, {
                  onClick: _cache[11] || (_cache[11] = function ($event) {
                    return _ctx.resetForm('ruleForm');
                  }),
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model", "rules"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            ruleForm: {
              location: [],
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            rules: {
              name: [{
                required: true,
                message: '请输入活动名称',
                trigger: 'blur'
              }, {
                min: 3,
                max: 5,
                message: '长度在 3 到 5 个字符',
                trigger: 'blur'
              }],
              location: [{
                required: true,
                message: '请选择活动地点',
                trigger: 'change'
              }],
              region: [{
                required: true,
                message: '请选择活动区域',
                trigger: 'change'
              }],
              date1: [{
                type: 'date',
                required: true,
                message: '请选择日期',
                trigger: 'change'
              }],
              date2: [{
                type: 'date',
                required: true,
                message: '请选择时间',
                trigger: 'change'
              }],
              type: [{
                type: 'array',
                required: true,
                message: '请至少选择一个活动性质',
                trigger: 'change'
              }],
              resource: [{
                required: true,
                message: '请选择活动资源',
                trigger: 'change'
              }],
              desc: [{
                required: true,
                message: '请填写活动形式',
                trigger: 'blur'
              }]
            },
            locations: [{
              value: 'BJ',
              label: '北京',
              children: [{
                value: 'HD',
                label: '海淀区'
              }, {
                value: 'XW',
                label: '宣武区'
              }, {
                value: 'CW',
                label: '崇文区',
                children: [{
                  value: 'WFJ',
                  label: '王府井'
                }, {
                  value: 'DD',
                  label: '东单'
                }]
              }]
            }]
          };
        },
        methods: {
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
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
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("提交");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("重置");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          model: _ctx.ruleForm,
          rules: _ctx.rules,
          ref: "ruleForm",
          width: ['col-md-4', 'col'],
          class: "demo-ruleForm"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "密码",
              prop: "pass"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  "native-type": "password",
                  modelValue: _ctx.ruleForm.pass,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.ruleForm.pass = $event;
                  }),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "确认密码",
              prop: "checkPass"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  "native-type": "password",
                  modelValue: _ctx.ruleForm.checkPass,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.ruleForm.checkPass = $event;
                  }),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "年龄",
              prop: "age"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.ruleForm.age,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.ruleForm.age = $event;
                  }),
                  modelModifiers: {
                    number: true
                  }
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: " "
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  onClick: _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.submitForm('ruleForm');
                  }),
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_hl_button, {
                  onClick: _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.resetForm('ruleForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model", "rules"]);
      }

      var democomponentExport = {
        data: function data() {
          var _this = this;

          var checkAge = function checkAge(rule, value, callback) {
            if (!value) {
              return callback(new Error('年龄不能为空'));
            }

            setTimeout(function () {
              if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
              } else {
                if (value < 18) {
                  callback(new Error('必须年满18岁'));
                } else {
                  callback();
                }
              }
            }, 1000);
          };

          var validatePass = function validatePass(rule, value, callback) {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (_this.ruleForm.checkPass !== '') {
                _this.$refs.ruleForm.validateField('checkPass');
              }

              callback();
            }
          };

          var validatePass2 = function validatePass2(rule, value, callback) {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== _this.ruleForm.pass) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };

          return {
            ruleForm: {
              pass: '',
              checkPass: '',
              age: ''
            },
            rules: {
              pass: [{
                validator: validatePass,
                trigger: 'blur'
              }],
              checkPass: [{
                validator: validatePass2,
                trigger: 'blur'
              }],
              age: [{
                validator: checkAge,
                trigger: 'blur'
              }]
            }
          };
        },
        methods: {
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
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
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _withModifiers = vue_esm_browser_prod["hb" /* withModifiers */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("提交");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("新增域名");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          model: _ctx.dynamicValidateForm,
          ref: "dynamicValidateForm",
          width: ['col-md-4', 'col']
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              prop: "email",
              label: "邮箱",
              rules: [{
                required: true,
                message: '请输入邮箱地址',
                trigger: 'blur'
              }, {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change']
              }]
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.dynamicValidateForm.email,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.dynamicValidateForm.email = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.dynamicValidateForm.domains, function (domain, index) {
              return _openBlock(), _createBlock(_component_hl_form_item, {
                label: '域名' + index,
                key: domain.key,
                prop: 'domains.' + index + '.value',
                rules: {
                  required: true,
                  message: '域名不能为空',
                  trigger: 'blur'
                }
              }, {
                default: _withCtx(function () {
                  return [_createVNode(_component_hl_input, {
                    modelValue: domain.value,
                    "onUpdate:modelValue": function onUpdateModelValue($event) {
                      return domain.value = $event;
                    }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), _createVNode(_component_hl_button, {
                    type: "primary",
                    effect: "light",
                    icon: "delete",
                    class: "m-l-sm",
                    equal: "",
                    onClick: _withModifiers(function ($event) {
                      return _ctx.removeDomain(domain);
                    }, ["prevent"])
                  }, null, 8, ["onClick"])];
                }),
                _: 2
              }, 1032, ["label", "prop"]);
            }), 128)), _createVNode(_component_hl_form_item, {
              label: " "
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.submitForm('dynamicValidateForm');
                  }),
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_hl_button, {
                  onClick: _ctx.addDomain,
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dynamicValidateForm: {
              domains: [{
                value: ''
              }],
              email: ''
            }
          };
        },
        methods: {
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          removeDomain: function removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);

            if (index !== -1) {
              this.dynamicValidateForm.domains.splice(index, 1);
            }
          },
          addDomain: function addDomain() {
            this.dynamicValidateForm.domains.push({
              value: '',
              key: Date.now()
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("提交");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("重置");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_component_hl_form, {
          model: _ctx.numberValidateForm,
          ref: "numberValidateForm",
          inline: "",
          width: ['auto', 'col']
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "年龄",
              prop: "age",
              rules: [{
                required: true,
                message: '年龄不能为空'
              }, {
                type: 'number',
                message: '年龄必须为数字值'
              }]
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  "native-type": "age",
                  modelValue: _ctx.numberValidateForm.age,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.numberValidateForm.age = $event;
                  }),
                  modelModifiers: {
                    number: true
                  },
                  autocomplete: "off"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.submitForm('numberValidateForm');
                  }),
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_hl_button, {
                  onClick: _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.resetForm('numberValidateForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"]);
      }

      var _require = __webpack_require__(52),
          HlMessage = _require.HlMessage;

      var democomponentExport = {
        data: function data() {
          return {
            numberValidateForm: {
              age: ''
            }
          };
        },
        methods: {
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                HlMessage('submit');
              } else {
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("尺寸：");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("小");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("默认");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("大");

      var _hoisted_5 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("立即创建");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("取消");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        var _component_hl_radio_group = _resolveComponent("hl-radio-group");

        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_time_picker = _resolveComponent("hl-time-picker");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        var _component_hl_checkbox_group = _resolveComponent("hl-checkbox-group");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_Fragment, null, [_hoisted_1, _createVNode(_component_hl_radio_group, {
          modelValue: _ctx.size,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.size = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_radio, {
              label: "sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: "md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: "lg"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _hoisted_5, _hoisted_6, _createVNode(_component_hl_form, {
          ref: "form",
          model: _ctx.sizeForm,
          width: ['col-md-4', 'col'],
          size: _ctx.size
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form_item, {
              label: "活动名称"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.sizeForm.name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.sizeForm.name = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动区域"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_select, {
                  modelValue: _ctx.sizeForm.region,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.sizeForm.region = $event;
                  }),
                  placeholder: "请选择活动区域"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_option, {
                      label: "区域一",
                      value: "shanghai"
                    }), _createVNode(_component_hl_option, {
                      label: "区域二",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动时间"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  merge: "",
                  indent: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_date_picker, {
                      type: "date",
                      placeholder: "选择日期",
                      modelValue: _ctx.sizeForm.date1,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.sizeForm.date1 = $event;
                      })
                    }, null, 8, ["modelValue"]), _createVNode(_component_hl_time_picker, {
                      placeholder: "选择时间",
                      modelValue: _ctx.sizeForm.date2,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.sizeForm.date2 = $event;
                      })
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "活动性质"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_checkbox_group, {
                  modelValue: _ctx.sizeForm.type,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return _ctx.sizeForm.type = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_checkbox, {
                      label: "美食/餐厅线上活动",
                      name: "type"
                    }), _createVNode(_component_hl_checkbox, {
                      label: "地推活动",
                      name: "type"
                    }), _createVNode(_component_hl_checkbox, {
                      label: "线下主题活动",
                      name: "type"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: "特殊资源"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_radio_group, {
                  modelValue: _ctx.sizeForm.resource,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                    return _ctx.sizeForm.resource = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_radio, {
                      label: "线上品牌商赞助"
                    }), _createVNode(_component_hl_radio, {
                      label: "线下场地免费"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_form_item, {
              label: " "
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  onClick: _ctx.onSubmit,
                  class: "m-r-sm"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_hl_button, null, {
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
        }, 8, ["model", "size"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            size: 'md',
            sizeForm: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          };
        },
        methods: {
          onSubmit: function onSubmit() {
            console.log('submit!');
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/form.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/form.md



formvue_type_script_lang_ts.render = formvue_type_template_id_9749715c_render

/* harmony default export */ var zh_CN_form = __webpack_exports__["default"] = (formvue_type_script_lang_ts);

/***/ })

}]);