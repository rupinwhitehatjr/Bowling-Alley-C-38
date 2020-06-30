var canvas, backgroundImage;

var gameState = 0;
var gameChance=5;
var playerCount;
var allPlayers;
var score = 0;
var database;

var form, player, game;

var ballers, baller1, baller2;

var alley, ball1_img, ball2_img,pins_img;

function preload(){
  alley = loadImage("../images/Alley2.png");
  ball1_img = loadImage("../images/Shiny ball-01.png");
  ball2_img = loadImage("../images/Shiny ball-02.png");
  pins_img = loadImage("../images/Bowling Pin-02.png");
}

function setup(){
  canvas = createCanvas(1400, 1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.getChance();
  // console.log(gameState);
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}