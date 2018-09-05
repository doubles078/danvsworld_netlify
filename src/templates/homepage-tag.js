import React, { Component } from 'react';
import BlogPostCard from '../components/global/BlogPostCard';
import FeaturedTagHeader from '../components/global/featuredTagHeader';
import NewsLetter from '../components/postpage/newsLetter';
import TagsListCard from '../components/global/TagsList/tagsListCard';

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

            <FeaturedTagHeader tag={this.state.pageTag} />
            
            <TagsListCard blogposts={this.props.data.allContentfulBlog.edges} />
      
            <main>
              <ul className='blog-posts'>
                {this.generatePageTagContext(this.props.data).map((edge) => <BlogPostCard node={edge.node} key={edge.node.id}/>)}
              </ul>
            </main>
            
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