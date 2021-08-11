
var ship; 
var ship_going;
var edges;
var seaImage;
var sea;

function preload(){
  ship_going = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,180,400,20);
  sea.addImage("sea.png",seaImage);
  sea.x = sea.width/2;
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("ship_going", ship_going);
  edges = createEdgeSprites();

  //ship.scale = 0.5;
  //ship.x = 50;

}


function draw(){
  background("blue");
  
  //if(keyDown("space")){
    //ship.velocityX = -10;
  //}

  //ship.velocityY = ship.velocityY + 0.5;
  
  sea.velocityX = -2;

  if (sea.x < 0) {
    sea.x = sea.width/2;
  }

  ship.collide(sea)
  drawSprites();
}