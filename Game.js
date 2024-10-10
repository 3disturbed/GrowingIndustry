import {User} from "./classes/User.js";
import { DrawUI, PauseScreen } from "./functions/GameUI.js";
import {KeyControls} from "./functions/KeyControls.js";
import {PlanterStack} from './classes/PlanterStack.js';

class game{

    // Constructor
    constructor(canvas){
        this.ver = " Prototype v0.0.1.9 dev CI/CD";

        this.logo = new Image();
        this.logo.src = "./images/logo.png";

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.imageSmoothingQuality = "high";
        
        this.width = canvas.width;
        this.height = canvas.height;
        this.backDropImg = new Image();
        this.backDropImg.src = "./images/backdrop.png";
        this.greenhouseimg = new Image();
        this.greenhouseimg.src = "./images/greenhouse.png";
        this.fps = 60;
        this.interval = 1000/this.fps;
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "black";
        this.planterstack = new PlanterStack(this.user, this.ctx, 160, this.height - 200, 150, 200);
        this.ctx.fillRect(0, 0, this.width, this.height);  
        this.logo.onload = () =>  {
                this.ctx.drawImage(this.logo, this.width/2 - 250, this.height/2 - 300, 500, 500);
        }
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "white";
        this.user = new User();
        this.running = this.user.timeMoving;
        this.ctx.fillText("Growing Industry Loading...(" + this.user.name + ")", this.width/2, this.height/2 + 200);
        // credits at the bottom of the screen
        // color and font size
        this.ctx.fillStyle = "grey";
        this.ctx.font = "20px Arial";
        this.ctx.fillText("Portfolio Game Created by: ", this.width/2, this.height - 60);
        this.ctx.fillText("Ben Darlington(3Disturbed, Dark Firebeard), Sarah Darlington(Sazzzel), and Amber Darlington(PrincessAmbie) Version :" + this.ver, this.width/2, this.height - 25);
        this.user.saveUser();
        this.showFPS = false;
        this.mouseX = 0;
        this.mouseY = 0;
        KeyControls(this);
      

        
    
    }
   
    // Start the game
    start(){
        this.running = true;
        this.update();
    }

    // Stop the game
    stop(){
        this.running = false;
    }

    // Update the game
    update(){
        
        if(this.running && this.user.timeMoving){
            DrawUI(this);
            this.planterstack.draw(this);
            

        } else {
            PauseScreen(this);
        }
        setTimeout(() => this.update(), this.interval);
    }
    

}
// mouse move event listener
document.addEventListener('mousemove', function(event){
    GAME.mouseX = event.offsetX;
    GAME.mouseY = event.offsetY;
    // correct the mouse position for the canvas actual position and size compared to the drawing area
    GAME.mouseX = GAME.mouseX * GAME.width / GAME.canvas.clientWidth;
    GAME.mouseY = GAME.mouseY * GAME.height / GAME.canvas.clientHeight;

});

document.getElementById('game').addEventListener('click', function(event){
    var elem = document.getElementById('game');
    if(GAME.user.timeMoving == false){

    } else {
        if(GAME.user.fullscreen){
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        } 
        }
    }
    

});

// register for click events
document.addEventListener('click', function(event){
    GAME.planterstack.click(GAME.mouseX, GAME.mouseY, GAME.user);
    if(GAME.user.timeMoving == false){
        //unpause the game
        GAME.user.timeMoving = true;
        GAME.running = GAME.user.timeMoving;
        GAME.user.gameSpeed = 1;
        GAME.update();
        GAME.user.saveUser();
        
    }
});
const GAME = new game(document.getElementById('game'));
setTimeout(() => GAME.start(), 3000);

