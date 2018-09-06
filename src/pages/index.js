import React from 'react';
import BlogPostsList from '../components/global/blogPostsList';
import TagsListCard from '../components/global/tagslist/tagsListCard';

const IndexPage = ({data}) => {

let allBlogPosts = data.allContentfulBlog.edges;
let blogsWithoutLatestPost = allBlogPosts.slice(1,allBlogPosts.length);
let featuredPost = allBlogPosts[0];


return (
  <div>
    <div className="home-container">
      <TagsListCard blogposts={allBlogPosts} />

      <main>
        <BlogPostsList featuredpost={featuredPost.node} posts={blogsWithoutLatestPost} />
      </main>
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