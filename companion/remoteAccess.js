const API_URL = "https://na1.api.riotgames.com/lol/summoner/v4"
const API_KEY = ""

async function loadSummoners(summonername) {
  const playerdataurl = API_URL + '/summoners/by-name/' + summonername
  const response = await fetch(playerdataurl, {
    method: "GET",
    headers: {
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Riot-Token": API_KEY
    }
  });
  const summoners = await response.json();  // Parse the returned object
  console.log(summoners)
}

export { loadSummoners }