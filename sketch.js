var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
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
	
	var options = {
		'restitution':0.8,
		'friction':1.0,
		'density':1.0
	}
	box1=createSprite(width/2,height-45,100,20,options);
box2=createSprite(340,620,20,100,options);
box3=createSprite(450,620,20,100,options);
box3.shapeColor=color("red")
box2.shapeColor=color("red")
box1.shapeColor=color("red")

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1 = Bodies.rectangle(width/2, height-45, width, 20 , {isStatic:false} );
 	World.add(world, box1);
	 box2 = Bodies.rectangle(340, height-35, width, 100 , {isStatic:false} );
 	World.add(world, box2);


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
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	//packageSprite.x= packageBody.position.x 
	//packageSprite.y= packageBody.position.y 

	//restitution : 0.5;
	 //isStatic = (false);
	 Matter.Body.setStatic(packageBody,false)
  }
}



