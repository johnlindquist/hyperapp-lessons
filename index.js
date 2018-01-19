import { app, h } from "hyperapp"

const state = {
  message: "Hyperapp says hi!"
}
const actions = {
  updateMessage: event => state => ({
    message: "You clicked me!"
  })
}
const view = (state, actions) => (
  <main>
    <h1 onclick={actions.updateMessage}>
      {state.message}
    </h1>
  </main>
)

app(
  state,
  actions,
  view,
  document.querySelector("#app")
)
