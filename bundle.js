/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sky.jpg */ "./src/images/sky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-align: center;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

:root {
  --primary-text-color: white;
  --primary-text-size: 1rem;
  --primary-text-shadow: 2px 2px 8px white;
  --primary-font-family: Arial, Helvetica, sans-serif;
  --secondary-text-color: black;
}

/* Body Background */
body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: var(--primary-font-family);
}

/* Header */
.header {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.8rem;
  margin-top: 3rem;
  color: var(--primary-text-color);
  font-weight: bold;
  text-shadow: var(--primary-text-shadow);
}

.header > span {
  color: black;
  text-shadow: var(--primary-text-shadow);
}

/* Main Container (Pop-up) */
.popup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
}

/* Flex Container for Weather Overview and Forecast */
.main-container {
  display: flex;
  width: 75vw; /* Main container size */
  height: 75vh; /* Main container height */
  background-color: black;
  z-index: 9999;
  color: var(--primary-text-color);
  font-family: var(--primary-font-family);
  text-shadow: var(--primary-text-shadow);
}

/* Left Column (Overview and Forecast) */
.left-column {
  display: flex;
  flex-direction: column;
  width: 65%; /* 65% of the width */
  padding: 2rem;
  justify-content: space-between;
}

/* Right Column (Background Image and Details) */
.right-column {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  width: 35%; /* 35% of the width */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--primary-text-color);
  font-family: var(--primary-font-family);
  text-shadow: var(--primary-text-shadow);
}

/* Overview Section (Today’s Weather) */
.today-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
}

.today-header {
  font-style: italic;
  font-family: cursive;
  font-size: 1.5rem;
  color: var(--primary-text-color);
}

.today-temperature {
  font-size: 3rem;
  font-weight: bold;
}

/* Forecast Section */
.forecast-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
}

.forecast-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.forecast-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.forecast-day .weather-icon {
  font-size: 2rem;
}

.forecast-day .temperature-range {
  font-size: 1.2rem;
}

/* Small Details in Right Column */
.right-column .details {
  margin-top: auto;
  font-size: 1.2rem;
  color: var(--secondary-text-color);
}

.right-column .details p {
  margin-bottom: 1rem;
}

