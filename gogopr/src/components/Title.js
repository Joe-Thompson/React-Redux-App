import React from 'react';
import { Link } from 'react-router-dom';



function Title () {

    return (
        <div className="App">
            <span className="header">
            <Link to='/villians'>
                <h1 className="vEnter" >The Rise of The Superior Race</h1>
            </Link>
            <Link to='/heros'>
                <h1 className="hEnter" >The Unity of All</h1>
            </Link>
            </span>
            <h1 className="choice" >Which Will You Choose...</h1>
            </div>
    );
}

export default Title;