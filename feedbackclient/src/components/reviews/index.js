import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Review from '../review';
import './index.css';

function Reviews() {

    const params = useParams();
    const [reviews, setReviews] = useState([]); 
    const reviewMarkup = reviews.map( review => <Review { ...review } /> );

    useEffect(() => {
        fetch( `http://localhost:8200/api/feedbacks/${params.id}` )
            .then( response => response.json() )
            .then( data => setReviews(data) );
    },[ params.id ]);

    return <div className="component reviews">
        <h2 className="review-heading"> Performance Review </h2>
        <div className="reviews-container">
            { reviewMarkup }
        </div>
    </div>
}

export default Reviews;