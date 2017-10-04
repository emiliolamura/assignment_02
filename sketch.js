function setup() {
  createCanvas(800,800)
  angleMode(DEGREES)
  background(230)
}

function draw() {
  stroke(40)
  strokeWeight(1.8)
  noFill()
  arc(width/2, height/2, 600, 600, 0, frameCount*2, CHORD);
  if (frameCount == 180) {
    noLoop();
  }
stroke(230)
strokeWeight(3)
ellipse(width/2,height/2, 600,600)

}