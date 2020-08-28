var monkey,monkeyImage,bananaImage,bananaGroup,obstacleImage;
var obstacleGroup, groundImage,score;

function preload(){
  
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  groundImage=loadImage("jungle2.jpg");
  bananaImage=loadImage("Bananas.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
bananaGroup=new Group();
  
  obstaclesGroup=new Group();
score=0;
  
  

ground = createSprite(200,180,800,20);
  
  ground.addImage("ground",groundImage);
  
  
  
  ground.velocityX = -4;
  
  
  
 
  monkey = createSprite(60,300,20,50);
  
  monkey.addAnimation("Monkey", monkeyImage);
  
  monkey.scale = 0.016;
  
   

  

}



function draw() {
 stroke("black")
  textSize(50);
  fill("black");
  text("score:"+score,100,100); 
  
  
  
  if (ground.x < 0){
  
    ground.x = ground.width/2;}
  
  if(keyWentDown("space")){

   monkey.velocityY=-2; 
    
  }
  if(keyWentUp("space")){

   monkey.velocityY=0; 
    
  }
  
  if (frameCount % 60 === 0) {
   
    var banana = createSprite(200,200,40,10);
    
    banana.y = random(200,300);
    banana.x = random(200,300);
    banana.addImage("banana",bananaImage);
    
    banana.scale = 0.011;
    
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    
    
    bananaGroup.add(banana);
    
  }
  
  if (monkey.isTouching(bananaGroup)){
    
   score=score+2;
    
   bananaGroup.destroyEach();
  }
  
  if (monkey.y===150){
    
   monkey.y=300; 
    
  }
  if (monkey.isTouching(bananaGroup)){
    var rand =Math.round (random(1,6));
    
    switch(rand){
    
      case 1:monkey.scale=0.1;
        
        break;
        
        case 2:monkey.scale=0.2;
        
        break;
        
        case 3:monkey.scale=0.3;
        
        break;
        
        default:break;
    
  }
  }
  if (frameCount % 60 === 0) {
   
    var obstacle = createSprite(200,350,40,10);
    
    obstacle.x = random(200,350);
    
    obstacle.addImage("obstacle",obstacleImage);
    
    obstacle.scale = 0.1;
    
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    obstaclesGroup.add(obstacle);
    
  }
  if (monkey.isTouching(obstaclesGroup)){
    
    monkey.scale=0.016;   
    
    obstaclesGroup.destroyEach();
    
  }
  
  
  drawSprites();}