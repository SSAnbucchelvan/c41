/* 
1.get the gamestate
2.if gamestate=0 then you are creating form and player object
3.in the form object we are capturing the name
4.on clicking on play button we are increasing player index
5.player index will be updated as player count in the database
6.if the player count=4 then no more player will be allowed.
*/

var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4;
var cars;
var carImg1,carImg2,carImg3,carImg4,trackImg;

function preload(){
  carImg1=loadImage('images/car1.png');
  carImg2=loadImage('images/car2.png');
  carImg3=loadImage('images/car3.png');
  carImg4=loadImage('images/car4.png');
  trackImg =loadImage('images/track.jpg');

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}


function draw(){
  console.log("car race");
  if(playerCount === 4&&gameState===0){
    game.update(1);
  }
 if(gameState === 1){
    clear();
    game.play();

    
  }
  if(gameState===2){
    game.end();

  }
}
