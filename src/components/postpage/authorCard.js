import React from 'react';
import PropTypes from 'prop-types';

function fancyAnimation(event) {
    console.log(event)
}

function fancyAnimationLeave(event) {
    console.log(event)
}


const AuthorCard = (props) => (
    <div className="author">
        <div className="img-wrapper" onMouseEnter={fancyAnimation} onMouseLeave={fancyAnimationLeave}>
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
