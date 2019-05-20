require('dotenv').config()

module.exports = {
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
                linkResolver: ({ node, key, value }) => post => `/${post.uid}`
            }
        },
        {
            resolve: 'gatsby-plugin-prismic-preview',
            options: {
                repositoryName: `molder2`,
                linkResolver: require('./src/utils/linkResolver'),
            }
        }
    ]
}