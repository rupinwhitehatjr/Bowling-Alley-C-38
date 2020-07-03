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
    ballObj= new Ball();
    ballObj.display();
    balls=[ball1,ball2];

    pinObj=new Pin();
    pinObj.display();

  }

  play(){
    formObj.hide();
    
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      background(alley);
      var index=0;
      for(var plr in allPlayers){
        index=index+1;  
        if (index === playerObj.index){
          balls[index-1].visible=true;
          if(keyCode=== 32){
            if(index==1){
              // balls[index-1].visible=true;
              balls[index-1].changeAnimation("redRunning",redBallImg);
              balls[index-1].frameDelay = 12;
              balls[index-1].scale=0.03;
            }else{
              // balls[index-1].visible=true;
              balls[index-1].changeAnimation("blueRunning",blueBallImg);
              balls[index-1].frameDelay = 12;
              balls[index-1].scale=0.03;
            }

            balls[index-1].velocity.y=-8; 
    
            if (balls[index-1].isTouching(pin1)) {
              pin1.scale=0.07;
             pin1.addImage(pins_img);
            }
            if (balls[index-1].isTouching(pin2)) {
              pin2.scale=0.07;
              pin2.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin3)) {
               pin3.scale=0.07;
              pin3.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin4)) {
              pin4.scale=0.07;
              pin4.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin5)) {
              pin5.scale=0.07;
              pin5.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin6)) {
              pin6.scale=0.07;
              pin6.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin7)) {
              pin7.scale=0.07;
              pin7.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin8)) {
              pin8.scale=0.07;
              pin8.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin9)) {
              pin9.scale=0.07;
              pin9.addImage(pins_img);
             }
             if (balls[index-1].isTouching(pin10)) {
              pin10.scale=0.07;
              pin10.addImage(pins_img);
             }
          }
        }
      }
    } 
    drawSprites();
  }

}