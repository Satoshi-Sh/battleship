/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color:lightcyan;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    text-align:center;\n}\n\n.message{\n    margin:20px;\n    font-size:20px;\n}\n\n.window {\n    margin-left:auto;\n    margin-right:auto;\n    width:90%;\n    height:auto;\n    display:flex;\n    justify-content:space-around;\n    align-items: center;\n    flex-wrap:wrap;\n    gap:30px;\n    \n}\n\n.board { \n    border: 2px solid blue;\n    height:500px;\n    width:500px;\n    background-color:cornflowerblue;\n    display:flex;\n    flex-wrap:wrap;\n\n}\n\n.cell\n{\n    box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.425) inset;\n    font-size:50px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n}\n\n.restart-div {\n    height:100px;\n    width:100%;\n    \n    display:none;\n    justify-content: center;\n    align-items:center;\n    \n}\n\nbutton {\n    cursor:pointer;\n    font-size:20px;\n    width:100px;\n    height:30px;\n    background-color:azure;\n}\nbutton:active{\n  background-color:rgb(14, 150, 150)\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,uEAAuE;IACvE,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;IACnB,cAAc;IACd,QAAQ;;AAEZ;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,YAAY;IACZ,cAAc;;AAElB;;AAEA;;IAEI,qDAAqD;IACrD,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,UAAU;;IAEV,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;;AAEtB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,WAAW;IACX,WAAW;IACX,sBAAsB;AAC1B;AACA;EACE;AACF","sourcesContent":["body {\n    background-color:lightcyan;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    text-align:center;\n}\n\n.message{\n    margin:20px;\n    font-size:20px;\n}\n\n.window {\n    margin-left:auto;\n    margin-right:auto;\n    width:90%;\n    height:auto;\n    display:flex;\n    justify-content:space-around;\n    align-items: center;\n    flex-wrap:wrap;\n    gap:30px;\n    \n}\n\n.board { \n    border: 2px solid blue;\n    height:500px;\n    width:500px;\n    background-color:cornflowerblue;\n    display:flex;\n    flex-wrap:wrap;\n\n}\n\n.cell\n{\n    box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.425) inset;\n    font-size:50px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n}\n\n.restart-div {\n    height:100px;\n    width:100%;\n    \n    display:none;\n    justify-content: center;\n    align-items:center;\n    \n}\n\nbutton {\n    cursor:pointer;\n    font-size:20px;\n    width:100px;\n    height:30px;\n    background-color:azure;\n}\nbutton:active{\n  background-color:rgb(14, 150, 150)\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/gameboard/board.js":
/*!********************************!*\
  !*** ./src/gameboard/board.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ../ship/ship */ "./src/ship/ship.js")


// 10 x 10 grid 

function makeBoard() {
    const ls = []
        for (let i=0; i<10;i++){
        ls.push(Array(10).fill(''))
        }
        return ls
}

const Board = function(){
    return {
    ships:[],
    body: makeBoard(),
    placeShip: function(length,[row,col],id=1) {
       const ship = Ship(length,id);
       
       // out of board
       if (col +length>10){
        return null;
       }
       // ship is already there 
       for (let i =0; i<length;i++){
         if (this.body[row][col+i]!= ''){
         return null; }
        }

       this.ships.push(ship)
       ship.setHead([row,col])
       for (let i=0; i <length;i++){
      this.body[row][col+i]= id.toString()
      }
      return true;
    },

    receiveAttack: function(row,col){
        
        if (this.body[row][col]!='' & this.body[row][col]!='X' & this.body[row][col]!='H'){
            const index = parseInt(this.body[row][col])
            const ship = this.ships[index]
            ship.hit(col- ship.head[1])
            this.body[row][col]='H'
            
        }
        else(this.body[row][col]='X')

    },
    gameover: function(){
       const shipNum = this.ships.length 
       let counter = 0;
       this.ships.forEach(ship=>{
       if(ship.isSunk()){
        counter++
       }
    })
    return counter == shipNum
    },
    reset: function(){
        this.ships = []
        this.body = makeBoard()
    }
}
}

