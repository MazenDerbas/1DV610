import "/Firework.js";

const userInput = document.getElementById('userName')
const submit = document.getElementById('generateButton')
const welcome = document.getElementById('welcome-message')
const container = document.getElementById('firework-container');


submit.addEventListener('click', ()=>  {
    const name = userInput.value;
    setWelcomeMessage(name);
    clearInput();

    
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






    


