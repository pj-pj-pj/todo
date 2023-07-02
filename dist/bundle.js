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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --highlight: hsla(215, 88%, 60%, 0.48);
  --depth-lighter: rgba(11, 16, 27, 0.5);
  --bg: rgba(32, 33, 42);
  --bg-depth: rgb(29, 30, 39);
  --depth: rgb(11, 16, 27);
  --text: rgb(255, 255, 255);
  --border: rgb(97, 97, 97, 0.2);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  font-family: 'Inter Tight', sans-serif;
  background-color: var(--bg);
  color: var(--text);
}

img {
  filter: invert(100%);
  max-height: 40px;
  margin: 10px;
}

button {
  background-color: transparent;
  border: 0;
  color: var(--text);
}

.btn {
  box-shadow: rgba(0, 0, 0, 0.044) 0px 1px 3px, rgba(0, 0, 0, 0.13) 0px 1px 2px;
  border-radius: 8px;
}

/* header */

header {
  display: flex;
  align-items: center;
  padding: 10px 2vmin;
  background-color: var(--depth);
}

button.options {
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: var(--depth-lighter);
  border: none;
}

button.options:hover {
  filter: brightness(40%);
}

/* nav */

nav {
  display: none;

  flex-direction: column;
  gap: 5px;

  padding: 20px 3vmin;
  background-color: var(--bg-depth);
  border-bottom: 1px solid var(--border);
}

nav.visible {
  display: flex;
}

nav p {
  font-size: 1em;
}

nav div {
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 3px;
}

nav div:hover {
  filter: brightness(70%);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.active {
  background-color: var(--highlight);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

nav img {
  max-height: 20px;
}

/* content section */

main {
  display: grid;
  flex-grow: 1;
  grid-template-rows: auto 1fr;
}

section {
  padding: 20px 7vmin;
}

#content-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

#content-header .title {
  font-size: 1.6em;
}

#content-header .title:focus-visible {
  outline: none;
  border-bottom: 1px solid var(--text);
  flex-grow: 1;
  margin-right: 10px;
}

#back-btn {
  display: none;
  align-items: center;
  font-size: 14px;
  padding: 5px 15px 7px 10px;
  border-radius: 8px;
  background-color: var(--depth-lighter);
  margin-right: 100%;
}

#back-btn.visible {
  display: flex;
}

#back-btn:hover {
  background-color: var(--depth);
  filter: brightness(70%);
}

#back-btn img {
  max-height: 20px;
  margin: 0;
}

.task-menu {
  display: none;
  margin-top: 5px;
}

.task-menu.visible {
  display: flex;
}

.task-menu button {
  flex-grow: 1;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.9em;
}

section .btn {
  margin-left: auto;
}

.add-btn {
  padding: 0 10px;
  font-size: 2em;
}

.taskoption-btn img {
  max-height: 30px;
}

.add-btn:hover,
.taskoption-btn:hover,
.task-menu button:hover {
  background-color: var(--depth-lighter);
  filter: brightness(50%);
}
/* task-card */

#container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px 20px;
  margin-top: 20px;
  margin-bottom: 50px;
}

#container img {
  max-width: 23px;
}

#container span {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
}

#container span p {
  width: 100%;
  font-size: 1.5em;
}

#container span p:focus-visible {
  outline: none;
  border-bottom: 1px solid var(--text);
}

.task-card,
.proj-card {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  background-color: var(--bg);
  padding: 15px;
  border-radius: 3px;
  border: 1px solid var(--border);
  grid-gap: 5px 0;
}

.proj-card:hover {
  background-color: var(--bg-depth);
  margin-top: -5px;
  margin-bottom: 5px;
  transition: all 0.2s ease-in;
}

.task-card button {
  color: white;
  background-color: var(--depth);
  padding: 6px 0px;
  border: 0;
  border-radius: 20px;
}

.task-card button:hover {
  filter: brightness(60%);
}

.task-name:focus-visible,
.task-date:focus-visible {
  outline: none;
  border-bottom: 1px solid var(--text);
}

.task-name,
.proj-name {
  grid-column: 1 / span 2;
  margin-bottom: 15px;

  border: none;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 18px;
}

.task-date {
  background-color: transparent;
  color: inherit;
  border: none;
  font-family: inherit;
  max-width: 100px;
  font-size: 14px;
}

.task-date,
.del-btn {
  justify-self: end;
}

.task-state,
.priority {
  justify-self: start;
  width: 90px;
  text-align: center;
}

.task-state:hover {
  background-color: var(--highlight);
}

button.del-btn {
  background-color: transparent;
  padding: 0px;
}

.del-btn:hover {
  background-color: var(--depth);
}

.del-btn img {
  max-height: 18px;
}

.proj-card .task-count {
  grid-row: 2 / span 1;
  font-size: 14px;
}

/* footer */

footer {
  font-size: 13px;
  width: 100%;
  text-align: center;
  margin-top: auto;
  margin-bottom: 20px;
  padding-bottom: 2%;
}

@media (min-width: 890px) {
  main {
    grid-template-columns: 330px 1fr;
  }

  header button.options {
    display: none;
  }

  nav {
    display: block;
    border: none;
    grid-row: 1 / span 2;
  }
}

/* ADDTASK FORM */

#addtask-container,
#addproj-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  grid-template-columns: auto 1fr 118px;
  grid-template-rows: 1fr 1fr auto;
  grid-gap: 10px;
  font-size: 16px;

  border-radius: 10px;
  background-color: var(--depth);
  padding: 15px;
}

#addtask-container p.add-task-title,
#addproj-container p.add-proj-title {
  width: 100%;
  margin-bottom: 10px;
}

#addtask-container input,
select:focus-visible,
#addproj-container input {
  outline: none;
}

#addproj-container input {
  flex-grow: 1;
}

#addtask-container input,
#addproj-container input,
select {
  background-color: var(--bg-depth);
  border: none;
  color: var(--text);
  padding: 10px;

  border: 1px solid var(--border);
  font-size: inherit;
}

#addtask-container select {
  border: 0;
  flex-grow: 2;
}

#addtask-container select option {
  background-color: var(--depth);
}

#addtask-container select option:hover {
  background-color: var(--depth-lighter);
}

#addtask-container input[type='date'] {
  font-family: inherit;
  flex-grow: 1;
  border: 1px solid var(--border);
}

input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(100%);
}

#name-field {
  flex-grow: 15;
}

#priority-container {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14.5px;

  border: 1px solid var(--border);
  padding-left: 10px;
  flex-grow: 2;
}

#addtask-btn-container,
#addproj-btn-container {
  display: flex;
  margin-top: 10px;
  justify-self: center;
  gap: 30px;
  width: 100%;
  margin: auto;
}

#addtask-btn-container button:first-child:hover,
#addproj-btn-container button:first-child:hover {
  background-color: var(--highlight);
}

