import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Segment from "../components/segment"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Segment
      title="Posts by Fahad"
      subtitle="I'm no author but I do like writing the occasional blog post. Here are some of the posts I have done:"
      content={
        <ul>
          <li>Nothing is posted yet...</li>
        </ul>
      }
      footer="Last updated: March 22, 2020"
    />
  </Layout>
)

export default BlogPage
