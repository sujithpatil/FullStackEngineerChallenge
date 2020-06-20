import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

function Employee( props ) {
    
    const history = useHistory();

    const { name, email, id, updateHandler } = props;

    const editHandler = (  ) => {
        history.push(`/edit/${id}`)
    }

    const detailHandler = () => {
        history.push(`/detail/${id}`);
    }

    const deleteHandler = () => {
        fetch(`http://localhost:8200/api/admin/employees/${id}`, {
            method: "DELETE"
        })
        .then( response => response.json() )
        .then( _ => {
            updateHandler();
        } )
        .catch( error => {
            console.error('Some issue occured');
        })
    }

    return <div className="component employee">
        <p className="name" onClick={ detailHandler } > { name } </p>    
        <p className="email" > { email } </p>    
        <p className="id" > { id } </p>
        <p className="update" onClick={ editHandler } > </p>
        <p className="remove" onClick={ deleteHandler } > </p>
    </div>
}

export default Employee;