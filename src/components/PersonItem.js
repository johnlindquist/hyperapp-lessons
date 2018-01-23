import { h } from "hyperapp"

export default ({
  action,
  classes,
  tag
}) => person =>
  h(
    tag,
    {
      onclick: e => action(person),
      class: classes + " truncate w-48"
    },
    person.name
  )
