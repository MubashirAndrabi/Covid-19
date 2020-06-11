import Axios from 'axios';

const FETCH_COUNTRY ='app/countries/FETCH_COUNTRY';
const FETCH_STATE ='app/country/FETCH_STATE';

export function fetchCountry(value){
    return{type:FETCH_COUNTRY , value}
}

export function fetchState(value){
    return{type:FETCH_STATE, value}
}


export default function reducer(state={indivisualCountries:[], indivisualState:[]}, action){
    switch(action.type){
            case FETCH_COUNTRY:
                return {...state, indivisualCountries:action.value}
                case FETCH_STATE:
                    return {...state, indivisualState:action.value}
            default:
                return state;
    }

}


export function getCountry(value){
    return (dispatch, getState)=>{

        Axios.get('https://covid19.mathdro.id/api/countries/'+value).then((response)=>{

        const countryData = response.data;
        const stateData = response.data.confirmed.detail;

        dispatch(fetchCountry(countryData));
        dispatch(getStates(stateData));

        }).catch((error)=>{

            console.log(error)

        })

    }
}

export function getStates(stateData){
    return (dispatch, getState)=>{

        Axios.get(stateData).then((response)=>{

            const value = response.data.map((item)=>{

                return item;

            })

            dispatch(fetchState(value));

            

        }).catch((error)=>{

            console.log(error)

        })

    }

}

