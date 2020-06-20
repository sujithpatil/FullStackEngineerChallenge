import React, { useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import Input from '../commons/Input';
import Button from '../commons/Button';

import './index.css';


function EditComponent() {
    const params = useParams();
    const history = useHistory();

    const [user, setUser] = useState({});

    const onChangeHandler = ( type, value ) => {
        setUser({
            ...user,
            [type]: value
        });
    }

    const onSubmitHandler = () => {
            fetch(`http://localhost:8200/api/admin/employees/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify( user ),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then( response => response.json() )
            .then( _ => {
                history.goBack();
            });
    }

    useEffect( () => {
        fetch(`http://localhost:8200/api/admin/employees/${params.id}`)
            .then( response => response.json() )
            .then( data => {
                setUser( data );
            });
    }, [ params.id ]);

    return <div className="component edit">
        <Input 
            type = "text"
            label = "Full Name"
            name = "name"
            required = { true }
            value = { user.name }
            onChange = { onChangeHandler }
        />
        <Input 
            type = "text"
            label = "Email Id"
            name = "email"
            required = { true }
            value = { user.email }
            disabled = { true }
            onChange = { onChangeHandler }
        />
        <Input 
            type = "text"
            label = "User Id"
            name = "id"
            required = { true }
            value = { user.id }
            disabled = { true }
            onChange = { onChangeHandler }
        />
        <Button
            onClick = { onSubmitHandler }
        > EDIT
        </Button>
    </div>
}

export default EditComponent;