var dog, happyDog,dogHappy, database, foodS, foodStock;

function preload()
{
  dogHappy = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  console.log(database)
  dog = createSprite(250,250,20,20)
  dog.addImage(dogHappy)
  dog.scale = 0.2
  foodStock = database.ref("food")
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139)
  textSize(18)
  text("Food Left = "+ foodS,100,100)
  if(keyIsDown(UP_ARROW)){
    foodS--
    writeStock(foodS);
    dog.addImage(happyDog)
}
  drawSprites();
}
function readStock(data){
foodS = data.val();
console.log(foodS)
}
function writeStock(x){
database.ref("/").update({
  food:x
})
}



