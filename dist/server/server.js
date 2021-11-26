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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/components/animations.ts":
/*!*********************************************!*\
  !*** ./src/client/components/animations.ts ***!
  \*********************************************/
/*! exports provided: createDudeAnimations, setDudeAnimation, createMummyAnimation, setMummyAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDudeAnimations", function() { return createDudeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDudeAnimation", function() { return setDudeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMummyAnimation", function() { return createMummyAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMummyAnimation", function() { return setMummyAnimation; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");

var createDudeAnimations = function (scene) {
    scene.anims.create({
        key: 'left',
        frames: scene.anims.generateFrameNumbers(_constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].DUDE.toString(), { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'idle',
        frames: [{ key: _constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].DUDE.toString(), frame: 4 }],
        frameRate: 20
    });
    scene.anims.create({
        key: 'right',
        frames: scene.anims.generateFrameNumbers(_constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].DUDE.toString(), { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
};
var setDudeAnimation = function (sprite, animation) {
    if (animation === void 0) { animation = 'idle'; }
    if (!sprite.anims.isPlaying)
        sprite.play(animation);
    else if (sprite.anims.isPlaying && sprite.anims.getCurrentKey() !== animation)
        sprite.play(animation);
};
var createMummyAnimation = function (scene) {
    scene.anims.create({
        key: 'walk',
        frames: scene.anims.generateFrameNumbers(_constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].MUMMY.toString(), {}),
        frameRate: 16,
        repeat: 7
    });
};
var setMummyAnimation = function (sprite, direction) {
    if (!sprite.anims.isPlaying)
        sprite.anims.play('walk');
    var flipX = direction === 'left' ? true : false;
    sprite.setFlipX(flipX);
};


/***/ }),

/***/ "./src/client/components/controls.ts":
/*!*******************************************!*\
  !*** ./src/client/components/controls.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Controls = /** @class */ (function () {
    function Controls(scene, socket) {
        var _this = this;
        this.scene = scene;
        this.socket = socket;
        this.left = false;
        this.right = false;
        this.up = false;
        this.controls = [];
        this.none = true;
        this.prevNone = true;
        // add a second pointer
        scene.input.addPointer();
        var detectPointer = function (gameObject, down) {
            if (gameObject.btn) {
                switch (gameObject.btn) {
                    case 'left':
                        _this.left = down;
                        break;
                    case 'right':
                        _this.right = down;
                        break;
                    case 'up':
                        _this.up = down;
                        break;
                }
            }
        };
        scene.input.on('gameobjectdown', function (pointer, gameObject) {
            return detectPointer(gameObject, true);
        });
        scene.input.on('gameobjectup', function (pointer, gameObject) {
            return detectPointer(gameObject, false);
        });
        var left = new Control(scene, 0, 0, 'left').setRotation(-0.5 * Math.PI);
        var right = new Control(scene, 0, 0, 'right').setRotation(0.5 * Math.PI);
        var up = new Control(scene, 0, 0, 'up');
        this.controls.push(left, right, up);
        this.resize();
        this.scene.events.on('update', this.update, this);
    }
    Controls.prototype.controlsDown = function () {
        return { left: this.left, right: this.right, up: this.up, none: this.none };
    };
    Controls.prototype.resize = function () {
        var SCALE = 1;
        var controlsRadius = (192 / 2) * SCALE;
        var w = this.scene.cameras.main.width - 10 - controlsRadius;
        var h = this.scene.cameras.main.height - 10 - controlsRadius;
        var positions = [
            {
                x: controlsRadius + 10,
                y: h
            },
            { x: controlsRadius + 214, y: h },
            { x: w, y: h }
        ];
        this.controls.forEach(function (ctl, i) {
            ctl.setPosition(positions[i].x, positions[i].y);
            ctl.setScale(SCALE);
        });
    };
    Controls.prototype.update = function () {
        this.none = this.left || this.right || this.up ? false : true;
        if (!this.none || this.none !== this.prevNone) {
            var total = 0;
            if (this.left)
                total += 1;
            if (this.right)
                total += 2;
            if (this.up)
                total += 4;
            if (this.none)
                total += 8;
            this.socket.emit('U' /* short for updateDude */, total);
        }
        this.prevNone = this.none;
    };
    return Controls;
}());
/* harmony default export */ __webpack_exports__["default"] = (Controls);
var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control(scene, x, y, btn) {
        var _this = _super.call(this, scene, x, y, 'controls') || this;
        _this.btn = btn;
        scene.add.existing(_this);
        _this.setInteractive()
            .setScrollFactor(0)
            .setAlpha(0.5)
            .setDepth(2);
        if (!scene.sys.game.device.input.touch)
            _this.setAlpha(0);
        return _this;
    }
    return Control;
}(Phaser.GameObjects.Image));


/***/ }),

/***/ "./src/client/components/cursors.ts":
/*!******************************************!*\
  !*** ./src/client/components/cursors.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Cursors = /** @class */ (function () {
    function Cursors(scene, socket) {
        this.scene = scene;
        this.socket = socket;
        this.none = true;
        this.prevNone = true;
        this.left = false;
        this.right = false;
        this.up = false;
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.scene.events.on('update', this.update, this);
    }
    Cursors.prototype.cursorsDown = function () {
        return { left: this.left, right: this.right, up: this.up, none: this.none };
    };
    Cursors.prototype.update = function () {
        if (!this.cursors.left || !this.cursors.right || !this.cursors.up)
            return;
        this.none = this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.up.isDown ? false : true;
        if (!this.none || this.none !== this.prevNone) {
            this.left = false;
            this.right = false;
            this.up = false;
            if (this.cursors.left.isDown) {
                this.left = true;
            }
            else if (this.cursors.right.isDown) {
                this.right = true;
            }
            if (this.cursors.up.isDown) {
                this.up = true;
            }
            if (true) {
                var total = 0;
                if (this.left)
                    total += 1;
                if (this.right)
                    total += 2;
                if (this.up)
                    total += 4;
                if (this.none)
                    total += 8;
                this.socket.emit('U' /* short for updateDude */, total);
            }
        }
        this.prevNone = this.none;
    };
    return Cursors;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cursors);


/***/ }),

/***/ "./src/client/components/fullscreenButton.ts":
/*!***************************************************!*\
  !*** ./src/client/components/fullscreenButton.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fullscreenButton = function (scene) {
    var button = scene.add
        .image(0, 0, 'fullscreen', 0)
        .setOrigin(1, 0)
        .setInteractive()
        .setScrollFactor(0)
        .setDepth(100);
    button.on('pointerup', function () {
        if (scene.scale.isFullscreen) {
            button.setFrame(0);
            scene.scale.stopFullscreen();
        }
        else {
            button.setFrame(1);
            scene.scale.startFullscreen();
        }
    });
    return button;
};
/* harmony default export */ __webpack_exports__["default"] = (fullscreenButton);


/***/ }),

/***/ "./src/client/components/resize.ts":
/*!*****************************************!*\
  !*** ./src/client/components/resize.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This is a phaser 3 scaling strategy implementation from
 * https://github.com/yandeu/phaser3-scaling-resizing-example
 */
var DEFAULT_WIDTH = 896;
var DEFAULT_HEIGHT = 504;
var MAX_WIDTH = DEFAULT_WIDTH * 1.5;
var MAX_HEIGHT = DEFAULT_HEIGHT * 1.5;
var SCALE_MODE = 'SMOOTH'; // FIT OR SMOOTH
var resize = function (game) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var width = DEFAULT_WIDTH;
    var height = DEFAULT_HEIGHT;
    var maxWidth = MAX_WIDTH;
    var maxHeight = MAX_HEIGHT;
    var scaleMode = SCALE_MODE;
    var scale = Math.min(w / width, h / height);
    var newWidth = Math.min(w / scale, maxWidth);
    var newHeight = Math.min(h / scale, maxHeight);
    var defaultRatio = DEFAULT_WIDTH / DEFAULT_HEIGHT;
    var maxRatioWidth = MAX_WIDTH / DEFAULT_HEIGHT;
    var maxRatioHeight = DEFAULT_WIDTH / MAX_HEIGHT;
    // smooth scaling
    var smooth = 1;
    if (scaleMode === 'SMOOTH') {
        var maxSmoothScale = 1.15;
        var normalize = function (value, min, max) {
            return (value - min) / (max - min);
        };
        if (width / height < w / h) {
            smooth =
                -normalize(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
        }
        else {
            smooth =
                -normalize(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
        }
    }
    // resize the game
    game.scale.resize(newWidth * smooth, newHeight * smooth);
    // scale the width and height of the css
    game.canvas.style.width = newWidth * scale + 'px';
    game.canvas.style.height = newHeight * scale + 'px';
    // center the game with css margin
    game.canvas.style.marginTop = (h - newHeight * scale) / 2 + "px";
    game.canvas.style.marginLeft = (w - newWidth * scale) / 2 + "px";
};
/* harmony default export */ __webpack_exports__["default"] = (resize);


/***/ }),

/***/ "./src/client/components/texts.ts":
/*!****************************************!*\
  !*** ./src/client/components/texts.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");

var texts = [
    {
        y: 230,
        fontSize: 28,
        type: 'server_running_time'
    },
    {
        y: 260,
        fontSize: 28,
        type: 'the_room_id'
    },
    {
        y: 290,
        fontSize: 28,
        type: 'show_connected_users'
    },
    {
        y: 320,
        fontSize: 28,
        type: 'show_latency'
    },
    {
        y: 350,
        fontSize: 28,
        type: 'show_fps'
    }
];
var Texts = /** @class */ (function () {
    function Texts(scene) {
        var _this = this;
        this.scene = scene;
        this.textObjects = {};
        this.hidden = false;
        texts.forEach(function (text) {
            var theText = scene.add
                .text(scene.cameras.main.width / 2, text.y, '', {
                color: '#ffffff',
                fontSize: text.fontSize
            })
                .setOrigin(0.5)
                .setResolution(window.devicePixelRatio)
                .setScrollFactor(0)
                .setDepth(100);
            _this.textObjects[text.type] = theText;
        });
        this.makeBug();
        this.resize();
        this.toggleHidden();
        this.scene.events.on('update', this.update, this);
    }
    Texts.prototype.update = function () {
        if (this.hidden)
            return;
        this.setFps(this.scene.game.loop.actualFps);
    };
    Texts.prototype.makeBug = function () {
        var _this = this;
        this.bug = this.scene.add
            .image(0, 0, 'bug')
            .setOrigin(0)
            .setScrollFactor(0)
            .setDepth(100);
        this.bug.setInteractive().on('pointerdown', function () {
            _this.toggleHidden();
        });
    };
    Texts.prototype.toggleHidden = function () {
        this.hidden = !this.hidden;
        for (var key in this.textObjects) {
            this.textObjects[key].setAlpha(this.hidden ? 0 : 1);
        }
    };
    Texts.prototype.resize = function () {
        var _this = this;
        texts.forEach(function (text) {
            var textObj = _this.textObjects[text.type];
            textObj.setPosition(_this.scene.cameras.main.width / 2, text.y);
        });
        if (this.bug)
            this.bug.setPosition(16, 16);
    };
    Texts.prototype.setConnectCounter = function (connectCounter) {
        this.textObjects['show_connected_users'].setText("Connected users: " + connectCounter + "/" + _constants__WEBPACK_IMPORTED_MODULE_0__["MAX_PLAYERS_PER_ROOM"]);
    };
    Texts.prototype.setRoomId = function (roomId) {
        this.textObjects['the_room_id'].setText("RoomId " + roomId);
    };
    Texts.prototype.setTime = function (time) {
        this.textObjects['server_running_time'].setText("Server is running since " + new Date(time).toUTCString());
    };
    Texts.prototype.setFps = function (fps) {
        this.textObjects['show_fps'].setText("fps: " + Math.round(fps));
    };
    Texts.prototype.setLatency = function (latency) {
        if (isNaN(latency.current))
            return;
        if (isNaN(latency.high) || latency.current > latency.high)
            latency.high = latency.current;
        if (isNaN(latency.low) || latency.current < latency.low)
            latency.low = latency.current;
        var sum = latency.history.reduce(function (previous, current) { return (current += previous); });
        var avg = sum / latency.history.length;
        this.textObjects['show_latency'].setText("Latency " + latency.current + "ms (avg " + Math.round(avg) + "ms / low " + latency.low + "ms / high " + latency.high + "ms)");
    };
    return Texts;
}());
/* harmony default export */ __webpack_exports__["default"] = (Texts);


/***/ }),

/***/ "./src/client/config.ts":
/*!******************************!*\
  !*** ./src/client/config.ts ***!
  \******************************/
/*! exports provided: world, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "world", function() { return world; });
/* harmony import */ var _scenes_preloadScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/preloadScene */ "./src/client/scenes/preloadScene.ts");
/* harmony import */ var _scenes_menuScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/menuScene */ "./src/client/scenes/menuScene.ts");
/* harmony import */ var _scenes_mainScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/mainScene */ "./src/client/scenes/mainScene.ts");



var DEFAULT_WIDTH = 1280;
var DEFAULT_HEIGHT = 720;
// the size of the world
var world = {
    x: 0,
    y: 0,
    width: 2560,
    height: 864
};
var config = {
    type: Phaser.WEBGL,
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.NONE,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [_scenes_preloadScene__WEBPACK_IMPORTED_MODULE_0__["default"], _scenes_menuScene__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_mainScene__WEBPACK_IMPORTED_MODULE_2__["default"]],
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 0.8
            },
            debug: false,
            debugBodyColor: 0xff00ff
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/client/scenes/mainScene.ts":
/*!****************************************!*\
  !*** ./src/client/scenes/mainScene.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_texts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/texts */ "./src/client/components/texts.ts");
/* harmony import */ var _components_cursors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cursors */ "./src/client/components/cursors.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/animations */ "./src/client/components/animations.ts");
/* harmony import */ var _components_fullscreenButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/fullscreenButton */ "./src/client/components/fullscreenButton.ts");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls */ "./src/client/components/controls.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/client/config.ts");
/* harmony import */ var _components_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/resize */ "./src/client/components/resize.ts");
/* harmony import */ var _server_managers_syncManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../server/managers/syncManager */ "./src/server/managers/syncManager.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};









var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this, { key: 'MainScene' }) || this;
        _this.objects = {};
        _this.sync = {
            initialState: false,
            objects: []
        };
        _this.latency = {
            current: NaN,
            high: NaN,
            low: NaN,
            ping: NaN,
            id: '',
            canSend: true,
            history: []
        };
        _this.level = 0;
        return _this;
    }
    MainScene.prototype.init = function (props) {
        var scene = props.scene, _a = props.level, level = _a === void 0 ? 0 : _a, socket = props.socket;
        this.level = level;
        this.socket = socket;
        this.socket.emit('joinRoom', { scene: scene, level: level });
    };
    MainScene.prototype.create = function () {
        var _this = this;
        var socket = this.socket;
        var levelText = this.add
            .text(0, 0, "Level " + (this.level + 1), {
            color: '#ffffff',
            fontSize: 42
        })
            .setOrigin(0.5, 0)
            .setDepth(100)
            .setScrollFactor(0);
        var starfield = this.add.tileSprite(_config__WEBPACK_IMPORTED_MODULE_5__["world"].x, _config__WEBPACK_IMPORTED_MODULE_5__["world"].y, _config__WEBPACK_IMPORTED_MODULE_5__["world"].width, _config__WEBPACK_IMPORTED_MODULE_5__["world"].height, 'starfield').setOrigin(0);
        this.cursors = new _components_cursors__WEBPACK_IMPORTED_MODULE_1__["default"](this, socket);
        this.controls = new _components_controls__WEBPACK_IMPORTED_MODULE_4__["default"](this, socket);
        var texts = new _components_texts__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        var fullscreenBtn = Object(_components_fullscreenButton__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
        this.cameras.main.setBounds(_config__WEBPACK_IMPORTED_MODULE_5__["world"].x, _config__WEBPACK_IMPORTED_MODULE_5__["world"].y, _config__WEBPACK_IMPORTED_MODULE_5__["world"].width, _config__WEBPACK_IMPORTED_MODULE_5__["world"].height);
        socket.on('getPong', function (id) {
            if (_this.latency.id !== id)
                return;
            _this.latency.canSend = true;
            _this.latency.current = new Date().getTime() - _this.latency.ping;
            if (_this.latency.history.length >= 200)
                _this.latency.history.shift();
            _this.latency.history.push(_this.latency.current);
            texts.setLatency(_this.latency);
        });
        this.time.addEvent({
            delay: 250,
            loop: true,
            callback: function () {
                if (!_this.latency.canSend)
                    return;
                if (texts.hidden)
                    return;
                _this.latency.ping = new Date().getTime();
                _this.latency.id = Phaser.Math.RND.uuid();
                _this.latency.canSend = false;
                socket.emit('sendPing', _this.latency.id);
            }
        });
        socket.on('changingRoom', function (data) {
            console.log('You are changing room');
            // destroy all objects and get new onces
            Object.keys(_this.objects).forEach(function (key) {
                _this.objects[key].sprite.destroy();
                delete _this.objects[key];
            });
            socket.emit('getInitialState');
            _this.level = data.level | 0;
            levelText.setText("Level " + (_this.level + 1));
        });
        socket.on('S' /* short for syncGame */, function (res) {
            if (res.connectCounter)
                texts.setConnectCounter(res.connectCounter);
            if (res.time)
                texts.setTime(res.time);
            if (res.roomId)
                texts.setRoomId(res.roomId);
            // res.O (objects) contains only the objects that need to be updated
            if (res.O /* short for objects */) {
                res.O = _server_managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].decode(res.O);
                _this.sync.objects = __spreadArrays(_this.sync.objects, res.O);
                _this.sync.objects.forEach(function (obj) {
                    // the if the player's dude is in the objects list the camera follows it sprite
                    if (_this.objects[obj.id] && obj.skin === _constants__WEBPACK_IMPORTED_MODULE_8__["SKINS"].DUDE && obj.clientId && +obj.clientId === +socket.clientId) {
                        _this.cameras.main.setScroll(obj.x - _this.cameras.main.width / 2, obj.y - _this.cameras.main.height / 2);
                    }
                    // if the object does not exist, create a new one
                    if (!_this.objects[obj.id]) {
                        var sprite_1 = _this.add
                            .sprite(obj.x, obj.y, obj.skin.toString())
                            .setOrigin(0.5)
                            .setRotation(obj.angle || 0);
                        // add the sprite by id to the objects object
                        _this.objects[obj.id] = {
                            sprite: sprite_1
                        };
                    }
                    // set some properties to the sprite
                    var sprite = _this.objects[obj.id].sprite;
                    // set scale
                    if (obj.scale) {
                        sprite.setScale(obj.scale);
                    }
                    // set scale
                    if (obj.tint) {
                        sprite.setTint(obj.tint);
                    }
                    // set visibility
                    sprite.setVisible(!obj.dead);
                });
            }
        });
        // request the initial state
        socket.emit('getInitialState');
        // request the initial state every 15 seconds
        // to make sure all objects are up to date
        // in case we missed one (network issues)
        // should be sent from the server side not the client
        // this.time.addEvent({
        //   delay: 15000,
        //   loop: true,
        //   callback: () => {
        //     socket.emit('getInitialState')
        //   }
        // })
        // request the initial state if the game gets focus
        // e.g. if the users comes from another tab or window
        this.game.events.on('focus', function () { return socket.emit('getInitialState'); });
        // this helps debugging
        this.input.on('pointerdown', function (pointer) {
            console.log(pointer.worldX, pointer.worldY);
        });
        var resize = function () {
            starfield.setScale(Math.max(_this.cameras.main.height / starfield.height, 1));
            texts.resize();
            if (_this.controls)
                _this.controls.resize();
            fullscreenBtn.setPosition(_this.cameras.main.width - 16, 16);
            _this.cameras.main.setScroll(_this.cameras.main.worldView.x, _config__WEBPACK_IMPORTED_MODULE_5__["world"].height);
            levelText.setPosition(_this.cameras.main.width / 2, 20);
        };
        this.scale.on('resize', function (gameSize, baseSize, displaySize, resolution) {
            _this.cameras.resize(gameSize.width, gameSize.height);
            resize();
        });
        Object(_components_resize__WEBPACK_IMPORTED_MODULE_6__["default"])(this.game);
    };
    MainScene.prototype.update = function (time, delta) {
        var _this = this;
        // update all objects
        if (this.sync.objects.length > 0) {
            this.sync.objects.forEach(function (obj) {
                if (_this.objects[obj.id]) {
                    var sprite = _this.objects[obj.id].sprite;
                    if (obj.dead !== null)
                        sprite.setVisible(!obj.dead);
                    if (obj.x !== null)
                        sprite.x = obj.x;
                    if (obj.y !== null)
                        sprite.y = obj.y;
                    if (obj.angle !== null && typeof obj.angle !== 'undefined')
                        sprite.angle = obj.angle;
                    if (obj.skin !== null) {
                        if (obj.skin === _constants__WEBPACK_IMPORTED_MODULE_8__["SKINS"].MUMMY) {
                            if (obj.direction !== null)
                                Object(_components_animations__WEBPACK_IMPORTED_MODULE_2__["setMummyAnimation"])(sprite, obj.direction);
                        }
                        if (obj.skin === _constants__WEBPACK_IMPORTED_MODULE_8__["SKINS"].DUDE) {
                            if (obj.animation !== null)
                                Object(_components_animations__WEBPACK_IMPORTED_MODULE_2__["setDudeAnimation"])(sprite, obj.animation);
                        }
                    }
                }
            });
        }
        this.sync.objects = [];
    };
    return MainScene;
}(Phaser.Scene));
/* harmony default export */ __webpack_exports__["default"] = (MainScene);


/***/ }),

/***/ "./src/client/scenes/menuScene.ts":
/*!****************************************!*\
  !*** ./src/client/scenes/menuScene.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/resize */ "./src/client/components/resize.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MenuScene = /** @class */ (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        return _super.call(this, { key: 'MenuScene' }) || this;
    }
    MenuScene.prototype.init = function (props) {
        var socket = props.socket;
        this.socket = socket;
    };
    MenuScene.prototype.create = function () {
        var _this = this;
        var styles = {
            color: '#000000',
            align: 'center',
            fontSize: 52
        };
        var texts = [];
        texts.push(this.add.text(0, 0, 'Choose which Level\nyou want to play', styles).setOrigin(0.5, 0));
        texts.push(this.add
            .text(0, 0, 'Matter Physics', styles)
            .setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerdown', function () {
            _this.scene.start('MainScene', { scene: 'MatterScene', level: 0, socket: _this.socket });
        }));
        texts.push(this.add
            .text(0, 0, 'Arcade Physics (Level 1)', styles)
            .setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerdown', function () {
            _this.scene.start('MainScene', { scene: 'ArcadeScene', level: 0, socket: _this.socket });
        }));
        texts.push(this.add
            .text(0, 0, 'Arcade Physics (Level 2)', styles)
            .setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerdown', function () {
            _this.scene.stop();
            _this.scene.start('MainScene', { scene: 'ArcadeScene', level: 1, socket: _this.socket });
        }));
        texts.push(this.add
            .text(0, 0, 'Arcade Physics (Level 3)', styles)
            .setOrigin(0.5, 0)
            .setInteractive()
            .on('pointerdown', function () {
            _this.scene.stop();
            _this.scene.start('MainScene', { scene: 'ArcadeScene', level: 2, socket: _this.socket });
        }));
        var resize = function () {
            var _a = _this.cameras.main, centerX = _a.centerX, centerY = _a.centerY;
            var posY = [20, centerY - 100, centerY - 10, centerY + 60, centerY + 130];
            texts.forEach(function (text, i) {
                text.setPosition(centerX, posY[i]);
            });
        };
        this.scale.on('resize', function (gameSize, baseSize, displaySize, resolution) {
            if (!_this.scene.isActive())
                return;
            _this.cameras.resize(gameSize.width, gameSize.height);
            resize();
        });
        resize();
        Object(_components_resize__WEBPACK_IMPORTED_MODULE_0__["default"])(this.game);
    };
    return MenuScene;
}(Phaser.Scene));
/* harmony default export */ __webpack_exports__["default"] = (MenuScene);


/***/ }),

/***/ "./src/client/scenes/preloadScene.ts":
/*!*******************************************!*\
  !*** ./src/client/scenes/preloadScene.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/animations */ "./src/client/components/animations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PreloadScene = /** @class */ (function (_super) {
    __extends(PreloadScene, _super);
    function PreloadScene() {
        return _super.call(this, { key: 'PreloadScene' }) || this;
    }
    PreloadScene.prototype.preload = function () {
        this.load.setBaseURL('static/client');
        this.load.image(_constants__WEBPACK_IMPORTED_MODULE_1__["SKINS"].BOX.toString(), 'assets/box.png');
        this.load.image(_constants__WEBPACK_IMPORTED_MODULE_1__["SKINS"].STAR.toString(), 'assets/star.png');
        this.load.image('bug', 'assets/bug.png');
        this.load.image('starfield', 'assets/starfield.jpg');
        this.load.image('controls', 'assets/controls.png');
        this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__["SKINS"].DUDE.toString(), 'assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
        this.load.spritesheet('fullscreen', 'assets/fullscreen.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_1__["SKINS"].MUMMY.toString(), 'assets/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });
    };
    PreloadScene.prototype.create = function () {
        var _this = this;
        Object(_components_animations__WEBPACK_IMPORTED_MODULE_2__["createDudeAnimations"])(this);
        Object(_components_animations__WEBPACK_IMPORTED_MODULE_2__["createMummyAnimation"])(this);
        // connecting to socket.io
        var url = location.origin + "/G"; /* short for stats */
        var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default.a.connect(url, { transports: ['websocket'] });
        // on reconnection, reset the transports option, as the Websocket
        // connection may have failed (caused by proxy, firewall, browser, ...)
        socket.on('reconnect_attempt', function () {
            socket.io.opts.transports = ['polling', 'websocket'];
        });
        socket.on('connect', function () {
            console.log("You're connected to socket.io");
        });
        // we wait until we have a valid clientId, then start the MainScene
        socket.on('clientId', function (clientId) {
            socket.clientId = clientId;
            console.log('Your client id', clientId);
            _this.scene.start('MenuScene', { socket: socket });
        });
    };
    return PreloadScene;
}(Phaser.Scene));
/* harmony default export */ __webpack_exports__["default"] = (PreloadScene);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: SKINS, MAX_PLAYERS_PER_ROOM, USER_KICK_TIMEOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKINS", function() { return SKINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PLAYERS_PER_ROOM", function() { return MAX_PLAYERS_PER_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_KICK_TIMEOUT", function() { return USER_KICK_TIMEOUT; });
var SKINS = {
    DUDE: 0,
    BOX: 1,
    STAR: 2,
    MUMMY: 3
};
var MAX_PLAYERS_PER_ROOM = 4;
var USER_KICK_TIMEOUT = 60000; // 1 minute


/***/ }),

/***/ "./src/server/game/arcadeObjects/box.ts":
/*!**********************************************!*\
  !*** ./src/server/game/arcadeObjects/box.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(scene, id, x, y) {
        var _this = _super.call(this, scene, x, y, '') || this;
        _this.skin = _constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].BOX;
        _this.sync = true;
        scene.add.existing(_this);
        scene.physics.add.existing(_this, true);
        // @ts-ignore
        _this.body
            .setSize(95, 95)
            // 32 is the default width an height for an sprite if the texture can not be loaded
            .setOffset(-32, -32);
        _this.id = id.toString();
        return _this;
    }
    return Box;
}(Phaser.Physics.Arcade.Sprite));
/* harmony default export */ __webpack_exports__["default"] = (Box);


/***/ }),

/***/ "./src/server/game/arcadeObjects/dude.ts":
/*!***********************************************!*\
  !*** ./src/server/game/arcadeObjects/dude.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Dude = /** @class */ (function (_super) {
    __extends(Dude, _super);
    function Dude(scene, id, options) {
        var _this = _super.call(this, scene, 0, 0, '') || this;
        _this.skin = _constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].DUDE;
        _this.updates = {};
        _this.shouldUpdate = true;
        _this.prevPosition = {
            x: -1,
            y: -1
        };
        _this.dead = false;
        _this.prevDead = false;
        _this.color = 0xffffff;
        _this.prevColor = 0xffffff;
        _this.animation = undefined;
        _this.hit = false;
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
        _this.setFrame(0);
        _this.socketId = options.socketId;
        _this.clientId = options.clientId;
        _this.setNewPosition();
        _this.setCollideWorldBounds(true).setOrigin(0);
        // @ts-ignore
        _this.body.setSize(32, 48);
        // matterJS uses an id per object, so I do the same here to be consistent
        // @ts-ignore
        _this.id = id.toString();
        return _this;
    }
    Dude.prototype.setNewPosition = function () {
        this.setPosition(Phaser.Math.RND.integerInRange(0, 1000), Phaser.Math.RND.integerInRange(100, 300));
    };
    Dude.prototype.postUpdate = function () {
        this.prevPosition = __assign({}, this.body.position);
        this.prevDead = this.dead;
        this.prevColor = this.color;
    };
    Dude.prototype.gotHit = function () {
        var _this = this;
        if (this.hit)
            return;
        this.hit = true;
        this.color = 0xff0000;
        this.scene.time.addEvent({
            delay: 3500,
            callback: function () {
                _this.hit = false;
                _this.color = 0xffffff;
            }
        });
    };
    Dude.prototype.update = function () {
        if (!this.active)
            return;
        if (!this.shouldUpdate)
            return;
        this.shouldUpdate = false;
        if (this.updates.left)
            this.setVelocityX(-400);
        else if (this.updates.right)
            this.setVelocityX(400);
        else
            this.setVelocityX(0);
        if (this.updates.up && this.body.blocked.down)
            this.setVelocityY(-600);
        this.animation = this.body.velocity.x >= 0.5 ? 'right' : this.body.velocity.x <= -0.5 ? 'left' : 'idle';
        this.updates = {};
    };
    Dude.prototype.revive = function (clientId, socketId) {
        this.setActive(true);
        this.dead = false;
        this.setNewPosition();
        this.clientId = clientId;
        this.socketId = socketId;
    };
    Dude.prototype.kill = function () {
        this.setActive(false);
        this.dead = true;
    };
    Dude.prototype.setUpdates = function (updates) {
        this.shouldUpdate = true;
        this.updates = updates;
    };
    return Dude;
}(Phaser.Physics.Arcade.Sprite));
/* harmony default export */ __webpack_exports__["default"] = (Dude);


/***/ }),

/***/ "./src/server/game/arcadeObjects/map.ts":
/*!**********************************************!*\
  !*** ./src/server/game/arcadeObjects/map.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Map = /** @class */ (function () {
    function Map(scene, world, level) {
        this.scene = scene;
        this.world = world;
        this.level = level;
        this.tileSize = 95;
        this.levels = [
            [
                '    XXX  M    M      XXXXXX',
                '        XX       X X       ',
                ' XX  X X   XXXXX     X     ',
                '   M    M         M X    G ',
                'XX    XXXX       XXX     X ',
                'XXXX       X   X       X   '
            ],
            [
                '                           ',
                '        M        X X       ',
                ' XX  X XXXXX XXX     X     ',
                ' G      M           X      ',
                'XX    XXXX M     XXX     X ',
                'XXXX XXXXXXXXX X       X   '
            ],
            [
                '           M       G       ',
                '        XXXXXXX  X X       ',
                ' XX  X XXXXX XXX     X     ',
                '        M           X      ',
                'XX    XXXX       XXX     X ',
                'XXXX XXXXXXXXX X       X   '
            ]
        ];
        this.margin = {
            y: 3 * this.tileSize + 11 + 45,
            x: world.x + 45
        };
    }
    Map.prototype.collideRect = function (rect1, rect2) {
        return (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y);
    };
    Map.prototype.getTileByCoordinates = function (coordinates) {
        var _this = this;
        var x1 = coordinates.x, y1 = coordinates.y;
        var tile = { tile: '', x: -1, y: -1 };
        this.getLevel().forEach(function (row, y) {
            for (var x = 0; x < row.length; x++) {
                var x2 = x * _this.tileSize + _this.margin.x;
                var y2 = y * _this.tileSize + _this.margin.y;
                x2 -= 45; // minus the half of a the box
                y2 -= 45; // minus the half of a the box
                if (_this.collideRect({ x: x1, y: y1, width: 1, height: 1 }, { x: x2, y: y2, width: _this.tileSize, height: _this.tileSize })) {
                    tile = { tile: row[x], x: x2, y: y2 };
                    break;
                }
            }
        });
        return tile;
    };
    Map.prototype.countTotalLevels = function () {
        return this.levels.length;
    };
    Map.prototype.getLevel = function () {
        return this.levels[this.level];
    };
    return Map;
}());
/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./src/server/game/arcadeObjects/mummy.ts":
/*!************************************************!*\
  !*** ./src/server/game/arcadeObjects/mummy.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Mummy = /** @class */ (function (_super) {
    __extends(Mummy, _super);
    function Mummy(scene, id, x, y) {
        var _this = _super.call(this, scene, x, y, '') || this;
        _this.skin = _constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].MUMMY;
        _this.dead = false;
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
        _this.setFrame(0);
        _this.direction = Math.random() > 0.5 ? 'left' : 'right';
        // @ts-ignore
        _this.body.setSize(37, 45);
        _this.id = id.toString();
        return _this;
    }
    Mummy.prototype.kill = function () {
        var _this = this;
        if (this.dead)
            return;
        this.dead = true;
        this.scene.time.addEvent({
            delay: 5000,
            callback: function () { return (_this.dead = false); }
        });
    };
    Mummy.prototype.getLookAhead = function () {
        var x = this.direction === 'right' ? this.body.right + 5 : this.body.left - 5;
        var y = this.body.bottom + 10;
        return { x: x, y: y };
    };
    Mummy.prototype.changeDirection = function (tile) {
        if (tile.tile !== 'X') {
            this.direction = this.direction === 'right' ? 'left' : 'right';
        }
    };
    Mummy.prototype.move = function () {
        var velocity = this.direction === 'right' ? 35 : -35;
        if (this.dead)
            velocity = 0;
        this.setVelocityX(velocity);
    };
    Mummy.prototype.update = function () {
        this.move();
    };
    return Mummy;
}(Phaser.Physics.Arcade.Sprite));
/* harmony default export */ __webpack_exports__["default"] = (Mummy);


/***/ }),

