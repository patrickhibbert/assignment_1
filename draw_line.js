//  sketch for drawing lines and shapes on the 'Drawing Canvas View' (mode = 1)

// current and previous x, y for the mouse is defined for the line object to be drawn
class draw_line {
    constructor(pencilColour, pencilWidth, pencilShape) {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = winMouseY

        // colour, width and shape are the three properties of the line object
        // these will be called-out in the main 'drawing_app_sketch' file
        this.pencilColour = pencilColour
        this.pencilWidth = pencilWidth
        this.pencilShape = pencilShape
    }

    show() {
        // method to show the line on the Canvas
        if (this.pencilShape === 'Line') {
            stroke(this.pencilColour)
             strokeWeight(this.pencilWidth)
             line(this.px, this.py, this.x, this.y)
        }
        // method to show the circle on the Canvas
        if (this.pencilShape === 'Circle') {
            fill(this.pencilColour)
            noStroke()
            ellipse(this.x, this.y, this.pencilWidth)
        }
        // method to show the rectangle on the Canvas
        if (this.pencilShape === 'Rectangle') {
            fill(this.pencilColour)
            noStroke()
            rect(this.x, this.y, this.pencilWidth)
        }
        // method to show the triagle on the Canvas
        if (this.pencilShape === 'Triangle') {
            fill(this.pencilColour)
            noStroke()
            
            push()

            translate(this.x, this.y)

            beginShape()
            for (var i = 0; i < 360; i += 120) {
                var rad = this.pencilWidth / 2
                var x = rad * cos(i)
                var y = rad * sin(i)
                vertex(x, y)
            }
            endShape(CLOSE)
            pop()
        }
        // method to show the star on the Canvas
        if (this.pencilShape === 'Star') {
            fill(this.pencilColour)
            noStroke()
            
            push()

            translate(this.x, this.y)

            beginShape()
            for (var i = 0; i < 720; i += 720 / 5) {
                var rad = this.pencilWidth / 2
                var x = rad * cos(i)
                var y = rad * sin(i)
                vertex(x, y)
            }
            endShape(CLOSE)
            pop()
        }
    }
}