import "./styles.css"
import { h, app } from "hyperapp"
import { main, button } from "@hyperapp/html"
import { Route } from "@hyperapp/router"
import * as R from "ramda"
import immer from "immer"
const state = { message: "Awesome" }
const actions = {}

const view = (state, actions) => (
  <main>
    <h2 class="">Hello world</h2>
    <a href="">Is this thing on?</a>
    <div>
      <p>
        Hello everyone, how are we all doing
        today?
      </p>
    </div>
    <button>Click me</button>
  </main>
)

app(
  state,
  actions,
  view,
  document.querySelector("#app")
)
