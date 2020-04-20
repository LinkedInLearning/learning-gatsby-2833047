import React from "react"
import { Link } from "gatsby"

import style from "./pagination.module.css"

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <nav className={style.pagenav}>
      <div className={style.pagenav__item}>
        {previousPagePath && <Link to={previousPagePath}>← Newer Posts</Link>}
      </div>

      <div className={style.pagenav__item}>
        {nextPagePath && <Link to={nextPagePath}>Older Posts →</Link>}
      </div>
    </nav>
  )
}

export default Pagination
