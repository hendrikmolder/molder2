module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content/`,
            },
        },
        'gatsby-plugin-netlify-cms',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
              logo: "./static/favicon.png",
            }
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-sass`
    ]
}