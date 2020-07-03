class Pin{
    constructor(){

    }
   
    display(){
        // var pin1,pin2,pin3,pin4,pin5;
        pin1=createSprite(45, 40, 20, 20);
        pin1.addImage(pinImg);
        pin1.scale=0.04;

        pin2=createSprite(105, 40, 20, 20);
        pin2.addImage(pinImg);
        pin2.scale=0.04;

        pin3=createSprite(165, 40, 20, 20);
        pin3.addImage(pinImg);
        pin3.scale=0.04;

        pin4=createSprite(230, 40, 20, 20);
        pin4.addImage(pinImg);
        pin4.scale=0.04;

        pin5=createSprite(75, 80, 20, 20);
        pin5.addImage(pinImg);
        pin5.scale=0.04;

        pin6=createSprite(135,80, 20, 20);
        pin6.addImage(pinImg);
        pin6.scale=0.04;

        pin7=createSprite(195, 80, 20, 20);
        pin7.addImage(pinImg);
        pin7.scale=0.04;

        pin8=createSprite(105, 120, 20, 20);
        pin8.addImage(pinImg);
        pin8.scale=0.04;

        pin9=createSprite(165, 120, 20, 20);
        pin9.addImage(pinImg);
        pin9.scale=0.04;
        
        pin10=createSprite(135, 160, 20, 20);
        pin10.addImage(pinImg);
        pin10.scale=0.04;

        pin1.setCollider("rectangle",0,0,800,250,90);
        pin2.setCollider("rectangle",0,0,800,250,90);
        pin3.setCollider("rectangle",0,0,800,250,90);
        pin4.setCollider("rectangle",0,0,800,250,90);
        pin5.setCollider("rectangle",0,0,800,250,90);
        pin6.setCollider("rectangle",0,0,800,250,90);
        pin7.setCollider("rectangle",0,0,800,250,90);
        pin8.setCollider("rectangle",0,0,800,250,90);
        pin9.setCollider("rectangle",0,0,800,250,90);
        pin10.setCollider("rectangle",0,0,800,250,90);
    }
}