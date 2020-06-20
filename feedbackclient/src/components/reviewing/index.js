import React, { useState, useEffect } from 'react';
import './index.css';

function Reviewing( props ) {

    const { id, department, email, name, reviewing = [] } = props;
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8200/api/admin/employees')
            .then( response => response.json() )
            .then( data => setEmployees( data ) );
    }, []);

    const yetTo = employees.map( employee => <option value={JSON.stringify({id:employee.id, name: employee.name})}> { employee.name } </option>);

    const markup = reviewing.map( feedback => {
        const { reviewed, name } = feedback;
        return <div className={`reportee ${ reviewed ? 'disabled' : '' } `}>
            <span className="rep-name"> { name } </span>
            { !reviewed &&
                <span className="delete"></span>
            }
        </div>
    } );

    const addToReviewList = ( event ) => {
        const body = {
            name,
            id,
            email,
            department,
            reviewing: [...reviewing, JSON.parse( event.target.value )]
        };
        fetch(`http://localhost:8200/api/admin/employees/${id}`,{
            method: 'PUT',
            body : JSON.stringify( body ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( console.log )
        .catch( console.error )
    }

    return <div className="component reviewing">
            <h3 className="review-heading">
                Reviewing 
            </h3>
            <div className="reportee-container">
                <div className="assigned">
                    <p className="sub-heading">Assigned</p>
                    { markup }
                </div>
                <div className="yet-to">
                <p className="sub-heading">Assign</p>
                    <select className="assigne" onChange = { addToReviewList } >
                        <option> Select </option>
                        { yetTo }
                    </select>
                </div>
            </div>
    </div>
}

export default Reviewing;