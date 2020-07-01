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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js?!./scss/main.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--6-2!../node_modules/postcss-loader/src??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4!./scss/main.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/main.scss?../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--6-2!../node_modules/postcss-loader/src??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdn.jsdelivr.net/npm/basiclightbox@5.0.3/dist/basicLightbox.min.css\\\">\\r\\n    <title>webpack-test</title>\\r\\n  </head>\\r\\n  <body>\\r\\n    <div class=\\\"timer-m11\\\">\\r\\n      <p class=\\\"clockface js-downData\\\">00:00:00</p>\\r\\n      <p class=\\\"clockface js-clockface\\\">00:00:00</p>\\r\\n      <div class=\\\"actions\\\">\\r\\n        <button class=\\\"tiner-btn\\\" data-action=\\\"start-timer\\\">Start</button>\\r\\n        <button class=\\\"tiner-btn\\\" data-action=\\\"stop-timer\\\">Stop</button>\\r\\n      </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"timer\\\" id=\\\"timer-1\\\">\\r\\n      <div class=\\\"field\\\">\\r\\n        <span class=\\\"value\\\" data-value=\\\"days\\\">11</span>\\r\\n        <span class=\\\"label\\\">Days</span>\\r\\n      </div>\\r\\n    \\r\\n      <div class=\\\"field\\\">\\r\\n        <span class=\\\"value\\\" data-value=\\\"hours\\\">11</span>\\r\\n        <span class=\\\"label\\\">Hours</span>\\r\\n      </div>\\r\\n    \\r\\n      <div class=\\\"field\\\">\\r\\n        <span class=\\\"value\\\" data-value=\\\"mins\\\">11</span>\\r\\n        <span class=\\\"label\\\">Minutes</span>\\r\\n      </div>\\r\\n    \\r\\n      <div class=\\\"field\\\">\\r\\n        <span class=\\\"value\\\" data-value=\\\"secs\\\">11</span>\\r\\n        <span class=\\\"label\\\">Seconds</span>\\r\\n      </div>\\r\\n    </div>\\r\\n\\r\\n    \\r\\n    <script src=\\\"https://cdn.jsdelivr.net/npm/basiclightbox@5.0.3/dist/basicLightbox.min.js\\\"></script>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/promise.js */ \"./js/promise.js\");\n/* harmony import */ var _js_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_timerClock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/timerClock */ \"./js/timerClock.js\");\n/* harmony import */ var _js_PlaginDownTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/PlaginDownTime */ \"./js/PlaginDownTime.js\");\n/* harmony import */ var _js_ColorsTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/ColorsTimer */ \"./js/ColorsTimer.js\");\n'use strick';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst colorT = {\r\n  colors: ['#FFF333', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],\r\n  elem: document.body,\r\n};\r\n\r\nconst refs = {\r\n  btnStart: document.querySelector('button[data-action=\"start-timer\"]'),\r\n  btnStop: document.querySelector('button[data-action=\"stop-timer\"]'),\r\n  clock: document.querySelector('.js-clockface'),\r\n  downData: document.querySelector('.js-downData'),\r\n  spanDD: document.querySelector('span[data-value=\"days\"]'),\r\n  spanDH: document.querySelector('span[data-value=\"hours\"]'),\r\n  spanDM: document.querySelector('span[data-value=\"mins\"]'),\r\n  spanDS: document.querySelector('span[data-value=\"secs\"]'),\r\n\r\n  fallTime: '09, 01 , 2020 00:00:00',\r\n};\r\n\r\nnew _js_timerClock__WEBPACK_IMPORTED_MODULE_3__[\"default\"](refs);\r\nnew _js_PlaginDownTime__WEBPACK_IMPORTED_MODULE_4__[\"default\"](refs);\r\nnew _js_ColorsTimer__WEBPACK_IMPORTED_MODULE_5__[\"default\"](colorT, refs);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/ColorsTimer.js":
/*!***************************!*\
  !*** ./js/ColorsTimer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ColorTimer; });\n\r\n\r\nclass ColorTimer {\r\n\tconstructor({ colors, elem }, { btnStart, btnStop }) {\r\n\t\tthis._colors = colors;\r\n\t\tthis._elem = elem;\r\n\t\tthis.btnStart = btnStart;\r\n\t\tthis.btnStop = btnStop;\r\n\t\tthis.isAction = false;\r\n\r\n\t\tthis.eventlist();\r\n\t}\r\n\r\n\tstart() {\r\n\t\tif (this.isAction) return;\r\n\t\tthis.isAction = true;\r\n\r\n\t\tthis.timerID = setInterval(() => {\r\n\t\t\tthis._elem.bgColor = this._colors[this.randomIntegerFromInterval(0, this._colors.length)];\r\n\t\t}, 1000);\r\n\t}\r\n\r\n\tstop() {\r\n\t\tthis.isAction = false;\r\n\t\tclearTimeout(this.timerID);\r\n\t\tthis._elem.bgColor = 'FFFFFF';\r\n\t}\r\n\r\n\teventlist() {\r\n\t\tthis.btnStart.addEventListener('click', () => this.start());\r\n\t\tthis.btnStop.addEventListener('click', () => this.stop());\r\n\t}\r\n\r\n\trandomIntegerFromInterval(min, max) {\r\n\t\treturn Math.floor(Math.random() * (max - min + 1) + min);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./js/ColorsTimer.js?");

/***/ }),

