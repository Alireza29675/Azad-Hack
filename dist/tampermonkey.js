// ==UserScript==
// @name         Azad University Hack
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hacking tools for Azad Students
// @author       Me
// @match        http://edu.kiau.ac.ir/Karnameha.aspx
// @grant        none
// ==/UserScript==

(function() {/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scoresData = __webpack_require__(1);

var _scoresData2 = _interopRequireDefault(_scoresData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = function $(query) {
    return document.querySelector(query);
};
var $$ = function $$(query) {
    return document.querySelectorAll(query);
};

var Hack = function () {
    function Hack() {
        _classCallCheck(this, Hack);

        this.selectors = {
            karnameKol: '#ctl00_UpdatePanel1 > table > tbody > tr:nth-child(1)',
            printKarname: '#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_lnkBtnPrintTop',
            semesterMenuItems: "#ctl00_ContentPlaceHolder1_TermList1_grdTermList > tbody > tr",
            selectedSemester: ".GridViewSelectedRow",
            semesterLabel: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_lblMessage",
            scoreTableRows: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_GridView1 .GridViewRow, #ctl00_ContentPlaceHolder1_idrizkarnamehuc2_GridView1 .GridViewAlternatingRow",
            sumUnits: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblSelectCourse",
            sumAcceptedUnits: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblAcceptCourse",
            sumAffectedUnits: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblEffective",
            sumScores: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblGrant",
            average: "#ctl00_ContentPlaceHolder1_idrizkarnamehuc2_idsum_lblAverage"
        };
        this.render();
    }

    _createClass(Hack, [{
        key: 'calculateTerm',
        value: function calculateTerm() {
            var selected = $(this.selectors.selectedSemester);
            var menuItems = $$(this.selectors.semesterMenuItems);
            if (selected === null) {
                var label = $(this.selectors.semesterLabel).innerHTML;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = menuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item.querySelector('a') !== null) if (item.querySelector('a').innerHTML == label) selected = item;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            var index = -2;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = menuItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _item = _step2.value;

                    index++;
                    if (_item === selected) return index;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return -1;
        }
    }, {
        key: 'customizeRow',
        value: function customizeRow(tr, scoreData) {
            var types = ['عـــــــــــادي', 'بلااثر', 'حــــــذف مازاد', 'غــــــيبت موجه', 'غـــيبت غير موجه', 'حذف مــــاده 35'];
            if (scoreData.name !== undefined) tr.children[2].innerHTML = scoreData.name;
            if (scoreData.units !== undefined) tr.children[3].innerHTML = scoreData.units.toFixed(1);
            if (scoreData.practicalUnits !== undefined) tr.children[4].innerHTML = scoreData.practicalUnits.toFixed(1);
            if (scoreData.point !== undefined) tr.children[5].innerHTML = scoreData.point.toFixed(2);
            if (scoreData.type !== undefined) tr.children[6].innerHTML = types[scoreData.type];

            var unitInNum = parseInt(tr.children[4].innerHTML) || 0;
            var practicalUnitInNum = parseInt(tr.children[3].innerHTML) || 0;
            tr.children[7].innerHTML = ((unitInNum + practicalUnitInNum) * parseFloat(tr.children[5].innerHTML)).toFixed(2);
        }
    }, {
        key: 'getRowData',
        value: function getRowData(tr) {
            return {
                name: tr.children[2].innerHTML,
                units: parseInt(tr.children[4].innerHTML) || 0,
                practicalUnit: parseInt(tr.children[3].innerHTML) || 0,
                point: parseFloat(tr.children[5].innerHTML),
                score: parseFloat(tr.children[7].innerHTML)
            };
        }
    }, {
        key: 'putDataIntoTables',
        value: function putDataIntoTables() {
            var term = this.calculateTerm();
            var rows = $$(this.selectors.scoreTableRows);
            var index = 0;
            var sumUnits = 0,
                sumAcceptedUnits = 0,
                sumAffectedUnits = 0,
                sumScores = 0,
                average = void 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = rows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var row = _step3.value;

                    if (_scoresData2.default[term][index] !== undefined) this.customizeRow(row, _scoresData2.default[term][index]);
                    var rowData = this.getRowData(row);
                    sumUnits += rowData.units + rowData.practicalUnit;
                    if (rowData.point >= 10) {
                        sumAcceptedUnits += rowData.units + rowData.practicalUnit;
                        sumAffectedUnits = sumAcceptedUnits;
                        sumScores += rowData.score;
                    }
                    average = sumScores / sumAffectedUnits;
                    $(this.selectors.sumUnits).innerHTML = parseInt(sumUnits);
                    $(this.selectors.sumAcceptedUnits).innerHTML = parseInt(sumAcceptedUnits);
                    $(this.selectors.sumAffectedUnits).innerHTML = parseInt(sumAffectedUnits);
                    $(this.selectors.sumScores).innerHTML = sumScores.toFixed(2);
                    $(this.selectors.average).innerHTML = average.toFixed(2);
                    index++;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: 'removeSomeParts',
        value: function removeSomeParts() {
            if ($(this.selectors.karnameKol) !== undefined) $(this.selectors.karnameKol).style.display = 'none';
            if ($(this.selectors.printKarname) !== undefined) $(this.selectors.printKarname).style.display = 'none';
        }
    }, {
        key: 'render',
        value: function render() {
            try {
                this.removeSomeParts();
            } catch (e) {
                console.error(e);
            }
            try {
                this.putDataIntoTables();
            } catch (e) {
                console.error(e);
            }
            requestAnimationFrame(this.render.bind(this));
        }
    }]);

    return Hack;
}();

window.hack = new Hack();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
struct = {
    name,
    units,
    practicalUnits,
    point,
    type: [
        'عـــــــــــادي',
        'بلااثر',
        'حــــــذف مازاد',
        'غــــــيبت موجه',
        'غـــيبت غير موجه',
        'حذف مــــاده 35',
    ]
}
*/

exports.default = [
// 0
[{ point: 20, type: 0 }, { point: 20, type: 0 }, { point: 20, type: 0 }, { point: 20, type: 0 }, { point: 20, type: 0 }],
// 1
[],
// 2
[],
// 3
[]];

/***/ })
/******/ ]);})();