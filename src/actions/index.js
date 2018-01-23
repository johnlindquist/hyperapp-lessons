import { location } from "@hyperapp/router"
const URL = `https://starwars.egghead.training/people`

export default {
  location: location.actions,
  loadPeople: () => async (state, actions) => {
    const response = await fetch(URL)
    const people = await response.json()

    actions.setPeople(people.slice(0, 10))
  },
  setPeople: people => state => ({ people }),
  addToCrew: person => state => ({
    crew: [...state.crew, person]
  }),
  removeFromCrew: member => state => ({
    crew: state.crew.filter(m => m !== member)
  })
}
