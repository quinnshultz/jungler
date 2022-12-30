/*
 * Entry point for the companion app
 */
import { outbox } from "file-transfer"
import { loadSummoners } from "/project/companion/remoteAccess"
import { settingsStorage } from "settings"

console.log("Companion code started")

// Get the value of the setting
let summonername = JSON.parse(settingsStorage.getItem("summonername")).name
loadSummoners(summonername)

function sendFile() {
  console.log("Sending file...");
  let data = new Uint8Array(26);
  for (let counter = 0; counter < data.length; counter++) {
    data[counter] = "a".charCodeAt(0) + counter;
  }
  outbox.enqueue("alphabits.txt", data);
}

setTimeout(sendFile, 2000)
