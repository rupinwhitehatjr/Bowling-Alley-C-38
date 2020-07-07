class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      playerObj = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        playerObj.getCount();
      }
      formObj = new Form()
      formObj.display();
    }
    invisibleLeft=createSprite(0,600,15,1200);
    invisibleLeft.visible=false;
    invisibleMid=createSprite(290,600,15,1200);
    invisibleMid.visible=false;
    invisibleRight=createSprite(580,600,15,1200);
    invisibleRight.visible=false;

    ballObj= new Ball();
    ballObj.display();
    balls=[ball1,ball2];

    pinObj=new Pin();
    pinObj.display1();
    pinObj.display2();

  }

  play(){
    formObj.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(lane);
      var index = 0;
      // var x;
      var y = 600;
      for(var plr in allPlayers){
        index = index + 1;
        y = 600 + allPlayers[plr].distance;
        balls[index - 1].y = y;

        if(index === playerObj.index){
          gameObj.move(index);
          if (keyCode === 32 && playerObj.index !== null) {
          playerObj.distance -= 5;
          playerObj.update();
          if(index==1){ 
          balls[index - 1].changeAnimation("redRunning", blueBallImg);
          balls[index - 1].frameDelay = 12;
          balls[index - 1].scale = 0.03;
          }else{
          balls[index - 1].changeAnimation("blueRunning", blueBallImg);
          balls[index - 1].frameDelay = 12;
          balls[index - 1].scale = 0.03;
          }
        }
       }
      }

        if (ball1.isTouching(pin1)) {
          pin1.scale = 0.07;
          pin1.addImage(pins_img);
        }
        if (ball1.isTouching(pin2)) {
          pin2.scale = 0.07;
          pin2.addImage(pins_img);
        }
        if (ball1.isTouching(pin3)) {
          pin3.scale = 0.07;
          pin3.addImage(pins_img);
        }
        if (ball1.isTouching(pin4)) {
          pin4.scale = 0.07;
          pin4.addImage(pins_img);
        }
        if (ball1.isTouching(pin5)) {
          pin5.scale = 0.07;
          pin5.addImage(pins_img);
        }
        if (ball1.isTouching(pin6)) {
          pin6.scale = 0.07;
          pin6.addImage(pins_img);
        }
        if (ball1.isTouching(pin7)) {
          pin7.scale = 0.07;
          pin7.addImage(pins_img);
        }
        if (ball1.isTouching(pin8)) {
          pin8.scale = 0.07;
          pin8.addImage(pins_img);
        }
        if (ball1.isTouching(pin9)) {
          pin9.scale = 0.07;
          pin9.addImage(pins_img);
        }
        if (ball1.isTouching(pin10)) {
          pin10.scale = 0.07;
          pin10.addImage(pins_img);
        }
  
        if (ball2.isTouching(pin11)) {
          pin11.scale = 0.07;
          pin11.addImage(pins_img);
        }
        if (ball2.isTouching(pin12)) {
          pin12.scale = 0.07;
          pin12.addImage(pins_img);
        }
        if (ball2.isTouching(pin13)) {
          pin13.scale = 0.07;
          pin13.addImage(pins_img);
        }
        if (ball2.isTouching(pin14)) {
          pin14.scale = 0.07;
          pin14.addImage(pins_img);
        }
        if (ball2.isTouching(pin15)) {
          pin15.scale = 0.07;
          pin15.addImage(pins_img);
        }
        if (ball2.isTouching(pin16)) {
          pin16.scale = 0.07;
          pin16.addImage(pins_img);
        }
        if (ball2.isTouching(pin17)) {
          pin17.scale = 0.07;
          pin17.addImage(pins_img);
        }
        if (ball2.isTouching(pin18)) {
          pin18.scale = 0.07;
          pin18.addImage(pins_img);
        }
        if (ball2.isTouching(pin19)) {
          pin19.scale = 0.07;
          pin19.addImage(pins_img);
        }
        if (ball2.isTouching(pin20)) {
          pin20.scale = 0.07;
          pin20.addImage(pins_img);
        }
    }
    drawSprites();
  }
  move(index) {
    debugger;
    if (keyCode === LEFT_ARROW) {
      balls[index-1].x = balls[index-1].x - 5;
      balls[index-1].collide(invisibleLeft);
      balls[index-1].collide(invisibleMid);
      balls[index-1].collide(invisibleRight);
    } else if (keyCode === RIGHT_ARROW) {
      balls[index-1].x= balls[index-1].x + 5;
      balls[index-1].collide(invisibleLeft);
      balls[index-1].collide(invisibleMid);
      balls[index-1].collide(invisibleRight);
    } 
  }
}