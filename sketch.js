
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,paperobject;
var boxBase,boxBottomBody,boxleftBody;
var boxleftSprite,boxRightBody,boxRightSprite;
var boxPosition;
var border1,border2,border3;

function setup() {
	createCanvas(1095, 400);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
paperobject= new Paper(100,200,50,100,500);
ground = new Ground(0,height,3200,55);

box.Position=200;
boxY=210;

boxleftSprite=new Dustbin(900,305,20,130);
boxleftSprite.shapeColor="white";

boxBase=new Dustbin(800,360,200,20);
boxBase.shapeColor="white";

boxRightSprite=new Dustbin(700,305,20,130);
boxRightSprite.shapeColor="white";

border1= new Border(1090,200,10,400);
border2= new Border(5,200,10,400);
border3= new Border(547,5,1090,10);

	Engine.run(engine);
  
}

function draw() {
  background(0);

  drawSprites();
  paperobject.display();
  ground.display();
  boxleftSprite.display();
  boxRightSprite.display();
  boxBase.display();
  border1.display();
  border2.display();
  border3.display();
}

function keyPressed() {
	
 if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paperobject.body, paperobject.position,{x:90,y:-90}) 
  }
}


