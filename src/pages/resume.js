import React from "react"
import { Link } from "gatsby"
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
          lastUpdated="March 22, 2020"
        >
          <CarouselItem title="Technologies">
            <div class="carousel__item__content__list__wrapper">
              <div class="list">
                <h3>DAY-TO-DAY COMFORT</h3>
                <ul>
                  <li>HTML / CSS ( SASS )</li>
                  <li>JavaScript / AJAX / jQuery</li>
                  <li>Angular / Ionic / PWAs</li>
                  <li>Python ( Django / Flask )</li>
                  <li>Microservices ( Polyglot )</li>
                  <li>Databases ( Postgres / MySQL )</li>
                  <li>Version Control ( Git )</li>
                  <li>Virtualization ( Docker )</li>
                  <li>Workflows ( CI / CD Pipelines )</li>
                  <li>Flutter / Firebase</li>
                </ul>
              </div>
              <div class="list">
                <h3>HAVE EXPERIENCE WITH</h3>
                <ul>
                  <li>React / Gatsby</li>
                  <li>PHP / Laravel / WP</li>
                  <li>Node.js ( Express )</li>
                  <li>Redis / Celery</li>
                  <li>Java / Android</li>
                  <li>Keras / TensorFlow</li>
                  <li>MS Office / G-Suite</li>
                  <li>Google Apps Script</li>
                </ul>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem title="Work Experience">
            <h2>WEB DEVELOPER / GRAPHIC DESIGNER</h2>
            <p>Independent / Freelance, September 2017 &ndash; Current</p>
            <Link to="/projects/" class="link-primary">
              View projects <FaExternalLinkAlt />
            </Link>
          </CarouselItem>
          <CarouselItem title="Education">
            <h2>Bachelor of Science in Computer Science</h2>
            <p>University of Gujrat, PK, October 2016 &ndash; Current</p>
            <a
              class="link-primary"
              href="https://www.linkedin.com/in/fmunirworld/"
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
              href="https://drive.google.com/open?id=1paYoKfr39J-4-mdSN7Iqo2emV0LgT0dD"
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
