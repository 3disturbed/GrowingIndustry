

export function DrawUI(G){
    G.ctx.clearRect(0, 0, G.width, G.height);
    //draw Backdrop image
    if(G.backDropImg.complete){
        G.ctx.drawImage(G.backDropImg, 0, 0, G.width, G.height);    
    }
    if(G.greenhouseimg.complete){
        G.ctx.drawImage(G.greenhouseimg, 0, 0, G.width, G.height);
    }
    G.ctx.textAlign = "center";
    G.ctx.fillText("Growing Industry", G.width/2, 30);
    G.ctx.fillText(G.user.name, G.width/2, 60);
    G.ctx.textAlign = "left";
    G.ctx.fillText(G.user.money, 1390, 45);
    G.ctx.fillText("Pots: " + G.user.pots, G.width/6, G.height - 25);
    G.ctx.fillText("Greenhouses: " + G.user.greenhouses.length, G.width/8, 50);
    G.ctx.fillText("Market Stalls: " + G.user.marketStalls.length, G.width/8 *2, 50);
    G.ctx.fillText("Game Speed: " + G.user.gameSpeed, G.width/8*6, G.height - 25);
    if(G.showFPS){
        G.ctx.fillText("FPS: " + G.fps, G.width/2, G.height/2 + 400);
    }
    planters.draw(G);
}


export function PauseScreen(G){
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