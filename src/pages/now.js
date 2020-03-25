import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Segment from "../components/segment"

const NowList = [
  { leader: "Life", detail: "Spending as much time with my family as I can." },
  {
    leader: "Reading",
    detail: (
      <>
        Personality Development Program by <i>Mubashir Nazir</i>
      </>
    ),
  },
  { leader: "Watching", detail: "The Americans" },
  { leader: "Learning about", detail: "Gatsby" },
  {
    leader: "Working on",
    detail: (
      <ul>
        <li>
          Web and mobile app based solutions to digitalize UoG Boys Hosels
          management system.
        </li>
      </ul>
    ),
  },
  { leader: "Looking for", detail: "No more projects or responsibilities." },
  { leader: "Last updated", detail: "March 22, 2020" },
]

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <Segment
      title="What I'm Doing Now"
      subtitle="This page is the most up to date list of what I’m working on, thinking about and doing right now."
      content={
        <ul>
          {NowList.map(item => {
            return (
              <li>
                <span>{item.leader}: </span>
                {item.detail}
              </li>
            )
          })}
        </ul>
      }
      footer={
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nownownow.com/about"
        >
          What is this page?
        </a>
      }
    />
  </Layout>
)

export default NowPage
