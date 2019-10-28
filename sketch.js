
let xpos, ypos; // Starting position of shape
let rad = 80; // Width of the shape
let xspeed = 3; // Speed of the shape
let yspeed = 2.5; // Speed of the shape
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let img;
let s;
let s1;

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

  s = createAudio("sound/heartbeat1.mp3");
  s1 = creareAudio("sound/scaryKnock.mp3");

}

function draw() {
    background(0, 60);
    ghost();
  // Update the position of the shape

}

function ghost() {
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
  // Draw the shape
  image(img, xpos, ypos, rad, rad);
  tint(200, random(100));
}

function mousePressed() {
  if(dist(mouseX, mouseY, xpos, ypos) < 80) {

    s.play(true);
    s1.play(true);
    // s.volume(100);
    // console.log("click");
  }
}
