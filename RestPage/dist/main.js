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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContactPage = () => {\r\n    // Select the main container where the contact page content will be added\r\n    const content = document.querySelector('#content');\r\n\r\n    // Create a div to hold the page content and add a CSS class for styling\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    // Create a form element and add a CSS class for styling the contact form\r\n    const form = document.createElement('form');\r\n    form.classList.add('contact-form');\r\n\r\n    // Create an input for the heading/title of the contact form\r\n    const headingInput = document.createElement('input');\r\n    headingInput.type = 'text'; // Specify input type as text\r\n    headingInput.placeholder = 'Enter heading'; // Placeholder text shown inside the input\r\n    form.appendChild(headingInput); // Add the heading input to the form\r\n\r\n    // Create an input for the address field\r\n    const addressInput = document.createElement('input');\r\n    addressInput.type = 'text'; // Text input for address\r\n    addressInput.placeholder = 'Enter address'; // Placeholder text for address\r\n    form.appendChild(addressInput); // Add address input to the form\r\n\r\n    // Create an input for the phone number field\r\n    const phoneInput = document.createElement('input');\r\n    phoneInput.type = 'text'; // Text input for phone number\r\n    phoneInput.placeholder = 'Enter phone'; // Placeholder text for phone input\r\n    form.appendChild(phoneInput); // Add phone input to the form\r\n\r\n    // Create a submit button for the form\r\n    const submitButton = document.createElement('input');\r\n    submitButton.type = 'submit'; // Input type 'submit' triggers form submission\r\n    submitButton.value = 'Submit'; // Text displayed on the submit button\r\n    form.appendChild(submitButton); // Add the submit button to the form\r\n\r\n    // Append the form to the page content container\r\n    pageContent.appendChild(form);\r\n\r\n    // Append the entire page content (with the form) to the main content area\r\n    content.appendChild(pageContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\r\n\n\n//# sourceURL=webpack://restpage/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n       // Import global styles for the app\r\n  // Import the function that sets up the initial page content\r\n\r\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();  // Run the initial load to setup tabs and display the home page content\r\n\n\n//# sourceURL=webpack://restpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuPage = () => {\r\n    // Select the main content container where the menu page will be rendered\r\n    const content = document.querySelector('#content');\r\n\r\n    // Create a div to hold all page content and add a CSS class for styling\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    // Create a heading element for the page title\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Our Menu'; // Set the text for the heading\r\n\r\n    // Create an unordered list to display menu items\r\n    const menuList = document.createElement('ul');\r\n\r\n    // Create individual list items for each menu option\r\n    const menuItem1 = document.createElement('li');\r\n    menuItem1.textContent = 'Pomodoro'; // First menu item\r\n\r\n    const menuItem2 = document.createElement('li');\r\n    menuItem2.textContent = 'Bolognesa'; // Second menu item\r\n\r\n    const menuItem3 = document.createElement('li');\r\n    menuItem3.textContent = 'Alfredo'; // Third menu item\r\n\r\n    // Append all menu items to the menu list\r\n    menuList.appendChild(menuItem1);\r\n    menuList.appendChild(menuItem2);\r\n    menuList.appendChild(menuItem3);\r\n\r\n    // Append the heading and menu list to the page content container\r\n    pageContent.appendChild(heading);\r\n    pageContent.appendChild(menuList);\r\n\r\n    // Append the complete page content to the main content container in the DOM\r\n    content.appendChild(pageContent);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\r\n\n\n//# sourceURL=webpack://restpage/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n// Import the function that creates the restaurant home page content\r\n\r\n\r\n// Import the function that creates the navigation tabs (e.g., Home, Menu, Contact)\r\n\r\n\r\n// Function to initialize the page on first load\r\nfunction initialLoad() {\r\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();               // Generate and display the navigation tabs\r\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Load and display the home page content by default\r\n}\r\n\r\n// Export the initialLoad function as the default export from this module\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\r\n\n\n//# sourceURL=webpack://restpage/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Function to create and display the restaurant's home page content\r\nconst createRestaurantHomePage = () => {\r\n    // Select the main content container in the DOM\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    // Create a div element to hold all the home page content and apply a CSS class\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    // Create an image element for the restaurant\r\n    const image = document.createElement('img');\r\n    image.src = 'https://as1.ftcdn.net/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg'; // Image URL\r\n    image.height = '300'; // Set image height to 300 pixels\r\n    pageContent.appendChild(image); // Add image to the page content\r\n\r\n    // Create a headline element (h1) welcoming visitors\r\n    const headline = document.createElement('h1');\r\n    headline.textContent = \"Welcome to our restaurant\"; // Set the headline text\r\n    pageContent.appendChild(headline); // Append the headline to the page content\r\n\r\n    // Create a paragraph element with some descriptive text\r\n    const copy = document.createElement('p');\r\n    copy.textContent = 'We serve the best food in town. Come and taste it'; // Text content\r\n    pageContent.appendChild(copy); // Append the paragraph to the page content\r\n\r\n    // Append the entire page content to the main content container in the DOM\r\n    content.appendChild(pageContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\r\n\n\n//# sourceURL=webpack://restpage/./src/restaurant.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restpage/./src/styles.css?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n// Import the functions to generate content for each tab\r\n\r\n\r\n\r\n\r\n// Function to create navigation tabs (Home, Menu, Contact)\r\nconst createtabs = () => {\r\n    // Select the main container to hold the tabs\r\n    const content = document.querySelector('#content');\r\n\r\n    // Create three tab elements for Home, Menu, and Contact\r\n    const div1 = document.createElement('div');\r\n    const div2 = document.createElement('div');\r\n    const div3 = document.createElement('div');\r\n\r\n    // Assign unique IDs to each tab for identification\r\n    div1.setAttribute('id', 'home-btn');\r\n    div2.setAttribute('id', 'menu-btn');\r\n    div3.setAttribute('id', 'contact-btn');\r\n\r\n    // Assign a common class to each tab for shared styling\r\n    div1.classList.add('tab');\r\n    div2.classList.add('tab');\r\n    div3.classList.add('tab');\r\n\r\n    // Set the text displayed inside each tab\r\n    div1.textContent = 'Home';\r\n    div2.textContent = 'Menu';\r\n    div3.textContent = 'Contact';\r\n\r\n    // Append all three tabs to the content container\r\n    content.appendChild(div1);\r\n    content.appendChild(div2);\r\n    content.appendChild(div3);\r\n\r\n    // Add event listeners to load corresponding page content when a tab is clicked\r\n    div1.addEventListener('click', () => {\r\n        clearContent();               // Remove existing content\r\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();   // Load Home page content\r\n    });\r\n\r\n    div2.addEventListener('click', () => {\r\n        clearContent();               // Remove existing content\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();            // Load Menu page content\r\n    });\r\n\r\n    div3.addEventListener('click', () => {\r\n        clearContent();              // Remove existing content\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();         // Load Contact page content\r\n    });\r\n};\r\n\r\n// Helper function to remove existing page content before loading new content\r\nfunction clearContent() {\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.querySelector(\".page-content\");\r\n\r\n    // Only remove content if it exists\r\n    if (pageContent) {\r\n        content.removeChild(pageContent);\r\n    }\r\n}\r\n\r\n// Export the tab creation function for use in other modules\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createtabs);\r\n\n\n//# sourceURL=webpack://restpage/./src/tabs.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;