/***/ "./src/server/game/arcadeObjects/star.ts":
/*!***********************************************!*\
  !*** ./src/server/game/arcadeObjects/star.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star(scene, id, x, y) {
        var _this = _super.call(this, scene, x, y, '') || this;
        _this.skin = _constants__WEBPACK_IMPORTED_MODULE_0__["SKINS"].STAR;
        _this.sync = true;
        _this.tint = 0x00ff00;
        scene.add.existing(_this);
        scene.physics.add.existing(_this, true);
        // @ts-ignore
        _this.body.setSize(24, 22, false);
        _this.id = id.toString();
        return _this;
    }
    return Star;
}(Phaser.Physics.Arcade.Sprite));
/* harmony default export */ __webpack_exports__["default"] = (Star);


/***/ }),

/***/ "./src/server/game/config.ts":
/*!***********************************!*\
  !*** ./src/server/game/config.ts ***!
  \***********************************/
/*! exports provided: default, arcadePhysics, matterPhysics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcadePhysics", function() { return arcadePhysics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matterPhysics", function() { return matterPhysics; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

var config = {
    type: Phaser.HEADLESS,
    parent: 'phaser-game',
    width: 1280,
    height: 720,
    banner: false,
    // @ts-ignore
    audio: false
};
/* harmony default export */ __webpack_exports__["default"] = (config);
var arcadePhysics = {
    default: 'arcade',
    arcade: {
        gravity: { y: 1500 }
    }
};
var matterPhysics = {
    default: 'matter',
    matter: {
        gravity: {
            y: 2
        }
    }
};


/***/ }),

/***/ "./src/server/game/game.ts":
/*!*********************************!*\
  !*** ./src/server/game/game.ts ***!
  \*********************************/
/*! exports provided: PhaserGame, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhaserGame", function() { return PhaserGame; });
/* harmony import */ var _geckos_io_phaser_on_nodejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @geckos.io/phaser-on-nodejs */ "@geckos.io/phaser-on-nodejs");
/* harmony import */ var _geckos_io_phaser_on_nodejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_geckos_io_phaser_on_nodejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/server/game/config.ts");
/* harmony import */ var _scenes_arcadeScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/arcadeScene */ "./src/server/game/scenes/arcadeScene.ts");
/* harmony import */ var _scenes_matterScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/matterScene */ "./src/server/game/scenes/matterScene.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var PhaserGame = /** @class */ (function (_super) {
    __extends(PhaserGame, _super);
    function PhaserGame(config) {
        return _super.call(this, config) || this;
    }
    return PhaserGame;
}(Phaser.Game));

var Game = function (roomManager, roomId, options) {
    var config = __assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"]);
    if (options.scene === 'ArcadeScene') {
        config.scene = [_scenes_arcadeScene__WEBPACK_IMPORTED_MODULE_2__["default"]];
        config.physics = _config__WEBPACK_IMPORTED_MODULE_1__["arcadePhysics"];
    }
    if (options.scene === 'MatterScene') {
        config.scene = [_scenes_matterScene__WEBPACK_IMPORTED_MODULE_3__["default"]];
        config.physics = _config__WEBPACK_IMPORTED_MODULE_1__["matterPhysics"];
    }
    // @ts-ignore
    config.customEnvironment = true;
    // a very hackie trick to pass some custom data
    // but it work well :)
    config.callbacks = {
        preBoot: function () {
            return { level: +options.level, roomManager: roomManager, roomId: roomId };
        }
    };
    return new PhaserGame(config);
};
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/server/game/matterObjects/box.ts":
/*!**********************************************!*\
  !*** ./src/server/game/matterObjects/box.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matterGameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matterGameObject */ "./src/server/game/matterObjects/matterGameObject.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(scene, x, y) {
        var _this = _super.call(this, scene, _constants__WEBPACK_IMPORTED_MODULE_1__["SKINS"].BOX) || this;
        _this.scene = scene;
        _this.addBody(_this.Matter.Bodies.rectangle(x, y, 95, 95, {
            friction: 0.1,
            chamfer: { radius: 14 },
            label: 'box',
            density: 0.000125
        }));
        _this.lifeTime = Phaser.Math.RND.integerInRange(1000 * 15, 1000 * 45);
        _this.setTimer();
        return _this;
    }
    Box.prototype.setTimer = function () {
        var _this = this;
        this.scene.time.addEvent({
            delay: this.lifeTime,
            callback: function () {
                _this.kill();
            }
        });
    };
    Box.prototype.revive = function (x, y) {
        _super.prototype.revive.call(this, x, y);
        this.setTimer();
    };
    return Box;
}(_matterGameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Box);


/***/ }),

/***/ "./src/server/game/matterObjects/dude.ts":
/*!***********************************************!*\
  !*** ./src/server/game/matterObjects/dude.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matterGameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matterGameObject */ "./src/server/game/matterObjects/matterGameObject.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Dude = /** @class */ (function (_super) {
    __extends(Dude, _super);
    function Dude(scene, x, y, clientId, socketId) {
        var _this = _super.call(this, scene, _constants__WEBPACK_IMPORTED_MODULE_1__["SKINS"].DUDE) || this;
        _this.clientId = clientId;
        _this.socketId = socketId;
        _this.maxVelocity = {
            x: 6,
            y: 12
        };
        _this.width = 32;
        _this.height = 48;
        _this.shouldUpdate = true;
        _this.translateX = 0;
        _this.translateY = 0;
        _this.jumpLocked = false;
        _this.move = {
            leftAllowed: true,
            rightAllowed: true
        };
        _this.touching = {
            left: false,
            right: false,
            bottom: false
        };
        _this.updates = {};
        var h = _this.height;
        var w = _this.width - 4;
        console.log('clientId', clientId);
        _this.mainBody = _this.Matter.Bodies.rectangle(x, y, w, h, {
            density: 0.001,
            friction: 0.1,
            frictionStatic: 0.1,
            label: 'dude',
            chamfer: { radius: 10 }
        });
        _this.sensors = {
            bottom: _this.Matter.Bodies.rectangle(x, y + h / 2 + 2 / 2, w * 0.35, 4, {
                isSensor: true
            }),
            left: _this.Matter.Bodies.rectangle(x - w / 2 - 4 / 2, y + 0, 4, h * 0.9, {
                isSensor: true
            }),
            right: _this.Matter.Bodies.rectangle(x + w / 2 + 4 / 2, y + 0, 4, h * 0.9, {
                isSensor: true
            })
        };
        _this.addBodies([_this.mainBody, _this.sensors.bottom, _this.sensors.left, _this.sensors.right]);
        _this.setSensorLabel();
        _this.Matter.Body.setInertia(_this.body, Infinity); // setFixedRotation
        return _this;
    }
    Dude.prototype.setTranslate = function (x, y) {
        if (y === void 0) { y = 0; }
        this.translateX = x;
        this.translateY = y;
    };
    Dude.prototype.translate = function () {
        if (this.translateX !== 0 || this.translateY !== 0) {
            this.Matter.Body.setPosition(this.body, {
                x: this.body.position.x + this.translateX,
                y: this.body.position.y + this.translateY
            });
            this.translateX = 0;
            this.translateY = 0;
        }
    };
    Dude.prototype.setSensorLabel = function () {
        this.sensors.bottom.label = "dudeBottomSensor_" + this.clientId;
        this.sensors.left.label = "dudeLeftSensor_" + this.clientId;
        this.sensors.right.label = "dudeRightSensor_" + this.clientId;
    };
    Dude.prototype.revive = function (x, y, clientId, socketId) {
        _super.prototype.revive.call(this, x, y);
        this.clientId = clientId;
        this.socketId = socketId;
        this.setSensorLabel();
    };
    Dude.prototype.lockJump = function () {
        var _this = this;
        this.jumpLocked = true;
        this.scene.time.addEvent({
            delay: 250,
            callback: function () { return (_this.jumpLocked = false); }
        });
    };
    Dude.prototype.setUpdates = function (updates) {
        this.shouldUpdate = true;
        this.updates = updates;
    };
    Dude.prototype.update = function (force) {
        if (force === void 0) { force = false; }
        this.animation = 'idle';
        if (!force && !this.shouldUpdate)
            return;
        var updates = this.updates;
        var x = updates.left && this.move.leftAllowed ? -0.01 : updates.right && this.move.rightAllowed ? 0.01 : 0;
        var y = !this.jumpLocked && updates.up && this.touching.bottom ? -this.maxVelocity.y : 0;
        if (y !== 0)
            this.lockJump();
        // We use setVelocity to jump and applyForce to move right and left
        // Jump
        if (y !== 0)
            this.Matter.Body.setVelocity(this.body, { x: this.body.velocity.x, y: y });
        // Move
        this.Matter.Body.applyForce(this.body, { x: 0, y: 0 }, { x: x, y: 0 });
        // check max velocity
        var maxVelocityX = this.body.velocity.x > this.maxVelocity.x ? 1 : this.body.velocity.x < -this.maxVelocity.x ? -1 : null;
        if (maxVelocityX)
            this.Matter.Body.setVelocity(this.body, { x: this.maxVelocity.x * maxVelocityX, y: this.body.velocity.y });
        // set velocity X to zero
        if (!updates.left && !updates.right) {
            this.Matter.Body.setVelocity(this.body, { x: this.body.velocity.x * 0.5, y: this.body.velocity.y });
        }
        this.animation = this.body.velocity.x >= 0.5 ? 'right' : this.body.velocity.x <= -0.5 ? 'left' : 'idle';
        this.translate();
        this.touching = {
            left: false,
            right: false,
            bottom: false
        };
        this.move = {
            leftAllowed: true,
            rightAllowed: true
        };
        this.updates = {};
        this.shouldUpdate = false;
    };
    return Dude;
}(_matterGameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Dude);


/***/ }),

/***/ "./src/server/game/matterObjects/matterGameObject.ts":
/*!***********************************************************!*\
  !*** ./src/server/game/matterObjects/matterGameObject.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var MatterGameObject = /** @class */ (function () {
    function MatterGameObject(scene, skin) {
        this.scene = scene;
        this.skin = skin;
        this.clientId = undefined;
        this.dead = false;
        this.prevDead = false;
        this.angle = 0; // in DEG
        this.prevAngle = -1; // in DEG
        this.animation = 'idle';
        this.prevAnimation = 'idle';
        this.tint = 0x000000;
        this.Matter = Phaser.Physics.Matter.Matter;
    }
    MatterGameObject.prototype.addBody = function (body) {
        this.body = body;
        this.body.prevVelocity = { x: 0, y: 0 };
        this.scene.matter.world.add(this.body);
    };
    MatterGameObject.prototype.addBodies = function (bodies) {
        this.body = this.Matter.Body.create({
            parts: bodies.map(function (body) { return body; })
        });
        this.body.prevVelocity = { x: 0, y: 0 };
        this.scene.matter.world.add(this.body);
    };
    MatterGameObject.prototype.preUpdate = function (arg) {
        if (arg === void 0) { arg = undefined; }
        this.angle = Phaser.Math.RadToDeg(this.body.angle);
    };
    MatterGameObject.prototype.update = function (arg) {
        if (arg === void 0) { arg = undefined; }
    };
    MatterGameObject.prototype.postUpdate = function (arg) {
        if (arg === void 0) { arg = undefined; }
        if (this.dead && !this.prevDead)
            this.prevDead = true;
        else if (!this.dead && this.prevDead)
            this.prevDead = false;
        this.body.prevVelocity = __assign({}, this.body.velocity);
        this.prevAngle = this.angle;
        this.prevAnimation = this.animation;
    };
    MatterGameObject.prototype.revive = function (x, y, clientId, socketId) {
        if (clientId === void 0) { clientId = undefined; }
        if (socketId === void 0) { socketId = undefined; }
        this.kill(false);
        this.Matter.Body.setPosition(this.body, { x: x, y: y });
    };
    MatterGameObject.prototype.kill = function (dead) {
        if (dead === void 0) { dead = true; }
        this.dead = dead;
        if (dead)
            this.Matter.Body.setPosition(this.body, { x: -1000, y: -1000 });
        this.Matter.Sleeping.set(this.body, dead);
    };
    return MatterGameObject;
}());
/* harmony default export */ __webpack_exports__["default"] = (MatterGameObject);


/***/ }),

/***/ "./src/server/game/matterObjects/matterGameObjectGroup.ts":
/*!****************************************************************!*\
  !*** ./src/server/game/matterObjects/matterGameObjectGroup.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dude__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dude */ "./src/server/game/matterObjects/dude.ts");
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box */ "./src/server/game/matterObjects/box.ts");
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star */ "./src/server/game/matterObjects/star.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");




var GameObjectGroup = /** @class */ (function () {
    function GameObjectGroup(scene, objects) {
        this.scene = scene;
        this.objects = objects;
        this.Matter = Phaser.Physics.Matter.Matter;
    }
    GameObjectGroup.prototype.killById = function (id) {
        this.objects.forEach(function (obj) {
            if (obj.body.id === id)
                obj.kill();
        });
    };
    GameObjectGroup.prototype.getObjectById = function (id) {
        var object = undefined;
        this.objects.forEach(function (obj) {
            if (obj.body.id === id)
                object = obj;
        });
        return object;
    };
    GameObjectGroup.prototype.add = function (x, y, skin, options) {
        if (options === void 0) { options = {}; }
        var dead = this.objects.filter(function (obj) { return obj.dead && obj.skin === skin; });
        var alive = this.objects.filter(function (obj) { return !obj.dead && obj.skin === skin; });
        var clientId = options.clientId, socketId = options.socketId, category = options.category;
        // allow not more than 100 alive objects per skin
        if (alive.length >= 100)
            return;
        var object = null;
        if (dead.length > 0) {
            // revive the first dead object and set its x and y
            object = dead[0];
            object.revive(x, y, clientId, socketId);
        }
        else {
            // create a new object and add it to the objects array
            if (skin === _constants__WEBPACK_IMPORTED_MODULE_3__["SKINS"].BOX)
                object = new _box__WEBPACK_IMPORTED_MODULE_1__["default"](this.scene, x, y);
            else if (skin === _constants__WEBPACK_IMPORTED_MODULE_3__["SKINS"].STAR)
                object = new _star__WEBPACK_IMPORTED_MODULE_2__["default"](this.scene, x, y, category);
            else if (typeof clientId !== 'undefined' && typeof socketId !== 'undefined')
                object = new _dude__WEBPACK_IMPORTED_MODULE_0__["default"](this.scene, x, y, clientId, socketId);
            if (object)
                this.objects.push(object);
        }
        // Rotate the box
        // TODO(yandeu) this should be inside the boxObject class
        if (skin === _constants__WEBPACK_IMPORTED_MODULE_3__["SKINS"].BOX && object)
            this.Matter.Body.rotate(object.body, Math.random() * 2);
        return object;
    };
    return GameObjectGroup;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameObjectGroup);


/***/ }),

/***/ "./src/server/game/matterObjects/star.ts":
/*!***********************************************!*\
  !*** ./src/server/game/matterObjects/star.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matterGameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matterGameObject */ "./src/server/game/matterObjects/matterGameObject.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star(scene, x, y, category) {
        if (category === void 0) { category = undefined; }
        var _this = _super.call(this, scene, _constants__WEBPACK_IMPORTED_MODULE_1__["SKINS"].STAR) || this;
        _this.scene = scene;
        _this.x = x;
        _this.y = y;
        _this.category = category;
        _this.scale = 1;
        if (category === 'big') {
            _this.tint = 0xff7200;
            _this.scale = 3;
        }
        if (category === 'medium') {
            _this.scale = 2;
        }
        _this.addBody(_this.Matter.Bodies.rectangle(x, y, 24 * _this.scale, 22 * _this.scale, {
            chamfer: { radius: 14 },
            label: 'star',
            isStatic: true,
            isSensor: true
        }));
        return _this;
    }
    Star.prototype.setReviveTimer = function () {
        var _this = this;
        this.scene.time.addEvent({
            delay: 15000,
            callback: function () {
                _super.prototype.revive.call(_this, _this.x, _this.y);
            }
        });
    };
    Star.prototype.kill = function (dead) {
        if (dead === void 0) { dead = true; }
        this.dead = dead;
        if (dead)
            this.Matter.Body.setPosition(this.body, { x: -1000, y: -1000 });
        this.Matter.Sleeping.set(this.body, dead);
    };
    return Star;
}(_matterGameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Star);


/***/ }),

/***/ "./src/server/game/scenes/arcadeScene.ts":
/*!***********************************************!*\
  !*** ./src/server/game/scenes/arcadeScene.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client/config */ "./src/client/config.ts");
/* harmony import */ var _arcadeObjects_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arcadeObjects/box */ "./src/server/game/arcadeObjects/box.ts");
/* harmony import */ var _arcadeObjects_dude__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../arcadeObjects/dude */ "./src/server/game/arcadeObjects/dude.ts");
/* harmony import */ var _client_components_cursors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../client/components/cursors */ "./src/client/components/cursors.ts");
/* harmony import */ var _arcadeObjects_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../arcadeObjects/star */ "./src/server/game/arcadeObjects/star.ts");
/* harmony import */ var _arcadeObjects_mummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../arcadeObjects/mummy */ "./src/server/game/arcadeObjects/mummy.ts");
/* harmony import */ var _arcadeObjects_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../arcadeObjects/map */ "./src/server/game/arcadeObjects/map.ts");
/* harmony import */ var _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../managers/syncManager */ "./src/server/managers/syncManager.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = 
        // @ts-ignore
        _super.call(this, { key: 'MainScene', plugins:  false ? undefined : ['Clock'], active: false, cameras: null }) || this;
        _this.id = 0;
        _this.debug = {};
        _this.level = 0;
        _this.objectsToSync = {};
        _this.tick = 0;
        return _this;
        // see all scene plugins:
        // Phaser.Plugins.DefaultScene
        // https://github.com/photonstorm/phaser/blob/master/src/plugins/DefaultPlugins.js#L76
    }
    /** Create a new object id */
    MainScene.prototype.newId = function () {
        return this.id++;
    };
    MainScene.prototype.init = function () {
        try {
            //@ts-ignore
            var _a = this.game.config.preBoot(), _b = _a.level, level = _b === void 0 ? 0 : _b, roomId = _a.roomId, roomManager = _a.roomManager;
            this.level = level;
            this.roomManager = roomManager;
            this.roomId = roomId;
        }
        catch (error) {
            if (true)
                console.error('onInit() failed!');
        }
    };
    MainScene.prototype.create = function () {
        var _this = this;
        // this will stop the scene
        this.events.addListener('stopScene', function () {
            _this.roomManager.stats.removeTotalObjects(_this.roomId);
            _this.scene.stop();
            _this.roomManager.stats.log("Scene in roomId <b>" + _this.roomId + "</b> has stopped!");
        });
        this.physics.world.setBounds(_client_config__WEBPACK_IMPORTED_MODULE_0__["world"].x, _client_config__WEBPACK_IMPORTED_MODULE_0__["world"].y, _client_config__WEBPACK_IMPORTED_MODULE_0__["world"].width, _client_config__WEBPACK_IMPORTED_MODULE_0__["world"].height);
        this.dudeGroup = this.add.group();
        this.boxGroup = this.add.group();
        this.mummyGroup = this.add.group();
        this.map = new _arcadeObjects_map__WEBPACK_IMPORTED_MODULE_6__["default"](this, _client_config__WEBPACK_IMPORTED_MODULE_0__["world"], this.level);
        var level = this.map.getLevel();
        // generate the level
        level.forEach(function (row, y) {
            for (var x = 0; x < row.length; x++) {
                var xx = x * _this.map.tileSize + _this.map.margin.x;
                var yy = y * _this.map.tileSize + _this.map.margin.y;
                if (row[x] === 'X')
                    _this.boxGroup.add(new _arcadeObjects_box__WEBPACK_IMPORTED_MODULE_1__["default"](_this, _this.newId(), xx, yy));
                if (row[x] === 'G')
                    _this.star = new _arcadeObjects_star__WEBPACK_IMPORTED_MODULE_4__["default"](_this, _this.newId(), xx, yy);
                if (row[x] === 'M')
                    _this.mummyGroup.add(new _arcadeObjects_mummy__WEBPACK_IMPORTED_MODULE_5__["default"](_this, _this.newId(), xx, yy));
            }
        });
        if (false) {}
        this.events.addListener('createDude', function (clientId, socketId) {
            var dude = _this.dudeGroup.getFirstDead();
            if (dude) {
                dude.revive(clientId, socketId);
            }
            else {
                dude = new _arcadeObjects_dude__WEBPACK_IMPORTED_MODULE_2__["default"](_this, _this.newId(), { clientId: clientId, socketId: socketId });
                _this.dudeGroup.add(dude);
            }
        });
        this.events.addListener('U' /* short for updateDude */, function (res) {
            // @ts-ignore
            var dudes = _this.dudeGroup.children.getArray().filter(function (dude) {
                return dude.clientId && dude.clientId === res.clientId;
            });
            if (dudes[0]) {
                var b = res.updates;
                var updates = {
                    left: b === 1 || b === 5 ? true : false,
                    right: b === 2 || b === 6 ? true : false,
                    up: b === 4 || b === 6 || b === 5 ? true : false,
                    none: b === 8 ? true : false
                };
                dudes[0].setUpdates(updates);
            }
        });
        this.events.addListener('removeDude', function (clientId) {
            // @ts-ignore
            _this.dudeGroup.children.iterate(function (dude) {
                if (dude.clientId === clientId) {
                    dude.kill();
                }
            });
        });
        this.physics.add.collider(this.dudeGroup, this.boxGroup);
        this.physics.add.collider(this.mummyGroup, this.boxGroup);
        // @ts-ignore
        this.physics.add.overlap(this.mummyGroup, this.dudeGroup, function (mummy, dude) {
            if (mummy.dead)
                return;
            if (mummy.body.touching.up && dude.body.touching.down) {
                dude.setVelocityY(-300);
                mummy.kill();
            }
            else {
                dude.gotHit();
            }
        });
        // @ts-ignore
        this.physics.add.overlap(this.dudeGroup, this.star, function (dude, star) {
            if (dude.dead)
                return;
            dude.kill();
            var nextLevel = _this.level + 1 >= _this.map.countTotalLevels() ? 0 : _this.level + 1;
            var socket = _this.roomManager.ioNspGame.sockets[dude.socketId];
            _this.roomManager.changeRoom(socket, 'ArcadeScene', nextLevel);
        });
    };
    /** Sends the initial state to the client */
    MainScene.prototype.getInitialState = function () {
        var objects = [];
        _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].prepareFromPhaserGroup(this.boxGroup, objects);
        _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].prepareFromPhaserGroup(this.dudeGroup, objects);
        _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].prepareFromPhaserSprite(this.star, objects);
        return _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].encode(objects);
    };
    MainScene.prototype.update = function () {
        var _this = this;
        this.tick++;
        if (this.tick > 1000000)
            this.tick = 0;
        // @ts-ignore
        this.mummyGroup.children.iterate(function (mummy) {
            var coordinates = mummy.getLookAhead();
            var tile = _this.map.getTileByCoordinates(coordinates);
            mummy.changeDirection(tile);
            mummy.update();
        });
        if (false) { var dude, cursorsDown; }
        if (false)
            {}
        var prepareObjectToSync = function (obj) {
            var cleanObjectToSync = _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].cleanObjectToSync(obj);
            _this.objectsToSync = _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].mergeObjectToSync(cleanObjectToSync, _this.objectsToSync);
        };
        if (this.star && this.star.sync) {
            var starObj = {
                skin: this.star.skin,
                tint: this.star.tint,
                id: this.star.id,
                x: this.star.body.position.x + this.star.body.width / 2,
                y: this.star.body.position.y + this.star.body.height / 2
            };
            prepareObjectToSync(starObj);
            this.star.sync = false;
        }
        // @ts-ignore
        this.mummyGroup.children.iterate(function (child) {
            var object = {
                skin: child.skin,
                direction: child.direction,
                id: child.id,
                x: child.body.position.x + child.body.width / 2,
                y: child.body.position.y + child.body.height / 2
            };
            prepareObjectToSync(object);
        });
        // @ts-ignore
        this.boxGroup.children.iterate(function (child) {
            if (child.sync) {
                var object = {
                    skin: child.skin,
                    id: child.id,
                    x: child.body.position.x + child.body.width / 2,
                    y: child.body.position.y + child.body.height / 2
                };
                prepareObjectToSync(object);
            }
            child.sync = false;
        });
        // @ts-ignore
        this.dudeGroup.children.iterate(function (child) {
            child.update();
            // we only update the dude if one if the 4 properties below have changed
            var x = child.prevPosition.x.toFixed(0) !== child.body.position.x.toFixed(0);
            var y = child.prevPosition.y.toFixed(0) !== child.body.position.y.toFixed(0);
            var dead = child.prevDead !== child.dead;
            var color = child.prevColor.toString() !== child.color.toString();
            if (x || y || dead || color) {
                var object = {
                    animation: child.animation,
                    dead: child.dead,
                    clientId: child.clientId,
                    skin: child.skin,
                    tint: child.color,
                    id: child.id,
                    x: child.body.position.x + child.body.width / 2,
                    y: child.body.position.y + child.body.height / 2
                };
                prepareObjectToSync(object);
            }
            child.postUpdate();
        });
        var send = [];
        Object.keys(this.objectsToSync).forEach(function (key) {
            // we only sync the mummies on every 3th frame
            if (_this.objectsToSync[key].skin === _constants__WEBPACK_IMPORTED_MODULE_8__["SKINS"].MUMMY) {
                if (_this.tick % 3 === 0) {
                    send.push(_this.objectsToSync[key]);
                    delete _this.objectsToSync[key];
                }
            }
            else {
                send.push(_this.objectsToSync[key]);
                delete _this.objectsToSync[key];
            }
        });
        if (send.length > 0) {
            // send the objects to sync to all connected clients in this.roomId
            this.roomManager.ioNspGame
                .in(this.roomId)
                .emit('S' /* short for syncGame */, { O /* short for objects */: _managers_syncManager__WEBPACK_IMPORTED_MODULE_7__["default"].encode(send) });
        }
    };
    return MainScene;
}(Phaser.Scene));
/* harmony default export */ __webpack_exports__["default"] = (MainScene);


/***/ }),

/***/ "./src/server/game/scenes/matterScene.ts":
/*!***********************************************!*\
  !*** ./src/server/game/scenes/matterScene.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matterObjects_matterGameObjectGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matterObjects/matterGameObjectGroup */ "./src/server/game/matterObjects/matterGameObjectGroup.ts");
/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../client/config */ "./src/client/config.ts");
/* harmony import */ var _client_components_cursors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../client/components/cursors */ "./src/client/components/cursors.ts");
/* harmony import */ var _managers_syncManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../managers/syncManager */ "./src/server/managers/syncManager.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// PHYSICS_DEBUG



var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this, { key: 'MainScene', plugins:  false ? undefined : ['Clock'] }) || this;
        _this.objects = [];
        _this.objectsToSync = {};
        _this.debug = {};
        _this.tick = 0;
        return _this;
        // see all scene plugins:
        // Phaser.Plugins.DefaultScene
        // https://github.com/photonstorm/phaser/blob/master/src/plugins/DefaultPlugins.js#L76
    }
    MainScene.prototype.init = function () {
        try {
            //@ts-ignore
            var _a = this.game.config.preBoot(), _b = _a.level, level = _b === void 0 ? 0 : _b, roomId = _a.roomId, roomManager = _a.roomManager;
            this.level = level;
            this.roomManager = roomManager;
            this.roomId = roomId;
        }
        catch (error) {
            if (true)
                console.error('onInit() failed!');
        }
    };
    MainScene.prototype.create = function () {
        var _this = this;
        var Matter = Phaser.Physics.Matter.Matter;
        var worldCenterX = (_client_config__WEBPACK_IMPORTED_MODULE_1__["world"].x + _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].width) / 2;
        // add and modify the world bounds
        var bounds = this.matter.world.setBounds(_client_config__WEBPACK_IMPORTED_MODULE_1__["world"].x, _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].y, _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].width, _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].height);
        Object.keys(bounds.walls).forEach(function (key) {
            var body = bounds.walls[key];
            Matter.Body.set(body, { friction: 0.05, frictionStatic: 0.05, frictionAir: 0.01 });
            // we do not need the top, so we set it to isSensor
            if (key === 'top')
                Matter.Body.set(body, { isSensor: true });
        });
        // instantiate the GameObjectGroup
        var gameObjectGroup = new _matterObjects_matterGameObjectGroup__WEBPACK_IMPORTED_MODULE_0__["default"](this, this.objects);
        // this will stop the scene
        this.events.addListener('stopScene', function () {
            _this.objects.forEach(function (obj) {
                _this.matter.world.remove(_this.matter.world, obj.body);
            });
            _this.roomManager.stats.removeTotalObjects(_this.roomId);
            _this.scene.stop();
            _this.roomManager.stats.log("Scene in roomId <b>" + _this.roomId + "</b> has stopped!");
        });
        // creates a new dude, when a new user connects
        this.events.addListener('createDude', function (clientId, socketId) {
            var leftX = Phaser.Math.RND.integerInRange(_client_config__WEBPACK_IMPORTED_MODULE_1__["world"].x + 100, _this.cameras.main.width / 2 - 640);
            var rightX = Phaser.Math.RND.integerInRange(_this.cameras.main.width / 2 + 640, _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].x + _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].width - 100);
            var x = Math.random() > 0.5 ? leftX : rightX;
            var y = -50;
            gameObjectGroup.add(x, y, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].DUDE, { clientId: clientId, socketId: socketId });
        });
        // updates the position of a dude
        this.events.addListener('U' /* short for updateDude */, function (res) {
            var dudes = _this.objects.filter(function (obj) { return obj.clientId && obj.clientId === res.clientId; });
            if (dudes[0]) {
                var b = res.updates;
                var updates = {
                    left: b === 1 || b === 5 ? true : false,
                    right: b === 2 || b === 6 ? true : false,
                    up: b === 4 || b === 6 || b === 5 ? true : false,
                    none: b === 8 ? true : false
                };
                dudes[0].setUpdates(updates);
            }
        });
        // removes a dude
        this.events.addListener('removeDude', function (clientId) {
            var dudes = _this.objects.filter(function (obj) { return obj.clientId && obj.clientId === clientId; });
            dudes.forEach(function (dude) { return dude.kill(); });
        });
        // adds another box every 1.2 seconds
        this.time.addEvent({
            delay: 1200,
            loop: true,
            callback: function () {
                var x = Phaser.Math.RND.integerInRange(worldCenterX - 250 - 640, worldCenterX + 640 + 250);
                var y = 100;
                gameObjectGroup.add(x, y, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].BOX);
            }
        });
        if (false) {}
        if (true) {
            this.time.addEvent({
                delay: 5000,
                loop: true,
                callback: function () {
                    _this.roomManager.stats.setTotalObjects(_this.roomId, _this.objects.length);
                }
            });
        }
        // add the big star
        gameObjectGroup.add(worldCenterX, _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].height - 320 - 100 - 115, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].STAR, {
            category: 'big'
        });
        // add medium stars
        for (var x = worldCenterX - 128; x < worldCenterX + 128 + 64; x += 128)
            gameObjectGroup.add(x, _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].height - 320 - 100, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].STAR, { category: 'medium' });
        // add yellow stars
        for (var x = worldCenterX - 160 - 80; x < worldCenterX + 320 + 80; x += 160)
            gameObjectGroup.add(x, _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].height - 320, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].STAR);
        // create 4 boxes at server start
        gameObjectGroup.add(1280, 640, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].BOX);
        gameObjectGroup.add(1280, 640, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].BOX);
        gameObjectGroup.add(1280, 640, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].BOX);
        gameObjectGroup.add(1280, 640, _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].BOX);
        // check for collisions
        var collisionEvent = function (event) {
            event.pairs.forEach(function (pair) {
                var bodyA = pair.bodyA, bodyB = pair.bodyB;
                var labels = [bodyA.label, bodyB.label];
                // Dude hits star
                if (labels.includes('dude') && labels.includes('star')) {
                    var starBody = bodyA.label === 'star' ? bodyA : bodyB;
                    var star = gameObjectGroup.getObjectById(starBody.id);
                    if (star) {
                        star.kill();
                        star.setReviveTimer();
                    }
                }
                // Dude's sensor hits another body
                if (/Sensor/.test(bodyA.label) || /Sensor/.test(bodyB.label)) {
                    var sensorBody = /Sensor/.test(bodyA.label) ? bodyA : bodyB;
                    var otherBody = /Sensor/.test(bodyA.label) ? bodyB : bodyA;
                    if (otherBody.isSensor)
                        return;
                    var dude = gameObjectGroup.getObjectById(sensorBody.parent.id);
                    if (dude) {
                        var sepPadding = 2;
                        if (otherBody.isStatic) {
                            sepPadding = 0.1;
                        }
                        var sep = pair.separation - sepPadding;
                        if (sensorBody === dude.sensors.left) {
                            dude.move.leftAllowed = !otherBody.isStatic;
                            dude.touching.left = true;
                            if (pair.separation > sepPadding) {
                                dude.setTranslate(sep);
                                dude.translate();
                            }
                        }
                        else if (sensorBody === dude.sensors.right) {
                            dude.move.rightAllowed = !otherBody.isStatic;
                            dude.touching.right = true;
                            if (pair.separation > sepPadding) {
                                dude.setTranslate(-sep);
                                dude.translate();
                            }
                        }
                        else if (sensorBody === dude.sensors.bottom) {
                            dude.touching.bottom = true;
                        }
                    }
                }
            });
        };
        // https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-5-matter-physics-platformer-d14d1f614557
        this.matter.world.on('collisionstart', collisionEvent);
        this.matter.world.on('collisionactive', collisionEvent);
    };
    /** Sends the initial state to the client */
    MainScene.prototype.getInitialState = function () {
        var objects = [];
        _managers_syncManager__WEBPACK_IMPORTED_MODULE_3__["default"].prepareFromMatterGameObject(this.objects, objects);
        return _managers_syncManager__WEBPACK_IMPORTED_MODULE_3__["default"].encode(objects);
    };
    MainScene.prototype.update = function (time, delta) {
        var _this = this;
        this.tick++;
        if (this.tick > 1000000)
            this.tick = 0;
        if (false) { var dude, cursorsDown; }
        if (true) {
            this.objects.forEach(function (obj) {
                if (obj.body.position.y > _client_config__WEBPACK_IMPORTED_MODULE_1__["world"].height)
                    obj.kill();
                obj.preUpdate();
                obj.update();
                var roundToEvenNumber = function (number) {
                    try {
                        return +(Math.round(number / 2) * 2).toFixed(0);
                    }
                    catch (e) {
                        return 0;
                    }
                };
                // only send the object to the client if one of these properties have changed
                var dead = obj.dead != obj.prevDead;
                var x = obj.body.position.x.toFixed(0) != obj.body.positionPrev.x.toFixed(0);
                var y = obj.body.position.y.toFixed(0) != obj.body.positionPrev.y.toFixed(0);
                var angle = roundToEvenNumber(obj.angle) != roundToEvenNumber(obj.prevAngle);
                var animation = obj.animation !== obj.prevAnimation;
                if (dead || x || y || angle || animation) {
                    var theObj = {
                        // it always needs to have an id!
                        id: obj.body.id,
                        x: +obj.body.position.x.toFixed(0),
                        y: +obj.body.position.y.toFixed(0),
                        angle: angle ? roundToEvenNumber(obj.angle) : null,
                        dead: dead ? obj.dead : null,
                        animation: obj.animation ? obj.animation : null,
                        clientId: obj.clientId ? obj.clientId : null,
                        skin: obj.skin
                    };
                    var cleanObjectToSync = _managers_syncManager__WEBPACK_IMPORTED_MODULE_3__["default"].cleanObjectToSync(theObj);
                    _this.objectsToSync = _managers_syncManager__WEBPACK_IMPORTED_MODULE_3__["default"].mergeObjectToSync(cleanObjectToSync, _this.objectsToSync);
                }
                // call the postUpdate function on all gameObjects
                obj.postUpdate();
            });
            var send_1 = [];
            Object.keys(this.objectsToSync).forEach(function (key) {
                // this syncs the dude on every frame
                // but the boxes only on every second frame
                // (safes a lot of bandwidth)
                if (_this.objectsToSync[key].skin === _constants__WEBPACK_IMPORTED_MODULE_4__["SKINS"].BOX) {
                    if (_this.tick % 2 === 0) {
                        send_1.push(_this.objectsToSync[key]);
                        delete _this.objectsToSync[key];
                    }
                }
                else {
                    send_1.push(_this.objectsToSync[key]);
                    delete _this.objectsToSync[key];
                }
            });
            if (send_1.length > 0) {
                // send the objects to sync to all connected clients in this.roomId
                this.roomManager.ioNspGame
                    .in(this.roomId)
                    .emit('S' /* short for syncGame */, { O /* short for objects */: _managers_syncManager__WEBPACK_IMPORTED_MODULE_3__["default"].encode(send_1) });
            }
        }
    };
    return MainScene;
}(Phaser.Scene));
/* harmony default export */ __webpack_exports__["default"] = (MainScene);


