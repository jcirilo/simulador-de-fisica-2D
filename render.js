let engine = null
let runner = null
let world = null
let ground = null

function setup () {
    canvas = createCanvas(windowWidth, windowHeight)
    canvas.frameRate = 60

    engine = Engine.create()
    runner = Runner.create()
    world = Composite.create()
    engine.world = world

    ground = Bodies.rectangle(windowWidth/2, windowHeight, windowWidth, 100,{ isStatic: true })

    Composite.add(world, ground)
    Runner.run(engine)
}

let aux = null
let i = 0
function draw () {
    background(200)
    rectMode(CENTER)

    for (i = 1; i < world.bodies.length; i++) {
        aux = world.bodies[i]
        rect(aux.position.x, aux.position.y, 20, 20)
    }
}

function mouseDragged() {
    Composite.add(world, Bodies.rectangle(mouseX, mouseY, 20, 20));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}