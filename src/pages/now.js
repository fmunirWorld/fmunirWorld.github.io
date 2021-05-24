import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Segment from "../components/segment"

const NowList = [
  {
    leader: "Life",
    detail: "Working as a Software Engineer.",
  },
  {
    leader: "Reading",
    detail:
      "Introduction to Blockchain with Case Studies by Zeeshan ul Hassan Usmani",
  },
  // { leader: "Watching", detail: "Dark" },
  {
    leader: "Learning about",
    detail: "GraphQL and exploring different clients Apollo / Relay",
  },
  {
    leader: "Working with",
    detail: (
      <ul>
        <li>
          JAMstack ( Gatsby ) to create fast, high performance branding website
          based on headless CMSs.
        </li>
      </ul>
    ),
  },
  // {
  //   leader: "Looking for",
  //   detail: "Freelance opportunities in web/mobile app development.",
  // },
  { leader: "Last updated", detail: "May 24, 2021" },
]

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <Segment
      title="What I'm Doing Now"
      subtitle="This page is the most up to date list of what I’m working on, thinking about and doing right now."
      content={
        <ul>
          {NowList.map((item, index) => {
            return (
              <li key={index}>
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
