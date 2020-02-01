import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CardVillian = (props) => {

    return (
        <div className="vCard">
            <h1 className="vName" >{props.name}</h1>
            <img className="vPic" src={props.photo} alt='missing' />
            <div className="vAppearance" >
                <h2 className="vCardTitle" >Appearance</h2>
                <p>Gender - {props.data.data.gender}</p>
                <p>Race - {props.data.data.race}</p>
                <p>Eye-Color - {props.data.data.eye_color}</p>
                <p>Height - {props.data.data.height}</p>
            </div>
            <div className="vSkills" >
                <h2 className="vCardTitle" >Skills</h2>
                <p>Combat - {props.data.data.combat}</p>
                <p>Intelligence - {props.data.data.intelligence}</p>
                <p>Strength - {props.data.data.strength}</p>
                <p>Speed - {props.data.data.speed}</p>
            </div>
            <div className="vTeams" >
                <h2 className="vCardTitle" >Affiliations</h2>
                <p>Base - {props.data.data.base}</p>
                <p>Teams - {props.data.data.team}</p>
                <p>Employment - {props.data.data.work}</p>
            </div>
            <Link to={"/villians"}>
                <button className="vBack" >Back</button>
            </Link>
        </div>
    )

};

function mapStateToProps(state) {
    return {
        name: state.data.name,
        photo: state.data.photo,
        data: state,
        stats: state.data.combat
    }
}

export default connect(mapStateToProps)(CardVillian);