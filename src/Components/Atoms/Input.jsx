import React from 'react';

const Input = ({name, value, placeholder, onChange, type}) => {

    return(
        <div>
            <input name={name} value={value} placeholder={placeholder} onChange={onChange} type={type} />
        </div>
    )
}

export default Input;