#addtask-btn-container button:nth-child(2):hover,
#addproj-btn-container button:nth-child(2):hover {
  filter: brightness(80%);
  background-color: var(--bg);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300&display=swap');\n\n:root {\n  --highlight: hsla(215, 88%, 60%, 0.48);\n  --depth-lighter: rgba(11, 16, 27, 0.5);\n  --bg: rgba(32, 33, 42);\n  --bg-depth: rgb(29, 30, 39);\n  --depth: rgb(11, 16, 27);\n  --text: rgb(255, 255, 255);\n  --border: rgb(97, 97, 97, 0.2);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  font-family: 'Inter Tight', sans-serif;\n  background-color: var(--bg);\n  color: var(--text);\n}\n\nimg {\n  filter: invert(100%);\n  max-height: 40px;\n  margin: 10px;\n}\n\nbutton {\n  background-color: transparent;\n  border: 0;\n  color: var(--text);\n}\n\n.btn {\n  box-shadow: rgba(0, 0, 0, 0.044) 0px 1px 3px, rgba(0, 0, 0, 0.13) 0px 1px 2px;\n  border-radius: 8px;\n}\n\n/* header */\n\nheader {\n  display: flex;\n  align-items: center;\n  padding: 10px 2vmin;\n  background-color: var(--depth);\n}\n\nbutton.options {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  background-color: var(--depth-lighter);\n  border: none;\n}\n\nbutton.options:hover {\n  filter: brightness(40%);\n}\n\n/* nav */\n\nnav {\n  display: none;\n\n  flex-direction: column;\n  gap: 5px;\n\n  padding: 20px 3vmin;\n  background-color: var(--bg-depth);\n  border-bottom: 1px solid var(--border);\n}\n\nnav.visible {\n  display: flex;\n}\n\nnav p {\n  font-size: 1em;\n}\n\nnav div {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 3px;\n}\n\nnav div:hover {\n  filter: brightness(70%);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\n.active {\n  background-color: var(--highlight);\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\nnav img {\n  max-height: 20px;\n}\n\n/* content section */\n\nmain {\n  display: grid;\n  flex-grow: 1;\n  grid-template-rows: auto 1fr;\n}\n\nsection {\n  padding: 20px 7vmin;\n}\n\n#content-header {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n#content-header .title {\n  font-size: 1.6em;\n}\n\n#content-header .title:focus-visible {\n  outline: none;\n  border-bottom: 1px solid var(--text);\n  flex-grow: 1;\n  margin-right: 10px;\n}\n\n#back-btn {\n  display: none;\n  align-items: center;\n  font-size: 14px;\n  padding: 5px 15px 7px 10px;\n  border-radius: 8px;\n  background-color: var(--depth-lighter);\n  margin-right: 100%;\n}\n\n#back-btn.visible {\n  display: flex;\n}\n\n#back-btn:hover {\n  background-color: var(--depth);\n  filter: brightness(70%);\n}\n\n#back-btn img {\n  max-height: 20px;\n  margin: 0;\n}\n\n.task-menu {\n  display: none;\n  margin-top: 5px;\n}\n\n.task-menu.visible {\n  display: flex;\n}\n\n.task-menu button {\n  flex-grow: 1;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 0.9em;\n}\n\nsection .btn {\n  margin-left: auto;\n}\n\n.add-btn {\n  padding: 0 10px;\n  font-size: 2em;\n}\n\n.taskoption-btn img {\n  max-height: 30px;\n}\n\n.add-btn:hover,\n.taskoption-btn:hover,\n.task-menu button:hover {\n  background-color: var(--depth-lighter);\n  filter: brightness(50%);\n}\n/* task-card */\n\n#container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 15px 20px;\n  margin-top: 20px;\n  margin-bottom: 50px;\n}\n\n#container img {\n  max-width: 23px;\n}\n\n#container span {\n  grid-column: 1 / -1;\n  display: flex;\n  align-items: center;\n}\n\n#container span p {\n  width: 100%;\n  font-size: 1.5em;\n}\n\n#container span p:focus-visible {\n  outline: none;\n  border-bottom: 1px solid var(--text);\n}\n\n.task-card,\n.proj-card {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  background-color: var(--bg);\n  padding: 15px;\n  border-radius: 3px;\n  border: 1px solid var(--border);\n  grid-gap: 5px 0;\n}\n\n.proj-card:hover {\n  background-color: var(--bg-depth);\n  margin-top: -5px;\n  margin-bottom: 5px;\n  transition: all 0.2s ease-in;\n}\n\n.task-card button {\n  color: white;\n  background-color: var(--depth);\n  padding: 6px 0px;\n  border: 0;\n  border-radius: 20px;\n}\n\n.task-card button:hover {\n  filter: brightness(60%);\n}\n\n.task-name:focus-visible,\n.task-date:focus-visible {\n  outline: none;\n  border-bottom: 1px solid var(--text);\n}\n\n.task-name,\n.proj-name {\n  grid-column: 1 / span 2;\n  margin-bottom: 15px;\n\n  border: none;\n  background-color: transparent;\n  color: inherit;\n  font-family: inherit;\n  font-size: 18px;\n}\n\n.task-date {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  font-family: inherit;\n  max-width: 100px;\n  font-size: 14px;\n}\n\n.task-date,\n.del-btn {\n  justify-self: end;\n}\n\n.task-state,\n.priority {\n  justify-self: start;\n  width: 90px;\n  text-align: center;\n}\n\n.task-state:hover {\n  background-color: var(--highlight);\n}\n\nbutton.del-btn {\n  background-color: transparent;\n  padding: 0px;\n}\n\n.del-btn:hover {\n  background-color: var(--depth);\n}\n\n.del-btn img {\n  max-height: 18px;\n}\n\n.proj-card .task-count {\n  grid-row: 2 / span 1;\n  font-size: 14px;\n}\n\n/* footer */\n\nfooter {\n  font-size: 13px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  margin-bottom: 20px;\n  padding-bottom: 2%;\n}\n\n@media (min-width: 890px) {\n  main {\n    grid-template-columns: 330px 1fr;\n  }\n\n  header button.options {\n    display: none;\n  }\n\n  nav {\n    display: block;\n    border: none;\n    grid-row: 1 / span 2;\n  }\n}\n\n/* ADDTASK FORM */\n\n#addtask-container,\n#addproj-container {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  align-items: center;\n  grid-template-columns: auto 1fr 118px;\n  grid-template-rows: 1fr 1fr auto;\n  grid-gap: 10px;\n  font-size: 16px;\n\n  border-radius: 10px;\n  background-color: var(--depth);\n  padding: 15px;\n}\n\n#addtask-container p.add-task-title,\n#addproj-container p.add-proj-title {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n#addtask-container input,\nselect:focus-visible,\n#addproj-container input {\n  outline: none;\n}\n\n#addproj-container input {\n  flex-grow: 1;\n}\n\n#addtask-container input,\n#addproj-container input,\nselect {\n  background-color: var(--bg-depth);\n  border: none;\n  color: var(--text);\n  padding: 10px;\n\n  border: 1px solid var(--border);\n  font-size: inherit;\n}\n\n#addtask-container select {\n  border: 0;\n  flex-grow: 2;\n}\n\n#addtask-container select option {\n  background-color: var(--depth);\n}\n\n#addtask-container select option:hover {\n  background-color: var(--depth-lighter);\n}\n\n#addtask-container input[type='date'] {\n  font-family: inherit;\n  flex-grow: 1;\n  border: 1px solid var(--border);\n}\n\ninput[type='date']::-webkit-calendar-picker-indicator {\n  filter: invert(100%);\n}\n\n#name-field {\n  flex-grow: 15;\n}\n\n#priority-container {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  font-size: 14.5px;\n\n  border: 1px solid var(--border);\n  padding-left: 10px;\n  flex-grow: 2;\n}\n\n#addtask-btn-container,\n#addproj-btn-container {\n  display: flex;\n  margin-top: 10px;\n  justify-self: center;\n  gap: 30px;\n  width: 100%;\n  margin: auto;\n}\n\n#addtask-btn-container button:first-child:hover,\n#addproj-btn-container button:first-child:hover {\n  background-color: var(--highlight);\n}\n\n#addtask-btn-container button:nth-child(2):hover,\n#addproj-btn-container button:nth-child(2):hover {\n  filter: brightness(80%);\n  background-color: var(--bg);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   "default": () => (/* binding */ todo),
/* harmony export */   projList: () => (/* binding */ projList)
/* harmony export */ });
const projList = createList('Tasks'); //storage of all projects

// p for proj, t for task
projList.getTaskOf = function (pIndex, tIndex) {
  return projList.getList()[pIndex].getList()[tIndex];
};

