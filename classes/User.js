// User Model
export class User {
    constructor() {

        this.name = "";
        this.gameSpeed = 1;
        this.timeMoving = true;
        this.money = 1000;
        this.greenhouses = [];
        this.marketStalls = [];
        this.inventory = [];
        this.pots = 1;
        this.Holding = null;
        this.fullscreen = true;
        //check if user already exists
        this.loadUser();
        if(this.name == ""){
            this.name = prompt("Please enter your business name.", "Growing Industry");
        }
    
    }

    reset() {
        // Reset user data
        this.name = "";
        this.money = 1000;
        this.greenhouses = [];
        this.marketStalls = [];
        this.inventory = [];
        this.pots = 1;
        this.timeMoving = true;
        this.gameSpeed = 1;
        this.saveUser();

    }

    grabItem(item){
        this.holding = item;
        this.saveUser();
    }

    loadUser() {
        // Load user from local storage
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.name = user.name;
            this.money = user.money;
            this.greenhouses = user.greenhouses;
            this.marketStalls = user.marketStalls;
            this.inventory = user.inventory;
            this.pots = user.pots;
            this.gameSpeed = user.gameSpeed;
            this.timeMoving = user.timeMoving;
            this.holding = user.holding;
            this.fullscreen = user.fullscreen;

        }
    }

    saveUser() {
        // Save user to local storage
        localStorage.setItem('user', JSON.stringify(this));
        
    }

}