'use strict';

var sectionButtons = document.querySelectorAll('section');
var section = document.getElementsByTagName('p');
var firstFunctionIndexNumbers = [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21,, 24, 25];
var colors = document.getElementById('stage1');
var numbers1 = document.getElementById('stage2');
var numbers2 = document.getElementById('stage3');

var changColor = function changColor() {
  for (var i = 0; i < sectionButtons.length; i++) {
    sectionButtons[i].classList.toggle('red');
  }
};
var changColor2 = function changColor2() {
  for (var i = 0; i < sectionButtons.length; i++) {
    sectionButtons[i].classList.toggle('blue');
  }
};

//Choose a color and loop through number of time that name of the color is long
function wrapper() {
  var _this = this;

  var runColor = function runColor() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    var _loop = function _loop(i) {
      setTimeout(function () {
        if (firstFunctionIndexNumbers.includes(i)) {
          changColor();
        } else {
          changColor2();
        }
      }, i * 500);
    };

    for (var i = 0; i < thisButtonLength * 2; i++) {
      _loop(i);
    }
    //Display numbers instead of colors
    setTimeout(function () {
      colors.classList.add('hide');
      numbers1.classList.remove('hide');
    }, thisButtonLength * 1000);
  };
  runColor();
};

//Choose a number and loop through number of times as number picked
function wrapper2() {
  var _this2 = this;

  var runNumber = function runNumber() {
    var thisNumber = _this2.childNodes[0].nodeValue;
    var numberValue = number(thisNumber);

    var _loop2 = function _loop2(i) {
      setTimeout(function () {
        if (firstFunctionIndexNumbers.includes(i)) {
          changColor();
        } else {
          changColor2();
        }
      }, i * 500);
    };

    for (var i = 0; i < numberValue * 2; i++) {
      _loop2(i);
    }
    //Display numbers instead of colors
    setTimeout(function () {
      numbers1.classList.add('hide');
      numbers2.classList.remove('hide');
    }, numberValue * 1000);
  };
  runNumber();
};

for (var i = 0; i < sectionButtons.length; i++) {
  sectionButtons[i].addEventListener('click', wrapper);
};