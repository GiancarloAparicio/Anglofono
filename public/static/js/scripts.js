(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var $menuBar = document.querySelector(".menu-bar");
var $menu = document.querySelector(".menu");
var $menuItem = document.querySelectorAll(".menu-item");

$menuBar.addEventListener("click", function () {
  $menuBar.classList.toggle("active");
  $menu.classList.toggle("active");
});

$menuItem.forEach(function (Item) {
  Item.addEventListener("click", function () {
    $menuBar.click();
  });
});

},{}],2:[function(require,module,exports){
"use strict";

require("./components/_navegacion");

},{"./components/_navegacion":1}]},{},[2]);

//# sourceMappingURL=scripts.js.map
