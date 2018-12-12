import React, { Component } from 'react';

class GoodReadsBookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
                name: '', 
                email: ''
            };

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

    componentDidMount(){
        fetch('')
            .then(res => res.json())
            .then(data => this.setState({ data }))
    }

    render (){
        return (
           <div>
               <ul>

               </ul>
           </div>
    )}
}

export default GoodReadsBookList
