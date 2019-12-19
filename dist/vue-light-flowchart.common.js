module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1794":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_8041ace8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a0b9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_8041ace8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_8041ace8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_8041ace8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2552":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4584":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_2d262f38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2552");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_2d262f38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_2d262f38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_2d262f38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "86e5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a0b9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dc8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_29f1701c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("86e5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_29f1701c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_29f1701c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_29f1701c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"322ea0ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LightFlowchart.vue?vue&type=template&id=29f1701c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowchart-container",on:{"mousemove":_vm.handleMove,"mouseup":_vm.handleUp,"mousedown":_vm.handleDown}},[_c('svg',{attrs:{"width":"100%","height":(_vm.height + "px")}},_vm._l((_vm.lines),function(link){return _c('flowchart-link',_vm._b({key:link.id,attrs:{"options":_vm.linkOptions},on:{"linkMouseEnter":function($event){return _vm.linkMouseEnter(link.id)},"linkMouseLeave":function($event){return _vm.linkMouseLeave(link.id)},"linkClick":function($event){return _vm.linkClick(link.id)},"deleteLink":function($event){return _vm.linkDelete(link.id)}}},'flowchart-link',link,false,true))}),1),_vm._l((_vm.scene.nodes),function(node){return _c('flowchart-node',_vm._b({key:node.id,attrs:{"options":_vm.nodeOptions},on:{"linkingStart":function($event){return _vm.linkingStart(node.id)},"linkingStop":function($event){return _vm.linkingStop(node.id)},"nodeMouseEnter":function($event){return _vm.nodeMouseEnter(node.id)},"nodeMouseLeave":function($event){return _vm.nodeMouseLeave(node.id)},"nodeSelected":function($event){return _vm.nodeSelected(node.id, $event)}}},'flowchart-node',node,false,true))})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LightFlowchart.vue?vue&type=template&id=29f1701c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"322ea0ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartLink.vue?vue&type=template&id=2d262f38&scoped=true&
var FlowchartLinkvue_type_template_id_2d262f38_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{on:{"mousedown":_vm.handleClick,"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave}},[_c('path',{style:(_vm.pathStyle),attrs:{"d":_vm.dAttr}}),(_vm.show.delete)?_c('a',{on:{"click":_vm.deleteLink}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":"8","fill-opacity":"0","transform":_vm.arrowTransform}}),_c('path',{style:(_vm.deleteStyle),attrs:{"d":"M -4 -4 L 4 4 M 4 -4 L -4 4","transform":_vm.arrowTransform}})]):_c('path',{style:(_vm.arrowStyle),attrs:{"d":"M -1 -1 L 0 1 L 1 -1 z","transform":_vm.arrowTransform}})])}
var FlowchartLinkvue_type_template_id_2d262f38_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowchartLink.vue?vue&type=template&id=2d262f38&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartLink.vue?vue&type=script&lang=js&
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FlowchartLinkvue_type_script_lang_js_ = ({
  name: 'FlowchartLink',
  props: {
    id: Number,
    color: String,
    // start point position [x, y]
    start: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    },
    // end point position [x, y]
    end: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {
          scale: 1,
          themeColor: '',
          labelColor: '',
          linkWidth: 2.73205
        };
      }
    }
  },
  data: function data() {
    return {
      show: {
        delete: false
      }
    };
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('linkClick');
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.id) {
        this.show.delete = true;
        this.$emit('linkMouseEnter');
      }
    },
    handleMouseLeave: function handleMouseLeave() {
      this.show.delete = false;
      this.$emit('linkMouseLeave');
    },
    calculateCenterPoint: function calculateCenterPoint() {
      // calculate arrow position: the center point between start and end
      var dx = (this.end[0] - this.start[0]) / 2;
      var dy = (this.end[1] - this.start[1]) / 2;
      return [this.start[0] + dx, this.start[1] + dy];
    },
    calculateRotation: function calculateRotation() {
      // calculate arrow rotation
      var _this$bezierDots = this.bezierDots(),
          _this$bezierDots2 = _slicedToArray(_this$bezierDots, 2),
          x = _this$bezierDots2[0],
          y = _this$bezierDots2[1];

      var xTangent = 0.75 * (x[3] + x[2] - x[1] - x[0]);
      var yTangent = 0.75 * (y[3] + y[2] - y[1] - y[0]);
      var angle = -Math.atan2(xTangent, yTangent);
      var degree = angle * 180 / Math.PI;
      return degree < 0 ? degree + 360 : degree;
    },
    bezierDots: function bezierDots() {
      var x0 = this.start[0];
      var y0 = this.start[1];
      var x3 = this.end[0];
      var y3 = this.end[1];
      var x1 = x0;
      var y1 = y0 + 50;
      var x2 = x3;
      var y2 = y3 - 50;
      return [[x0, x1, x2, x3], [y0, y1, y2, y3]];
    },
    deleteLink: function deleteLink() {
      this.$emit('deleteLink');
    }
  },
  computed: {
    pathStyle: function pathStyle() {
      return {
        stroke: this.color || this.options.themeColor,
        strokeWidth: this.options.linkWidth * this.options.scale,
        fill: 'none'
      };
    },
    deleteStyle: function deleteStyle() {
      return {
        stroke: this.options.labelColor,
        strokeWidth: 0.8 * this.options.linkWidth,
        fill: 'none'
      };
    },
    arrowStyle: function arrowStyle() {
      return {
        stroke: this.color || this.options.themeColor,
        strokeWidth: 2 * this.options.linkWidth,
        fill: 'none'
      };
    },
    arrowTransform: function arrowTransform() {
      var _this$calculateCenter = this.calculateCenterPoint(),
          _this$calculateCenter2 = _slicedToArray(_this$calculateCenter, 2),
          arrowX = _this$calculateCenter2[0],
          arrowY = _this$calculateCenter2[1];

      var degree = this.calculateRotation();
      return "translate(".concat(arrowX, ", ").concat(arrowY, ") rotate(").concat(degree, ") scale(").concat(this.options.scale, ")");
    },
    dAttr: function dAttr() {
      var _this$bezierDots3 = this.bezierDots(),
          _this$bezierDots4 = _slicedToArray(_this$bezierDots3, 2),
          x = _this$bezierDots4[0],
          y = _this$bezierDots4[1];

      return "M ".concat(x[0], ", ").concat(y[0], " C ").concat(x[1], ", ").concat(y[1], ", ").concat(x[2], ", ").concat(y[2], ", ").concat(x[3], ", ").concat(y[3]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/FlowchartLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlowchartLinkvue_type_script_lang_js_ = (FlowchartLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FlowchartLink.vue?vue&type=style&index=0&id=2d262f38&scoped=true&lang=scss&
var FlowchartLinkvue_type_style_index_0_id_2d262f38_scoped_true_lang_scss_ = __webpack_require__("4584");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/FlowchartLink.vue






/* normalize component */

var component = normalizeComponent(
  components_FlowchartLinkvue_type_script_lang_js_,
  FlowchartLinkvue_type_template_id_2d262f38_scoped_true_render,
  FlowchartLinkvue_type_template_id_2d262f38_scoped_true_staticRenderFns,
  false,
  null,
  "2d262f38",
  null
  
)

/* harmony default export */ var FlowchartLink = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"322ea0ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartNode.vue?vue&type=template&id=8041ace8&scoped=true&
var FlowchartNodevue_type_template_id_8041ace8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowchart-node",class:[{selected: _vm.isSelected}, _vm.options.orientation],style:(_vm.nodeStyle),on:{"mousedown":function($event){$event.preventDefault();return _vm.handleMousedown($event)},"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave}},[_c('div',{staticClass:"node-port node-input",on:{"mousedown":_vm.inputMouseDown,"mouseup":function($event){$event.preventDefault();return _vm.inputMouseUp($event)}}}),_c('div',{staticClass:"node-main"},[_c('div',{staticClass:"node-type",domProps:{"textContent":_vm._s(_vm.type)}}),_c('div',{staticClass:"node-label",domProps:{"textContent":_vm._s(_vm.label)}})]),_c('div',{staticClass:"node-port node-output",on:{"mousedown":function($event){$event.preventDefault();return _vm.outputMouseDown($event)}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show.delete),expression:"show.delete"}],staticClass:"node-delete"},[_vm._v("×")])])}
var FlowchartNodevue_type_template_id_8041ace8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowchartNode.vue?vue&type=template&id=8041ace8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FlowchartNodevue_type_script_lang_js_ = ({
  name: 'FlowchartNode',
  props: {
    id: {
      default: 1000
    },
    x: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return typeof val === 'number';
      }
    },
    y: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return typeof val === 'number';
      }
    },
    type: {
      type: String,
      default: 'Default'
    },
    label: {
      type: String,
      default: 'input name'
    },
    borderColor: String,
    options: {
      type: Object,
      default: function _default() {
        return {
          centerX: 1024,
          centerY: 140,
          scale: 1,
          selected: null,
          orientation: 'vert',
          width: 80,
          height: 80,
          themeColor: '',
          nodeBgColor: '',
          typeColor: '',
          labelColor: ''
        };
      }
    }
  },
  data: function data() {
    return {
      show: {
        delete: false
      }
    };
  },
  computed: {
    isSelected: function isSelected() {
      return this.options.selected === this.id;
    },
    nodeStyle: function nodeStyle() {
      var style = {
        top: this.options.centerY + this.y * this.options.scale + 'px',
        left: this.options.centerX + this.x * this.options.scale + 'px',
        transform: "scale(".concat(this.options.scale, ")"),
        width: this.options.width + 'px',
        height: this.options.height + 'px',
        '--theme-color': this.options.themeColor,
        '--node-bgcolor': this.options.nodeBgColor,
        '--type-color': this.options.typeColor,
        '--label-color': this.options.labelColor
      };

      if (this.borderColor && !this.isSelected) {
        style['box-shadow'] = "0 0 0 2px ".concat(this.borderColor);
      }

      return style;
    }
  },
  methods: {
    handleMousedown: function handleMousedown(e) {
      var target = e.target || e.srcElement;

      if (target.className.indexOf('node-input') < 0 && target.className.indexOf('node-output') < 0) {
        this.$emit('nodeSelected', e);
      }
    },
    handleMouseEnter: function handleMouseEnter() {
      this.show.delete = true;
      this.$emit('nodeMouseEnter');
    },
    handleMouseLeave: function handleMouseLeave() {
      this.show.delete = false;
      this.$emit('nodeMouseLeave');
    },
    outputMouseDown: function outputMouseDown() {
      this.$emit('linkingStart');
    },
    inputMouseDown: function inputMouseDown(e) {
      e.preventDefault();
    },
    inputMouseUp: function inputMouseUp() {
      this.$emit('linkingStop');
    }
  }
});
// CONCATENATED MODULE: ./src/components/FlowchartNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlowchartNodevue_type_script_lang_js_ = (FlowchartNodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FlowchartNode.vue?vue&type=style&index=0&id=8041ace8&scoped=true&lang=scss&
var FlowchartNodevue_type_style_index_0_id_8041ace8_scoped_true_lang_scss_ = __webpack_require__("1794");

