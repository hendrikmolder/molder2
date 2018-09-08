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
                path: `src/content/`,
            },
        },
        'gatsby-plugin-netlify-cms',
        'gatsby-transformer-remark'
    ]
}