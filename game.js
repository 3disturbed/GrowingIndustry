


class game{

    // Constructor
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
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
        
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "white";
        this.user = new User();
        this.running = this.user.timeMoving;
        this.ctx.fillText("Growing Industry Loading...(" + this.user.name + ")", this.width/2, this.height/2);
        this.user.saveUser();
        this.showFPS = false;
        
        

        
    
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
        
        if(this.running){
            DrawUI(this);
            

        } else {
            PauseScreen(this);
        }
        setTimeout(() => this.update(), this.interval);
    }
    

}

const GAME = new game(document.getElementById('game'));
setTimeout(() => GAME.start(), 1000);

