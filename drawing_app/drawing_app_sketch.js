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

function setup() {
  let c = createCanvas(windowWidth, windowHeight - 250)
  angleMode(DEGREES)

  var options = createDiv().style('display: flex')

  var optionsTitles = createDiv().parent(options)
  createP('Background Colour').parent(optionsTitles)
  createP('Pencil Colour').parent(optionsTitles)
  createP('Pencil Width').parent(optionsTitles)
  createP('Pencil Shape').parent(optionsTitles)

  var optionsValues = createDiv().parent(options).style('margin: 10px 40px; width: 80px')
  backgroundColour = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 10px')
  pencilColour = createColorPicker('#ffffff').parent(optionsValues)
  pencilRandom = createCheckbox("", false).parent(optionsValues).style('display: inline')
  pencilWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px; width: 50px; height: 25px')
  pencilWidth.option('2')
  pencilWidth.option('4')
  pencilWidth.option('8')
  pencilWidth.option('16')
  pencilWidth.option('32')

  pencilShape = createSelect(false).parent(optionsValues).style('margin-top: 10px; width: 50px; height: 25px')
  pencilShape.option('Line')
  pencilShape.option('Circle')
  pencilShape.option('Rectangle')
  pencilShape.option('Triangle')
  pencilShape.option('Star')

  clearCanvas = createButton('Clear').parent(options).style('margin: 10px; width: 100px; height: 100px')

  saveCanvas = createButton("Save");
}

function draw() {
  background(backgroundColour.value())

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

  saveCanvas.mousePressed(saveAsCanvas)
}

function saveAsCanvas() {
  save("my_masterpiece.png");
}

