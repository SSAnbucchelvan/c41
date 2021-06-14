class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
console.log("get game  state:"+gameState)
  }

  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  start(){
   // if(gameState === 0){
      player = new Player();
      var playerCountRef  = database.ref('playercount');
      playerCountRef.on("value",function(data){
       playerCount = data.val();
      
    })
    console.log("current player count"+playerCount);
      /*var playerCountRef = await database.ref('playercount');
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        console.log("current player count"+playerCount);
      }*/
      
      form = new Form()
      form.display();
      car1=createSprite(100,200)
      car2=createSprite(300,200)
      car3=createSprite(500,200)
      car4=createSprite(700,200)
      car1.addImage('car1Img',carImg1)
      car2.addImage('car2Img',carImg2)
      car3.addImage('car3Img',carImg3)
      car4.addImage('car4Img',carImg4)




      cars=[car1,car2,car3,car4]
    //}
  }

  play(){
    image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    var index=0;
    var carIndex=0;
    var x=150;
    var y=0;
    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        carIndex=index;
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[carIndex].x=x
        cars[carIndex].y=y
        

  
       if (index===player.index){
          cars[carIndex].shapeColor='red'
            camera.position.x=displayWidth/2
            camera.position.y=cars[carIndex].y
            fill('red');
            ellipse(x,y,100,100);

       }
       if(player.distance>3700 && gameState===1){
        gameState=2;
        console.log('final game state'+':'+gameState)
  /*
      1:get the no of cars alredy reached the end destination
      2:that value will be incremented and stored as current player rank if he reaches the destination
      3:update the players rank as the carsAtEnd
  */
        Player.getCarsAtEnd()
        console.log('beforeRank'+player.rank);
        player.rank=player.rank+1;
        console.log('Afterrank'+player.rank);
        player.updateCarsAtEnd(player.rank)
        
        

       }

       
      //  else
       //  fill("black");

     //   display_position+=20;
      //  textSize(15);
      // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    drawSprites();
  }
  end(){
    console.log("your rank is"+player.rank)

  }
  
}
