'use strict';

//const sectionButtons = document.querySelectorAll('section');
//const section = document.getElementsByTagName('p');
var stage1 = document.getElementsByClassName('stage1');
var stage2 = document.getElementsByClassName('stage2');
var stage3 = document.getElementsByClassName('stage3');
var color = document.getElementsByClassName('colors');
var number2 = document.getElementsByClassName('numbers2');
var number3 = document.getElementsByClassName('numbers3');
var article = document.querySelector('#stage1');
var article2 = document.querySelector('#stage2');
var article3 = document.querySelector('#stage3');

var christmasFortunes = ['Have yourself a merry little Christmas!', 'You will have a date for the New Year!', 'Santa Clause is coming to town & bringing you a present!', 'Treat yourself to a Hallmark movie!', 'Eat all of the candy canes that you want!', 'Go see the Christmas lights!', 'Take yourself ice skating!', 'Make Christmas cookies for your coworkers!', 'Sing Christmas carols while wrapping presents!', 'Send a Christmas card!'];

var yourFortune = document.querySelector('#fortune-wrapper');
var yourFortunePlaceholder = document.querySelector('#fortune-wrapper p span');

//Choose a color and loop through number of time that name of the color is long
function wrapper() {
  var _this = this;

  var flash = function flash() {
    article.classList.toggle('transition');
  };

  var runColor = function runColor() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        flash();
      }, i * 500);
    }

    //Display numbers instead of colors
    setTimeout(function () {
      stage1[0].classList.add('hide');
      stage2[0].classList.remove('hide');
    }, thisButtonLength * 1000);
  };
  runColor();
};

for (var i = 0; i < color.length; i++) {
  color[i].addEventListener('click', wrapper);
};

//Choose a number and loop through number of times as number picked
function wrapper2() {
  var _this2 = this;

  var flash2 = function flash2() {
    article2.classList.toggle('transition');
  };

  var runColor2 = function runColor2() {
    var thisNumber = _this2.childNodes[0].nodeValue;
    var numberValue = Number(thisNumber);

    for (var _i = 0; _i < numberValue * 2; _i++) {
      setTimeout(function () {
        flash2();
      }, _i * 500);
    }

    setTimeout(function () {
      stage2[0].classList.add('hide');
      stage2[0].classList.remove('show');
      stage3[0].classList.remove('hide');
      stage3[0].classList.add('show');
    }, numberValue * 1000);
  };
  runColor2();
};

for (var _i2 = 0; _i2 < number2.length; _i2++) {
  number2[_i2].addEventListener('click', wrapper2);
};

//Choose a number and display the fortune
function wrapper3() {
  var _this3 = this;

  var flash3 = function flash3() {
    article3.classList.toggle('transition');
  };

  var runColor3 = function runColor3() {
    var thisNumber = _this3.childNodes[0].nodeValue;
    var numberValue = Number(thisNumber);
    for (var _i3 = 0; _i3 < numberValue * 2; _i3++) {
      setTimeout(function () {
        flash3();
      }, _i3 * 500);
    }
    setTimeout(function () {
      stage3[0].classList.add('hide');
      stage3[0].classList.remove('show');
      //Display fortunes
      yourFortune.classList.remove('hide');
      yourFortune.classList.add('fortune-show');
      christmasFortunes.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      var fortuneText = document.createTextNode(christmasFortunes[0]);
      yourFortunePlaceholder.appendChild(fortuneText);
    }, numberValue * 1000);
  };
  runColor3();
};
for (var _i4 = 0; _i4 < number3.length; _i4++) {
  number3[_i4].addEventListener('click', wrapper3);
};