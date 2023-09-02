const submit = document.getElementById('generateButton')
const fireworks = [];

export class Firework{
    constructor (){
        this.fireWorkDiv = document.createElement('div');
        this.fireWorkDiv.classList.add('firework');
        document.body.appendChild(this.fireWorkDiv);

        this.positionX = window.innerWidth / 2; //Place the star in the center of the browser 
        this.positionY = window.innerHeight ; 

        this.angle = (Math.random() * Math.PI * 2);
        
        this.vx = Math.cos(this.angle) * 5 //speed is 5
        this.vy = Math.sin(this.angle) * 5

        this.fireWorkDiv.style.left = this.positionX + 'px';
        this.fireWorkDiv.style.top = this.positionY   + 'px';
    
            // Stop the animation after a certain time (e.g., 2000 milliseconds)
        setTimeout(() => {
         this.remove();
        }, 2000);
    }

move() {
    this.positionX = this.positionX + this.vx // update the position x
    this.positionY = this.positionY + this.vy + 0.15 // update the position y
    this.fireWorkDiv.style.left= this.positionX + 'px'; 
    this.fireWorkDiv.style.top = this.positionY + 'px'; 
    
}

remove(){
    // Remove the firework from the DOM
    this.fireWorkDiv.remove();

    // Remove the firework from the fireworks array
    const index = fireworks.indexOf(this);
    if (index !== -1) {
        fireworks.splice(index, 1);
    }
  }
}

export function setFireWork () {
 
  setInterval(() => {
    fireworks.forEach(firework => firework.move());
  }, 10);
    
      setInterval(() => {
        const firework = new Firework();
        fireworks.push(firework);
  }, 100);
}