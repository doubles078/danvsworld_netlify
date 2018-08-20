import React from 'react';
import PropTypes from 'prop-types';

const NewsLetter = () => (
    <div className="newsLetter">
        <h3>Sign Up for Our News Letter</h3>
    </div>
)

NewsLetter.propTypes = {
    summary: PropTypes.string.isRequired
}

export default NewsLetter
