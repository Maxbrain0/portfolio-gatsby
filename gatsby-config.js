/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `JG Professional`,
    titleTemplate: "%s | JG Professional",
    description: `This site features my professional interests, skills, and history.`,
    author: `Jacob Goodwin`,
    url: `https://www.jacobgoodwin.me`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/util/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jacob Goodwin Professional`,
        short_name: `JG`,
        description:
          "This site features my professional interests, skills, and history.",
        lang: `en`,
        start_url: `/`,
        icon: `src/assets/icons/icon-512px-white.png`,
        background_color: `#ffffff`,
        theme_color: `#002d5b`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
