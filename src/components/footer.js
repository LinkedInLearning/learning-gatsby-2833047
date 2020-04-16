import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()} {siteTitle}
  </footer>
)

export default Footer
