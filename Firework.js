const submit = document.getElementById('generateButton')

export class Firework{
    constructor (){

        this.fireWorkDiv = document.createElement('div');
        this.fireWorkDiv.classList.add('firework');
        document.body.appendChild(this.fireWorkDiv);
    }
}

submit.addEventListener('click', ()=>  {
    const firework = new Firework ();
});

  