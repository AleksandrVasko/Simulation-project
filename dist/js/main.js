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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/input */ \"./modules/input.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 jule 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item', '.portfolio-dots');\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    formId: 'form1',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ formId: 'form2' });\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ formId: 'form3' });\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price) => {\r\n\r\n    const clacBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        total.textContent = totalValue;\r\n\r\n    };\r\n\r\n    clacBlock.addEventListener('input', (e) => {\r\n\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) { timeFraction = 1; }\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/input.js":
/*!**************************!*\
  !*** ./modules/input.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputCheck = () => {\r\n\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n\r\n    const mainInput = document.querySelectorAll('.form-name')[0];\r\n    const modalInput = document.querySelectorAll('.form-name')[1];\r\n    const footerInput = document.getElementById('form2-name');\r\n    const messageInput = document.getElementById('form2-message');\r\n\r\n    const emailInputs = document.querySelectorAll('.form-email');\r\n\r\n    const phoneInputs = document.querySelectorAll('.form-phone');\r\n\r\n    const numberCheck = (input) => {\r\n        input.addEventListener('blur', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, '');\r\n        });\r\n    };\r\n\r\n    const textCheck = (input) => {\r\n        input.addEventListener('blur', (e) => {\r\n            let word = e.target.value.replace(/[^а-яё\\-\\s+]/gi, ' ');\r\n            word = word.replace(/^\\s+|\\s+$/g, '');\r\n            word = word.replace(/^\\-+|\\-+$/g, '');\r\n            word = word.replace(/\\s+/g, ' ');\r\n            word = word.replace(/\\-+/g, '-');\r\n\r\n            e.target.value = word;\r\n            if (word != '') {\r\n                e.target.value = word[0].toUpperCase() + word.slice(1);\r\n            }\r\n        });\r\n\r\n\r\n    };\r\n\r\n    const mailCheck = (input) => {\r\n        input.forEach((e) => {\r\n            e.addEventListener('blur', () => {\r\n                let word = e.value.replace(/[^a-z\\@\\-\\_\\.\\!\\~\\*\\'\\d]/i, '');\r\n                word = word.replace(/^\\-+|\\-+$/g, '');\r\n                word = word.replace(/\\-+/g, '-');\r\n\r\n                e.value = word;\r\n            });\r\n        });\r\n    };\r\n\r\n    const phoneCheck = (input) => {\r\n        input.forEach((e) => {\r\n            e.addEventListener('blur', () => {\r\n                let word = e.value.replace(/[^0-9\\-\\(\\)\\+]/gi, '');\r\n                word = word.replace(/^\\-+|\\-+$/g, '');\r\n                word = word.replace(/\\-+/g, '-');\r\n\r\n                e.value = word;\r\n            });\r\n        });\r\n    };\r\n\r\n    const emailRequired = (emails) => {\r\n        emails.forEach((e) => {\r\n            e.setAttribute(\"required\", \"\");\r\n        });\r\n    };\r\n\r\n    numberCheck(calcSquare);\r\n    numberCheck(calcCount);\r\n    numberCheck(calcDay);\r\n\r\n    textCheck(mainInput);\r\n    textCheck(modalInput);\r\n    textCheck(footerInput);\r\n    textCheck(messageInput);\r\n\r\n    emailRequired(emailInputs);\r\n    mailCheck(emailInputs);\r\n\r\n    phoneCheck(phoneInputs);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputCheck);\n\n//# sourceURL=webpack:///./modules/input.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const modalWindow = modal.querySelector('.popup-content');\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (document.body.clientWidth > 768) {\r\n                modal.style.display = 'block';\r\n                (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 1000,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modalWindow.style.left = (42 * progress) + \"%\";\r\n                    }\r\n                });\r\n            } else {\r\n                modal.style.display = 'block';\r\n            }\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modalWindow.style.left = '0px';\r\n            modal.style.display = 'none';\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId);\r\n    const statusBlock = document.createElement('div');\r\n    statusBlock.style.color = \"white\";\r\n    const loadText = 'Загрузка...';\r\n    const errorText = 'Ошибка...';\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется!';\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n\r\n        list.forEach(input => {\r\n            if (success == false) {\r\n                return;\r\n            }\r\n            if (input.name == 'user_name') {\r\n                let nameCheck = /[а-яё\\s]+/gi;\r\n                nameCheck.test(input.value) ? success = true : success = false;\r\n            } else if (input.name == 'user_phone') {\r\n                let numCheck = /[0-9\\-\\(\\)\\+]/gi;\r\n                numCheck.test(input.value) && input.value.length >= 11 ? success = true : success = false;\r\n            } else if (input.name == 'user_message') {\r\n                let nameCheck = /[а-яё\\s\\d\\!\\?\\.\\,]+/gi;\r\n                nameCheck.test(input.value) ? success = true : success = false;\r\n            }\r\n        });\r\n\r\n        return success;\r\n    };\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        statusBlock.textContent = loadText;\r\n        form.append(statusBlock);\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id);\r\n\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent;\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value;\r\n            }\r\n        });\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText;\r\n\r\n                    setTimeout(() => {\r\n                        statusBlock.textContent = '';\r\n                    }, 3000);\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = '';\r\n                    });\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText;\r\n\r\n                    setTimeout(() => {\r\n                        statusBlock.textContent = '';\r\n                    }, 3000);\r\n                });\r\n\r\n        } else {\r\n            alert('Данные не валидны!!!');\r\n        }\r\n    };\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место, пожаааалуйста))');\r\n        }\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n\r\n            submitForm();\r\n\r\n        });\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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