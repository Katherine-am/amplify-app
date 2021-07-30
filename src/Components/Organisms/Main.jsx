import React from 'react';

import Card from '../Molecules/Card';
import RegistrationForm from './RegistrationForm';

function Main() {
    return(
        <div>
            <p>Sift & Flood</p>
            <div>
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <RegistrationForm />
            </div>
        </div>
    )
}

export default Main;