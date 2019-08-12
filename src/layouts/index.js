import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/global/header'

import favicon from '../assets/images/favicon.png'
import '../assets/styles/main.scss'

const TemplateWrapper = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title="Robomo.io - A Blog for Technical Marketers and Automators"
        meta={[
          {
            name: 'description',
            content: 'A Blog for Technical Marketers and Automators',
          },
          {
            name: 'keywords',
            content: 'marketing, automation, bots, technical',
          },
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      >
        <html lang="en" />
      </Helmet>

      <div className="global-container">
        <Header blogposts={data.allContentfulBlog.edges} />
        {children()}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const pageQuery = graphql`
  query GlobalQuery {
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          author {
            name
            nickname
            avatar {
              resolutions {
                src
              }
            }
            twitterLink
          }
          featuredImage {
            resolutions {
              src
            }
          }
          id
          publishDate(formatString: "DD MMMM YYYY")
          slug
          tags
          title
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
