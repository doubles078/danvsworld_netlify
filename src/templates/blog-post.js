import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render() {
        const { title, post } = this.props.data.contentfulBlog

        return (
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.childMarkdownRemark.html}} />
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
        }
    }
`