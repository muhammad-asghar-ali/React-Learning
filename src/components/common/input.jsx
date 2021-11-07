import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return ( 
        <div className='group-form'>
            <label htmlFor={name} className='mt-3'>{label}</label>
            <input 
                {...rest} 
                name={name}
                id={name}
                className='form-control'>
            </input>
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
     );
}
 
export default Input;