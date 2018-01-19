import { app, h } from "hyperapp"
import people from "./people.json"

const state = {
  people: people.slice(0, 10),
  crew: []
}
const actions = {
  addToCrew: person => state => ({
    crew: [...state.crew, person]
  })
}
const view = (state, actions) => (
  <main class="p-4 flex">
    <div>
      {state.people.map(person => (
        <div
          class="text-lg"
          onclick={e => actions.addToCrew(person)}
        >
          {person.name}
        </div>
      ))}
    </div>
    <div>
      {state.crew.map(member => (
        <div class="text-lg">{member.name}</div>
      ))}
    </div>
  </main>
)

app(
  state,
  actions,
  view,
  document.querySelector("#app")
)
