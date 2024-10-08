/******/ (() => { // webpackBootstrap
	/******/ 	"use strict";
	/******/ 	var __webpack_modules__ = ({

		/***/ "./blocks/member/src/Edit.js":
		/*!***********************************!*\
		!*** ./blocks/member/src/Edit.js ***!
		\***********************************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			__webpack_require__.r( __webpack_exports__ );
			/* harmony export */ __webpack_require__.d(
				__webpack_exports__,
				{
					/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
					/* harmony export */ }
			);
		/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__         = __webpack_require__( /*! @wordpress/block-editor */ "@wordpress/block-editor" );
		/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n( _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ );
		/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__               = __webpack_require__( /*! react/jsx-runtime */ "react/jsx-runtime" );
		/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default       = /*#__PURE__*/__webpack_require__.n( react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ );
		// WP dependencies


		// The component

		/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
			return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
				"div",
				{
					...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
					children: "Editor view"
				}
			);
		}

		/***/ }),

	/***/ "./blocks/member/src/editor-style.css":
	/*!********************************************!*\
		!*** ./blocks/member/src/editor-style.css ***!
		\********************************************/
	/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

		__webpack_require__.r( __webpack_exports__ );
		// extracted by mini-css-extract-plugin


		/***/ }),

	/***/ "react/jsx-runtime":
	/*!**********************************!*\
		!*** external "ReactJSXRuntime" ***!
		\**********************************/
	/***/ ((module) => {

		module.exports = window["ReactJSXRuntime"];

		/***/ }),

	/***/ "@wordpress/block-editor":
	/*!*************************************!*\
		!*** external ["wp","blockEditor"] ***!
		\*************************************/
	/***/ ((module) => {

		module.exports = window["wp"]["blockEditor"];

		/***/ }),

	/***/ "@wordpress/blocks":
	/*!********************************!*\
		!*** external ["wp","blocks"] ***!
		\********************************/
	/***/ ((module) => {

		module.exports = window["wp"]["blocks"];

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
	/******/ 		__webpack_modules__[moduleId]( module, module.exports, __webpack_require__ );
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
		/******/ 			var getter    = module && module.__esModule ?
		/******/ 				() => (module['default']) :
		/******/ 				() => (module);
		/******/ 			__webpack_require__.d( getter, { a: getter } );
		/******/ 			return getter;
		/******/ 		};
	/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
	/******/ 		// define getter functions for harmony exports
	/******/ 		__webpack_require__.d = (exports, definition) => {
		/******/ 			for (var key in definition) {
			/******/ 				if (__webpack_require__.o( definition, key ) && ! __webpack_require__.o( exports, key )) {
				/******/ 					Object.defineProperty( exports, key, { enumerable: true, get: definition[key] } );
				/******/ 				}
			/******/ 			}
		/******/ 		};
	/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
	/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call( obj, prop ))
	/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
	/******/ 		// define __esModule on exports
	/******/ 		__webpack_require__.r = (exports) => {
		/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			/******/ 				Object.defineProperty( exports, Symbol.toStringTag, { value: 'Module' } );
			/******/ 			}
		/******/ 			Object.defineProperty( exports, '__esModule', { value: true } );
		/******/ 		};
	/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
	/*!************************************!*\
	!*** ./blocks/member/src/index.js ***!
	\************************************/
	__webpack_require__.r( __webpack_exports__ );
	/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__         = __webpack_require__( /*! @wordpress/blocks */ "@wordpress/blocks" );
	/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n( _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ );
	/* harmony import */ var _Edit_js__WEBPACK_IMPORTED_MODULE_1__                  = __webpack_require__( /*! ./Edit.js */ "./blocks/member/src/Edit.js" );
	/* harmony import */ var _editor_style_css__WEBPACK_IMPORTED_MODULE_2__         = __webpack_require__( /*! ./editor-style.css */ "./blocks/member/src/editor-style.css" );
	/* WP Dependencies */


	/* Internal deps */



	// Registering the block:
	(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(
		'coco/member',
		{
			title: 'Co-co Member',
			edit: _Edit_js__WEBPACK_IMPORTED_MODULE_1__["default"],
			save: () => null
		}
	);
})();

/******/ })();
// # sourceMappingURL=member-block.js.map