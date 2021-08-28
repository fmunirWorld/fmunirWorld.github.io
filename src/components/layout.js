import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import CalendlyButton from "./calendlyButton"
import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <div className="wrapper">
      <div className="triangle-pattern"></div>
      <Header />
      <main className="wrapper__inner">{children}</main>
      <CalendlyButton url="https://calendly.com/fmunirdev" />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
