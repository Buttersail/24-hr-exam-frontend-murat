import { encode } from '../utils.js'
import { SERVER_URL } from '../settings.js'
import { makeOptions } from '../fetchUtils.js'

const URL = SERVER_URL + '/team'

export function setupTeamHandlers() {
  showTeams()
}

function showTeams() {
  console.log('Working')
  let riderURL = URL
  let options = makeOptions('GET', false)

  fetch(riderURL, options)
    .then((res) => res.json())
    .then((data) => {
      console.log('Fetch all Riders')
      console.log(data)
      const rows = data.map((team) => `<tr><th>${encode(team.id)}</th><th>${encode(team.name)}</th><th>${encode(team.teamLetter)}</th></tr>`).join('\n')

      document.getElementById('tbl-body').innerHTML = rows
    })
}
