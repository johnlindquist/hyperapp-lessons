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

const People = ({ people, crew, addToCrew }) => (
  <div>
    <h2>People</h2>
    {people
      .filter(person => !crew.includes(person))
      .map(person => (
        <div
          class="text-lg"
          onclick={e => addToCrew(person)}
        >
          {person.name}
        </div>
      ))}
  </div>
)

const Crew = ({ crew }) => (
  <div>
    <h2>Crew</h2>
    {crew.map(member => (
      <div class="text-lg">{member.name}</div>
    ))}
  </div>
)

const view = (state, actions) => (
  <main class="p-4 flex">
    <People
      people={state.people}
      crew={state.crew}
      addToCrew={actions.addToCrew}
    />
    <Crew crew={state.crew} />
  </main>
)

app(
  state,
  actions,
  view,
  document.querySelector("#app")
)
