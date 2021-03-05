class Player{
    constructor(){
        this.index = null;
        this.distance = 0
        this.name = null;
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    update(){
        var playerIndex  = "players/player" + this.index; //string concatenation, "player"+1 = player1 
        database.ref(playerIndex).set({
            name: this.name, 
            distance: this.distance
        })
    }

 //static functions are those common functions which are called by the class themselves rather than by objects of the class. 
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", function(data){ //function(data){} can also be written as (data)=>{}
            allPlayers = data.val();
        })
    }
}