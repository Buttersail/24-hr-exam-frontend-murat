import { encode } from '../utils.js'
import { SERVER_URL } from '../settings.js'
import { makeOptions } from '../fetchUtils.js'

const URL = SERVER_URL + '/rider'

export function setupRiderHandlers() {
  showRiders()
}

function showRiders() {
  console.log('Working')
  let riderURL = URL
  let options = makeOptions('GET', false)

  fetch(riderURL, options)
    .then((res) => res.json())
    .then((data) => {
      console.log('Fetch all Riders')
      console.log(data)
      const rows = data.map((rider) => `<tr><th>${encode(rider.id)}</th><th>${encode(rider.name)}</th></tr>`).join('\n')

      document.getElementById('tbl-body').innerHTML = rows
    })
}