module.exports = Board

/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((module) => {

const Player = function(cpu=false){
    return {
        cpu:cpu,
        chooseMove: function(board){
        if (cpu){
            // position next to H
            let neighbors=[]
            //choose a move randomly from the available moves
            let ls = []
            for (let i =0; i<10; i++){
                for (let j=0; j<10; j++){
                if (board.body[i][j]=='H'){
                    if (j+1<10 ){
                        if (board.body[i][j+1]!='X' &board.body[i][j+1]!='H'){
                    neighbors.push([i,j+1])
                        }
                    }
                    if (j-1>0){
                        if (board.body[i][j-1]!='X' & board.body[i][j-1]!='H'){
                        neighbors.push([i,j-1])
                        }
                        }
                }
                if (board.body[i][j]!='X' & board.body[i][j]!='H'){
                    ls.push([i,j])
                }
            }
            }
            
            if (neighbors.length>0){
                const move = neighbors[Math.floor(Math.random() * neighbors.length)]
                return move
            }
            const move = ls[Math.floor(Math.random() * ls.length)];
            return move
        } 
        else {
            const move = prompt("Enter you move from available space. ex [1,2]")
            return move
        }       
        }

    }
}


module.exports = Player

/***/ }),

/***/ "./src/ship/ship.js":
/*!**************************!*\
  !*** ./src/ship/ship.js ***!
  \**************************/
