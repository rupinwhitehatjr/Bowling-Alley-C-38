var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var chance=5;
var database;

var balls,ball1,ball2,pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10;
var x=150,y=600;

var ballObj, pinObj, gameObj, formObj,playerObj;

var alley,lane,pinImg,ballImg, ball1_img,pins_img;

function preload(){
  alley = loadImage("images/Bowling Alley.png");
  lane=loadImage("images/lane.png");
  pinImg=loadImage("images/Circle.png");
  redBall = loadAnimation("images/Shiny ball-01.png");
  redBallImg = loadAnimation("images/Shiny ball-01.png","images/Shiny ball-02.png","images/Shiny ball-03.png","images/Shiny ball-04.png","images/Shiny ball-05.png");
  blueBall= loadAnimation("images/Shiny ball-16.png");
  blueBallImg=loadAnimation("images/Shiny ball-16.png","images/Shiny ball-17.png","images/Shiny ball-18.png","images/Shiny ball-19.png","images/Shiny ball-20.png");
  pins_img = loadImage("../images/Bowling Pin-02.png");
}

function setup(){
  canvas = createCanvas(286,680);
  database = firebase.database();

  gameObj = new Game();
  // gameObj.display();
  gameObj.getState();
  // console.log(gameState);
  gameObj.start();

  // ballObj=new Ball();
  // ballObj.display();

  // pinObj=new Pin();
  // pinObj.display();

}


function draw(){
  if(playerCount === 2){
    gameObj.update(1);
  }
  if(gameState === 1){
    clear();
    gameObj.play();
  }
  // gameObj.display();
  // drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    ball1.x = ball1.x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    ball1.x= ball1.x + 5;
  } 
}