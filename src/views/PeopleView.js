import { h } from "hyperapp"

import PersonLink from "../components/PersonLink"

export default (people, actions) => () => (
  <div class="p-4 flex flex-col text-xl">
    {people.map(PersonLink)}
  </div>
)