/***/ "./js/PlaginDownTime.js":
/*!******************************!*\
  !*** ./js/PlaginDownTime.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyTimer; });\n\r\n\r\nclass MyTimer {\r\n  constructor({ fallTime, spanDD, spanDH, spanDM, spanDS }) {\r\n    this._spanDS = spanDS;\r\n    this._spanDM = spanDM;\r\n    this._spanDH = spanDH;\r\n    this._spanDD = spanDD;\r\n    this._startTimesFall = fallTime;\r\n\r\n    this.downStart();\r\n  }\r\n  pad(val) {\r\n    return String(val).padStart(2, '0');\r\n  }\r\n\r\n  downStart() {\r\n    this.downStartTime = new Date(this._startTimesFall);\r\n\r\n    this.downTimerID = setInterval(() => {\r\n      this.downCurentTime = Date.now();\r\n      this.downDeltaTime = this.downStartTime - this.downCurentTime;\r\n\r\n      this.downClock(this.downDeltaTime);\r\n    }, 1000);\r\n  }\r\n\r\n  downClock(time) {\r\n    this.days(time);\r\n    this.hours(time);\r\n    this.minus(time);\r\n    this.seconds(time);\r\n  }\r\n\r\n  days(time) {\r\n    this.daysDown = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));\r\n\r\n    this._spanDD.textContent = `${this.daysDown}`;\r\n  }\r\n  hours(time) {\r\n    this.hoursDown = this.pad(\r\n      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),\r\n    );\r\n    this._spanDH.textContent = `${this.hoursDown}`;\r\n  }\r\n  minus(time) {\r\n    this.minsDown = this.pad(\r\n      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),\r\n    );\r\n    this._spanDM.textContent = `${this.minsDown}`;\r\n  }\r\n  seconds(time) {\r\n    this.secsDown = this.pad(Math.floor((time % (1000 * 60)) / 1000));\r\n    this._spanDS.textContent = `${this.secsDown}`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/PlaginDownTime.js?");

/***/ }),

