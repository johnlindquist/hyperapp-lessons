import { h } from "hyperapp"

import People from "../components/People"

export default (state, actions) => () => (
  <div class="p-4 flex">
    <People
      people={state.people}
      crew={state.crew}
      addToCrew={actions.addToCrew}
    />
  </div>
)
