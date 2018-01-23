import { h } from "hyperapp"

export default (state, actions) => ({
  match
}) => {
  const person = state.people.find(
    person =>
      person.id === Number(match.params.id)
  )

  return person ? (
    <div>
      <h1> {person.name}</h1>
      <img
        src={`https://starwars.egghead.training/${
          person.image
        }`}
        alt=""
      />
    </div>
  ) : (
    <span>Loading...</span>
  )
}
