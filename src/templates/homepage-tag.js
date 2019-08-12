import React, { Component } from 'react'
import BlogPostCard from '../components/global/blogPostCard'
import FeaturedTagHeader from '../components/global/featuredTagHeader'
import TagsList from '../components/global/tagsList'
import EmailSignupForm from '../components/global/emailSignupForm'
import HomepageWidgetBox from '../components/global/homepageWidgetBox'

class HomepageTag extends Component {
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
    let pageTag = window !== 'undefined' && window.location.pathname.slice(1)

    let pageContext = this.generatePageTagContext(this.props.data, pageTag)

    this.setState({
      pageTag,
      tagsList: pageContext,
    })
  }

  generatePageTagContext(data, pageTag) {
    let listOfPosts = data.allContentfulBlog.edges

    function removeSpaceAndLowerCase(tag) {
      return tag.toLowerCase().replace(/\s/g, '')
    }

    const filteredListOfPosts = listOfPosts.filter(edge => {
      console.log(edge)
      let tagList = edge.node.tags.map(tag => removeSpaceAndLowerCase(tag))

      tagList.includes(pageTag)
    })

    return filteredListOfPosts
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <FeaturedTagHeader tag={this.state.pageTag} />

          <div>
            <HomepageWidgetBox title={'Categories'}>
              <TagsList blogposts={this.props.data.allContentfulBlog.edges} />
            </HomepageWidgetBox>

            <HomepageWidgetBox title={'Email Signup'}>
              <EmailSignupForm />
            </HomepageWidgetBox>
          </div>

          <main>
            <ul className="blog-posts">
              {this.generatePageTagContext(this.props.data).map(edge => (
                <BlogPostCard node={edge.node} key={edge.node.id} />
              ))}
            </ul>
          </main>
        </div>
      </div>
    )
  }
}

export default HomepageTag

export const pageQuery = graphql(`
  query HomePageTag {
    allContentfulBlog(
      filter: { tags: { in: window.location.pathname.slice(1) } }
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
`)
