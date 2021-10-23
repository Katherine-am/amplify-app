import React from 'react';

const Input = ({label, name, value, placeholder, onChange, type}) => {

    return(
        <div>
            <label>{label}: </label><input name={name} value={value} placeholder={placeholder} onChange={onChange} type={type} />
        </div>
    )
}

export default Input;