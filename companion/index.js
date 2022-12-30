import { outbox } from "file-transfer"
import { loadSummoner } from "/project/companion/remoteAccess"
import { settingsStorage } from "settings"

/*
 * Entry point for the companion app
 */
console.log("Companion code started")

// Get the value of the setting
let summonername = JSON.parse(settingsStorage.getItem("summonername")).name
let response = JSON.stringify(loadSummoner(summonername))

function sendFile() {
  console.log("Sending file...");
  let data = new Uint8Array(response.length)
  for (let counter = 0; counter < data.length; counter++) {
    data[counter] = response.charCodeAt(counter);
  }
  outbox.enqueue("summoner.txt", data);
}

setTimeout(sendFile, 2000)
