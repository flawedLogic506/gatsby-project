module.exports = {
  siteMetadata: {
    title: 'Gatsby Project',
    author: 'Jorge A'
  },
  plugins: [
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-transformer-remark'
  ]
}
