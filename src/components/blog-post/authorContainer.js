import React from 'react';
import PropTypes from 'prop-types';

const AuthorContainer = (props) => (
    <div>
        Hey {props.name}
    </div>
)


AuthorContainer.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

export default AuthorContainer
