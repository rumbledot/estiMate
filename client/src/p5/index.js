

/*** GUI Part ***/
var tool = 0 
var tools = document.querySelectorAll(".tool")
var drawColor =[50, 50, 60]
var radius = 4

for (var i = 0; i < tools.length; i++) {
    tools[i].onclick = function (id) {
        return function () {
            setTool(id)
        }
    }(i)
}

function setTool(id) {
    tool = id
    for (var i = 0; i < tools.length; i++) {
        tools[i].classList.remove("tool-selected")
        if (id == i)
        tools[i].classList.add("tool-selected")
    }
}

class Wall {
    constructor(sX, sY, eX, eY) {
        this.sX = sX
        this.sY = sY
        this.eX = eX
        this.eY = eY
    }

    display() {

    }
}

/*** Drawing part ***/
var lastPoint = null
var graphic = null

var squareOrigin = null
var lineOrigin = null
var circleOrigin = null

var grid = 50
var radius = 10

function setup() {
    createCanvas(document.body.clientWidth, document.body.clientHeight - 50).parent("#canvas")
    ellipseMode(CENTER)
    graphic = createGraphics(document.body.clientWidth, document.body.clientHeight - 50)
    graphic.background(255)
}

function draw() {
    background(255)
    image(graphic, 0, 0)
    
    tool0Preview()

    if (mouseIsPressed) {
        drawOnGraphic()
    } else {
        lastPoint = null
        onMouseQuit()
    }
}

function tool0Preview()
{
    noFill()
    stroke(90)
    strokeWeight(1)

    let destX = (Math.floor(mouseX / grid)) * grid
    let destY = (Math.floor(mouseY / grid)) * grid

    ellipse(destX, destY, radius, radius)
}

function drawOnGraphic() {
    if (lastPoint == null)
        lastPoint = [mouseX, mouseY]
    
    if (tool == 1) {
        if (squareOrigin == null) {
        squareOrigin = [mouseX, mouseY]
        } else {
        fill([drawColor[0], drawColor[1], drawColor[2], 122])
        noStroke()
        rect(squareOrigin[0], squareOrigin[1], mouseX - squareOrigin[0], mouseY - squareOrigin[1])
        }
    }

    if (tool == 0) {
        if (lineOrigin == null) {
        lineOrigin = [(Math.floor(mouseX / grid)) * grid, (Math.floor(mouseY / grid)) * grid]
        } else {
        strokeWeight(5)
        stroke(drawColor)
        let destX = (Math.floor(mouseX / grid)) * grid
        let destY = (Math.floor(mouseY / grid)) * grid
        line(lineOrigin[0], lineOrigin[1], destX, destY)
        }
    }

    let destX = (Math.floor(mouseX / grid)) * grid
    let destY = (Math.floor(mouseY / grid)) * grid
    
    lastPoint = [destX, destY]
}

function onMouseQuit() {
    if (squareOrigin != null) {
        graphic.fill(drawColor)
        graphic.noStroke()
        graphic.rect(squareOrigin[0], squareOrigin[1], mouseX - squareOrigin[0], mouseY - squareOrigin[1])
        squareOrigin = null
    }
    if (lineOrigin != null) {
        graphic.strokeWeight(5)
        graphic.stroke(drawColor)
        graphic.line(lineOrigin[0], lineOrigin[1], (Math.floor(mouseX / grid)) * grid, (Math.floor(mouseY / grid)) * grid)
        lineOrigin = null
    }
}