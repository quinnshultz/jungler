import * as document from "document"
import { inbox } from "file-transfer";
import * as fs from "fs";

/*
 * Entry point for the watch app
 */
let timers = document.getElementsByClassName("timers")

const SUMMONER_SPELL_TIME = 300000; // 5 minutes

let demoText = document.getElementById("demotext");
demoText.text = "Waiting...";

// Event occurs when new file(s) are received
inbox.onnewfile = () => {
  console.log("New file!");
  let fileName;
  do {
    // If there is a file, move it from staging into the application folder
    fileName = inbox.nextFile();
    if (fileName) {
      console.log(`Received File: <${fileName}>`);
      let data = fs.readFileSync(fileName, "ascii");
      demoText.text = `Received: ${data}`;
    }
  } while (fileName);
};

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
