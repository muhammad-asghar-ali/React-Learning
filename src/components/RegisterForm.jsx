import React from 'react';
import Form from './common/Form';
import Joi from "joi-browser";

class RegisterForm extends Form {

    state = {
        data: { username: '', password: '', name: ''}, 
        errors: {}
    };

    schema = {
        username: Joi.string().required().email().label('username'), 
        password: Joi.string().required().min(5).label('Password'), 
        name: Joi.string().required().label('Name') 
    }

    doSubmit = () => {
        console.log('Submitted')
    }
    
    render() { 

        return (
          <div>
            <h1 className="alert-heading">Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Email', 'email')}
                {this.renderInput('name', 'Name')}
                {this.renderInput('password', 'Password', 'password')}                                  
                {this.renderButton('Register')}
            </form>           
          </div>           
        );
    }
}
 
export default RegisterForm;