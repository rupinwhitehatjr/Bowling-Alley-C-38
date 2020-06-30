class Game {
  constructor(){

  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    // console.log(gameState);
  }

  getChance(){
    var gameChanceRef  = database.ref('players/chance');
    gameChanceRef.on("value",function(data){
       gameChance = data.val();
    })
    console.log(gameChance);
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    baller1 = createSprite(100,200);
    baller1.addImage("baller1",ball1_img);
    baller1.scale=0.05;
    baller2 = createSprite(300,200);
    baller2.addImage("baller2",ball2_img);
    baller2.scale=0.05;
    ballers = [baller1, baller2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(alley, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y,z;
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].score;
        
        // z=-200;
        ballers[index-1].x = x;
        ballers[index-1].y = y;

        if (index === player.index){
          ballers[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = ballers[index-1].y;

          // camera(displayWidth/2, ballers[index-1].y, Z, 0, 0, 0, 0, 1, 0);
        }
      }

    }
   
    // if(gameChance!=0){
    //   if(keyIsDown(UP_ARROW) && player.index !== null){
    //     player.score +=10
    //     player.gameChance-=1;
    //     player.update();
    //   }
    // }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.score +=10
      player.update();
    }

    if(player.score > 3870){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