// CONCATENATED MODULE: ./src/components/FlowchartNode.vue






/* normalize component */

var FlowchartNode_component = normalizeComponent(
  components_FlowchartNodevue_type_script_lang_js_,
  FlowchartNodevue_type_template_id_8041ace8_scoped_true_render,
  FlowchartNodevue_type_template_id_8041ace8_scoped_true_staticRenderFns,
  false,
  null,
  "8041ace8",
  null
  
)

/* harmony default export */ var FlowchartNode = (FlowchartNode_component.exports);
// CONCATENATED MODULE: ./src/assets/utilty/position.js
/**
 * @param element {HTMLElement}
 * @return {{top: number, left: number}}
 */
function getOffsetRect(element) {
  var box = element.getBoundingClientRect();
  var scrollTop = window.pageYOffset;
  var scrollLeft = window.pageXOffset;
  var top = box.top + scrollTop;
  var left = box.left + scrollLeft;
  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}
/**
 * @param event {MouseEvent}
 * @param element {HTMLElement}
 * @return {[number, number]}
 */


function getMousePosition(element, event) {
  var mouseX = event.pageX || event.clientX + document.documentElement.scrollLeft;
  var mouseY = event.pageY || event.clientY + document.documentElement.scrollTop;
  var offset = getOffsetRect(element);
  var x = mouseX - offset.left;
  var y = mouseY - offset.top;
  return [x, y];
}


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LightFlowchart.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function LightFlowchartvue_type_script_lang_js_slicedToArray(arr, i) { return LightFlowchartvue_type_script_lang_js_arrayWithHoles(arr) || LightFlowchartvue_type_script_lang_js_iterableToArrayLimit(arr, i) || LightFlowchartvue_type_script_lang_js_nonIterableRest(); }

