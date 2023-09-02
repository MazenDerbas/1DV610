import { setFireWork } from "./Firework.js";
import "./Firework.js";


const userInput = document.getElementById('userName')
const submit = document.getElementById('generateButton')
const welcome = document.getElementById('welcome-message')
const heading = document.getElementById('heading')
const reset = document.getElementById('resetButton')
const errorMessage = document.getElementById('error-message')


submit.addEventListener('click', () =>  {
    const name = userInput.value;
    if (name === ''){
    // Display the error message
    errorMessage.classList.remove('hidden');
    errorMessage.textContent = 'Please enter your name.';

} else {
    errorMessage.classList.add('hidden');
    userInput.classList.add('hidden')
    submit.classList.add('hidden')
    heading.classList.add('hidden')

    reset.classList.remove('hidden')

    setWelcomeMessage(name);
    clearInput();
    setFireWork();
    changeNeonColor()
}
});


reset.addEventListener('click', () => {
    window.location.reload()
});

function setWelcomeMessage (userInput) {
    welcome.textContent = `Welcome ${userInput}!`;

}

function clearInput() {
    userInput.value = "";
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeNeonColor() {

    const randomColor = getRandomColor();
    welcome.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}, 0 0 30px ${randomColor}, 0 0 40px ${randomColor}`;
  }





    


