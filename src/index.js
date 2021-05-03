import { updateTimes } from "./utils/Luxon"
import { runCanvas } from "./utils/Canvas"
import { circle } from "./utils/Circletype"
import 'bootstrap/dist/css/bootstrap.css'
import "./main.css";



// Luxon time function 
setInterval(() => {
    updateTimes()
}, 1000)

// Canvas - WebGL
runCanvas();

// Cricle animation
circle();

// Scroll animation
