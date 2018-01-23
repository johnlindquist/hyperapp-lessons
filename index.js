import { app, h } from "hyperapp"
import {
  location,
  Route,
  Link
} from "@hyperapp/router"

const URL = `https://starwars.egghead.training/people`

const state = {
  location: location.state,
  people: [],
  crew: []
}
const actions = {
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

const PersonItem = ({
  action,
  classes,
  tag
}) => person =>
  h(
    tag,
    {
      onclick: e => action(person),
      class: classes + " truncate w-48"
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

const HomeView = (state, actions) => () => (
  <div class="p-4 flex">
    <People
      people={state.people}
      crew={state.crew}
      addToCrew={actions.addToCrew}
    />
    <Crew
      crew={state.crew}
      removeFromCrew={actions.removeFromCrew}
    />
  </div>
)

const PeopleView = (state, actions) => () => (
  <div class="p-4 flex">
    <People
      people={state.people}
      crew={state.crew}
      addToCrew={actions.addToCrew}
    />
  </div>
)

const view = (state, actions) => (
  <main oncreate={actions.loadPeople}>
    <nav class="p-2 flex justify-around">
      <Link to="/">Home</Link>
      <Link to="/people">People</Link>
    </nav>
    <Route
      path="/"
      render={HomeView(state, actions)}
    />
    <Route
      path="/people"
      render={PeopleView(state, actions)}
    />
  </main>
)

const main = app(
  state,
  actions,
  view,
  document.querySelector("#app")
)

location.subscribe(main.location)
