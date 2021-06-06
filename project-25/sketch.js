var ball, dustbin , ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var r1 , r2 , r3;
var ground , world;
var paperImg , dustbin;

function preload(){
	dustbin = loadImage("Images/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600 , 680);

	r1 = Bodies.rectangle(950 , 600 , 10 , 150 , {restitution:0.5 , isStatic: true});
	  World.add(world , r1);
	  
	r2 = Bodies.rectangle(1050 , r1.position.y , 10 , 150 , {restitution:0.5 , isStatic: true});
	  World.add(world , r2);
	  
	r3 = Bodies.rectangle(1000 , 600 , 200 , 20 , {restitution:0.5 , isStatic: true});
  	World.add(world , r3);

	//Create the Bodies Here.
	ball = new Paper(100 , 100 , 50);

	Engine.run(engine);
  
}


function draw() {
  background(255 , 255 , 255);
  rectMode(CENTER);
  ball.display();
  ground.display();
  image(dustbin , r3.position.x , r3.position.y , 200 , 200);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body , ball.body.position , {x: 85 , y: -85});
	}
}
