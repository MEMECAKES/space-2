var bg,sleep,brush,gym;
var eat,drink,move;
var astronaut;

function preload() {
bg= loadImage("image/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym21.png","images/gym22.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = creatSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  createEdgeSprites();
  astronaut.bounceOff(Edges);
}
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("Gymming",gym);
  astronaut.changeAnimation("Gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("M_KEY")){
  astronaut.addAnimation("moveing",move);
  astronaut.changeAnimation("moveing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}