.left-column,
.right-column {
  width: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;;;;;;;;;EAUE,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,wCAAwC;EACxC,mDAAmD;EACnD,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,yDAA8C;EAC9C,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA,WAAW;AACX;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,gCAAgC;EAChC,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,uCAAuC;AACzC;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,oCAAoC;AACtC;;AAEA,qDAAqD;AACrD;EACE,aAAa;EACb,WAAW,EAAE,wBAAwB;EACrC,YAAY,EAAE,0BAA0B;EACxC,uBAAuB;EACvB,aAAa;EACb,gCAAgC;EAChC,uCAAuC;EACvC,uCAAuC;AACzC;;AAEA,wCAAwC;AACxC;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,qBAAqB;EACjC,aAAa;EACb,8BAA8B;AAChC;;AAEA,gDAAgD;AAChD;EACE,yDAAuC;EACvC,sBAAsB;EACtB,2BAA2B;EAC3B,UAAU,EAAE,qBAAqB;EACjC,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,gCAAgC;EAChC,uCAAuC;EACvC,uCAAuC;AACzC;;AAEA,uCAAuC;AACvC;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,kCAAkC;AAClC;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;AACb","sourcesContent":["html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  text-align: center;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n:root {\n  --primary-text-color: white;\n  --primary-text-size: 1rem;\n  --primary-text-shadow: 2px 2px 8px white;\n  --primary-font-family: Arial, Helvetica, sans-serif;\n  --secondary-text-color: black;\n}\n\n/* Body Background */\nbody {\n  background-image: url(./images/background.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  font-family: var(--primary-font-family);\n}\n\n/* Header */\n.header {\n  display: flex;\n  justify-content: center;\n  gap: 0.8rem;\n  font-size: 1.8rem;\n  margin-top: 3rem;\n  color: var(--primary-text-color);\n  font-weight: bold;\n  text-shadow: var(--primary-text-shadow);\n}\n\n.header > span {\n  color: black;\n  text-shadow: var(--primary-text-shadow);\n}\n\n/* Main Container (Pop-up) */\n.popup-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n/* Flex Container for Weather Overview and Forecast */\n.main-container {\n  display: flex;\n  width: 75vw; /* Main container size */\n  height: 75vh; /* Main container height */\n  background-color: black;\n  z-index: 9999;\n  color: var(--primary-text-color);\n  font-family: var(--primary-font-family);\n  text-shadow: var(--primary-text-shadow);\n}\n\n/* Left Column (Overview and Forecast) */\n.left-column {\n  display: flex;\n  flex-direction: column;\n  width: 65%; /* 65% of the width */\n  padding: 2rem;\n  justify-content: space-between;\n}\n\n/* Right Column (Background Image and Details) */\n.right-column {\n  background-image: url(./images/sky.jpg);\n  background-size: cover;\n  background-position: center;\n  width: 35%; /* 35% of the width */\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  color: var(--primary-text-color);\n  font-family: var(--primary-font-family);\n  text-shadow: var(--primary-text-shadow);\n}\n\n/* Overview Section (Today’s Weather) */\n.today-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  flex-grow: 1;\n}\n\n.today-header {\n  font-style: italic;\n  font-family: cursive;\n  font-size: 1.5rem;\n  color: var(--primary-text-color);\n}\n\n.today-temperature {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n/* Forecast Section */\n.forecast-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-size: 1.2rem;\n}\n\n.forecast-title {\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.forecast-day {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n}\n\n.forecast-day .weather-icon {\n  font-size: 2rem;\n}\n\n.forecast-day .temperature-range {\n  font-size: 1.2rem;\n}\n\n/* Small Details in Right Column */\n.right-column .details {\n  margin-top: auto;\n  font-size: 1.2rem;\n  color: var(--secondary-text-color);\n}\n\n.right-column .details p {\n  margin-bottom: 1rem;\n}\n\n.left-column,\n.right-column {\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)
/* harmony export */ });
async function fetchWeatherData(location) {
  const apiKey = '10c23a9273ad387f646309ba05c1d7b1';
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();

    const currentWeather = {
      city: data.city.name,
      country: data.city.country,
      temperature: Math.round(data.list[0].main.temp),
      description: data.list[0].weather[0].description,
      icon: data.list[0].weather[0].icon,
      feelsLike: Math.round(data.list[0].main.feels_like),
      windSpeed: data.list[0].wind.speed,
      humidity: data.list[0].main.humidity,
      pressure: data.list[0].main.pressure,
    };

    const forecast = data.list
      .filter((entry) => entry.dt_txt.includes('12:00:00'))
      .slice(0, 5) // 5 days MAX
      .map((entry) => ({
        day: new Date(entry.dt * 1000).toLocaleDateString('en-US', {
          weekday: 'long',
        }),
        maxTemperature: Math.round(entry.main.temp_max), // Max temperature
        minTemperature: Math.round(entry.main.temp_min), // Min temperature
        description: entry.weather[0].description,
        icon: entry.weather[0].icon, // Icon data, but we ignore this since you're using a static icon
      }));

    return { currentWeather, forecast };
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherPopup: () => (/* binding */ weatherPopup)
/* harmony export */ });
async function weatherPopup(weatherData) {
  const { currentWeather, forecast } = weatherData;

  const existingPopup = document.querySelector('.popup-wrapper');
  if (existingPopup) existingPopup.remove();

  const weatherPopupWrapper = document.createElement('div');
  weatherPopupWrapper.className = 'popup-wrapper';

  const weatherMainContainer = document.createElement('div');
  weatherMainContainer.className = 'main-container';

  weatherPopupWrapper.appendChild(weatherMainContainer);
  document.body.appendChild(weatherPopupWrapper);

  function createWeatherOverview() {
    const weatherOverviewContainer = document.createElement('div');
    weatherOverviewContainer.className = 'overview-container';
    weatherMainContainer.appendChild(weatherOverviewContainer);

    const overviewHeaderContainer = document.createElement('div');
    overviewHeaderContainer.className = 'overview-header-container';
    weatherOverviewContainer.appendChild(overviewHeaderContainer);

    const overviewLocation = document.createElement('h2');
    overviewLocation.className = 'overview-location';
    overviewLocation.textContent = `${currentWeather.city}, ${currentWeather.country}`;
    overviewHeaderContainer.appendChild(overviewLocation);

    const overviewTime = document.createElement('p');
    overviewTime.className = 'overview-time';
    overviewTime.textContent = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    overviewHeaderContainer.appendChild(overviewTime);

    const overviewTemperatureContainer = document.createElement('div');
    overviewTemperatureContainer.className = 'overview-temperature-container';
    weatherOverviewContainer.appendChild(overviewTemperatureContainer);

    const overviewTemperature = document.createElement('p');
    overviewTemperature.className = 'overview-temperature';
    overviewTemperature.textContent = `${currentWeather.temperature}°C`;
    overviewTemperatureContainer.appendChild(overviewTemperature);
  }

  function createWeatherToday() {
    const weatherTodayContainer = document.createElement('div');
    weatherTodayContainer.className = 'today-container';
    weatherMainContainer.appendChild(weatherTodayContainer);

    const weatherTodayHeader = document.createElement('p');
    weatherTodayHeader.className = 'today-header';
    weatherTodayHeader.textContent = "Today's weather details";
    weatherTodayContainer.appendChild(weatherTodayHeader);

    const todayDetails = [
      {
        icon: 'fa-temperature-full',
        label: 'Feels Like',
        value: `${currentWeather.feelsLike}°C`,
      },
      {
        icon: 'fa-wind',
        label: 'Wind Speed',
        value: `${currentWeather.windSpeed} m/s`,
      },
      {
        icon: 'fa-sun',
        label: 'Humidity',
        value: `${currentWeather.humidity}%`,
      },
      {
        icon: 'fa-moon',
        label: 'Pressure',
        value: `${currentWeather.pressure} hPa`,
      },
    ];

    todayDetails.forEach((detail, index) => {
      const rowContainer = document.createElement('div');
      rowContainer.className = `row-${index + 1}-container`;

      const rowLabel = document.createElement('p');
      rowLabel.className = `row-${index + 1}`;
      rowLabel.innerHTML = `<i class="fa-solid ${detail.icon}"></i> ${detail.label}`;

      const rowValue = document.createElement('p');
      rowValue.className = `row-${index + 1}-value`;
      rowValue.textContent = detail.value;

      rowContainer.appendChild(rowLabel);
      rowContainer.appendChild(rowValue);
      weatherTodayContainer.appendChild(rowContainer);
    });
  }

  function createWeatherForecast() {
    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'forecast-container';
    weatherMainContainer.appendChild(forecastContainer);

    const forecastTitle = document.createElement('p');
    forecastTitle.className = 'forecast-title';
    forecastTitle.textContent = 'Forecast for 5 days';
    forecastContainer.appendChild(forecastTitle);

    const daysContainer = document.createElement('div');
    daysContainer.className = 'days-container';

    forecast.forEach((day) => {
      const dayBox = document.createElement('div');
      dayBox.className = 'day-box';

      const dayName = document.createElement('div');
      dayName.className = 'day-name';
      dayName.textContent = day.day;

      const weatherIcon = document.createElement('div');
      weatherIcon.className = 'weather-icon';
      weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`; // Static cloud icon

      const weatherDescription = document.createElement('div');
      weatherDescription.className = 'weather-description';
      weatherDescription.textContent = day.description;

      const weatherTemperature = document.createElement('div');
      weatherTemperature.className = 'weather-temperature';
      weatherTemperature.innerHTML = `Max: ${day.maxTemperature}°C, Min: ${day.minTemperature}°C`;

      dayBox.appendChild(dayName);
      dayBox.appendChild(weatherIcon);
      dayBox.append(weatherDescription);
      dayBox.append(weatherTemperature);

      daysContainer.appendChild(dayBox);
    });

    forecastContainer.appendChild(daysContainer);
  }

  createWeatherOverview();
  createWeatherToday();
  createWeatherForecast();
}




/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6ea0901d49463f54e9d.jpg";

/***/ }),

/***/ "./src/images/sky.jpg":
/*!****************************!*\
  !*** ./src/images/sky.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1df05f1186befd7399d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/api.js");




document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.weather-form');
  const input = document.querySelector('#location');

  // Ensure the form and input exist before attaching the event listener
  if (form && input) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const city = input.value.trim();

      if (city) {
        try {
          const weatherData = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchWeatherData)(city); // Get weather data
          if (!weatherData) {
            alert('Invalid city or failed to fetch data.');
            return;
          }
          (0,_ui__WEBPACK_IMPORTED_MODULE_1__.weatherPopup)(weatherData); // Pass data to UI
        } catch (error) {
          console.error('Error fetching weather data:', error);
          alert('Could not fetch weather data. Please try again.');
        }
      } else {
        alert('Please enter a city name.');
      }
    });
  } else {
    console.error('Form or input element not found!');
  }
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map