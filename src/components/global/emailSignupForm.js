import React, { Component } from 'react';

class EmailSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleInputChange = (e) => {
        let value = e.target.value;
        let inputName = e.target.name;

        this.setState({ inputName: value}) 
    }

    handleSubmit = (e) => {
        if (!this.state.name || !this.state.email) {
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
                netlify>
              
                <input type="text" name="name" placeholder="Name" onChange={(e) => this.handleInputChange(e)} /> 
                <input type="email" name="email" placeholder="Email" onChange={(e) => this.handleInputChange(e)}/>
    
                <button type="submit">Send</button>
            </form>
    )}
}

export default EmailSignupForm
