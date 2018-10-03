import React, { Component } from 'react';

class EmailSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: ''};

        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleSubmit = (e) => {
        let form = document.querySelector('.subscription-form');
        let email = form.querySelector('#email').value;
        let name = form.querySelector('#name').value;

        if (!email || !name) {
            e.preventDefault()
            alert('Oops a field was left empty.')
        }
    }

    render (){
        return (
            <form 
                className="subscription-form" 
                name="blog-subscription" 
                method="POST"
                onSubmit={(e) => this.handleSubmit(e)}
                action="/thanks"
                data-netlify="true" 
                data-netlify-honeypot="bot-field">
              
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    id="name" /> 
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    id="email" />
    
                <button type="submit">Send</button>
            </form>
    )}
}

export default EmailSignupForm
