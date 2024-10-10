// planter stack is a button that allows the user to select a planter to place on the map if they have any in their inventory


export class PlanterStack {
    constructor(user, ctx, x, y, width, height) {
        this.user = user;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.selected = 0;
    }

    draw(G) {
        this.ctx = G.ctx;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillText("Planter Stack", this.x + 10, this.y + 20);
        this.ctx.fillText("Pots: " + this.user.pots, this.x + 10, this.y + 40);
        this.ctx.fillText("Selected: " + this.selected, this.x + 10, this.y + 60);
    }

    click(mx, my) {
        if (mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height) {
            if (this.user.holding == 'planter') {
                this.user.pots++;
                this.user.holding = null;
            } else if (this.user.pots > 0) {
            
                this.user.grabItem('planter');
            } 
        }
    }

    
}