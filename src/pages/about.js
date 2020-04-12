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
        Fahad Munir is a web designer / developer based in Lahore, Pakistan. He
        is currently studying Computer Science at University of Gujrat.
      </p>
      <p>He is very bad at saying "no" to a challenge.</p>
      <p>
        If you're looking for someone people-driven, creative, and ready to
        learn, please don't hesitate to contact him at&nbsp;
        <a
          class="link-primary"
          href="mailto:fmunirdev@gmail.com"
          title="Email him!"
        >
          fmunir923@gmail.com
        </a>
      </p>
    </div>
  </Layout>
)

export default AboutPage
