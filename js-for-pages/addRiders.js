import { encode } from '../utils.js'
import { SERVER_URL } from '../settings.js'
import { makeOptions } from '../fetchUtils.js'

const URL = SERVER_URL + '/rider'
const rider = {}

export function setupAddRiderHandler() {
  document.getElementById('create-rider-btn').onclick = addRider
}

function addRider(evt) {
  evt.preventDefault()
  rider.name = document.getElementById('firstname-input').value

  const options = makeOptions('POST', rider)

  fetch(URL, options)
    .then((res) => res.json())
    .then((data) => {
      console.log('Worked')
    })
    .catch((error) => {
      console.log('error: ', error)
    })
}
