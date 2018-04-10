import React from 'react';
import classes from './Button.css';

const button = (props) => {
    return (
        <div
            id="scoreButton"
            className={classes.Button}
            onClick={props.clicked}>
        </div>
    );


}
export default button;