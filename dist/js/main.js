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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/input */ \"./modules/input.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 jule 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item', '.portfolio-dots');\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price) => {\r\n\r\n    const clacBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        total.textContent = totalValue;\r\n\r\n    };\r\n\r\n    clacBlock.addEventListener('input', (e) => {\r\n\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/input.js":
/*!**************************!*\
  !*** ./modules/input.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputCheck = () => {\r\n\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n\r\n    const mainInput = document.querySelectorAll('.form-name')[0];\r\n    const modalInput = document.querySelectorAll('.form-name')[1];\r\n    const footerInput = document.getElementById('form2-name');\r\n    const messageInput = document.getElementById('form2-message');\r\n\r\n    const emailInputs = document.querySelectorAll('.form-email');\r\n    const phoneInputs = document.querySelectorAll('.form-phone');\r\n\r\n    const numberCheck = (input) => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, '');\r\n        });\r\n    };\r\n\r\n    const textCheck = (input) => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яё\\-\\s]/i, '');\r\n        });\r\n    };\r\n\r\n    const mailCheck = (input) => {\r\n        input.forEach((item) => {\r\n            item.addEventListener('input', () => {\r\n                item.value = item.value.replace(/[^a-z\\@\\-\\_\\.\\!\\~\\*\\']/i, '');\r\n            });\r\n        });\r\n    };\r\n\r\n    const phoneCheck = (input) => {\r\n        input.forEach((item) => {\r\n            item.addEventListener('input', () => {\r\n                item.value = item.value.replace(/[^0-9\\-\\(\\)]/i, '');\r\n            });\r\n        });\r\n    };\r\n\r\n    numberCheck(calcSquare);\r\n    numberCheck(calcCount);\r\n    numberCheck(calcDay);\r\n\r\n    textCheck(mainInput);\r\n    textCheck(modalInput);\r\n    textCheck(footerInput);\r\n    textCheck(messageInput);\r\n\r\n    mailCheck(emailInputs);\r\n    phoneCheck(phoneInputs);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputCheck);\n\n//# sourceURL=webpack:///./modules/input.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menu = document.querySelector('menu');\r\n    const body = document.querySelector('body');\r\n\r\n    body.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu')) {\r\n            menu.classList.add('active-menu');\r\n        } else if (!e.target.closest('menu') || e.target.classList.contains('close-btn') || e.target.closest('a')) {\r\n            menu.classList.remove('active-menu');\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const modalWindow = modal.querySelector('.popup-content');\r\n    let count = 0;\r\n    let interval;\r\n\r\n    const modalAnimation = () => {\r\n        count++;\r\n        interval = requestAnimationFrame(modalAnimation);\r\n        if (count < 47) {\r\n            modalWindow.style.left = count * 15 + 'px';\r\n        }\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (document.body.clientWidth > 768) {\r\n                modalWindow.style.left = '0px';\r\n                modal.style.display = 'block';\r\n                interval = requestAnimationFrame(modalAnimation);\r\n            } else {\r\n                modal.style.display = 'block';\r\n            }\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            count = 0;\r\n            cancelAnimationFrame(interval);\r\n            modal.style.display = 'none';\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (slider, sliderItem, dotsParent) => {\r\n\r\n    const sliderWrap = () => {\r\n        const sliderBlock = document.querySelector(slider);\r\n        const slides = document.querySelectorAll(sliderItem);\r\n        const dotsBlock = document.querySelector(dotsParent);\r\n        const timeInterval = 2000;\r\n\r\n        let dots;\r\n        let currentSlide = 0;\r\n        let interval;\r\n\r\n        const addDots = () => {\r\n            slides.forEach(() => {\r\n                dotsBlock.insertAdjacentHTML('beforeend',\r\n                    `<li class='dot'></li>`);\r\n            });\r\n            dots = document.querySelectorAll('.dot');\r\n            dots[0].classList.add('dot-active');\r\n        };\r\n\r\n        const prevSlide = (elems, index, strClass) => {\r\n            elems[index].classList.remove(strClass);\r\n        };\r\n\r\n        const nextSlide = (elems, index, strClass) => {\r\n            elems[index].classList.add(strClass);\r\n        };\r\n\r\n        const autoSlide = () => {\r\n            prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n            prevSlide(dots, currentSlide, 'dot-active');\r\n            currentSlide++;\r\n\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0;\r\n            }\r\n\r\n            nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n            nextSlide(dots, currentSlide, 'dot-active');\r\n        };\r\n\r\n        const startSlide = (timer = 1500) => {\r\n            interval = setInterval(autoSlide, timer);\r\n        };\r\n\r\n        const stopSlide = () => {\r\n            clearInterval(interval);\r\n        };\r\n\r\n        sliderBlock.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n\r\n            if (!e.target.matches('.dot, .portfolio-btn')) {\r\n                return;\r\n            }\r\n\r\n            prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n            prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n            if (e.target.matches('#arrow-right')) {\r\n                currentSlide++;\r\n            } else if (e.target.matches('#arrow-left')) {\r\n                currentSlide--;\r\n            } else if (e.target.classList.contains('dot')) {\r\n                dots.forEach((dot, index) => {\r\n                    if (e.target === dot) {\r\n                        currentSlide = index;\r\n                    }\r\n                });\r\n            }\r\n\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0;\r\n            }\r\n\r\n            if (currentSlide < 0) {\r\n                currentSlide = slides.length - 1;\r\n            }\r\n\r\n            nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n            nextSlide(dots, currentSlide, 'dot-active');\r\n        });\r\n\r\n        sliderBlock.addEventListener('mouseenter', (e) => {\r\n            if (e.target.matches('.dot, .portfolio-btn')) {\r\n                stopSlide();\r\n            }\r\n        }, true);\r\n\r\n        sliderBlock.addEventListener('mouseleave', (e) => {\r\n            if (e.target.matches('.dot, .portfolio-btn')) {\r\n                startSlide(timeInterval);\r\n            }\r\n        }, true);\r\n\r\n        addDots();\r\n        startSlide(timeInterval);\r\n    };\r\n\r\n    const sliderElems = [slider, sliderItem, dotsParent];\r\n\r\n    const sliderCheck = () => {\r\n        let count = 0;\r\n        sliderElems.forEach((item) => {\r\n            if (!document.querySelector(item)) {\r\n                return;\r\n            } else if (document.querySelector(item)) {\r\n                count++;\r\n            }\r\n            if (count == 3) {\r\n                sliderWrap();\r\n            }\r\n        });\r\n    };\r\n\r\n    sliderCheck();\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            });\r\n        }\r\n    });\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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