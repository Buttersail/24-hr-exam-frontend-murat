import { encode } from '../utils.js'
import { SERVER_URL } from '../settings.js'
import { makeOptions } from '../fetchUtils.js'

const URL = SERVER_URL + '/team'
const team = {}

export function setupAddTeamHandler() {
  document.getElementById('create-team-btn').onclick = addTeam
}

function addTeam(evt) {
  evt.preventDefault()
  team.name = document.getElementById('teamname-input').value
  team.teamLetter = document.getElementById('teamletter-input').value

  const options = makeOptions('POST', team)

  fetch(URL, options)
    .then((res) => res.json())
    .then((data) => {
      console.log('Worked')
    })
    .catch((error) => {
      console.log('error: ', error)
    })
}
