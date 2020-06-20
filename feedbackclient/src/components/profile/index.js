import React, { useEffect, useState } from 'react';

import Feedback from '../feedback';

import './index.css';

function Profile(props) {

    const[profile, setProfile] = useState({
        reviewing: []
    });

    useEffect(() => {
        
        fetch('http://localhost:8200/api/authenticate/profile')
                .then( response => response.json() )
                .then( data => {
                    setProfile( data );
                })
    }, []);


    const toReview = profile.reviewing.map( item => <Feedback {...item} reviewerName={ profile.name }/> );

    return <div className="component profile">
        <div className="container">
            { toReview }
        </div>
    </div>
}

export default Profile;