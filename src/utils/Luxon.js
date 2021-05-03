import { DateTime } from 'luxon';

 const locations = document.querySelectorAll(".loco div")

 export const updateTimes = function() {
    locations.forEach(el => {
        const output = el.querySelector(".time");
        const timezone = el.getAttribute("data-timezone")
        const now = DateTime.now().setZone(timezone)
        output.innerHTML = now.toFormat("HH:mm:ss");
    })
}


