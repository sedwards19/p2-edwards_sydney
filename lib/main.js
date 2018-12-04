'use strict';

var sectionButtons = document.querySelectorAll('section');
var section = document.querySelector('p');

function wrapper() {
  var _this = this;

  var changColor = function changColor() {
    section.classList.toggle('black');
  };

  var loopThrough = function loopThrough() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        changColor();
      }, i * 1000);
    }
  };
  loopThrough();
};

for (var i = 0; i < sectionButtons.length; i++) {
  sectionButtons[i].addEventListener('click', wrapper);
};