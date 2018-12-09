//Ask users to choose color & 
const sectionButtons = document.querySelectorAll('section');
const section = document.querySelector('p');

const firstFunctionIndexNumbers = [0,1,4,5,8,9,12,13,16,17,20,21,,24,25];

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
        }
      }, i *500);
    }
    
  };
  loopThrough();
};

for (let i = 0; i < sectionButtons.length; i++) {
	sectionButtons[i].addEventListener('click', wrapper);
};




