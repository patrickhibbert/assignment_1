//
//  Project: "Colour My Code"
//
//  Assignment 1
//  ARCH1477 Computational Prototyping for Industrial Design
//
//  Patrick Hibbert, s3664204
//

var lines = []
var pencilColour
var backgroundColour
var pencilWidth
var clearCanvas
var pencilShape
var pencilRandom
var generateForm
var mode

let font, fontsize = 32;

let brush;
let imageBrush;


function preload() {
  font = loadFont('assets/code_font.ttf');
  img = loadImage('assets/image_a.png');
}

function setup() {
  mode =  0;
  createCanvas(windowWidth, 750);
  textFont(font);
  textSize(fontsize);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageBrush = loadImage('assets/image_a.png');
  brush = imageBrush;
  imageMode(CENTER);

  var options = createDiv().style('display: flex')

  var optionsTitles = createDiv().parent(options)
  createP('Background Colour').parent(optionsTitles).style('margin: 30px')
  createP('Pencil Colour').parent(optionsTitles).style('margin: 30px')
  createP('Funky Mode').parent(optionsTitles).style('margin: 30px')
  createP('Pencil Width').parent(optionsTitles).style('margin: 30px')
  createP('Pencil Shape').parent(optionsTitles).style('margin: 30px')

  var optionsValues = createDiv().parent(options).style('margin: 9px 40px; width: 80px')
  backgroundColour = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 17px')
  pencilColour = createColorPicker('#ffffff').parent(optionsValues).style('margin-top: 20px')
  pencilRandom = createCheckbox("", false).parent(optionsValues).style('margin-top: 25px')
  pencilWidth = createSelect(false).parent(optionsValues).style('margin-top: 25px; width: 50px; height: 25px')
  pencilWidth.option('2')
  pencilWidth.option('4')
  pencilWidth.option('8')
  pencilWidth.option('16')
  pencilWidth.option('32')

  pencilShape = createSelect(false).parent(optionsValues).style('margin-top: 25px; width: 100px; height: 25px')
  pencilShape.option('Line')
  pencilShape.option('Circle')
  pencilShape.option('Rectangle')
  pencilShape.option('Triangle')
  pencilShape.option('Star')

  clearCanvas = createButton('Clear').parent(options).style('margin: 20px; width: 100px; height: 40px')

  saveCanvas = createButton("Export").parent(options).style('margin: 20px; width: 100px; height: 40px')
  
}

function draw() {
  clear();
  if (mode == 0) {
  background(backgroundColour.value())
  textSize(30);
  text('Welcome to', 30, 50);
  fill(200);
  textSize(45);
  text('"Colour My Code"', 30, 100);
  textSize(20);
  text('hosted By', 30, 670);
  textSize(30);
  text('Patrick hibbert', 30, 710);
  textSize(25);
  text('pRess enter', windowWidth - 280, 675);
  textSize(25);
  text('To beGin...', windowWidth - 280, 710);

  stroke(170)

  translate(width / 2, height / 2)

  for (var i = 0; i < 200; i++) {
    push()

    rotate(sin(frameCount + i) * 80)

    rect(0, 0, 600 - i * 3, 00 - i * 3, 200 - i)

    pop()
  }
}

if (mode == 1) {
  background(backgroundColour.value())
  textSize(20);
  text('pRess "a" to sWitch to imaGe brush', 30, 710);
  if (pencilRandom.checked()) {
   var r = hex(floor(map(noise(frameCount / 100), 0, 1, 0, 255)), 2)
   var g = hex(floor(map(noise(frameCount / 100 + 1000), 0, 1, 0, 255)), 2)
   var b = hex(floor(map(noise(frameCount / 100 + 2000), 0, 1, 0, 255)), 2)

   pencilColour.value('#' + r + g + b)
  }

  clearCanvas.mousePressed(function() {
    lines = []
  })

  if (mouseIsPressed) {
      var line = new draw_line(pencilColour.value(), pencilWidth.value(), pencilShape.value())
      lines.push(line)
  }

  for (var line of lines) {
      line.show()
  }
}
if (mode == 2) {
  background(backgroundColour.value())
  textSize(20);
  text('pRess "h" to return to home screen', 30, 710);
  drawImageBrush();
}

  saveCanvas.mousePressed(saveAsCanvas)
}

function saveAsCanvas() {
  save("my_masterpiece.png");
}

function drawImageBrush(col, brushSize) {
  tint(col, 40, 60);
  push();
  translate(mouseX, mouseY);
  image(brush, 0, 0, brushSize, brushSize);
  pop();
}

function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }
}

function keyTyped() {
  if (key === 'a') {
    mode = 2;
  } else if (key === 'h') {
    mode = 0;
  }
}
