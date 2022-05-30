import { renderTemplate, setActive, showPage } from './utils.js'
import { setupRiderHandlers } from './js-for-pages/showRiders.js'
import { setupTeamHandlers } from './js-for-pages/showTeams.js'
import { setupAddRiderHandler } from './js-for-pages/addRiders.js'
import { setupAddTeamHandler } from './js-for-pages/addTeam.js'

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id
  renderTemplate(id) //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case 'page-about': {
      break
    }
    case 'page-riders': {
      setupRiderHandlers()
      break
    }
    case 'page-teams': {
      setupTeamHandlers()
      break
    }
    case 'page-add-rider': {
      setupAddRiderHandler()
      break
    }
    case 'page-add-team': {
      setupAddTeamHandler()
      break
    }
  }
}

document.getElementById('menu').onclick = renderMenuItems
showPage('page-about') //Set the default page to render
