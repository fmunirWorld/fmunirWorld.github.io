import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import CarouselItem from "../components/carouselItem"

class ResumePage extends React.Component {
  componentDidMount() {
    const CarouselSlider = require("../scripts/carousel").default
    new CarouselSlider("resume")
  }
  render() {
    return (
      <Layout>
        <SEO title="Resume" />
        <Carousel
          id="resume"
          title="Resume"
          subtitle="Find out what I've accomplished over the years"
          lastUpdated="May 24, 2021"
        >
          <CarouselItem title="Technologies">
            <div class="carousel__item__content__list__wrapper">
              <div class="list">
                <h3>DAY-TO-DAY COMFORT</h3>
                <ul>
                  <li>JavaScript / TypeScript</li>
                  <li>Angular / Ionic</li>
                  <li>React / Redux / Gatsby</li>
                  <li>NodeJS / ExpressJS</li>
                  <li>GraphQL / Apollo</li>
                  <li>Python ( Django / Flask )</li>
                  <li>Version Control ( Git )</li>
                  <li>Virtualization ( Docker )</li>
                  <li>CI / CD Workflows</li>
                  <li>Cloud ( AWS )</li>
                </ul>
              </div>
              <div class="list">
                <h3>HAVE EXPERIENCE WITH</h3>
                <ul>
                  <li>PHP / Laravel / WP</li>
                  <li>Redis / Celery</li>
                  <li>Flutter / Firebase</li>
                  <li>Android / Ionic</li>
                  <li>MS Office / G-Suite</li>
                  <li>Google Apps Script</li>
                </ul>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem title="Work Experience">
            <h2>SOFTWARE ENGINEER</h2>
            <p>InvoZone / Lahore, March 2021 &ndash; Current</p>

            <hr />
            <h2>FULL STACK DEVELOPER</h2>
            <p>Accelerone / Remote, May 2020 &ndash; March 2021</p>

            <hr />

            <h2>WEB &amp; MOBILE APP DEVELOPER</h2>
            <p>Freelance / Remote, January 2018 &ndash; May 2020</p>
          </CarouselItem>
          <CarouselItem title="Education">
            <h2>Master of Science in Computer Science</h2>
            <p>Lahore Garrison University, PK, October 2020 &ndash; Current</p>

            <hr />

            <h2>Bachelor of Science in Computer Science</h2>
            <p>University of Gujrat, PK, October 2016 &ndash; September 2020</p>
            <a
              class="link-primary"
              href="https://www.linkedin.com/in/fmunirdev/"
              title="fmunir's resume on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my LinkedIn profile <FaExternalLinkAlt />
            </a>
          </CarouselItem>
          <CarouselItem title="DIG A LITTLE DEEPER">
            <p>
              Feel free to take a deeper look at what I've accomplished
              <br />
              over the years and what I'm able to do for you.
            </p>
            <a
              class="link-primary"
              href="https://drive.google.com/open?id=1TcqwEnQSHhEGN8Ma1lpS-Wbz712l9_mv"
              title="fmunir's resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume <FaExternalLinkAlt />
            </a>
          </CarouselItem>
        </Carousel>
      </Layout>
    )
  }
}

export default ResumePage
