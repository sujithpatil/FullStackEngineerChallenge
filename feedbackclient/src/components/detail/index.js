import React from 'react';

import './index.css';

function DetailComponent( props ) {   

    return <div className="component detail">
        <h2 className="heading"> Employee Information </h2>
        <div className="emp-info">
            <div className="info"> 
                <span className="emp-label">Employee Name</span>
                <span className="value"> { props.name } </span>
            </div>
            <div className="info"> 
                <span className="emp-label">Department</span>
                <span className="value"> { props.department } </span>
            </div>
            <div className="info"> 
                <span className="emp-label">Employee Id</span>
                <span className="value"> { props.id } </span>
            </div>
            <div className="info"> 
                <span className="emp-label">Employee Email</span>
                <span className="value"> { props.email } </span>
            </div>
        </div>
    </div>
}

export default DetailComponent;