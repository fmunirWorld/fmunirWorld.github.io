module.exports = {
  siteMetadata: {
    title: `Fahad Munir — Full Stack Web Developer`,
    description: `A full-stack engineer who specializes in various web technologies mainly JavaScript (Angular/React/NodeJS) and Python (Django/Flask)`,
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
        short_name: `fmunir`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Josefin Sans:300,400`, `Fira Sans:300,400`],
        display: "swap",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168685654-1",
      },
    },
  ],
}
