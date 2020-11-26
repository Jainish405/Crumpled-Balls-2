
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,ball;
var binImg,bin;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,650,1200,20);
	paper = new Paper(100,100);

   

    binPart1 = new DustBin(902,505,10,120);
    binPart2 = new DustBin(962,565,130,10);
    binPart3 = new DustBin(1024,505,10,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  binPart1.display();
  binPart2.display();
  binPart3.display(); 
  ground.display();
  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:20 , y :-20});
	 } 
 }





