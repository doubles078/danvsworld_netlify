import React, { Component } from 'react';
import BlogPostCard from '../components/global/blogPostCard';
import TagsList from '../components/global//TagsList/tagsList';





class HomepageTag extends Component {

  constructor(props) {
    super(props);

    this.state = {
        pageTag: "",
        tagsList: [],
        visible: false
    }

    this.generatePageTagContext = this.generatePageTagContext.bind(this);
  }

  componentDidMount() {
    let pageTag = window !== "undefined" && window.location.pathname.slice(1);

    this.generatePageTagContext(this.props.data, pageTag)

    this.setState({
      pageTag 
    })
  }
 
  generatePageTagContext(data, pageTag) {
    let list = data.allContentfulBlog.edges;
    
    

    function removeSpaceAndLowerCase(tag) {
      return tag.toLowerCase().replace(/\s/g, '');
    } 

    return list.filter((edge) => {

      if (typeof window !== 'undefined') {
          var pageTag = window.location.pathname.slice(1);
      }
      let tagList = edge.node.tags.map((tag) => removeSpaceAndLowerCase(tag));
      
      return tagList.includes(pageTag);
    });

    this.setState({
      tagsList: tagList.includes(pageTag),
      pageTag
    }) 
  }

  render() {
    return (
      <div>
        <div className="home-container">
            <div className="home-container-featured-tag">
              <h1>#{this.state.pageTag.toUpperCase()}</h1>
            </div>
            
            <div className="taglist-card">
              <h3>Categories</h3>
              <TagsList 
                blogposts={this.props.data.allContentfulBlog.edges}
              />
            </div>
      
            <main>
              <ul className='blog-posts'>
                {this.generatePageTagContext(this.props.data).map((edge) => <BlogPostCard node={edge.node} key={edge.node.id}/>)}
              </ul>
            </main>
      
            <div>
              Right Nav Bar
            </div>
      
        </div>
      </div>
    )
  }  
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