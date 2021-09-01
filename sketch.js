var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);

  dog = createSprite(250,250,10,10);
  happyDog = createSprite(130,250,10,10);

  foodStock=database.ref('Food')
  foodStock.on("value", readStock);
}


function draw() {  

  background(46, 139, 87);

  drawSprites();
  //add styles here

}



