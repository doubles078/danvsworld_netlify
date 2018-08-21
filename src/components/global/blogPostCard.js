import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const BlogPostCard = ({node}) => {

  function removeSpaceAndLowerCase(tag) {
    return tag.toLowerCase().replace(/\s/g, '');
  }

    return (
      <li>
        <img src={node.author.avatar.responsiveResolution.src} />
        <div className="post-list-card">
          <h1>
            <Link to={node.slug}>
              {node.title}
            </Link>
          </h1>
          
          <a href={node.author.twitterLink} className="post-list-card-meta"  target="_blank">
            {node.author.nickname} &bull; {node.publishDate}
          </a>
          
          <ul>
              {node.tags.map((tag) => <li key={tag}>#{removeSpaceAndLowerCase(tag)}</li>)}
          </ul>
        </div>
      </li>
    )
  }

BlogPostCard.propTypes = {
    node: PropTypes.object.isRequired
}

export default BlogPostCard
