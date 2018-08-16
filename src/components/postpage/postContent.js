import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const PostContent = (props) => (
    <main className="content">
        <div className="date">
            <p>{props.date}</p>
            
            <a href={props.twitter} target="_blank">
                Ask the author a question
            </a>
        </div>

        <h1>{props.title}</h1>

        <div dangerouslySetInnerHTML={{__html: props.content}} />
    </main>
)


PostContent.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    description: PropTypes.string
}

export default PostContent
