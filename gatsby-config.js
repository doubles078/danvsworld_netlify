module.exports = {
  siteMetadata: {
    title: 'Robomo: A Blog About Technical Marketing and Automation',
  },
  plugins: [
    { 
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACEID,
        accessToken: CONTENTFUL_ACCESSTOKEN
      }
     },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark'
  ],
}
