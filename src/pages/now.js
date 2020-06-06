import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Segment from "../components/segment"

const NowList = [
  {
    leader: "Life",
    detail:
      "Desperately waiting for my graduation to complete, delayed due to the Coronavirus situation.",
  },
  {
    leader: "Reading",
    detail: (
      <>
        Personality Development Program by <i>Mubashir Nazir</i>
      </>
    ),
  },
  { leader: "Watching", detail: "Outlander" },
  { leader: "Learning about", detail: "full-stack Serverless apps" },
  {
    leader: "Working with",
    detail: (
      <ul>
        <li>
          JAMstack ( Gatsby, Shopify and Netlify ) to create modern web
          storefront for headless ecommerce.
        </li>
        <li>GitHub Actions and AWS to create better CI / CD Workflows.</li>
      </ul>
    ),
  },
  // {
  //   leader: "Looking for",
  //   detail: "Freelance opportunities in web/mobile app development.",
  // },
  { leader: "Last updated", detail: "June 06, 2020" },
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
