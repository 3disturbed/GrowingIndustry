// User Model
class User {
    constructor() {

        this.name = "";
        this.gameSpeed = 1;
        this.timeMoving = false;
        this.money = 1000;
        this.greenhouses = [];
        this.marketStalls = [];
        this.inventory = [];
        this.pots = 1;
        this.Holding = null;

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
        this.timeMoving = false;
        this.saveUser();

    }

    grabItem(item){
        this.Holding = item;
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

        }
    }

    saveUser() {
        // Save user to local storage
        localStorage.setItem('user', JSON.stringify(this));
    }

}