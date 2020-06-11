import Axios from "axios";

const GET_DATA = 'app/coronaData/GET_DATA';

export function getData(values){
    return{type:GET_DATA , values }
}

export default function reducer(state={overallValues:{}},action){
    switch(action.type){
        case GET_DATA:
            return {...state, overallValues:action.values};
            default:
                return state;
    }
}


export function fetchData(){
    return (dispatch,getState)=>{

        Axios.get("https://covid19.mathdro.id/api").then((response)=>{

        const values = response.data;
        dispatch(getData(values))

        }).catch((error)=>{

            console.log(error)

        })

        

    }
}
