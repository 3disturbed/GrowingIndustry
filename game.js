


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
            this.ctx.clearRect(0, 0, this.width, this.height);
            //draw Backdrop image
            if(this.backDropImg.complete){
                this.ctx.drawImage(this.backDropImg, 0, 0, this.width, this.height);    
            }
            if(this.greenhouseimg.complete){
                this.ctx.drawImage(this.greenhouseimg, 0, 0, this.width, this.height);
            }
            this.ctx.textAlign = "center";
            this.ctx.fillText("Growing Industry", this.width/2, 30);
            this.ctx.fillText(this.user.name, this.width/2, 60);
            this.ctx.textAlign = "left";
            this.ctx.fillText(this.user.money, 1390, 45);
            this.ctx.fillText("Pots: " + this.user.pots, this.width/6, this.height - 25);
            this.ctx.fillText("Greenhouses: " + this.user.greenhouses.length, this.width/8, 50);
            this.ctx.fillText("Market Stalls: " + this.user.marketStalls.length, this.width/8 *2, 50);
            this.ctx.fillText("Game Speed: " + this.user.gameSpeed, this.width/8*6, this.height - 25);
            if(this.showFPS){
                this.ctx.fillText("FPS: " + this.fps, this.width/2, this.height/2 + 400);
            }

            setTimeout(() => this.update(), this.interval);

        } else {
            this.ctx.clearRect(0, 0, this.width, this.height);
            
            this.ctx.fillText("Time Paused", this.width/2, this.height/2 -100);
            this.ctx.fillText("Growing Industry", this.width/2, this.height/2);
            this.ctx.fillText("Business: " + this.user.name, this.width/2, this.height/2 + 50);
            this.ctx.fillText("Money: " + this.user.money, this.width/2, this.height/2 + 100);
            this.ctx.fillText("Pots: " + this.user.pots, this.width/2, this.height/2 + 150);
            this.ctx.fillText("Greenhouses: " + this.user.greenhouses.length, this.width/2, this.height/2 + 200);
            this.ctx.fillText("Market Stalls: " + this.user.marketStalls.length, this.width/2, this.height/2 + 250);
            this.ctx.fillText("Inventory: " + this.user.inventory.length, this.width/2, this.height/2 + 300);
            this.ctx.fillText("Game Speed: " + this.user.gameSpeed, this.width/2, this.height/2 + 350);
       
        }
    }


}

const GAME = new game(document.getElementById('game'));
setTimeout(() => GAME.start(), 1000);

//bing Shift R to reset the user save data
document.addEventListener('keydown', function(event) {
    if(event.shiftKey && event.key === 'R'){
        GAME.user.reset();
        GAME.user.saveUser();
        GAME.running = false;
        // Reload the page
        location.reload();
    }

    if(event.shiftKey && event.key === 'F'){
        GAME.showFPS = !GAME.showFPS;
    }

    if(event.key === '1'){
        GAME.user.gameSpeed = 1;
        GAME.user.timeMoving = true;
        GAME.running = GAME.user.timeMoving;
        GAME.update();
    }

    if(event.key === '2'){
        GAME.user.gameSpeed = 2;
        GAME.user.timeMoving = true;
        GAME.running = GAME.user.timeMoving;
        GAME.update();
    }

    if(event.key === '3'){
        GAME.user.gameSpeed = 3;
        GAME.user.timeMoving = true;
        GAME.running = GAME.user.timeMoving;
        GAME.update();
    }

    if(event.key === '0' || event.key === 'p'){
        GAME.user.gameSpeed = 0;
        GAME.user.timeMoving = false;
        GAME.running = GAME.user.timeMoving;
        GAME.update();
    }

    GAME.user.saveUser();

});



