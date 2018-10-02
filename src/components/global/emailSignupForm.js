import React, { Component } from 'react';

class EmailSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
    handleInputChange = (e) => {
        let value = e.target.value;
        let namez = e.target.name;

        this.setState({ namez: value}) 
        console.log(value)
    }

    render (){
        return (
            <form 
                className="subscription-form" 
                name="blog-subscription" 
                method="POST"
                
                netlify>
              
                <input type="text" name="name" placeholder="Name" onChange={(e)=>this.handleInputChange(e)} /> 
                <input type="email" name="email" placeholder="Email" onChange={(e)=>this.handleInputChange(e)}/>
    
                <button type="submit">Send</button>
            </form>
    )}
}

export default EmailSignupForm
