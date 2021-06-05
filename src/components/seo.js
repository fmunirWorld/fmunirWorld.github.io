import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import profileImage from "../images/profile.jpg"
import siteCoverImage from "../images/site-preview-cover.jpg"

function SEO({ title, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const { description, author, siteUrl } = site.siteMetadata
  title = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: siteCoverImage,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:url`,
          content: siteUrl,
        },
        {
          property: `twitter:creator`,
          content: author,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: description,
        },
        {
          property: `twitter:image`,
          content: profileImage,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
