var rectMove
var rectEsta




function setup() {
  createCanvas(1200,800);
  rectEsta=createSprite (600, 400, 50, 80);
  rectEsta.shapeColor="green";
  rectMove=createSprite (400,400,80,30);
  rectMove.shapeColor="green";
  rectMove.debug=true;
  rectEsta.debug=true;
  rectMove.velocityX=2;
}

function draw() {
  background(255,255,255); 
  //rectMove.x=World.mouseX;
  //rectMove.y=World.mouseY;
  

  if(rectMove.x-rectEsta.x<rectMove.width/2+rectEsta.width/2
    &&rectEsta.x-rectMove.x<rectMove.width/2+rectEsta.width/2
    &&rectMove.y-rectEsta.y<rectMove.height/2+rectEsta.height/2
    &&rectEsta.y-rectMove.y<rectMove.height/2+rectEsta.height/2){
    rectEsta.shapeColor="red";
    rectMove.shapeColor="red";
    rectMove.velocityX=-rectMove.velocityX;    
    }

   else{
      rectEsta.shapeColor="green";
      rectMove.shapeColor="green";
    }

  drawSprites();
}