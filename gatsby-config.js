module.exports = {
    siteMetadata: {
        title: 'Kye Smith'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/layouts/my-work-page.mdx.tsx'),
                }
            }
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'open sans', // sans-serif
                    'playfair display', // serif
                    'prompt' // sans-serif
                ]
            },
        },
    ]
}