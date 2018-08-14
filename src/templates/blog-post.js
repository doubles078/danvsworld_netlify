import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorContainer from '../components/blog-post/authorContainer';

class BlogPost extends Component {
    render() {
        const { title, post, author } = this.props.data.contentfulBlog

        return (
            <div className="blog-post-container">
                <AuthorContainer name={author.name} avatar={author.avatar.responsiveResolution.src} />     
                <main>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: post.childMarkdownRemark.html}} />
                </main>
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
            post {
                childMarkdownRemark {
                  html
                }
            }
            author {
                name
                avatar {
                  responsiveResolution(cropFocus: TOP) {
                    src
                  }
                }
              }
        }
    }
`