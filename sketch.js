var ball;
var database; //Step 1
var allPlayers;
var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var game, form, player;
var car1, car2, car3, car4; //sprites
var cars; //cars is an array to store car1,car2,car3,car4 sprites

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);

    //Step 2 
    database = firebase.database(); //namespacing

    game = new Game();
    game.getState();
    game.start();

   
    
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1)
    }

    if(gameState === 1){
        clear();
        game.play();
    }
   
}


