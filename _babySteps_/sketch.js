function setup() {
  createCanvas(400, 400);
  noLoop();
  colorMode(HSL);
}

function draw() {
  let veryPeri = color(239,40,67);
  let cloudDancer = color(43,19, 93);
  let eggShellBlue  = color(176,29,72);
  let artName = '-baby steps-';
  let artistName = 'ozito';
  let x = 0;
  
  background(cloudDancer);
  textSize();
  fill(eggShellBlue);
  text(artName, 30, 25);
  text(artistName, 345,385);
  
  noStroke();
  fill(veryPeri);
  square(30,30,340);
  while(x < 5){
    x++;
    strokeCap(ROUND);
    strokeWeight(random(10,60));
    stroke(random(0, 50), random(0, 100), random(0, 100));
    line(random(70,330), random(70,330), random(70, 330), random(70,330));
  }

}

function mousePressed(){
saveCanvas("outputSave", "png")
}
