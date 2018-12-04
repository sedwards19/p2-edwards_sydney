const sectionButtons = document.querySelectorAll('section');
const section = document.querySelector('p');

function wrapper() {

  const changColor = () => {
  	section.classList.toggle('blue');
  };

  const loopThrough = () => {
  	let thisButtonText = this.childNodes[0].nodeValue;
  	let thisButtonLength = thisButtonText.length;

    for (let i = 0; i < thisButtonLength * 2; i++) {
    	setTimeout(function() {
    		changColor();
    	} , i * 1000);
    }
  };
  loopThrough();
};

for (let i = 0; i < sectionButtons.length; i++) {
	sectionButtons[i].addEventListener('click', wrapper);
};
