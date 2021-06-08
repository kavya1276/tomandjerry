// 1 cat sprite - 3 different animations
// sprite - cat
// animations - catWalking, catStanding, catFinal

//when you make the sprite - add all the animations 

var backgroundImage;
var cat;
var catWalking,catStanding,catSitting;

var mouse;
var mouseWithCheese,mouseTeasing,mouseSearching;


function preload(){
    //load the images here
     backgroundImage = loadImage("images/garden.png");
      catSitting= loadAnimation("images/cat1.png");
      catWalking= loadAnimation("images/cat2.png","images/cat3.png")
      catStanding= loadAnimation("images/cat4.png");
      mouseWithCheese = loadAnimation("images/mouse1.png");
     mouseTeasing= loadAnimation("images/mouse2.png","images/mouse3.png");
     mouseSearching = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870,600,20,20);
    cat.addAnimation("sitting",catSitting);
    cat.addAnimation("walking",catWalking);
    cat.addAnimation("standing",catStanding);
    cat.scale = 0.13;

    mouse = createSprite(200,600,20,20);
    mouse.addAnimation("cheese",mouseWithCheese);
    mouse.addAnimation("teasing",mouseTeasing);
    mouse.addAnimation("searching",mouseSearching);
    mouse.scale = 0.13;

}
function draw(){

  background(backgroundImage);

   
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.x = 240;;
    cat.changeAnimation("standing");
   
    mouse.changeAnimation("searching");
  }
    drawSprites();
}

// function keyPressed will run automatically when any key is pressed
function keyPressed(){
  
  //mouse.changeAnimation("searching")

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.changeAnimation("walking");
    cat.frameDelay = 10;
    mouse.changeAnimation("teasing");
    mouse.frameDelay = 10;
    
  }
  if(keyCode === RIGHT_ARROW){
    cat.velocityX = 5;
  }

  
}     