/***/ ((module) => {

const Ship = function(length,id=0){
    return {
    length:length,
    head: null,
    setHead: function(position){
        this.head = position
    },
    id: id,
    body: Array(length).fill(''),
    hit: function(number){
        if (number>length| number <0){
            console.log(`Out of range(1-9))`)
            return;
        }
        this.body[number]='hit'
    },
    isSunk: function(){
        let count = 0;
        for (let i of this.body){
        if (i =='hit'){
            count++;
        }
        }
        return count == length;
    } 
    }
}


module.exports = Ship

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player_player__WEBPACK_IMPORTED_MODULE_1__);



const Ship = __webpack_require__(/*! ./ship/ship */ "./src/ship/ship.js")
const Player = __webpack_require__(/*! ./player/player */ "./src/player/player.js")
const Board = __webpack_require__(/*! ./gameboard/board */ "./src/gameboard/board.js")


const youBoard = document.querySelector('#you')
const cpuBoard =document.querySelector('#cpu')
const button = document.querySelector('button')
const restartDiv = document.querySelector('.restart-div')

let message = document.querySelector('.message')
let isReady = false;
let playerTurn=true;

// add cells to the board 
function addCells(element,name){
    for (let i =0; i<10; i++){
        for (let j=0; j<10; j++){
        const div = document.createElement('div')
        div.classList.add('cell')
        div.setAttribute('id',name)
        div.setAttribute('id',`c-${i}-${j}`)
        div.style.height='50px'
        div.style.width='50px'
        // add trigger for players field
        if (name=='youBoard'){
        div.addEventListener('click',(e=>{
        const id = e.target.id
        const row = parseInt(id.split('-')[1])
        const col= parseInt(id.split('-')[2])
        let shipLengths = [5,6,7,8,3];
        if (pBoard.ships.length<=5 & !isReady) {
            const length = shipLengths[pBoard.ships.length]
            const next = shipLengths[pBoard.ships.length +1]
            if (!next){
                message.innerText = 'CPU is plasing ships.'
            }
            else {
            message.innerText = `Place a ship with the length of ${next}`
            }
            if (!pBoard.placeShip(length,[row,col],pBoard.ships.length)){
            message.innerText= 'The ship cannot be placed. Choose another position.'
            return;
            }
            else {
                // update the  UI
                updateBoard(pBoard.body)
            }
            if (!next){
                // cpu placing ships
                let id =0
                
                while (cBoard.ships.length<5){ 
                const move = cpu.chooseMove(cBoard)

                const len = shipLengths[cBoard.ships.length]
                
                if (cBoard.placeShip(len,[move[0],move[1]],id)){
                id++}
                
                }
             isReady=true;
             message.innerText= 'Choose place to attack'
        }

        }      
        })
        )}
        // trigger for cpu field to attack
        else{
            div.addEventListener('click',(e=>{
                const id = e.target.id
                const row = parseInt(id.split('-')[1])
                const col= parseInt(id.split('-')[2])
                if (isReady & playerTurn & e.target.innerText==''){
                cBoard.receiveAttack(row,col)
                updatecBoard(cBoard.body)
                if(cBoard.gameover()){
                    console.log('Player won')
                    message.innerHTML = 'Player won!!'
                    restartDiv.style.display='flex'
                    button.onclick=reset;
                }
                else {
                // cpu choose move 
                const move = cpu.chooseMove(pBoard);
                pBoard.receiveAttack(move[0],move[1])
                updateBoard(pBoard.body)
                if(pBoard.gameover()){
                    console.log('CPU won..')
                    message.innerHTML = 'CPU won..'
                    restartDiv.style.display='flex'
                    button.onclick=reset
                }
            }
            }
            }))
        

        
        }
        element.appendChild(div)
        }
    }
}

addCells(youBoard,'youBoard');
addCells(cpuBoard,'cpuBoard');


// game setup 

const pBoard = Board()
const cBoard= Board()

const player = Player()
const cpu = Player(true)

// for player board

function updateBoard(board){
   for (let i=0;i<10;i++){
    for (let j=0;j<10;j++){
        const  h = document.querySelector(`#c-${i}-${j}`)
        h.innerText= board[i][j]
        if (board[i][j]=='H'){
        h.style.color='red';
        }
    }
   } 
}
// for cpu board
function updatecBoard(board){
    for (let i=0;i<10;i++){
     for (let j=0;j<10;j++){
         const  h = document.querySelector(`#cpu #c-${i}-${j}`)
         if (!isNum(board[i][j])){
         h.innerText= board[i][j]
         if (board[i][j]=="H"){
            h.style.color='green'
         }
         }
     }
    } 
 }


function isNum(val) {
    return parseInt(val) == val;
}


function reset(){
    youBoard.innerHTML=''
    cpuBoard.innerHTML=''
    pBoard.reset()
    cBoard.reset()
    addCells(youBoard,'youBoard');
    addCells(cpuBoard,'cpuBoard');
    restartDiv.style.display='none'
    isReady = false;
    playerTurn=true;
    message.innerText= 'Place a ship with the length of 5'
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNELEVBQUUsR0FBRyxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRjeWFuO1xcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5tZXNzYWdle1xcbiAgICBtYXJnaW46MjBweDtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxufVxcblxcbi53aW5kb3cge1xcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgZ2FwOjMwcHg7XFxuICAgIFxcbn1cXG5cXG4uYm9hcmQgeyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gICAgaGVpZ2h0OjUwMHB4O1xcbiAgICB3aWR0aDo1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpjb3JuZmxvd2VyYmx1ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG5cXG59XFxuXFxuLmNlbGxcXG57XFxuICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40MjUpIGluc2V0O1xcbiAgICBmb250LXNpemU6NTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbi5yZXN0YXJ0LWRpdiB7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgXFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xcbn1cXG5idXR0b246YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQsIDE1MCwgMTUwKVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLHVFQUF1RTtJQUN2RSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsUUFBUTs7QUFFWjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osY0FBYzs7QUFFbEI7O0FBRUE7O0lBRUkscURBQXFEO0lBQ3JELGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVOztJQUVWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRjeWFuO1xcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5tZXNzYWdle1xcbiAgICBtYXJnaW46MjBweDtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxufVxcblxcbi53aW5kb3cge1xcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG4gICAgZ2FwOjMwcHg7XFxuICAgIFxcbn1cXG5cXG4uYm9hcmQgeyBcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gICAgaGVpZ2h0OjUwMHB4O1xcbiAgICB3aWR0aDo1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpjb3JuZmxvd2VyYmx1ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LXdyYXA6d3JhcDtcXG5cXG59XFxuXFxuLmNlbGxcXG57XFxuICAgIGJveC1zaGFkb3c6MHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40MjUpIGluc2V0O1xcbiAgICBmb250LXNpemU6NTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbi5yZXN0YXJ0LWRpdiB7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgXFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xcbn1cXG5idXR0b246YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQsIDE1MCwgMTUwKVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuLi9zaGlwL3NoaXAnKVxuXG5cbi8vIDEwIHggMTAgZ3JpZCBcblxuZnVuY3Rpb24gbWFrZUJvYXJkKCkge1xuICAgIGNvbnN0IGxzID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwO2krKyl7XG4gICAgICAgIGxzLnB1c2goQXJyYXkoMTApLmZpbGwoJycpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsc1xufVxuXG5jb25zdCBCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICBzaGlwczpbXSxcbiAgICBib2R5OiBtYWtlQm9hcmQoKSxcbiAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uKGxlbmd0aCxbcm93LGNvbF0saWQ9MSkge1xuICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCxpZCk7XG4gICAgICAgXG4gICAgICAgLy8gb3V0IG9mIGJvYXJkXG4gICAgICAgaWYgKGNvbCArbGVuZ3RoPjEwKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgfVxuICAgICAgIC8vIHNoaXAgaXMgYWxyZWFkeSB0aGVyZSBcbiAgICAgICBmb3IgKGxldCBpID0wOyBpPGxlbmd0aDtpKyspe1xuICAgICAgICAgaWYgKHRoaXMuYm9keVtyb3ddW2NvbCtpXSE9ICcnKXtcbiAgICAgICAgIHJldHVybiBudWxsOyB9XG4gICAgICAgIH1cblxuICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxuICAgICAgIHNoaXAuc2V0SGVhZChbcm93LGNvbF0pXG4gICAgICAgZm9yIChsZXQgaT0wOyBpIDxsZW5ndGg7aSsrKXtcbiAgICAgIHRoaXMuYm9keVtyb3ddW2NvbCtpXT0gaWQudG9TdHJpbmcoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uKHJvdyxjb2wpe1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuYm9keVtyb3ddW2NvbF0hPScnICYgdGhpcy5ib2R5W3Jvd11bY29sXSE9J1gnICYgdGhpcy5ib2R5W3Jvd11bY29sXSE9J0gnKXtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQodGhpcy5ib2R5W3Jvd11bY29sXSlcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW2luZGV4XVxuICAgICAgICAgICAgc2hpcC5oaXQoY29sLSBzaGlwLmhlYWRbMV0pXG4gICAgICAgICAgICB0aGlzLmJvZHlbcm93XVtjb2xdPSdIJ1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSh0aGlzLmJvZHlbcm93XVtjb2xdPSdYJylcblxuICAgIH0sXG4gICAgZ2FtZW92ZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgY29uc3Qgc2hpcE51bSA9IHRoaXMuc2hpcHMubGVuZ3RoIFxuICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcD0+e1xuICAgICAgIGlmKHNoaXAuaXNTdW5rKCkpe1xuICAgICAgICBjb3VudGVyKytcbiAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gY291bnRlciA9PSBzaGlwTnVtXG4gICAgfSxcbiAgICByZXNldDogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdXG4gICAgICAgIHRoaXMuYm9keSA9IG1ha2VCb2FyZCgpXG4gICAgfVxufVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkIiwiY29uc3QgUGxheWVyID0gZnVuY3Rpb24oY3B1PWZhbHNlKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcHU6Y3B1LFxuICAgICAgICBjaG9vc2VNb3ZlOiBmdW5jdGlvbihib2FyZCl7XG4gICAgICAgIGlmIChjcHUpe1xuICAgICAgICAgICAgLy8gcG9zaXRpb24gbmV4dCB0byBIXG4gICAgICAgICAgICBsZXQgbmVpZ2hib3JzPVtdXG4gICAgICAgICAgICAvL2Nob29zZSBhIG1vdmUgcmFuZG9tbHkgZnJvbSB0aGUgYXZhaWxhYmxlIG1vdmVzXG4gICAgICAgICAgICBsZXQgbHMgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmJvZHlbaV1bal09PSdIJyl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqKzE8MTAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC5ib2R5W2ldW2orMV0hPSdYJyAmYm9hcmQuYm9keVtpXVtqKzFdIT0nSCcpe1xuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSxqKzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChqLTE+MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYm9keVtpXVtqLTFdIT0nWCcgJiBib2FyZC5ib2R5W2ldW2otMV0hPSdIJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSxqLTFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYm9keVtpXVtqXSE9J1gnICYgYm9hcmQuYm9keVtpXVtqXSE9J0gnKXtcbiAgICAgICAgICAgICAgICAgICAgbHMucHVzaChbaSxqXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChuZWlnaGJvcnMubGVuZ3RoPjApe1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBuZWlnaGJvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmVpZ2hib3JzLmxlbmd0aCldXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBscy5sZW5ndGgpXTtcbiAgICAgICAgICAgIHJldHVybiBtb3ZlXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IHByb21wdChcIkVudGVyIHlvdSBtb3ZlIGZyb20gYXZhaWxhYmxlIHNwYWNlLiBleCBbMSwyXVwiKVxuICAgICAgICAgICAgcmV0dXJuIG1vdmVcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyIiwiY29uc3QgU2hpcCA9IGZ1bmN0aW9uKGxlbmd0aCxpZD0wKXtcbiAgICByZXR1cm4ge1xuICAgIGxlbmd0aDpsZW5ndGgsXG4gICAgaGVhZDogbnVsbCxcbiAgICBzZXRIZWFkOiBmdW5jdGlvbihwb3NpdGlvbil7XG4gICAgICAgIHRoaXMuaGVhZCA9IHBvc2l0aW9uXG4gICAgfSxcbiAgICBpZDogaWQsXG4gICAgYm9keTogQXJyYXkobGVuZ3RoKS5maWxsKCcnKSxcbiAgICBoaXQ6IGZ1bmN0aW9uKG51bWJlcil7XG4gICAgICAgIGlmIChudW1iZXI+bGVuZ3RofCBudW1iZXIgPDApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE91dCBvZiByYW5nZSgxLTkpKWApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5W251bWJlcl09J2hpdCdcbiAgICB9LFxuICAgIGlzU3VuazogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLmJvZHkpe1xuICAgICAgICBpZiAoaSA9PSdoaXQnKXtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQgPT0gbGVuZ3RoO1xuICAgIH0gXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3BsYXllci9wbGF5ZXInO1xuXG5jb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwL3NoaXAnKVxuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXIvcGxheWVyJylcbmNvbnN0IEJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQvYm9hcmQnKVxuXG5cbmNvbnN0IHlvdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3lvdScpXG5jb25zdCBjcHVCb2FyZCA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdScpXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxuY29uc3QgcmVzdGFydERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0LWRpdicpXG5cbmxldCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKVxubGV0IGlzUmVhZHkgPSBmYWxzZTtcbmxldCBwbGF5ZXJUdXJuPXRydWU7XG5cbi8vIGFkZCBjZWxscyB0byB0aGUgYm9hcmQgXG5mdW5jdGlvbiBhZGRDZWxscyhlbGVtZW50LG5hbWUpe1xuICAgIGZvciAobGV0IGkgPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsbmFtZSlcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLGBjLSR7aX0tJHtqfWApXG4gICAgICAgIGRpdi5zdHlsZS5oZWlnaHQ9JzUwcHgnXG4gICAgICAgIGRpdi5zdHlsZS53aWR0aD0nNTBweCdcbiAgICAgICAgLy8gYWRkIHRyaWdnZXIgZm9yIHBsYXllcnMgZmllbGRcbiAgICAgICAgaWYgKG5hbWU9PSd5b3VCb2FyZCcpe1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlPT57XG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoaWQuc3BsaXQoJy0nKVsxXSlcbiAgICAgICAgY29uc3QgY29sPSBwYXJzZUludChpZC5zcGxpdCgnLScpWzJdKVxuICAgICAgICBsZXQgc2hpcExlbmd0aHMgPSBbNSw2LDcsOCwzXTtcbiAgICAgICAgaWYgKHBCb2FyZC5zaGlwcy5sZW5ndGg8PTUgJiAhaXNSZWFkeSkge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aHNbcEJvYXJkLnNoaXBzLmxlbmd0aF1cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBzaGlwTGVuZ3Roc1twQm9hcmQuc2hpcHMubGVuZ3RoICsxXVxuICAgICAgICAgICAgaWYgKCFuZXh0KXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICdDUFUgaXMgcGxhc2luZyBzaGlwcy4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gYFBsYWNlIGEgc2hpcCB3aXRoIHRoZSBsZW5ndGggb2YgJHtuZXh0fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcEJvYXJkLnBsYWNlU2hpcChsZW5ndGgsW3Jvdyxjb2xdLHBCb2FyZC5zaGlwcy5sZW5ndGgpKXtcbiAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0PSAnVGhlIHNoaXAgY2Fubm90IGJlIHBsYWNlZC4gQ2hvb3NlIGFub3RoZXIgcG9zaXRpb24uJ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSAgVUlcbiAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChwQm9hcmQuYm9keSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmV4dCl7XG4gICAgICAgICAgICAgICAgLy8gY3B1IHBsYWNpbmcgc2hpcHNcbiAgICAgICAgICAgICAgICBsZXQgaWQgPTBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aGlsZSAoY0JvYXJkLnNoaXBzLmxlbmd0aDw1KXsgXG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZSA9IGNwdS5jaG9vc2VNb3ZlKGNCb2FyZClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IHNoaXBMZW5ndGhzW2NCb2FyZC5zaGlwcy5sZW5ndGhdXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNCb2FyZC5wbGFjZVNoaXAobGVuLFttb3ZlWzBdLG1vdmVbMV1dLGlkKSl7XG4gICAgICAgICAgICAgICAgaWQrK31cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgaXNSZWFkeT10cnVlO1xuICAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0PSAnQ2hvb3NlIHBsYWNlIHRvIGF0dGFjaydcbiAgICAgICAgfVxuXG4gICAgICAgIH0gICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgKX1cbiAgICAgICAgLy8gdHJpZ2dlciBmb3IgY3B1IGZpZWxkIHRvIGF0dGFja1xuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWRcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChpZC5zcGxpdCgnLScpWzFdKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbD0gcGFyc2VJbnQoaWQuc3BsaXQoJy0nKVsyXSlcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWFkeSAmIHBsYXllclR1cm4gJiBlLnRhcmdldC5pbm5lclRleHQ9PScnKXtcbiAgICAgICAgICAgICAgICBjQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csY29sKVxuICAgICAgICAgICAgICAgIHVwZGF0ZWNCb2FyZChjQm9hcmQuYm9keSlcbiAgICAgICAgICAgICAgICBpZihjQm9hcmQuZ2FtZW92ZXIoKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgd29uJylcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSAnUGxheWVyIHdvbiEhJ1xuICAgICAgICAgICAgICAgICAgICByZXN0YXJ0RGl2LnN0eWxlLmRpc3BsYXk9J2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrPXJlc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjcHUgY2hvb3NlIG1vdmUgXG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZSA9IGNwdS5jaG9vc2VNb3ZlKHBCb2FyZCk7XG4gICAgICAgICAgICAgICAgcEJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZVswXSxtb3ZlWzFdKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKHBCb2FyZC5ib2R5KVxuICAgICAgICAgICAgICAgIGlmKHBCb2FyZC5nYW1lb3ZlcigpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NQVSB3b24uLicpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gJ0NQVSB3b24uLidcbiAgICAgICAgICAgICAgICAgICAgcmVzdGFydERpdi5zdHlsZS5kaXNwbGF5PSdmbGV4J1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ub25jbGljaz1yZXNldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYWRkQ2VsbHMoeW91Qm9hcmQsJ3lvdUJvYXJkJyk7XG5hZGRDZWxscyhjcHVCb2FyZCwnY3B1Qm9hcmQnKTtcblxuXG4vLyBnYW1lIHNldHVwIFxuXG5jb25zdCBwQm9hcmQgPSBCb2FyZCgpXG5jb25zdCBjQm9hcmQ9IEJvYXJkKClcblxuY29uc3QgcGxheWVyID0gUGxheWVyKClcbmNvbnN0IGNwdSA9IFBsYXllcih0cnVlKVxuXG4vLyBmb3IgcGxheWVyIGJvYXJkXG5cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkKGJvYXJkKXtcbiAgIGZvciAobGV0IGk9MDtpPDEwO2krKyl7XG4gICAgZm9yIChsZXQgaj0wO2o8MTA7aisrKXtcbiAgICAgICAgY29uc3QgIGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYy0ke2l9LSR7an1gKVxuICAgICAgICBoLmlubmVyVGV4dD0gYm9hcmRbaV1bal1cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdPT0nSCcpe1xuICAgICAgICBoLnN0eWxlLmNvbG9yPSdyZWQnO1xuICAgICAgICB9XG4gICAgfVxuICAgfSBcbn1cbi8vIGZvciBjcHUgYm9hcmRcbmZ1bmN0aW9uIHVwZGF0ZWNCb2FyZChib2FyZCl7XG4gICAgZm9yIChsZXQgaT0wO2k8MTA7aSsrKXtcbiAgICAgZm9yIChsZXQgaj0wO2o8MTA7aisrKXtcbiAgICAgICAgIGNvbnN0ICBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NwdSAjYy0ke2l9LSR7an1gKVxuICAgICAgICAgaWYgKCFpc051bShib2FyZFtpXVtqXSkpe1xuICAgICAgICAgaC5pbm5lclRleHQ9IGJvYXJkW2ldW2pdXG4gICAgICAgICBpZiAoYm9hcmRbaV1bal09PVwiSFwiKXtcbiAgICAgICAgICAgIGguc3R5bGUuY29sb3I9J2dyZWVuJ1xuICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICB9XG4gICAgfSBcbiB9XG5cblxuZnVuY3Rpb24gaXNOdW0odmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCkgPT0gdmFsO1xufVxuXG5cbmZ1bmN0aW9uIHJlc2V0KCl7XG4gICAgeW91Qm9hcmQuaW5uZXJIVE1MPScnXG4gICAgY3B1Qm9hcmQuaW5uZXJIVE1MPScnXG4gICAgcEJvYXJkLnJlc2V0KClcbiAgICBjQm9hcmQucmVzZXQoKVxuICAgIGFkZENlbGxzKHlvdUJvYXJkLCd5b3VCb2FyZCcpO1xuICAgIGFkZENlbGxzKGNwdUJvYXJkLCdjcHVCb2FyZCcpO1xuICAgIHJlc3RhcnREaXYuc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICBpc1JlYWR5ID0gZmFsc2U7XG4gICAgcGxheWVyVHVybj10cnVlO1xuICAgIG1lc3NhZ2UuaW5uZXJUZXh0PSAnUGxhY2UgYSBzaGlwIHdpdGggdGhlIGxlbmd0aCBvZiA1J1xufVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9