function createTask(name, dueDate, priority) {
  let task = {};

  task.name = name;
  task.dueDate = dueDate;
  task.priority = priority;
  task.isFin = 'Unfinished';

  task.setName = function (newName) {
    this.name = newName;
  };

  task.setDueDate = function (newDate) {
    this.dueDate = newDate;
  };

  task.setPriority = function (newPrio) {
    this.priority = newPrio;
  };

  task.toggleComplete = function () {
    if (this.isFin == 'Finished') {
      this.isFin = 'Unfinished';
    } else {
      this.isFin = 'Finished';
    }
  };

  task.delete = function () {
    for (let project of projList.getList()) {
      const taskIndex = project.getList().indexOf(this);
      if (taskIndex !== -1) {
        project.getList().splice(taskIndex, 1);
        break; // Exit the loop after deleting the task
      }
    }
  };

  return task;
}

function createList(name) {
  let list = {};

  list.name = name;
  list.items = []; // will store projects OR tasks

  list.setName = function (newName) {
    this.name = newName;
  };

  list.add = function (a) {
    this.items.push(a);
  };

  list.getList = function () {
    return this.items;
  };

  return list;
}

function todo() {
  projList.add(createList('General Task'));
  projList.add(createList('Test Project'));
  projList.add(createList('Test Project 2'));

  projList.getList()[0].add(createTask('Task name', '2023-05-01', 'Medium'));
  projList.getList()[0].add(createTask('Task name here', '2023-08-09', 'High'));
  projList.getList()[0].add(createTask('Task name here', '2023-08-09', 'High'));
  projList.getList()[1].add(createTask('Task name here', '2023-08-09', 'Low'));
  projList.getList()[1].add(createTask('Task name here', '2023-08-09', 'High'));
  projList.getList()[1].add(createTask('Task name here', '2023-08-09', 'Low'));
  projList.getList()[2].add(createTask('Task name', '2023-05-01', 'Medium'));
  projList.getList()[2].add(createTask('Task name here', '2023-07-23', 'Low'));
  projList.getList()[2].add(createTask('Task name here', '2023-07-23', 'High'));
  projList.getList()[2].add(createTask('Task name here', '2023-07-23', 'High'));
}


/***/ }),

/***/ "./src/uiDisplay.js":
/*!**************************!*\
  !*** ./src/uiDisplay.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _dist_assets_proj_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../dist/assets/proj.png */ "./dist/assets/proj.png");
/* harmony import */ var _dist_assets_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../dist/assets/delete.png */ "./dist/assets/delete.png");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");




const contentHeader = document.querySelector('div#content-header p');
const backToProj = document.querySelector('#back-btn');
const container = document.querySelector('div#container');
const navMenuBtn = document.querySelector('header button.options');
const taskMenuBtn = document.querySelector('.taskoption-btn');
const headernav = document.querySelector('main nav');
const tasknav = document.querySelector('.task-menu');
const tabs = document.getElementsByClassName('tab');
const addTask = document.querySelector('#add-task');
const addProj = document.querySelector('#add-proj');

function init() {
  loadTaskPg();
  loadPgOnClick();
  createTaskForm();
  createProjForm();

  navMenuBtn.addEventListener('click', () => showNav(headernav));
  taskMenuBtn.addEventListener('click', () => showNav(tasknav));
  backToProj.addEventListener('click', () => unchild(container));
  backToProj.addEventListener('click', loadProjectPg);
  addTask.addEventListener('click', loadAddTaskForm);
  addProj.addEventListener('click', loadAddProjForm);
}

function displayProjectTt(project) {
  const projHeader = document.createElement('span');
  const projTt = document.createElement('p');
  const projImg = new Image();
  projImg.src = _dist_assets_proj_png__WEBPACK_IMPORTED_MODULE_0__;
  projTt.textContent = project.name;

  if (project.name == 'General Task') {
    projTt.contentEditable = false;
  } else {
    projTt.contentEditable = true;
  }

  projTt.addEventListener('blur', () => project.name = projTt.textContent);

  projHeader.append(projImg, projTt);
  container.append(projHeader);
}

function displayTask(task) {
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  const name = document.createElement('p');
  name.classList.add('task-name');
  name.contentEditable = true;
  const state = document.createElement('button');
  state.classList.add('task-state');
  const date = document.createElement('input');
  date.type = 'date';
  date.classList.add('task-date');
  const priority = document.createElement('button');
  priority.classList.add('priority');
  const delBtn = document.createElement('button');
  delBtn.classList.add('del-btn');
  const delImg = new Image();

  name.textContent = task.name;
  state.textContent = task.isFin;
  date.value = task.dueDate;
  priority.textContent = task.priority;
  delImg.src = _dist_assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;

  taskCard.append(name, state, date, priority, delBtn);
  container.append(taskCard);
  delBtn.append(delImg);

  showTaskNavBtns();

  //for editing tasks

  if (task.priority == 'High') priority.style.backgroundColor = '#a12535';
  if (task.priority == 'Medium') priority.style.backgroundColor = '#9c702a';
  if (task.priority == 'Low') priority.style.backgroundColor = '#4c5e3d';

  if (task.isFin == 'Finished') {
    name.style.textDecoration = 'line-through';
    taskCard.style.filter = 'brightness(50%)';
    name.disabled = true;
    priority.disabled = true;
    date.disabled = true;
  }

  delBtn.onclick = function () {
    taskCard.remove();
    task.delete();
  }

  priority.onclick = function () {
    if (task.priority == 'High') {
      task.setPriority('Low')
    } else if (task.priority == 'Medium') {
      task.setPriority('High')
    } else if (task.priority == 'Low') {
      task.setPriority('Medium')
    }

    priority.textContent = task.priority;

    if (task.priority == 'High') priority.style.backgroundColor = '#a12535';
    if (task.priority == 'Medium') priority.style.backgroundColor = '#9c702a';
    if (task.priority == 'Low') priority.style.backgroundColor = '#4c5e3d';
  }

  name.addEventListener('blur', () => task.name = name.textContent);
  date.addEventListener('blur', () => task.dueDate = date.value);

  state.addEventListener('click', () => {
    if (task.isFin == 'Unfinished') {
      name.style.textDecoration = 'line-through';
      taskCard.style.filter = 'brightness(60%)';
      name.disabled = true;
      priority.disabled = true;
      date.disabled = true;
    } else {
      name.style.textDecoration = 'none';
      taskCard.style.filter = 'brightness(100%)';
      name.disabled = false;
      priority.disabled = false;
      date.disabled = false;
    }
    task.toggleComplete();
    state.textContent = task.isFin;
  })
}

function showNav(element) {
  const addTaskDiv = document.querySelector('#addtask-container');
  const addProjDiv = document.querySelector('#addproj-container');
  addTaskDiv.style.display = 'none';
  addProjDiv.style.display = 'none';
  showTaskNavBtns();

  if (element.classList.contains('visible')) {
    element.classList.remove('visible');
  } else {
    element.classList.add('visible');
  }
}

function unchild(parent) {
  var child = parent.firstChild;
  while (child) {
    child.remove();
    child = parent.firstChild;
  }
}

function loadTaskPg() {
  contentHeader.contentEditable = false;
  contentHeader.textContent = 'TASKS';
  contentHeader.removeAttribute('data-index');
  document.querySelector('.task-menu button:first-child').style.display =
    'block';

  for (let project of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
    displayProjectTt(project);
    for (let task of project.getList()) {
      displayTask(task);
    }
  }
}

