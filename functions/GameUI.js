
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
    // get mouse position
    let mx = G.mouseX;
    let my = G.mouseY;
    if(G.user.holding == 'planter'){
        G.ctx.fillText("Planter", mx, my);
        G.ctx.drawImage(G.planterstack.img, mx-75, my-100, 150, 200);
    }
    
}


export function PauseScreen(G){
    G.ctx.clearRect(0, 0, G.width, G.height);
    G.ctx.fillText("Time Paused", G.width/2, G.height/2 -100);
    G.ctx.fillText("Growing Industry", G.width/2, G.height/2);
    G.ctx.fillText("Business: " + G.user.name, G.width/2, G.height/2 + 50);
    G.ctx.fillText("Money: " + G.user.money, G.width/2, G.height/2 + 100);
    G.ctx.fillText("Pots: " + G.user.pots, G.width/2, G.height/2 + 150);
    G.ctx.fillText("Greenhouses: " + G.user.greenhouses.length, G.width/2, G.height/2 + 200);
    G.ctx.fillText("Market Stalls: " + G.user.marketStalls.length, G.width/2, G.height/2 + 250);
    G.ctx.fillText("Inventory: " + G.user.inventory.length, G.width/2, G.height/2 + 300);
    G.ctx.fillText("Game Speed: " + G.user.gameSpeed, G.width/2, G.height/2 + 350);

}