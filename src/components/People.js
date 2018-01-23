import { h } from "hyperapp"
import PersonItem from "./PersonItem"

export default ({ people, crew, addToCrew }) => (
  <div>
    <h2>People</h2>
    <div class="flex flex-col">
      {people
        .filter(person => !crew.includes(person))
        .map(
          PersonItem({
            tag: "button",
            action: addToCrew,
            classes:
              "text-lg add hover:text-hyper-blue cursor-pointer"
          })
        )}
    </div>
  </div>
)
