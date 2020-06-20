import React, { useState, useEffect } from 'react';

import EmployeeList from '../../components/employeelist';
import AddEmployee from '../../components/addEmployee';

import './index.css';

function HomePage() {

    return <div className="page dashboardpage">
        <EmployeeList />
        <AddEmployee />
    </div>
}

export default HomePage;