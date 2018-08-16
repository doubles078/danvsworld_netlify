import React from 'react';
import PropTypes from 'prop-types';

const AuthorContainer = (props) => (
    <div className="author-img">
        <div className="wrapper">
            <img src={props.avatar} />
        </div>
        Hey {props.name}
    </div>
)


AuthorContainer.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

export default AuthorContainer
