import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/postpage/authorCard';
import PostContent from '../components/postpage/postContent';

class BlogPost extends Component {
    render() {
        const { title, post, author, publishDate } = this.props.data.contentfulBlog

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
                    title={title}
                    twitter={author.twitterLink}
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
            title
            slug
            publishDate(formatString: "DD MMMM YYYY")
            post {
                childMarkdownRemark {
                  html
                }
            }
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
        }
    }
`