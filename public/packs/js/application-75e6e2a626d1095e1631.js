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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/miriamciurea/code/miriamciurea/flashcards/app/javascript/packs/application.js: Support for the experimental syntax 'jsx' isn't currently enabled (15:5):\n\n\u001b[0m \u001b[90m 13 |\u001b[39m document\u001b[33m.\u001b[39maddEventListener(\u001b[32m'DOMContentLoaded'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\n \u001b[90m 14 |\u001b[39m   \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 15 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mHelloWorld\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 16 |\u001b[39m     document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'react-root'\u001b[39m)\n \u001b[90m 17 |\u001b[39m   )\u001b[33m;\u001b[39m\n \u001b[90m 18 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n\nIf you already added the plugin for this syntax to your config, it's possible that your config isn't being loaded.\nYou can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded configuration:\n\tnpx cross-env BABEL_SHOW_CONFIG_FOR=/Users/miriamciurea/code/miriamciurea/flashcards/app/javascript/packs/application.js <your build command>\nSee https://babeljs.io/docs/configuration#print-effective-configs for more info.\n\n    at constructor (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:351:19)\n    at Parser.raise (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:3281:19)\n    at Parser.expectOnePlugin (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:3315:18)\n    at Parser.parseExprAtom (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10952:18)\n    at Parser.parseExprSubscripts (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10607:23)\n    at Parser.parseUpdate (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10590:21)\n    at Parser.parseMaybeUnary (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10568:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10422:61)\n    at Parser.parseExprOps (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10427:23)\n    at Parser.parseMaybeConditional (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10404:23)\n    at Parser.parseMaybeAssign (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10365:21)\n    at /Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10335:39\n    at Parser.allowInAnd (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:11957:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10335:17)\n    at Parser.parseExprListItem (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:11717:18)\n    at Parser.parseCallExpressionArguments (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10793:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10710:29)\n    at Parser.parseSubscript (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10647:19)\n    at Parser.parseSubscripts (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10620:19)\n    at Parser.parseExprSubscripts (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10611:17)\n    at Parser.parseUpdate (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10590:21)\n    at Parser.parseMaybeUnary (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10568:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10422:61)\n    at Parser.parseExprOps (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10427:23)\n    at Parser.parseMaybeConditional (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10404:23)\n    at Parser.parseMaybeAssign (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10365:21)\n    at Parser.parseExpressionBase (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10319:23)\n    at /Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10315:39\n    at Parser.allowInAnd (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:11952:16)\n    at Parser.parseExpression (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10315:17)\n    at Parser.parseStatementContent (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:12393:23)\n    at Parser.parseStatementLike (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:12260:17)\n    at Parser.parseStatementListItem (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:12240:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:12817:61)\n    at Parser.parseBlockBody (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:12810:10)\n    at Parser.parseBlock (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:12798:10)\n    at Parser.parseFunctionBody (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:11637:24)\n    at Parser.parseArrowExpression (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:11612:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:11228:12)\n    at Parser.parseExprAtom (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10874:23)\n    at Parser.parseExprSubscripts (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10607:23)\n    at Parser.parseUpdate (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10590:21)\n    at Parser.parseMaybeUnary (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10568:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10422:61)\n    at Parser.parseExprOps (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10427:23)\n    at Parser.parseMaybeConditional (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10404:23)\n    at Parser.parseMaybeAssign (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10365:21)\n    at /Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10335:39\n    at Parser.allowInAnd (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:11957:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/miriamciurea/code/miriamciurea/flashcards/node_modules/@babel/parser/lib/index.js:10335:17)");

/***/ })

/******/ });
//# sourceMappingURL=application-75e6e2a626d1095e1631.js.map