var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var invisibleLeft,invisibleMid,invisibleRight;
var balls,ball1,ball2;
var pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10;
var pin11,pin12,pin13,pin14,pin15,pin16,pin17,pin18,pin19,pin20;

var ballObj, pinObj, gameObj, formObj,playerObj;

var alley,lane,pinImg,pins_img,redBall,redBallImg,blueBall,blueBallImg;

function preload(){
  alley = loadImage("images/Bowling Alley.png");
  lane=loadImage("images/newLane.png");
  pinImg=loadImage("images/Circle.png");
  pins_img = loadImage("images/Bowling Pin-02.png");
  redBall = loadAnimation("images/Shiny ball-01.png");
  redBallImg = loadAnimation("images/Shiny ball-01.png","images/Shiny ball-02.png","images/Shiny ball-03.png","images/Shiny ball-04.png","images/Shiny ball-05.png");
  blueBall= loadAnimation("images/Shiny ball-16.png");
  blueBallImg=loadAnimation("images/Shiny ball-16.png","images/Shiny ball-17.png","images/Shiny ball-18.png","images/Shiny ball-19.png","images/Shiny ball-20.png");
}

function setup(){
  canvas = createCanvas(574,680);
  database = firebase.database();

  gameObj = new Game();
  gameObj.getState();
  // console.log(gameState);
  gameObj.start();
}


function draw(){
  if(playerCount === 2){
    gameObj.update(1);
  }
  if(gameState === 1){
    clear();
    gameObj.play();
  }
  // if(gameState === 2){
  //   gameObj.end();
  // }
}