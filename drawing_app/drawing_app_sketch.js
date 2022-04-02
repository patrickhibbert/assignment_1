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

function setup() {
  createCanvas(400, 450)

  var options = createDiv().style('display: flex')

  var optionsTitles = createDiv().parent(options)
  createP('Pencil Colour').parent(optionsTitles)
  createP('Background Colour').parent(optionsTitles)
  createP('Pencil Width').parent(optionsTitles)

  var optionsValues = createDiv().parent(options).style('margin: 10px 40px; width: 50px')
  pencilColour = createColorPicker('#ffffff').parent(optionsValues)
  backgroundColour = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 10px')
  pencilWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px')
  pencilWidth.option('1')
  pencilWidth.option('2')
  pencilWidth.option('3')
  pencilWidth.option('4')
  pencilWidth.selected('2')

  clearCanvas = createButton('Clear').parent(options).style('width: 100px')
}

function draw() {
  background(backgroundColour.value())

  clearCanvas.mousePressed(function() {
    lines = []
  })

  if (mouseIsPressed) {
      var line = new draw_line(pencilColour.value(), pencilWidth.value())
      lines.push(line)
  }

  for (var line of lines) {
      line.show()
  }
}