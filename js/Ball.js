class Ball{
    constructor(){

    }
   
    display(){
        ball1=createSprite(150,600);
        ball1.addAnimation("redBall",redBall);
        ball1.addAnimation("redRunning",redBallImg);
        ball1.scale=0.03;
        ball1.setCollider("circle",0,0,1000);

        ball2=createSprite(450,600);
        ball2.addAnimation("blueBall",blueBall);
        ball2.addAnimation("blueRunning",blueBallImg);
        ball2.scale=0.03;
        ball2.setCollider("circle",0,0,1000);
     }
    }