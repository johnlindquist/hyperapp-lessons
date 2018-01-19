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

const PersonItem = ({
  action,
  classes,
  tag
}) => person =>
  h(
    tag,
    {
      onclick: e => action(person),
      class: classes
    },
    person.name
  )

const People = ({ people, crew, addToCrew }) => (
  <div>
    <h2>People</h2>
    <div class="flex flex-col">
      {people
        .filter(person => !crew.includes(person))
        .map(
          PersonItem({
            tag: "button",
            action: addToCrew,
            classes:
              "text-lg add hover:text-hyper-blue cursor-pointer"
          })
        )}
    </div>
  </div>
)

const Crew = ({ crew, removeFromCrew }) => (
  <div>
    <h2>Crew</h2>
    <div class="flex flex-col">
      {crew.map(
        PersonItem({
          tag: "button",
          action: removeFromCrew,
          classes:
            "text-lg remove hover:text-red hover:line-through cursor-pointer"
        })
      )}
    </div>
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
