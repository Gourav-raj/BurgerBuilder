import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
<style>{`.Logo {
    background-color: white;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
}

.Logo img {
    height: 100%;
}`}</style>
    </div>
);

export default logo;