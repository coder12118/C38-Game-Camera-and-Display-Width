class Game{
    constructor(){

    }

    //reading the gamestate
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){ //function with no name is called an anonymous function
            gameState = data.val(); //data.val() gives the data in JSON format
        })
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200)
        car2 = createSprite(300, 200)
        car3 = createSprite(500, 200)
        car4 = createSprite(700, 200)
        cars = [car1, car2, car3, car4]
    }

    play(){
        form.hide();
        textSize(30)
        text("Game Start", 120, 100);

        Player.getPlayerInfo();
        
        //allPlayers =>
        //player1: {distance:0,name:"Name1"}
        //player2: {distance:0, name:"Name2"}
        //player3: {distance:0,name:"Name3"}
        //player4: {distance:0, name:"Name4"}

        if(allPlayers!== undefined){//when there is information inside the "players" node
           // var display_position = 130;
            
           //index of the cars array
           var index = 0;

           //x and y position of the cars
           var x = 0
           var y = 0
           //var x = 0, y = 0;
           

            for(var plr in allPlayers){ //plr: player1,player2,player3,player4
                //add 1 to the index for every forloop
                index = index + 1

                //position the cars a little away from each other in the x direction
                x = x+200;

                //use data from the databas to display the cars in the y direction
                y = displayHeight - allPlayers[plr].distance
                cars[index-1].x = x;
                cars[index-1].y = y;

                //highlight your car as red colour
                if(index === player.index){
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
                else{
                    cars[index-1].shapeColor = "blue"
                }
                //textSize(15)
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position)
                //display_position = display_position + 20;
            }
        }

        if(keyDown(UP_ARROW) && player.index!== null){
            player.distance = player.distance + 50
            player.update();
        }

        drawSprites();
    }
}