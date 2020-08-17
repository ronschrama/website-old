/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: ['Video Blogger'],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: `
        This is the personal website of Ron Schrama. On this website I blog about a mixture of development and design subjects.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
      },
    },
  ],
}
