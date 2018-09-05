import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export class NewsLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
        result: {}
    }

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit = async (e) => {
    e.preventDefault;
    const result = await addToMailchimp(email, listFields)
    
    this.setState({
      result
    })
  }

  render () {

    return (

      <div className="newsLetter">
        <h3>Sign Up for Our News Letter</h3>
          <form>
          <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
      
    )
  }
}

export default NewsLetter