var mazeoutline;
var mazeoutlinesprite;

var maze1;
var maze1sprite;

var maze2;
var maze2sprite;

var maze3;
var maze3sprite;

var maze4;
var maze4sprite;

var maze5;
var maze5sprite;

var maze6;
var maze6sprite;

var maze7;
var maze7sprite;

var maze8;
var maze8sprite;

var maze9;
var maze9sprite;

var maze10;
var maze10sprite;

var maze11;
var maze11sprite;

var maze12;
var maze12sprite;

var maze13;
var maze13sprite;

var maze14;
var maze14sprite;

var maze15;
var maze15sprite;

var maze16;
var maze16sprite;

var maze17;
var maze17sprite;

var maze18;
var maze18sprite;

var maze19;
var maze19sprite;

var maze20;
var maze20sprite;

var maze21;
var maze21sprite;

var maze22;
var maze22sprite;

var maze23;
var maze23sprite;

var maze24;
var maze24sprite;

var maze25;
var maze25sprite;

var maze26;
var maze26sprite;

var maze27;
var maze27sprite;

var maze28;
var maze28sprite;

var maze29;
var maze29sprite;

var maze30;
var maze30sprite;

var maze31;
var maze31sprite;

var player;
var playersprite;

var coin;
var coinsprite;

var coin2;
var coin2sprite;

var coin3;
var coin3sprite;

var coin4;
var coin4sprite;

var coin5;
var coin5sprite;

var diamond;
var diamondsprite;

var diamond2;
var diamond2sprite;

var banana;
var bananasprite;

var banana2;
var banana2sprite;

var apple;
var applesprite;

var apple2;
var apple2sprite;

var flag;
var flagsprite;

var energyimage;
var life = 85;

var score =0;
var energy = 85;
var playerMoving = false;
var gameState = 0;

var user;

function preload(){
  // mazeoutline = loadImage("assets/mazeoutline.png");
  maze1 = loadImage("assets/maze1.png");
  maze2 = loadImage("assets/maze2.png");
  maze3 = loadImage("assets/maze3.png");
  maze4 = loadImage("assets/maze4.png");
  maze5 = loadImage("assets/maze5.png");
  maze6 = loadImage("assets/maze6.png");
  maze7 = loadImage("assets/maze7.png");
  maze8 = loadImage("assets/maze8.png");
  maze9 = loadImage("assets/maze9.png");
  maze10 = loadImage("assets/maze10.png");
  maze11 = loadImage("assets/maze11.png");
  maze12 = loadImage("assets/maze12.png");
  maze13 = loadImage("assets/maze13.png");
  maze14 = loadImage("assets/maze14.png");
  maze15 = loadImage("assets/maze15.png");
  maze16 = loadImage("assets/maze16.png");
  maze17 = loadImage("assets/maze17.png");
  maze18 = loadImage("assets/maze18.png");
  maze19 = loadImage("assets/maze19.png");
  maze20 = loadImage("assets/maze20.png");
  maze21 = loadImage("assets/maze21.png");
  maze22 = loadImage("assets/maze22.png");
  maze23 = loadImage("assets/maze23.png");
  maze24 = loadImage("assets/maze24.png");
  maze25 = loadImage("assets/maze25.png");
  maze26 = loadImage("assets/maze26.png");
  maze27 = loadImage("assets/maze27.png");
  maze28 = loadImage("assets/maze28.png");
  maze29 = loadImage("assets/maze29.png");
  maze30 = loadImage("assets/maze30.png");
  maze31 = loadImage("assets/maze31.png");
  playersprite = loadImage("assets/smiley.png");
  coinsprite = loadImage("assets/coin.png");
  diamondsprite = loadImage("assets/diamond.png");
  bananasprite = loadImage("assets/banana.png");
  applesprite = loadImage("assets/apple.png");
  flagsprite = loadImage("assets/flag.png");
  energyimage = loadImage("assets/life.png");
}

