import React from "react"
import { Link } from "gatsby"

import style from "./mainnav.module.css"

const MainNav = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
