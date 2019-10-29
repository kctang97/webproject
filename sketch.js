
let xpos, ypos; // Starting position of shape
let rad = 80; // Width of the shape
let xspeed = 3; // Speed of the shape
let yspeed = 2.5; // Speed of the shape
let xdir = 1; // Left or Right
let ydir = 1; // Top to Bottom

let xpos1, ypos1; // Starting position of shape
let rad1 = 60; // Width of the shape
let xspeed1 = 5; // Speed of the shape
let yspeed1 = 3; // Speed of the shape
let xdir1 = -1; // Left or Right
let ydir1 = -1; // Top to Bottom

let img;
let s;
let c = 0;


function preload() {
  img = loadImage("image/ghost.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(20);
  // ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = windowWidth / 1.5;
  ypos = windowHeight / 1.5;

  s = createAudio("sound/scarysound.mp3");
}

function draw() {
    background(0, 60);
    Ghost();
  // Update the position of the shape

}

function Ghost() {
  xpos = xpos + xspeed * xdir;
  ypos = ypos + yspeed * ydir;
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdir *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydir *= -1;
  }
  // Draw the shape
  image(img, xpos, ypos, rad, rad);
  tint(100, random(100));
}

function mousePressed() {
  if(dist(mouseX, mouseY, xpos, ypos) < 75) {
    setTimeout(changeBackground, 33000);
    s.play(true);
  }
}

function changeBackground() {
  if (c <= 1){
    c++;
    background(200,0,0);
    setTimeout(changeBackground, 33000);
  } else {
    background(200,0,0);
  }
}
