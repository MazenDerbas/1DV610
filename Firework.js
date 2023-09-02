const submit = document.getElementById('generateButton')

export class Firework{
    constructor (){
        this.fireWorkDiv = document.createElement('div');
        this.fireWorkDiv.classList.add('firework');
        document.body.appendChild(this.fireWorkDiv);

        this.positionX = window.innerWidth / 2; //Place the star in the center of the browser 
        this.positionY = window.innerHeight - 10; // subtract 10 pixels form the hight so the star will apper 

        this.angle = (Math.random() * Math.PI * 2);
        this.vx = Math.cos(this.angle) * 5 //speed is 5
        this.vy = Math.sin(this.angle) * 5

        this.fireWorkDiv.style.left = this.positionX + 'px';
        this.fireWorkDiv.style.top = this.positionY   + 'px';
    
    }


move() {
    this.positionX = this.positionX + this.vx // update the position x
    this.positionY = this.positionY + this.vy // update the position y
    this.fireWorkDiv.style.left= this.positionX + 'px'; 
    this.fireWorkDiv.style.top = this.positionY + 'px'; 
    
}


}
const firework = new Firework ();

submit.addEventListener('click', ()=>  {
});
    setInterval(() => {
        firework.move()
      }, 10);
    


  