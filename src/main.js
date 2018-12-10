//const sectionButtons = document.querySelectorAll('section');
//const section = document.getElementsByTagName('p');
const stage1 = document.getElementsByClassName('stage1');
const stage2 = document.getElementsByClassName('stage2');
const stage3 = document.getElementsByClassName('stage3');
const color = document.getElementsByClassName('colors'); 
const number2 = document.getElementsByClassName('numbers2'); 
const number3 = document.getElementsByClassName('numbers3');
const article = document.querySelector('#stage1');
const article2 = document.querySelector('#stage2');
const article3 = document.querySelector('#stage3');

const christmasFortunes = ['Have yourself a merry little Christmas!','You will have a date for the New Year!', 'Santa Clause is coming to town & bringing you a present!', 'Treat yourself to a Hallmark movie!', 'Eat all of the candy canes that you want!', 'Go see the Christmas lights!', 'Take yourself ice skating!', 'Make Christmas cookies for your coworkers!', 'Sing Christmas carols while wrapping presents!', 'Send a Christmas card!'];

const yourFortune = document.querySelector('#fortune-wrapper');
const yourFortunePlaceholder = document.querySelector('#fortune-wrapper p span');

//Choose a color and loop through number of time that name of the color is long
function wrapper() {

  const flashWhite  = () => {
      article.classList.toggle('transition');
    };

  const runColor = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;

    for (let i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function() {
      flashWhite(); 
      }, i * 500); 
      }
       
      //Display numbers instead of colors
      setTimeout(function(){
        stage1[0].classList.add ('hide');
        stage2[0].classList.remove('hide');
      }, thisButtonLength * 1000);
    };
  runColor();
};

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener('click', wrapper);
};

//Choose a number and loop through number of times as number picked
function wrapper2() {

  const flashWhite2  = () => {
        article2.classList.toggle('transition');
    };
   
  const runColor2 = () => {
    let thisNumber = this.childNodes[0].nodeValue;
    let numberValue = Number(thisNumber);

    for (let i = 0; i < numberValue * 2; i++) {
        setTimeout(function(){ 
        flashWhite2(); 
        }, i * 500); 
        }

        setTimeout(function(){
        stage2[0].classList.add('hide');
        stage2[0].classList.remove('show');
        stage3[0].classList.remove('hide');
        stage3[0].classList.add('show');   
      }, numberValue * 1000);
    };
  runColor2();
};

for (let i = 0; i < number2.length; i++) {
  number2[i].addEventListener('click', wrapper2);
};

//Choose a number and display the fortune
function wrapper3 () {
    
    const flashWhite3  = () => {
        article3.classList.toggle('transition');
    };
   
    const runColor3 = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        for (let i = 0; i < numberValue * 2; i++) {
            setTimeout(function(){ 
            flashWhite3(); 
            }, i * 500); 
            }
            setTimeout(function(){
            stage3[0].classList.add('hide');
            stage3[0].classList.remove('show');
            //Display fortunes
            yourFortune.classList.remove('hide');
            yourFortune.classList.add('fortune-show');
            christmasFortunes.sort(function(a, b){return 0.5 - Math.random()});
            const fortuneText = document.createTextNode(christmasFortunes[0]);
            yourFortunePlaceholder.appendChild(fortuneText);
            }, numberValue * 1000);
        };  
    runColor3();
};
for (let i=0; i < number3.length; i++) {
    number3[i].addEventListener('click', wrapper3);
};