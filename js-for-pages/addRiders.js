import { encode } from '../utils.js'
import { SERVER_URL } from '../settings.js'
import { makeOptions } from '../fetchUtils.js'

const URL = SERVER_URL + '/rider'
const rider = {}

export function setupAddRiderHandler() {
  document.getElementById('create-rider-btn').onclick = addRider
  document.getElementById('delete-rider-btn').onclick = deleteRider
}

function addRider(evt) {
  evt.preventDefault()
  rider.name = document.getElementById('firstname-input').value
  rider.age = document.getElementById('age-input').value
  rider.country = document.getElementById('country-input').value
  //rider.team = document.getElementById('team-input').value

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

function deleteRider(evt) {
  evt.preventDefault()
  rider.id = document.getElementById('id-input').value

  const options = makeOptions('DELETE', rider)

  fetch(URL + '/' + rider.id, options)
    .then((res) => res.json())
    .then((data) => {
      console.log('Delete pressed')
    })
    .catch((error) => {
      console.log('error: ', error)
    })
}
