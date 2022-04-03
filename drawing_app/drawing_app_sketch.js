//
//  Project: "Colour My Code"
//
//  Assignment 1
//  ARCH1477 Computational Prototyping for Industrial Design
//
//  Patrick Hibbert, s3664204
//

// global variables
var lines = []
var pencilColour
var backgroundColour
var pencilWidth
var clearCanvas
var pencilShape
var pencilRandom
var generateForm
var mode

let font;

let brush;
let imageBrush;

// fonts and images are pre-loaded for use by the program
// the assets directory is referenced as the location of each file
function preload() {
  font = loadFont('assets/code_font.ttf');
  img = loadImage('assets/image_a.png');
}

// project setup elements, such as cavas size
// angleMode and rectMode used to facilitate the animation on the welcome screen
// imageMode CENTER is used for the image / png brush
function setup() {
  mode =  0;
  createCanvas(windowWidth, 670);
  textFont(font);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageBrush = loadImage('assets/image_a.png');
  brush = imageBrush;
  imageMode(CENTER);

  // divider element created to separate option titles and values
  var options = createDiv().style('display: flex')

  // divider is listed as the parent of 'optionsTitles'
  var optionsTitles = createDiv().parent(options)
  // titles are created as paragraph elements
  // style method used to organise the interface
  createP('Background Colour').parent(optionsTitles).style('margin: 30px')
  createP('Pencil Colour').parent(optionsTitles).style('margin: 30px')
  createP('Funky Mode').parent(optionsTitles).style('margin: 30px')
  createP('Pencil Width').parent(optionsTitles).style('margin: 30px')
  createP('Pencil Shape').parent(optionsTitles).style('margin: 30px')

  // divider is listed as the parent of 'optionsValues'
  var optionsValues = createDiv().parent(options).style('margin: 9px 40px; width: 80px')
  // values listed to define pencil colour, width and even an option for random / funky colour oscilation
  // as above, the style method used to organise the interface
  backgroundColour = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 17px')
  pencilColour = createColorPicker('#ffffff').parent(optionsValues).style('margin-top: 20px')
  // create a checkbox to initiate "funky mode" for rgb pencil effects
  pencilRandom = createCheckbox("", false).parent(optionsValues).style('margin-top: 25px')
  // create a selector / drop-down menu to choose pencil width
  // only one width can be selected at a give time - the inclusion of 'false' enables this
  pencilWidth = createSelect(false).parent(optionsValues).style('margin-top: 25px; width: 50px; height: 25px')
  // pencil width doubles with each progressive option
  pencilWidth.option('2')
  pencilWidth.option('4')
  pencilWidth.option('8')
  pencilWidth.option('16')
  pencilWidth.option('32')

  // selector / drop-down menu to choose the shape of the pencil
  pencilShape = createSelect(false).parent(optionsValues).style('margin-top: 25px; width: 100px; height: 25px')
  pencilShape.option('Line')
  pencilShape.option('Circle')
  pencilShape.option('Rectangle')
  pencilShape.option('Triangle')
  pencilShape.option('Star')

  // button to clear canvas
  clearCanvas = createButton('Clear').parent(options).style('margin: 20px; width: 100px; height: 40px')

  // button to export canvas (defined later as a .png file)
  saveCanvas = createButton("Export").parent(options).style('margin: 20px; width: 100px; height: 40px')
  
}

