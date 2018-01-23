import { app, h } from "hyperapp"
import {
  location,
  Route,
  Link
} from "@hyperapp/router"

import state from "./state"
import actions from "./actions"

import HomeView from "./views/HomeView"
import PeopleView from "./views/PeopleView"
import DetailView from "./views/DetailView"
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
    <Route
      parent
      path="/people/:id"
      render={DetailView(state, actions)}
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
