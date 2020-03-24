import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Segment from "../components/segment"

const List = props => (
  <li style={{ marginTop: `1rem` }}>
    <span style={{ fontWeight: `400` }}>{props.leader}: </span>
    {props.children}
  </li>
)

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <Segment
      title="What I'm Doing Now"
      subtitle="This page is the most up to date list of what I’m working on, thinking about and doing right now."
    >
      <ul style={{ listStyle: `none` }}>
        <List leader="Life">
          Spending as much time with my family as I can.
        </List>
        <List leader="Reading">
          Personality Development Program by <i>Mubashir Nazir</i>
        </List>
        <List leader="Watching">The Americans</List>
        <List leader="Learning about">Gatsby</List>
        <List leader="Working on">
          <ul style={{ marginLeft: `2rem`, listStyle: `disc` }}>
            <li style={{ marginTop: `1rem` }}>
              Web and mobile app based solutions to digitalize UoG Boys Hosels
              management system.
            </li>
          </ul>
        </List>
        <List leader="Looking for">No more projects or responsibilities.</List>
        <List leader="Last updated">March 22, 2020</List>
      </ul>
      <div style={{ marginTop: `3rem`, fontSize: `1.3rem`, opacity: 0.7 }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nownownow.com/about"
        >
          What is this page?
        </a>
      </div>
    </Segment>
  </Layout>
)

export default NowPage
