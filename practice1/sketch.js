function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  var a = 200;
  var b = 0;
  var x = 200;
  background(0);

  while (b < 15) {  
  print('a');
  fill(0);
  square(200 - x,200 - x,2*a);
  fill(255,0,0);
  circle(200,200,2*a);
  x = (a * sqrt(2)/2);
  a = a*sqrt(2)/2; 
  b++;
  }
}