/***/ }),

/***/ "./src/server/managers/roomManager.ts":
/*!********************************************!*\
  !*** ./src/server/managers/roomManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game */ "./src/server/game/game.ts");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "phaser");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var randomDataGenerator = new phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].RandomDataGenerator();

var RoomManager = /** @class */ (function () {
    function RoomManager(ioNspGame, stats) {
        var _this = this;
        this.ioNspGame = ioNspGame;
        this.stats = stats;
        this.rooms = {};
        this.createRoom = function (roomId, scene, level) { return __awaiter(_this, void 0, void 0, function () {
            var game;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stats.log("Create new room <b>" + roomId + "</b>");
                        return [4 /*yield*/, Object(_game_game__WEBPACK_IMPORTED_MODULE_0__["default"])(this, roomId, { scene: scene, level: level })];
                    case 1:
                        game = _a.sent();
                        this.rooms[roomId] = {
                            sceneKey: scene,
                            level: +level,
                            roomId: roomId,
                            users: {},
                            game: game,
                            // @ts-ignore
                            scene: game.scene.keys['MainScene'],
                            removing: false
                        };
                        this.stats.log("Room <b>" + roomId + "</b> created!");
                        return [2 /*return*/];
                }
            });
        }); };
        this.removeRoom = function (roomId) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.rooms[roomId].removing)
                    return [2 /*return*/];
                this.stats.log("Removing room <b>" + roomId + "</b>");
                this.rooms[roomId].removing = true;
                this.rooms[roomId].scene.events.emit('stopScene');
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.rooms[roomId].game.destroy(true, true)
                                // @ts-ignore
                            ];
                            case 1:
                                _a.sent();
                                // @ts-ignore
                                this.rooms[roomId].game = null;
                                delete this.rooms[roomId];
                                this.stats.log("Room <b>" + roomId + "</b> has been removed!");
                                this.stats.log("Remaining rooms: " + Object.keys(this.rooms).length);
                                return [2 /*return*/];
                        }
                    });
                }); }, 5000);
                return [2 /*return*/];
            });
        }); };
        this.chooseRoom = function (props) {
            var scene = props.scene, level = props.level;
            var rooms = Object.keys(_this.rooms);
            if (rooms.length === 0)
                return Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
            // check for the next room with 1 or more free spaces
            var chosenRoom = null;
            for (var i = 0; i < Object.keys(_this.rooms).length; i++) {
                var room = _this.rooms[rooms[i]];
                var count = Object.keys(room.users).length;
                if (count < _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_PLAYERS_PER_ROOM"] &&
                    room.sceneKey === scene &&
                    room.level === level &&
                    !_this.isRemoving(rooms[i])) {
                    chosenRoom = rooms[i];
                    break;
                }
            }
            if (chosenRoom)
                return chosenRoom;
            // create a new room with a new uuidv4 id
            return Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        };
        setInterval(function () {
            _this.removeInactiveRooms();
            _this.removeInactiveUsers();
        }, 10000);
    }
    RoomManager.prototype.generateClientId = function (socket) {
        var clientId = randomDataGenerator.integerInRange(100000, 100000000);
        socket.clientId = clientId;
        socket.emit('clientId', clientId);
    };
    // the 2 functions below should be better
    RoomManager.prototype.joinRoom = function (socket, scene, level) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof scene !== 'string' || typeof level !== 'number') {
                            console.error('level or scene is not defined in ioGame.ts');
                            return [2 /*return*/];
                        }
                        socket.room = this.chooseRoom({ scene: scene, level: +level });
                        if (!!this.rooms[socket.room]) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createRoom(socket.room, scene, +level)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.addUser(socket);
                        this.rooms[socket.room].scene.events.emit('createDude', socket.clientId, socket.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomManager.prototype.leaveRoom = function (socket) {
        this.removeUser(socket.room, socket.id);
        this.ioNspGame
            .in(socket.room)
            .emit('S' /* short for syncGame */, { connectCounter: this.getRoomUsersArray(socket.room).length });
        if (this.isRemoving(socket.room))
            return;
        this.rooms[socket.room].scene.events.emit('removeDude', socket.clientId);
    };
    RoomManager.prototype.changeRoom = function (socket, scene, level) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.leaveRoom(socket);
                        return [4 /*yield*/, this.joinRoom(socket, scene, +level)];
                    case 1:
                        _a.sent();
                        socket.emit('changingRoom', { scene: scene, level: +level });
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomManager.prototype.addUser = function (socket) {
        var _a;
        var newUsers = (_a = {},
            _a[socket.id] = {
                roomId: socket.room,
                lastUpdate: Date.now(),
                clientId: socket.clientId,
                id: socket.id
            },
            _a);
        this.rooms[socket.room].users = __assign(__assign({}, this.rooms[socket.room].users), newUsers);
        // join the socket room
        socket.join(socket.room);
    };
    /** Removed the user from the room */
    RoomManager.prototype.removeUser = function (roomId, userId, log) {
        if (log === void 0) { log = true; }
        if (this.ioNspGame.sockets[userId])
            this.ioNspGame.sockets[userId].leave(roomId);
        if (this.userExists(roomId, userId)) {
            delete this.rooms[roomId].users[userId];
            if (log)
                this.stats.log("User <b>" + userId + "</b> disconnected!");
            return true;
        }
        return false;
    };
    /** Check if this user exists */
    RoomManager.prototype.userExists = function (roomId, userId) {
        if (this.roomExists(roomId) && this.rooms[roomId].users && this.rooms[roomId].users[userId])
            return true;
        return false;
    };
    /** Check if this room exists */
    RoomManager.prototype.roomExists = function (roomId) {
        if (this.rooms && this.rooms[roomId])
            return true;
        return false;
    };
    RoomManager.prototype.isRemoving = function (roomId) {
        if (!!!this.rooms[roomId] || this.rooms[roomId].removing)
            return true;
        else
            return false;
    };
    RoomManager.prototype.getRoomsArray = function () {
        var _this = this;
        var rooms = [];
        Object.keys(this.rooms).forEach(function (roomId) {
            rooms.push(_this.rooms[roomId]);
        });
        return rooms;
    };
    /** Returns an Array of all users in a specific room */
    RoomManager.prototype.getRoomUsersArray = function (roomId) {
        var _this = this;
        var users = [];
        if (!this.roomExists(roomId))
            return users;
        Object.keys(this.rooms[roomId].users).forEach(function (userId) {
            users.push(_this.rooms[roomId].users[userId]);
        });
        return users;
    };
    /** Returns an Array of all users in all rooms */
    RoomManager.prototype.getAllUsersArray = function () {
        var _this = this;
        var users = [];
        Object.keys(this.rooms).forEach(function (roomId) {
            Object.keys(_this.rooms[roomId].users).forEach(function (userId) {
                users.push(_this.rooms[roomId].users[userId]);
            });
        });
        return users;
    };
    RoomManager.prototype.disconnectUser = function (userId) {
        if (this.ioNspGame.connected && this.ioNspGame.connected[userId]) {
            this.ioNspGame.connected[userId].disconnect(true);
            return true;
        }
        return false;
    };
    RoomManager.prototype.removeInactiveRooms = function () {
        var _this = this;
        this.getRoomsArray().forEach(function (room) {
            if (!room.users || Object.keys(room.users).length === 0)
                _this.removeRoom(room.roomId);
        });
    };
    RoomManager.prototype.removeInactiveUsers = function () {
        var _this = this;
        this.getAllUsersArray().forEach(function (user) {
            if (Date.now() - user.lastUpdate > _constants__WEBPACK_IMPORTED_MODULE_2__["USER_KICK_TIMEOUT"]) {
                var removed = _this.removeUser(user.roomId, user.id, false);
                var disconnected = _this.disconnectUser(user.id);
                if (removed && disconnected) {
                    _this.stats.log("Kick user <b>" + user.clientId + "</b> from room <b>" + user.roomId + "</b>");
                }
            }
        });
    };
    return RoomManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (RoomManager);


/***/ }),

/***/ "./src/server/managers/syncManager.ts":
/*!********************************************!*\
  !*** ./src/server/managers/syncManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/** Helps preparing the object to sync with the client */
var SyncManager = /** @class */ (function () {
    function SyncManager() {
    }
    SyncManager.prepareFromPhaserGroup = function (group, objects) {
        group.children.iterate(function (sprite) {
            SyncManager.prepareFromPhaserSprite(sprite, objects);
        });
    };
    SyncManager.prepareFromPhaserSprite = function (sprite, objects) {
        var obj = __assign(__assign({}, sprite), this.getXY(sprite));
        objects.push(SyncManager.cleanObjectToSync(obj));
    };
    SyncManager.prepareFromMatterGameObject = function (gameObjects, objects) {
        gameObjects.forEach(function (obj) {
            objects.push(SyncManager.cleanObjectToSync(obj));
        });
    };
    SyncManager.getXY = function (child) {
        return { x: child.body.position.x + child.body.width / 2, y: child.body.position.y + child.body.height / 2 };
    };
    SyncManager.mergeObjectToSync = function (obj, mergeTo) {
        var _a;
        var merged = false;
        Object.keys(mergeTo).forEach(function (o) {
            if (o === obj.id) {
                mergeTo[obj.id] = __assign(__assign({}, mergeTo[obj.id]), obj);
                merged = true;
            }
        });
        if (!merged)
            mergeTo = __assign(__assign({}, mergeTo), (_a = {}, _a[obj.id] = obj, _a));
        return mergeTo;
    };
    SyncManager.cleanObjectToSync = function (obj) {
        var addToObjectToSync = function (key, prop) {
            var _a;
            if (prop !== null)
                objectToSync = __assign(__assign({}, objectToSync), (_a = {}, _a[key] = prop, _a));
        };
        var objectToSync = {};
        addToObjectToSync('id', obj.id || obj.body.id);
        addToObjectToSync('x', obj.x || obj.body.position.x || null);
        addToObjectToSync('y', obj.y || obj.body.position.y || null);
        addToObjectToSync('angle', obj.angle !== 'undefined' ? obj.angle : null);
        addToObjectToSync('dead', obj.dead !== 'undefined' ? obj.dead : null);
        addToObjectToSync('skin', obj.skin !== 'undefined' ? obj.skin : null);
        addToObjectToSync('animation', obj.animation || null);
        addToObjectToSync('direction', obj.direction || null);
        addToObjectToSync('scale', obj.scale && obj.scale !== 1 ? obj.scale : null);
        addToObjectToSync('tint', obj.tint ? obj.tint : null);
        addToObjectToSync('clientId', obj.clientId || null);
        addToObjectToSync('category', obj.category || null);
        // Object.keys(objectToSync).forEach(key => objectToSync[key] == null && delete objectToSync[key])
        return objectToSync;
    };
    Object.defineProperty(SyncManager, "keys", {
        get: function () {
            // sort these based on most used
            return ['id', 'x', 'y', 'angle', 'dead', 'skin', 'animation', 'direction', 'scale', 'tint', 'clientId', 'category'];
        },
        enumerable: false,
        configurable: true
    });
    SyncManager.decode = function (data) {
        var keys = SyncManager.keys;
        var decodedArray = [];
        var obj = {};
        data.split(',').forEach(function (value, index) {
            var key = keys[index % keys.length];
            // id (radix 36)
            if (key === 'id') {
                obj[key] = parseInt(value, 36).toString();
            }
            // numbers
            else if (['skin', 'scale'].includes(key)) {
                obj[key] = value !== '' ? parseInt(value) : null;
            }
            // numbers (radix 36)
            else if (['x', 'y', 'angle', 'clientId'].includes(key)) {
                obj[key] = value !== '' ? parseInt(value, 36) : null;
            }
            // booleans
            else if (['dead'].includes(key)) {
                obj[key] = value === '0' ? false : value === '1' ? true : null;
            }
            // strings
            else
                obj[key] = value !== '' ? value : null;
            if (index % keys.length === keys.length - 1) {
                decodedArray.push(__assign({}, obj));
                obj = {};
            }
        });
        return decodedArray;
    };
    SyncManager.encode = function (objs) {
        var keys = SyncManager.keys;
        var encodedString = '';
        objs.forEach(function (obj) {
            keys.forEach(function (key) {
                if (typeof obj[key] !== 'undefined') {
                    var value = obj[key];
                    // booleans
                    if (typeof obj[key] === 'boolean')
                        value = obj[key] === false ? 0 : 1;
                    // some numbers to radix 36
                    else if (['id', 'x', 'y', 'angle', 'clientId'].includes(key)) {
                        value = +value;
                        value = +value.toFixed(0);
                        value = value.toString(36);
                    }
                    encodedString += value + ",";
                }
                else
                    encodedString += ',';
            });
        });
        return encodedString.slice(0, -1);
    };
    return SyncManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (SyncManager);


/***/ }),

/***/ "./src/server/routes/routes.ts":
/*!*************************************!*\
  !*** ./src/server/routes/routes.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pidusage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pidusage */ "pidusage");
/* harmony import */ var pidusage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pidusage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var Routes = /** @class */ (function () {
    function Routes(roomManager, ioStats) {
        var _this = this;
        this.roomManager = roomManager;
        this.ioStats = ioStats;
        this.time = new Date();
        this.router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
        this.router.get('/', function (req, res) {
            res.send("\n      <!DOCTYPE html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n          <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n          <title>Phaser 3: Multiplayer Example</title>\n        </head>\n        <body>\n          <style>\n            body {\n              font-family: BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n            }\n            a {\n              display: inline-block;\n              margin: 0px 8px 8px 0px;\n              cursor: pointer;\n              padding: 16px;\n              background-color: bisque;\n              text-decoration: none;\n              color: black;\n              border-radius: 5px;\n            }\n            a:hover {\n              background-color: #ffc683;\n            }\n          </style>\n          <h1>Phaser 3: Real-Time Multiplayer Game with Physics</h1>\n          <a href=\"/play\">Play the Game</a>\n          <a href=\"/physics\">Debug the Physics</a>\n          <a href=\"/stats\">View Server Stats</a>          \n        </body>");
        });
        this.router.get('/play', function (req, res) {
            res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../../dist/client/index.html'));
        });
        this.router.get('/physics', function (req, res) {
            res.send("\n      <!DOCTYPE html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n          <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n          <title>Document</title>\n        </head>\n        <body>\n          <style>\n            body {\n              font-family: BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n            }\n            li {\n              line-height: 3;\n            }\n          </style>\n          <ul>\n            <li><a href=\"/matter\">Debug Matter Physics</a></li>\n            <li><a href=\"/arcade\">Debug Arcade Physics</a></li>\n          </ul>\n        </body>");
        });
        this.router.get('/matter', function (req, res) {
            res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../../dist/physics/index.html'));
        });
        this.router.get('/arcade', function (req, res) {
            res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../../dist/physics/index.html'));
        });
        this.router.get('/stats', function (req, res) {
            res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../../dist/stats/index.html'));
        });
        this.router.get('/stats/get', function (req, res) {
            pidusage__WEBPACK_IMPORTED_MODULE_1___default()(process.pid, function (err, stats) {
                if (err)
                    return res.status(500).json({ err: err });
                var objects = ioStats.getTotalObjects();
                var payload = __assign(__assign({}, stats), { users: roomManager.getAllUsersArray().length, rooms: roomManager.getRoomsArray().length, objects: objects, time: _this.time });
                res.json({ payload: payload });
            });
        });
    }
    return Routes;
}());
/* harmony default export */ __webpack_exports__["default"] = (Routes);


/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _managers_roomManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managers/roomManager */ "./src/server/managers/roomManager.ts");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/routes */ "./src/server/routes/routes.ts");
/* harmony import */ var _socket_ioStats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./socket/ioStats */ "./src/server/socket/ioStats.ts");
/* harmony import */ var _socket_ioGame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./socket/ioGame */ "./src/server/socket/ioGame.ts");





var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
var server = __webpack_require__(/*! http */ "http").Server(app);

var io = socket_io__WEBPACK_IMPORTED_MODULE_5___default()(server);




var port = process.env.PORT || 3000;
// create 2 socket.io namespaces
var ioNspGame = io.of('/G' /* short for stats */);
var ioNspStats = io.of('/S' /* short for stats */);
var ioStats = new _socket_ioStats__WEBPACK_IMPORTED_MODULE_8__["default"](ioNspStats);
var roomManager = new _managers_roomManager__WEBPACK_IMPORTED_MODULE_6__["default"](ioNspGame, ioStats);
var ioGame = new _socket_ioGame__WEBPACK_IMPORTED_MODULE_9__["default"](ioNspGame, ioStats, roomManager);
app.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
app.use('/static', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, '../')));
app.use('/', new _routes_routes__WEBPACK_IMPORTED_MODULE_7__["default"](roomManager, ioStats).router);
server.listen(port, function () {
    console.log('App is listening on port ' + port);
});


/***/ }),

/***/ "./src/server/socket/ioGame.ts":
/*!*************************************!*\
  !*** ./src/server/socket/ioGame.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/** Handles all the communication for /game namespace (ioNspGame) */
var IoGame = /** @class */ (function () {
    function IoGame(ioNspGame, ioStats, roomManager) {
        var _this = this;
        this.ioNspGame = ioNspGame;
        this.ioStats = ioStats;
        this.roomManager = roomManager;
        this.time = new Date();
        ioNspGame.on('connection', function (socket) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                roomManager.generateClientId(socket);
                socket.on('joinRoom', function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var scene, level;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                scene = data.scene, level = data.level;
                                return [4 /*yield*/, roomManager.joinRoom(socket, scene, +level)];
                            case 1:
                                _a.sent();
                                ioStats.log("New user <b>" + socket.id + "</b> connected! to room " + socket.room);
                                return [2 /*return*/];
                        }
                    });
                }); });
                socket.on('disconnect', function () {
                    roomManager.leaveRoom(socket);
                });
                socket.on('changeRoom', function (data) {
                    roomManager.changeRoom(socket, data.scene, +data.level);
                });
                socket.on('sendPing', function (id) {
                    socket.emit('getPong', id);
                });
                socket.on('U' /* short for updateDude */, function (updates) {
                    if (roomManager.isRemoving(socket.room))
                        return;
                    if (!roomManager.userExists(socket.room, socket.id))
                        return;
                    roomManager.rooms[socket.room].users[socket.id].lastUpdate = Date.now();
                    roomManager.rooms[socket.room].scene.events.emit('U' /* short for updateDude */, {
                        clientId: socket.clientId,
                        updates: updates
                    });
                });
                socket.on('getInitialState', function () {
                    if (roomManager.isRemoving(socket.room))
                        return;
                    if (!roomManager.roomExists(socket.room))
                        return;
                    var payload = {
                        time: _this.time,
                        // @ts-ignore
                        O /* short for objects */: roomManager.rooms[socket.room].scene.getInitialState(),
                        connectCounter: roomManager.getRoomUsersArray(socket.room).length,
                        initialState: true,
                        roomId: socket.room
                    };
                    socket.emit('S' /* short for syncGame */, payload);
                    // ioNspGame.in(socket.room).emit('S' /* short for syncGame */, payload)
                });
                return [2 /*return*/];
            });
        }); });
    }
    return IoGame;
}());
/* harmony default export */ __webpack_exports__["default"] = (IoGame);


/***/ }),

/***/ "./src/server/socket/ioStats.ts":
/*!**************************************!*\
  !*** ./src/server/socket/ioStats.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/** Handles all the communication for /stats namespace (ioNspGame) */
var IoStats = /** @class */ (function () {
    function IoStats(ioNspStats) {
        this.ioNspStats = ioNspStats;
        this.totalObjects = {};
    }
    /** This function will console.log and send it to the ioStats */
    IoStats.prototype.log = function (log, logInNode) {
        if (logInNode === void 0) { logInNode = false; }
        if (logInNode)
            console.log('LOG: ' + log);
        this.ioNspStats.emit('getLog', { date: new Date(), log: log });
    };
    /** Get the total of objects in the game */
    IoStats.prototype.getTotalObjects = function () {
        var _this = this;
        var count = 0;
        Object.keys(this.totalObjects).forEach(function (roomId) {
            count += _this.totalObjects[roomId].count;
        });
        return count;
    };
    IoStats.prototype.setTotalObjects = function (roomId, count) {
        var _a;
        this.totalObjects = __assign(__assign({}, this.totalObjects), (_a = {}, _a[roomId] = { count: count }, _a));
    };
    IoStats.prototype.removeTotalObjects = function (roomId) {
        if (this.totalObjects && this.totalObjects[roomId]) {
            delete this.totalObjects[roomId];
        }
    };
    return IoStats;
}());
/* harmony default export */ __webpack_exports__["default"] = (IoStats);


/***/ }),

/***/ "@geckos.io/phaser-on-nodejs":
/*!**********************************************!*\
  !*** external "@geckos.io/phaser-on-nodejs" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@geckos.io/phaser-on-nodejs");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "phaser" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("phaser");

/***/ }),

