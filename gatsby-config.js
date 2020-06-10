module.exports = {
  siteMetadata: {
    title: `Topher Young - Software Engineer`,
    description: `Portfolio for Topher Young - a software engineer and UX designer based in Portland, OR`,
    author: `Topher Young`,
    siteUrl: 'http://www.hellotopher.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TopherYoung`,
        short_name: `TopherYoung`,
        start_url: `/`,
        background_color: `#EAE7E1`,
        theme_color: `#362D2D`,
        display: `minimal-ui`,
        icon: `src/images/topheryoung.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
