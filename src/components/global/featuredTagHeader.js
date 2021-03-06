import React from 'react';
import PropTypes from 'prop-types';

const FeaturedPostCard = (props) => {
    return (
      <div className="featured-tag-header">
        <h1>#{props.tag.toUpperCase()}</h1>
      </div>
    )
  }

  FeaturedPostCard.propTypes = {
    tag: PropTypes.string.isRequired
}

export default FeaturedPostCard
