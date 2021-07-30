import React from 'react';

function Button({handleSubmit}){
    return(
        <button onSubmit={handleSubmit}>Button</button>
    )
}

export default Button;