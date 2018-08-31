import React from 'react';
import PropTypes from 'prop-types';
import PostMeta from './postMeta';

const PostContent = (props) => (
    <main className="content">
        <div className="date">
            <p>{props.date}</p>
            
            <a href={props.twitter} target="_blank">
                Ask the author a question
            </a>
        </div>

        <h1>{props.title}</h1>

        <PostMeta
            summary={props.summary}
            wordcount={props.wordcount}
        />

        <div dangerouslySetInnerHTML={{__html: props.content}} />
    </main>
)


PostContent.propTypes = {
    avatar: PropTypes.string,
    content: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string,
    twitter: PropTypes.string
}

export default PostContent
