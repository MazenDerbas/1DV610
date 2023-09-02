import { setFireWork } from "/Firework.js";
import "/Firework.js";


const userInput = document.getElementById('userName')
const submit = document.getElementById('generateButton')
const welcome = document.getElementById('welcome-message')
const heading = document.getElementById('heading')
const reset = document.getElementById('resetButton')


submit.addEventListener('click', () =>  {

    userInput.classList.add('hidden')
    submit.classList.add('hidden')
    heading.classList.add('hidden')

    reset.classList.remove('hidden')

    const name = userInput.value;
    setWelcomeMessage(name);
    clearInput();
    setFireWork();
    
});


reset.addEventListener('click', () => {
    window.location.reload()
});

function setWelcomeMessage (userInput) {
    if (userInput) {
        welcome.textContent = `Welcome ${userInput}!`;
    } else {
        alert ("you need to enter a name")
    }
}

function clearInput() {
    userInput.value = "";
}






    


