import React from 'react';

import '../../scss/components/_button.scss';

function Button({label, size, color, handleSubmit}){
    return(
        <button size={size} color={color} onSubmit={handleSubmit}>{label}</button>
    )
}

export default Button;