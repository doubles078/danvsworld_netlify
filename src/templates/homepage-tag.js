import React from 'react';
import BlogPostCard from '../components/global/blogPostCard';
import TagsList from '../components/global/tagsList';


function generatePageTagContext(data) {
    let list = data.allContentfulBlog.edges;

    return list.filter((edge) => {
      let pageTag = window.location.pathname.slice(1);
      let tagList = edge.node.tags.map((tag) => removeSpaceAndLowerCase(tag));

      return tagList.includes(pageTag);
    });

}

function removeSpaceAndLowerCase(tag) {
  return tag.toLowerCase().replace(/\s/g, '');
}


const HomepageTag = ({data}) => {
    let pageTag = window.location.pathname.slice(1);

    return (
      <div className="home-container">
          <div className="home-container-featured-tag">
            <h1>#{pageTag.toUpperCase()}</h1>
          </div>
    
          <TagsList 
            blogposts={data.allContentfulBlog.edges}
          />
    
          <main>
            <ul className='blog-posts'>
              {generatePageTagContext(data).map((edge) => <BlogPostCard node={edge.node} key={edge.node.id}/>)}
            </ul>
          </main>
    
          <div>
            Right Nav Bar
          </div>
    
      </div>
    )
} 



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