var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var base , left , right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
 var options= {isStatic:true}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , options );
 	World.add(world, ground);

	 Base = createSprite(width/2,640, 100, 20);
	 Left = createSprite(width/2-50,615, 20, 50);
	 Right = createSprite(width/2+50,615, 20, 50);
	 Base.shapeColor = "red";
	 Left.shapeColor = "red";
	 Right.shapeColor = "red";

	 base = Bodies.rectangle(width/2,640, 100, 20 ,options);
	 World.add(world,base);

	 left = Bodies.rectangle(width/2-50,615, 20, 50 ,options);
	 World.add(world,left);

	 right = Bodies.rectangle(width/2+50,615, 20, 50 ,options);
	 World.add(world,right);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



