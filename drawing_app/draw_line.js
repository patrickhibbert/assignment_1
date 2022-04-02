//  sketch for drawing line

class draw_line {
    constructor(pencilColour, pencilWidth, pencilShape) {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = winMouseY

        this.pencilColour = pencilColour
        this.pencilWidth = pencilWidth
        this.pencilShape = pencilShape
    }
    show() {
        if (this.pencilShape === 'Line') {
            stroke(this.pencilColour)
             strokeWeight(this.pencilWidth)
             line(this.px, this.py, this.x, this.y)
        }
        if (this.pencilShape === 'Circle') {
            fill(this.pencilColour)
            noStroke()
            ellipse(this.x, this.y, this.pencilWidth)
        }
        if (this.pencilShape === 'Rectangle') {
            fill(this.pencilColour)
            noStroke()
            rect(this.x, this.y, this.pencilWidth)
        }
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