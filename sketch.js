var bgImg;
var cat, catImage1, catImage2;
var mouse, mouseImage1, mouseImage2;

function preload()  {
    //Load the images here

    bgImg = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
	
}

function setup()    {
    createCanvas(900,600);
    //Create cat and mouse sprites here
    
    cat = createSprite(800,500);
    cat.addAnimation("catsleeping", catImage1);
    cat.scale = 0.1;

    mouse = createSprite(100,500);
    mouse.addAnimation("mouseTeasing", mouseImage1);
    mouse.scale = 0.1;

}

function draw() {
    background(bgImg);
    //Write a condition here to evalute if cat and mouse collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseStanding", mouseImage3);
        mouse.changeAnimation("mouseStanding");
        cat.addAnimation("catStop", catImage3);
        cat.changeAnimation("catStop");
        cat.velocityX = 0;

    }
    
    drawSprites();
}


function keyPressed()   {

    //For moving and changing the animation write the code here

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImage2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDalay = 25;

    }

    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catRunning", catImage2);
        cat.changeAnimation("catRunning");
        cat.velocityX = -3;
    }
}



