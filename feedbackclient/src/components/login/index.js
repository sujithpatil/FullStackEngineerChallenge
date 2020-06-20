import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';
import Input from '../commons/Input';
import Button from '../commons/Button';

function HomePage() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = () => {
        fetch(`http://localhost:8200/api/authenticate/login`, {
            method: 'POST',
            body: JSON.stringify( {
                email,
                id: password
            } ),
            headers : {
                'Content-Type': 'application/json'
            }
        })
            .then( response => response.json() )
            .then( data => {
                if( data.status !== 404 ) {
                    if( data.isAdmin ) {
                        history.push('dashboard');
                    } else {
                        history.push('profile');
                    }
                } else {
                    alert('Invalid credentials');
                }   
            } )
            .catch( err => {
                console.error(err);
            })
        
    }

    const onChangeHandler = ( type, value ) => {
        if ( type === 'email' ) {
            setEmail(value);
        } else if ( type === 'id' ) {
            setPassword(value);
        }
    }

    return <div className="component login">
        <h2 className="login-heading"> LOGIN </h2>
        <Input 
            type = "text"
            label = "Email Id"
            name = "email"
            required = { true }
            value = { email }
            onChange = { onChangeHandler }
        />
        <Input 
            type = "password"
            label = "Password"
            name = "id"
            required = { true }
            value = { password }
            onChange = { onChangeHandler }
        />
        <Button
            onClick = { onSubmitHandler }
        >
            LOG IN
        </Button>
    </div>
}

export default HomePage;