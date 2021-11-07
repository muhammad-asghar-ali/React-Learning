import React from 'react';
import Joi from "joi-browser";
import Input from './input';
import Select from './select';

class Form extends React.Component {
    state = {
        data: {},
        errors: {}
    };
   
    validate = () => {
        const options = { abortEarly: false}
        const {error} = Joi.validate(this.state.data, this.schema, options)
        if(!error) return null
        
        const errors = {}
        for (let item of error.details ) error[item.path[0]] = item.massage
        return errors
    }

    handleSubmit = e => {
        e.preventDefault()

        const errors = this.validate()
        console.log(errors)
        this.setState({errors: errors || {} })
        if(errors) return; 

        this.doSubmit();
        
    }

    validateProperty = ({name, value}) => {
        const obj = { [name]: value}
        const schema = { [name]: this.schema[name] }

        const {error} = Joi.validate(obj, schema)
        
        return error ? error.details[0].message : null 
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMassage = this.validateProperty(input)    
        
        if(errorMassage) errors[input.name] = errorMassage
        else delete errors[input.name] 

        const data ={...this.state.data}
        data[input.name] = input.value
        this.setState({data, errors }); 
    }

    renderInput(name, label, type='text') {
        const {data, errors} =this.state
        return(
            <Input 
                type={type}
                name={name}
                value={data[name]} 
                label={label} 
                error={errors[name]}
                onChange={this.handleChange} />
        );
    }

    renderSelect(name, label, options) {
        const {data, errors} =this.state
        return(
            <Select 
                name={name}
                value={data[name]} 
                label={label} 
                options={options}
                error={errors[name]}
                onChange={this.handleChange} />
        );
    }
    
    renderButton(label){
        return <button disabled={this.validate()} className='btn btn-primary mt-3'>{label}</button>
    }
}
 
export default Form;