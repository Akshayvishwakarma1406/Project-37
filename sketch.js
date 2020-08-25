
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box,score,monster,runner ,runnerS,coming;

function preload() {
	monster = loadImage("Images/monsterRun.gif");
	// getBackGround();
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	box = createSprite(200,200,50,50);
	ground = new Ground(width/2,height-5,width,10);
	Engine.run(engine);
  
}


function draw() {
    background("black");
	ground.display();
	if(frameCount % 60 === 0 ){
		coming = createSprite(width + 20,random(200,400),200,20);
		coming.velocityX = -5;
	}

	// box.collide(coming);

	if (keyDown("up")){
		box.velocityY =  -5;
	}
	box.velocityY = box.velocityY + 0.5;

	if (keyDown("down")){
		box.velocityY = box.velocityY + 5;
	}
	console.log(frameCount);
    drawSprites();
}

function keyPressed(){


	// if (keyDown("left")){
	// 	box.velocityY = box.velocityY + -5;
	// }

	// if (keyDown("up")){
	// 	box.velocityY = box.velocityY + -5;
	// }

}

// async function getBackGround(){
//     var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
//     var respJson = await responce.json();
//     var Datetime = respJson.datetime;
//     var hour = Datetime.slice(11,13);
//     console.log(hour);

//     if(hour >= 6 && hour < 19){
//         bg = "bg.jpg";
//         // bg = color("green");
//     }
//     else{
//         bg = "bg(2).jpg";
//         // bg = color("red");
//     }
//     backgroundImg = loadImage(bg);
// }