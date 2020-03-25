import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <div class="wrapper">
      <div class="triangle-pattern"></div>
      <Header />
      <main class="wrapper__inner">{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