function loadProjectPg() {
  unVisible();
  hideTaskNavBtns();

  contentHeader.textContent = 'PROJECTS';
  contentHeader.contentEditable = false;
  contentHeader.removeAttribute('data-index');

  for (let project of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
    if (project.name != 'unlisted') {
      const projCard = document.createElement('div');
      projCard.classList.add('proj-card');
      const name = document.createElement('p');
      name.classList.add('proj-name');
      const taskCount = document.createElement('p');
      taskCount.classList.add('task-count');
      const delBtn = document.createElement('button');
      delBtn.classList.add('del-btn');
      const delImg = new Image();

      const uncompletedTasks = project
        .getList()
        .filter((task) => task.isFin != 'Finished');

      name.textContent = `${project.name} (${project.getList().length})`;
      delImg.src = _dist_assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;

      taskCount.textContent = `${uncompletedTasks.length} unfinished tasks`;

      delBtn.addEventListener('mousedown', () => {
        projCard.remove();
        _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().splice(_todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(project), 1);
      })

      projCard.addEventListener('click', (e) => {
        if (e.target != delBtn || e.target != delImg) {
          backToProj.classList.add('visible');
          unchild(container);

          contentHeader.textContent = project.name;
          contentHeader.dataset.index = `${_todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(project)}`;
          contentHeader.contentEditable = true;
          contentHeader.addEventListener('blur', () => project.name = contentHeader.textContent);
          addTask.style.display = 'block';
          const addProjDiv = document.querySelector('#addproj-container');
          addProjDiv.style.display = 'none';

          for (let task of project.getList()) {
            displayTask(task);
          }
        }
      });

      if (project.name == 'General Task') {
        projCard.append(name, taskCount);
      } else {
        projCard.append(name, taskCount, delBtn);
      }
      container.append(projCard);
      delBtn.append(delImg);
    }
  }
}

function loadPgOnClick() {
  let active = '';
  for (let element of tabs) {
    if (element.classList.contains('active')) {
      active = element;
    }
  }

  for (let element of tabs) {
    element.addEventListener('click', () => {
      unVisible();

      unchild(container);
      if (element.getAttribute('id') == 'proj') loadProjectPg();
      if (element.getAttribute('id') == 'tasks') loadTaskPg();

      active.classList.remove('active');
      element.classList.add('active');

      active = element;
    });
  }
}

function createTaskForm() {
  const tT = document.createElement('p');
  tT.className = 'add-task-title';
  tT.textContent = 'NEW TASK';
  const addTaskDiv = document.createElement('div');
  addTaskDiv.id = 'addtask-container';
  const taskNameField = document.createElement('input');
  taskNameField.id = 'name-field';
  taskNameField.type = 'text';
  taskNameField.placeholder = 'Task name...';

  const today = new Date().toISOString().split('T')[0];
  const taskDueDate = document.createElement('input');
  taskDueDate.value = today;
  taskDueDate.id = 'duedate-field';
  taskDueDate.type = 'date';

  const priorityContainer = document.createElement('div');
  priorityContainer.id = 'priority-container';
  const priorityLabel = document.createElement('p');
  priorityLabel.textContent = 'PRIORITY';
  const taskPriority = document.createElement('select');
  const high = document.createElement('option');
  high.textContent = 'High';
  const medium = document.createElement('option');
  medium.textContent = 'Medium';
  const low = document.createElement('option');
  low.textContent = 'Low';
  taskPriority.append(low, medium, high);
  priorityContainer.append(priorityLabel, taskPriority);

  const projContainer = document.createElement('select');
  projContainer.id = 'proj-select-container';
  for (let proj of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
    const project = document.createElement('option');
    project.dataset.index = _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(proj);
    project.textContent = `${proj.name}`;
    projContainer.append(project);
  }

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'addtask-btn-container';
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'SAVE';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'CANCEL';
  buttonsContainer.append(saveBtn, cancelBtn);

  saveBtn.addEventListener('click', () => {
    const i = contentHeader.getAttribute('data-index');
    const selectedOption = projContainer.options[projContainer.selectedIndex].getAttribute('data-index');

    if (taskNameField.value != '') {
      if (contentHeader.textContent == 'TASKS') {
        _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()[selectedOption].add((0,_todolist__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskNameField.value, taskDueDate.value, taskPriority.value));

        unchild(container);
        loadTaskPg();
      } else {
        _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()[i].add((0,_todolist__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskNameField.value, taskDueDate.value, taskPriority.value));
        unchild(container);

        for (let task of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()[i].getList()) {
          displayTask(task);
        }
      }
    }

    taskNameField.value = '';
    taskDueDate.value = today;
    taskPriority.value = 'Low';
    hideTaskNavBtns();
  });

  cancelBtn.addEventListener('click', () => {
    showTaskNavBtns();
    taskNameField.value = ''
    taskDueDate.value = today;
    taskPriority.value = 'Low';
    addTaskDiv.style.display = 'none';
  });

  addTaskDiv.append(
    tT,
    taskNameField,
    taskDueDate,
    priorityContainer,
    projContainer,
    buttonsContainer
  );

  tasknav.append(addTaskDiv);
  addTaskDiv.style.display = 'none';
}

function loadAddTaskForm() {
  const addTaskDiv = document.querySelector('#addtask-container');
  const taskNameField = document.querySelector('#name-field');
  const taskPriority = document.querySelector('select');
  const taskDueDate = document.querySelector('#duedate-field');
  const today = new Date().toISOString().split('T')[0];
  const projContainer = document.querySelector('#proj-select-container');
  addTaskDiv.style.display = 'flex';
  hideTaskNavBtns();
  taskNameField.focus();

  if (contentHeader.textContent == 'TASKS') {
    projContainer.style.display = 'block';
  } else {
    projContainer.style.display = 'none'
  }

  taskNameField.value = ''
  taskDueDate.value = today;
  taskPriority.value = 'Low';
}

function createProjForm() {
  const tT = document.createElement('p');
  tT.className = 'add-proj-title';
  tT.textContent = 'NEW PROJECT';
  const addProjDiv = document.createElement('div');
  addProjDiv.id = 'addproj-container';
  const projNameField = document.createElement('input');
  projNameField.id = 'projname-field';
  projNameField.type = 'text';
  projNameField.placeholder = 'Project name...';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'addproj-btn-container';
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'SAVE';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'CANCEL';
  buttonsContainer.append(saveBtn, cancelBtn);

  saveBtn.addEventListener('click', () => {
    _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.add((0,_todolist__WEBPACK_IMPORTED_MODULE_2__.createList)(projNameField.value));
    unchild(container);

    if (contentHeader.textContent == 'TASKS') loadTaskPg();
    if (contentHeader.textContent == 'PROJECTS') loadProjectPg();

    const addTaskDiv = document.querySelector('#addtask-container');
    addTaskDiv.style.display = 'none';
    addProjDiv.style.display = 'none';
    projNameField.value = '';
    showTaskNavBtns();

    //update the select in task form to add new projects
    const projContainer = document.querySelector('#proj-select-container');
    unchild(projContainer);
    for (let proj of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
      const project = document.createElement('option');
      project.dataset.index = _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(proj);
      project.textContent = `${proj.name}`;
      projContainer.append(project);
    }
  });

  cancelBtn.addEventListener('click', () => {
    showTaskNavBtns();
    projNameField.value = ''
    addProjDiv.style.display = 'none';
  });

  addProjDiv.append(tT, projNameField, buttonsContainer);
  tasknav.append(addProjDiv);
  addProjDiv.style.display = 'none';
}

function loadAddProjForm() {
  const addProjDiv = document.querySelector('#addproj-container');
  const projNameField = document.querySelector('#projname-field');

  addProjDiv.style.display = 'flex';
  hideTaskNavBtns();
  projNameField.focus();

  projNameField.value = '';
}

function showTaskNavBtns() {
  if (contentHeader.textContent == 'TASKS') {
    addTask.style.display = 'block';
    addProj.style.display = 'block';
  } else if (contentHeader.textContent == 'PROJECTS') {
    addTask.style.display = 'none';
    addProj.style.display = 'block';
  } else {
    addTask.style.display = 'block';
    addProj.style.display = 'none';
  }
}

function hideTaskNavBtns() {
  addTask.style.display = 'none';
  addProj.style.display = 'none';
}

function unVisible() {
  const addTaskDiv = document.querySelector('#addtask-container');
  const addProjDiv = document.querySelector('#addproj-container');
  addTaskDiv.style.display = 'none';
  addProjDiv.style.display = 'none';
  backToProj.classList.remove('visible');
  tasknav.classList.remove('visible');
}


/***/ }),

/***/ "./dist/assets/delete.png":
/*!********************************!*\
  !*** ./dist/assets/delete.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92881cf98b591daca7ae.png";

/***/ }),

