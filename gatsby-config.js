require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Robomo: A Blog About Technical Marketing and Automation',
  },
  plugins: [
    { 
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID || '',
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN || ''
      }
     },
     {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://senseibuff.us7.list-manage.com/subscribe/post?u=29eab8e6fef13e3f15a812696&amp;id=63285f69cf', // see instructions section below
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ],
}
