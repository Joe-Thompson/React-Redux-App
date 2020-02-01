import axios from "axios";

export const GET_RANGER_START = "GET_RANGER_START";
export const GET_RANGER_SUCCESS = "GET_RANGER_SUCCESS";
export const GET_RANGER_ERROR = "GET_RANGER_ERROR";
export const CLEAR_STATE = "CLEAR_STATE";

export function getRangers(charID) {
    const id = charID;

    return dispatch  => {
console.log('hey');
        dispatch({ type: GET_RANGER_START });

        axios
            .get(`https://superheroapi.com/api/2943870255677440/${id}`)
            .then(res => {
                console.log(res.data);
                dispatch({ type: GET_RANGER_SUCCESS, payload: {
                    name: res.data.name,
                    photo: res.data.image.url,
                    gender: res.data.appearance.gender,
                    eye_color: res.data.appearance["eye-color"],
                    height: res.data.appearance.height[0],
                    race: res.data.appearance.race,
                    combat: res.data.powerstats.combat,
                    intelligence: res.data.powerstats.intelligence,
                    speed: res.data.powerstats.speed,
                    strength: res.data.powerstats.strength,
                    base: res.data.work.base,
                    work: res.data.work.occupation,
                    team: res.data.connections["group-affiliation"]
                    }});
            })
            .catch(err => {
                dispatch({ type: GET_RANGER_ERROR, payload: err });
            });
    };
}