function draw() {
  clear();
  if (mode == 0) {
  // values defined earlier are not only used to select pencil colour, but also the background
  background(backgroundColour.value())
  // welcome page / splash screen to introduce the user to the project
  textSize(30);
  text('Welcome to', 30, 50);
  fill(200);
  textSize(45);
  text('"Colour My Code"', 30, 100);
  textSize(20);
  text('hosted By', 30, 610);
  textSize(30);
  text('Patrick hibbert', 30, 645);
  textSize(25);
  text('pRess enter', windowWidth - 280, 610);
  textSize(25);
  text('To beGin...', windowWidth - 280, 645);

  // create the free-flowing animation on the welcome page / splash screen
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
  // title of canvas page / mode
  textSize(30);
  text('Drawing Canvas', 30, 50);
  // navigation instructions - located at bottom of the canvas
  textSize(15);
  text('pRess "a" to sWitch to imaGe brush canvas   -   pRess "g" to sWitch to 3d generator', 30, 645);
  // 'Funky Mode' for the pencil colour - oscilating between colours
  if (pencilRandom.checked()) {
   var r = hex(floor(map(noise(frameCount / 100), 0, 1, 0, 255)), 2)
   var g = hex(floor(map(noise(frameCount / 100 + 1000), 0, 1, 0, 255)), 2)
   var b = hex(floor(map(noise(frameCount / 100 + 2000), 0, 1, 0, 255)), 2)

   // colour of the pencil is set to the rgb values detailed above
   pencilColour.value('#' + r + g + b)
  }

  // for the clear canvas button - when mouse is pressed the line array is reset
  clearCanvas.mousePressed(function() {
    lines = []
  })

  // array to keep track of lines being drawn on the Canvas
  // when 'mouse is pressed' a line object is added to the array
  // colour, width and shape are the three properties of the line object
  if (mouseIsPressed) {
      var line = new draw_line(pencilColour.value(), pencilWidth.value(), pencilShape.value())
      lines.push(line)
  }

  // 'show' method for all lines in the array
  for (var line of lines) {
      line.show()
  }
}

if (mode == 2) {
  background(backgroundColour.value())
  // title of canvas page / mode
  textSize(30);
  text('Image Brush Canvas', 30, 50);
  // navigation instructions - located at bottom of the canvas
  textSize(15);
  text('double-tap "enter" to return to drawing canvas   -   pRess "g" to sWitch to 3d generator', 30, 645);
  // when the mouse is pressed, use the png / image as a brush tool
  if (mouseIsPressed) {
    drawImageBrush();  
}
}

if (mode == 3) {
  clear();
  background(backgroundColour.value())
  // title of canvas page / mode
  textSize(30);
  text('3d Generator', 30, 50);
  // navigation instructions - located at bottom of the canvas
  textSize(15);
  text('double-tap "enter" to return to drawing canvas   -   pRess "a" to sWitch to imaGe brush canvas', 30, 645);

  // 3D generative design that free-flows (colour can be adjusted by the 'Funky Mode' checkbox)
  stroke(170)

  translate(width / 2, height / 2)

  for (var i = 0; i < 200; i++) {
    push()

    rotate(sin(frameCount + i) * 80)

    var r = map(sin(frameCount), -1, 1, 50, 255)
    var g = map(cos(frameCount / 2), -1, 1, 50, 255)
    var b = map(sin(frameCount / 4), -1, 1, 50, 255)

    stroke(r, g, b)

    rect(0, 0, 600 - i * 3, 00 - i * 3, 200 - i)

    pop()
  }
}
  // on mouse press - save / export canvas
  saveCanvas.mousePressed(saveAsCanvas)
}

// function to save canvas as a .png file titled "my_masterpiece"
function saveAsCanvas() {
  save("my_masterpiece.png");
}

// fucntion for png / image brush
function drawImageBrush(brushSize) {
  translate(mouseX, mouseY, pmouseX, pmouseY);
  image(brush, 0, 0, brushSize);
  stroke(0, 0, 0, 50);
  strokeWeight(2);
  brush(mouseX, mouseY, pmouseX, pmouseY);
  
}
// when 'ENTER' is pressed at the welcome screen, the program begins
// starts at the 'Drawing Canvas' - mode 1
function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }
}

// when 'A' is typed, the image brush canvas appears - mode 2
// when 'G' is typed, the 3D generator canvas appears - mode 3
function keyTyped() {
  if (key === 'a') {
    mode = 2;
  } else if (key === 'g') {
    mode = 3;
  }
}