//  sketch for drawing line

class draw_line {
    constructor(pencilColour, pencilWidth) {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = winMouseY

        this.pencilColour = pencilColour
        this.pencilWidth = pencilWidth
    }
    show() {
        stroke(this.pencilColour)
        strokeWeight(this.pencilWidth)
        line(this.px, this.py, this.x, this.y)
    }
}