
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, division1, division2, division3, division4, division5, division6, division7;
var particles = [];
var plinkos = [];

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240,790,480,20);
	division1 = new Divisions(0,650, 10, 300);
	division2 = new Divisions(80,650, 10, 300);
	division3 = new Divisions(160,650, 10, 300);
	division4 = new Divisions(240,650, 10, 300);
	division5 = new Divisions(320,650, 10, 300);
	division6 = new Divisions(400,650, 10, 300);
	division7 = new Divisions(480,650, 10, 300);

	for(var j = 40; j <= width; j=j+50){
		plinkos.push(new Plinko(j, 75));
	}

	for(var j = 15; j <= width-10; j=j+50){
		plinkos.push(new Plinko(j, 175));
	}

	for(var j = 40; j <= width; j=j+50){

		plinkos.push(new Plinko(j, 275));

	}

	for(var j = 15; j <= width-10; j=j+50){
		plinkos.push(new Plinko(j, 375));
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  if(frameCount % 60 === 0){
	particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var j = 0; j < particles.length; j++){

	particles[j].display();

  }

  for(var j = 0; j < plinkos.length; j++){

	plinkos[j].display();

  }
 
}



