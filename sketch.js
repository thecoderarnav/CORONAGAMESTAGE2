const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,pig3, germ1 , germ2 , germ3, vaccine;
var backgroundImg,platform;
var  slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   // getBackgroundImg();//
   bg = loadImage("sprites/bg9.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    germ1 = new Germ1(700,320,70,70);
    germ2 = new Germ1(920,320,70,70);

    log1 = new Log(810,260,300, PI/2);
    germ3 = new Germ2(700,240,70,70); 
    germ4= new Germ2(920,240,70,70);
    germ5 = new Germ3(810,160,70,70)
    log3 =  new Log(810,180,300, PI/2);

    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    vaccine = new Vaccine(200,50);


    slingshot = new SlingShot(vaccine.body,{x:200, y:50});
}

function draw(){

      background(bg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50);
    
    Engine.update(engine);
    //strokeWeight(4);
    germ1.display();
    germ2.display();
    ground.display();
    //pig1.display();
    germ1.score();
    log1.display();

    germ3.display();
    germ4.display();
    germ5.display();
   // pig3.display();
    germ2.score();
    germ3.score();
   log3.display();

   
  log4.display();
log5.display();
 
    vaccine.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
//    if (gameState!=="launched"){
        Matter.Body.setPosition(vaccine.body, {x: mouseX , y: mouseY});
    //} 
}



function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       vaccine.trajectory = [];
       Matter.Body.setPosition(vaccine.body,{x:200 , y:50});
      slingshot.attach(vaccine.body);
    }
}

/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg)
}*/