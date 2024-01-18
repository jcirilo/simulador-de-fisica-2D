const CANVAS_WIDTH = document.body.clientWidth
const CANVAS_HEIGHT = document.body.clientHeight
const SPAWN_X = 0
const SPAWN_Y = 0
const RECT_WIDTH = 50
const RECT_HEIGHT = 50
const MAX_SPEED_X = 3
const MAX_SPEED_Y = 3
const INITIAL_FORCE_X = 1
const INITIAL_FORCE_Y = 1
const INITIAL_ACCELERATION_X = 0.01
const INITIAL_ACCELERATION_Y = 0.01
const INITIAL_SPEED_X = 0
const INITIAL_SPEED_Y = 0
const DEFAULT_BODY_MASS = 1
const FRAMERATE = 30

const newRect = () => {
    return {
        width: RECT_WIDTH,
        height: RECT_HEIGHT,
        physic: newBody(),
    }
}

const newBody = () => {
    return {
        posX: SPAWN_X,
        posY: SPAWN_Y,
        mass: DEFAULT_BODY_MASS,
        acceleration_x: INITIAL_ACCELERATION_X,
        acceleration_y: INITIAL_ACCELERATION_Y,
        speed_x: INITIAL_SPEED_X,
        speed_y: INITIAL_SPEED_Y,
    }
}

const newCircle = () => {
    return {
        
    }
}

function draw () {
    background(0, 80, 100)
}

function setup () {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.frameRate = FRAMERATE
}

window.setup = setup
window.draw = draw