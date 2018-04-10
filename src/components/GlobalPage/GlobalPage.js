import React, { Component } from 'react';
import classes from './GlobalPage.css';

// components
import Score from '../SharedComponents/Score/Score';

class GlobalPage extends Component {
    render() {
        return (
            <div className={classes.GlobalPage}>
                <div>
                    <h1>Local Score</h1>
                    <Score>{this.props.local}</Score>
                </div>
                <div>
                    <h1>Leaderboard</h1>
                    <Score>{this.props.global}</Score>
                </div>
            </div>
        );
    }

};
export default GlobalPage;