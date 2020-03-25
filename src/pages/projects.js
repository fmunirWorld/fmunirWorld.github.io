import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Segment from "../components/segment"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Segment
      title="Projects by fmunir"
      subtitle="The best way to learn is by doing and that means building things. One of my weaknesses is that I try to be a perfectionist and procrastinate. Thankfully, programming doesn't allow for that. So here is a growing list of projects I am working on:"
      content={
        <ul>
          <li>Just adding some final touches...</li>
        </ul>
      }
      footer="Last updated: March 22, 2020"
    />
  </Layout>
)

export default ProjectsPage
