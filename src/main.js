const sectionButtons = document.querySelectorAll('section');
const section = document.getElementsByTagName('p');
const firstFunctionIndexNumbers = [0,1,4,5,8,9,12,13,16,17,20,21,,24,25];
const colors = document.getElementById('stage1');
const numbers = document.getElementById('stage2');
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

  const loopThrough = () => {
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
        numbers.classList.remove('hide');
        numbers.classList.add('show');
      }, thisButtonLength * 1000);
    };
  loopThrough();
};

for (let i = 0; i < sectionButtons.length; i++) {
	sectionButtons[i].addEventListener('click', wrapper);
};




