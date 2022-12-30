/*
 * Entry point for the watch app
 */
import * as document from "document"
let timers = document.getElementsByClassName("timers")

const SUMMONER_SPELL_TIME = 50000; // 5 minutes

// Get click event for each button
timers.forEach((timer) => {
  timer.addEventListener("click", (evt) => {
    startTimer(timer)
  });
});

async function startTimer(timer) {
  // Change the Flash background to Ignite
  timer.href="Ignite.jpg"  
  
  console.log(timer.id + ' started')
  setTimeout(function() {
    console.log(timer.id + ' finished')
    stopTimer(timer)
  }, SUMMONER_SPELL_TIME); // Wait
  
}

function stopTimer(timer) {
  // Change the Ignite background to Flash
  timer.href="Flash.jpg"
}
