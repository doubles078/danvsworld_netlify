import React from 'react'
import PropTypes from 'prop-types'

function calculateReadTime(wordCount) {
  //Assumes the avg adult reads 275 words per minute via Medium.com
  //Does not account for the 12 seconds per image that they do
  const readTimeInMinutes = Math.ceil(wordCount / 275)

  return readTimeInMinutes
}

const PostMeta = props => (
  <div className="postMeta">
    <p>
      <i>{props.summary}</i>
      <span> &mdash; {calculateReadTime(props.wordcount)} minute read</span>
    </p>
  </div>
)

PostMeta.propTypes = {
  summary: PropTypes.string.isRequired,
  wordcount: PropTypes.number,
}

export default PostMeta
