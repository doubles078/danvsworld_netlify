import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const BlogPostCard = ({node}) => {
    return (
      <li>
        <Link to={node.slug}><h3>{node.title}</h3></Link>
        <img src={node.featuredImage.responsiveResolution.src} />
        <div>{node.post.childMarkdownRemark.excerpt}</div>
      </li>
    )
  }

BlogPostCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

export default BlogPostCard
