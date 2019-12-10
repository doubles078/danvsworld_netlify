import React, { Component } from 'react'
import BlogPostCard from '../components/global/blogPostCard'
import FeaturedTagHeader from '../components/global/featuredTagHeader'
import TagsList from '../components/global/tagsList'
import HomepageWidgetBox from '../components/global/homepageWidgetBox'
import TagContext from '../components/context/TagContext'
import Header from '../components/global/header'
class HomepageTag extends Component {
  static contextType = TagContext
  constructor(props) {
    super(props)

    this.state = {
      pageTag: '',
      tagsList: [],
      visible: false,
    }
    this.generatePageTagContext = this.generatePageTagContext.bind(this)
  }
  componentDidMount() {
    this.setState({ pageTag: this.context.activeTag })
  }
  generatePageTagContext(data, pageTag) {
    let listOfPosts = data.allContentfulBlog.edges
    const filteredListOfPosts = []

    listOfPosts.map(edge => {
      edge.node.tags.map(tag => {
        if (tag === pageTag) {
          filteredListOfPosts.push(edge)
        }
      })
    })
    return filteredListOfPosts
  }

  render() {
    return (
      <TagContext.Consumer>
        {tagcontext => (
          <div className="global-container">
            <Header blogposts={this.props.data.allContentfulBlog.edges} />
            <div>
              <div className="home-container">
                <FeaturedTagHeader tag={this.state.pageTag} />

                <main>
                  <ul className="blog-posts">
                    {this.generatePageTagContext(
                      this.props.data,
                      tagcontext.activeTag
                    ).map(edge => (
                      <BlogPostCard node={edge.node} key={edge.node.id} />
                    ))}
                  </ul>
                </main>
                <div>
                  <HomepageWidgetBox title={'Categories'}>
                    <TagsList
                      blogposts={this.props.data.allContentfulBlog.edges}
                    />
                  </HomepageWidgetBox>
                </div>
              </div>
            </div>
          </div>
        )}
      </TagContext.Consumer>
    )
  }
}

export default HomepageTag

export const pageQuery = graphql`
  query HomePageTdag {
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
            resize(width: 600) {
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
