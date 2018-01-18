import "./styles.css"
import { h, app } from "hyperapp"

const state = {
  count: 0
}

const actions = {
  inc: event => state => ({
    count: state.count + 1
  })
}

const view = (state, actions) => (
  <main class="p-4">
    <button
      class="border-4 border-hyper-blue px-4 py-2 rounded"
      onclick={actions.inc}
    >
      Count: {state.count}
    </button>
  </main>
)

app(
  state,
  actions,
  view,
  document.querySelector("#app")
)
