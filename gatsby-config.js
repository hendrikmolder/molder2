require('dotenv').config()
const linkResolver = require('./src/utils/linkResolver')

module.exports = {
    siteMetadata: {
        title: `molder`,
        siteUrl: `https://molder.eu`,
        description: `Hendrik's webpage`,
    },
    plugins: [
        {
            resolve: 'gatsby-transformer-remark',
            plugins: [
                `gatsby-remark-prismjs`
            ],
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./static/favicon.png",
            },
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `molder2`,
                accessToken: `${process.env.PRISMIC_API_KEY || PRISMIC_API_KEY}`,
                schemas: {
                    page: require('./src/schemas/page.json'),
                    posts: require('./src/schemas/posts.json'),
                    person: require('./src/schemas/person.json'),
                    resource: require('./src/schemas/resource.json'),
                    resources: require('./src/schemas/resources.json'),
                    landing_page: require('./src/schemas/landing_page.json')
                },
                linkResolver: ({ node, key, value }) => doc => linkResolver(doc)
            }
        },
        `gatsby-plugin-sitemap`
    ]
}