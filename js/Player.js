class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=0;
  }

  getCount(){
    var playerCountRef = database.ref('playercount');
    playerCountRef.on("value",(data)=>{
     playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playercount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    console.log("current player index"+playerIndex)
    database.ref(playerIndex).update({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  
  static getCarsAtEnd(){
  var carsAtEndRef=database.ref('carsAtEnd');
  carsAtEndRef.on("value",(data)=>{
    this.rank = data.val();
  })
  
}
  updateCarsAtEnd(myRank){
    database.ref('/').update({ 
      carsAtEnd: myRank
    });
  }
}
