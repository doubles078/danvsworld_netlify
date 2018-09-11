import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/postpage/authorCard';
import CommentsSection from '../components/postpage/commentsSection';
import PostContent from '../components/postpage/postContent';

class BlogPost extends Component {
    render() {
        const { title, post, author, quickSummary, publishDate } = this.props.data.contentfulBlog
        
        return (
            <div className="blog-post-container">
                <AuthorCard 
                    avatar={author.avatar.responsiveResolution.src} 
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

                <CommentsSection 
                    id={title}
                    title={title}
                />
            </div>
        )
     }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlog(slug: {eq: $slug}) {
            author {
                name
                twitterLink
                description {
                    childMarkdownRemark {
                      html
                    }
                  }
                avatar {
                  responsiveResolution(cropFocus: TOP) {
                    src
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