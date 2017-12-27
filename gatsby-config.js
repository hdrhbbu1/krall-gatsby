module.exports = {
  siteMetadata: {
    title: 'Zach Krall',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: '1400',
              linkImagesToOriginal: false,
              sizeByPixelDensity: true
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-responsive-iframe'
        ],
      },
    },
  ]
}
