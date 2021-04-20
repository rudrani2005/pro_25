
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,660,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(400,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
 

  groundObject.display();
  dustbinObj.display();
  paper.display();




}


function keyPressed(){
	console.log("trace1")
	if(keyCode === UP_ARROW) {
		console.log("trace2")
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-40});
	}
}

