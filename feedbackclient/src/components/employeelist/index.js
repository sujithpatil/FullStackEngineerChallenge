import React, { useEffect, useState } from 'react';

import Employee from "../employee";

import './index.css';

const LABELS = {
    name : 'Full Name',
    email: 'Email ID',
    id: 'Employee ID'
};

function EmployeeList() {

    const [employeeList, setEmployeeList] = useState([]);
    
    const getAllEmployees = () => {
        fetch('http://localhost:8200/api/admin/employees')
            .then( response => response.json() )
            .then( data => {
                setEmployeeList( [ LABELS ,...data ] );
            })
            .catch(err => {
                console.log( err );
            })
    }

    const employeeMarkup = employeeList.map( employee => <Employee key={ employee.id } { ...employee } updateHandler = { getAllEmployees } />  );

    useEffect(()=>{
        getAllEmployees()
    },[]);

    return <div className="component list">
        { employeeMarkup }
    </div>
}

export default EmployeeList;