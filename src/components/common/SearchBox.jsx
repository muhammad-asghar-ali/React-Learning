import React from 'react';

const SreachBox = (value, onChange) => {
    return (
        <input
            type='text'
            name='query'
            className='form-control my-3'
            placeholder='Search...'
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
        />
    );
}

export default SreachBox