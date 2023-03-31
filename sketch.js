var player;
var loadScreen;
var gameState = "path1Screen";
var path1,path2,path3,path4;
var path2Scoller;
var path4Scene;
var path1Stairs,path1Arena;
var path1X,path1Y;

function preload(){
playerMoving = loadAnimation("walk_knight_1.png","walk_knight_2.png","walk_knight_3.png","walk_knight_4.png","walk_knight_5.png","walk_knight_6.png","walk_knight_7.png","walk_knight_8.png"
,"walk_knight_9.png","walk_knight_10.png","walk_knight_11.png","walk_knight_12.png")
loadScreen1 = loadImage("assets/load screen.jfif")
mapImage = loadImage("assets/map.jfif")
path2Scoller = loadImage("assets/Background/layer_2.png")
path4Scene = loadImage("assets/path4.png")
path1Stairs = loadImage("assets/temple scene.png")
path1Arena =loadImage("assets/temple scene arena.png")
path1X = width/2+900
path1Y =height/2+300
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  player = createSprite(width/2,height/2,100,100)
  player.addAnimation("moving",playerMoving)
  player.scale=2
}


function draw(){
background("black")
if(gameState==="start"){
  var Screen1 = createSprite(width/2-200,height/2)
  Screen1.addImage(loadScreen1)
  Screen1.scale=2.5
  var map = createSprite(width/2+500,height/2)
  map.addImage(mapImage)
  map.scale=1
  var path1 = createSprite(1250,250,50,50)
  path1.shapeColor="yellow"
  var path2 = createSprite(1450,250,50,50)
  path2.shapeColor="yellow"
  var path3 = createSprite(1250,450,50,50)
  path3.shapeColor="yellow"
  var path4 = createSprite(1450,450,50,50)
  path4.shapeColor="yellow"

   
}
if(gameState==="path1Screen"){
  var Screen1 = createSprite(path1X-370,path1Y-150)
  Screen1.addImage(path1Arena)
  Screen1.scale=5
  var Screen2 = createSprite(path1X,path1Y+400)
  Screen2.addImage(path1Stairs)
  Screen2.scale=8
   
}
if(gameState==="path2Screen"){
  background("black")
  var Screen1 = createSprite(width/2-200,height/2)
  Screen1.fill="black"
   Screen1.velocityX=-4
   Screen1.addImage(path2Scoller)
}
if(gameState==="path3Screen"){

}
if(gameState === "path4Screen"){
  var Screen1 = createSprite(width/2-500,height/2)
  Screen1.addImage(path4Scene)
  Screen1.scale=8
  var Screen1 = createSprite(width/2+500,height/2)
  Screen1.addImage(path4Scene)
  Screen1.scale=8
}
fill("red")
text(mouseX+mouseY,50,50)
drawSprites()
}