/***/ "pidusage":
/*!***************************!*\
  !*** external "pidusage" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pidusage");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9jdXJzb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9mdWxsc2NyZWVuQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9yZXNpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3RleHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2NlbmVzL21haW5TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NjZW5lcy9tZW51U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zY2VuZXMvcHJlbG9hZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9nYW1lL2FyY2FkZU9iamVjdHMvYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvZ2FtZS9hcmNhZGVPYmplY3RzL2R1ZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9nYW1lL2FyY2FkZU9iamVjdHMvbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvZ2FtZS9hcmNhZGVPYmplY3RzL211bW15LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvZ2FtZS9hcmNhZGVPYmplY3RzL3N0YXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9nYW1lL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2dhbWUvbWF0dGVyT2JqZWN0cy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9nYW1lL21hdHRlck9iamVjdHMvZHVkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2dhbWUvbWF0dGVyT2JqZWN0cy9tYXR0ZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvZ2FtZS9tYXR0ZXJPYmplY3RzL21hdHRlckdhbWVPYmplY3RHcm91cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2dhbWUvbWF0dGVyT2JqZWN0cy9zdGFyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvZ2FtZS9zY2VuZXMvYXJjYWRlU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9nYW1lL3NjZW5lcy9tYXR0ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21hbmFnZXJzL3Jvb21NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbWFuYWdlcnMvc3luY01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc29ja2V0L2lvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NvY2tldC9pb1N0YXRzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnZWNrb3MuaW8vcGhhc2VyLW9uLW5vZGVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGhhc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGlkdXNhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBRWhDLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFtQjtJQUN0RCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQixHQUFHLEVBQUUsTUFBTTtRQUNYLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFD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LENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUNqQztJQUNILENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlCRCx3RDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgU0tJTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRHVkZUFuaW1hdGlvbnMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICBrZXk6ICdsZWZ0JyxcclxuICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoU0tJTlMuRFVERS50b1N0cmluZygpLCB7IHN0YXJ0OiAwLCBlbmQ6IDMgfSksXHJcbiAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgcmVwZWF0OiAtMVxyXG4gIH0pXHJcblxyXG4gIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICBrZXk6ICdpZGxlJyxcclxuICAgIGZyYW1lczogW3sga2V5OiBTS0lOUy5EVURFLnRvU3RyaW5nKCksIGZyYW1lOiA0IH1dLFxyXG4gICAgZnJhbWVSYXRlOiAyMFxyXG4gIH0pXHJcblxyXG4gIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICBrZXk6ICdyaWdodCcsXHJcbiAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFNLSU5TLkRVREUudG9TdHJpbmcoKSwgeyBzdGFydDogNSwgZW5kOiA4IH0pLFxyXG4gICAgZnJhbWVSYXRlOiAxMCxcclxuICAgIHJlcGVhdDogLTFcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RHVkZUFuaW1hdGlvbiA9IChzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUsIGFuaW1hdGlvbjogc3RyaW5nID0gJ2lkbGUnKSA9PiB7XHJcbiAgaWYgKCFzcHJpdGUuYW5pbXMuaXNQbGF5aW5nKSBzcHJpdGUucGxheShhbmltYXRpb24pXHJcbiAgZWxzZSBpZiAoc3ByaXRlLmFuaW1zLmlzUGxheWluZyAmJiBzcHJpdGUuYW5pbXMuZ2V0Q3VycmVudEtleSgpICE9PSBhbmltYXRpb24pIHNwcml0ZS5wbGF5KGFuaW1hdGlvbilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU11bW15QW5pbWF0aW9uID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAga2V5OiAnd2FsaycsXHJcbiAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFNLSU5TLk1VTU1ZLnRvU3RyaW5nKCksIHt9KSxcclxuICAgIGZyYW1lUmF0ZTogMTYsXHJcbiAgICByZXBlYXQ6IDdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TXVtbXlBbmltYXRpb24gPSAoc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlLCBkaXJlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gIGlmICghc3ByaXRlLmFuaW1zLmlzUGxheWluZykgc3ByaXRlLmFuaW1zLnBsYXkoJ3dhbGsnKVxyXG4gIGxldCBmbGlwWCA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdHJ1ZSA6IGZhbHNlXHJcbiAgc3ByaXRlLnNldEZsaXBYKGZsaXBYKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xzIHtcclxuICBsZWZ0ID0gZmFsc2VcclxuICByaWdodCA9IGZhbHNlXHJcbiAgdXAgPSBmYWxzZVxyXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXVxyXG4gIG5vbmUgPSB0cnVlXHJcbiAgcHJldk5vbmUgPSB0cnVlXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzY2VuZTogUGhhc2VyLlNjZW5lLCBwdWJsaWMgc29ja2V0OiBTb2NrZXRJT0NsaWVudC5Tb2NrZXQpIHtcclxuICAgIC8vIGFkZCBhIHNlY29uZCBwb2ludGVyXHJcbiAgICBzY2VuZS5pbnB1dC5hZGRQb2ludGVyKClcclxuXHJcbiAgICBjb25zdCBkZXRlY3RQb2ludGVyID0gKGdhbWVPYmplY3Q6IENvbnRyb2wsIGRvd246IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKGdhbWVPYmplY3QuYnRuKSB7XHJcbiAgICAgICAgc3dpdGNoIChnYW1lT2JqZWN0LmJ0bikge1xyXG4gICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGRvd25cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IGRvd25cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgdGhpcy51cCA9IGRvd25cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNjZW5lLmlucHV0Lm9uKCdnYW1lb2JqZWN0ZG93bicsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogQ29udHJvbCkgPT5cclxuICAgICAgZGV0ZWN0UG9pbnRlcihnYW1lT2JqZWN0LCB0cnVlKVxyXG4gICAgKVxyXG4gICAgc2NlbmUuaW5wdXQub24oJ2dhbWVvYmplY3R1cCcsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdDogQ29udHJvbCkgPT5cclxuICAgICAgZGV0ZWN0UG9pbnRlcihnYW1lT2JqZWN0LCBmYWxzZSlcclxuICAgIClcclxuXHJcbiAgICBsZXQgbGVmdCA9IG5ldyBDb250cm9sKHNjZW5lLCAwLCAwLCAnbGVmdCcpLnNldFJvdGF0aW9uKC0wLjUgKiBNYXRoLlBJKVxyXG4gICAgbGV0IHJpZ2h0ID0gbmV3IENvbnRyb2woc2NlbmUsIDAsIDAsICdyaWdodCcpLnNldFJvdGF0aW9uKDAuNSAqIE1hdGguUEkpXHJcbiAgICBsZXQgdXAgPSBuZXcgQ29udHJvbChzY2VuZSwgMCwgMCwgJ3VwJylcclxuICAgIHRoaXMuY29udHJvbHMucHVzaChsZWZ0LCByaWdodCwgdXApXHJcbiAgICB0aGlzLnJlc2l6ZSgpXHJcblxyXG4gICAgdGhpcy5zY2VuZS5ldmVudHMub24oJ3VwZGF0ZScsIHRoaXMudXBkYXRlLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgY29udHJvbHNEb3duKCkge1xyXG4gICAgcmV0dXJuIHsgbGVmdDogdGhpcy5sZWZ0LCByaWdodDogdGhpcy5yaWdodCwgdXA6IHRoaXMudXAsIG5vbmU6IHRoaXMubm9uZSB9XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBjb25zdCBTQ0FMRSA9IDFcclxuICAgIGNvbnN0IGNvbnRyb2xzUmFkaXVzID0gKDE5MiAvIDIpICogU0NBTEVcclxuICAgIGNvbnN0IHcgPSB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi53aWR0aCAtIDEwIC0gY29udHJvbHNSYWRpdXNcclxuICAgIGNvbnN0IGggPSB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5oZWlnaHQgLSAxMCAtIGNvbnRyb2xzUmFkaXVzXHJcbiAgICBsZXQgcG9zaXRpb25zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgeDogY29udHJvbHNSYWRpdXMgKyAxMCxcclxuICAgICAgICB5OiBoXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgeDogY29udHJvbHNSYWRpdXMgKyAyMTQsIHk6IGggfSxcclxuICAgICAgeyB4OiB3LCB5OiBoIH1cclxuICAgIF1cclxuICAgIHRoaXMuY29udHJvbHMuZm9yRWFjaCgoY3RsLCBpKSA9PiB7XHJcbiAgICAgIGN0bC5zZXRQb3NpdGlvbihwb3NpdGlvbnNbaV0ueCwgcG9zaXRpb25zW2ldLnkpXHJcbiAgICAgIGN0bC5zZXRTY2FsZShTQ0FMRSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLm5vbmUgPSB0aGlzLmxlZnQgfHwgdGhpcy5yaWdodCB8fCB0aGlzLnVwID8gZmFsc2UgOiB0cnVlXHJcblxyXG4gICAgaWYgKCF0aGlzLm5vbmUgfHwgdGhpcy5ub25lICE9PSB0aGlzLnByZXZOb25lKSB7XHJcbiAgICAgIGxldCB0b3RhbCA9IDBcclxuICAgICAgaWYgKHRoaXMubGVmdCkgdG90YWwgKz0gMVxyXG4gICAgICBpZiAodGhpcy5yaWdodCkgdG90YWwgKz0gMlxyXG4gICAgICBpZiAodGhpcy51cCkgdG90YWwgKz0gNFxyXG4gICAgICBpZiAodGhpcy5ub25lKSB0b3RhbCArPSA4XHJcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ1UnIC8qIHNob3J0IGZvciB1cGRhdGVEdWRlICovLCB0b3RhbClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZOb25lID0gdGhpcy5ub25lXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBDb250cm9sIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcHVibGljIGJ0bjogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgJ2NvbnRyb2xzJylcclxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKVxyXG5cclxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgICAuc2V0U2Nyb2xsRmFjdG9yKDApXHJcbiAgICAgIC5zZXRBbHBoYSgwLjUpXHJcbiAgICAgIC5zZXREZXB0aCgyKVxyXG5cclxuICAgIGlmICghc2NlbmUuc3lzLmdhbWUuZGV2aWNlLmlucHV0LnRvdWNoKSB0aGlzLnNldEFscGhhKDApXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvcnMge1xyXG4gIGN1cnNvcnM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzXHJcblxyXG4gIG5vbmUgPSB0cnVlXHJcbiAgcHJldk5vbmUgPSB0cnVlXHJcblxyXG4gIGxlZnQgPSBmYWxzZVxyXG4gIHJpZ2h0ID0gZmFsc2VcclxuICB1cCA9IGZhbHNlXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzY2VuZTogUGhhc2VyLlNjZW5lLCBwdWJsaWMgc29ja2V0OiBTb2NrZXRJT0NsaWVudC5Tb2NrZXQpIHtcclxuICAgIHRoaXMuY3Vyc29ycyA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKVxyXG5cclxuICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9uKCd1cGRhdGUnLCB0aGlzLnVwZGF0ZSwgdGhpcylcclxuICB9XHJcblxyXG4gIGN1cnNvcnNEb3duKCkge1xyXG4gICAgcmV0dXJuIHsgbGVmdDogdGhpcy5sZWZ0LCByaWdodDogdGhpcy5yaWdodCwgdXA6IHRoaXMudXAsIG5vbmU6IHRoaXMubm9uZSB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuY3Vyc29ycy5sZWZ0IHx8ICF0aGlzLmN1cnNvcnMucmlnaHQgfHwgIXRoaXMuY3Vyc29ycy51cCkgcmV0dXJuXHJcblxyXG4gICAgdGhpcy5ub25lID0gdGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duIHx8IHRoaXMuY3Vyc29ycy5yaWdodC5pc0Rvd24gfHwgdGhpcy5jdXJzb3JzLnVwLmlzRG93biA/IGZhbHNlIDogdHJ1ZVxyXG5cclxuICAgIGlmICghdGhpcy5ub25lIHx8IHRoaXMubm9uZSAhPT0gdGhpcy5wcmV2Tm9uZSkge1xyXG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZVxyXG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2VcclxuICAgICAgdGhpcy51cCA9IGZhbHNlXHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29ycy5yaWdodC5pc0Rvd24pIHtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJzb3JzLnVwLmlzRG93bikge1xyXG4gICAgICAgIHRoaXMudXAgPSB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghUEhZU0lDU19ERUJVRykge1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDBcclxuICAgICAgICBpZiAodGhpcy5sZWZ0KSB0b3RhbCArPSAxXHJcbiAgICAgICAgaWYgKHRoaXMucmlnaHQpIHRvdGFsICs9IDJcclxuICAgICAgICBpZiAodGhpcy51cCkgdG90YWwgKz0gNFxyXG4gICAgICAgIGlmICh0aGlzLm5vbmUpIHRvdGFsICs9IDhcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdVJyAvKiBzaG9ydCBmb3IgdXBkYXRlRHVkZSAqLywgdG90YWwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZOb25lID0gdGhpcy5ub25lXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGZ1bGxzY3JlZW5CdXR0b24gPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gIGxldCBidXR0b24gPSBzY2VuZS5hZGRcclxuICAgIC5pbWFnZSgwLCAwLCAnZnVsbHNjcmVlbicsIDApXHJcbiAgICAuc2V0T3JpZ2luKDEsIDApXHJcbiAgICAuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgLnNldFNjcm9sbEZhY3RvcigwKVxyXG4gICAgLnNldERlcHRoKDEwMClcclxuXHJcbiAgYnV0dG9uLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICBpZiAoc2NlbmUuc2NhbGUuaXNGdWxsc2NyZWVuKSB7XHJcbiAgICAgIGJ1dHRvbi5zZXRGcmFtZSgwKVxyXG4gICAgICBzY2VuZS5zY2FsZS5zdG9wRnVsbHNjcmVlbigpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b24uc2V0RnJhbWUoMSlcclxuICAgICAgc2NlbmUuc2NhbGUuc3RhcnRGdWxsc2NyZWVuKClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBidXR0b25cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVsbHNjcmVlbkJ1dHRvblxyXG4iLCIvKipcclxuICogVGhpcyBpcyBhIHBoYXNlciAzIHNjYWxpbmcgc3RyYXRlZ3kgaW1wbGVtZW50YXRpb24gZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20veWFuZGV1L3BoYXNlcjMtc2NhbGluZy1yZXNpemluZy1leGFtcGxlXHJcbiAqL1xyXG5cclxudHlwZSBzY2FsZU1vZGUgPSAnRklUJyB8ICdTTU9PVEgnXHJcblxyXG5jb25zdCBERUZBVUxUX1dJRFRIOiBudW1iZXIgPSA4OTZcclxuY29uc3QgREVGQVVMVF9IRUlHSFQ6IG51bWJlciA9IDUwNFxyXG5jb25zdCBNQVhfV0lEVEg6IG51bWJlciA9IERFRkFVTFRfV0lEVEggKiAxLjVcclxuY29uc3QgTUFYX0hFSUdIVDogbnVtYmVyID0gREVGQVVMVF9IRUlHSFQgKiAxLjVcclxubGV0IFNDQUxFX01PREU6IHNjYWxlTW9kZSA9ICdTTU9PVEgnIC8vIEZJVCBPUiBTTU9PVEhcclxuXHJcbmNvbnN0IHJlc2l6ZSA9IChnYW1lOiBQaGFzZXIuR2FtZSkgPT4ge1xyXG4gIGNvbnN0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gIGNvbnN0IGggPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcbiAgbGV0IHdpZHRoID0gREVGQVVMVF9XSURUSFxyXG4gIGxldCBoZWlnaHQgPSBERUZBVUxUX0hFSUdIVFxyXG4gIGxldCBtYXhXaWR0aCA9IE1BWF9XSURUSFxyXG4gIGxldCBtYXhIZWlnaHQgPSBNQVhfSEVJR0hUXHJcbiAgbGV0IHNjYWxlTW9kZSA9IFNDQUxFX01PREVcclxuXHJcbiAgbGV0IHNjYWxlID0gTWF0aC5taW4odyAvIHdpZHRoLCBoIC8gaGVpZ2h0KVxyXG4gIGxldCBuZXdXaWR0aCA9IE1hdGgubWluKHcgLyBzY2FsZSwgbWF4V2lkdGgpXHJcbiAgbGV0IG5ld0hlaWdodCA9IE1hdGgubWluKGggLyBzY2FsZSwgbWF4SGVpZ2h0KVxyXG5cclxuICBsZXQgZGVmYXVsdFJhdGlvID0gREVGQVVMVF9XSURUSCAvIERFRkFVTFRfSEVJR0hUXHJcbiAgbGV0IG1heFJhdGlvV2lkdGggPSBNQVhfV0lEVEggLyBERUZBVUxUX0hFSUdIVFxyXG4gIGxldCBtYXhSYXRpb0hlaWdodCA9IERFRkFVTFRfV0lEVEggLyBNQVhfSEVJR0hUXHJcblxyXG4gIC8vIHNtb290aCBzY2FsaW5nXHJcbiAgbGV0IHNtb290aCA9IDFcclxuICBpZiAoc2NhbGVNb2RlID09PSAnU01PT1RIJykge1xyXG4gICAgY29uc3QgbWF4U21vb3RoU2NhbGUgPSAxLjE1XHJcbiAgICBjb25zdCBub3JtYWxpemUgPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbilcclxuICAgIH1cclxuICAgIGlmICh3aWR0aCAvIGhlaWdodCA8IHcgLyBoKSB7XHJcbiAgICAgIHNtb290aCA9XHJcbiAgICAgICAgLW5vcm1hbGl6ZShuZXdXaWR0aCAvIG5ld0hlaWdodCwgZGVmYXVsdFJhdGlvLCBtYXhSYXRpb1dpZHRoKSAvICgxIC8gKG1heFNtb290aFNjYWxlIC0gMSkpICsgbWF4U21vb3RoU2NhbGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNtb290aCA9XHJcbiAgICAgICAgLW5vcm1hbGl6ZShuZXdXaWR0aCAvIG5ld0hlaWdodCwgZGVmYXVsdFJhdGlvLCBtYXhSYXRpb0hlaWdodCkgLyAoMSAvIChtYXhTbW9vdGhTY2FsZSAtIDEpKSArIG1heFNtb290aFNjYWxlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZXNpemUgdGhlIGdhbWVcclxuICBnYW1lLnNjYWxlLnJlc2l6ZShuZXdXaWR0aCAqIHNtb290aCwgbmV3SGVpZ2h0ICogc21vb3RoKVxyXG5cclxuICAvLyBzY2FsZSB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgY3NzXHJcbiAgZ2FtZS5jYW52YXMuc3R5bGUud2lkdGggPSBuZXdXaWR0aCAqIHNjYWxlICsgJ3B4J1xyXG4gIGdhbWUuY2FudmFzLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCAqIHNjYWxlICsgJ3B4J1xyXG5cclxuICAvLyBjZW50ZXIgdGhlIGdhbWUgd2l0aCBjc3MgbWFyZ2luXHJcbiAgZ2FtZS5jYW52YXMuc3R5bGUubWFyZ2luVG9wID0gYCR7KGggLSBuZXdIZWlnaHQgKiBzY2FsZSkgLyAyfXB4YFxyXG4gIGdhbWUuY2FudmFzLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHsodyAtIG5ld1dpZHRoICogc2NhbGUpIC8gMn1weGBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzaXplXHJcbiIsImltcG9ydCB7IE1BWF9QTEFZRVJTX1BFUl9ST09NIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgdGV4dHMgPSBbXHJcbiAge1xyXG4gICAgeTogMjMwLFxyXG4gICAgZm9udFNpemU6IDI4LFxyXG4gICAgdHlwZTogJ3NlcnZlcl9ydW5uaW5nX3RpbWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICB5OiAyNjAsXHJcbiAgICBmb250U2l6ZTogMjgsXHJcbiAgICB0eXBlOiAndGhlX3Jvb21faWQnXHJcbiAgfSxcclxuICB7XHJcbiAgICB5OiAyOTAsXHJcbiAgICBmb250U2l6ZTogMjgsXHJcbiAgICB0eXBlOiAnc2hvd19jb25uZWN0ZWRfdXNlcnMnXHJcbiAgfSxcclxuICB7XHJcbiAgICB5OiAzMjAsXHJcbiAgICBmb250U2l6ZTogMjgsXHJcbiAgICB0eXBlOiAnc2hvd19sYXRlbmN5J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgeTogMzUwLFxyXG4gICAgZm9udFNpemU6IDI4LFxyXG4gICAgdHlwZTogJ3Nob3dfZnBzJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHMge1xyXG4gIHRleHRPYmplY3RzOiB7IFtrZXk6IHN0cmluZ106IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IH0gPSB7fVxyXG4gIGhpZGRlbiA9IGZhbHNlXHJcbiAgYnVnOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfCB1bmRlZmluZWRcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcclxuICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XHJcbiAgICAgIGxldCB0aGVUZXh0ID0gc2NlbmUuYWRkXHJcbiAgICAgICAgLnRleHQoc2NlbmUuY2FtZXJhcy5tYWluLndpZHRoIC8gMiwgdGV4dC55LCAnJywge1xyXG4gICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgIGZvbnRTaXplOiB0ZXh0LmZvbnRTaXplXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICAuc2V0UmVzb2x1dGlvbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgICAuc2V0U2Nyb2xsRmFjdG9yKDApXHJcbiAgICAgICAgLnNldERlcHRoKDEwMClcclxuXHJcbiAgICAgIHRoaXMudGV4dE9iamVjdHNbdGV4dC50eXBlXSA9IHRoZVRleHRcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5tYWtlQnVnKClcclxuICAgIHRoaXMucmVzaXplKClcclxuICAgIHRoaXMudG9nZ2xlSGlkZGVuKClcclxuICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9uKCd1cGRhdGUnLCB0aGlzLnVwZGF0ZSwgdGhpcylcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmhpZGRlbikgcmV0dXJuXHJcbiAgICB0aGlzLnNldEZwcyh0aGlzLnNjZW5lLmdhbWUubG9vcC5hY3R1YWxGcHMpXHJcbiAgfVxyXG5cclxuICBtYWtlQnVnKCkge1xyXG4gICAgdGhpcy5idWcgPSB0aGlzLnNjZW5lLmFkZFxyXG4gICAgICAuaW1hZ2UoMCwgMCwgJ2J1ZycpXHJcbiAgICAgIC5zZXRPcmlnaW4oMClcclxuICAgICAgLnNldFNjcm9sbEZhY3RvcigwKVxyXG4gICAgICAuc2V0RGVwdGgoMTAwKVxyXG4gICAgdGhpcy5idWcuc2V0SW50ZXJhY3RpdmUoKS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9nZ2xlSGlkZGVuKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB0b2dnbGVIaWRkZW4oKSB7XHJcbiAgICB0aGlzLmhpZGRlbiA9ICF0aGlzLmhpZGRlblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy50ZXh0T2JqZWN0cykge1xyXG4gICAgICB0aGlzLnRleHRPYmplY3RzW2tleV0uc2V0QWxwaGEodGhpcy5oaWRkZW4gPyAwIDogMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XHJcbiAgICAgIGNvbnN0IHRleHRPYmogPSB0aGlzLnRleHRPYmplY3RzW3RleHQudHlwZV1cclxuICAgICAgdGV4dE9iai5zZXRQb3NpdGlvbih0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi53aWR0aCAvIDIsIHRleHQueSlcclxuICAgIH0pXHJcbiAgICBpZiAodGhpcy5idWcpIHRoaXMuYnVnLnNldFBvc2l0aW9uKDE2LCAxNilcclxuICB9XHJcblxyXG4gIHNldENvbm5lY3RDb3VudGVyKGNvbm5lY3RDb3VudGVyOiBudW1iZXIpIHtcclxuICAgIHRoaXMudGV4dE9iamVjdHNbJ3Nob3dfY29ubmVjdGVkX3VzZXJzJ10uc2V0VGV4dChgQ29ubmVjdGVkIHVzZXJzOiAke2Nvbm5lY3RDb3VudGVyfS8ke01BWF9QTEFZRVJTX1BFUl9ST09NfWApXHJcbiAgfVxyXG5cclxuICBzZXRSb29tSWQocm9vbUlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGV4dE9iamVjdHNbJ3RoZV9yb29tX2lkJ10uc2V0VGV4dChgUm9vbUlkICR7cm9vbUlkfWApXHJcbiAgfVxyXG5cclxuICBzZXRUaW1lKHRpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy50ZXh0T2JqZWN0c1snc2VydmVyX3J1bm5pbmdfdGltZSddLnNldFRleHQoYFNlcnZlciBpcyBydW5uaW5nIHNpbmNlICR7bmV3IERhdGUodGltZSkudG9VVENTdHJpbmcoKX1gKVxyXG4gIH1cclxuXHJcbiAgc2V0RnBzKGZwczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnRleHRPYmplY3RzWydzaG93X2ZwcyddLnNldFRleHQoYGZwczogJHtNYXRoLnJvdW5kKGZwcyl9YClcclxuICB9XHJcblxyXG4gIHNldExhdGVuY3kobGF0ZW5jeTogTGF0ZW5jeSkge1xyXG4gICAgaWYgKGlzTmFOKGxhdGVuY3kuY3VycmVudCkpIHJldHVyblxyXG4gICAgaWYgKGlzTmFOKGxhdGVuY3kuaGlnaCkgfHwgbGF0ZW5jeS5jdXJyZW50ID4gbGF0ZW5jeS5oaWdoKSBsYXRlbmN5LmhpZ2ggPSBsYXRlbmN5LmN1cnJlbnRcclxuICAgIGlmIChpc05hTihsYXRlbmN5LmxvdykgfHwgbGF0ZW5jeS5jdXJyZW50IDwgbGF0ZW5jeS5sb3cpIGxhdGVuY3kubG93ID0gbGF0ZW5jeS5jdXJyZW50XHJcblxyXG4gICAgbGV0IHN1bSA9IGxhdGVuY3kuaGlzdG9yeS5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiAoY3VycmVudCArPSBwcmV2aW91cykpXHJcbiAgICBsZXQgYXZnID0gc3VtIC8gbGF0ZW5jeS5oaXN0b3J5Lmxlbmd0aFxyXG5cclxuICAgIHRoaXMudGV4dE9iamVjdHNbJ3Nob3dfbGF0ZW5jeSddLnNldFRleHQoXHJcbiAgICAgIGBMYXRlbmN5ICR7bGF0ZW5jeS5jdXJyZW50fW1zIChhdmcgJHtNYXRoLnJvdW5kKGF2Zyl9bXMgLyBsb3cgJHtsYXRlbmN5Lmxvd31tcyAvIGhpZ2ggJHtsYXRlbmN5LmhpZ2h9bXMpYFxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUHJlbG9hZFNjZW5lIGZyb20gJy4vc2NlbmVzL3ByZWxvYWRTY2VuZSdcclxuaW1wb3J0IE1lbnVTY2VuZSBmcm9tICcuL3NjZW5lcy9tZW51U2NlbmUnXHJcbmltcG9ydCBNYWluU2NlbmUgZnJvbSAnLi9zY2VuZXMvbWFpblNjZW5lJ1xyXG5cclxuY29uc3QgREVGQVVMVF9XSURUSCA9IDEyODBcclxuY29uc3QgREVGQVVMVF9IRUlHSFQgPSA3MjBcclxuXHJcbi8vIHRoZSBzaXplIG9mIHRoZSB3b3JsZFxyXG5leHBvcnQgY29uc3Qgd29ybGQgPSB7XHJcbiAgeDogMCxcclxuICB5OiAwLFxyXG4gIHdpZHRoOiAyNTYwLFxyXG4gIGhlaWdodDogODY0XHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICB0eXBlOiBQaGFzZXIuV0VCR0wsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgc2NhbGU6IHtcclxuICAgIHBhcmVudDogJ3BoYXNlci1nYW1lJyxcclxuICAgIG1vZGU6IFBoYXNlci5TY2FsZS5OT05FLFxyXG4gICAgd2lkdGg6IERFRkFVTFRfV0lEVEgsXHJcbiAgICBoZWlnaHQ6IERFRkFVTFRfSEVJR0hUXHJcbiAgfSxcclxuICBzY2VuZTogW1ByZWxvYWRTY2VuZSwgTWVudVNjZW5lLCBNYWluU2NlbmVdLFxyXG4gIHBoeXNpY3M6IHtcclxuICAgIGRlZmF1bHQ6ICdtYXR0ZXInLFxyXG4gICAgbWF0dGVyOiB7XHJcbiAgICAgIGdyYXZpdHk6IHtcclxuICAgICAgICB5OiAwLjhcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICBkZWJ1Z0JvZHlDb2xvcjogMHhmZjAwZmZcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXHJcbiIsImltcG9ydCBUZXh0cyBmcm9tICcuLi9jb21wb25lbnRzL3RleHRzJ1xyXG5pbXBvcnQgQ3Vyc29ycyBmcm9tICcuLi9jb21wb25lbnRzL2N1cnNvcnMnXHJcbmltcG9ydCB7IHNldER1ZGVBbmltYXRpb24sIHNldE11bW15QW5pbWF0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hbmltYXRpb25zJ1xyXG5pbXBvcnQgZnVsbHNjcmVlbkJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2Z1bGxzY3JlZW5CdXR0b24nXHJcbmltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRyb2xzJ1xyXG5pbXBvcnQgeyB3b3JsZCB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc2l6ZSdcclxuXHJcbmltcG9ydCBTeW5jTWFuYWdlciBmcm9tICcuLi8uLi9zZXJ2ZXIvbWFuYWdlcnMvc3luY01hbmFnZXInXHJcbmltcG9ydCB7IFNLSU5TIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5cclxuaW50ZXJmYWNlIE9iamVjdHMge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIG9iamVjdHM6IE9iamVjdHMgPSB7fVxyXG4gIHN5bmM6IHsgaW5pdGlhbFN0YXRlOiBib29sZWFuOyBvYmplY3RzOiBhbnlbXSB9ID0ge1xyXG4gICAgaW5pdGlhbFN0YXRlOiBmYWxzZSxcclxuICAgIG9iamVjdHM6IFtdXHJcbiAgfVxyXG5cclxuICBsYXRlbmN5OiBMYXRlbmN5ID0ge1xyXG4gICAgY3VycmVudDogTmFOLFxyXG4gICAgaGlnaDogTmFOLFxyXG4gICAgbG93OiBOYU4sXHJcbiAgICBwaW5nOiBOYU4sXHJcbiAgICBpZDogJycsXHJcbiAgICBjYW5TZW5kOiB0cnVlLFxyXG4gICAgaGlzdG9yeTogW11cclxuICB9XHJcbiAgc29ja2V0OiBTb2NrZXRcclxuXHJcbiAgY3Vyc29yczogQ3Vyc29ycyB8IHVuZGVmaW5lZFxyXG4gIGNvbnRyb2xzOiBDb250cm9scyB8IHVuZGVmaW5lZFxyXG4gIGxldmVsOiBudW1iZXIgPSAwXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBrZXk6ICdNYWluU2NlbmUnIH0pXHJcbiAgfVxyXG5cclxuICBpbml0KHByb3BzOiB7IHNjZW5lOiBzdHJpbmc7IGxldmVsOiBudW1iZXI7IHNvY2tldDogU29ja2V0IH0pIHtcclxuICAgIGNvbnN0IHsgc2NlbmUsIGxldmVsID0gMCwgc29ja2V0IH0gPSBwcm9wc1xyXG4gICAgdGhpcy5sZXZlbCA9IGxldmVsXHJcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldFxyXG4gICAgdGhpcy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB7IHNjZW5lLCBsZXZlbCB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5zb2NrZXRcclxuXHJcbiAgICBsZXQgbGV2ZWxUZXh0ID0gdGhpcy5hZGRcclxuICAgICAgLnRleHQoMCwgMCwgYExldmVsICR7dGhpcy5sZXZlbCArIDF9YCwge1xyXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgZm9udFNpemU6IDQyXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZXRPcmlnaW4oMC41LCAwKVxyXG4gICAgICAuc2V0RGVwdGgoMTAwKVxyXG4gICAgICAuc2V0U2Nyb2xsRmFjdG9yKDApXHJcblxyXG4gICAgbGV0IHN0YXJmaWVsZCA9IHRoaXMuYWRkLnRpbGVTcHJpdGUod29ybGQueCwgd29ybGQueSwgd29ybGQud2lkdGgsIHdvcmxkLmhlaWdodCwgJ3N0YXJmaWVsZCcpLnNldE9yaWdpbigwKVxyXG4gICAgdGhpcy5jdXJzb3JzID0gbmV3IEN1cnNvcnModGhpcywgc29ja2V0KVxyXG4gICAgdGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzLCBzb2NrZXQpXHJcbiAgICBsZXQgdGV4dHMgPSBuZXcgVGV4dHModGhpcylcclxuICAgIGxldCBmdWxsc2NyZWVuQnRuID0gZnVsbHNjcmVlbkJ1dHRvbih0aGlzKVxyXG5cclxuICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldEJvdW5kcyh3b3JsZC54LCB3b3JsZC55LCB3b3JsZC53aWR0aCwgd29ybGQuaGVpZ2h0KVxyXG5cclxuICAgIHNvY2tldC5vbignZ2V0UG9uZycsIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxhdGVuY3kuaWQgIT09IGlkKSByZXR1cm5cclxuICAgICAgdGhpcy5sYXRlbmN5LmNhblNlbmQgPSB0cnVlXHJcbiAgICAgIHRoaXMubGF0ZW5jeS5jdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmxhdGVuY3kucGluZ1xyXG4gICAgICBpZiAodGhpcy5sYXRlbmN5Lmhpc3RvcnkubGVuZ3RoID49IDIwMCkgdGhpcy5sYXRlbmN5Lmhpc3Rvcnkuc2hpZnQoKVxyXG4gICAgICB0aGlzLmxhdGVuY3kuaGlzdG9yeS5wdXNoKHRoaXMubGF0ZW5jeS5jdXJyZW50KVxyXG4gICAgICB0ZXh0cy5zZXRMYXRlbmN5KHRoaXMubGF0ZW5jeSlcclxuICAgIH0pXHJcbiAgICB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICBkZWxheTogMjUwLCAvLyBtYXggNCB0aW1lcyBwZXIgc2Vjb25kXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxhdGVuY3kuY2FuU2VuZCkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRleHRzLmhpZGRlbikgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5sYXRlbmN5LnBpbmcgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgIHRoaXMubGF0ZW5jeS5pZCA9IFBoYXNlci5NYXRoLlJORC51dWlkKClcclxuICAgICAgICB0aGlzLmxhdGVuY3kuY2FuU2VuZCA9IGZhbHNlXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRQaW5nJywgdGhpcy5sYXRlbmN5LmlkKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbignY2hhbmdpbmdSb29tJywgKGRhdGE6IHsgc2NlbmU6IHN0cmluZzsgbGV2ZWw6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGNoYW5naW5nIHJvb20nKVxyXG4gICAgICAvLyBkZXN0cm95IGFsbCBvYmplY3RzIGFuZCBnZXQgbmV3IG9uY2VzXHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub2JqZWN0cykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLm9iamVjdHNba2V5XS5zcHJpdGUuZGVzdHJveSgpXHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2JqZWN0c1trZXldXHJcbiAgICAgIH0pXHJcbiAgICAgIHNvY2tldC5lbWl0KCdnZXRJbml0aWFsU3RhdGUnKVxyXG4gICAgICB0aGlzLmxldmVsID0gZGF0YS5sZXZlbCB8IDBcclxuICAgICAgbGV2ZWxUZXh0LnNldFRleHQoYExldmVsICR7dGhpcy5sZXZlbCArIDF9YClcclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKCdTJyAvKiBzaG9ydCBmb3Igc3luY0dhbWUgKi8sIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmNvbm5lY3RDb3VudGVyKSB0ZXh0cy5zZXRDb25uZWN0Q291bnRlcihyZXMuY29ubmVjdENvdW50ZXIpXHJcbiAgICAgIGlmIChyZXMudGltZSkgdGV4dHMuc2V0VGltZShyZXMudGltZSlcclxuICAgICAgaWYgKHJlcy5yb29tSWQpIHRleHRzLnNldFJvb21JZChyZXMucm9vbUlkKVxyXG5cclxuICAgICAgLy8gcmVzLk8gKG9iamVjdHMpIGNvbnRhaW5zIG9ubHkgdGhlIG9iamVjdHMgdGhhdCBuZWVkIHRvIGJlIHVwZGF0ZWRcclxuICAgICAgaWYgKHJlcy5PIC8qIHNob3J0IGZvciBvYmplY3RzICovKSB7XHJcbiAgICAgICAgcmVzLk8gPSBTeW5jTWFuYWdlci5kZWNvZGUocmVzLk8pXHJcblxyXG4gICAgICAgIHRoaXMuc3luYy5vYmplY3RzID0gWy4uLnRoaXMuc3luYy5vYmplY3RzLCAuLi5yZXMuT11cclxuICAgICAgICB0aGlzLnN5bmMub2JqZWN0cy5mb3JFYWNoKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgLy8gdGhlIGlmIHRoZSBwbGF5ZXIncyBkdWRlIGlzIGluIHRoZSBvYmplY3RzIGxpc3QgdGhlIGNhbWVyYSBmb2xsb3dzIGl0IHNwcml0ZVxyXG4gICAgICAgICAgaWYgKHRoaXMub2JqZWN0c1tvYmouaWRdICYmIG9iai5za2luID09PSBTS0lOUy5EVURFICYmIG9iai5jbGllbnRJZCAmJiArb2JqLmNsaWVudElkID09PSArc29ja2V0LmNsaWVudElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldFNjcm9sbChvYmoueCAtIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gMiwgb2JqLnkgLSB0aGlzLmNhbWVyYXMubWFpbi5oZWlnaHQgLyAyKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGlmIHRoZSBvYmplY3QgZG9lcyBub3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyBvbmVcclxuICAgICAgICAgIGlmICghdGhpcy5vYmplY3RzW29iai5pZF0pIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuYWRkXHJcbiAgICAgICAgICAgICAgLnNwcml0ZShvYmoueCwgb2JqLnksIG9iai5za2luLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgLnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgICAgICAgLnNldFJvdGF0aW9uKG9iai5hbmdsZSB8fCAwKVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBzcHJpdGUgYnkgaWQgdG8gdGhlIG9iamVjdHMgb2JqZWN0XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tvYmouaWRdID0ge1xyXG4gICAgICAgICAgICAgIHNwcml0ZTogc3ByaXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBzZXQgc29tZSBwcm9wZXJ0aWVzIHRvIHRoZSBzcHJpdGVcclxuICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLm9iamVjdHNbb2JqLmlkXS5zcHJpdGVcclxuICAgICAgICAgIC8vIHNldCBzY2FsZVxyXG4gICAgICAgICAgaWYgKG9iai5zY2FsZSkge1xyXG4gICAgICAgICAgICBzcHJpdGUuc2V0U2NhbGUob2JqLnNjYWxlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gc2V0IHNjYWxlXHJcbiAgICAgICAgICBpZiAob2JqLnRpbnQpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnNldFRpbnQob2JqLnRpbnQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBzZXQgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgc3ByaXRlLnNldFZpc2libGUoIW9iai5kZWFkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyByZXF1ZXN0IHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICBzb2NrZXQuZW1pdCgnZ2V0SW5pdGlhbFN0YXRlJylcclxuXHJcbiAgICAvLyByZXF1ZXN0IHRoZSBpbml0aWFsIHN0YXRlIGV2ZXJ5IDE1IHNlY29uZHNcclxuICAgIC8vIHRvIG1ha2Ugc3VyZSBhbGwgb2JqZWN0cyBhcmUgdXAgdG8gZGF0ZVxyXG4gICAgLy8gaW4gY2FzZSB3ZSBtaXNzZWQgb25lIChuZXR3b3JrIGlzc3VlcylcclxuICAgIC8vIHNob3VsZCBiZSBzZW50IGZyb20gdGhlIHNlcnZlciBzaWRlIG5vdCB0aGUgY2xpZW50XHJcbiAgICAvLyB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgLy8gICBkZWxheTogMTUwMDAsXHJcbiAgICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgICAvLyAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAvLyAgICAgc29ja2V0LmVtaXQoJ2dldEluaXRpYWxTdGF0ZScpXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gcmVxdWVzdCB0aGUgaW5pdGlhbCBzdGF0ZSBpZiB0aGUgZ2FtZSBnZXRzIGZvY3VzXHJcbiAgICAvLyBlLmcuIGlmIHRoZSB1c2VycyBjb21lcyBmcm9tIGFub3RoZXIgdGFiIG9yIHdpbmRvd1xyXG4gICAgdGhpcy5nYW1lLmV2ZW50cy5vbignZm9jdXMnLCAoKSA9PiBzb2NrZXQuZW1pdCgnZ2V0SW5pdGlhbFN0YXRlJykpXHJcblxyXG4gICAgLy8gdGhpcyBoZWxwcyBkZWJ1Z2dpbmdcclxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIud29ybGRYLCBwb2ludGVyLndvcmxkWSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzdGFyZmllbGQuc2V0U2NhbGUoTWF0aC5tYXgodGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0IC8gc3RhcmZpZWxkLmhlaWdodCwgMSkpXHJcbiAgICAgIHRleHRzLnJlc2l6ZSgpXHJcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xzKSB0aGlzLmNvbnRyb2xzLnJlc2l6ZSgpXHJcbiAgICAgIGZ1bGxzY3JlZW5CdG4uc2V0UG9zaXRpb24odGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLSAxNiwgMTYpXHJcbiAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldFNjcm9sbCh0aGlzLmNhbWVyYXMubWFpbi53b3JsZFZpZXcueCwgd29ybGQuaGVpZ2h0KVxyXG4gICAgICBsZXZlbFRleHQuc2V0UG9zaXRpb24odGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyAyLCAyMClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjYWxlLm9uKCdyZXNpemUnLCAoZ2FtZVNpemU6IGFueSwgYmFzZVNpemU6IGFueSwgZGlzcGxheVNpemU6IGFueSwgcmVzb2x1dGlvbjogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuY2FtZXJhcy5yZXNpemUoZ2FtZVNpemUud2lkdGgsIGdhbWVTaXplLmhlaWdodClcclxuICAgICAgcmVzaXplKClcclxuICAgIH0pXHJcbiAgICBSZXNpemUodGhpcy5nYW1lKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgLy8gdXBkYXRlIGFsbCBvYmplY3RzXHJcbiAgICBpZiAodGhpcy5zeW5jLm9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN5bmMub2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0c1tvYmouaWRdKSB7XHJcbiAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5vYmplY3RzW29iai5pZF0uc3ByaXRlXHJcbiAgICAgICAgICBpZiAob2JqLmRlYWQgIT09IG51bGwpIHNwcml0ZS5zZXRWaXNpYmxlKCFvYmouZGVhZClcclxuICAgICAgICAgIGlmIChvYmoueCAhPT0gbnVsbCkgc3ByaXRlLnggPSBvYmoueFxyXG4gICAgICAgICAgaWYgKG9iai55ICE9PSBudWxsKSBzcHJpdGUueSA9IG9iai55XHJcbiAgICAgICAgICBpZiAob2JqLmFuZ2xlICE9PSBudWxsICYmIHR5cGVvZiBvYmouYW5nbGUgIT09ICd1bmRlZmluZWQnKSBzcHJpdGUuYW5nbGUgPSBvYmouYW5nbGVcclxuICAgICAgICAgIGlmIChvYmouc2tpbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAob2JqLnNraW4gPT09IFNLSU5TLk1VTU1ZKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9iai5kaXJlY3Rpb24gIT09IG51bGwpIHNldE11bW15QW5pbWF0aW9uKHNwcml0ZSwgb2JqLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob2JqLnNraW4gPT09IFNLSU5TLkRVREUpIHtcclxuICAgICAgICAgICAgICBpZiAob2JqLmFuaW1hdGlvbiAhPT0gbnVsbCkgc2V0RHVkZUFuaW1hdGlvbihzcHJpdGUsIG9iai5hbmltYXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnN5bmMub2JqZWN0cyA9IFtdXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZXNpemUgZnJvbSAnLi4vY29tcG9uZW50cy9yZXNpemUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHNvY2tldDogU29ja2V0XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogJ01lbnVTY2VuZScgfSlcclxuICB9XHJcblxyXG4gIGluaXQocHJvcHM6IHsgc29ja2V0OiBTb2NrZXQgfSkge1xyXG4gICAgY29uc3QgeyBzb2NrZXQgfSA9IHByb3BzXHJcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldFxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiA1MlxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZXh0czogYW55W10gPSBbXVxyXG5cclxuICAgIHRleHRzLnB1c2godGhpcy5hZGQudGV4dCgwLCAwLCAnQ2hvb3NlIHdoaWNoIExldmVsXFxueW91IHdhbnQgdG8gcGxheScsIHN0eWxlcykuc2V0T3JpZ2luKDAuNSwgMCkpXHJcblxyXG4gICAgdGV4dHMucHVzaChcclxuICAgICAgdGhpcy5hZGRcclxuICAgICAgICAudGV4dCgwLCAwLCAnTWF0dGVyIFBoeXNpY3MnLCBzdHlsZXMpXHJcbiAgICAgICAgLnNldE9yaWdpbigwLjUsIDApXHJcbiAgICAgICAgLnNldEludGVyYWN0aXZlKClcclxuICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpblNjZW5lJywgeyBzY2VuZTogJ01hdHRlclNjZW5lJywgbGV2ZWw6IDAsIHNvY2tldDogdGhpcy5zb2NrZXQgfSlcclxuICAgICAgICB9KVxyXG4gICAgKVxyXG5cclxuICAgIHRleHRzLnB1c2goXHJcbiAgICAgIHRoaXMuYWRkXHJcbiAgICAgICAgLnRleHQoMCwgMCwgJ0FyY2FkZSBQaHlzaWNzIChMZXZlbCAxKScsIHN0eWxlcylcclxuICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMClcclxuICAgICAgICAuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluU2NlbmUnLCB7IHNjZW5lOiAnQXJjYWRlU2NlbmUnLCBsZXZlbDogMCwgc29ja2V0OiB0aGlzLnNvY2tldCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcblxyXG4gICAgdGV4dHMucHVzaChcclxuICAgICAgdGhpcy5hZGRcclxuICAgICAgICAudGV4dCgwLCAwLCAnQXJjYWRlIFBoeXNpY3MgKExldmVsIDIpJywgc3R5bGVzKVxyXG4gICAgICAgIC5zZXRPcmlnaW4oMC41LCAwKVxyXG4gICAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpXHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluU2NlbmUnLCB7IHNjZW5lOiAnQXJjYWRlU2NlbmUnLCBsZXZlbDogMSwgc29ja2V0OiB0aGlzLnNvY2tldCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcblxyXG4gICAgdGV4dHMucHVzaChcclxuICAgICAgdGhpcy5hZGRcclxuICAgICAgICAudGV4dCgwLCAwLCAnQXJjYWRlIFBoeXNpY3MgKExldmVsIDMpJywgc3R5bGVzKVxyXG4gICAgICAgIC5zZXRPcmlnaW4oMC41LCAwKVxyXG4gICAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RvcCgpXHJcbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluU2NlbmUnLCB7IHNjZW5lOiAnQXJjYWRlU2NlbmUnLCBsZXZlbDogMiwgc29ja2V0OiB0aGlzLnNvY2tldCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGNlbnRlclgsIGNlbnRlclkgfSA9IHRoaXMuY2FtZXJhcy5tYWluXHJcbiAgICAgIGxldCBwb3NZID0gWzIwLCBjZW50ZXJZIC0gMTAwLCBjZW50ZXJZIC0gMTAsIGNlbnRlclkgKyA2MCwgY2VudGVyWSArIDEzMF1cclxuICAgICAgdGV4dHMuZm9yRWFjaCgodGV4dCwgaSkgPT4ge1xyXG4gICAgICAgIHRleHQuc2V0UG9zaXRpb24oY2VudGVyWCwgcG9zWVtpXSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjYWxlLm9uKCdyZXNpemUnLCAoZ2FtZVNpemU6IGFueSwgYmFzZVNpemU6IGFueSwgZGlzcGxheVNpemU6IGFueSwgcmVzb2x1dGlvbjogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zY2VuZS5pc0FjdGl2ZSgpKSByZXR1cm5cclxuICAgICAgdGhpcy5jYW1lcmFzLnJlc2l6ZShnYW1lU2l6ZS53aWR0aCwgZ2FtZVNpemUuaGVpZ2h0KVxyXG4gICAgICByZXNpemUoKVxyXG4gICAgfSlcclxuICAgIHJlc2l6ZSgpXHJcbiAgICBSZXNpemUodGhpcy5nYW1lKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IHsgU0tJTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IGNyZWF0ZUR1ZGVBbmltYXRpb25zLCBjcmVhdGVNdW1teUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYW5pbWF0aW9ucydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogJ1ByZWxvYWRTY2VuZScgfSlcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnc3RhdGljL2NsaWVudCcpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoU0tJTlMuQk9YLnRvU3RyaW5nKCksICdhc3NldHMvYm94LnBuZycpXHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoU0tJTlMuU1RBUi50b1N0cmluZygpLCAnYXNzZXRzL3N0YXIucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnYnVnJywgJ2Fzc2V0cy9idWcucG5nJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnc3RhcmZpZWxkJywgJ2Fzc2V0cy9zdGFyZmllbGQuanBnJylcclxuICAgIHRoaXMubG9hZC5pbWFnZSgnY29udHJvbHMnLCAnYXNzZXRzL2NvbnRyb2xzLnBuZycpXHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoU0tJTlMuRFVERS50b1N0cmluZygpLCAnYXNzZXRzL2R1ZGUucG5nJywge1xyXG4gICAgICBmcmFtZVdpZHRoOiAzMixcclxuICAgICAgZnJhbWVIZWlnaHQ6IDQ4XHJcbiAgICB9KVxyXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmdWxsc2NyZWVuJywgJ2Fzc2V0cy9mdWxsc2NyZWVuLnBuZycsIHtcclxuICAgICAgZnJhbWVXaWR0aDogNjQsXHJcbiAgICAgIGZyYW1lSGVpZ2h0OiA2NFxyXG4gICAgfSlcclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldChTS0lOUy5NVU1NWS50b1N0cmluZygpLCAnYXNzZXRzL211bW15Mzd4NDUucG5nJywgeyBmcmFtZVdpZHRoOiAzNywgZnJhbWVIZWlnaHQ6IDQ1IH0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICBjcmVhdGVEdWRlQW5pbWF0aW9ucyh0aGlzKVxyXG4gICAgY3JlYXRlTXVtbXlBbmltYXRpb24odGhpcylcclxuXHJcbiAgICAvLyBjb25uZWN0aW5nIHRvIHNvY2tldC5pb1xyXG4gICAgY29uc3QgdXJsID0gYCR7bG9jYXRpb24ub3JpZ2lufS9HYCAvKiBzaG9ydCBmb3Igc3RhdHMgKi9cclxuXHJcbiAgICBsZXQgc29ja2V0ID0gaW8uY29ubmVjdCh1cmwsIHsgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSB9KSBhcyBTb2NrZXRcclxuXHJcbiAgICAvLyBvbiByZWNvbm5lY3Rpb24sIHJlc2V0IHRoZSB0cmFuc3BvcnRzIG9wdGlvbiwgYXMgdGhlIFdlYnNvY2tldFxyXG4gICAgLy8gY29ubmVjdGlvbiBtYXkgaGF2ZSBmYWlsZWQgKGNhdXNlZCBieSBwcm94eSwgZmlyZXdhbGwsIGJyb3dzZXIsIC4uLilcclxuICAgIHNvY2tldC5vbigncmVjb25uZWN0X2F0dGVtcHQnLCAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5pby5vcHRzLnRyYW5zcG9ydHMgPSBbJ3BvbGxpbmcnLCAnd2Vic29ja2V0J11cclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIllvdSdyZSBjb25uZWN0ZWQgdG8gc29ja2V0LmlvXCIpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHdlIHdhaXQgdW50aWwgd2UgaGF2ZSBhIHZhbGlkIGNsaWVudElkLCB0aGVuIHN0YXJ0IHRoZSBNYWluU2NlbmVcclxuICAgIHNvY2tldC5vbignY2xpZW50SWQnLCAoY2xpZW50SWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICBzb2NrZXQuY2xpZW50SWQgPSBjbGllbnRJZFxyXG4gICAgICBjb25zb2xlLmxvZygnWW91ciBjbGllbnQgaWQnLCBjbGllbnRJZClcclxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWVudVNjZW5lJywgeyBzb2NrZXQgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTS0lOUyA9IHtcclxuICBEVURFOiAwLFxyXG4gIEJPWDogMSxcclxuICBTVEFSOiAyLFxyXG4gIE1VTU1ZOiAzXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfUExBWUVSU19QRVJfUk9PTSA9IDRcclxuZXhwb3J0IGNvbnN0IFVTRVJfS0lDS19USU1FT1VUID0gNjBfMDAwIC8vIDEgbWludXRlXHJcbiIsImltcG9ydCB7IFNLSU5TIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94IGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgc2tpbiA9IFNLSU5TLkJPWFxyXG4gIGlkOiBzdHJpbmdcclxuICBzeW5jID0gdHJ1ZVxyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBpZDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHksICcnKVxyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpXHJcbiAgICBzY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzLCB0cnVlKVxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuYm9keVxyXG4gICAgICAuc2V0U2l6ZSg5NSwgOTUpXHJcbiAgICAgIC8vIDMyIGlzIHRoZSBkZWZhdWx0IHdpZHRoIGFuIGhlaWdodCBmb3IgYW4gc3ByaXRlIGlmIHRoZSB0ZXh0dXJlIGNhbiBub3QgYmUgbG9hZGVkXHJcbiAgICAgIC5zZXRPZmZzZXQoLTMyLCAtMzIpXHJcblxyXG4gICAgdGhpcy5pZCA9IGlkLnRvU3RyaW5nKClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU0tJTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdWRlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgc2tpbiA9IFNLSU5TLkRVREVcclxuICBjbGllbnRJZDogbnVtYmVyXHJcbiAgc29ja2V0SWQ6IHN0cmluZ1xyXG4gIGlkOiBzdHJpbmdcclxuICBwcml2YXRlIHVwZGF0ZXM6IGFueSA9IHt9XHJcbiAgcHJpdmF0ZSBzaG91bGRVcGRhdGUgPSB0cnVlXHJcbiAgcHJldlBvc2l0aW9uID0ge1xyXG4gICAgeDogLTEsXHJcbiAgICB5OiAtMVxyXG4gIH1cclxuICBkZWFkID0gZmFsc2VcclxuICBwcmV2RGVhZCA9IGZhbHNlXHJcbiAgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmXHJcbiAgcHJldkNvbG9yOiBudW1iZXIgPSAweGZmZmZmZlxyXG4gIGFuaW1hdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkXHJcbiAgaGl0ID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgaWQ6IG51bWJlciwgb3B0aW9uczogeyBzb2NrZXRJZDogc3RyaW5nOyBjbGllbnRJZDogbnVtYmVyIH0pIHtcclxuICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAnJylcclxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKVxyXG4gICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcylcclxuXHJcbiAgICB0aGlzLnNldEZyYW1lKDApXHJcblxyXG4gICAgdGhpcy5zb2NrZXRJZCA9IG9wdGlvbnMuc29ja2V0SWRcclxuICAgIHRoaXMuY2xpZW50SWQgPSBvcHRpb25zLmNsaWVudElkXHJcblxyXG4gICAgdGhpcy5zZXROZXdQb3NpdGlvbigpXHJcbiAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKS5zZXRPcmlnaW4oMClcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLmJvZHkuc2V0U2l6ZSgzMiwgNDgpXHJcblxyXG4gICAgLy8gbWF0dGVySlMgdXNlcyBhbiBpZCBwZXIgb2JqZWN0LCBzbyBJIGRvIHRoZSBzYW1lIGhlcmUgdG8gYmUgY29uc2lzdGVudFxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5pZCA9IGlkLnRvU3RyaW5nKClcclxuICB9XHJcblxyXG4gIHNldE5ld1Bvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbihQaGFzZXIuTWF0aC5STkQuaW50ZWdlckluUmFuZ2UoMCwgMTAwMCksIFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgxMDAsIDMwMCkpXHJcbiAgfVxyXG5cclxuICBwb3N0VXBkYXRlKCkge1xyXG4gICAgdGhpcy5wcmV2UG9zaXRpb24gPSB7IC4uLnRoaXMuYm9keS5wb3NpdGlvbiB9XHJcbiAgICB0aGlzLnByZXZEZWFkID0gdGhpcy5kZWFkXHJcbiAgICB0aGlzLnByZXZDb2xvciA9IHRoaXMuY29sb3JcclxuICB9XHJcblxyXG4gIGdvdEhpdCgpIHtcclxuICAgIGlmICh0aGlzLmhpdCkgcmV0dXJuXHJcbiAgICB0aGlzLmhpdCA9IHRydWVcclxuICAgIHRoaXMuY29sb3IgPSAweGZmMDAwMFxyXG5cclxuICAgIHRoaXMuc2NlbmUudGltZS5hZGRFdmVudCh7XHJcbiAgICAgIGRlbGF5OiAzNTAwLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNvbG9yID0gMHhmZmZmZmZcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5hY3RpdmUpIHJldHVyblxyXG4gICAgaWYgKCF0aGlzLnNob3VsZFVwZGF0ZSkgcmV0dXJuXHJcbiAgICB0aGlzLnNob3VsZFVwZGF0ZSA9IGZhbHNlXHJcblxyXG4gICAgaWYgKHRoaXMudXBkYXRlcy5sZWZ0KSB0aGlzLnNldFZlbG9jaXR5WCgtNDAwKVxyXG4gICAgZWxzZSBpZiAodGhpcy51cGRhdGVzLnJpZ2h0KSB0aGlzLnNldFZlbG9jaXR5WCg0MDApXHJcbiAgICBlbHNlIHRoaXMuc2V0VmVsb2NpdHlYKDApXHJcblxyXG4gICAgaWYgKHRoaXMudXBkYXRlcy51cCAmJiB0aGlzLmJvZHkuYmxvY2tlZC5kb3duKSB0aGlzLnNldFZlbG9jaXR5WSgtNjAwKVxyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5ib2R5LnZlbG9jaXR5LnggPj0gMC41ID8gJ3JpZ2h0JyA6IHRoaXMuYm9keS52ZWxvY2l0eS54IDw9IC0wLjUgPyAnbGVmdCcgOiAnaWRsZSdcclxuXHJcbiAgICB0aGlzLnVwZGF0ZXMgPSB7fVxyXG4gIH1cclxuXHJcbiAgcmV2aXZlKGNsaWVudElkOiBudW1iZXIsIHNvY2tldElkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpXHJcbiAgICB0aGlzLmRlYWQgPSBmYWxzZVxyXG4gICAgdGhpcy5zZXROZXdQb3NpdGlvbigpXHJcbiAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWRcclxuICAgIHRoaXMuc29ja2V0SWQgPSBzb2NrZXRJZFxyXG4gIH1cclxuXHJcbiAga2lsbCgpIHtcclxuICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKVxyXG4gICAgdGhpcy5kZWFkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgc2V0VXBkYXRlcyh1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRoaXMuc2hvdWxkVXBkYXRlID0gdHJ1ZVxyXG4gICAgdGhpcy51cGRhdGVzID0gdXBkYXRlc1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xyXG4gIG1hcmdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XHJcbiAgdGlsZVNpemUgPSA5NVxyXG4gIGxldmVscyA9IFtcclxuICAgIFtcclxuICAgICAgJyAgICBYWFggIE0gICAgTSAgICAgIFhYWFhYWCcsXHJcbiAgICAgICcgICAgICAgIFhYICAgICAgIFggWCAgICAgICAnLFxyXG4gICAgICAnIFhYICBYIFggICBYWFhYWCAgICAgWCAgICAgJyxcclxuICAgICAgJyAgIE0gICAgTSAgICAgICAgIE0gWCAgICBHICcsXHJcbiAgICAgICdYWCAgICBYWFhYICAgICAgIFhYWCAgICAgWCAnLFxyXG4gICAgICAnWFhYWCAgICAgICBYICAgWCAgICAgICBYICAgJ1xyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICcsXHJcbiAgICAgICcgICAgICAgIE0gICAgICAgIFggWCAgICAgICAnLFxyXG4gICAgICAnIFhYICBYIFhYWFhYIFhYWCAgICAgWCAgICAgJyxcclxuICAgICAgJyBHICAgICAgTSAgICAgICAgICAgWCAgICAgICcsXHJcbiAgICAgICdYWCAgICBYWFhYIE0gICAgIFhYWCAgICAgWCAnLFxyXG4gICAgICAnWFhYWCBYWFhYWFhYWFggWCAgICAgICBYICAgJ1xyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgJyAgICAgICAgICAgTSAgICAgICBHICAgICAgICcsXHJcbiAgICAgICcgICAgICAgIFhYWFhYWFggIFggWCAgICAgICAnLFxyXG4gICAgICAnIFhYICBYIFhYWFhYIFhYWCAgICAgWCAgICAgJyxcclxuICAgICAgJyAgICAgICAgTSAgICAgICAgICAgWCAgICAgICcsXHJcbiAgICAgICdYWCAgICBYWFhYICAgICAgIFhYWCAgICAgWCAnLFxyXG4gICAgICAnWFhYWCBYWFhYWFhYWFggWCAgICAgICBYICAgJ1xyXG4gICAgXVxyXG4gIF1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHB1YmxpYyB3b3JsZDogYW55LCBwdWJsaWMgbGV2ZWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5tYXJnaW4gPSB7XHJcbiAgICAgIHk6IDMgKiB0aGlzLnRpbGVTaXplICsgMTEgKyA0NSwgLy8gNDUgaXMgdGhlIGhhbGYgb2YgYSBib3hcclxuICAgICAgeDogd29ybGQueCArIDQ1XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbGxpZGVSZWN0KFxyXG4gICAgcmVjdDE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0sXHJcbiAgICByZWN0MjogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfVxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxyXG4gICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPiByZWN0Mi54ICYmXHJcbiAgICAgIHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPiByZWN0Mi55XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBnZXRUaWxlQnlDb29yZGluYXRlcyhjb29yZGluYXRlczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgICBsZXQgeyB4OiB4MSwgeTogeTEgfSA9IGNvb3JkaW5hdGVzXHJcblxyXG4gICAgbGV0IHRpbGUgPSB7IHRpbGU6ICcnLCB4OiAtMSwgeTogLTEgfVxyXG5cclxuICAgIHRoaXMuZ2V0TGV2ZWwoKS5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3cubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICBsZXQgeDIgPSB4ICogdGhpcy50aWxlU2l6ZSArIHRoaXMubWFyZ2luLnhcclxuICAgICAgICBsZXQgeTIgPSB5ICogdGhpcy50aWxlU2l6ZSArIHRoaXMubWFyZ2luLnlcclxuICAgICAgICB4MiAtPSA0NSAvLyBtaW51cyB0aGUgaGFsZiBvZiBhIHRoZSBib3hcclxuICAgICAgICB5MiAtPSA0NSAvLyBtaW51cyB0aGUgaGFsZiBvZiBhIHRoZSBib3hcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmNvbGxpZGVSZWN0KFxyXG4gICAgICAgICAgICB7IHg6IHgxLCB5OiB5MSwgd2lkdGg6IDEsIGhlaWdodDogMSB9LFxyXG4gICAgICAgICAgICB7IHg6IHgyLCB5OiB5Miwgd2lkdGg6IHRoaXMudGlsZVNpemUsIGhlaWdodDogdGhpcy50aWxlU2l6ZSB9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aWxlID0geyB0aWxlOiByb3dbeF0sIHg6IHgyLCB5OiB5MiB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdGlsZVxyXG4gIH1cclxuXHJcbiAgY291bnRUb3RhbExldmVscygpIHtcclxuICAgIHJldHVybiB0aGlzLmxldmVscy5sZW5ndGhcclxuICB9XHJcblxyXG4gIGdldExldmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNLSU5TIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVtbXkgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICBza2luID0gU0tJTlMuTVVNTVlcclxuICBpZDogc3RyaW5nXHJcbiAgZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnXHJcbiAgZGVhZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGlkOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgJycpXHJcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcylcclxuICAgIHNjZW5lLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMpXHJcblxyXG4gICAgdGhpcy5zZXRGcmFtZSgwKVxyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdsZWZ0JyA6ICdyaWdodCdcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLmJvZHkuc2V0U2l6ZSgzNywgNDUpXHJcblxyXG4gICAgdGhpcy5pZCA9IGlkLnRvU3RyaW5nKClcclxuICB9XHJcblxyXG4gIGtpbGwoKSB7XHJcbiAgICBpZiAodGhpcy5kZWFkKSByZXR1cm5cclxuICAgIHRoaXMuZGVhZCA9IHRydWVcclxuICAgIHRoaXMuc2NlbmUudGltZS5hZGRFdmVudCh7XHJcbiAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gKHRoaXMuZGVhZCA9IGZhbHNlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldExvb2tBaGVhZCgpIHtcclxuICAgIGxldCB4ID0gdGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcgPyB0aGlzLmJvZHkucmlnaHQgKyA1IDogdGhpcy5ib2R5LmxlZnQgLSA1XHJcbiAgICBsZXQgeSA9IHRoaXMuYm9keS5ib3R0b20gKyAxMFxyXG4gICAgcmV0dXJuIHsgeCwgeSB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEaXJlY3Rpb24odGlsZTogeyB0aWxlOiBzdHJpbmc7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgIGlmICh0aWxlLnRpbGUgIT09ICdYJykge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnID8gMzUgOiAtMzVcclxuICAgIGlmICh0aGlzLmRlYWQpIHZlbG9jaXR5ID0gMFxyXG4gICAgdGhpcy5zZXRWZWxvY2l0eVgodmVsb2NpdHkpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLm1vdmUoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTS0lOUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICBza2luID0gU0tJTlMuU1RBUlxyXG4gIGlkOiBzdHJpbmdcclxuICBzeW5jID0gdHJ1ZVxyXG4gIHRpbnQgPSAweDAwZmYwMFxyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBpZDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgc3VwZXIoc2NlbmUsIHgsIHksICcnKVxyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpXHJcbiAgICBzY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzLCB0cnVlKVxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuYm9keS5zZXRTaXplKDI0LCAyMiwgZmFsc2UpXHJcblxyXG4gICAgdGhpcy5pZCA9IGlkLnRvU3RyaW5nKClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdwaGFzZXInXHJcblxyXG5jb25zdCBjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgdHlwZTogUGhhc2VyLkhFQURMRVNTLFxyXG4gIHBhcmVudDogJ3BoYXNlci1nYW1lJyxcclxuICB3aWR0aDogMTI4MCxcclxuICBoZWlnaHQ6IDcyMCxcclxuICBiYW5uZXI6IGZhbHNlLFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBhdWRpbzogZmFsc2VcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25maWdcclxuXHJcbmV4cG9ydCBjb25zdCBhcmNhZGVQaHlzaWNzID0ge1xyXG4gIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gIGFyY2FkZToge1xyXG4gICAgZ3Jhdml0eTogeyB5OiAxNTAwIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXR0ZXJQaHlzaWNzID0ge1xyXG4gIGRlZmF1bHQ6ICdtYXR0ZXInLFxyXG4gIG1hdHRlcjoge1xyXG4gICAgZ3Jhdml0eToge1xyXG4gICAgICB5OiAyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnQGdlY2tvcy5pby9waGFzZXItb24tbm9kZWpzJ1xyXG5pbXBvcnQgY29tbW9uQ29uZmlnLCB7IGFyY2FkZVBoeXNpY3MsIG1hdHRlclBoeXNpY3MgfSBmcm9tICcuL2NvbmZpZydcclxuXHJcbmltcG9ydCBBcmNhZGVTY2VuZSBmcm9tICcuL3NjZW5lcy9hcmNhZGVTY2VuZSdcclxuaW1wb3J0IE1hdHRlclNjZW5lIGZyb20gJy4vc2NlbmVzL21hdHRlclNjZW5lJ1xyXG5pbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcpIHtcclxuICAgIHN1cGVyKGNvbmZpZylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEdhbWUgPSAocm9vbU1hbmFnZXI6IFJvb21NYW5hZ2VyLCByb29tSWQ6IHN0cmluZywgb3B0aW9uczogeyBzY2VuZTogc3RyaW5nOyBsZXZlbDogbnVtYmVyIH0pID0+IHtcclxuICBsZXQgY29uZmlnID0geyAuLi5jb21tb25Db25maWcgfVxyXG5cclxuICBpZiAob3B0aW9ucy5zY2VuZSA9PT0gJ0FyY2FkZVNjZW5lJykge1xyXG4gICAgY29uZmlnLnNjZW5lID0gW0FyY2FkZVNjZW5lXVxyXG4gICAgY29uZmlnLnBoeXNpY3MgPSBhcmNhZGVQaHlzaWNzXHJcbiAgfVxyXG4gIGlmIChvcHRpb25zLnNjZW5lID09PSAnTWF0dGVyU2NlbmUnKSB7XHJcbiAgICBjb25maWcuc2NlbmUgPSBbTWF0dGVyU2NlbmVdXHJcbiAgICBjb25maWcucGh5c2ljcyA9IG1hdHRlclBoeXNpY3NcclxuICB9XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25maWcuY3VzdG9tRW52aXJvbm1lbnQgPSB0cnVlXHJcblxyXG4gIC8vIGEgdmVyeSBoYWNraWUgdHJpY2sgdG8gcGFzcyBzb21lIGN1c3RvbSBkYXRhXHJcbiAgLy8gYnV0IGl0IHdvcmsgd2VsbCA6KVxyXG4gIGNvbmZpZy5jYWxsYmFja3MgPSB7XHJcbiAgICBwcmVCb290OiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IGxldmVsOiArb3B0aW9ucy5sZXZlbCwgcm9vbU1hbmFnZXIsIHJvb21JZCB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFBoYXNlckdhbWUoY29uZmlnKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVcclxuIiwiaW1wb3J0IE1hdHRlckdhbWVPYmplY3QgZnJvbSAnLi9tYXR0ZXJHYW1lT2JqZWN0J1xyXG5pbXBvcnQgeyBTS0lOUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCBleHRlbmRzIE1hdHRlckdhbWVPYmplY3Qge1xyXG4gIGxpZmVUaW1lOiBudW1iZXJcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgU0tJTlMuQk9YKVxyXG5cclxuICAgIHRoaXMuYWRkQm9keShcclxuICAgICAgdGhpcy5NYXR0ZXIuQm9kaWVzLnJlY3RhbmdsZSh4LCB5LCA5NSwgOTUsIHtcclxuICAgICAgICBmcmljdGlvbjogMC4xLFxyXG4gICAgICAgIGNoYW1mZXI6IHsgcmFkaXVzOiAxNCB9LFxyXG4gICAgICAgIGxhYmVsOiAnYm94JyxcclxuICAgICAgICBkZW5zaXR5OiAwLjAwMDEyNVxyXG4gICAgICB9KVxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMubGlmZVRpbWUgPSBQaGFzZXIuTWF0aC5STkQuaW50ZWdlckluUmFuZ2UoMTAwMCAqIDE1LCAxMDAwICogNDUpXHJcbiAgICB0aGlzLnNldFRpbWVyKClcclxuICB9XHJcblxyXG4gIHNldFRpbWVyKCkge1xyXG4gICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgZGVsYXk6IHRoaXMubGlmZVRpbWUsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5raWxsKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldml2ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgc3VwZXIucmV2aXZlKHgsIHkpXHJcbiAgICB0aGlzLnNldFRpbWVyKClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IE1hdHRlckdhbWVPYmplY3QgZnJvbSAnLi9tYXR0ZXJHYW1lT2JqZWN0J1xyXG5pbXBvcnQgeyBTS0lOUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1ZGUgZXh0ZW5kcyBNYXR0ZXJHYW1lT2JqZWN0IHtcclxuICBtYXhWZWxvY2l0eSA9IHtcclxuICAgIHg6IDYsXHJcbiAgICB5OiAxMlxyXG4gIH1cclxuICB3aWR0aCA9IDMyXHJcbiAgaGVpZ2h0ID0gNDhcclxuXHJcbiAgc2hvdWxkVXBkYXRlID0gdHJ1ZVxyXG5cclxuICBzZW5zb3JzOiBhbnlcclxuICBtYWluQm9keTogYW55XHJcbiAgdHJhbnNsYXRlWCA9IDBcclxuICB0cmFuc2xhdGVZID0gMFxyXG5cclxuICBqdW1wTG9ja2VkID0gZmFsc2VcclxuXHJcbiAgbW92ZSA9IHtcclxuICAgIGxlZnRBbGxvd2VkOiB0cnVlLFxyXG4gICAgcmlnaHRBbGxvd2VkOiB0cnVlXHJcbiAgfVxyXG4gIHRvdWNoaW5nID0ge1xyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgICBib3R0b206IGZhbHNlXHJcbiAgfVxyXG4gIHVwZGF0ZXM6IGFueSA9IHt9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBwdWJsaWMgY2xpZW50SWQ6IG51bWJlciwgcHVibGljIHNvY2tldElkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHNjZW5lLCBTS0lOUy5EVURFKVxyXG5cclxuICAgIGxldCBoID0gdGhpcy5oZWlnaHRcclxuICAgIGxldCB3ID0gdGhpcy53aWR0aCAtIDRcclxuXHJcbiAgICBjb25zb2xlLmxvZygnY2xpZW50SWQnLCBjbGllbnRJZClcclxuXHJcbiAgICB0aGlzLm1haW5Cb2R5ID0gdGhpcy5NYXR0ZXIuQm9kaWVzLnJlY3RhbmdsZSh4LCB5LCB3LCBoLCB7XHJcbiAgICAgIGRlbnNpdHk6IDAuMDAxLFxyXG4gICAgICBmcmljdGlvbjogMC4xLFxyXG4gICAgICBmcmljdGlvblN0YXRpYzogMC4xLFxyXG4gICAgICBsYWJlbDogJ2R1ZGUnLFxyXG4gICAgICBjaGFtZmVyOiB7IHJhZGl1czogMTAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2Vuc29ycyA9IHtcclxuICAgICAgYm90dG9tOiB0aGlzLk1hdHRlci5Cb2RpZXMucmVjdGFuZ2xlKHgsIHkgKyBoIC8gMiArIDIgLyAyLCB3ICogMC4zNSwgNCwge1xyXG4gICAgICAgIGlzU2Vuc29yOiB0cnVlXHJcbiAgICAgIH0pLFxyXG4gICAgICBsZWZ0OiB0aGlzLk1hdHRlci5Cb2RpZXMucmVjdGFuZ2xlKHggLSB3IC8gMiAtIDQgLyAyLCB5ICsgMCwgNCwgaCAqIDAuOSwge1xyXG4gICAgICAgIGlzU2Vuc29yOiB0cnVlXHJcbiAgICAgIH0pLFxyXG4gICAgICByaWdodDogdGhpcy5NYXR0ZXIuQm9kaWVzLnJlY3RhbmdsZSh4ICsgdyAvIDIgKyA0IC8gMiwgeSArIDAsIDQsIGggKiAwLjksIHtcclxuICAgICAgICBpc1NlbnNvcjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRCb2RpZXMoW3RoaXMubWFpbkJvZHksIHRoaXMuc2Vuc29ycy5ib3R0b20sIHRoaXMuc2Vuc29ycy5sZWZ0LCB0aGlzLnNlbnNvcnMucmlnaHRdKVxyXG5cclxuICAgIHRoaXMuc2V0U2Vuc29yTGFiZWwoKVxyXG5cclxuICAgIHRoaXMuTWF0dGVyLkJvZHkuc2V0SW5lcnRpYSh0aGlzLmJvZHksIEluZmluaXR5KSAvLyBzZXRGaXhlZFJvdGF0aW9uXHJcbiAgfVxyXG5cclxuICBzZXRUcmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZVggPSB4XHJcbiAgICB0aGlzLnRyYW5zbGF0ZVkgPSB5XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGUoKSB7XHJcbiAgICBpZiAodGhpcy50cmFuc2xhdGVYICE9PSAwIHx8IHRoaXMudHJhbnNsYXRlWSAhPT0gMCkge1xyXG4gICAgICB0aGlzLk1hdHRlci5Cb2R5LnNldFBvc2l0aW9uKHRoaXMuYm9keSwge1xyXG4gICAgICAgIHg6IHRoaXMuYm9keS5wb3NpdGlvbi54ICsgdGhpcy50cmFuc2xhdGVYLFxyXG4gICAgICAgIHk6IHRoaXMuYm9keS5wb3NpdGlvbi55ICsgdGhpcy50cmFuc2xhdGVZXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudHJhbnNsYXRlWCA9IDBcclxuICAgICAgdGhpcy50cmFuc2xhdGVZID0gMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2Vuc29yTGFiZWwoKSB7XHJcbiAgICB0aGlzLnNlbnNvcnMuYm90dG9tLmxhYmVsID0gYGR1ZGVCb3R0b21TZW5zb3JfJHt0aGlzLmNsaWVudElkfWBcclxuICAgIHRoaXMuc2Vuc29ycy5sZWZ0LmxhYmVsID0gYGR1ZGVMZWZ0U2Vuc29yXyR7dGhpcy5jbGllbnRJZH1gXHJcbiAgICB0aGlzLnNlbnNvcnMucmlnaHQubGFiZWwgPSBgZHVkZVJpZ2h0U2Vuc29yXyR7dGhpcy5jbGllbnRJZH1gXHJcbiAgfVxyXG5cclxuICByZXZpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNsaWVudElkOiBudW1iZXIsIHNvY2tldElkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyLnJldml2ZSh4LCB5KVxyXG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkXHJcbiAgICB0aGlzLnNvY2tldElkID0gc29ja2V0SWRcclxuICAgIHRoaXMuc2V0U2Vuc29yTGFiZWwoKVxyXG4gIH1cclxuXHJcbiAgbG9ja0p1bXAoKSB7XHJcbiAgICB0aGlzLmp1bXBMb2NrZWQgPSB0cnVlXHJcbiAgICB0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICBkZWxheTogMjUwLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gKHRoaXMuanVtcExvY2tlZCA9IGZhbHNlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldFVwZGF0ZXModXBkYXRlczogYW55KSB7XHJcbiAgICB0aGlzLnNob3VsZFVwZGF0ZSA9IHRydWVcclxuICAgIHRoaXMudXBkYXRlcyA9IHVwZGF0ZXNcclxuICB9XHJcblxyXG4gIHVwZGF0ZShmb3JjZSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbiA9ICdpZGxlJ1xyXG5cclxuICAgIGlmICghZm9yY2UgJiYgIXRoaXMuc2hvdWxkVXBkYXRlKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCB1cGRhdGVzID0gdGhpcy51cGRhdGVzXHJcblxyXG4gICAgbGV0IHggPSB1cGRhdGVzLmxlZnQgJiYgdGhpcy5tb3ZlLmxlZnRBbGxvd2VkID8gLTAuMDEgOiB1cGRhdGVzLnJpZ2h0ICYmIHRoaXMubW92ZS5yaWdodEFsbG93ZWQgPyAwLjAxIDogMFxyXG4gICAgbGV0IHkgPSAhdGhpcy5qdW1wTG9ja2VkICYmIHVwZGF0ZXMudXAgJiYgdGhpcy50b3VjaGluZy5ib3R0b20gPyAtdGhpcy5tYXhWZWxvY2l0eS55IDogMFxyXG4gICAgaWYgKHkgIT09IDApIHRoaXMubG9ja0p1bXAoKVxyXG5cclxuICAgIC8vIFdlIHVzZSBzZXRWZWxvY2l0eSB0byBqdW1wIGFuZCBhcHBseUZvcmNlIHRvIG1vdmUgcmlnaHQgYW5kIGxlZnRcclxuXHJcbiAgICAvLyBKdW1wXHJcbiAgICBpZiAoeSAhPT0gMCkgdGhpcy5NYXR0ZXIuQm9keS5zZXRWZWxvY2l0eSh0aGlzLmJvZHksIHsgeDogdGhpcy5ib2R5LnZlbG9jaXR5LngsIHkgfSlcclxuXHJcbiAgICAvLyBNb3ZlXHJcbiAgICB0aGlzLk1hdHRlci5Cb2R5LmFwcGx5Rm9yY2UodGhpcy5ib2R5LCB7IHg6IDAsIHk6IDAgfSwgeyB4LCB5OiAwIH0pXHJcblxyXG4gICAgLy8gY2hlY2sgbWF4IHZlbG9jaXR5XHJcbiAgICBsZXQgbWF4VmVsb2NpdHlYID1cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPiB0aGlzLm1heFZlbG9jaXR5LnggPyAxIDogdGhpcy5ib2R5LnZlbG9jaXR5LnggPCAtdGhpcy5tYXhWZWxvY2l0eS54ID8gLTEgOiBudWxsXHJcbiAgICBpZiAobWF4VmVsb2NpdHlYKVxyXG4gICAgICB0aGlzLk1hdHRlci5Cb2R5LnNldFZlbG9jaXR5KHRoaXMuYm9keSwgeyB4OiB0aGlzLm1heFZlbG9jaXR5LnggKiBtYXhWZWxvY2l0eVgsIHk6IHRoaXMuYm9keS52ZWxvY2l0eS55IH0pXHJcblxyXG4gICAgLy8gc2V0IHZlbG9jaXR5IFggdG8gemVyb1xyXG4gICAgaWYgKCF1cGRhdGVzLmxlZnQgJiYgIXVwZGF0ZXMucmlnaHQpIHtcclxuICAgICAgdGhpcy5NYXR0ZXIuQm9keS5zZXRWZWxvY2l0eSh0aGlzLmJvZHksIHsgeDogdGhpcy5ib2R5LnZlbG9jaXR5LnggKiAwLjUsIHk6IHRoaXMuYm9keS52ZWxvY2l0eS55IH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmJvZHkudmVsb2NpdHkueCA+PSAwLjUgPyAncmlnaHQnIDogdGhpcy5ib2R5LnZlbG9jaXR5LnggPD0gLTAuNSA/ICdsZWZ0JyA6ICdpZGxlJ1xyXG5cclxuICAgIHRoaXMudHJhbnNsYXRlKClcclxuXHJcbiAgICB0aGlzLnRvdWNoaW5nID0ge1xyXG4gICAgICBsZWZ0OiBmYWxzZSxcclxuICAgICAgcmlnaHQ6IGZhbHNlLFxyXG4gICAgICBib3R0b206IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLm1vdmUgPSB7XHJcbiAgICAgIGxlZnRBbGxvd2VkOiB0cnVlLFxyXG4gICAgICByaWdodEFsbG93ZWQ6IHRydWVcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlcyA9IHt9XHJcbiAgICB0aGlzLnNob3VsZFVwZGF0ZSA9IGZhbHNlXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHRlckdhbWVPYmplY3Qge1xyXG4gIE1hdHRlcjogYW55XHJcbiAgYm9keTogYW55XHJcbiAgY2xpZW50SWQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxyXG4gIGRlYWQgPSBmYWxzZVxyXG4gIHByZXZEZWFkID0gZmFsc2VcclxuICBhbmdsZSA9IDAgLy8gaW4gREVHXHJcbiAgcHJldkFuZ2xlID0gLTEgLy8gaW4gREVHXHJcbiAgYW5pbWF0aW9uOiBzdHJpbmcgPSAnaWRsZSdcclxuICBwcmV2QW5pbWF0aW9uOiBzdHJpbmcgPSAnaWRsZSdcclxuICB0aW50ID0gMHgwMDAwMDBcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHB1YmxpYyBza2luOiBudW1iZXIpIHtcclxuICAgIHRoaXMuTWF0dGVyID0gUGhhc2VyLlBoeXNpY3MuTWF0dGVyLk1hdHRlclxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFkZEJvZHkoYm9keTogYW55KSB7XHJcbiAgICB0aGlzLmJvZHkgPSBib2R5XHJcbiAgICB0aGlzLmJvZHkucHJldlZlbG9jaXR5ID0geyB4OiAwLCB5OiAwIH1cclxuICAgIHRoaXMuc2NlbmUubWF0dGVyLndvcmxkLmFkZCh0aGlzLmJvZHkpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWRkQm9kaWVzKGJvZGllczogYW55W10pIHtcclxuICAgIHRoaXMuYm9keSA9IHRoaXMuTWF0dGVyLkJvZHkuY3JlYXRlKHtcclxuICAgICAgcGFydHM6IGJvZGllcy5tYXAoYm9keSA9PiBib2R5KVxyXG4gICAgfSlcclxuICAgIHRoaXMuYm9keS5wcmV2VmVsb2NpdHkgPSB7IHg6IDAsIHk6IDAgfVxyXG4gICAgdGhpcy5zY2VuZS5tYXR0ZXIud29ybGQuYWRkKHRoaXMuYm9keSlcclxuICB9XHJcblxyXG4gIHByZVVwZGF0ZShhcmc6IGFueSA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5hbmdsZSA9IFBoYXNlci5NYXRoLlJhZFRvRGVnKHRoaXMuYm9keS5hbmdsZSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZShhcmc6IGFueSA9IHVuZGVmaW5lZCkge31cclxuXHJcbiAgcG9zdFVwZGF0ZShhcmc6IGFueSA9IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMuZGVhZCAmJiAhdGhpcy5wcmV2RGVhZCkgdGhpcy5wcmV2RGVhZCA9IHRydWVcclxuICAgIGVsc2UgaWYgKCF0aGlzLmRlYWQgJiYgdGhpcy5wcmV2RGVhZCkgdGhpcy5wcmV2RGVhZCA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5ib2R5LnByZXZWZWxvY2l0eSA9IHsgLi4udGhpcy5ib2R5LnZlbG9jaXR5IH1cclxuICAgIHRoaXMucHJldkFuZ2xlID0gdGhpcy5hbmdsZVxyXG4gICAgdGhpcy5wcmV2QW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25cclxuICB9XHJcblxyXG4gIHJldml2ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgY2xpZW50SWQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgc29ja2V0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5raWxsKGZhbHNlKVxyXG4gICAgdGhpcy5NYXR0ZXIuQm9keS5zZXRQb3NpdGlvbih0aGlzLmJvZHksIHsgeCwgeSB9KVxyXG4gIH1cclxuXHJcbiAga2lsbChkZWFkOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgdGhpcy5kZWFkID0gZGVhZFxyXG4gICAgaWYgKGRlYWQpIHRoaXMuTWF0dGVyLkJvZHkuc2V0UG9zaXRpb24odGhpcy5ib2R5LCB7IHg6IC0xMDAwLCB5OiAtMTAwMCB9KVxyXG4gICAgdGhpcy5NYXR0ZXIuU2xlZXBpbmcuc2V0KHRoaXMuYm9keSwgZGVhZClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IER1ZGUgZnJvbSAnLi9kdWRlJ1xyXG5pbXBvcnQgQm94IGZyb20gJy4vYm94J1xyXG5pbXBvcnQgTWF0dGVyR2FtZU9iamVjdCBmcm9tICcuL21hdHRlckdhbWVPYmplY3QnXHJcbmltcG9ydCBTdGFyIGZyb20gJy4vc3RhcidcclxuaW1wb3J0IHsgU0tJTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXHJcblxyXG5pbnRlcmZhY2UgR2FtZU9iamVjdEdyb3VwQWRkT3B0aW9ucyB7XHJcbiAgc29ja2V0SWQ/OiBzdHJpbmdcclxuICBjbGllbnRJZD86IG51bWJlclxyXG4gIGNhdGVnb3J5Pzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3RHcm91cCB7XHJcbiAgTWF0dGVyOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHB1YmxpYyBvYmplY3RzOiBNYXR0ZXJHYW1lT2JqZWN0W10pIHtcclxuICAgIHRoaXMuTWF0dGVyID0gUGhhc2VyLlBoeXNpY3MuTWF0dGVyLk1hdHRlclxyXG4gIH1cclxuXHJcbiAga2lsbEJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iajogYW55KSA9PiB7XHJcbiAgICAgIGlmIChvYmouYm9keS5pZCA9PT0gaWQpIG9iai5raWxsKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3RCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgIGxldCBvYmplY3QgPSB1bmRlZmluZWRcclxuICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBpZiAob2JqLmJvZHkuaWQgPT09IGlkKSBvYmplY3QgPSBvYmpcclxuICAgIH0pXHJcbiAgICByZXR1cm4gb2JqZWN0XHJcbiAgfVxyXG5cclxuICBhZGQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNraW46IG51bWJlciwgb3B0aW9uczogR2FtZU9iamVjdEdyb3VwQWRkT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgZGVhZCA9IHRoaXMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5kZWFkICYmIG9iai5za2luID09PSBza2luKVxyXG4gICAgbGV0IGFsaXZlID0gdGhpcy5vYmplY3RzLmZpbHRlcihvYmogPT4gIW9iai5kZWFkICYmIG9iai5za2luID09PSBza2luKVxyXG5cclxuICAgIGNvbnN0IHsgY2xpZW50SWQsIHNvY2tldElkLCBjYXRlZ29yeSB9ID0gb3B0aW9uc1xyXG5cclxuICAgIC8vIGFsbG93IG5vdCBtb3JlIHRoYW4gMTAwIGFsaXZlIG9iamVjdHMgcGVyIHNraW5cclxuICAgIGlmIChhbGl2ZS5sZW5ndGggPj0gMTAwKSByZXR1cm5cclxuXHJcbiAgICBsZXQgb2JqZWN0OiBNYXR0ZXJHYW1lT2JqZWN0IHwgbnVsbCA9IG51bGxcclxuXHJcbiAgICBpZiAoZGVhZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHJldml2ZSB0aGUgZmlyc3QgZGVhZCBvYmplY3QgYW5kIHNldCBpdHMgeCBhbmQgeVxyXG4gICAgICBvYmplY3QgPSBkZWFkWzBdXHJcbiAgICAgIG9iamVjdC5yZXZpdmUoeCwgeSwgY2xpZW50SWQsIHNvY2tldElkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY3JlYXRlIGEgbmV3IG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBvYmplY3RzIGFycmF5XHJcbiAgICAgIGlmIChza2luID09PSBTS0lOUy5CT1gpIG9iamVjdCA9IG5ldyBCb3godGhpcy5zY2VuZSwgeCwgeSlcclxuICAgICAgZWxzZSBpZiAoc2tpbiA9PT0gU0tJTlMuU1RBUikgb2JqZWN0ID0gbmV3IFN0YXIodGhpcy5zY2VuZSwgeCwgeSwgY2F0ZWdvcnkpXHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBjbGllbnRJZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNvY2tldElkICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICBvYmplY3QgPSBuZXcgRHVkZSh0aGlzLnNjZW5lLCB4LCB5LCBjbGllbnRJZCwgc29ja2V0SWQpXHJcbiAgICAgIGlmIChvYmplY3QpIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdClcclxuICAgIH1cclxuXHJcbiAgICAvLyBSb3RhdGUgdGhlIGJveFxyXG4gICAgLy8gVE9ETyh5YW5kZXUpIHRoaXMgc2hvdWxkIGJlIGluc2lkZSB0aGUgYm94T2JqZWN0IGNsYXNzXHJcbiAgICBpZiAoc2tpbiA9PT0gU0tJTlMuQk9YICYmIG9iamVjdCkgdGhpcy5NYXR0ZXIuQm9keS5yb3RhdGUob2JqZWN0LmJvZHksIE1hdGgucmFuZG9tKCkgKiAyKVxyXG5cclxuICAgIHJldHVybiBvYmplY3RcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IE1hdHRlckdhbWVPYmplY3QgZnJvbSAnLi9tYXR0ZXJHYW1lT2JqZWN0J1xyXG5pbXBvcnQgeyBTS0lOUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIgZXh0ZW5kcyBNYXR0ZXJHYW1lT2JqZWN0IHtcclxuICBzY2FsZTogbnVtYmVyID0gMVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzY2VuZTogUGhhc2VyLlNjZW5lLFxyXG4gICAgcHVibGljIHg6IG51bWJlcixcclxuICAgIHB1YmxpYyB5OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxyXG4gICkge1xyXG4gICAgc3VwZXIoc2NlbmUsIFNLSU5TLlNUQVIpXHJcblxyXG4gICAgaWYgKGNhdGVnb3J5ID09PSAnYmlnJykge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweGZmNzIwMFxyXG4gICAgICB0aGlzLnNjYWxlID0gM1xyXG4gICAgfVxyXG4gICAgaWYgKGNhdGVnb3J5ID09PSAnbWVkaXVtJykge1xyXG4gICAgICB0aGlzLnNjYWxlID0gMlxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkQm9keShcclxuICAgICAgdGhpcy5NYXR0ZXIuQm9kaWVzLnJlY3RhbmdsZSh4LCB5LCAyNCAqIHRoaXMuc2NhbGUsIDIyICogdGhpcy5zY2FsZSwge1xyXG4gICAgICAgIGNoYW1mZXI6IHsgcmFkaXVzOiAxNCB9LFxyXG4gICAgICAgIGxhYmVsOiAnc3RhcicsXHJcbiAgICAgICAgaXNTdGF0aWM6IHRydWUsXHJcbiAgICAgICAgaXNTZW5zb3I6IHRydWVcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIHNldFJldml2ZVRpbWVyKCkge1xyXG4gICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgZGVsYXk6IDE1MDAwLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIHN1cGVyLnJldml2ZSh0aGlzLngsIHRoaXMueSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGtpbGwoZGVhZDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIHRoaXMuZGVhZCA9IGRlYWRcclxuICAgIGlmIChkZWFkKSB0aGlzLk1hdHRlci5Cb2R5LnNldFBvc2l0aW9uKHRoaXMuYm9keSwgeyB4OiAtMTAwMCwgeTogLTEwMDAgfSlcclxuICAgIHRoaXMuTWF0dGVyLlNsZWVwaW5nLnNldCh0aGlzLmJvZHksIGRlYWQpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHdvcmxkIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L2NvbmZpZydcclxuaW1wb3J0IEJveCBmcm9tICcuLi9hcmNhZGVPYmplY3RzL2JveCdcclxuaW1wb3J0IER1ZGUgZnJvbSAnLi4vYXJjYWRlT2JqZWN0cy9kdWRlJ1xyXG5pbXBvcnQgQ3Vyc29ycyBmcm9tICcuLi8uLi8uLi9jbGllbnQvY29tcG9uZW50cy9jdXJzb3JzJ1xyXG5pbXBvcnQgU3RhciBmcm9tICcuLi9hcmNhZGVPYmplY3RzL3N0YXInXHJcbmltcG9ydCBNdW1teSBmcm9tICcuLi9hcmNhZGVPYmplY3RzL211bW15J1xyXG5pbXBvcnQgTWFwIGZyb20gJy4uL2FyY2FkZU9iamVjdHMvbWFwJ1xyXG5pbXBvcnQgU3luY01hbmFnZXIgZnJvbSAnLi4vLi4vbWFuYWdlcnMvc3luY01hbmFnZXInXHJcbmltcG9ydCBSb29tTWFuYWdlciBmcm9tICcuLi8uLi9tYW5hZ2Vycy9yb29tTWFuYWdlcidcclxuaW1wb3J0IHsgU0tJTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGlkID0gMFxyXG4gIGR1ZGVHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwXHJcbiAgYm94R3JvdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxyXG4gIG11bW15R3JvdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxyXG4gIHN0YXI6IFN0YXJcclxuICBkZWJ1ZzogYW55ID0ge31cclxuICBsZXZlbCA9IDBcclxuICBtYXA6IE1hcFxyXG4gIG9iamVjdHNUb1N5bmM6IGFueSA9IHt9XHJcbiAgdGljayA9IDBcclxuICByb29tTWFuYWdlcjogUm9vbU1hbmFnZXJcclxuICByb29tSWQ6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHN1cGVyKHsga2V5OiAnTWFpblNjZW5lJywgcGx1Z2luczogUEhZU0lDU19ERUJVRyA/IG51bGwgOiBbJ0Nsb2NrJ10sIGFjdGl2ZTogZmFsc2UsIGNhbWVyYXM6IG51bGwgfSlcclxuICAgIC8vIHNlZSBhbGwgc2NlbmUgcGx1Z2luczpcclxuICAgIC8vIFBoYXNlci5QbHVnaW5zLkRlZmF1bHRTY2VuZVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9zcmMvcGx1Z2lucy9EZWZhdWx0UGx1Z2lucy5qcyNMNzZcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGUgYSBuZXcgb2JqZWN0IGlkICovXHJcbiAgbmV3SWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZCsrXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGNvbnN0IHsgbGV2ZWwgPSAwLCByb29tSWQsIHJvb21NYW5hZ2VyIH0gPSB0aGlzLmdhbWUuY29uZmlnLnByZUJvb3QoKVxyXG4gICAgICB0aGlzLmxldmVsID0gbGV2ZWxcclxuICAgICAgdGhpcy5yb29tTWFuYWdlciA9IHJvb21NYW5hZ2VyXHJcbiAgICAgIHRoaXMucm9vbUlkID0gcm9vbUlkXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoIVBIWVNJQ1NfREVCVUcpIGNvbnNvbGUuZXJyb3IoJ29uSW5pdCgpIGZhaWxlZCEnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgLy8gdGhpcyB3aWxsIHN0b3AgdGhlIHNjZW5lXHJcbiAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcignc3RvcFNjZW5lJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvb21NYW5hZ2VyLnN0YXRzLnJlbW92ZVRvdGFsT2JqZWN0cyh0aGlzLnJvb21JZClcclxuICAgICAgdGhpcy5zY2VuZS5zdG9wKClcclxuICAgICAgdGhpcy5yb29tTWFuYWdlci5zdGF0cy5sb2coYFNjZW5lIGluIHJvb21JZCA8Yj4ke3RoaXMucm9vbUlkfTwvYj4gaGFzIHN0b3BwZWQhYClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5waHlzaWNzLndvcmxkLnNldEJvdW5kcyh3b3JsZC54LCB3b3JsZC55LCB3b3JsZC53aWR0aCwgd29ybGQuaGVpZ2h0KVxyXG4gICAgdGhpcy5kdWRlR3JvdXAgPSB0aGlzLmFkZC5ncm91cCgpXHJcbiAgICB0aGlzLmJveEdyb3VwID0gdGhpcy5hZGQuZ3JvdXAoKVxyXG4gICAgdGhpcy5tdW1teUdyb3VwID0gdGhpcy5hZGQuZ3JvdXAoKVxyXG4gICAgdGhpcy5tYXAgPSBuZXcgTWFwKHRoaXMsIHdvcmxkLCB0aGlzLmxldmVsKVxyXG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLm1hcC5nZXRMZXZlbCgpXHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgdGhlIGxldmVsXHJcbiAgICBsZXZlbC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3cubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICBjb25zdCB4eCA9IHggKiB0aGlzLm1hcC50aWxlU2l6ZSArIHRoaXMubWFwLm1hcmdpbi54XHJcbiAgICAgICAgY29uc3QgeXkgPSB5ICogdGhpcy5tYXAudGlsZVNpemUgKyB0aGlzLm1hcC5tYXJnaW4ueVxyXG4gICAgICAgIGlmIChyb3dbeF0gPT09ICdYJykgdGhpcy5ib3hHcm91cC5hZGQobmV3IEJveCh0aGlzLCB0aGlzLm5ld0lkKCksIHh4LCB5eSkpXHJcbiAgICAgICAgaWYgKHJvd1t4XSA9PT0gJ0cnKSB0aGlzLnN0YXIgPSBuZXcgU3Rhcih0aGlzLCB0aGlzLm5ld0lkKCksIHh4LCB5eSlcclxuICAgICAgICBpZiAocm93W3hdID09PSAnTScpIHRoaXMubXVtbXlHcm91cC5hZGQobmV3IE11bW15KHRoaXMsIHRoaXMubmV3SWQoKSwgeHgsIHl5KSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoUEhZU0lDU19ERUJVRykge1xyXG4gICAgICB0aGlzLmFkZFxyXG4gICAgICAgIC50ZXh0KDI0LCAyNCwgJ1BoeXNpY3MgRGVidWdnaW5nIFZlcnNpb25cXG5Nb3ZlIHdpdGggQXJyb3cgS2V5cycsIHtcclxuICAgICAgICAgIGZvbnRTaXplOiAzNlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNldFNjcm9sbEZhY3RvcigwKVxyXG4gICAgICAgIC5zZXRPcmlnaW4oMClcclxuICAgICAgICAuc2V0QWxwaGEoMC42KVxyXG4gICAgICAvLyBtb2NrIHNvY2tldFxyXG4gICAgICB0aGlzLmRlYnVnLnNvY2tldCA9IHsgZW1pdDogKCkgPT4ge30gfVxyXG4gICAgICB0aGlzLmRlYnVnLmN1cnNvcnMgPSBuZXcgQ3Vyc29ycyh0aGlzLCB0aGlzLmRlYnVnLnNvY2tldClcclxuICAgICAgdGhpcy5kZWJ1Zy5kdWRlID0gbmV3IER1ZGUodGhpcywgdGhpcy5uZXdJZCgpLCB7IGNsaWVudElkOiA1NTU1NSwgc29ja2V0SWQ6ICdzb21lLXNvY2tldC1pZCcgfSlcclxuICAgICAgdGhpcy5kdWRlR3JvdXAuYWRkKHRoaXMuZGVidWcuZHVkZSlcclxuXHJcbiAgICAgIC8vIHRoaXMgaGVscHMgZGVidWdnaW5nXHJcbiAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9pbnRlci53b3JsZFgsIHBvaW50ZXIud29ybGRZKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFwLmdldFRpbGVCeUNvb3JkaW5hdGVzKHsgeDogcG9pbnRlci53b3JsZFgsIHk6IHBvaW50ZXIud29ybGRZIH0pKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdjcmVhdGVEdWRlJywgKGNsaWVudElkOiBudW1iZXIsIHNvY2tldElkOiBzdHJpbmcpID0+IHtcclxuICAgICAgbGV0IGR1ZGU6IER1ZGUgPSB0aGlzLmR1ZGVHcm91cC5nZXRGaXJzdERlYWQoKVxyXG4gICAgICBpZiAoZHVkZSkge1xyXG4gICAgICAgIGR1ZGUucmV2aXZlKGNsaWVudElkLCBzb2NrZXRJZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkdWRlID0gbmV3IER1ZGUodGhpcywgdGhpcy5uZXdJZCgpLCB7IGNsaWVudElkLCBzb2NrZXRJZCB9KVxyXG4gICAgICAgIHRoaXMuZHVkZUdyb3VwLmFkZChkdWRlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdVJyAvKiBzaG9ydCBmb3IgdXBkYXRlRHVkZSAqLywgKHJlczogYW55KSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgbGV0IGR1ZGVzOiBEdWRlW10gPSB0aGlzLmR1ZGVHcm91cC5jaGlsZHJlbi5nZXRBcnJheSgpLmZpbHRlcigoZHVkZTogRHVkZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkdWRlLmNsaWVudElkICYmIGR1ZGUuY2xpZW50SWQgPT09IHJlcy5jbGllbnRJZFxyXG4gICAgICB9KVxyXG4gICAgICBpZiAoZHVkZXNbMF0pIHtcclxuICAgICAgICBsZXQgYiA9IHJlcy51cGRhdGVzXHJcbiAgICAgICAgbGV0IHVwZGF0ZXMgPSB7XHJcbiAgICAgICAgICBsZWZ0OiBiID09PSAxIHx8IGIgPT09IDUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICByaWdodDogYiA9PT0gMiB8fCBiID09PSA2ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgdXA6IGIgPT09IDQgfHwgYiA9PT0gNiB8fCBiID09PSA1ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgbm9uZTogYiA9PT0gOCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBkdWRlc1swXS5zZXRVcGRhdGVzKHVwZGF0ZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ3JlbW92ZUR1ZGUnLCAoY2xpZW50SWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuZHVkZUdyb3VwLmNoaWxkcmVuLml0ZXJhdGUoKGR1ZGU6IER1ZGUpID0+IHtcclxuICAgICAgICBpZiAoZHVkZS5jbGllbnRJZCA9PT0gY2xpZW50SWQpIHtcclxuICAgICAgICAgIGR1ZGUua2lsbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuZHVkZUdyb3VwLCB0aGlzLmJveEdyb3VwKVxyXG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLm11bW15R3JvdXAsIHRoaXMuYm94R3JvdXApXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5tdW1teUdyb3VwLCB0aGlzLmR1ZGVHcm91cCwgKG11bW15OiBNdW1teSwgZHVkZTogRHVkZSkgPT4ge1xyXG4gICAgICBpZiAobXVtbXkuZGVhZCkgcmV0dXJuXHJcbiAgICAgIGlmIChtdW1teS5ib2R5LnRvdWNoaW5nLnVwICYmIGR1ZGUuYm9keS50b3VjaGluZy5kb3duKSB7XHJcbiAgICAgICAgZHVkZS5zZXRWZWxvY2l0eVkoLTMwMClcclxuICAgICAgICBtdW1teS5raWxsKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkdWRlLmdvdEhpdCgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5kdWRlR3JvdXAsIHRoaXMuc3RhciwgKGR1ZGU6IER1ZGUsIHN0YXI6IFN0YXIpID0+IHtcclxuICAgICAgaWYgKGR1ZGUuZGVhZCkgcmV0dXJuXHJcbiAgICAgIGR1ZGUua2lsbCgpXHJcblxyXG4gICAgICBsZXQgbmV4dExldmVsID0gdGhpcy5sZXZlbCArIDEgPj0gdGhpcy5tYXAuY291bnRUb3RhbExldmVscygpID8gMCA6IHRoaXMubGV2ZWwgKyAxXHJcbiAgICAgIGxldCBzb2NrZXQgPSB0aGlzLnJvb21NYW5hZ2VyLmlvTnNwR2FtZS5zb2NrZXRzW2R1ZGUuc29ja2V0SWRdIGFzIGFueVxyXG5cclxuICAgICAgdGhpcy5yb29tTWFuYWdlci5jaGFuZ2VSb29tKHNvY2tldCwgJ0FyY2FkZVNjZW5lJywgbmV4dExldmVsKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKiBTZW5kcyB0aGUgaW5pdGlhbCBzdGF0ZSB0byB0aGUgY2xpZW50ICovXHJcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgbGV0IG9iamVjdHM6IGFueVtdID0gW11cclxuXHJcbiAgICBTeW5jTWFuYWdlci5wcmVwYXJlRnJvbVBoYXNlckdyb3VwKHRoaXMuYm94R3JvdXAsIG9iamVjdHMpXHJcbiAgICBTeW5jTWFuYWdlci5wcmVwYXJlRnJvbVBoYXNlckdyb3VwKHRoaXMuZHVkZUdyb3VwLCBvYmplY3RzKVxyXG4gICAgU3luY01hbmFnZXIucHJlcGFyZUZyb21QaGFzZXJTcHJpdGUodGhpcy5zdGFyLCBvYmplY3RzKVxyXG5cclxuICAgIHJldHVybiBTeW5jTWFuYWdlci5lbmNvZGUob2JqZWN0cylcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudGljaysrXHJcbiAgICBpZiAodGhpcy50aWNrID4gMTAwMDAwMCkgdGhpcy50aWNrID0gMFxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMubXVtbXlHcm91cC5jaGlsZHJlbi5pdGVyYXRlKChtdW1teTogTXVtbXkpID0+IHtcclxuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbXVtbXkuZ2V0TG9va0FoZWFkKClcclxuICAgICAgbGV0IHRpbGUgPSB0aGlzLm1hcC5nZXRUaWxlQnlDb29yZGluYXRlcyhjb29yZGluYXRlcylcclxuICAgICAgbXVtbXkuY2hhbmdlRGlyZWN0aW9uKHRpbGUpXHJcbiAgICAgIG11bW15LnVwZGF0ZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChQSFlTSUNTX0RFQlVHKSB7XHJcbiAgICAgIHRoaXMuZGVidWcuY3Vyc29ycy51cGRhdGUoKVxyXG4gICAgICBsZXQgY3Vyc29yc0Rvd24gPSB0aGlzLmRlYnVnLmN1cnNvcnMuY3Vyc29yc0Rvd24oKVxyXG4gICAgICBsZXQgZHVkZTogRHVkZSA9IHRoaXMuZGVidWcuZHVkZVxyXG4gICAgICBkdWRlLnNldFVwZGF0ZXMoY3Vyc29yc0Rvd24pXHJcbiAgICAgIGR1ZGUudXBkYXRlKClcclxuICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0U2Nyb2xsKFxyXG4gICAgICAgIGR1ZGUuYm9keS5wb3NpdGlvbi54IC0gdGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyAyLFxyXG4gICAgICAgIGR1ZGUuYm9keS5wb3NpdGlvbi55IC0gdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0ICogMC44XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoUEhZU0lDU19ERUJVRykgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgcHJlcGFyZU9iamVjdFRvU3luYyA9IChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgY2xlYW5PYmplY3RUb1N5bmMgPSBTeW5jTWFuYWdlci5jbGVhbk9iamVjdFRvU3luYyhvYmopXHJcbiAgICAgIHRoaXMub2JqZWN0c1RvU3luYyA9IFN5bmNNYW5hZ2VyLm1lcmdlT2JqZWN0VG9TeW5jKGNsZWFuT2JqZWN0VG9TeW5jLCB0aGlzLm9iamVjdHNUb1N5bmMpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhciAmJiB0aGlzLnN0YXIuc3luYykge1xyXG4gICAgICBsZXQgc3Rhck9iaiA9IHtcclxuICAgICAgICBza2luOiB0aGlzLnN0YXIuc2tpbixcclxuICAgICAgICB0aW50OiB0aGlzLnN0YXIudGludCxcclxuICAgICAgICBpZDogdGhpcy5zdGFyLmlkLFxyXG4gICAgICAgIHg6IHRoaXMuc3Rhci5ib2R5LnBvc2l0aW9uLnggKyB0aGlzLnN0YXIuYm9keS53aWR0aCAvIDIsXHJcbiAgICAgICAgeTogdGhpcy5zdGFyLmJvZHkucG9zaXRpb24ueSArIHRoaXMuc3Rhci5ib2R5LmhlaWdodCAvIDJcclxuICAgICAgfVxyXG4gICAgICBwcmVwYXJlT2JqZWN0VG9TeW5jKHN0YXJPYmopXHJcbiAgICAgIHRoaXMuc3Rhci5zeW5jID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLm11bW15R3JvdXAuY2hpbGRyZW4uaXRlcmF0ZSgoY2hpbGQ6IE11bW15KSA9PiB7XHJcbiAgICAgIGxldCBvYmplY3QgPSB7XHJcbiAgICAgICAgc2tpbjogY2hpbGQuc2tpbixcclxuICAgICAgICBkaXJlY3Rpb246IGNoaWxkLmRpcmVjdGlvbixcclxuICAgICAgICBpZDogY2hpbGQuaWQsXHJcbiAgICAgICAgeDogY2hpbGQuYm9keS5wb3NpdGlvbi54ICsgY2hpbGQuYm9keS53aWR0aCAvIDIsXHJcbiAgICAgICAgeTogY2hpbGQuYm9keS5wb3NpdGlvbi55ICsgY2hpbGQuYm9keS5oZWlnaHQgLyAyXHJcbiAgICAgIH1cclxuICAgICAgcHJlcGFyZU9iamVjdFRvU3luYyhvYmplY3QpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMuYm94R3JvdXAuY2hpbGRyZW4uaXRlcmF0ZSgoY2hpbGQ6IEJveCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQuc3luYykge1xyXG4gICAgICAgIGxldCBvYmplY3QgPSB7XHJcbiAgICAgICAgICBza2luOiBjaGlsZC5za2luLFxyXG4gICAgICAgICAgaWQ6IGNoaWxkLmlkLFxyXG4gICAgICAgICAgeDogY2hpbGQuYm9keS5wb3NpdGlvbi54ICsgY2hpbGQuYm9keS53aWR0aCAvIDIsXHJcbiAgICAgICAgICB5OiBjaGlsZC5ib2R5LnBvc2l0aW9uLnkgKyBjaGlsZC5ib2R5LmhlaWdodCAvIDJcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlcGFyZU9iamVjdFRvU3luYyhvYmplY3QpXHJcbiAgICAgIH1cclxuICAgICAgY2hpbGQuc3luYyA9IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdGhpcy5kdWRlR3JvdXAuY2hpbGRyZW4uaXRlcmF0ZSgoY2hpbGQ6IER1ZGUpID0+IHtcclxuICAgICAgY2hpbGQudXBkYXRlKClcclxuICAgICAgLy8gd2Ugb25seSB1cGRhdGUgdGhlIGR1ZGUgaWYgb25lIGlmIHRoZSA0IHByb3BlcnRpZXMgYmVsb3cgaGF2ZSBjaGFuZ2VkXHJcbiAgICAgIGxldCB4ID0gY2hpbGQucHJldlBvc2l0aW9uLngudG9GaXhlZCgwKSAhPT0gY2hpbGQuYm9keS5wb3NpdGlvbi54LnRvRml4ZWQoMClcclxuICAgICAgbGV0IHkgPSBjaGlsZC5wcmV2UG9zaXRpb24ueS50b0ZpeGVkKDApICE9PSBjaGlsZC5ib2R5LnBvc2l0aW9uLnkudG9GaXhlZCgwKVxyXG4gICAgICBsZXQgZGVhZCA9IGNoaWxkLnByZXZEZWFkICE9PSBjaGlsZC5kZWFkXHJcbiAgICAgIGxldCBjb2xvciA9IGNoaWxkLnByZXZDb2xvci50b1N0cmluZygpICE9PSBjaGlsZC5jb2xvci50b1N0cmluZygpXHJcbiAgICAgIGlmICh4IHx8IHkgfHwgZGVhZCB8fCBjb2xvcikge1xyXG4gICAgICAgIGxldCBvYmplY3QgPSB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGNoaWxkLmFuaW1hdGlvbixcclxuICAgICAgICAgIGRlYWQ6IGNoaWxkLmRlYWQsXHJcbiAgICAgICAgICBjbGllbnRJZDogY2hpbGQuY2xpZW50SWQsXHJcbiAgICAgICAgICBza2luOiBjaGlsZC5za2luLFxyXG4gICAgICAgICAgdGludDogY2hpbGQuY29sb3IsXHJcbiAgICAgICAgICBpZDogY2hpbGQuaWQsXHJcbiAgICAgICAgICB4OiBjaGlsZC5ib2R5LnBvc2l0aW9uLnggKyBjaGlsZC5ib2R5LndpZHRoIC8gMixcclxuICAgICAgICAgIHk6IGNoaWxkLmJvZHkucG9zaXRpb24ueSArIGNoaWxkLmJvZHkuaGVpZ2h0IC8gMlxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVwYXJlT2JqZWN0VG9TeW5jKG9iamVjdClcclxuICAgICAgfVxyXG4gICAgICBjaGlsZC5wb3N0VXBkYXRlKClcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IHNlbmQ6IGFueVtdID0gW11cclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLm9iamVjdHNUb1N5bmMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgLy8gd2Ugb25seSBzeW5jIHRoZSBtdW1taWVzIG9uIGV2ZXJ5IDN0aCBmcmFtZVxyXG4gICAgICBpZiAodGhpcy5vYmplY3RzVG9TeW5jW2tleV0uc2tpbiA9PT0gU0tJTlMuTVVNTVkpIHtcclxuICAgICAgICBpZiAodGhpcy50aWNrICUgMyA9PT0gMCkge1xyXG4gICAgICAgICAgc2VuZC5wdXNoKHRoaXMub2JqZWN0c1RvU3luY1trZXldKVxyXG4gICAgICAgICAgZGVsZXRlIHRoaXMub2JqZWN0c1RvU3luY1trZXldXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbmQucHVzaCh0aGlzLm9iamVjdHNUb1N5bmNba2V5XSlcclxuICAgICAgICBkZWxldGUgdGhpcy5vYmplY3RzVG9TeW5jW2tleV1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoc2VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHNlbmQgdGhlIG9iamVjdHMgdG8gc3luYyB0byBhbGwgY29ubmVjdGVkIGNsaWVudHMgaW4gdGhpcy5yb29tSWRcclxuICAgICAgdGhpcy5yb29tTWFuYWdlci5pb05zcEdhbWVcclxuICAgICAgICAuaW4odGhpcy5yb29tSWQpXHJcbiAgICAgICAgLmVtaXQoJ1MnIC8qIHNob3J0IGZvciBzeW5jR2FtZSAqLywgeyBPIC8qIHNob3J0IGZvciBvYmplY3RzICovOiBTeW5jTWFuYWdlci5lbmNvZGUoc2VuZCkgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVPYmplY3RHcm91cCBmcm9tICcuLi9tYXR0ZXJPYmplY3RzL21hdHRlckdhbWVPYmplY3RHcm91cCdcclxuaW1wb3J0IE1hdHRlckdhbWVPYmplY3QgZnJvbSAnLi4vbWF0dGVyT2JqZWN0cy9tYXR0ZXJHYW1lT2JqZWN0J1xyXG5pbXBvcnQgRHVkZSBmcm9tICcuLi9tYXR0ZXJPYmplY3RzL2R1ZGUnXHJcbmltcG9ydCBTdGFyIGZyb20gJy4uL21hdHRlck9iamVjdHMvc3RhcidcclxuaW1wb3J0IHsgd29ybGQgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvY29uZmlnJ1xyXG5cclxuLy8gUEhZU0lDU19ERUJVR1xyXG5pbXBvcnQgQ3Vyc29ycyBmcm9tICcuLi8uLi8uLi9jbGllbnQvY29tcG9uZW50cy9jdXJzb3JzJ1xyXG5pbXBvcnQgU3luY01hbmFnZXIgZnJvbSAnLi4vLi4vbWFuYWdlcnMvc3luY01hbmFnZXInXHJcbmltcG9ydCBSb29tTWFuYWdlciBmcm9tICcuLi8uLi9tYW5hZ2Vycy9yb29tTWFuYWdlcidcclxuaW1wb3J0IHsgU0tJTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIG9iamVjdHM6IE1hdHRlckdhbWVPYmplY3RbXSA9IFtdXHJcbiAgb2JqZWN0c1RvU3luYzogYW55ID0ge31cclxuICBkZWJ1ZzogYW55ID0ge31cclxuICB0aWNrID0gMFxyXG4gIGxldmVsOiBudW1iZXJcclxuICByb29tTWFuYWdlcjogUm9vbU1hbmFnZXJcclxuICByb29tSWQ6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHsga2V5OiAnTWFpblNjZW5lJywgcGx1Z2luczogUEhZU0lDU19ERUJVRyA/IG51bGwgOiBbJ0Nsb2NrJ10gfSlcclxuICAgIC8vIHNlZSBhbGwgc2NlbmUgcGx1Z2luczpcclxuICAgIC8vIFBoYXNlci5QbHVnaW5zLkRlZmF1bHRTY2VuZVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9ibG9iL21hc3Rlci9zcmMvcGx1Z2lucy9EZWZhdWx0UGx1Z2lucy5qcyNMNzZcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgY29uc3QgeyBsZXZlbCA9IDAsIHJvb21JZCwgcm9vbU1hbmFnZXIgfSA9IHRoaXMuZ2FtZS5jb25maWcucHJlQm9vdCgpXHJcbiAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbFxyXG4gICAgICB0aGlzLnJvb21NYW5hZ2VyID0gcm9vbU1hbmFnZXJcclxuICAgICAgdGhpcy5yb29tSWQgPSByb29tSWRcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmICghUEhZU0lDU19ERUJVRykgY29uc29sZS5lcnJvcignb25Jbml0KCkgZmFpbGVkIScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBNYXR0ZXIgPSBQaGFzZXIuUGh5c2ljcy5NYXR0ZXIuTWF0dGVyXHJcbiAgICBjb25zdCB3b3JsZENlbnRlclggPSAod29ybGQueCArIHdvcmxkLndpZHRoKSAvIDJcclxuXHJcbiAgICAvLyBhZGQgYW5kIG1vZGlmeSB0aGUgd29ybGQgYm91bmRzXHJcbiAgICBsZXQgYm91bmRzOiBhbnkgPSB0aGlzLm1hdHRlci53b3JsZC5zZXRCb3VuZHMod29ybGQueCwgd29ybGQueSwgd29ybGQud2lkdGgsIHdvcmxkLmhlaWdodClcclxuICAgIE9iamVjdC5rZXlzKGJvdW5kcy53YWxscykuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcclxuICAgICAgbGV0IGJvZHkgPSBib3VuZHMud2FsbHNba2V5XVxyXG4gICAgICBNYXR0ZXIuQm9keS5zZXQoYm9keSwgeyBmcmljdGlvbjogMC4wNSwgZnJpY3Rpb25TdGF0aWM6IDAuMDUsIGZyaWN0aW9uQWlyOiAwLjAxIH0pXHJcbiAgICAgIC8vIHdlIGRvIG5vdCBuZWVkIHRoZSB0b3AsIHNvIHdlIHNldCBpdCB0byBpc1NlbnNvclxyXG4gICAgICBpZiAoa2V5ID09PSAndG9wJykgTWF0dGVyLkJvZHkuc2V0KGJvZHksIHsgaXNTZW5zb3I6IHRydWUgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gaW5zdGFudGlhdGUgdGhlIEdhbWVPYmplY3RHcm91cFxyXG4gICAgbGV0IGdhbWVPYmplY3RHcm91cCA9IG5ldyBHYW1lT2JqZWN0R3JvdXAodGhpcywgdGhpcy5vYmplY3RzKVxyXG5cclxuICAgIC8vIHRoaXMgd2lsbCBzdG9wIHRoZSBzY2VuZVxyXG4gICAgdGhpcy5ldmVudHMuYWRkTGlzdGVuZXIoJ3N0b3BTY2VuZScsICgpID0+IHtcclxuICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICB0aGlzLm1hdHRlci53b3JsZC5yZW1vdmUodGhpcy5tYXR0ZXIud29ybGQsIG9iai5ib2R5KVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnJvb21NYW5hZ2VyLnN0YXRzLnJlbW92ZVRvdGFsT2JqZWN0cyh0aGlzLnJvb21JZClcclxuICAgICAgdGhpcy5zY2VuZS5zdG9wKClcclxuICAgICAgdGhpcy5yb29tTWFuYWdlci5zdGF0cy5sb2coYFNjZW5lIGluIHJvb21JZCA8Yj4ke3RoaXMucm9vbUlkfTwvYj4gaGFzIHN0b3BwZWQhYClcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY3JlYXRlcyBhIG5ldyBkdWRlLCB3aGVuIGEgbmV3IHVzZXIgY29ubmVjdHNcclxuICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdjcmVhdGVEdWRlJywgKGNsaWVudElkOiBudW1iZXIsIHNvY2tldElkOiBzdHJpbmcpID0+IHtcclxuICAgICAgbGV0IGxlZnRYID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKHdvcmxkLnggKyAxMDAsIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gMiAtIDY0MClcclxuICAgICAgbGV0IHJpZ2h0WCA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSh0aGlzLmNhbWVyYXMubWFpbi53aWR0aCAvIDIgKyA2NDAsIHdvcmxkLnggKyB3b3JsZC53aWR0aCAtIDEwMClcclxuICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gbGVmdFggOiByaWdodFhcclxuICAgICAgbGV0IHkgPSAtNTBcclxuICAgICAgZ2FtZU9iamVjdEdyb3VwLmFkZCh4LCB5LCBTS0lOUy5EVURFLCB7IGNsaWVudElkLCBzb2NrZXRJZCB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyB1cGRhdGVzIHRoZSBwb3NpdGlvbiBvZiBhIGR1ZGVcclxuICAgIHRoaXMuZXZlbnRzLmFkZExpc3RlbmVyKCdVJyAvKiBzaG9ydCBmb3IgdXBkYXRlRHVkZSAqLywgKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGxldCBkdWRlczogRHVkZVtdID0gdGhpcy5vYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLmNsaWVudElkICYmIG9iai5jbGllbnRJZCA9PT0gcmVzLmNsaWVudElkKSBhcyBhbnlcclxuICAgICAgaWYgKGR1ZGVzWzBdKSB7XHJcbiAgICAgICAgbGV0IGIgPSByZXMudXBkYXRlc1xyXG4gICAgICAgIGxldCB1cGRhdGVzID0ge1xyXG4gICAgICAgICAgbGVmdDogYiA9PT0gMSB8fCBiID09PSA1ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgcmlnaHQ6IGIgPT09IDIgfHwgYiA9PT0gNiA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIHVwOiBiID09PSA0IHx8IGIgPT09IDYgfHwgYiA9PT0gNSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIG5vbmU6IGIgPT09IDggPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZHVkZXNbMF0uc2V0VXBkYXRlcyh1cGRhdGVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHJlbW92ZXMgYSBkdWRlXHJcbiAgICB0aGlzLmV2ZW50cy5hZGRMaXN0ZW5lcigncmVtb3ZlRHVkZScsIChjbGllbnRJZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGxldCBkdWRlcyA9IHRoaXMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5jbGllbnRJZCAmJiBvYmouY2xpZW50SWQgPT09IGNsaWVudElkKVxyXG4gICAgICBkdWRlcy5mb3JFYWNoKGR1ZGUgPT4gZHVkZS5raWxsKCkpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGFkZHMgYW5vdGhlciBib3ggZXZlcnkgMS4yIHNlY29uZHNcclxuICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgIGRlbGF5OiAxMjAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIGxldCB4ID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKHdvcmxkQ2VudGVyWCAtIDI1MCAtIDY0MCwgd29ybGRDZW50ZXJYICsgNjQwICsgMjUwKVxyXG4gICAgICAgIGxldCB5ID0gMTAwXHJcbiAgICAgICAgZ2FtZU9iamVjdEdyb3VwLmFkZCh4LCB5LCBTS0lOUy5CT1gpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKFBIWVNJQ1NfREVCVUcpIHtcclxuICAgICAgdGhpcy5hZGRcclxuICAgICAgICAudGV4dCgyNCwgMjQsICdQaHlzaWNzIERlYnVnZ2luZyBWZXJzaW9uXFxuTW92ZSB3aXRoIEFycm93IEtleXMnLCB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMzZcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZXRTY3JvbGxGYWN0b3IoMClcclxuICAgICAgICAuc2V0T3JpZ2luKDApXHJcbiAgICAgICAgLnNldEFscGhhKDAuNilcclxuICAgICAgdGhpcy5kZWJ1Zy5zb2NrZXQgPSB7IGVtaXQ6ICgpID0+IHt9IH0gLy8gbW9jayBzb2NrZXRcclxuICAgICAgdGhpcy5kZWJ1Zy5jdXJzb3JzID0gbmV3IEN1cnNvcnModGhpcywgdGhpcy5kZWJ1Zy5zb2NrZXQpXHJcbiAgICAgIHRoaXMuZGVidWcuZHVkZSA9IGdhbWVPYmplY3RHcm91cC5hZGQoNDAwLCA0MDAsIFNLSU5TLkRVREUsIHsgY2xpZW50SWQ6IDU1NTU1LCBzb2NrZXRJZDogJ3NvbWUtc29ja2V0LWlkJyB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghUEhZU0lDU19ERUJVRykge1xyXG4gICAgICB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm9vbU1hbmFnZXIuc3RhdHMuc2V0VG90YWxPYmplY3RzKHRoaXMucm9vbUlkLCB0aGlzLm9iamVjdHMubGVuZ3RoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgdGhlIGJpZyBzdGFyXHJcbiAgICBnYW1lT2JqZWN0R3JvdXAuYWRkKHdvcmxkQ2VudGVyWCwgd29ybGQuaGVpZ2h0IC0gMzIwIC0gMTAwIC0gMTE1LCBTS0lOUy5TVEFSLCB7XHJcbiAgICAgIGNhdGVnb3J5OiAnYmlnJ1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBhZGQgbWVkaXVtIHN0YXJzXHJcbiAgICBmb3IgKGxldCB4ID0gd29ybGRDZW50ZXJYIC0gMTI4OyB4IDwgd29ybGRDZW50ZXJYICsgMTI4ICsgNjQ7IHggKz0gMTI4KVxyXG4gICAgICBnYW1lT2JqZWN0R3JvdXAuYWRkKHgsIHdvcmxkLmhlaWdodCAtIDMyMCAtIDEwMCwgU0tJTlMuU1RBUiwgeyBjYXRlZ29yeTogJ21lZGl1bScgfSlcclxuXHJcbiAgICAvLyBhZGQgeWVsbG93IHN0YXJzXHJcbiAgICBmb3IgKGxldCB4ID0gd29ybGRDZW50ZXJYIC0gMTYwIC0gODA7IHggPCB3b3JsZENlbnRlclggKyAzMjAgKyA4MDsgeCArPSAxNjApXHJcbiAgICAgIGdhbWVPYmplY3RHcm91cC5hZGQoeCwgd29ybGQuaGVpZ2h0IC0gMzIwLCBTS0lOUy5TVEFSKVxyXG5cclxuICAgIC8vIGNyZWF0ZSA0IGJveGVzIGF0IHNlcnZlciBzdGFydFxyXG4gICAgZ2FtZU9iamVjdEdyb3VwLmFkZCgxMjgwLCA2NDAsIFNLSU5TLkJPWClcclxuICAgIGdhbWVPYmplY3RHcm91cC5hZGQoMTI4MCwgNjQwLCBTS0lOUy5CT1gpXHJcbiAgICBnYW1lT2JqZWN0R3JvdXAuYWRkKDEyODAsIDY0MCwgU0tJTlMuQk9YKVxyXG4gICAgZ2FtZU9iamVjdEdyb3VwLmFkZCgxMjgwLCA2NDAsIFNLSU5TLkJPWClcclxuXHJcbiAgICAvLyBjaGVjayBmb3IgY29sbGlzaW9uc1xyXG4gICAgY29uc3QgY29sbGlzaW9uRXZlbnQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBldmVudC5wYWlycy5mb3JFYWNoKChwYWlyOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCB7IGJvZHlBLCBib2R5QiB9ID0gcGFpclxyXG4gICAgICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBbYm9keUEubGFiZWwsIGJvZHlCLmxhYmVsXVxyXG5cclxuICAgICAgICAvLyBEdWRlIGhpdHMgc3RhclxyXG4gICAgICAgIGlmIChsYWJlbHMuaW5jbHVkZXMoJ2R1ZGUnKSAmJiBsYWJlbHMuaW5jbHVkZXMoJ3N0YXInKSkge1xyXG4gICAgICAgICAgbGV0IHN0YXJCb2R5ID0gYm9keUEubGFiZWwgPT09ICdzdGFyJyA/IGJvZHlBIDogYm9keUJcclxuICAgICAgICAgIGxldCBzdGFyOiBTdGFyID0gZ2FtZU9iamVjdEdyb3VwLmdldE9iamVjdEJ5SWQoc3RhckJvZHkuaWQpIGFzIGFueVxyXG4gICAgICAgICAgaWYgKHN0YXIpIHtcclxuICAgICAgICAgICAgc3Rhci5raWxsKClcclxuICAgICAgICAgICAgc3Rhci5zZXRSZXZpdmVUaW1lcigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEdWRlJ3Mgc2Vuc29yIGhpdHMgYW5vdGhlciBib2R5XHJcbiAgICAgICAgaWYgKC9TZW5zb3IvLnRlc3QoYm9keUEubGFiZWwpIHx8IC9TZW5zb3IvLnRlc3QoYm9keUIubGFiZWwpKSB7XHJcbiAgICAgICAgICBsZXQgc2Vuc29yQm9keSA9IC9TZW5zb3IvLnRlc3QoYm9keUEubGFiZWwpID8gYm9keUEgOiBib2R5QlxyXG4gICAgICAgICAgbGV0IG90aGVyQm9keSA9IC9TZW5zb3IvLnRlc3QoYm9keUEubGFiZWwpID8gYm9keUIgOiBib2R5QVxyXG4gICAgICAgICAgaWYgKG90aGVyQm9keS5pc1NlbnNvcikgcmV0dXJuXHJcblxyXG4gICAgICAgICAgbGV0IGR1ZGU6IER1ZGUgPSBnYW1lT2JqZWN0R3JvdXAuZ2V0T2JqZWN0QnlJZChzZW5zb3JCb2R5LnBhcmVudC5pZCkgYXMgYW55XHJcbiAgICAgICAgICBpZiAoZHVkZSkge1xyXG4gICAgICAgICAgICBsZXQgc2VwUGFkZGluZyA9IDJcclxuICAgICAgICAgICAgaWYgKG90aGVyQm9keS5pc1N0YXRpYykge1xyXG4gICAgICAgICAgICAgIHNlcFBhZGRpbmcgPSAwLjFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNlcCA9IHBhaXIuc2VwYXJhdGlvbiAtIHNlcFBhZGRpbmdcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW5zb3JCb2R5ID09PSBkdWRlLnNlbnNvcnMubGVmdCkge1xyXG4gICAgICAgICAgICAgIGR1ZGUubW92ZS5sZWZ0QWxsb3dlZCA9ICFvdGhlckJvZHkuaXNTdGF0aWNcclxuICAgICAgICAgICAgICBkdWRlLnRvdWNoaW5nLmxlZnQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgaWYgKHBhaXIuc2VwYXJhdGlvbiA+IHNlcFBhZGRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGR1ZGUuc2V0VHJhbnNsYXRlKHNlcClcclxuICAgICAgICAgICAgICAgIGR1ZGUudHJhbnNsYXRlKClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Vuc29yQm9keSA9PT0gZHVkZS5zZW5zb3JzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgZHVkZS5tb3ZlLnJpZ2h0QWxsb3dlZCA9ICFvdGhlckJvZHkuaXNTdGF0aWNcclxuICAgICAgICAgICAgICBkdWRlLnRvdWNoaW5nLnJpZ2h0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIGlmIChwYWlyLnNlcGFyYXRpb24gPiBzZXBQYWRkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBkdWRlLnNldFRyYW5zbGF0ZSgtc2VwKVxyXG4gICAgICAgICAgICAgICAgZHVkZS50cmFuc2xhdGUoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW5zb3JCb2R5ID09PSBkdWRlLnNlbnNvcnMuYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgZHVkZS50b3VjaGluZy5ib3R0b20gPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2l0bmV4dC5pby9tb2R1bGFyLWdhbWUtd29ybGRzLWluLXBoYXNlci0zLXRpbGVtYXBzLTUtbWF0dGVyLXBoeXNpY3MtcGxhdGZvcm1lci1kMTRkMWY2MTQ1NTdcclxuICAgIHRoaXMubWF0dGVyLndvcmxkLm9uKCdjb2xsaXNpb25zdGFydCcsIGNvbGxpc2lvbkV2ZW50KVxyXG4gICAgdGhpcy5tYXR0ZXIud29ybGQub24oJ2NvbGxpc2lvbmFjdGl2ZScsIGNvbGxpc2lvbkV2ZW50KVxyXG4gIH1cclxuXHJcbiAgLyoqIFNlbmRzIHRoZSBpbml0aWFsIHN0YXRlIHRvIHRoZSBjbGllbnQgKi9cclxuICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBsZXQgb2JqZWN0czogYW55W10gPSBbXVxyXG4gICAgU3luY01hbmFnZXIucHJlcGFyZUZyb21NYXR0ZXJHYW1lT2JqZWN0KHRoaXMub2JqZWN0cywgb2JqZWN0cylcclxuICAgIHJldHVybiBTeW5jTWFuYWdlci5lbmNvZGUob2JqZWN0cylcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcclxuICAgIHRoaXMudGljaysrXHJcbiAgICBpZiAodGhpcy50aWNrID4gMTAwMDAwMCkgdGhpcy50aWNrID0gMFxyXG5cclxuICAgIGlmIChQSFlTSUNTX0RFQlVHKSB7XHJcbiAgICAgIHRoaXMuZGVidWcuY3Vyc29ycy51cGRhdGUoKVxyXG4gICAgICBsZXQgY3Vyc29yc0Rvd24gPSB0aGlzLmRlYnVnLmN1cnNvcnMuY3Vyc29yc0Rvd24oKVxyXG4gICAgICBsZXQgZHVkZTogRHVkZSA9IHRoaXMuZGVidWcuZHVkZVxyXG4gICAgICBkdWRlLnNldFVwZGF0ZXMoY3Vyc29yc0Rvd24pXHJcbiAgICAgIGR1ZGUudXBkYXRlKClcclxuICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0U2Nyb2xsKFxyXG4gICAgICAgIGR1ZGUuYm9keS5wb3NpdGlvbi54IC0gdGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyAyLFxyXG4gICAgICAgIGR1ZGUuYm9keS5wb3NpdGlvbi55IC0gdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0ICogMC44XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIVBIWVNJQ1NfREVCVUcpIHtcclxuICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICBpZiAob2JqLmJvZHkucG9zaXRpb24ueSA+IHdvcmxkLmhlaWdodCkgb2JqLmtpbGwoKVxyXG5cclxuICAgICAgICBvYmoucHJlVXBkYXRlKClcclxuICAgICAgICBvYmoudXBkYXRlKClcclxuXHJcbiAgICAgICAgY29uc3Qgcm91bmRUb0V2ZW5OdW1iZXIgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiArKE1hdGgucm91bmQobnVtYmVyIC8gMikgKiAyKS50b0ZpeGVkKDApXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvbmx5IHNlbmQgdGhlIG9iamVjdCB0byB0aGUgY2xpZW50IGlmIG9uZSBvZiB0aGVzZSBwcm9wZXJ0aWVzIGhhdmUgY2hhbmdlZFxyXG4gICAgICAgIGxldCBkZWFkID0gb2JqLmRlYWQgIT0gb2JqLnByZXZEZWFkXHJcbiAgICAgICAgbGV0IHggPSBvYmouYm9keS5wb3NpdGlvbi54LnRvRml4ZWQoMCkgIT0gb2JqLmJvZHkucG9zaXRpb25QcmV2LngudG9GaXhlZCgwKVxyXG4gICAgICAgIGxldCB5ID0gb2JqLmJvZHkucG9zaXRpb24ueS50b0ZpeGVkKDApICE9IG9iai5ib2R5LnBvc2l0aW9uUHJldi55LnRvRml4ZWQoMClcclxuICAgICAgICBsZXQgYW5nbGUgPSByb3VuZFRvRXZlbk51bWJlcihvYmouYW5nbGUpICE9IHJvdW5kVG9FdmVuTnVtYmVyKG9iai5wcmV2QW5nbGUpXHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IG9iai5hbmltYXRpb24gIT09IG9iai5wcmV2QW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKGRlYWQgfHwgeCB8fCB5IHx8IGFuZ2xlIHx8IGFuaW1hdGlvbikge1xyXG4gICAgICAgICAgbGV0IHRoZU9iajogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHtcclxuICAgICAgICAgICAgLy8gaXQgYWx3YXlzIG5lZWRzIHRvIGhhdmUgYW4gaWQhXHJcbiAgICAgICAgICAgIGlkOiBvYmouYm9keS5pZCxcclxuICAgICAgICAgICAgeDogK29iai5ib2R5LnBvc2l0aW9uLngudG9GaXhlZCgwKSxcclxuICAgICAgICAgICAgeTogK29iai5ib2R5LnBvc2l0aW9uLnkudG9GaXhlZCgwKSxcclxuICAgICAgICAgICAgYW5nbGU6IGFuZ2xlID8gcm91bmRUb0V2ZW5OdW1iZXIob2JqLmFuZ2xlKSA6IG51bGwsXHJcbiAgICAgICAgICAgIGRlYWQ6IGRlYWQgPyBvYmouZGVhZCA6IG51bGwsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogb2JqLmFuaW1hdGlvbiA/IG9iai5hbmltYXRpb24gOiBudWxsLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogb2JqLmNsaWVudElkID8gb2JqLmNsaWVudElkIDogbnVsbCxcclxuICAgICAgICAgICAgc2tpbjogb2JqLnNraW5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBjbGVhbk9iamVjdFRvU3luYyA9IFN5bmNNYW5hZ2VyLmNsZWFuT2JqZWN0VG9TeW5jKHRoZU9iailcclxuICAgICAgICAgIHRoaXMub2JqZWN0c1RvU3luYyA9IFN5bmNNYW5hZ2VyLm1lcmdlT2JqZWN0VG9TeW5jKGNsZWFuT2JqZWN0VG9TeW5jLCB0aGlzLm9iamVjdHNUb1N5bmMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBwb3N0VXBkYXRlIGZ1bmN0aW9uIG9uIGFsbCBnYW1lT2JqZWN0c1xyXG4gICAgICAgIG9iai5wb3N0VXBkYXRlKClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCBzZW5kOiBhbnlbXSA9IFtdXHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub2JqZWN0c1RvU3luYykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMgc3luY3MgdGhlIGR1ZGUgb24gZXZlcnkgZnJhbWVcclxuICAgICAgICAvLyBidXQgdGhlIGJveGVzIG9ubHkgb24gZXZlcnkgc2Vjb25kIGZyYW1lXHJcbiAgICAgICAgLy8gKHNhZmVzIGEgbG90IG9mIGJhbmR3aWR0aClcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RzVG9TeW5jW2tleV0uc2tpbiA9PT0gU0tJTlMuQk9YKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy50aWNrICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZW5kLnB1c2godGhpcy5vYmplY3RzVG9TeW5jW2tleV0pXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9iamVjdHNUb1N5bmNba2V5XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZW5kLnB1c2godGhpcy5vYmplY3RzVG9TeW5jW2tleV0pXHJcbiAgICAgICAgICBkZWxldGUgdGhpcy5vYmplY3RzVG9TeW5jW2tleV1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoc2VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gc2VuZCB0aGUgb2JqZWN0cyB0byBzeW5jIHRvIGFsbCBjb25uZWN0ZWQgY2xpZW50cyBpbiB0aGlzLnJvb21JZFxyXG4gICAgICAgIHRoaXMucm9vbU1hbmFnZXIuaW9Oc3BHYW1lXHJcbiAgICAgICAgICAuaW4odGhpcy5yb29tSWQpXHJcbiAgICAgICAgICAuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCB7IE8gLyogc2hvcnQgZm9yIG9iamVjdHMgKi86IFN5bmNNYW5hZ2VyLmVuY29kZShzZW5kKSB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImludGVyZmFjZSBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIG9iamVjdHM6IGFueVxyXG59XHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBpZDogc3RyaW5nXHJcbiAgbGFzdFVwZGF0ZTogbnVtYmVyXHJcbiAgY2xpZW50SWQ6IG51bWJlclxyXG4gIHJvb21JZDogc3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIFVzZXJzIHtcclxuICBbdXNlcklkOiBzdHJpbmddOiBVc2VyXHJcbn1cclxuaW50ZXJmYWNlIFJvb20ge1xyXG4gIHJvb21JZDogc3RyaW5nXHJcbiAgLy8gSSBhbSBub3Qgc3VyZSBpZiBpdCBpcyBzYWZlIHRvIHB1Ymxpc2ggdGhlIHJvb21JZCB0byB0aGUgY2xpZW50XHJcbiAgLy8gc28gd2Ugb25seSBjcmVhdGUgYSBzZWNvbmQgaWRcclxuICAvLyAtIElmIHlvdSBrbm93IGlmIGl0IGlzIHNhZmUgb3Igbm90LCBwbGVhc2UgdGVsbCBtZSA6KSAtXHJcbiAgLy9wdWJsaWNSb29tSWQ6IHN0cmluZ1xyXG4gIGdhbWU6IFBoYXNlci5HYW1lXHJcbiAgc2NlbmU6IEdhbWVTY2VuZVxyXG4gIHJlbW92aW5nOiBib29sZWFuXHJcbiAgdXNlcnM6IFVzZXJzXHJcbiAgbGV2ZWw6IG51bWJlclxyXG4gIHNjZW5lS2V5OiBzdHJpbmdcclxufVxyXG5pbnRlcmZhY2UgUm9vbXMge1xyXG4gIFtyb29tOiBzdHJpbmddOiBSb29tXHJcbn1cclxuaW1wb3J0IEdhbWUsIHsgUGhhc2VyR2FtZSB9IGZyb20gJy4uL2dhbWUvZ2FtZSdcclxuaW1wb3J0IHsgTWF0aCBhcyBwaGFzZXJNYXRoIH0gZnJvbSAncGhhc2VyJ1xyXG5pbXBvcnQgeyBNQVhfUExBWUVSU19QRVJfUk9PTSwgVVNFUl9LSUNLX1RJTUVPVVQgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcblxyXG5sZXQgcmFuZG9tRGF0YUdlbmVyYXRvciA9IG5ldyBwaGFzZXJNYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoKVxyXG5cclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcclxuaW1wb3J0IFN0YXRzIGZyb20gJy4uL3NvY2tldC9pb1N0YXRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbU1hbmFnZXIge1xyXG4gIHJvb21zOiBSb29tcyA9IHt9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpb05zcEdhbWU6IFNvY2tldElPLk5hbWVzcGFjZSwgcHVibGljIHN0YXRzOiBTdGF0cykge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZUluYWN0aXZlUm9vbXMoKVxyXG4gICAgICB0aGlzLnJlbW92ZUluYWN0aXZlVXNlcnMoKVxyXG4gICAgfSwgMTAwMDApXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNsaWVudElkKHNvY2tldDogU29ja2V0KSB7XHJcbiAgICBsZXQgY2xpZW50SWQgPSByYW5kb21EYXRhR2VuZXJhdG9yLmludGVnZXJJblJhbmdlKDEwMDAwMCwgMTAwMDAwMDAwKVxyXG4gICAgc29ja2V0LmNsaWVudElkID0gY2xpZW50SWRcclxuICAgIHNvY2tldC5lbWl0KCdjbGllbnRJZCcsIGNsaWVudElkKVxyXG4gIH1cclxuXHJcbiAgLy8gdGhlIDIgZnVuY3Rpb25zIGJlbG93IHNob3VsZCBiZSBiZXR0ZXJcclxuICBhc3luYyBqb2luUm9vbShzb2NrZXQ6IFNvY2tldCwgc2NlbmU6IHN0cmluZywgbGV2ZWw6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBzY2VuZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGxldmVsICE9PSAnbnVtYmVyJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdsZXZlbCBvciBzY2VuZSBpcyBub3QgZGVmaW5lZCBpbiBpb0dhbWUudHMnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHNvY2tldC5yb29tID0gdGhpcy5jaG9vc2VSb29tKHsgc2NlbmU6IHNjZW5lLCBsZXZlbDogK2xldmVsIH0pXHJcblxyXG4gICAgLy8gY3JlYXRlIGEgbmV3IGdhbWUgaW5zdGFuY2UgaWYgdGhpcyByb29tIGRvZXMgbm90IGV4aXN0IHlldFxyXG4gICAgaWYgKCF0aGlzLnJvb21zW3NvY2tldC5yb29tXSkge1xyXG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZVJvb20oc29ja2V0LnJvb20sIHNjZW5lLCArbGV2ZWwpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRVc2VyKHNvY2tldClcclxuICAgIHRoaXMucm9vbXNbc29ja2V0LnJvb21dLnNjZW5lLmV2ZW50cy5lbWl0KCdjcmVhdGVEdWRlJywgc29ja2V0LmNsaWVudElkLCBzb2NrZXQuaWQpXHJcbiAgfVxyXG5cclxuICBsZWF2ZVJvb20oc29ja2V0OiBTb2NrZXQpIHtcclxuICAgIHRoaXMucmVtb3ZlVXNlcihzb2NrZXQucm9vbSwgc29ja2V0LmlkKVxyXG4gICAgdGhpcy5pb05zcEdhbWVcclxuICAgICAgLmluKHNvY2tldC5yb29tKVxyXG4gICAgICAuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCB7IGNvbm5lY3RDb3VudGVyOiB0aGlzLmdldFJvb21Vc2Vyc0FycmF5KHNvY2tldC5yb29tKS5sZW5ndGggfSlcclxuXHJcbiAgICBpZiAodGhpcy5pc1JlbW92aW5nKHNvY2tldC5yb29tKSkgcmV0dXJuXHJcbiAgICB0aGlzLnJvb21zW3NvY2tldC5yb29tXS5zY2VuZS5ldmVudHMuZW1pdCgncmVtb3ZlRHVkZScsIHNvY2tldC5jbGllbnRJZClcclxuICB9XHJcblxyXG4gIGFzeW5jIGNoYW5nZVJvb20oc29ja2V0OiBTb2NrZXQsIHNjZW5lOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpIHtcclxuICAgIHRoaXMubGVhdmVSb29tKHNvY2tldClcclxuICAgIGF3YWl0IHRoaXMuam9pblJvb20oc29ja2V0LCBzY2VuZSwgK2xldmVsKVxyXG4gICAgc29ja2V0LmVtaXQoJ2NoYW5naW5nUm9vbScsIHsgc2NlbmU6IHNjZW5lLCBsZXZlbDogK2xldmVsIH0pXHJcbiAgfVxyXG5cclxuICBhZGRVc2VyKHNvY2tldDogU29ja2V0KSB7XHJcbiAgICBsZXQgbmV3VXNlcnM6IFVzZXJzID0ge1xyXG4gICAgICBbc29ja2V0LmlkXToge1xyXG4gICAgICAgIHJvb21JZDogc29ja2V0LnJvb20sXHJcbiAgICAgICAgbGFzdFVwZGF0ZTogRGF0ZS5ub3coKSxcclxuICAgICAgICBjbGllbnRJZDogc29ja2V0LmNsaWVudElkLFxyXG4gICAgICAgIGlkOiBzb2NrZXQuaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9vbXNbc29ja2V0LnJvb21dLnVzZXJzID0ge1xyXG4gICAgICAuLi50aGlzLnJvb21zW3NvY2tldC5yb29tXS51c2VycyxcclxuICAgICAgLi4ubmV3VXNlcnNcclxuICAgIH1cclxuICAgIC8vIGpvaW4gdGhlIHNvY2tldCByb29tXHJcbiAgICBzb2NrZXQuam9pbihzb2NrZXQucm9vbSlcclxuICB9XHJcblxyXG4gIC8qKiBSZW1vdmVkIHRoZSB1c2VyIGZyb20gdGhlIHJvb20gKi9cclxuICByZW1vdmVVc2VyKHJvb21JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgaWYgKHRoaXMuaW9Oc3BHYW1lLnNvY2tldHNbdXNlcklkXSkgdGhpcy5pb05zcEdhbWUuc29ja2V0c1t1c2VySWRdLmxlYXZlKHJvb21JZClcclxuXHJcbiAgICBpZiAodGhpcy51c2VyRXhpc3RzKHJvb21JZCwgdXNlcklkKSkge1xyXG4gICAgICBkZWxldGUgdGhpcy5yb29tc1tyb29tSWRdLnVzZXJzW3VzZXJJZF1cclxuICAgICAgaWYgKGxvZykgdGhpcy5zdGF0cy5sb2coYFVzZXIgPGI+JHt1c2VySWR9PC9iPiBkaXNjb25uZWN0ZWQhYClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqIENoZWNrIGlmIHRoaXMgdXNlciBleGlzdHMgKi9cclxuICB1c2VyRXhpc3RzKHJvb21JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMucm9vbUV4aXN0cyhyb29tSWQpICYmIHRoaXMucm9vbXNbcm9vbUlkXS51c2VycyAmJiB0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXSkgcmV0dXJuIHRydWVcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqIENoZWNrIGlmIHRoaXMgcm9vbSBleGlzdHMgKi9cclxuICByb29tRXhpc3RzKHJvb21JZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5yb29tcyAmJiB0aGlzLnJvb21zW3Jvb21JZF0pIHJldHVybiB0cnVlXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlzUmVtb3Zpbmcocm9vbUlkOiBzdHJpbmcpIHtcclxuICAgIGlmICghISF0aGlzLnJvb21zW3Jvb21JZF0gfHwgdGhpcy5yb29tc1tyb29tSWRdLnJlbW92aW5nKSByZXR1cm4gdHJ1ZVxyXG4gICAgZWxzZSByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJvb20gPSBhc3luYyAocm9vbUlkOiBzdHJpbmcsIHNjZW5lOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpID0+IHtcclxuICAgIHRoaXMuc3RhdHMubG9nKGBDcmVhdGUgbmV3IHJvb20gPGI+JHtyb29tSWR9PC9iPmApXHJcblxyXG4gICAgbGV0IGdhbWU6IFBoYXNlckdhbWUgPSBhd2FpdCBHYW1lKHRoaXMsIHJvb21JZCwgeyBzY2VuZSwgbGV2ZWwgfSlcclxuXHJcbiAgICB0aGlzLnJvb21zW3Jvb21JZF0gPSB7XHJcbiAgICAgIHNjZW5lS2V5OiBzY2VuZSxcclxuICAgICAgbGV2ZWw6ICtsZXZlbCxcclxuICAgICAgcm9vbUlkOiByb29tSWQsXHJcbiAgICAgIHVzZXJzOiB7fSxcclxuICAgICAgZ2FtZTogZ2FtZSxcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBzY2VuZTogZ2FtZS5zY2VuZS5rZXlzWydNYWluU2NlbmUnXSxcclxuICAgICAgcmVtb3Zpbmc6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGF0cy5sb2coYFJvb20gPGI+JHtyb29tSWR9PC9iPiBjcmVhdGVkIWApXHJcbiAgfVxyXG5cclxuICByZW1vdmVSb29tID0gYXN5bmMgKHJvb21JZDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodGhpcy5yb29tc1tyb29tSWRdLnJlbW92aW5nKSByZXR1cm5cclxuICAgIHRoaXMuc3RhdHMubG9nKGBSZW1vdmluZyByb29tIDxiPiR7cm9vbUlkfTwvYj5gKVxyXG4gICAgdGhpcy5yb29tc1tyb29tSWRdLnJlbW92aW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5yb29tc1tyb29tSWRdLnNjZW5lLmV2ZW50cy5lbWl0KCdzdG9wU2NlbmUnKVxyXG5cclxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCB0aGlzLnJvb21zW3Jvb21JZF0uZ2FtZS5kZXN0cm95KHRydWUsIHRydWUpXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5yb29tc1tyb29tSWRdLmdhbWUgPSBudWxsXHJcbiAgICAgIGRlbGV0ZSB0aGlzLnJvb21zW3Jvb21JZF1cclxuXHJcbiAgICAgIHRoaXMuc3RhdHMubG9nKGBSb29tIDxiPiR7cm9vbUlkfTwvYj4gaGFzIGJlZW4gcmVtb3ZlZCFgKVxyXG4gICAgICB0aGlzLnN0YXRzLmxvZyhgUmVtYWluaW5nIHJvb21zOiAke09iamVjdC5rZXlzKHRoaXMucm9vbXMpLmxlbmd0aH1gKVxyXG4gICAgfSwgNTAwMClcclxuICB9XHJcblxyXG4gIGNob29zZVJvb20gPSAocHJvcHM6IHsgc2NlbmU6IHN0cmluZzsgbGV2ZWw6IG51bWJlciB9KTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IHsgc2NlbmUsIGxldmVsIH0gPSBwcm9wc1xyXG5cclxuICAgIGxldCByb29tcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vbXMpXHJcblxyXG4gICAgaWYgKHJvb21zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV1aWR2NCgpXHJcblxyXG4gICAgLy8gY2hlY2sgZm9yIHRoZSBuZXh0IHJvb20gd2l0aCAxIG9yIG1vcmUgZnJlZSBzcGFjZXNcclxuICAgIGxldCBjaG9zZW5Sb29tID0gbnVsbFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnJvb21zKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgcm9vbSA9IHRoaXMucm9vbXNbcm9vbXNbaV1dXHJcbiAgICAgIGxldCBjb3VudCA9IE9iamVjdC5rZXlzKHJvb20udXNlcnMpLmxlbmd0aFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY291bnQgPCBNQVhfUExBWUVSU19QRVJfUk9PTSAmJlxyXG4gICAgICAgIHJvb20uc2NlbmVLZXkgPT09IHNjZW5lICYmXHJcbiAgICAgICAgcm9vbS5sZXZlbCA9PT0gbGV2ZWwgJiZcclxuICAgICAgICAhdGhpcy5pc1JlbW92aW5nKHJvb21zW2ldKVxyXG4gICAgICApIHtcclxuICAgICAgICBjaG9zZW5Sb29tID0gcm9vbXNbaV1cclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hvc2VuUm9vbSkgcmV0dXJuIGNob3NlblJvb21cclxuXHJcbiAgICAvLyBjcmVhdGUgYSBuZXcgcm9vbSB3aXRoIGEgbmV3IHV1aWR2NCBpZFxyXG4gICAgcmV0dXJuIHV1aWR2NCgpXHJcbiAgfVxyXG5cclxuICBnZXRSb29tc0FycmF5KCkge1xyXG4gICAgbGV0IHJvb21zOiBSb29tW10gPSBbXVxyXG4gICAgT2JqZWN0LmtleXModGhpcy5yb29tcykuZm9yRWFjaCgocm9vbUlkKSA9PiB7XHJcbiAgICAgIHJvb21zLnB1c2godGhpcy5yb29tc1tyb29tSWRdKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByb29tc1xyXG4gIH1cclxuXHJcbiAgLyoqIFJldHVybnMgYW4gQXJyYXkgb2YgYWxsIHVzZXJzIGluIGEgc3BlY2lmaWMgcm9vbSAqL1xyXG4gIGdldFJvb21Vc2Vyc0FycmF5KHJvb21JZDogc3RyaW5nKSB7XHJcbiAgICBsZXQgdXNlcnM6IFVzZXJbXSA9IFtdXHJcblxyXG4gICAgaWYgKCF0aGlzLnJvb21FeGlzdHMocm9vbUlkKSkgcmV0dXJuIHVzZXJzXHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5yb29tc1tyb29tSWRdLnVzZXJzKS5mb3JFYWNoKCh1c2VySWQpID0+IHtcclxuICAgICAgdXNlcnMucHVzaCh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdXNlcnNcclxuICB9XHJcblxyXG4gIC8qKiBSZXR1cm5zIGFuIEFycmF5IG9mIGFsbCB1c2VycyBpbiBhbGwgcm9vbXMgKi9cclxuICBnZXRBbGxVc2Vyc0FycmF5KCkge1xyXG4gICAgbGV0IHVzZXJzOiBVc2VyW10gPSBbXVxyXG4gICAgT2JqZWN0LmtleXModGhpcy5yb29tcykuZm9yRWFjaCgocm9vbUlkKSA9PiB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vbXNbcm9vbUlkXS51c2VycykuZm9yRWFjaCgodXNlcklkKSA9PiB7XHJcbiAgICAgICAgdXNlcnMucHVzaCh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdXNlcnNcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3RVc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5pb05zcEdhbWUuY29ubmVjdGVkICYmIHRoaXMuaW9Oc3BHYW1lLmNvbm5lY3RlZFt1c2VySWRdKSB7XHJcbiAgICAgIHRoaXMuaW9Oc3BHYW1lLmNvbm5lY3RlZFt1c2VySWRdLmRpc2Nvbm5lY3QodHJ1ZSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSW5hY3RpdmVSb29tcygpIHtcclxuICAgIHRoaXMuZ2V0Um9vbXNBcnJheSgpLmZvckVhY2goKHJvb206IFJvb20pID0+IHtcclxuICAgICAgaWYgKCFyb29tLnVzZXJzIHx8IE9iamVjdC5rZXlzKHJvb20udXNlcnMpLmxlbmd0aCA9PT0gMCkgdGhpcy5yZW1vdmVSb29tKHJvb20ucm9vbUlkKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUluYWN0aXZlVXNlcnMoKSB7XHJcbiAgICB0aGlzLmdldEFsbFVzZXJzQXJyYXkoKS5mb3JFYWNoKCh1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICAgIGlmIChEYXRlLm5vdygpIC0gdXNlci5sYXN0VXBkYXRlID4gVVNFUl9LSUNLX1RJTUVPVVQpIHtcclxuICAgICAgICBsZXQgcmVtb3ZlZCA9IHRoaXMucmVtb3ZlVXNlcih1c2VyLnJvb21JZCwgdXNlci5pZCwgZmFsc2UpXHJcbiAgICAgICAgbGV0IGRpc2Nvbm5lY3RlZCA9IHRoaXMuZGlzY29ubmVjdFVzZXIodXNlci5pZClcclxuICAgICAgICBpZiAocmVtb3ZlZCAmJiBkaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc3RhdHMubG9nKGBLaWNrIHVzZXIgPGI+JHt1c2VyLmNsaWVudElkfTwvYj4gZnJvbSByb29tIDxiPiR7dXNlci5yb29tSWR9PC9iPmApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgTWF0dGVyR2FtZU9iamVjdCBmcm9tICcuLi9nYW1lL21hdHRlck9iamVjdHMvbWF0dGVyR2FtZU9iamVjdCdcclxuXHJcbi8qKiBIZWxwcyBwcmVwYXJpbmcgdGhlIG9iamVjdCB0byBzeW5jIHdpdGggdGhlIGNsaWVudCAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW5jTWFuYWdlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzdGF0aWMgcHJlcGFyZUZyb21QaGFzZXJHcm91cChncm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwLCBvYmplY3RzOiBhbnkpIHtcclxuICAgIGdyb3VwLmNoaWxkcmVuLml0ZXJhdGUoKHNwcml0ZTogYW55KSA9PiB7XHJcbiAgICAgIFN5bmNNYW5hZ2VyLnByZXBhcmVGcm9tUGhhc2VyU3ByaXRlKHNwcml0ZSwgb2JqZWN0cylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcHJlcGFyZUZyb21QaGFzZXJTcHJpdGUoc3ByaXRlOiBhbnksIG9iamVjdHM6IGFueSkge1xyXG4gICAgbGV0IG9iaiA9IHtcclxuICAgICAgLi4uc3ByaXRlLFxyXG4gICAgICAuLi50aGlzLmdldFhZKHNwcml0ZSlcclxuICAgIH1cclxuICAgIG9iamVjdHMucHVzaChTeW5jTWFuYWdlci5jbGVhbk9iamVjdFRvU3luYyhvYmopKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHByZXBhcmVGcm9tTWF0dGVyR2FtZU9iamVjdChnYW1lT2JqZWN0czogTWF0dGVyR2FtZU9iamVjdFtdLCBvYmplY3RzOiBhbnkpIHtcclxuICAgIGdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgb2JqZWN0cy5wdXNoKFN5bmNNYW5hZ2VyLmNsZWFuT2JqZWN0VG9TeW5jKG9iaikpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFhZKGNoaWxkOiBhbnkpIHtcclxuICAgIHJldHVybiB7IHg6IGNoaWxkLmJvZHkucG9zaXRpb24ueCArIGNoaWxkLmJvZHkud2lkdGggLyAyLCB5OiBjaGlsZC5ib2R5LnBvc2l0aW9uLnkgKyBjaGlsZC5ib2R5LmhlaWdodCAvIDIgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1lcmdlT2JqZWN0VG9TeW5jKG9iajogYW55LCBtZXJnZVRvOiBhbnlbXSkge1xyXG4gICAgbGV0IG1lcmdlZCA9IGZhbHNlXHJcbiAgICBPYmplY3Qua2V5cyhtZXJnZVRvKS5mb3JFYWNoKG8gPT4ge1xyXG4gICAgICBpZiAobyA9PT0gb2JqLmlkKSB7XHJcbiAgICAgICAgbWVyZ2VUb1tvYmouaWRdID0ge1xyXG4gICAgICAgICAgLi4ubWVyZ2VUb1tvYmouaWRdLFxyXG4gICAgICAgICAgLi4ub2JqXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lcmdlZCA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmICghbWVyZ2VkKVxyXG4gICAgICBtZXJnZVRvID0ge1xyXG4gICAgICAgIC4uLm1lcmdlVG8sXHJcbiAgICAgICAgW29iai5pZF06IG9ialxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gbWVyZ2VUb1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsZWFuT2JqZWN0VG9TeW5jKG9iajogYW55KSB7XHJcbiAgICBjb25zdCBhZGRUb09iamVjdFRvU3luYyA9IChrZXk6IHN0cmluZywgcHJvcDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChwcm9wICE9PSBudWxsKSBvYmplY3RUb1N5bmMgPSB7IC4uLm9iamVjdFRvU3luYywgW2tleV06IHByb3AgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvYmplY3RUb1N5bmM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fVxyXG5cclxuICAgIGFkZFRvT2JqZWN0VG9TeW5jKCdpZCcsIG9iai5pZCB8fCBvYmouYm9keS5pZClcclxuICAgIGFkZFRvT2JqZWN0VG9TeW5jKCd4Jywgb2JqLnggfHwgb2JqLmJvZHkucG9zaXRpb24ueCB8fCBudWxsKVxyXG4gICAgYWRkVG9PYmplY3RUb1N5bmMoJ3knLCBvYmoueSB8fCBvYmouYm9keS5wb3NpdGlvbi55IHx8IG51bGwpXHJcbiAgICBhZGRUb09iamVjdFRvU3luYygnYW5nbGUnLCBvYmouYW5nbGUgIT09ICd1bmRlZmluZWQnID8gb2JqLmFuZ2xlIDogbnVsbClcclxuICAgIGFkZFRvT2JqZWN0VG9TeW5jKCdkZWFkJywgb2JqLmRlYWQgIT09ICd1bmRlZmluZWQnID8gb2JqLmRlYWQgOiBudWxsKVxyXG4gICAgYWRkVG9PYmplY3RUb1N5bmMoJ3NraW4nLCBvYmouc2tpbiAhPT0gJ3VuZGVmaW5lZCcgPyBvYmouc2tpbiA6IG51bGwpXHJcbiAgICBhZGRUb09iamVjdFRvU3luYygnYW5pbWF0aW9uJywgb2JqLmFuaW1hdGlvbiB8fCBudWxsKVxyXG4gICAgYWRkVG9PYmplY3RUb1N5bmMoJ2RpcmVjdGlvbicsIG9iai5kaXJlY3Rpb24gfHwgbnVsbClcclxuICAgIGFkZFRvT2JqZWN0VG9TeW5jKCdzY2FsZScsIG9iai5zY2FsZSAmJiBvYmouc2NhbGUgIT09IDEgPyBvYmouc2NhbGUgOiBudWxsKVxyXG4gICAgYWRkVG9PYmplY3RUb1N5bmMoJ3RpbnQnLCBvYmoudGludCA/IG9iai50aW50IDogbnVsbClcclxuICAgIGFkZFRvT2JqZWN0VG9TeW5jKCdjbGllbnRJZCcsIG9iai5jbGllbnRJZCB8fCBudWxsKVxyXG4gICAgYWRkVG9PYmplY3RUb1N5bmMoJ2NhdGVnb3J5Jywgb2JqLmNhdGVnb3J5IHx8IG51bGwpXHJcblxyXG4gICAgLy8gT2JqZWN0LmtleXMob2JqZWN0VG9TeW5jKS5mb3JFYWNoKGtleSA9PiBvYmplY3RUb1N5bmNba2V5XSA9PSBudWxsICYmIGRlbGV0ZSBvYmplY3RUb1N5bmNba2V5XSlcclxuXHJcbiAgICByZXR1cm4gb2JqZWN0VG9TeW5jXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGtleXMoKSB7XHJcbiAgICAvLyBzb3J0IHRoZXNlIGJhc2VkIG9uIG1vc3QgdXNlZFxyXG4gICAgcmV0dXJuIFsnaWQnLCAneCcsICd5JywgJ2FuZ2xlJywgJ2RlYWQnLCAnc2tpbicsICdhbmltYXRpb24nLCAnZGlyZWN0aW9uJywgJ3NjYWxlJywgJ3RpbnQnLCAnY2xpZW50SWQnLCAnY2F0ZWdvcnknXVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlY29kZShkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IGtleXMgPSBTeW5jTWFuYWdlci5rZXlzXHJcbiAgICBsZXQgZGVjb2RlZEFycmF5OiBhbnlbXSA9IFtdXHJcblxyXG4gICAgbGV0IG9iajogYW55ID0ge31cclxuICAgIGRhdGEuc3BsaXQoJywnKS5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4ICUga2V5cy5sZW5ndGhdXHJcblxyXG4gICAgICAvLyBpZCAocmFkaXggMzYpXHJcbiAgICAgIGlmIChrZXkgPT09ICdpZCcpIHtcclxuICAgICAgICBvYmpba2V5XSA9IHBhcnNlSW50KHZhbHVlLCAzNikudG9TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICAgIC8vIG51bWJlcnNcclxuICAgICAgZWxzZSBpZiAoWydza2luJywgJ3NjYWxlJ10uaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgIG9ialtrZXldID0gdmFsdWUgIT09ICcnID8gcGFyc2VJbnQodmFsdWUpIDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIC8vIG51bWJlcnMgKHJhZGl4IDM2KVxyXG4gICAgICBlbHNlIGlmIChbJ3gnLCAneScsICdhbmdsZScsICdjbGllbnRJZCddLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlICE9PSAnJyA/IHBhcnNlSW50KHZhbHVlLCAzNikgOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgLy8gYm9vbGVhbnNcclxuICAgICAgZWxzZSBpZiAoWydkZWFkJ10uaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgIG9ialtrZXldID0gdmFsdWUgPT09ICcwJyA/IGZhbHNlIDogdmFsdWUgPT09ICcxJyA/IHRydWUgOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgLy8gc3RyaW5nc1xyXG4gICAgICBlbHNlIG9ialtrZXldID0gdmFsdWUgIT09ICcnID8gdmFsdWUgOiBudWxsXHJcblxyXG4gICAgICBpZiAoaW5kZXggJSBrZXlzLmxlbmd0aCA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgZGVjb2RlZEFycmF5LnB1c2goeyAuLi5vYmogfSlcclxuICAgICAgICBvYmogPSB7fVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBkZWNvZGVkQXJyYXlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBlbmNvZGUob2JqczogYW55W10pIHtcclxuICAgIGNvbnN0IGtleXMgPSBTeW5jTWFuYWdlci5rZXlzXHJcblxyXG4gICAgbGV0IGVuY29kZWRTdHJpbmcgPSAnJ1xyXG4gICAgb2Jqcy5mb3JFYWNoKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgbGV0IHZhbHVlID0gb2JqW2tleV1cclxuXHJcbiAgICAgICAgICAvLyBib29sZWFuc1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IG9ialtrZXldID09PSBmYWxzZSA/IDAgOiAxXHJcbiAgICAgICAgICAvLyBzb21lIG51bWJlcnMgdG8gcmFkaXggMzZcclxuICAgICAgICAgIGVsc2UgaWYgKFsnaWQnLCAneCcsICd5JywgJ2FuZ2xlJywgJ2NsaWVudElkJ10uaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9ICt2YWx1ZVxyXG4gICAgICAgICAgICB2YWx1ZSA9ICt2YWx1ZS50b0ZpeGVkKDApXHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoMzYpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZW5jb2RlZFN0cmluZyArPSBgJHt2YWx1ZX0sYFxyXG4gICAgICAgIH0gZWxzZSBlbmNvZGVkU3RyaW5nICs9ICcsJ1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZW5jb2RlZFN0cmluZy5zbGljZSgwLCAtMSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHBpZHVzYWdlIGZyb20gJ3BpZHVzYWdlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXHJcbmltcG9ydCBJb1N0YXRzIGZyb20gJy4uL3NvY2tldC9pb1N0YXRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIHtcclxuICByb3V0ZXI6IGV4cHJlc3MuUm91dGVyXHJcbiAgdGltZSA9IG5ldyBEYXRlKClcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJvb21NYW5hZ2VyOiBSb29tTWFuYWdlciwgcHVibGljIGlvU3RhdHM6IElvU3RhdHMpIHtcclxuICAgIHRoaXMucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxuICAgIHRoaXMucm91dGVyLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICByZXMuc2VuZChgXHJcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8aGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxyXG4gICAgICAgICAgPHRpdGxlPlBoYXNlciAzOiBNdWx0aXBsYXllciBFeGFtcGxlPC90aXRsZT5cclxuICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCbGlua01hY1N5c3RlbUZvbnQsLWFwcGxlLXN5c3RlbSxcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLFwiRmlyYSBTYW5zXCIsXCJEcm9pZCBTYW5zXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweCA4cHggOHB4IDBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzY4MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDxoMT5QaGFzZXIgMzogUmVhbC1UaW1lIE11bHRpcGxheWVyIEdhbWUgd2l0aCBQaHlzaWNzPC9oMT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvcGxheVwiPlBsYXkgdGhlIEdhbWU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL3BoeXNpY3NcIj5EZWJ1ZyB0aGUgUGh5c2ljczwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvc3RhdHNcIj5WaWV3IFNlcnZlciBTdGF0czwvYT4gICAgICAgICAgXHJcbiAgICAgICAgPC9ib2R5PmApXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucm91dGVyLmdldCgnL3BsYXknLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9kaXN0L2NsaWVudC9pbmRleC5odG1sJykpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucm91dGVyLmdldCgnL3BoeXNpY3MnLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgcmVzLnNlbmQoYFxyXG4gICAgICA8IURPQ1RZUEUgaHRtbD5cclxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICAgIDx0aXRsZT5Eb2N1bWVudDwvdGl0bGU+XHJcbiAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQmxpbmtNYWNTeXN0ZW1Gb250LC1hcHBsZS1zeXN0ZW0sXCJTZWdvZSBVSVwiLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxcIkZpcmEgU2Fuc1wiLFwiRHJvaWQgU2Fuc1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21hdHRlclwiPkRlYnVnIE1hdHRlciBQaHlzaWNzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FyY2FkZVwiPkRlYnVnIEFyY2FkZSBQaHlzaWNzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvYm9keT5gKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnJvdXRlci5nZXQoJy9tYXR0ZXInLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9kaXN0L3BoeXNpY3MvaW5kZXguaHRtbCcpKVxyXG4gICAgfSlcclxuICAgIHRoaXMucm91dGVyLmdldCgnL2FyY2FkZScsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2Rpc3QvcGh5c2ljcy9pbmRleC5odG1sJykpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucm91dGVyLmdldCgnL3N0YXRzJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vZGlzdC9zdGF0cy9pbmRleC5odG1sJykpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucm91dGVyLmdldCgnL3N0YXRzL2dldCcsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICBwaWR1c2FnZShwcm9jZXNzLnBpZCwgKGVyciwgc3RhdHMpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyciB9KVxyXG5cclxuICAgICAgICBsZXQgb2JqZWN0cyA9IGlvU3RhdHMuZ2V0VG90YWxPYmplY3RzKClcclxuXHJcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAuLi5zdGF0cyxcclxuICAgICAgICAgIHVzZXJzOiByb29tTWFuYWdlci5nZXRBbGxVc2Vyc0FycmF5KCkubGVuZ3RoLFxyXG4gICAgICAgICAgcm9vbXM6IHJvb21NYW5hZ2VyLmdldFJvb21zQXJyYXkoKS5sZW5ndGgsXHJcbiAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxyXG4gICAgICAgICAgdGltZTogdGhpcy50aW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5qc29uKHsgcGF5bG9hZCB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCdcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcbmNvbnN0IHNlcnZlciA9IHJlcXVpcmUoJ2h0dHAnKS5TZXJ2ZXIoYXBwKVxyXG5pbXBvcnQgU29ja2V0SU9TdGF0aWMgZnJvbSAnc29ja2V0LmlvJ1xyXG5jb25zdCBpbyA9IFNvY2tldElPU3RhdGljKHNlcnZlcilcclxuXHJcbmltcG9ydCBSb29tTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL3Jvb21NYW5hZ2VyJ1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcydcclxuaW1wb3J0IElvU3RhdHMgZnJvbSAnLi9zb2NrZXQvaW9TdGF0cydcclxuaW1wb3J0IElvR2FtZSBmcm9tICcuL3NvY2tldC9pb0dhbWUnXHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwXHJcblxyXG4vLyBjcmVhdGUgMiBzb2NrZXQuaW8gbmFtZXNwYWNlc1xyXG5jb25zdCBpb05zcEdhbWUgPSBpby5vZignL0cnIC8qIHNob3J0IGZvciBzdGF0cyAqLylcclxuY29uc3QgaW9Oc3BTdGF0cyA9IGlvLm9mKCcvUycgLyogc2hvcnQgZm9yIHN0YXRzICovKVxyXG5cclxuY29uc3QgaW9TdGF0cyA9IG5ldyBJb1N0YXRzKGlvTnNwU3RhdHMpXHJcbmNvbnN0IHJvb21NYW5hZ2VyID0gbmV3IFJvb21NYW5hZ2VyKGlvTnNwR2FtZSwgaW9TdGF0cylcclxuY29uc3QgaW9HYW1lID0gbmV3IElvR2FtZShpb05zcEdhbWUsIGlvU3RhdHMsIHJvb21NYW5hZ2VyKVxyXG5cclxuYXBwLnVzZShoZWxtZXQoKSlcclxuYXBwLnVzZShjb21wcmVzc2lvbigpKVxyXG5cclxuYXBwLnVzZSgnL3N0YXRpYycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8nKSkpXHJcbmFwcC51c2UoJy8nLCBuZXcgUm91dGVzKHJvb21NYW5hZ2VyLCBpb1N0YXRzKS5yb3V0ZXIpXHJcblxyXG5zZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnQXBwIGlzIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBwb3J0KVxyXG59KVxyXG4iLCJpbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXHJcbmltcG9ydCBJb1N0YXRzIGZyb20gJy4vaW9TdGF0cydcclxuXHJcbi8qKiBIYW5kbGVzIGFsbCB0aGUgY29tbXVuaWNhdGlvbiBmb3IgL2dhbWUgbmFtZXNwYWNlIChpb05zcEdhbWUpICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElvR2FtZSB7XHJcbiAgdGltZSA9IG5ldyBEYXRlKClcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGlvTnNwR2FtZTogU29ja2V0SU8uTmFtZXNwYWNlLCBwdWJsaWMgaW9TdGF0czogSW9TdGF0cywgcHVibGljIHJvb21NYW5hZ2VyOiBSb29tTWFuYWdlcikge1xyXG4gICAgaW9Oc3BHYW1lLm9uKCdjb25uZWN0aW9uJywgYXN5bmMgKHNvY2tldDogU29ja2V0KSA9PiB7XHJcbiAgICAgIHJvb21NYW5hZ2VyLmdlbmVyYXRlQ2xpZW50SWQoc29ja2V0KVxyXG5cclxuICAgICAgc29ja2V0Lm9uKCdqb2luUm9vbScsIGFzeW5jIChkYXRhOiB7IHNjZW5lOiBzdHJpbmc7IGxldmVsOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2NlbmUsIGxldmVsIH0gPSBkYXRhXHJcbiAgICAgICAgYXdhaXQgcm9vbU1hbmFnZXIuam9pblJvb20oc29ja2V0LCBzY2VuZSwgK2xldmVsKVxyXG4gICAgICAgIGlvU3RhdHMubG9nKGBOZXcgdXNlciA8Yj4ke3NvY2tldC5pZH08L2I+IGNvbm5lY3RlZCEgdG8gcm9vbSAke3NvY2tldC5yb29tfWApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgcm9vbU1hbmFnZXIubGVhdmVSb29tKHNvY2tldClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignY2hhbmdlUm9vbScsIChkYXRhOiB7IHNjZW5lOiBzdHJpbmc7IGxldmVsOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgIHJvb21NYW5hZ2VyLmNoYW5nZVJvb20oc29ja2V0LCBkYXRhLnNjZW5lLCArZGF0YS5sZXZlbClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignc2VuZFBpbmcnLCAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXRQb25nJywgaWQpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzb2NrZXQub24oJ1UnIC8qIHNob3J0IGZvciB1cGRhdGVEdWRlICovLCAodXBkYXRlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJvb21NYW5hZ2VyLmlzUmVtb3Zpbmcoc29ja2V0LnJvb20pKSByZXR1cm5cclxuICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnVzZXJFeGlzdHMoc29ja2V0LnJvb20sIHNvY2tldC5pZCkpIHJldHVyblxyXG5cclxuICAgICAgICByb29tTWFuYWdlci5yb29tc1tzb2NrZXQucm9vbV0udXNlcnNbc29ja2V0LmlkXS5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKVxyXG4gICAgICAgIHJvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS5zY2VuZS5ldmVudHMuZW1pdCgnVScgLyogc2hvcnQgZm9yIHVwZGF0ZUR1ZGUgKi8sIHtcclxuICAgICAgICAgIGNsaWVudElkOiBzb2NrZXQuY2xpZW50SWQsXHJcbiAgICAgICAgICB1cGRhdGVzXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignZ2V0SW5pdGlhbFN0YXRlJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb29tTWFuYWdlci5pc1JlbW92aW5nKHNvY2tldC5yb29tKSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKCFyb29tTWFuYWdlci5yb29tRXhpc3RzKHNvY2tldC5yb29tKSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgdGltZTogdGhpcy50aW1lLFxyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgTyAvKiBzaG9ydCBmb3Igb2JqZWN0cyAqLzogcm9vbU1hbmFnZXIucm9vbXNbc29ja2V0LnJvb21dLnNjZW5lLmdldEluaXRpYWxTdGF0ZSgpLFxyXG4gICAgICAgICAgY29ubmVjdENvdW50ZXI6IHJvb21NYW5hZ2VyLmdldFJvb21Vc2Vyc0FycmF5KHNvY2tldC5yb29tKS5sZW5ndGgsXHJcbiAgICAgICAgICBpbml0aWFsU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICByb29tSWQ6IHNvY2tldC5yb29tXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb2NrZXQuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxyXG4gICAgICAgIC8vIGlvTnNwR2FtZS5pbihzb2NrZXQucm9vbSkuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiLyoqIEhhbmRsZXMgYWxsIHRoZSBjb21tdW5pY2F0aW9uIGZvciAvc3RhdHMgbmFtZXNwYWNlIChpb05zcEdhbWUpICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElvU3RhdHMge1xyXG4gIHRvdGFsT2JqZWN0czogeyBbcm9vbUlkOiBzdHJpbmddOiB7IGNvdW50OiBudW1iZXIgfSB9ID0ge31cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGlvTnNwU3RhdHM6IFNvY2tldElPLk5hbWVzcGFjZSkge31cclxuXHJcbiAgLyoqIFRoaXMgZnVuY3Rpb24gd2lsbCBjb25zb2xlLmxvZyBhbmQgc2VuZCBpdCB0byB0aGUgaW9TdGF0cyAqL1xyXG4gIGxvZyhsb2c6IHN0cmluZywgbG9nSW5Ob2RlID0gZmFsc2UpIHtcclxuICAgIGlmIChsb2dJbk5vZGUpIGNvbnNvbGUubG9nKCdMT0c6ICcgKyBsb2cpXHJcbiAgICB0aGlzLmlvTnNwU3RhdHMuZW1pdCgnZ2V0TG9nJywgeyBkYXRlOiBuZXcgRGF0ZSgpLCBsb2c6IGxvZyB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIEdldCB0aGUgdG90YWwgb2Ygb2JqZWN0cyBpbiB0aGUgZ2FtZSAqL1xyXG4gIGdldFRvdGFsT2JqZWN0cygpIHtcclxuICAgIGxldCBjb3VudCA9IDBcclxuICAgIE9iamVjdC5rZXlzKHRoaXMudG90YWxPYmplY3RzKS5mb3JFYWNoKHJvb21JZCA9PiB7XHJcbiAgICAgIGNvdW50ICs9IHRoaXMudG90YWxPYmplY3RzW3Jvb21JZF0uY291bnRcclxuICAgIH0pXHJcbiAgICByZXR1cm4gY291bnRcclxuICB9XHJcblxyXG4gIHNldFRvdGFsT2JqZWN0cyhyb29tSWQ6IHN0cmluZywgY291bnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy50b3RhbE9iamVjdHMgPSB7IC4uLnRoaXMudG90YWxPYmplY3RzLCBbcm9vbUlkXTogeyBjb3VudDogY291bnQgfSB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb3RhbE9iamVjdHMocm9vbUlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnRvdGFsT2JqZWN0cyAmJiB0aGlzLnRvdGFsT2JqZWN0c1tyb29tSWRdKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnRvdGFsT2JqZWN0c1tyb29tSWRdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnZWNrb3MuaW8vcGhhc2VyLW9uLW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGhhc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBpZHVzYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=