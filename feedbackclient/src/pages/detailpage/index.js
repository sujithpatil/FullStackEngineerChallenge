import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailComponent from '../../components/detail';
import ReviewComponent from '../../components/reviews';
import ReviewingComponent from '../../components/reviewing';

import './index.css';

function EditPage() {

    const params = useParams();
    const [user, setUser] = useState({}); 

    useEffect(()=>{
        fetch(`http://localhost:8200/api/admin/employees/${params.id}`)
            .then( response => response.json() )
            .then( data => {
                setUser( data )
            } );
    }, [ params.id ]);

    return <div className="page detailpage">
        <DetailComponent { ...user }/>        
        <ReviewingComponent { ...user } />
        <ReviewComponent />
    </div>
}

export default EditPage;