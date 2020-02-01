import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRangers } from "../actions/Actions";


function Heros({ getRangers }) {

    const changeHandler = (event) => {
        const id = event.target.value;
        getRangers(id);
    };

    return (
        <div className="heros">
            <h1 className="hTitle" > Oppression is no excuse for vengeance</h1>
            <Link to={"/heroData"}>
            <div className="hBtnHolder">
            <button className="hbtn" value={213} onClick={changeHandler}>Deadpool</button>
            <button className="hbtn" value={274} onClick={changeHandler}>Gambit</button>
            <button className="hbtn" value={75} onClick={changeHandler}>Beast</button>
            <button className="hbtn" value={185} onClick={changeHandler}>Colossus</button>
            <button className="hbtn" value={356} onClick={changeHandler}>Jean Gray</button>
            <button className="hbtn" value={490} onClick={changeHandler}>Night Crawler</button>
            <button className="hbtn" value={527} onClick={changeHandler}>Professor X</button>
            <button className="hbtn" value={567} onClick={changeHandler}>Rogue</button>
            <button className="hbtn" value={717} onClick={changeHandler}>Wolverine</button>
            <button className="hbtn" value={517} onClick={changeHandler}>Phoenix</button>
            <button className="hbtn" value={529} onClick={changeHandler}>Psylocke</button>
            <button className="hbtn" value={92} onClick={changeHandler}>Bishop</button>
            </div>
            </Link>
            <Link to='/'>
                <button className="hnav">Back</button>
            </Link>
            </div>
    );
}

const mapDispatchToProps = {
    getRangers
};

export default connect(
    null,
    mapDispatchToProps
)(Heros);