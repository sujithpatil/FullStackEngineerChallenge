import React from 'react';

import './index.css';

function Input( props ) {
    const { children, onClick } = props;
    return <div className="input-container">
        <div className="input-holder">
            <button style={ {...props.style} } className="button" onClick = { onClick }>
                { children }
            </button>
        </div>
    </div>
}

export default Input;