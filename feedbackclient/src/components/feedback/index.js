import React, { useState } from 'react';

import Button from '../commons/Button';

function Feedback( props ) {

    const [feedback, setFeedback] = useState('');
    const { name, reviewerName, id } = props;
    
    const submitFeedback = () => {
        const reviewText = feedback;
        const reviewId = "review-" + Math.floor(Math.random() * 5);
        const feedbackBody = {
            reviewText,
            reviewId,
            reviewerName,
            id
        };
        fetch('http://localhost:8200/api/feedbacks',{
            method: 'POST',
            body: JSON.stringify(feedbackBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( data => {
            console.log( 'Successfully reviewed' )
        });
    };

    return <div className="reviewee">
            <p className="reviwee-name"> { name } </p>
            <textarea rows={5} onChange={ ( event ) => setFeedback(event.target.value) } value={ feedback } >
            </textarea>
            <Button onClick={ submitFeedback } style={{ display: 'inline-block', width: '200px' }}>Submit</Button>
        </div>;
}

export default Feedback;