import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export class NewsLetter extends Component {
  render () {
    return (
      <div className="newsLetter">
        <h3>Sign Up for Our News Letter</h3>
      </div>
    )
  }
}

export default NewsLetter