/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var bar = 'foo';

	if (module.id === 0) {
	  var repl = __webpack_require__(1);
	  repl.start({
	    prompt: "> ",
	    input: process.stdin,
	    output: process.stdout,
	    eval: function _eval(cmd, context, filename, callback) {
	      if (cmd.startsWith("ns")) {
	        var namespace = (cmd.split(" ")[1] || "").trim();
	        if (namespace) {
	          this.__nsModules = (this.__nsModules || []).concat(namespace.split("."));
	          return callback(null, "Switched namespace to " + this.__nsModules.join("."));
	        } else {
	          this.__nsModules = null;
	          return callback(null, "Switched to default namespace");
	        }
	      } else {
	        if (this.__nsModules) {
	          var nsEvalCmd = this.__nsModules.join(".") + ".__eval('" + cmd.replace("'", '"').trim() + "')";
	          return callback(null, eval(nsEvalCmd));
	        } else {
	          return callback(null, eval(cmd));
	        }
	      }
	    }
	  });
	} else {
	  module.exports.__eval = function (c) {
	    return eval(c);
	  };
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("repl");

/***/ }
/******/ ]);