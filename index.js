import "./styles.css"
import { h, app } from "hyperapp"
import {
  location,
  Route,
  Link
} from "@hyperapp/router"

const state = {
  location: location.state,
  people: [],
  crew: []
}
const actions = {
  location: location.actions,
  loadPeople: () => async (state, actions) => {
    const res = await fetch(
      `https://starwars.egghead.training/people`
    )
    const people = await res.json()
    actions.setPeople(people.slice(0, 10))
  },
  setPeople: people => (state, actions) => ({
    people
  }),
  addPerson: person => state => ({
    crew: [...state.crew, person]
  }),
  removePerson: person => state => ({
    crew: state.crew.filter(p => p !== person)
  })
}

const People = ({ people, crew, addPerson }) =>
  people
    .filter(person => !crew.includes(person))
    .map(person => (
      <div
        class={`cursor-pointer 
      hover:text-hyper-blue
      add
  `}
        onclick={e => addPerson(person)}
      >
        {person.name}
      </div>
    ))

const Crew = ({ crew, removePerson }) =>
  crew.map(member => (
    <div
      class={`remove hover:text-red hover:line-through cursor-pointer`}
      onclick={e => removePerson(member)}
    >
      {member.name}
    </div>
  ))

const HomeRoute = (state, actions) => ({
  location,
  match
}) => (
  <div class="flex w-full justify-around">
    <div class="w-1/2">
      <h2>People</h2>
      <People
        crew={state.crew}
        people={state.people}
        addPerson={actions.addPerson}
      />
    </div>
    <div class="w-1/2">
      <h2>Crew</h2>
      <Crew
        crew={state.crew}
        removePerson={actions.removePerson}
      />
    </div>
  </div>
)

const PeopleRoute = (state, actions) => ({
  location,
  match
}) => (
  <div>
    <h2>People</h2>
    <div class="flex flex-col">
      {state.people.map(member => (
        <Link
          class={`info no-underline`}
          to={`/people/${member.id}`}
        >
          {member.name}
        </Link>
      ))}
    </div>
  </div>
)
const CrewRoute = (state, actions) => ({
  location,
  match
}) => (
  <div>
    <h2>Crew</h2>
    <div class="flex flex-col">
      {state.crew.map(person => (
        <Link
          class={`info no-underline`}
          to={`/people/${person.id}`}
        >
          {person.name}
        </Link>
      ))}
    </div>
  </div>
)

const PersonRoute = (state, actions) => ({
  location,
  match
}) => {
  const person = state.people.find(
    person => person.id == match.params.id
  )

  return (
    <div>
      <h1>{person.name}</h1>
      <img
        src={`https://starwars.egghead.training/${
          person.image
        }`}
        alt=""
      />
    </div>
  )
}

const view = (state, actions) => (
  <main
    oncreate={actions.loadPeople}
    class={`p-4`}
  >
    <nav class="flex w-full justify-between">
      <Link to="/">Home</Link>
      <Link to="/people">People</Link>
      <Link to="/crew">Crew</Link>
    </nav>
    <div class="p-2">
      <Route
        path="/"
        render={HomeRoute(state, actions)}
      />
      <Route
        path="/people"
        render={PeopleRoute(state, actions)}
      />
      <Route
        parent
        path="/people/:id"
        render={PersonRoute(state, actions)}
      />
      <Route
        path="/crew"
        render={CrewRoute(state, actions)}
      />
    </div>
  </main>
)

const main = app(
  state,
  actions,
  view,
  document.querySelector("#app")
)

location.subscribe(main.location)
