const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
//Create multiple balls, mulitple ropes varibale here
	var ball_options = {
		restitution: 0.8,
		isStatic:false
		
	  }
	
	ball = Bodies.circle(330,300,10,ball_options);
	World.add(world,ball);
	
	ball2 = Bodies.circle(360,300,12,ball_options)
	World.add(world,ball2)
	
	ball3 = Bodies.circle(390,300,10,ball_options);
	World.add(world,ball3);
	
	ball4 = Bodies.circle(420,300,12,ball_options)
	World.add(world,ball4)
	
	ball5 = Bodies.circle(450,300,10,ball_options);
	World.add(world,ball5);

	//create roof
	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

//create the ropes.
rope1 = new Rope(ball,roof,-70,0)
rope2 = new Rope(ball2,roof,-40,0)
rope3 = new Rope(ball3,roof,-10,0)
rope4 = new Rope(ball4,roof,20,0)
rope5 = new Rope(ball5,roof,50,0)



	Engine.run(engine);
}

function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background("purple");

  rect(roof.position.x,roof.position.y,230,20)
//create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30)
  ellipse(ball3.position.x,ball3.position.y,30);
  ellipse(ball4.position.x,ball4.position.y,30)
  ellipse(ball5.position.x,ball5.position.y,30);

  //call display() to show ropes here
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:-3,y:-5});
	}
}