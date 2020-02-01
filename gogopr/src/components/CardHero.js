import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const CardHero = (props) => {
    console.log(props.data);
    return (
        <div className="heroCard">
            <h1 className="heroName" >{props.name}</h1>
            <img className="heroPic" src={props.photo} alt='missing' />
            <div className="appearance" >
                <h2 className="heroCardTitle" >Appearance</h2>
                <p>Gender - {props.data.data.gender}</p>
                <p>Race - {props.data.data.race}</p>
                <p>Eye-Color - {props.data.data.eye_color}</p>
                <p>Height - {props.data.data.height}</p>
            </div>
            <div className="skills" >
                <h2 className="heroCardTitle" >Skills</h2>
                <p>Combat - {props.data.data.combat}</p>
                <p>Intelligence - {props.data.data.intelligence}</p>
                <p>Strength - {props.data.data.strength}</p>
                <p>Speed - {props.data.data.speed}</p>
            </div>
            <div className="teams" >
                <h2 className="heroCardTitle" >Affiliations</h2>
                <p>Base - {props.data.data.base}</p>
                <p>Teams - {props.data.data.team}</p>
                <p>Employment - {props.data.data.work}</p>
            </div>

            <Link to={"/heros"}>
                <button className="heroBack" >Back</button>
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

export default connect(mapStateToProps)(CardHero);