function setup(){
  createCanvas(700,700);
  // mazeoutlinesprite = createSprite(350,350);
  // mazeoutlinesprite.addImage("mazeoutline",mazeoutline);
 
  user = prompt("Please enter your name.");

  rules();

  maze1sprite = createSprite(141.5,75.5);
  maze1sprite.addImage("maze",maze1);

  maze2sprite = createSprite(75.5,350);
  maze2sprite.addImage("maze2",maze2);

  maze3sprite = createSprite(274.5,626);
  maze3sprite.addImage("maze3",maze3);

  maze4sprite = createSprite(207.5,132);
  maze4sprite.addImage("maze4",maze4);

  maze5sprite = createSprite(162.5,128.5);
  maze5sprite.addImage("maze5",maze5);

  maze6sprite = createSprite(128,220);
  maze6sprite.addImage("maze6",maze6);

  maze7sprite = createSprite(590,625.5);
  maze7sprite.addImage("maze7",maze7);

  maze8sprite = createSprite(628,347);
  maze8sprite.addImage("maze8",maze8);

  maze9sprite = createSprite(445.5,77);
  maze9sprite.addImage("maze9",maze9);

  maze10sprite = createSprite(273,99);
  maze10sprite.addImage("maze10",maze10);

  maze11sprite = createSprite(420,131);
  maze11sprite.addImage("maze11",maze11);

  maze12sprite = createSprite(567,345);
  maze12sprite.addImage("maze12",maze12);

  maze13sprite = createSprite(350,568);
  maze13sprite.addImage("maze13",maze13);

  maze14sprite = createSprite(128,468);
  maze14sprite.addImage("maze14",maze14);

  maze15sprite = createSprite(185,392);
  maze15sprite.addImage("maze15",maze15);

  maze16sprite = createSprite(185,316.5);
  maze16sprite.addImage("maze16",maze16);

  maze17sprite = createSprite(350,187.5);
  maze17sprite.addImage("maze17",maze17);

  maze18sprite = createSprite(514,357.5);
  maze18sprite.addImage("maze18",maze18);

  maze19sprite = createSprite(349.5,525);
  maze19sprite.addImage("maze19",maze19);

  maze20sprite = createSprite(186,491);
  maze20sprite.addImage("maze20",maze20);

  maze21sprite = createSprite(321,240);
  maze21sprite.addImage("maze21",maze21);

  maze22sprite = createSprite(277.5,245);
  maze22sprite.addImage("maze22",maze22);

  maze23sprite = createSprite(245.5,273);
  maze23sprite.addImage("maze23",maze23);

  maze24sprite = createSprite(350,293);
  maze24sprite.addImage("maze24",maze24);

  maze25sprite = createSprite(408.25,357);
  maze25sprite.addImage("maze25",maze25);

  maze26sprite = createSprite(344,410.25);
  maze26sprite.addImage("maze26",maze26);

  maze27sprite = createSprite(430,245);
  maze27sprite.addImage("maze27",maze27);
  
  maze28sprite = createSprite(464.5,355);
  maze28sprite.addImage("maze28",maze28);

  maze29sprite = createSprite(348,455);
  maze29sprite.addImage("maze29",maze29);

  maze30sprite = createSprite(243,405);
  maze30sprite.addImage("maze30",maze30);

  maze31sprite = createSprite(266,344);
  maze31sprite.addImage("maze31",maze31);

  rewards = new Group()
  energy = new Group()
  
  var rewardsposition = [
    {x: 541, y: 497, image: coinsprite},
    {x: 220, y: 484, image: coinsprite},
    {x: 431, y: 278, image: coinsprite},
    {x: 180, y: 160, image: coinsprite},
    {x: 105, y: 598, image: coinsprite},
  ];

  this.addSprites(
    rewards,
    rewardsposition.length,
    coinsprite,
    0.04,
    rewardsposition
  );

  var rewardsposition2 = [
    {x: 295, y: 270, image: diamondsprite},
    {x: 180, y: 102, image: diamondsprite}
  ];

  this.addSprites(
    rewards,
    rewardsposition2.length,
    diamondsprite,
    0.08,
    rewardsposition2
  )

  var energyposition = [
    {x: 145, y: 100, image: bananasprite},
    {x: 540, y: 462, image: bananasprite}
  ];

  this.addSprites(
    energy,
    energyposition.length,
    bananasprite,
    0.11,
    energyposition
  );

  var energy2position = [
    {x: 270, y: 386, image: applesprite},
    {x: 157.5, y: 368, image: applesprite}
  ];

  this.addSprites(
    energy,
    energy2position.length,
    applesprite,
    0.045,
    energy2position
  );

  player = createSprite(239,112,20,20);
  player.addImage("runner",playersprite);

  flag = createSprite(515.5,619,20,20);
  flag.addImage("flag",flagsprite);

  player.scale = 0.055;
  flag.scale = 0.08;
  // mazeoutlinesprite.scale = 1.5;
  maze1sprite.scale = 0.5;
  maze2sprite.scale = 0.5;
  maze3sprite.scale = 0.5;
  maze4sprite.scale = 0.5;
  maze5sprite.scale = 0.5;
  maze6sprite.scale = 0.5;
  maze7sprite.scale = 0.5;
  maze8sprite.scale = 0.5;
  maze9sprite.scale = 0.5;
  maze10sprite.scale = 0.5;
  maze11sprite.scale = 0.5;
  maze12sprite.scale = 0.5;
  maze13sprite.scale = 0.5;
  maze14sprite.scale = 0.5;
  maze15sprite.scale = 0.5;
  maze16sprite.scale = 0.5;
  maze17sprite.scale = 0.5;
  maze18sprite.scale = 0.5;
  maze19sprite.scale = 0.5;
  maze20sprite.scale = 0.5;
  maze21sprite.scale = 0.5;
  maze22sprite.scale = 0.5;
  maze23sprite.scale = 0.5;
  maze24sprite.scale = 0.5;
  maze25sprite.scale = 0.5;
  maze26sprite.scale = 0.5;
  maze27sprite.scale = 0.5;
  maze28sprite.scale = 0.5;
  maze29sprite.scale = 0.5;
  maze30sprite.scale = 0.5;
  maze31sprite.scale = 0.5;
}

