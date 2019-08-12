import React from 'react'
import PropTypes from 'prop-types'
import BlogPostCard from './blogPostCard'
import FeaturedPostCard from './featuredPostCard'

const BlogPostsList = props => {
  return (
    <ul className="blog-posts">
      <FeaturedPostCard node={props.featuredpost} />
      {props.posts.map(edge => (
        <BlogPostCard node={edge.node} key={edge.node.id} />
      ))}
    </ul>
  )
}

BlogPostsList.propTypes = {
  featuredpost: PropTypes.object,
  posts: PropTypes.array,
}

export default BlogPostsList
