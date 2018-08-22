import React from 'react';
import BlogPostCard from '../components/global/blogPostCard';
import TagsList from '../components/global/tagsList';


function generatePageTagContext() {
    //This is bad and should be updated later
    let tagName = window.location.pathname;

    console.log(tagName)
}



const HomepageTag = ({data}) => (
  <div className="home-container">
      <TagsList 
        blogposts={data.allContentfulBlog.edges}
      />

      <main>
        <ul className='blog-posts'>
          {data.allContentfulBlog.edges.map((edge) => <BlogPostCard node={edge.node} key={edge.node.id}/>)}
        </ul>
      </main>
      {generatePageTagContext()}

      <div>
        Right Nav Bar
      </div>

  </div>
)

export default HomepageTag

export const pageQuery = graphql`
  query HomePageTag {
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