require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'DanVsWorld: A blog by Dan Donohue',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID || '',
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN || '',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-42139152-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/favicon.png',
      },
    },
  ],
}
