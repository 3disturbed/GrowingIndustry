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
        this.user = user;
    }

    draw(G) {
        this.ctx = G.ctx;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    click(mx, my, user) {
        
        this.user = user;
        if (mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height) {
            if (this.user.holding == 'planter') {
                this.user.pots++;
                this.user.holding = null;
            } else if (this.user.pots > 0 && this.user.holding == null) {
                this.user.pots--;
                this.user.grabItem('planter');
            } else {
                console.log(this.user.holding);
            }

        }
    }

    
}