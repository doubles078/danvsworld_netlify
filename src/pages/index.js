import React from 'react';
import BlogPostCard from '../components/global/blogPostCard';
import FeaturedPostCard from '../components/global/featuredPostCard';
import Header from '../components/global/header';
import TagsList from '../components/global/TagsList/tagsList';

const IndexPage = ({data}) => {

let allBlogPosts = data.allContentfulBlog.edges;
let blogsWithoutLatestPost = allBlogPosts.slice(1,allBlogPosts.length);
let featuredPost = allBlogPosts[0];


return (
  <div className="global-container">
    <Header 
      blogposts={allBlogPosts}
    />
    
    <div className="home-container">
      <div className="taglist-card">
        <h3>Categories</h3>
          <TagsList 
            blogposts={allBlogPosts}
          />
      </div>

      <main>
        <ul className='blog-posts'>
          <FeaturedPostCard node={featuredPost.node} />

          {blogsWithoutLatestPost.map((edge) => <BlogPostCard node={edge.node} key={edge.node.id}/>)}
        </ul>
      </main>

      <div>
        Right Nav Bar
      </div>
    </div>
  </div>
)}



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