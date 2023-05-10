import React from "react";

import classes from './button.module.css'

const Button = (props) =>{
    return <button 
    type={props.type || 'button'} 
    className={`${classes.button} ${props.className}`}
    onClick={props.onClick}
    >
        {props.children}
    </button>
}

export default Button;