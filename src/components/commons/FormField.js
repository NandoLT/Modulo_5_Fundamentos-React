import React from 'react';
import classNames from 'classnames';

import './FormField.css';

function FormField({ className, label,type, ...props }) {
    console.log(type);
    // return (
        switch(type){
            case 'select':
                return (
                    <label>
                    Pick your favorite flavor:
                    <select value="lima">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>
                )
            default:
                return (
                    <div
                        className={classNames(
                        'formField',
                        { 'formField--focused': false },
                        className
                    )}
                    >
                        <label className="formField-label">
                            <span>{label}</span>
                            <input
                                className="formField-input"
                                autoComplete="off"
                                type={type}
                                {...props}
                            ></input>
                        </label>
                    </div>
                )
        };
};

export default FormField;