import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const BlogPostCard = ({ node }) => {
  function removeSpaceAndLowerCase(tag) {
    return tag.toLowerCase().replace(/\s/g, '')
  }

  return (
    <li className="post-list-card">
      <div className="post-list-card-details">
        <div className="post-list-card-meta">
          <h2>
            <Link to={node.slug}>{node.title}</Link>
          </h2>

          <a
            href={node.author.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.author.nickname} &bull; {node.publishDate}
          </a>

          <ul>
            {node.tags.map(tag => (
              <li key={tag}>#{removeSpaceAndLowerCase(tag)}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

BlogPostCard.propTypes = {
  node: PropTypes.object.isRequired,
}

export default BlogPostCard
