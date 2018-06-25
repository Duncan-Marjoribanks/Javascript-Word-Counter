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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const InputView = __webpack_require__(/*! ./views/input_view.js */ \"./src/views/input_view.js\");\nconst OutputView = __webpack_require__(/*! ./views/output_view.js */ \"./src/views/output_view.js\");\nconst WordCounter = __webpack_require__(/*! ./models/word_counter.js */ \"./src/models/word_counter.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript loaded');\n\nconst inputView = new InputView();\ninputView.takeInput();\n\nconst wordCounter = new WordCounter();\nwordCounter.countWords();\nwordCounter.countLetters();\n\nconst outputView = new OutputView();\noutputView.giveOutputWords();\noutputView.giveOutputLetters();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n\tpublish: function(channel, payload){\n\t\tconst event = new CustomEvent(channel, {\n\t\t\tdetail: payload\n\t\t});\n\t\tdocument.dispatchEvent(event);\n\t},\n\n\tsubscribe: function(channel, callback){\n\t\tdocument.addEventListener(channel, callback);\n\t}\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/models/word_counter.js":
/*!************************************!*\
  !*** ./src/models/word_counter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst WordCounter = function() {\n\n};\n\nWordCounter.prototype.countWords = function () {\n  PubSub.subscribe('InputView:text-submitted', (event) => {\n    const inputtedText = event.detail.value;\n    const numberOfWords = this.countString(inputtedText);\n    const numberOfLetters = this.countLetters(inputtedText);\n    console.log(numberOfWords);\n    PubSub.publish('WordCounter:words-result', numberOfWords);\n\n  });\n};\n\n  WordCounter.prototype.countString = function(stringObject) {\n    const wordsArray = stringObject.split(\" \");\n    const finalWordsCount = wordsArray.length;\n    console.log(wordsArray);\n    console.log(finalWordsCount);\n    return finalWordsCount;\n  };\n\n  WordCounter.prototype.countLetters = function () {\n    PubSub.subscribe('InputView:text-submitted', (event) => {\n      const inputtedText = event.detail.value;\n      const numberOfLetters = this.lettersCount(inputtedText);\n      console.log(numberOfLetters);\n      PubSub.publish('WordCounter:letters-result', numberOfLetters);\n    });\n  };\n\n  WordCounter.prototype.lettersCount = function(stringObject) {\n    const letterCount = stringObject.length;\n    return letterCount;\n  };\n\n\n\nmodule.exports = WordCounter;\n\n\n//# sourceURL=webpack:///./src/models/word_counter.js?");

/***/ }),

/***/ "./src/views/input_view.js":
/*!*********************************!*\
  !*** ./src/views/input_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InputView = function () {\n\n}\n\nInputView.prototype.takeInput = function () {\n  const input = document.querySelector('#wordcounter-form');\n  input.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const inputtedText = document.querySelector('#text');\n    PubSub.publish('InputView:text-submitted', inputtedText);\n  });\n};\n\nmodule.exports = InputView;\n\n\n//# sourceURL=webpack:///./src/views/input_view.js?");

/***/ }),

/***/ "./src/views/output_view.js":
/*!**********************************!*\
  !*** ./src/views/output_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst OutputView = function() {\n\n};\n\nOutputView.prototype.giveOutputWords = function () {\n  PubSub.subscribe('WordCounter:words-result', (event) => {\n    const numberOfWords = event.detail;\n    console.log(numberOfWords);\n    const resultElement = document.querySelector('#result');\n    resultElement.textContent = `You wrote ${numberOfWords} words`;\n  });\n};\n\nOutputView.prototype.giveOutputLetters = function () {\n  PubSub.subscribe('WordCounter:letters-result', (event) => {\n    const numberOfLetters = event.detail;\n    console.log(event);\n    const hook = document.querySelector('#result');\n    const lettersInInput = document.createElement('h2')\n    lettersInInput.textContent = `This has ${numberOfLetters} letters`;\n    console.log(lettersInInput);\n    hook.appendChild(lettersInInput);\n  });\n}\n\n\n\nmodule.exports = OutputView;\n\n\n//# sourceURL=webpack:///./src/views/output_view.js?");

/***/ })

/******/ });