import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/global/header';


import '../assets/styles/main.scss';

const TemplateWrapper = ({ children, data }) => (
    <div>
      <Helmet
        title="Robomo.io - A Blog for Technical Marketers and Automators"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}>
        

        <html lang="en" />
        
      </Helmet>

        
    
      <div className="global-container">
        <Header 
            blogposts={data.allContentfulBlog.edges}
          />
        {children()}
      </div>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export const pageQuery = graphql`
  query GlobalQuery {
    allContentfulBlog ( 
      filter: { node_locale: {eq: "en-US"} },
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          author {
            name
            nickname
            avatar {
              responsiveResolution(cropFocus: TOP, width: 50, height: 50) {
                src
              }
            }
            twitterLink
          }
          featuredImage {
            responsiveResolution {
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

