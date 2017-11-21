module.exports = {
  siteMetadata: {
    title: `Zach Krall`,
  },
  plugins: [
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
              maxWidth: '1200',
              linkImagesToOriginal: false,
              sizeByPixelDensity: false
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
  ]
}
