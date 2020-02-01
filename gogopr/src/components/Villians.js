import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRangers } from "../actions/Actions";


function Villians({ getRangers, history }) {
console.log(history);
    const changeHandler = (event) => {
        const id = event.target.value;
        getRangers(id);
    };

    return (
        <div className="villians">
            <h1 className="vTitle" >M a g n e t o    W a s    R i g h t  ...</h1>
            <Link to={"/villianData"}>
                <div className='vBtnHolder' >
                <button className="vButton" value={35} onClick={changeHandler}>Apocalypse</button>
                <button className="vButton" value={40} onClick={changeHandler}>Archangle</button>
                <button className="vButton" value={480} onClick={changeHandler}>Mystique</button>
                <button className="vButton" value={460} onClick={changeHandler}>Mister Sinister</button>
                <button className="vButton" value={423} onClick={changeHandler}>Magento</button>
                <button className="vButton" value={374} onClick={changeHandler}>Juggernaut</button>
                <button className="vButton" value={500} onClick={changeHandler}>Omega Red</button>
                <button className="vButton" value={570} onClick={changeHandler}>Sabre Tooth</button>
                </div>
                </Link>
            <Link to='/'>
                <button className="nav" >Back</button>
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
)(Villians);