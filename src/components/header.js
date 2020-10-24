/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Header() {
  return (
    <header>
      <div sx={{ display: "flex" }}>
        <img src="burak.png" alt="Burak Cebel" width="48" height="48" />
        <div sx={{ ml: 3 }}>
          <strong>Burak Cebel</strong>
          <p sx={{ my: 0, color: "primary", fontFamily: "heading" }}>
            Digital Product Designer
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Dribble</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
