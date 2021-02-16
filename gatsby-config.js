require('dotenv').config()
const linkResolver = require('./src/utils/linkResolver')
const htmlSerialiser = require('./src/utils/htmlSerialiser')

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.example.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `molder`,
    siteUrl: `https://molder.eu`,
    description: `Hendrik's webpage`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/favicon.png',
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/utils/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://91b6cef10a074dfab0786a0bad887ba0@sentry.io/1547468',
        environment: NODE_ENV,
        enabled: () => ['production'].indexOf(NODE_ENV) !== -1,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              {
                userAgent: '*',
              },
            ],
          },
          'branch-deploy': {
            policy: [
              {
                userAgent: '*',
                disallow: ['/'],
              },
            ],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [
              {
                userAgent: '*',
                disallow: ['/'],
              },
            ],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}
