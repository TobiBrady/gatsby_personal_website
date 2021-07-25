/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/static/`,
      },
    },
  ],
  siteMetadata: {
    email: "tobias [dot] m [dot] brady@gmail.com",
    linkedin: "https://www.linkedin.com/in/tobias-brady/",
    github: "https://github.com/TobiBrady"
  }
}