import "./styles.css"
import { h, app } from "hyperapp"
import { main, button } from "@hyperapp/html"
import { Route } from "@hyperapp/router"

const state = { message: "Awesome" }
const actions = {
  updateMessage: () => state => ({
    message: state.message + "!!!"
  })
}

const Home = (state, actions) => () => (
  <button
    class="btn btn-blue"
    onclick={actions.updateMessage}
  >
    {state.message}
  </button>
)

const view = (state, actions) => (
  <main>
    <h1>Hello world</h1>
    <FeatherIcon
      name="activity"
      class="text-green"
    />
    <Route
      path={"/"}
      render={Home(state, actions)}
    />
  </main>
)

app(
  state,
  actions,
  view,
  document.querySelector("#app")
)

console.log(feather)
