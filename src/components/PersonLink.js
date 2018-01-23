import { h } from "hyperapp"
import { Link } from "@hyperapp/router"

export default person => (
  <Link
    class="py-2 no-underline hover:text-hyper-blue pointer-cursor"
    to={`/people/${person.id}`}
  >
    {person.name}
  </Link>
)
