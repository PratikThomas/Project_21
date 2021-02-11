var bullet, wall;
var speed, weidht, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30,52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1500, 200, thickness, height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(hasCollided(wall, bullet)){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (deformation > 10){
      wall.shapeColor = color(255, 0, 0);
    }
    if (deformation < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}

function hasCollided(wall, bullet){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
  else{  
    return false
  }
}