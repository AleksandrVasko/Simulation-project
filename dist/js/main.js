/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/input */ \"./modules/input.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 jule 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/input.js":
/*!**************************!*\
  !*** ./modules/input.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputCheck = () => {\r\n\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n\r\n    const mainInput = document.querySelectorAll('.form-name')[0];\r\n    const modalInput = document.querySelectorAll('.form-name')[1];\r\n    const footerInput = document.getElementById('form2-name');\r\n    const messageInput = document.getElementById('form2-message');\r\n    const emailInputs = document.querySelectorAll('.form-email');\r\n    const phoneInputs = document.querySelectorAll('.form-phone');\r\n\r\n    const numberCheck = (input) => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, '');\r\n        });\r\n    };\r\n\r\n    const textCheck = (input) => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яё\\-\\s]/i, '');\r\n        });\r\n    };\r\n\r\n    const mailCheck = (input) => {\r\n        input.forEach((item) => {\r\n            item.addEventListener('input', () => {\r\n                item.value = item.value.replace(/[^a-z\\@\\-\\_\\.\\!\\~\\*\\']/i, '');\r\n            });\r\n        });\r\n    };\r\n\r\n    const phoneCheck = (input) => {\r\n        input.forEach((item) => {\r\n            item.addEventListener('input', () => {\r\n                item.value = item.value.replace(/[^0-9\\-\\(\\)]/i, '');\r\n            });\r\n        });\r\n    };\r\n\r\n    numberCheck(calcSquare);\r\n    numberCheck(calcCount);\r\n    numberCheck(calcDay);\r\n\r\n    textCheck(mainInput);\r\n    textCheck(modalInput);\r\n    textCheck(footerInput);\r\n    textCheck(messageInput);\r\n    mailCheck(emailInputs);\r\n    phoneCheck(phoneInputs);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputCheck);\n\n//# sourceURL=webpack:///./modules/input.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n    \r\n    const handleNenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleNenu);\r\n    closeBtn.addEventListener('click', handleNenu); \r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleNenu));\r\n     \r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n    const modalWindow = modal.querySelector('.popup-content');\r\n    let count = 0;\r\n    let interval;\r\n\r\n    const animationModal = () => {\r\n        count++;\r\n        interval = requestAnimationFrame(animationModal);\r\n        if (count < 47) {\r\n            modalWindow.style.left = count * 13 + 'px';\r\n        }\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (document.body.clientWidth > 768) {\r\n                modalWindow.style.left = '0px';\r\n                modal.style.display = 'block';\r\n                interval = requestAnimationFrame(animationModal);\r\n            } else {\r\n                modal.style.display = 'block';\r\n            }\r\n        });\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        count = 0;\r\n        cancelAnimationFrame(interval);\r\n        modal.style.display = 'none';\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    let interval;\r\n    \r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {timeRemaining, hours, minutes, seconds};\r\n    };\r\n\r\n    const funcFormat = (num) => {\r\n        if (num < 10) {\r\n            num = '0' + num;\r\n        }\r\n        return num;\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerHours.textContent = funcFormat(getTime.hours);\r\n        timerMinutes.textContent = funcFormat(getTime.minutes);\r\n        timerSeconds.textContent = funcFormat(getTime.seconds);\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            clearInterval(interval);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        }\r\n    };\r\n    updateClock();\r\n    interval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\n\r\n//Реализация через setInterval; Оставил временно для себя (для нагядности) \r\n\r\n    /* const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        let zeroHours = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\r\n        let zeroMinutes = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\r\n        let zeroSeconds = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            timerHours.textContent = zeroHours;\r\n            timerMinutes.textContent = zeroMinutes;\r\n            timerSeconds.textContent = zeroSeconds;\r\n        } else {\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n            clearInterval(interval);\r\n        }\r\n    };\r\n    interval = setInterval(updateClock, 1000); */\r\n\r\n//Реализация через setTimeout; Оставил временно для себя (для нагядности) \r\n\r\n    /* const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        \r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n        setTimeout(updateClock, 1000);\r\n        }\r\n    };\r\n    updateClock(); */\r\n\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;