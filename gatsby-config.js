module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content/`,
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./static/favicon.png",
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                        }
                    }
                ]
            }
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-medium`,
            options: {
                username: `@hendrik.molder`,
                limit: 100,
            }
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            }
        },
    ]
}