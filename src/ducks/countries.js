import Axios from 'axios';
const COUNTRY_LIST = 'app/countries/COUNTRY_LIST';



export function getCountryList(value){
    return{type:COUNTRY_LIST, value}
}

export default function reducer(state={countries:[], country:[]}, action){
    switch(action.type){
        case COUNTRY_LIST:
            return {...state, countries:action.value}
            default:
                return state;
    }

}


export function fetchCountries(){
    return (dispatch,getState)=>{

        Axios.get('https://covid19.mathdro.id/api/countries').then((response)=>{

        const value = response.data.countries.map((country)=>{

            return country;

        })

        dispatch(getCountryList(value));

        }).catch((error)=>{

            console.log(error)

        })


    }
}