function LightFlowchartvue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function LightFlowchartvue_type_script_lang_js_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LightFlowchartvue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var defaultWidth = 80;
var defaultHeight = 80;
var defaultThemeColor = '#ff8855';
var defaultNodeBgColor = '#fff';
var defaultTypeColor = '#fff';
var defaultLabelColor = '#2c3e50';
var defaultLinkWidth = 2.73205;
var autoScrollStep = 8;
var autoScrollTimeout = 100;
/* harmony default export */ var LightFlowchartvue_type_script_lang_js_ = ({
  name: 'VueLightFlowchart',
  props: {
    scene: {
      type: Object,
      default: function _default() {
        return {
          centerX: 1024,
          scale: 1,
          centerY: 140,
          nodes: [],
          links: [],
          orientation: 'vert',
          styles: {
            nodeWidth: defaultWidth,
            nodeHeight: defaultHeight,
            themeColor: defaultThemeColor,
            nodeBgColor: defaultNodeBgColor,
            typeColor: defaultTypeColor,
            labelColor: defaultLabelColor,
            linkWidth: defaultLinkWidth
          }
        };
      }
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data: function data() {
    return {
      action: {
        linking: false,
        dragging: false,
        scrolling: false,
        selected: 0
      },
      mouse: {
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0
      },
      draggingLink: null,
      rootDivOffset: {
        top: 0,
        left: 0
      }
    };
  },
  components: {
    FlowchartLink: FlowchartLink,
    FlowchartNode: FlowchartNode
  },
  computed: {
    scale: function scale() {
      return this.scene.scale || 1;
    },
    orientation: function orientation() {
      return this.scene.orientation || 'vert';
    },
    styles: function styles() {
      return _objectSpread({}, {
        nodeWidth: defaultWidth,
        nodeHeight: defaultHeight,
        themeColor: defaultThemeColor,
        nodeBgColor: defaultNodeBgColor,
        typeColor: defaultTypeColor,
        labelColor: defaultLabelColor,
        linkWidth: defaultLinkWidth
      }, {}, this.scene.styles);
    },
    nodeOptions: function nodeOptions() {
      return {
        centerY: this.scene.centerY,
        centerX: this.scene.centerX,
        scale: this.scale,
        selected: this.action.selected,
        orientation: this.orientation,
        width: this.styles.nodeWidth,
        height: this.styles.nodeHeight,
        themeColor: this.styles.themeColor,
        nodeBgColor: this.styles.nodeBgColor,
        typeColor: this.styles.typeColor,
        labelColor: this.styles.labelColor
      };
    },
    linkOptions: function linkOptions() {
      return {
        scale: this.scale,
        themeColor: this.styles.themeColor,
        labelColor: this.styles.labelColor,
        linkWidth: this.styles.linkWidth
      };
    },
    lines: function lines() {
      var _this = this;

      var lines = this.scene.links.map(function (link) {
        var fromNode = _this.findNodeWithID(link.from);

        var toNode = _this.findNodeWithID(link.to);

        var _this$getPortPosition = _this.getPortPosition(fromNode, 'output'),
            _this$getPortPosition2 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition, 2),
            sx = _this$getPortPosition2[0],
            sy = _this$getPortPosition2[1];

        var _this$getPortPosition3 = _this.getPortPosition(toNode, 'input'),
            _this$getPortPosition4 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition3, 2),
            ex = _this$getPortPosition4[0],
            ey = _this$getPortPosition4[1];

        return {
          start: [sx, sy],
          end: [ex, ey],
          id: link.id,
          color: link.color
        };
      });

      if (this.draggingLink) {
        var fromNode = this.findNodeWithID(this.draggingLink.from);

        var _this$getPortPosition5 = this.getPortPosition(fromNode, 'output'),
            _this$getPortPosition6 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition5, 2),
            sx = _this$getPortPosition6[0],
            sy = _this$getPortPosition6[1];

        lines.push({
          start: [sx, sy],
          end: [this.draggingLink.mx, this.draggingLink.my]
        });
      }

      return lines;
    }
  },
  mounted: function mounted() {
    this.rootDivOffset.top = this.$el ? this.$el.offsetTop : 0;
    this.rootDivOffset.left = this.$el ? this.$el.offsetLeft : 0;
  },
  methods: {
    findNodeWithID: function findNodeWithID(id) {
      return this.scene.nodes.find(function (item) {
        return id === item.id;
      });
    },
    getPortPosition: function getPortPosition(node, type) {
      var orientation = this.orientation;
      var scale = this.scale;
      var x = this.scene.centerX + node.x * scale;
      var y = this.scene.centerY + node.y * scale;
      var width = this.styles.nodeWidth;
      var height = this.styles.nodeHeight;

      if (orientation === 'vert') {
        var left = x + width / 2 * scale;

        if (type === 'input') {
          return [left, y];
        }

        return [left, y + height * scale];
      }

      var top = y + height / 2 * scale;

      if (type === 'input') {
        return [x, top];
      }

      return [x + width * scale, top];
    },
    linkingStart: function linkingStart(index) {
      var fromNode = this.findNodeWithID(index);

      var _this$getPortPosition7 = this.getPortPosition(fromNode, 'output'),
          _this$getPortPosition8 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition7, 2),
          mx = _this$getPortPosition8[0],
          my = _this$getPortPosition8[1];

      this.action.linking = true;
      this.draggingLink = {
        from: index,
        mx: mx,
        my: my
      };
    },
    linkingStop: function linkingStop(index) {
      var _this2 = this;

      // add new Link
      if (this.draggingLink && this.draggingLink.from !== index) {
        // check link existence
        var existed = this.scene.links.find(function (link) {
          return link.from === _this2.draggingLink.from && link.to === index;
        });

        if (!existed) {
          var maxID = Math.max.apply(Math, [0].concat(_toConsumableArray(this.scene.links.map(function (link) {
            return link.id;
          }))));
          var newLink = {
            id: maxID + 1,
            from: this.draggingLink.from,
            to: index
          };
          this.scene.links.push(newLink);
          this.$emit('linkAdded', newLink);
        }
      }

      this.draggingLink = null;
    },
    linkClick: function linkClick(id) {
      this.$emit('linkClick', this.findLink(id));
    },
    linkDelete: function linkDelete(id) {
      var link = this.findLink(id);

      if (link) {
        this.scene.links = this.scene.links.filter(function (item) {
          return item.id !== id;
        });
        this.$emit('linkBreak', link);
      }
    },
    linkMouseEnter: function linkMouseEnter(id) {
      if (!this.action.dragging) {
        this.$emit('linkMouseEnter', this.findLink(id));
      }
    },
    linkMouseLeave: function linkMouseLeave(id) {
      if (!this.action.dragging) {
        this.$emit('linkMouseLeave', this.findLink(id));
      }
    },
    findLink: function findLink(id) {
      return this.scene.links.find(function (item) {
        return item.id === id;
      });
    },
    nodeSelected: function nodeSelected(id, e) {
      this.action.dragging = id;
      this.action.selected = id;
      this.$emit('nodeClick', id);

      var _getMousePosition = getMousePosition(this.$el, e);

      var _getMousePosition2 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition, 2);

      this.mouse.lastX = _getMousePosition2[0];
      this.mouse.lastY = _getMousePosition2[1];
    },
    handleMove: function handleMove(e) {
      if (this.action.linking) {
        var _getMousePosition3 = getMousePosition(this.$el, e);

        var _getMousePosition4 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition3, 2);

        this.draggingLink.mx = _getMousePosition4[0];
        this.draggingLink.my = _getMousePosition4[1];
      } else if (this.action.dragging) {
        var _getMousePosition5 = getMousePosition(this.$el, e),
            _getMousePosition6 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition5, 2),
            mouseX = _getMousePosition6[0],
            mouseY = _getMousePosition6[1];

        var diffX = mouseX - this.mouse.lastX;
        var diffY = mouseY - this.mouse.lastY;
        this.mouse.lastX = mouseX;
        this.mouse.lastY = mouseY;
        this.mouse.lastEvent = e;
        this.moveSelectedNode(diffX, diffY);
        this.startAutoScroll();
      } else if (this.action.scrolling) {
        var _getMousePosition7 = getMousePosition(this.$el, e),
            _getMousePosition8 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition7, 2),
            _mouseX = _getMousePosition8[0],
            _mouseY = _getMousePosition8[1];

        var _diffX = _mouseX - this.mouse.lastX;

        var _diffY = _mouseY - this.mouse.lastY;

        this.mouse.lastX = _mouseX;
        this.mouse.lastY = _mouseY;
        this.scene.centerX += _diffX;
        this.scene.centerY += _diffY;
      }
    },
    handleUp: function handleUp(e) {
      var target = e.target || e.srcElement;

      if (this.$el.contains(target)) {
        if (typeof target.className !== 'string' || target.className.indexOf('node-input') < 0) {
          this.draggingLink = null;
        }

        if (typeof target.className === 'string' && target.className.indexOf('node-delete') > -1) {
          this.nodeDelete(this.action.dragging);
        }
      }

      this.action.linking = false;
      this.action.dragging = null;
      this.action.scrolling = false;
      this.stopAutoScroll();
    },
    handleDown: function handleDown(e) {
      var target = e.target || e.srcElement;

      if ((target === this.$el || target.matches('svg, svg *')) && e.which === 1) {
        this.action.scrolling = true;

        var _getMousePosition9 = getMousePosition(this.$el, e);

        var _getMousePosition10 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition9, 2);

        this.mouse.lastX = _getMousePosition10[0];
        this.mouse.lastY = _getMousePosition10[1];
        this.action.selected = null; // deselectAll
      }

      this.$emit('canvasClick', e);
    },
    moveSelectedNode: function moveSelectedNode(dx, dy) {
      var _this3 = this;

      var index = this.scene.nodes.findIndex(function (item) {
        return item.id === _this3.action.dragging;
      });
      var node = this.scene.nodes[index];
      var left = node.x + dx / this.scale;
      var top = node.y + dy / this.scale;
      this.$set(this.scene.nodes, index, Object.assign(node, {
        x: left,
        y: top
      }));
    },
    startAutoScroll: function startAutoScroll() {
      if (!this.autoScrollId) {
        this.autoScrollId = setInterval(this.autoScroll.bind(this), autoScrollTimeout);
      }
    },
    stopAutoScroll: function stopAutoScroll() {
      if (this.autoScrollId) {
        clearInterval(this.autoScrollId);
        this.autoScrollId = null;
      }
    },
    autoScroll: function autoScroll() {
      var _getMousePosition11 = getMousePosition(this.$el, this.mouse.lastEvent),
          _getMousePosition12 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition11, 2),
          mouseX = _getMousePosition12[0],
          mouseY = _getMousePosition12[1];

      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          width = _this$$el$getBounding.width,
          height = _this$$el$getBounding.height;

      var widthThreshold = this.styles.nodeWidth / 2;
      var heightThreshold = this.styles.nodeHeight / 2;
      var diffX = 0;
      var diffY = 0;

      if (mouseX < widthThreshold) {
        diffX = -autoScrollStep;
      } else if (width - mouseX < widthThreshold) {
        diffX = autoScrollStep;
      }

      if (mouseY < heightThreshold) {
        diffY = -autoScrollStep;
      } else if (height - mouseY < heightThreshold) {
        diffY = autoScrollStep;
      }

      if (diffX !== 0 || diffY !== 0) {
        this.moveSelectedNode(diffX, diffY);
        this.scene.centerX -= diffX;
        this.scene.centerY -= diffY;
      }
    },
    nodeDelete: function nodeDelete(id) {
      this.scene.nodes = this.scene.nodes.filter(function (node) {
        return node.id !== id;
      });
      this.scene.links = this.scene.links.filter(function (link) {
        return link.from !== id && link.to !== id;
      });
      this.$emit('nodeDelete', id);
    },
    nodeMouseEnter: function nodeMouseEnter(id) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseEnter', id);
      }
    },
    nodeMouseLeave: function nodeMouseLeave(id) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseLeave', id);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/LightFlowchart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LightFlowchartvue_type_script_lang_js_ = (LightFlowchartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LightFlowchart.vue?vue&type=style&index=0&id=29f1701c&scoped=true&lang=scss&
var LightFlowchartvue_type_style_index_0_id_29f1701c_scoped_true_lang_scss_ = __webpack_require__("dc8b");

// CONCATENATED MODULE: ./src/components/LightFlowchart.vue






/* normalize component */

var LightFlowchart_component = normalizeComponent(
  components_LightFlowchartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "29f1701c",
  null
  
)

/* harmony default export */ var LightFlowchart = (LightFlowchart_component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (LightFlowchart);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=vue-light-flowchart.common.js.map