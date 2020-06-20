import React from 'react';

import './index.css';

function Input( props ) {
    
    const { type, label, name, required, onChange, disabled = false, value } = props;

    const onChangeHandler = ( event ) => {
        onChange && onChange(name, event.target.value);
    }

    return <div className="input-container">
        <div className="input-holder">
            <input
                type = { type }
                className = "input"
                name = { name }
                id = { name }
                value = { value }
                required = { required }
                onChange = { onChangeHandler }
                disabled = { disabled }
            />
            <label htmlFor={name} className="label" > { label } </label>
        </div>
    </div>
}

export default Input;