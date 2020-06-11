import Axios from 'axios';

const DAILY_DATA = 'app/dailyData/DAILY_DATA';


export function getDailyData(value){

    return{type:DAILY_DATA, value}

}

export default function reducer(state={dailyData:[]},action){

    switch(action.type){
        case DAILY_DATA:
            return {...state, dailyData:action.value}
            default:
                return state;
    }

}

export function fetchDailyData(){

    return (dispatch,getState)=>{

        Axios.get("https://covid19.mathdro.id/api/daily").then((response)=>{

        const value = response.data;

        dispatch(getDailyData(value));

        }).catch((error)=>{

            console.log(error)

        })


    }
}

