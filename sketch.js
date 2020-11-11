
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaceImage
var FoodGroup;
var score
 var obstacleGroup;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
  
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
  
  
  bananaGroup=new Group();
  obstacleGrounp = new Group();

  
}


function draw() {
  background(255)
  
  var SurvivalTime=0;
  stroke("Black");
  textSize=(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+SurvivalTime,100,50);
  
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
    
    
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
    
    monkey.collide(ground);
        
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  stone();

  banana();
 
drawSprites();
  
  
}

function banana(){
if(frameCount % 80 === 0){
    var banana=createSprite(700,165,10,10);
    banana.addImage(bananaImage);
  var rand = Math.round(random(120,200));
  banana.velocityX=-5;
  banana.lifetime=300;
  banana.scale=0.05
  bananaGroup.add(banana);
}
}
  
  function stone(){
    if(frameCount%80===0){

       obstacle =createSprite(300,335,10,10);
    obstacle.addImage(obstaceImage);
  var rand = Math.round(random(120,200));
  obstacle.velocityX=-5;
obstacle.lifetime=300;
 obstacle.scale=0.07
 // obstacleGroup.add(obstacle);
}
  
  }
  









