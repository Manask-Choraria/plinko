const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
var engine,world
 
var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(240,750,480,50);

  for(var k = 0;k<= width;  k+=80){
    divisions.push(new Divisions (k,height-divisionHeight/2,10,divisionHeight));
 }
 for (var j = 40; j<=width;j=j+50){
   plinkos.push(new Plinko(j,175));
 }
 for (var j = 15; j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 40; j<=width;j=j+50){
  plinkos.push(new Plinko(j,275));
}
for (var j = 15; j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,375));
}



  Engine.run(engine);
}

function draw() {
  background(0); 
  ground.display();

  for (var j = 0;j<divisions.length;j++){
    divisions[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  for (var j = 0;j<plinkos.length;j++){
    plinkos[j].display();
  }

}