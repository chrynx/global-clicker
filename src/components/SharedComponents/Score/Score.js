import React from 'react';
import classes from './Score.css';

const score = (props) => (
    <div className={classes.Score}>
        {props.children}
    </div>
);

export default score;