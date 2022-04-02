//  sketch for drawing line

class draw_line {
    constructor() {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = winMouseY
    }
    show() {
        stroke(255)
        draw_line(this.px, this.py, this.x, this.y)
    }
}