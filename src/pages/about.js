import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ImgProfile from "../images/profile.jpg"

import "../styles/about.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div class="bio__avatar">
      <figure>
        <img src={ImgProfile} alt="fmunir's profile" />
        <figcaption>Fahad Munir</figcaption>
      </figure>
    </div>
    <div class="bio__text">
      <p>
        Fahad Munir is a Software Engineer based in Lahore, Pakistan. He has
        more than two years of experience in web and mobile app development. He
        mainly works with JavaScript and Python based technologies but always
        willing to learn any related tech stack.
      </p>
      <p>
        Fahad has been responsible for all aspects of client-driven web and
        mobile projects. These projects have used agile methodologies, and
        languages and frameworks such as React, Gatsby, Angular, NodeJS, Django,
        Flask, Flutter, MongoDB, Firebase and PostgreSQL. He also works in
        DevOps, using Git, Docker, Jenkins, GitHub Actions, etc. and cloud
        (AWS). He has a passion for creating applications that leverage the
        latest technologies in the aforementioned tools, frameworks, languages
        and platforms.
      </p>
      <p>
        He is very bad at saying "no" to a challenge. If you're looking for
        someone people-driven, creative, and ready to learn, please don't
        hesitate to contact him at{" "}
        <a
          class="link-primary"
          href="mailto:fmunirdev@gmail.com"
          title="Email him!"
        >
          fmunirdev@gmail.com
        </a>{" "}
        or his{" "}
        <a
          class="link-primary"
          href="https://www.upwork.com/freelancers/~0160adbb4355ffd646"
          title="Visit Upwork profile!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upwork profile
        </a>
        .
      </p>
    </div>
  </Layout>
)

export default AboutPage
