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
/***/ function(module, exports) {

	
	/**
	 * Selection and generate component for A-Frame.
	 * generate component modified from dmarcos a-invaders spawner https://github.com/dmarcos/a-invaders/blob/master/js/components/spawner.js
	 */
	AFRAME.registerComponent('picker', {

	  schema: {
	    on: { default: 'click' },
	    asset: { default: 'item'},
	    size: { default: '1' }
	  },

	  update: function (oldData) {
	    var el = this.el;
	    var pick = this.pick.bind(this);
	    el.addEventListener(this.data.on, pick);
	  },

	  pick: function () {
	    var ID = this.data.asset;
	    var size = this.data.size;
	    var items = document.querySelectorAll('.generate');
	    this.add(ID,items,size);
	  },

	  add: function (ID,items,size) {
	    items.forEach(function(element) {
	      element.setAttribute('generate','asset: '+ ID +'; on: click; size:' + size);
	    });
	  }

	});


	/**
	 * Check class
	 */
	function checkClass(entity, cls) {
	 return (' ' + entity.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}


	AFRAME.registerComponent('generate', {

	  schema: {
	    on: { default: 'click' },
	    asset: { default: '' },
	    size: { default: '1' }
	  },

	  update: function () {
	    var el = this.el;
	    var generate = this.generate.bind(this);
	    if (this.on === this.data.on) { return; }
	    el.removeEventListener(this.on, generate);
	    el.addEventListener(this.data.on, generate);
	    this.on = this.data.on;
	  },

	  generate: function () {
	    var el = this.el;
	    var size = this.data.size;
	    var matrixWorld = el.object3D.matrixWorld;
	    var position = new THREE.Vector3();
	    position.setFromMatrixPosition(matrixWorld);

	    // Reset Y to bottom of plane
	    var posY = size/2 + 0.2;
	    position.setY(0);

	    var entity = document.createElement('a-entity');
	    entity.setAttribute('position', position);
	    entity.setAttribute('collada-model', "#" + this.data.asset);
	    entity.setAttribute('scale', size + ' ' + size + ' ' + size);

	    // All objects to look at camera
	    entity.setAttribute('look-at', '#camera');

	    if (checkClass(el, 'generate')) {
	      el.sceneEl.appendChild(entity);
	    }

	  }
	});


/***/ }
/******/ ]);