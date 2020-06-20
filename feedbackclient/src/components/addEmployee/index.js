import React, { useState } from 'react';

import Input from '../commons/Input';
import Button from '../commons/Button';

import './index.css';

function AddEmployee( props ) {

    const [showForm, setShowForm] = useState(false);
    const [user, setUser] = useState({});

    const onChangeHandler = (type, value) => {
        setUser({
            ...user,
            [type]: value
        });
    }

    const onSubmitHandler = () => {
        fetch('http://localhost:8200/api/admin/employees',{
            method: 'POST',
            body: JSON.stringify( user ),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then( _ => {
            setShowForm( false );
        } )
        .catch( _ => console.log('Error occured while adding employee') );
    }

    return <React.Fragment>
        <div className='add-employee' onClick={() => setShowForm(true)}>
            
        </div>
        {
            showForm && <div className="add-form-container">
                    <div className="close-container" onClick={ () => setShowForm(false) }>
                        <span className="close"></span>
                    </div>
                    <div className="add-form">
                        <h2 className="heading"> ADD EMPLOYEE </h2>
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
                            label = "Email"
                            name = "email"
                            required = { true }
                            value = { user.email }
                            onChange = { onChangeHandler }
                        />
                        <Input 
                            type = "text"
                            label = "Employee Id"
                            name = "id"
                            required = { true }
                            value = { user.password }
                            onChange = { onChangeHandler }
                        />
                        <Input 
                            type = "text"
                            label = "Department"
                            name = "department"
                            required = { true }
                            value = { user.department }
                            onChange = { onChangeHandler }
                        />
                        <Button
                            onClick = { onSubmitHandler }
                        > ADD
                        </Button>
                    </div>
                </div>
        }
        </React.Fragment>
}

export default AddEmployee;