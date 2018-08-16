import React from 'react';
import PropTypes from 'prop-types';

const AuthorCard = (props) => (
    <div className="author">
        <div className="img-wrapper">
            <img src={props.avatar} />
        </div>

        <h4>About the Author</h4>

        <div dangerouslySetInnerHTML={{__html: props.description}} />

    </div>
)


AuthorCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    description: PropTypes.string
}

export default AuthorCard
