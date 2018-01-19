import { app, h } from "hyperapp"
import people from "./people.json"

const state = {
  people: people.slice(0, 10),
  crew: []
}
const actions = {
  addToCrew: person => state => ({
    crew: [...state.crew, person]
  }),
  removeFromCrew: member => state => ({
    crew: state.crew.filter(m => m !== member)
  })
}

const PersonItem = action => person => (
  <div
    class="text-lg add hover:text-hyper-blue cursor-pointer"
    onclick={e => action(person)}
  >
    {person.name}
  </div>
)

const People = ({ people, crew, addToCrew }) => (
  <div>
    <h2>People</h2>
    {people
      .filter(person => !crew.includes(person))
      .map(PersonItem(addToCrew))}
  </div>
)

const Crew = ({ crew, removeFromCrew }) => (
  <div>
    <h2>Crew</h2>
    {crew.map(member => (
      <div
        onclick={e => removeFromCrew(member)}
        class="text-lg remove hover:text-red hover:line-through cursor-pointer"
      >
        {member.name}
      </div>
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
    <Crew
      crew={state.crew}
      removeFromCrew={actions.removeFromCrew}
    />
  </main>
)

app(
  state,
  actions,
  view,
  document.querySelector("#app")
)
