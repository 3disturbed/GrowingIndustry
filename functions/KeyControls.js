export  function KeyControls(GAME){

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

    if(event.key === 'p'){
        if(GAME.user.timeMoving){       
            GAME.user.gameSpeed = 0;
            GAME.user.timeMoving = false;
            GAME.running = GAME.user.timeMoving;
            GAME.update();

        } else {
            GAME.user.gameSpeed = 1;
            GAME.user.timeMoving = true;
            GAME.running = GAME.user.timeMoving;
            GAME.update();
        }
        GAME.user.saveUser();
    }

    GAME.user.saveUser();

});
}


