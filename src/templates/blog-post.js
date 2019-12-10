import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AuthorCard from '../components/postpage/authorCard'
import CommentsSection from '../components/postpage/commentsSection'
import PostContent from '../components/postpage/postContent'
import Header from '../components/global/header'

class BlogPost extends Component {
  render() {
    const {
      title,
      post,
      author,
      quickSummary,
      publishDate,
    } = this.props.data.contentfulBlog
    return (
      <div className="global-container">
        <Header isBlogPage={true} />
        <div className="blog-post-container">
          <AuthorCard
            avatar={author.avatar.resolutions.src}
            description={author.description.childMarkdownRemark.html}
            name={author.name}
          />
          <PostContent
            content={post.childMarkdownRemark.html}
            date={publishDate}
            summary={quickSummary}
            title={title}
            twitter={author.twitterLink}
            wordcount={post.childMarkdownRemark.wordCount.words}
          />

          <CommentsSection id={title} title={title} />
        </div>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      author {
        avatar {
          resolutions {
            src
          }
        }

        name
        twitterLink
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      post {
        childMarkdownRemark {
          html
          wordCount {
            words
          }
        }
      }
      publishDate(formatString: "DD MMMM YYYY")
      quickSummary
      slug
      title
    }
  }
`