function draw(){
  background(83, 197, 127);
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

  textSize(20);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("AdventureScape",40,40);

  textSize(14);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("Score: "+score,575,25);
  
  textSize(14);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("Player: "+user,575,50);


  if(player.isTouching(maze1sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze2sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze3sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze4sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze5sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze6sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze7sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze8sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze9sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze10sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze11sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze12sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze13sprite)){
    player.x = 239;
    player.y = 112;
  }
  
  if(player.isTouching(maze14sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze15sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze16sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze17sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze18sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze19sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze20sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze21sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze22sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze23sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze24sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze25sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze26sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze27sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze28sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze29sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze30sprite)){
    player.x = 239;
    player.y = 112;
  }

  if(player.isTouching(maze31sprite)){
    player.x = 239;
    player.y = 112;
  }

  this.handleControls();
  this.handleReward();
  this.handleEnergy();
  this.showEnergyBar();

  drawSprites();
}

function addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
  for (var i = 0; i < numberOfSprites; i++) {
    var x, y;
    
    if (positions.length > 0) {
      x = positions[i].x;
      y = positions[i].y;
      spriteImage = positions[i].image;
    } else {
      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 4.5, height - 400);
    }
    var sprite = createSprite(x, y);
    sprite.addImage("sprite", spriteImage);

    sprite.scale = scale;
    spriteGroup.add(sprite);
  }
}

function handleReward(){
  player.overlap(rewards, function(collector, collected) {
    score += 1;
    collected.remove();
})
}

function handleEnergy(){
  player.overlap(energy, function(collector, collected){
    life = 85;
    collected.remove();
  })
  if (life > 0 && playerMoving) {
    life -= 0.1;
  }

  if (life <= 0 && gameState == 1) {
    gameState = 2;
    playerMoving = false;
    this.gameOver();
  }
}

function showEnergyBar() {
  push();
// image(energy,player.x +50, player.y +50, 20, 20);
  fill("white");
  rect(player.x +30, player.y, 85, 5);
  fill("#ffc400");
  rect(player.x +30, player.y, life, 5);
  noStroke();
  pop();
}

function handleControls(){

  if(gameState == 0 || gameState == 1)
  {

gameState =1;

  if(keyIsDown(LEFT_ARROW)){
    player.x -= 3.5;
    playerMoving = true;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x += 3.5;
    playerMoving = true;
  }

  if(keyIsDown(UP_ARROW)){
    player.y -= 3.5;
    playerMoving = true;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.y += 3.5;
    playerMoving = true;
  }
  }
}

function gameOver(){
  swal({
    title: `Game Over`,
    text: "You ran out of energy! 😭",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  },

  function(){
    location.reload();
  }
  );

}

function rules(){
  swal({
    title: 'Rules!',
    text: "Don't collide with the maze, Collect fruits for energy or you'll die, collect rewards to increase your score, and reach the finish line!",
    confirmButtonText: "OK"
  });
}