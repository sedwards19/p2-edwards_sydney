const sectionButtons = document.querySelectorAll('section');
const section = document.getElementsByTagName('p');
const firstFunctionIndexNumbers = [0,1,4,5,8,9,12,13,16,17,20,21,,24,25];
const colors = document.getElementById('stage1');
const numbers1 = document.getElementById('stage2');
const numbers2 = document.getElementById('stage3');

const changColor = () => {
  for (let i = 0; i < sectionButtons.length; i++) {
    sectionButtons[i].classList.toggle('red');
  }
};
const changColor2 = () => {
  for (let i = 0; i < sectionButtons.length; i++) {
    sectionButtons[i].classList.toggle('blue');
  }
};

//Choose a color and loop through number of time that name of the color is long
function wrapper() {

  const runColor = () => {
  	let thisButtonText = this.childNodes[0].nodeValue;
  	let thisButtonLength = thisButtonText.length;

    for (let i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function() {
    	 if (firstFunctionIndexNumbers.includes(i)) {
        changColor();
        } else {
        changColor2();
        }}, i *500);
      }
      //Display numbers instead of colors
      setTimeout(function(){
        colors.classList.add('hide');
        numbers1.classList.remove('hide');
      }, thisButtonLength * 1000);
    };
  runColor();
};

//Choose a number and loop through number of times as number picked
function wrapper2() {

  const runNumber = () => {
    let thisNumber = this.childNodes[0].nodeValue;
    let numberValue = number(thisNumber);

    for (let i = 0; i < numberValue * 2; i++) {
      setTimeout(function() {
       if (firstFunctionIndexNumbers.includes(i)) {
        changColor();
        } else {
        changColor2();
        }}, i *500);
      }
      //Display numbers instead of colors
      setTimeout(function(){
        numbers1.classList.add('hide');
        numbers2.classList.remove('hide');
      }, numberValue * 1000);
    };
  runNumber();
};

for (let i = 0; i < sectionButtons.length; i++) {
	sectionButtons[i].addEventListener('click', wrapper);
};




