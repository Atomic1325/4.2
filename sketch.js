var starImg,bgImg;
var star, starBody;
var hada,hadaImg
var sonido 

//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    hadaImg = loadAnimation("fairyImage1.png","fairyImage2.png")
	sonido = loadSound("JoyMusic.mp3")
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	sonido.play();
	//crea el sprite del hada, y agrega la animación para el hada
    hada = createSprite(400,300);
	hada.addAnimation("hadaImg",hadaImg);
	hada.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (keyDown("LEFT_ARROW")) {
	hada.velocityX = -2;
	hada.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
	hada.velocityX = 2;
	hada.velocityY = 0;
  }

  //escribe aquí el código para detener la estrella en la mano del hada
  if(hada.isTouching(star)){

	star.velocityY = 0;
  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	
	}
	//escribe el código para mover al hada a la izquierda y derecha
	
	 
	  
}
