import React,{useEffect} from 'react';

import {fetchData} from '../ducks/coronaData';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import { Card, Row, Col } from 'antd';
import CountUp from "react-countup";
import './CoronaCard.css'

function CoronaCard(){

    const dispatch = useDispatch();

    const data = useSelector((state)=>{

        return state.coronaData.overallValues;

    })
    console.log(data.confirmed && data.confirmed.value)

    useEffect(()=>{

        if(!Object.keys(data).length){

            dispatch(fetchData())

        }         
            
    },[])


    // const{confirmed,recovered,deaths,lastUpdate} = data;

    return( Object.keys(data).length ? ( <Row justify="center" align="center" gutter="40" style={{marginTop:"30px"}}>

<Col span={{lg:6,sm:24}} style={{marginBottom:"20px"}}>

<Card title="Confirmed Cases" bordered={false} hoverable
style={{ width: "100%" }}
>

    <p className="text">Confirmed cases of Covid-19: </p>

    <h2 class="gradient-multiline"><span><CountUp

start={0}
end={data.confirmed.value}
separator=","
duration={3}
delay={0.5}

/></span></h2>

<p>Last Updated: {new Date(data.lastUpdate).toUTCString()}</p>
</Card>
</Col>


<Col span={{lg:6,sm:24}} style={{marginBottom:"20px"}}>

<Card title="Total Recovered" bordered={false} hoverable
style={{ width: "100%" }}>
    <p className="text">Total Recovered from Covid-19: </p>

    <h2 class="gradient-multiline"><span><CountUp
start={0}
end={data.recovered.value}
separator=","
duration={3}
delay={0.5}
/></span></h2>

<p> Last Updated: {new Date(data.lastUpdate).toUTCString()} </p>
</Card>
</Col>



<Col span={{lg:6,sm:24}}>

<Card title="Total Deaths" bordered={false} hoverable
style={{ width: "100%" }}>

    <p className="text"> Total Deaths due to Covid-19: </p>
    <h2 class="gradient-multiline"><span><CountUp
start={0}
end={data.deaths.value}
duration={3}
separator=","
delay={0.5}
/></span></h2>

<p>Last Updated: {new Date(data.lastUpdate).toUTCString()}</p>
</Card>
</Col>



</Row>  ) : "Loading..."

    )

}

export default CoronaCard;