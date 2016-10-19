(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
// set the scene size
var WIDTH = 250;
var HEIGHT = 250;
// set some camera attributes
var VIEW_ANGLE = 75;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 1000;
var Cube = (function () {
    function Cube(selector) {
        this.rotVelocities = {
            x: 0.01,
            y: 0.01,
            z: 0.01
        };
        this.selector = selector;
        this.canvasElement = $(this.selector);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvasElement.get(0),
            alpha: true,
            antialias: true // smooth edges
        });
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.cube = Cube.createCube();
        // create a cube and add it to the scene
        this.scene.add(this.cube);
        // add the camera to the scene
        this.scene.add(this.camera);
        // move camera back so we can see the cube
        this.camera.position.z = 2;
        // set the renderer size
        this.renderer.setSize(WIDTH, HEIGHT);
    }
    /**
     * Creates a new cube object
     * @return {THREE.Mesh} a cube
     */
    Cube.createCube = function (width, height, depth) {
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        if (depth === void 0) { depth = 1; }
        var geometry = new THREE.BoxGeometry(width, height, depth);
        var material = new THREE.MeshNormalMaterial();
        return new THREE.Mesh(geometry, material);
    };
    /**
     * Renders the scene
     * @return {void}
     */
    Cube.prototype.render = function () {
        // render the scene
        this.renderer.render(this.scene, this.camera);
        // rotate cube each render
        this.cube.rotation.x += this.rotVelocities.x;
        this.cube.rotation.y += this.rotVelocities.y;
        this.cube.rotation.z += this.rotVelocities.z;
    };
    Object.defineProperty(Cube.prototype, "rotX", {
        /**
         * gets cube rotation velocity on x axis
         */
        get: function () {
            return this.rotVelocities.x;
        },
        /**
         * sets cube rotation velocity on x axis
         */
        set: function (velocity) {
            this.rotVelocities.x = velocity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cube.prototype, "rotY", {
        /**
         * gets cube rotation velocity on y axis
         */
        get: function () {
            return this.rotVelocities.y;
        },
        /**
         * sets cube rotation velocity on y axis
         */
        set: function (velocity) {
            this.rotVelocities.y = velocity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cube.prototype, "rotZ", {
        /**
         * gets cube rotation velocity on z axis
         */
        get: function () {
            return this.rotVelocities.z;
        },
        /**
         * sets cube rotation velocity on z axis
         */
        set: function (velocity) {
            this.rotVelocities.z = velocity;
        },
        enumerable: true,
        configurable: true
    });
    return Cube;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cube;
},{}],2:[function(require,module,exports){
"use strict";
/**
 * Returns a string saying hello
 * @param  {string} name name of entity saying hello
 * @return {string}      string saying hello
 */
function sayHello(name) {
    return name + " says, \"Hello.\"";
}
exports.sayHello = sayHello;
},{}],3:[function(require,module,exports){
"use strict";
/// <reference path='typings/tsd.d.ts' />
var greet_1 = require('./greet');
var cube_1 = require('./cube');
// a cube object
var cube = new cube_1.default('#3dcube');
/**
 * Uses jQuery to update a div's contents
 * @param  {string} divName name of div to update
 * @param  {string} name    name of entity saying hello
 * @return {void}
 */
function showHello(divName, name) {
    $("#" + divName).text(greet_1.sayHello(name));
}
/**
 * Takes the rotation on each axis of the cube and arbitrarily adds or subtracts
 * 0.002
 * @return {void}
 */
function changeItUp() {
    cube.rotX = Math.random() > 0.5 ? cube.rotX + 0.002 : cube.rotX - 0.002;
    cube.rotY = Math.random() > 0.5 ? cube.rotY + 0.002 : cube.rotY - 0.002;
    cube.rotZ = Math.random() > 0.5 ? cube.rotZ + 0.002 : cube.rotZ - 0.002;
}
/**
 * Begins rendering cube
 * @return {void}
 */
function render() {
    //renderCube();
    requestAnimationFrame(render);
    cube.render();
}
showHello('greeting', 'TypeScript');
render();
// interval on changeItUp()
var changeItUpInterval = setInterval(changeItUp, 250);
},{"./cube":1,"./greet":2}]},{},[3])


//# sourceMappingURL=bundle.js.map
