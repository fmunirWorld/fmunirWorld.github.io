import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaLinkedinIn, FaGithub, FaTwitter, FaArrowRight } from "react-icons/fa"
import SourcererIc from "../images/svg/sourcerer.svg"
import "../styles/index.scss"

const ListLink = props => (
  <li>
    <a
      class="item"
      target="_blank"
      rel="noopener noreferrer"
      href={props.to}
      title={props.title}
    >
      {props.children}
    </a>
  </li>
)

class IndexPage extends React.Component {
  componentDidMount() {
    const Typewrite = require("../scripts/typewrite").default
    let element = document.getElementById("typewrite")
    const toRotate = element.getAttribute("data-type")
    const period = element.getAttribute("data-period")
    if (toRotate) {
      new Typewrite(element, JSON.parse(toRotate), period)
    }
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div class="home__title">
          <h1>
            f
            <span
              id="typewrite"
              class="typewrite-text"
              data-period="2000"
              data-type='[ "ahad " ]'
            ></span>
            munir
          </h1>
        </div>
        <div class="home__subtitle">
          <div class="home__subtitle__container">
            <p class="text">Hey. I'm a</p>
            <ul class="list">
              <li class="item">student !</li>
              <li class="item">web designer !</li>
              <li class="item">web developer !</li>
              <li class="item">devops engineer !</li>
            </ul>
          </div>
        </div>

        <hr />

        <ul class="social-links-list">
          <ListLink
            to="https://linkedin.com/in/fmunirdev/"
            title="fmunir's resume on LinkedIn"
          >
            <FaLinkedinIn />
          </ListLink>

          <ListLink
            to="https://github.com/fmunirdev/"
            title="@fmunirWorld on Github"
          >
            <FaGithub />
          </ListLink>

          <ListLink
            to="https://sourcerer.io/fmunirworld/"
            title="fmunir's Sourcerer profile"
          >
            <img src={SourcererIc} alt="" />
          </ListLink>

          <ListLink
            to="https://twitter.com/fmunirdev/"
            title="@fmunirWorld on twitter"
          >
            <FaTwitter />
          </ListLink>

          <li>
            <Link to="/about/" class="item">
              <FaArrowRight />
            </Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default IndexPage
