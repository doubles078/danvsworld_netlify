import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import TagsList from './tagsList';

const TagsListCard = (props) => {
    return (
        <div className="taglist-card">
            <h3>Categories</h3>
            <TagsList 
                blogposts={props.blogposts}
            />
        </div>
    )
}

TagsListCard.propTypes = {
    blogposts: PropTypes.array.isRequired,
}

export default TagsListCard

