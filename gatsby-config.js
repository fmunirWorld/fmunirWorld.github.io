module.exports = {
  siteMetadata: {
    title: `Fahad Munir — Software Engineer — Web, Mobile & Cloud`,
    description: `A full stack developer who specializes in various web technologies (mainly JavaScript/Python), DevOps tools, and Cloud platforms (AWS). Based in Lahore, Pakistan.`,
    author: `Fahad Munir (fmunirdev@gmail.com)`,
    siteUrl: `https://fmunirdev.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fahad Munir`,
        short_name: `fmunirdev`,
        start_url: `/`,
        background_color: `#fdfffc`,
        theme_color: `#222733`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168685654-1",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
