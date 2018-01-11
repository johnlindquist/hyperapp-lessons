import "./styles.css"
import { h, app } from "hyperapp"
import people from "./people.json"

const state = {
  people: people.slice(0, 10),
  selectedPerson: 2,
  selectedPeople: []
}
const actions = {
  selectPerson: person => state => ({
    selectedPeople: state.selectedPeople.includes(
      person
    )
      ? state.selectedPeople
      : [...state.selectedPeople, person]
  })
}

const Person = ({
  person,
  selectPerson,
  selected
}) => (
  <div
    onclick={e => selectPerson(person)}
    class={`person`}
  >
    <img
      src={`https://starwars.egghead.training/${
        person.image
      }`}
    />
    <h2>{person.name}</h2>
  </div>
)

const SelectedPerson = ({ person }) => (
  <div className={`selectedPerson`}>
    <h2>x</h2>
    <img
      src={`https://starwars.egghead.training/${
        person.image
      }`}
    />
  </div>
)

const view = (state, actions) => (
  <main class={`main`}>
    <div class={`selectedPeople`}>
      {state.selectedPeople.map(person => (
        <SelectedPerson person={person} />
      ))}
    </div>
    <div className={``}>
      {state.people.map(person => (
        <Person
          person={person}
          selected={
            person.id === state.selectedPerson
          }
          selectPerson={actions.selectPerson}
        />
      ))}
    </div>
  </main>
)

app(state, actions, view, document.body)
