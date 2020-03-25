module.exports = {
  siteMetadata: {
    title: `Fahad Munir - Freelance Web Developer`,
    description: `Fahad Munir is a Computer Science student and full stack web and mobile app developer.`,
    author: `@fmunirworld`,
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
        short_name: `fmunir`,
        start_url: `/`,
        background_color: `#fdfffc`,
        theme_color: `#222733`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Josefin Sans:300,400`, `Fira Sans:300,400`],
        display: "swap",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
