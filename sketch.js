var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var garden,gardenImg
function preload() {
    //load the images here
cat = loadAnimation ("cat1.png")
catImg1 = loadAnimation ("cat2.png")
catImg2 = loadAnimation("cat3.png")
catImg3 = loadAnimation ("cat4.png");
mouse = loadAnimation("mouse1.png")
mouseImg1 = loadAnimation("mouse2.png")
mouseImg2 = loadAnimation("mouse3.png")
mouseImg3 = loadAnimation("mouse4.png")
 gardenImg = loadAnimation("garden.png")   
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(870,600);
    mouse.addAnimation("catSleeping",catImg1)
    mouse.scale = 0.2

    cat = createSprite(200,600);
    cat.addAnimation("mouseStanding",mouseImg1)
    cat.scale = 0.15

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x<(cat.width - mouse.width/2)){
    mouse.velocityX = 0
    mouse.addAnimation("mouseLastImg",mouseImg3);
    mouse.x = 300
    mouse.scale =0.3
    mouse.changeAnimation("mouseLastImg",mouseImg3);
    cat.addImage("catLastImage",catImg3);
    cat.scale =0.15
    createCanvas.changeAnimation("catLastImg",catImg3);
}

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.velocityX = -5; 
        mouse.addAnimation("mouseRunning", mouseImg2);
        mouse.changeAnimation("mouseRunning",mouseImg2);
        
        cat.addAnimation("catTeasing", catImg2);
        cat.changeAnimation("catTeasing",catImg2);
  //For moving and changing animation write code here

    }
}
