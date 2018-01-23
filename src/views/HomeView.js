import { h } from "hyperapp"

import People from "../components/People"
import Crew from "../components/Crew"

export default (state, actions) => () => (
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