/***/ "./dist/assets/proj.png":
/*!******************************!*\
  !*** ./dist/assets/proj.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0edbe23457b28843cafd.png";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
/* harmony import */ var _uiDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiDisplay */ "./src/uiDisplay.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




(0,_todolist__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_uiDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0lBQWtJO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxhQUFhLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxP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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDRztBQUNaOztBQUVyQixxREFBSTtBQUNKLHNEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyK1RpZ2h0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWhpZ2hsaWdodDogaHNsYSgyMTUsIDg4JSwgNjAlLCAwLjQ4KTtcbiAgLS1kZXB0aC1saWdodGVyOiByZ2JhKDExLCAxNiwgMjcsIDAuNSk7XG4gIC0tYmc6IHJnYmEoMzIsIDMzLCA0Mik7XG4gIC0tYmctZGVwdGg6IHJnYigyOSwgMzAsIDM5KTtcbiAgLS1kZXB0aDogcmdiKDExLCAxNiwgMjcpO1xuICAtLXRleHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1ib3JkZXI6IHJnYig5NywgOTcsIDk3LCAwLjIpO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgZm9udC1mYW1pbHk6ICdJbnRlciBUaWdodCcsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG5pbWcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5idG4ge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDQ0KSAwcHggMXB4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjEzKSAwcHggMXB4IDJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4vKiBoZWFkZXIgKi9cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAydm1pbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgpO1xufVxuXG5idXR0b24ub3B0aW9ucyB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcHRoLWxpZ2h0ZXIpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmJ1dHRvbi5vcHRpb25zOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XG59XG5cbi8qIG5hdiAqL1xuXG5uYXYge1xuICBkaXNwbGF5OiBub25lO1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuXG4gIHBhZGRpbmc6IDIwcHggM3ZtaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRlcHRoKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbm5hdi52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubmF2IHAge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxubmF2IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5uYXYgZGl2OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XG4gIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsXG4gICAgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XG59XG5cbm5hdiBpbWcge1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKiBjb250ZW50IHNlY3Rpb24gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHggN3ZtaW47XG59XG5cbiNjb250ZW50LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuI2NvbnRlbnQtaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG5cbiNjb250ZW50LWhlYWRlciAudGl0bGU6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0KTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNiYWNrLWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDE1cHggN3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgtbGlnaHRlcik7XG4gIG1hcmdpbi1yaWdodDogMTAwJTtcbn1cblxuI2JhY2stYnRuLnZpc2libGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jYmFjay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXB0aCk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xufVxuXG4jYmFjay1idG4gaW1nIHtcbiAgbWF4LWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFzay1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udGFzay1tZW51LnZpc2libGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFzay1tZW51IGJ1dHRvbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG5zZWN0aW9uIC5idG4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmFkZC1idG4ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4udGFza29wdGlvbi1idG4gaW1nIHtcbiAgbWF4LWhlaWdodDogMzBweDtcbn1cblxuLmFkZC1idG46aG92ZXIsXG4udGFza29wdGlvbi1idG46aG92ZXIsXG4udGFzay1tZW51IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcHRoLWxpZ2h0ZXIpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbn1cbi8qIHRhc2stY2FyZCAqL1xuXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxNXB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbiNjb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAyM3B4O1xufVxuXG4jY29udGFpbmVyIHNwYW4ge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY29udGFpbmVyIHNwYW4gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4jY29udGFpbmVyIHNwYW4gcDpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHQpO1xufVxuXG4udGFzay1jYXJkLFxuLnByb2otY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBncmlkLWdhcDogNXB4IDA7XG59XG5cbi5wcm9qLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kZXB0aCk7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRhc2stY2FyZCBidXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcHRoKTtcbiAgcGFkZGluZzogNnB4IDBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udGFzay1jYXJkIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xufVxuXG4udGFzay1uYW1lOmZvY3VzLXZpc2libGUsXG4udGFzay1kYXRlOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dCk7XG59XG5cbi50YXNrLW5hbWUsXG4ucHJvai1uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YXNrLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhc2stZGF0ZSxcbi5kZWwtYnRuIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi50YXNrLXN0YXRlLFxuLnByaW9yaXR5IHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgd2lkdGg6IDkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2stc3RhdGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHQpO1xufVxuXG5idXR0b24uZGVsLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5kZWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgpO1xufVxuXG4uZGVsLWJ0biBpbWcge1xuICBtYXgtaGVpZ2h0OiAxOHB4O1xufVxuXG4ucHJvai1jYXJkIC50YXNrLWNvdW50IHtcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogZm9vdGVyICovXG5cbmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODkwcHgpIHtcbiAgbWFpbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMzBweCAxZnI7XG4gIH1cblxuICBoZWFkZXIgYnV0dG9uLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBuYXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcbiAgfVxufVxuXG4vKiBBRERUQVNLIEZPUk0gKi9cblxuI2FkZHRhc2stY29udGFpbmVyLFxuI2FkZHByb2otY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciAxMThweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIGF1dG87XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgpO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jYWRkdGFzay1jb250YWluZXIgcC5hZGQtdGFzay10aXRsZSxcbiNhZGRwcm9qLWNvbnRhaW5lciBwLmFkZC1wcm9qLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNhZGR0YXNrLWNvbnRhaW5lciBpbnB1dCxcbnNlbGVjdDpmb2N1cy12aXNpYmxlLFxuI2FkZHByb2otY29udGFpbmVyIGlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2FkZHByb2otY29udGFpbmVyIGlucHV0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4jYWRkdGFzay1jb250YWluZXIgaW5wdXQsXG4jYWRkcHJvai1jb250YWluZXIgaW5wdXQsXG5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kZXB0aCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuI2FkZHRhc2stY29udGFpbmVyIHNlbGVjdCB7XG4gIGJvcmRlcjogMDtcbiAgZmxleC1ncm93OiAyO1xufVxuXG4jYWRkdGFzay1jb250YWluZXIgc2VsZWN0IG9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcHRoKTtcbn1cblxuI2FkZHRhc2stY29udGFpbmVyIHNlbGVjdCBvcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXB0aC1saWdodGVyKTtcbn1cblxuI2FkZHRhc2stY29udGFpbmVyIGlucHV0W3R5cGU9J2RhdGUnXSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbmlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbiNuYW1lLWZpZWxkIHtcbiAgZmxleC1ncm93OiAxNTtcbn1cblxuI3ByaW9yaXR5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNC41cHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmbGV4LWdyb3c6IDI7XG59XG5cbiNhZGR0YXNrLWJ0bi1jb250YWluZXIsXG4jYWRkcHJvai1idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI2FkZHRhc2stYnRuLWNvbnRhaW5lciBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIsXG4jYWRkcHJvai1idG4tY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XG59XG5cbiNhZGR0YXNrLWJ0bi1jb250YWluZXIgYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlcixcbiNhZGRwcm9qLWJ0bi1jb250YWluZXIgYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZFQUE2RTtFQUM3RSxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixtQkFB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OztFQUVqQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcitUaWdodDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWhpZ2hsaWdodDogaHNsYSgyMTUsIDg4JSwgNjAlLCAwLjQ4KTtcXG4gIC0tZGVwdGgtbGlnaHRlcjogcmdiYSgxMSwgMTYsIDI3LCAwLjUpO1xcbiAgLS1iZzogcmdiYSgzMiwgMzMsIDQyKTtcXG4gIC0tYmctZGVwdGg6IHJnYigyOSwgMzAsIDM5KTtcXG4gIC0tZGVwdGg6IHJnYigxMSwgMTYsIDI3KTtcXG4gIC0tdGV4dDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1ib3JkZXI6IHJnYig5NywgOTcsIDk3LCAwLjIpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXIgVGlnaHQnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG5pbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5idG4ge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA0NCkgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4xMykgMHB4IDFweCAycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMnZtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXB0aCk7XFxufVxcblxcbmJ1dHRvbi5vcHRpb25zIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXB0aC1saWdodGVyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLm9wdGlvbnM6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XFxufVxcblxcbi8qIG5hdiAqL1xcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcblxcbiAgcGFkZGluZzogMjBweCAzdm1pbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRlcHRoKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG5uYXYudmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5uYXYgcCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxubmF2IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxubmF2IGRpdjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHQpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCxcXG4gICAgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XFxufVxcblxcbm5hdiBpbWcge1xcbiAgbWF4LWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogY29udGVudCBzZWN0aW9uICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAyMHB4IDd2bWluO1xcbn1cXG5cXG4jY29udGVudC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbiNjb250ZW50LWhlYWRlciAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuXFxuI2NvbnRlbnQtaGVhZGVyIC50aXRsZTpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dCk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbiNiYWNrLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgtbGlnaHRlcik7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMCU7XFxufVxcblxcbiNiYWNrLWJ0bi52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNiYWNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXB0aCk7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuI2JhY2stYnRuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi50YXNrLW1lbnUudmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1tZW51IGJ1dHRvbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuc2VjdGlvbiAuYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLnRhc2tvcHRpb24tYnRuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlcixcXG4udGFza29wdGlvbi1idG46aG92ZXIsXFxuLnRhc2stbWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgtbGlnaHRlcik7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcXG59XFxuLyogdGFzay1jYXJkICovXFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMTVweCAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbiNjb250YWluZXIgaW1nIHtcXG4gIG1heC13aWR0aDogMjNweDtcXG59XFxuXFxuI2NvbnRhaW5lciBzcGFuIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lciBzcGFuIHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4jY29udGFpbmVyIHNwYW4gcDpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dCk7XFxufVxcblxcbi50YXNrLWNhcmQsXFxuLnByb2otY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIGdyaWQtZ2FwOiA1cHggMDtcXG59XFxuXFxuLnByb2otY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kZXB0aCk7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuXFxuLnRhc2stY2FyZCBidXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgpO1xcbiAgcGFkZGluZzogNnB4IDBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50YXNrLWNhcmQgYnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xcbn1cXG5cXG4udGFzay1uYW1lOmZvY3VzLXZpc2libGUsXFxuLnRhc2stZGF0ZTpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dCk7XFxufVxcblxcbi50YXNrLW5hbWUsXFxuLnByb2otbmFtZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRhc2stZGF0ZSxcXG4uZGVsLWJ0biB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRhc2stc3RhdGUsXFxuLnByaW9yaXR5IHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB3aWR0aDogOTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stc3RhdGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0KTtcXG59XFxuXFxuYnV0dG9uLmRlbC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5kZWwtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcHRoKTtcXG59XFxuXFxuLmRlbC1idG4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5wcm9qLWNhcmQgLnRhc2stY291bnQge1xcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogODkwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzMHB4IDFmcjtcXG4gIH1cXG5cXG4gIGhlYWRlciBidXR0b24ub3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcXG4gIH1cXG59XFxuXFxuLyogQUREVEFTSyBGT1JNICovXFxuXFxuI2FkZHRhc2stY29udGFpbmVyLFxcbiNhZGRwcm9qLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciAxMThweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBhdXRvO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgpO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuI2FkZHRhc2stY29udGFpbmVyIHAuYWRkLXRhc2stdGl0bGUsXFxuI2FkZHByb2otY29udGFpbmVyIHAuYWRkLXByb2otdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jYWRkdGFzay1jb250YWluZXIgaW5wdXQsXFxuc2VsZWN0OmZvY3VzLXZpc2libGUsXFxuI2FkZHByb2otY29udGFpbmVyIGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNhZGRwcm9qLWNvbnRhaW5lciBpbnB1dCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNhZGR0YXNrLWNvbnRhaW5lciBpbnB1dCxcXG4jYWRkcHJvai1jb250YWluZXIgaW5wdXQsXFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRlcHRoKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4jYWRkdGFzay1jb250YWluZXIgc2VsZWN0IHtcXG4gIGJvcmRlcjogMDtcXG4gIGZsZXgtZ3JvdzogMjtcXG59XFxuXFxuI2FkZHRhc2stY29udGFpbmVyIHNlbGVjdCBvcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwdGgpO1xcbn1cXG5cXG4jYWRkdGFzay1jb250YWluZXIgc2VsZWN0IG9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXB0aC1saWdodGVyKTtcXG59XFxuXFxuI2FkZHRhc2stY29udGFpbmVyIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbmlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4jbmFtZS1maWVsZCB7XFxuICBmbGV4LWdyb3c6IDE1O1xcbn1cXG5cXG4jcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNC41cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZmxleC1ncm93OiAyO1xcbn1cXG5cXG4jYWRkdGFzay1idG4tY29udGFpbmVyLFxcbiNhZGRwcm9qLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jYWRkdGFzay1idG4tY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlcixcXG4jYWRkcHJvai1idG4tY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHQpO1xcbn1cXG5cXG4jYWRkdGFzay1idG4tY29udGFpbmVyIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIsXFxuI2FkZHByb2otYnRuLWNvbnRhaW5lciBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgcHJvakxpc3QgPSBjcmVhdGVMaXN0KCdUYXNrcycpOyAvL3N0b3JhZ2Ugb2YgYWxsIHByb2plY3RzXG5cbi8vIHAgZm9yIHByb2osIHQgZm9yIHRhc2tcbnByb2pMaXN0LmdldFRhc2tPZiA9IGZ1bmN0aW9uIChwSW5kZXgsIHRJbmRleCkge1xuICByZXR1cm4gcHJvakxpc3QuZ2V0TGlzdCgpW3BJbmRleF0uZ2V0TGlzdCgpW3RJbmRleF07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBsZXQgdGFzayA9IHt9O1xuXG4gIHRhc2submFtZSA9IG5hbWU7XG4gIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGFzay5pc0ZpbiA9ICdVbmZpbmlzaGVkJztcblxuICB0YXNrLnNldE5hbWUgPSBmdW5jdGlvbiAobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgdGFzay5zZXREdWVEYXRlID0gZnVuY3Rpb24gKG5ld0RhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICB9O1xuXG4gIHRhc2suc2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAobmV3UHJpbykge1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvO1xuICB9O1xuXG4gIHRhc2sudG9nZ2xlQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNGaW4gPT0gJ0ZpbmlzaGVkJykge1xuICAgICAgdGhpcy5pc0ZpbiA9ICdVbmZpbmlzaGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0ZpbiA9ICdGaW5pc2hlZCc7XG4gICAgfVxuICB9O1xuXG4gIHRhc2suZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvakxpc3QuZ2V0TGlzdCgpKSB7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0LmdldExpc3QoKS5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcHJvamVjdC5nZXRMaXN0KCkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIGJyZWFrOyAvLyBFeGl0IHRoZSBsb29wIGFmdGVyIGRlbGV0aW5nIHRoZSB0YXNrXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdChuYW1lKSB7XG4gIGxldCBsaXN0ID0ge307XG5cbiAgbGlzdC5uYW1lID0gbmFtZTtcbiAgbGlzdC5pdGVtcyA9IFtdOyAvLyB3aWxsIHN0b3JlIHByb2plY3RzIE9SIHRhc2tzXG5cbiAgbGlzdC5zZXROYW1lID0gZnVuY3Rpb24gKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9O1xuXG4gIGxpc3QuYWRkID0gZnVuY3Rpb24gKGEpIHtcbiAgICB0aGlzLml0ZW1zLnB1c2goYSk7XG4gIH07XG5cbiAgbGlzdC5nZXRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvKCkge1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgnR2VuZXJhbCBUYXNrJykpO1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgnVGVzdCBQcm9qZWN0JykpO1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgnVGVzdCBQcm9qZWN0IDInKSk7XG5cbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzBdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUnLCAnMjAyMy0wNS0wMScsICdNZWRpdW0nKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsxXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdMb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lJywgJzIwMjMtMDUtMDEnLCAnTWVkaXVtJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnTG93JykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA3LTIzJywgJ0hpZ2gnKSk7XG59XG4iLCJpbXBvcnQgcHJvakxvZ28gZnJvbSAnL2Rpc3QvYXNzZXRzL3Byb2oucG5nJztcbmltcG9ydCBkZWxMb2dvIGZyb20gJy9kaXN0L2Fzc2V0cy9kZWxldGUucG5nJztcbmltcG9ydCB7IHByb2pMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi90b2RvbGlzdCc7XG5cbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudC1oZWFkZXIgcCcpO1xuY29uc3QgYmFja1RvUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLWJ0bicpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuY29uc3QgbmF2TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24ub3B0aW9ucycpO1xuY29uc3QgdGFza01lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza29wdGlvbi1idG4nKTtcbmNvbnN0IGhlYWRlcm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gbmF2Jyk7XG5jb25zdCB0YXNrbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudScpO1xuY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvaicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsb2FkVGFza1BnKCk7XG4gIGxvYWRQZ09uQ2xpY2soKTtcbiAgY3JlYXRlVGFza0Zvcm0oKTtcbiAgY3JlYXRlUHJvakZvcm0oKTtcblxuICBuYXZNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05hdihoZWFkZXJuYXYpKTtcbiAgdGFza01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TmF2KHRhc2tuYXYpKTtcbiAgYmFja1RvUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuY2hpbGQoY29udGFpbmVyKSk7XG4gIGJhY2tUb1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdFBnKTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBZGRUYXNrRm9ybSk7XG4gIGFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWRkUHJvakZvcm0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFR0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvakhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcHJvalR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwcm9qSW1nID0gbmV3IEltYWdlKCk7XG4gIHByb2pJbWcuc3JjID0gcHJvakxvZ287XG4gIHByb2pUdC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICBpZiAocHJvamVjdC5uYW1lID09ICdHZW5lcmFsIFRhc2snKSB7XG4gICAgcHJvalR0LmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHByb2pUdC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgcHJvalR0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBwcm9qZWN0Lm5hbWUgPSBwcm9qVHQudGV4dENvbnRlbnQpO1xuXG4gIHByb2pIZWFkZXIuYXBwZW5kKHByb2pJbWcsIHByb2pUdCk7XG4gIGNvbnRhaW5lci5hcHBlbmQocHJvakhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gIG5hbWUuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0ZScpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcbiAgY29uc3QgZGVsSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgc3RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmlzRmluO1xuICBkYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gIGRlbEltZy5zcmMgPSBkZWxMb2dvO1xuXG4gIHRhc2tDYXJkLmFwcGVuZChuYW1lLCBzdGF0ZSwgZGF0ZSwgcHJpb3JpdHksIGRlbEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmQodGFza0NhcmQpO1xuICBkZWxCdG4uYXBwZW5kKGRlbEltZyk7XG5cbiAgc2hvd1Rhc2tOYXZCdG5zKCk7XG5cbiAgLy9mb3IgZWRpdGluZyB0YXNrc1xuXG4gIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhMTI1MzUnO1xuICBpZiAodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM5YzcwMmEnO1xuICBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93JykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzVlM2QnO1xuXG4gIGlmICh0YXNrLmlzRmluID09ICdGaW5pc2hlZCcpIHtcbiAgICBuYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgdGFza0NhcmQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNTAlKSc7XG4gICAgbmFtZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgcHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVsQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFza0NhcmQucmVtb3ZlKCk7XG4gICAgdGFzay5kZWxldGUoKTtcbiAgfVxuXG4gIHByaW9yaXR5Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdMb3cnKVxuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykge1xuICAgICAgdGFzay5zZXRQcmlvcml0eSgnSGlnaCcpXG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdMb3cnKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdNZWRpdW0nKVxuICAgIH1cblxuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhMTI1MzUnO1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljNzAyYSc7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGM1ZTNkJztcbiAgfVxuXG4gIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRhc2submFtZSA9IG5hbWUudGV4dENvbnRlbnQpO1xuICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB0YXNrLmR1ZURhdGUgPSBkYXRlLnZhbHVlKTtcblxuICBzdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodGFzay5pc0ZpbiA9PSAnVW5maW5pc2hlZCcpIHtcbiAgICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIHRhc2tDYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDYwJSknO1xuICAgICAgbmFtZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBwcmlvcml0eS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgIHRhc2tDYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEwMCUpJztcbiAgICAgIG5hbWUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHByaW9yaXR5LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBkYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgICBzdGF0ZS50ZXh0Q29udGVudCA9IHRhc2suaXNGaW47XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNob3dOYXYoZWxlbWVudCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFByb2pEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcHJvai1jb250YWluZXInKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNob3dUYXNrTmF2QnRucygpO1xuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5jaGlsZChwYXJlbnQpIHtcbiAgdmFyIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tQZygpIHtcbiAgY29udGVudEhlYWRlci5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUQVNLUyc7XG4gIGNvbnRlbnRIZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUgYnV0dG9uOmZpcnN0LWNoaWxkJykuc3R5bGUuZGlzcGxheSA9XG4gICAgJ2Jsb2NrJztcblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGRpc3BsYXlQcm9qZWN0VHQocHJvamVjdCk7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LmdldExpc3QoKSkge1xuICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0UGcoKSB7XG4gIHVuVmlzaWJsZSgpO1xuICBoaWRlVGFza05hdkJ0bnMoKTtcblxuICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJztcbiAgY29udGVudEhlYWRlci5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgY29udGVudEhlYWRlci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGlmIChwcm9qZWN0Lm5hbWUgIT0gJ3VubGlzdGVkJykge1xuICAgICAgY29uc3QgcHJvakNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2pDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2otY2FyZCcpO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvai1uYW1lJyk7XG4gICAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0YXNrQ291bnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb3VudCcpO1xuICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICAgICAgY29uc3QgZGVsSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIGNvbnN0IHVuY29tcGxldGVkVGFza3MgPSBwcm9qZWN0XG4gICAgICAgIC5nZXRMaXN0KClcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5pc0ZpbiAhPSAnRmluaXNoZWQnKTtcblxuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX0gKCR7cHJvamVjdC5nZXRMaXN0KCkubGVuZ3RofSlgO1xuICAgICAgZGVsSW1nLnNyYyA9IGRlbExvZ287XG5cbiAgICAgIHRhc2tDb3VudC50ZXh0Q29udGVudCA9IGAke3VuY29tcGxldGVkVGFza3MubGVuZ3RofSB1bmZpbmlzaGVkIHRhc2tzYDtcblxuICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgcHJvakNhcmQucmVtb3ZlKCk7XG4gICAgICAgIHByb2pMaXN0LmdldExpc3QoKS5zcGxpY2UocHJvakxpc3QuZ2V0TGlzdCgpLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgfSlcblxuICAgICAgcHJvakNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgIT0gZGVsQnRuIHx8IGUudGFyZ2V0ICE9IGRlbEltZykge1xuICAgICAgICAgIGJhY2tUb1Byb2ouY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgIHVuY2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgY29udGVudEhlYWRlci5kYXRhc2V0LmluZGV4ID0gYCR7cHJvakxpc3QuZ2V0TGlzdCgpLmluZGV4T2YocHJvamVjdCl9YDtcbiAgICAgICAgICBjb250ZW50SGVhZGVyLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgY29udGVudEhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gcHJvamVjdC5uYW1lID0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBjb25zdCBhZGRQcm9qRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHByb2otY29udGFpbmVyJyk7XG4gICAgICAgICAgYWRkUHJvakRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LmdldExpc3QoKSkge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb2plY3QubmFtZSA9PSAnR2VuZXJhbCBUYXNrJykge1xuICAgICAgICBwcm9qQ2FyZC5hcHBlbmQobmFtZSwgdGFza0NvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2pDYXJkLmFwcGVuZChuYW1lLCB0YXNrQ291bnQsIGRlbEJ0bik7XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kKHByb2pDYXJkKTtcbiAgICAgIGRlbEJ0bi5hcHBlbmQoZGVsSW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBnT25DbGljaygpIHtcbiAgbGV0IGFjdGl2ZSA9ICcnO1xuICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYnMpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBhY3RpdmUgPSBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgdGFicykge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1blZpc2libGUoKTtcblxuICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICdwcm9qJykgbG9hZFByb2plY3RQZygpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICd0YXNrcycpIGxvYWRUYXNrUGcoKTtcblxuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgYWN0aXZlID0gZWxlbWVudDtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgY29uc3QgdFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRULmNsYXNzTmFtZSA9ICdhZGQtdGFzay10aXRsZSc7XG4gIHRULnRleHRDb250ZW50ID0gJ05FVyBUQVNLJztcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUYXNrRGl2LmlkID0gJ2FkZHRhc2stY29udGFpbmVyJztcbiAgY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tOYW1lRmllbGQuaWQgPSAnbmFtZS1maWVsZCc7XG4gIHRhc2tOYW1lRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgdGFza05hbWVGaWVsZC5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUuLi4nO1xuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgdGFza0R1ZURhdGUuaWQgPSAnZHVlZGF0ZS1maWVsZCc7XG4gIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG5cbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHktY29udGFpbmVyJztcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQUklPUklUWSc7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBtZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICB0YXNrUHJpb3JpdHkuYXBwZW5kKGxvdywgbWVkaXVtLCBoaWdoKTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHRhc2tQcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcm9qQ29udGFpbmVyLmlkID0gJ3Byb2otc2VsZWN0LWNvbnRhaW5lcic7XG4gIGZvciAobGV0IHByb2ogb2YgcHJvakxpc3QuZ2V0TGlzdCgpKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHByb2plY3QuZGF0YXNldC5pbmRleCA9IHByb2pMaXN0LmdldExpc3QoKS5pbmRleE9mKHByb2opO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBgJHtwcm9qLm5hbWV9YDtcbiAgICBwcm9qQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KTtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5pZCA9ICdhZGR0YXNrLWJ0bi1jb250YWluZXInO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2F2ZUJ0biwgY2FuY2VsQnRuKTtcblxuICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGkgPSBjb250ZW50SGVhZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gcHJvakNvbnRhaW5lci5vcHRpb25zW3Byb2pDb250YWluZXIuc2VsZWN0ZWRJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG5cbiAgICBpZiAodGFza05hbWVGaWVsZC52YWx1ZSAhPSAnJykge1xuICAgICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT0gJ1RBU0tTJykge1xuICAgICAgICBwcm9qTGlzdC5nZXRMaXN0KClbc2VsZWN0ZWRPcHRpb25dLmFkZChjcmVhdGVUYXNrKHRhc2tOYW1lRmllbGQudmFsdWUsIHRhc2tEdWVEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUpKTtcblxuICAgICAgICB1bmNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIGxvYWRUYXNrUGcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2pMaXN0LmdldExpc3QoKVtpXS5hZGQoY3JlYXRlVGFzayh0YXNrTmFtZUZpZWxkLnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlKSk7XG4gICAgICAgIHVuY2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2pMaXN0LmdldExpc3QoKVtpXS5nZXRMaXN0KCkpIHtcbiAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRhc2tOYW1lRmllbGQudmFsdWUgPSAnJztcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRvZGF5O1xuICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICAgIGhpZGVUYXNrTmF2QnRucygpO1xuICB9KTtcblxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd1Rhc2tOYXZCdG5zKCk7XG4gICAgdGFza05hbWVGaWVsZC52YWx1ZSA9ICcnXG4gICAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAnTG93JztcbiAgICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGFkZFRhc2tEaXYuYXBwZW5kKFxuICAgIHRULFxuICAgIHRhc2tOYW1lRmllbGQsXG4gICAgdGFza0R1ZURhdGUsXG4gICAgcHJpb3JpdHlDb250YWluZXIsXG4gICAgcHJvakNvbnRhaW5lcixcbiAgICBidXR0b25zQ29udGFpbmVyXG4gICk7XG5cbiAgdGFza25hdi5hcHBlbmQoYWRkVGFza0Rpdik7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1maWVsZCcpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZS1maWVsZCcpO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otc2VsZWN0LWNvbnRhaW5lcicpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGhpZGVUYXNrTmF2QnRucygpO1xuICB0YXNrTmFtZUZpZWxkLmZvY3VzKCk7XG5cbiAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT0gJ1RBU0tTJykge1xuICAgIHByb2pDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgcHJvakNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cblxuICB0YXNrTmFtZUZpZWxkLnZhbHVlID0gJydcbiAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgdGFza1ByaW9yaXR5LnZhbHVlID0gJ0xvdyc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2pGb3JtKCkge1xuICBjb25zdCB0VCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdFQuY2xhc3NOYW1lID0gJ2FkZC1wcm9qLXRpdGxlJztcbiAgdFQudGV4dENvbnRlbnQgPSAnTkVXIFBST0pFQ1QnO1xuICBjb25zdCBhZGRQcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFByb2pEaXYuaWQgPSAnYWRkcHJvai1jb250YWluZXInO1xuICBjb25zdCBwcm9qTmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvak5hbWVGaWVsZC5pZCA9ICdwcm9qbmFtZS1maWVsZCc7XG4gIHByb2pOYW1lRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgcHJvak5hbWVGaWVsZC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IG5hbWUuLi4nO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5pZCA9ICdhZGRwcm9qLWJ0bi1jb250YWluZXInO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2F2ZUJ0biwgY2FuY2VsQnRuKTtcblxuICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KHByb2pOYW1lRmllbGQudmFsdWUpKTtcbiAgICB1bmNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PSAnVEFTS1MnKSBsb2FkVGFza1BnKCk7XG4gICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT0gJ1BST0pFQ1RTJykgbG9hZFByb2plY3RQZygpO1xuXG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrLWNvbnRhaW5lcicpO1xuICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcHJvak5hbWVGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHNob3dUYXNrTmF2QnRucygpO1xuXG4gICAgLy91cGRhdGUgdGhlIHNlbGVjdCBpbiB0YXNrIGZvcm0gdG8gYWRkIG5ldyBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1zZWxlY3QtY29udGFpbmVyJyk7XG4gICAgdW5jaGlsZChwcm9qQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBwcm9qIG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJvamVjdC5kYXRhc2V0LmluZGV4ID0gcHJvakxpc3QuZ2V0TGlzdCgpLmluZGV4T2YocHJvaik7XG4gICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cHJvai5uYW1lfWA7XG4gICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93VGFza05hdkJ0bnMoKTtcbiAgICBwcm9qTmFtZUZpZWxkLnZhbHVlID0gJydcbiAgICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGFkZFByb2pEaXYuYXBwZW5kKHRULCBwcm9qTmFtZUZpZWxkLCBidXR0b25zQ29udGFpbmVyKTtcbiAgdGFza25hdi5hcHBlbmQoYWRkUHJvakRpdik7XG4gIGFkZFByb2pEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFByb2pGb3JtKCkge1xuICBjb25zdCBhZGRQcm9qRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHByb2otY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2pOYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvam5hbWUtZmllbGQnKTtcblxuICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGhpZGVUYXNrTmF2QnRucygpO1xuICBwcm9qTmFtZUZpZWxkLmZvY3VzKCk7XG5cbiAgcHJvak5hbWVGaWVsZC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza05hdkJ0bnMoKSB7XG4gIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09ICdUQVNLUycpIHtcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PSAnUFJPSkVDVFMnKSB7XG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZVRhc2tOYXZCdG5zKCkge1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdW5WaXNpYmxlKCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFByb2pEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcHJvai1jb250YWluZXInKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGJhY2tUb1Byb2ouY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB0YXNrbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgdWlJbml0IGZyb20gJy4vdWlEaXNwbGF5JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuXG50b2RvKCk7XG51aUluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==