/***/ "./js/promise.js":
/*!***********************!*\
  !*** ./js/promise.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("'use strick';\r\n//-------------------------task2\r\nconst delay = (ms) => {\r\n\treturn new Promise((resolve, reject) => {\r\n\t\tif (ms < 1000) reject('строка  error ------');\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tresolve(ms);\r\n\t\t}, ms);\r\n\t});\r\n};\r\n\r\nconst logger = (time) => console.log(`Resolved after ${time}ms`);\r\n\r\ndelay(6000).then(logger);\r\ndelay(2000).then(logger); // Resolved after 2000ms\r\ndelay(1000).then(logger); // Resolved after 1000ms\r\ndelay(1500).then(logger); // Resolved after 1500ms\r\ndelay(100)\r\n\t.then((value) => {\r\n\t\tconsole.log(value);\r\n\t})\r\n\t.catch((error) => {\r\n\t\tconsole.log(error);\r\n\t})\r\n\t.finally(() => {\r\n\t\tconsole.log('finished!');\r\n\t});\r\n\r\n//----------------------------- task 2\r\n//Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback,\r\n// а принимала всего два параметра allUsers и userName и возвращала промис.\r\n\r\nconst users = [\r\n\t{ name: 'Mango', active: true },\r\n\t{ name: 'Poly', active: false },\r\n\t{ name: 'Ajax', active: true },\r\n\t{ name: 'Lux', active: false }\r\n];\r\n\r\nconst toggleUserState = (allUsers, userName) => {\r\n\tconst updatedUsers = allUsers.map((user) => user.name);\r\n\r\n\treturn new Promise((resolve, reject) => {\r\n\t\tif (updatedUsers.indexOf(userName) === -1) reject(userName);\r\n\t\tresolve(userName);\r\n\t});\r\n};\r\n('task 2--------------------Таких нету');\r\nconst logger1 = (updatedUsers) => console.log('task 2--------------------Такое име есть :', updatedUsers);\r\nconst logger2 = (updatedUsers) => console.warn('task 2--------------------Таких нету', updatedUsers);\r\n/*\r\n\t   * Сейчас работает так\r\n\t   */\r\ntoggleUserState(users, 'Mango').then(logger1).catch(logger2);\r\ntoggleUserState(users, 'Lux').then(logger1).catch(logger2);\r\ntoggleUserState(users, 'Lux2').then(logger1).catch(logger2);\r\ntoggleUserState(users, 'Poly').then(logger1).catch(logger2);\r\ntoggleUserState(users, 'Ajax').then(logger1).catch(logger2);\r\ntoggleUserState(users, 'Ajax1').then(logger1).catch(logger2);\r\ntoggleUserState(users, 'Ajax7').then(logger1).catch(logger2);\r\n///------------------------------------------------task 3\r\n//Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError,\r\n// а принимала всего один параметр transaction и возвращала промис.\r\n\r\nconst randomIntegerFromInterval = (min, max) => {\r\n\treturn Math.floor(Math.random() * (max - min + 1) + min);\r\n};\r\n\r\nconst makeTransaction = (transaction) => {\r\n\tconst delay = randomIntegerFromInterval(200, 500);\r\n\treturn new Promise((resolve, reject) => {\r\n\t\tsetTimeout(() => {\r\n\t\t\tconst canProcess = Math.random() > 0.3;\r\n\r\n\t\t\tif (canProcess) resolve(`Transaction ${transaction.id} processed in ${delay}ms`);\r\n\t\t\treject(`Error processing transaction ${transaction.id}. Please try again later.`);\r\n\t\t}, delay);\r\n\t});\r\n};\r\n\r\nconst logSuccess = (id, time) => {\r\n\tconsole.log(`Transaction ${id} processed in ${time}ms`);\r\n};\r\n\r\nconst logError = (id) => {\r\n\tconsole.warn(`Error processing transaction ${id}. Please try again later.`);\r\n};\r\n\r\nmakeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);\r\nmakeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);\r\nmakeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);\r\nmakeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);\r\n\n\n//# sourceURL=webpack:///./js/promise.js?");

/***/ }),

