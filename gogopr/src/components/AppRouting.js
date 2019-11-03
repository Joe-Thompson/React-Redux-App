import React from 'react';
import { Route } from 'react-router-dom';
import CardHero from './CardHero';
import Heros from './Heros';
import CardVillian from "./CardVillian";
import Villians from "./Villians";
import Title from "./Title";

const AppRouting = () => {
    return (
        <div>
            <Route exact path='/' component={Title} />
            <Route exact path="/heroData" component={CardHero} />
            <Route path='/heros' component={Heros} />
            <Route exact path="/villianData" component={CardVillian} />
            <Route exact path='/villians' component={Villians} />
            {/*<Route exact path='/profile/:name' render={props => <UserPage {...props} />} />*/}
        </div>
    )
};

export default AppRouting;