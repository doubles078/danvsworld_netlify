import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const BlogPostCard = ({node}) => {
    return (
      <li>
        <img src={node.author.avatar.responsiveResolution.src} />
        <div className="post-list-card">
          <h1>
            <Link to={node.slug}>
              {node.title}
            </Link>
          </h1>
          
          <a href={node.author.twitterLink} className="post-list-card-meta">
            {node.author.nickname} &bull; {node.publishDate}
          </a>
          
          <ul>
            <li>
              #marketingautomation
            </li>
            <li>
              #html
            </li>
            <li>
              #yomama
            </li>
          </ul>
        </div>
      </li>
    )
  }

BlogPostCard.propTypes = {
    node: PropTypes.object.isRequired
}

export default BlogPostCard