/***/ "./js/timerClock.js":
/*!**************************!*\
  !*** ./js/timerClock.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyTimer; });\n\r\n\r\nclass MyTimer {\r\n  constructor({ fallTime, clock, btnStart, btnStop, downData }) {\r\n    this.elem = clock;\r\n    this.downData = downData;\r\n    this.btnStart = btnStart;\r\n    this.btnStop = btnStop;\r\n    this.startTimesFall = fallTime;\r\n    this.isAction = false;\r\n\r\n    this.eventlist();\r\n    this.downStart();\r\n  }\r\n\r\n  start() {\r\n    if (this.isAction) return;\r\n    this.isAction = true;\r\n    this.startTime = Date.now();\r\n    this.timerID = setInterval(() => {\r\n      this.curentTime = Date.now();\r\n      this.deltaTime = this.curentTime - this.startTime;\r\n\r\n      this.updateClock(this.deltaTime);\r\n    }, 1000);\r\n  }\r\n\r\n  stop() {\r\n    this.isAction = false;\r\n    clearInterval(this.timerID);\r\n    this.deltaTime = 0;\r\n    this.updateClock(this.deltaTime);\r\n  }\r\n\r\n  updateClock(dataTime) {\r\n    this.data = new Date(dataTime);\r\n    this.hours = this.pad(this.data.getUTCHours());\r\n    this.mins = this.pad(this.data.getMinutes());\r\n    this.secs = this.pad(this.data.getSeconds());\r\n    this.elem.textContent = `${this.hours}:${this.mins}:${this.secs}`;\r\n  }\r\n\r\n  pad(val) {\r\n    //.padEnd(maxLength, fillString)\r\n    return String(val).padStart(2, '0');\r\n  }\r\n  eventlist() {\r\n    this.btnStart.addEventListener('click', () => this.start());\r\n    this.btnStop.addEventListener('click', () => this.stop());\r\n  }\r\n\r\n  downStart() {\r\n    this.downStartTime = new Date(this.startTimesFall);\r\n\r\n    this.downTimerID = setInterval(() => {\r\n      this.downCurentTime = Date.now();\r\n      this.downDeltaTime = this.downStartTime - this.downCurentTime;\r\n      this.downdataClokc(this.downDeltaTime);\r\n    }, 1000);\r\n  }\r\n\r\n  downdataClokc(time) {\r\n    this.daysDown = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));\r\n    this.hoursDown = this.pad(\r\n      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),\r\n    );\r\n    this.minsDown = this.pad(\r\n      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),\r\n    );\r\n    this.secsDown = this.pad(Math.floor((time % (1000 * 60)) / 1000));\r\n    this.downData.textContent = `${this.daysDown}:${this.hoursDown}:${this.minsDown}:${this.secsDown}`;\r\n  }\r\n}\r\n\r\n// /*\r\n//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество\r\n//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)\r\n//  */\r\n// const days = Math.floor(time / (1000 * 60 * 60 * 24));\r\n\r\n// /*\r\n//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора\r\n//  * остатка % и делим его на количество миллисекунд в одном часе\r\n//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)\r\n//  */\r\n// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\n\r\n// /*\r\n//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество\r\n//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)\r\n//  */\r\n// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));\r\n\r\n// /*\r\n//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество\r\n//  * миллисекунд в одной секунде (1000)\r\n//  */\r\n// const secs = Math.floor((time % (1000 * 60)) / 1000);\r\n\r\nconsole.log(\r\n  '---------------------------------start test timer clock----------------------------',\r\n);\r\n// let data = new Date();\r\n// const options = {\r\n// \thour: '2-digit',\r\n// \tminute: '2-digit',\r\n// \tsecond: '2-digit'\r\n// };\r\n// const timeUA = data.toLocaleString('Uk-uk', options);\r\n// rafs.clock.textContent = timeUA;\r\n// let c = 0;\r\n\r\n// rafs.batStart.addEventListener('click', (e) => {\r\n// \tconst elem = e.target;\r\n// \tc += 1;\r\n// \trafs.clock.textContent = c;\r\n// });\r\n\r\n// rafs.batStop.addEventListener('click', (e) => {\r\n// \tconst elem = e.target;\r\n// \tc -= 1;\r\n\r\n// \trafs.clock.textContent = MyTimer.start.bind(MyTimer);\r\n// });\r\nconsole.log(\r\n  '---------------------------------stop test timer clock----------------------------',\r\n);\r\n\n\n//# sourceURL=webpack:///./js/timerClock.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--6-2!../../node_modules/postcss-loader/src??ref--6-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-4!./main.scss */ \"../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js?!./scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ })

/******/ });