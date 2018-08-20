import React from 'react';
import BlogPostCard from '../components/global/blogPostCard';

const IndexPage = ({data}) => (
  <div className="home-container">
      <div>
        Left Nav Bar
      </div>

      <main>
        <ul className='blog-posts'>
          {data.allContentfulBlog.edges.map((edge) => <BlogPostCard node={edge.node} key={edge.node.id}/>)}
        </ul>
      </main>

      <div>
        Right Nav Bar
      </div>

  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query SiteTitleQuery {
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