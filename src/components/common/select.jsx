import React from 'react';

const Select = ({name, label, error, options, ...rest}) => {
    return ( 
        <div className='group-form'>
            <label htmlFor={name} className='mt-3'>{label}</label><br />
            <select name={name} id={name} {...rest} className='form=contorl'>
                <option value='' />
                {options.map(option => (
                    <option key ={option._id} value={option._id} > {option.name} </option> 
                ))}

            </select>
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
     );
}
 
export default Select;