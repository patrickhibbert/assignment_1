//
//  Project: "Colour My Code"
//
//  Assignment 1
//  ARCH1477 Computational Prototyping for Industrial Design
//
//  Patrick Hibbert, s3664204
//

var lines = []

function setup() {
  createCanvas(400, 500)
}

function draw() {
  background(10)

  if (mouseIsPressed) {
      var line = new draw_line()
      lines.push(line)
  }

  for (var line of lines) {
      line.show()
  }
}