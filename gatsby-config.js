module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content/`,
            },
        },
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
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            }
        },
    ]
}