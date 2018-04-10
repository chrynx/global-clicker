import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => {
    let classList = [classes.Backdrop, classes.Open].join(' ');
    if (!props.toggle) {
        classList = [classes.Backdrop, classes.Close].join(' ');
    }
    return (
        <div
        className={classList}
        onClick={props.closeNav}>
        </div>
    );
};

export default backdrop;