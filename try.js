//   //working
//   play(){
//     formObj.hide();
    
//     Player.getPlayerInfo();

//     console.log(allPlayers);
//     if(allPlayers !== undefined){
//       background(alley);
//       var index=0;
//       for(var plr in allPlayers){
//         index=index+1;  
//         if (index === playerObj.index){
//           if(index==1){
//             ball1.visible=true;
//             ball1.changeAnimation("redRunning",redBallImg);
//             ball1.frameDelay = 12;
//             ball1.scale=0.03;

//             if(keyCode=== 32){
//              ball1.velocity.y=-8; 
      
//               if (ball1.isTouching(pin1)) {
//                 pin1.scale=0.07;
//                pin1.addImage(pins_img);
//               }
//               if (ball1.isTouching(pin2)) {
//                 pin2.scale=0.07;
//                 pin2.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin3)) {
//                  pin3.scale=0.07;
//                 pin3.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin4)) {
//                 pin4.scale=0.07;
//                 pin4.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin5)) {
//                 pin5.scale=0.07;
//                 pin5.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin6)) {
//                 pin6.scale=0.07;
//                 pin6.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin7)) {
//                 pin7.scale=0.07;
//                 pin7.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin8)) {
//                 pin8.scale=0.07;
//                 pin8.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin9)) {
//                 pin9.scale=0.07;
//                 pin9.addImage(pins_img);
//                }
//                if (ball1.isTouching(pin10)) {
//                 pin10.scale=0.07;
//                 pin10.addImage(pins_img);
//                }
//             }

//           }else{
//             ball2.visible=true;
//             ball2.changeAnimation("blueRunning",blueBallImg);
//             ball2.frameDelay = 12;
//             ball2.scale=0.03;

//             if(keyCode=== 32){
//               ball2.velocity.y=-8; 
      
//               if (ball2.isTouching(pin1)) {
//                 pin1.scale=0.07;
//                pin1.addImage(pins_img);
//               }
//               if (ball2.isTouching(pin2)) {
//                 pin2.scale=0.07;
//                 pin2.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin3)) {
//                  pin3.scale=0.07;
//                 pin3.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin4)) {
//                 pin4.scale=0.07;
//                 pin4.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin5)) {
//                 pin5.scale=0.07;
//                 pin5.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin6)) {
//                 pin6.scale=0.07;
//                 pin6.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin7)) {
//                 pin7.scale=0.07;
//                 pin7.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin8)) {
//                 pin8.scale=0.07;
//                 pin8.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin9)) {
//                 pin9.scale=0.07;
//                 pin9.addImage(pins_img);
//                }
//                if (ball2.isTouching(pin10)) {
//                 pin10.scale=0.07;
//                 pin10.addImage(pins_img);
//                }
//             }
//           }
//         }
//       }
//     }
//     drawSprites();
//   }



//indexone
// play(){
//     formObj.hide();
    
//     Player.getPlayerInfo();
//     if(allPlayers !== undefined){
//       // background(alley);
//       background(lane);
//       var index=0;
//       for(var plr in allPlayers){
//         index=index+1;  
//         if (index === playerObj.index){
//           gameObj.move(index);
//           if(keyCode=== 32){
//             if(index==1){
//               balls[index-1].changeAnimation("redRunning",redBallImg);
//               balls[index-1].frameDelay = 12;
//               balls[index-1].scale=0.03;
//             }else{
//               balls[index-1].changeAnimation("blueRunning",blueBallImg);
//               balls[index-1].frameDelay = 12;
//               balls[index-1].scale=0.03;
//             }
             
//             balls[index-1].velocity.y=-6; 
//             // camera.position.x = displayWidth/2;
//             // camera.position.y = balls[index-1].y;
    
//             if (balls[index-1].isTouching(pin1)) {
//               pin1.scale=0.07;
//               pin1.addImage(pins_img);
//             }
//             if (balls[index-1].isTouching(pin2)) {
//               pin2.scale=0.07;
//               pin2.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin3)) {
//               pin3.scale=0.07;
//               pin3.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin4)) {
//               pin4.scale=0.07;
//               pin4.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin5)) {
//               pin5.scale=0.07;
//               pin5.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin6)) {
//               pin6.scale=0.07;
//               pin6.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin7)) {
//               pin7.scale=0.07;
//               pin7.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin8)) {
//               pin8.scale=0.07;
//               pin8.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin9)) {
//               pin9.scale=0.07;
//               pin9.addImage(pins_img);
//              }
//              if (balls[index-1].isTouching(pin10)) {
//               pin10.scale=0.07;
//               pin10.addImage(pins_img);
//              }
//           }
//         }
//       }
//     }
//     drawSprites();
//   }
//    move(index) {
//     if (keyCode === LEFT_ARROW) {
//       balls[index-1].x = balls[index-1].x - 5;
//     } else if (keyCode === RIGHT_ARROW) {
//       balls[index-1].x= balls[index-1].x + 5;
//     } 
//     drawSprites();
//   }