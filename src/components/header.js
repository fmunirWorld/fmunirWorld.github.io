import { Link } from "gatsby"
import React from "react"

import "./header.scss"

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="active">
      {props.children}
    </Link>
  </li>
)

const Header = () => (
  <nav class="navigation-wrapper">
    <ul class="site-nav">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/now/">Now</ListLink>
      <ListLink to="/resume/">Resume</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
    </ul>
  </nav>
)

export default Header
