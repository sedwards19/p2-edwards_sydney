'use strict';

//Ask users to choose color & 
var sectionButtons = document.querySelectorAll('section');
var section = document.getElementsByTagName('p');

var firstFunctionIndexNumbers = [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21,, 24, 25];

var changColor = function changColor() {
  section.classList.toggle('red'); //replace line with loop
};

var changColor2 = function changColor2() {
  section.classList.toggle('blue'); //replace line with loop
};

function wrapper() {
  var _this = this;

  var loopThrough = function loopThrough() {
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
  };
  loopThrough();
};

for (var i = 0; i < sectionButtons.length; i++) {
  sectionButtons[i].addEventListener('click', wrapper);
};