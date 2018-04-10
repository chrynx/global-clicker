import React from 'react';
import classes from './Homepage.css';

// components
import Score from '../SharedComponents/Score/Score';

const homepage = (props) => (
    <div className={classes.Homepage}>
        <div>
            <h1>Local Score</h1>
            <Score>{props.local}</Score>
        </div>
        <div>
            <h1>Global Score</h1>
            <Score>{props.global}</Score>
        </div>
    </div>
);
export default homepage;