import { h } from "hyperapp"
import PersonItem from "./PersonItem"

export default ({ crew, removeFromCrew }) => (
  <div>
    <h2>Crew</h2>
    <div class="flex flex-col">
      {crew.map(
        PersonItem({
          tag: "button",
          action: removeFromCrew,
          classes:
            "text-lg remove hover:text-red hover:line-through cursor-pointer"
        })
      )}
    </div>
  </div>
)
