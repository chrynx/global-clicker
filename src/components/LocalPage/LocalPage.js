import React from 'react';
import classes from './LocalPage.css';

// components
import Score from '../SharedComponents/Score/Score';
import Button from '../LocalPage/Button/Button';

const localpage = (props) => (
    <div className={classes.LocalPage}>
        <div>
            <h1>Score</h1>
            <Score>{props.local}</Score>
        </div>
        <div>
            <Button clicked={props.clicked}/>
        </div>
    </div>
);
export default localpage;