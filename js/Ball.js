class Ball{
    constructor(){
        this.xPos=0;
        this.yPos=0;
        this.ballSprite=createSprite(150,600);
        this.ballSprite.addAnimation("redBall",redBall);
    }
   
    display(){
        
        this.ballSprite.addAnimation("redBall",redBall);
        /*ball1.addAnimation("redRunning",redBallImg);
        ball1.scale=0.03;
        ball1.setCollider("circle",0,0,1000);

        ball2=createSprite(450,600);
        ball2.addAnimation("blueBall",blueBall);
        ball2.addAnimation("blueRunning",blueBallImg);
        ball2.scale=0.03;
        ball2.setCollider("circle",0,0,1000);*/
     }
     
     updatePosition(index)
     {
        var playerIndex = "players/player" + index;
        database.ref(playerIndex).update({
            xPos: this.ballSprite.x,
            yPos:this.ballSprite.y
        });
     }

    }