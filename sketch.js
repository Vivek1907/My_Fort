const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var main, ground, pillar1, pillar2, pillar3;

function setup(){
  createCanvas(1400,675);
  engine = Engine.create();
  world = engine.world;
  main = new Rectangle(width/2,450,1000,350,PI/2);
  ground = new Rectangle(width/2,650,width,50);
  door = new Rectangle(width/2,550,100,150,PI/2);
  pillar1 = new Rectangle(400,200,100,200);
  pillar2 = new Rectangle(1000,200,100,200);
  pillar3 = new Rectangle(700,200,100,200);
}

function draw(){
  background("#87ceeb");
  Engine.update(engine);
  main.display("brown");
  fill("#ff0000");
  for(var i = 220;i<1200;i+=50){
    rect(i,260,20,30);
  }
  
  ground.display("green");
  pillar1.display("brown");
  pillar2.display("brown");
  pillar3.display("brown");
  for(var i = 220;i<1200;i+=50){
    fill(0);
    rect(i,300,20,20);
}
  door.display("#3a2613");
  arc(width/2, 475, 100, 80, PI, 0, CHORD);
  arc(width/4, 500, 80, 80, PI, 0 , CHORD);
  rect(width/4,540,80,80);
  arc(width*3/4, 500, 80, 80, PI, 0 , CHORD);
  rect(width*3/4,540,80,80);
  rect(700,210,50,80);
  arc(width/2, 175, 50, 40, PI, 0, CHORD);
  arc(400, 175, 50, 40, PI, 0 , CHORD);
  rect(400,210,50,80);
  arc(1000, 175, 50, 40, PI, 0 , CHORD);
  rect(1000,210,50,80);
  triangle(350,100,400,50,450,100);
  triangle(950,100,1000,50,1050,100);
  triangle(650,100,700,50,750,100);
  fill("#ff0000");
  triangle(width/2,0,740,25,width/2,25);
  
  stroke(10);
  line(width/2,435,width/2,625);
  line(width/2,0,width/2,50);
  line(width/4,460,width/4,580);
  line(width*3/4,460,width*3/4,580);
}