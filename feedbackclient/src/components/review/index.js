import React, { useState, useRef } from 'react';

import './index.css';

function Review( props ) {
    const { reviewerName, reviewText, reviewId } = props;
    const ref = useRef();

    const[isEditing, setIsEditing] = useState( false );

    const handleOnSubmit = () => {
        const reviewText = ref.current.innerText;
        const obj = {
            reviewText
        };
        fetch(`http://localhost:8200/api/feedbacks/${reviewId}`,{
            method: 'PUT',
            body: JSON.stringify( obj ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( _ => {
            setIsEditing( false );
        } );
    }

    return <div className="component review">
        <div className="operations">
            { isEditing
            ? <span className="icon icon-submit" onClick = { handleOnSubmit } ></span>
            : <span className="icon icon-edit" onClick={ () => setIsEditing( true ) }></span>
            }
        </div>
        <div className="reviewer-name">
            { reviewerName }
        </div>
        <div className="body" ref = { ref } contentEditable = { isEditing } >
            { reviewText }
        </div>
    </div>
}

export default Review;