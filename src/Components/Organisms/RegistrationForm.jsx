import React, {useState} from 'react';

import Button from '../Atoms/Button';
import Input from '../Atoms/Input';
// import Form from '../Molecules/Form';

function RegistrationForm(){
    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const {firstName, lastName, email} = inputValue;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

    const handleSubmit = () => {
        alert('Submitted');
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" type='text' />
            <Input name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" type='text' />
            <Input name="email" value={email} onChange={handleChange} placeholder="Email" type='text' />
            <Button />
        </form>
    )
}

export default RegistrationForm;