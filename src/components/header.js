import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="site-header" role="banner">
    <div>
      <Link to="/">
        <img
          src="/logo.svg"
          width="366"
          height="374"
          alt=""
        />
        <div>{siteTitle}</div>
        <div>{siteDescription}</div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
