import React,{useState, useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {fetchCountries} from '../ducks/countries';
import {Input, Select, Card, Row, Col, Typography, List} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import {getCountry} from '../ducks/country';
import CountUp from "react-countup";



function CountryPicker(){

    const[country,setCountry] = useState('');

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(fetchCountries());

    },[])

    const countries = useSelector((store)=>{

        return store.countries.countries;

    })

    const data = useSelector((state)=>{

        return state.country.indivisualCountries;

    })

    const stateData = useSelector((state)=>{

        return state.country.indivisualState;

    })

    console.log(stateData)

    return( 
        <>
    <h1 style={{marginTop:'30px'}}> Choose a country from this list: </h1>
        <Input.Group >
      <Select style={{width:"30%"}} placeholder="Select a country" onChange={(value)=>{

          dispatch(getCountry(value))
          setCountry(value)
          
      }}>
        {countries.map((item,index)=>{

        return <Select.Option value={item.name} key={item.name}> {item.name} </Select.Option>

        })}
      </Select>
      </Input.Group>

      <Typography.Title style={{textAlign:'center', marginTop:'30px'}}> Current country: {country} </Typography.Title>

    {Object.keys(data).length && Object.keys(stateData).length ? (
    <>
    <Row justify="center" align="center" gutter="40" style={{marginTop:"30px"}}>

<Col span={{lg:6,sm:24}} >

<Card title="Confirmed Cases" bordered={false} hoverable
style={{ width: "100%" }}
>

    <p className="text">Confirmed cases of Covid-19: </p>

    <h2 className="gradient-multiline"><span><CountUp

start={0}
end={data.confirmed.value}
separator=","
duration={3}
delay={0.5}

/></span></h2>

<p>Last Updated: {new Date(data.lastUpdate).toUTCString()} </p>
</Card>
</Col>

<Col span={{lg:6,sm:24}}>

<Card title="Total Recovered" bordered={false} hoverable
style={{ width: "100%" }}>
    <p className="text">Total Recovered from Covid-19: </p>

    <h2 className="gradient-multiline"><span><CountUp
start={0}
end={data.recovered.value}
separator=","
duration={3}
delay={0.5}
/></span></h2>

<p> Last Updated: {new Date(data.lastUpdate).toUTCString()} </p>
</Card>
</Col>

<Col span={{lg:6,sm:24}} >

<Card title="Total Deaths" bordered={false} hoverable
style={{ width: "100%" }}>

    <p className="text"> Total Deaths due to Covid-19: </p>
    <h2 className="gradient-multiline"><span><CountUp
start={0}
end={data.deaths.value}
duration={3}
separator=","
delay={0.5}
/></span></h2>

<p>Last Updated: {new Date(data.lastUpdate).toUTCString()} </p>
</Card>
</Col>

</Row> 

<Typography.Title style={{marginTop:"20px"}}> State/Province wise breakdown: </Typography.Title>

<Row span={{lg:6,sm:24}} style={{width:"70%",border: "1px solid grey", marginTop:"20px", textAlign:'center'}} >
        <Col span={5} > <b>Province/State</b> </Col>
        {/* <Col span={2}> </Col> */}
        <Col span={2}> <b>Active</b> </Col>
        {/* <Col span={2}>  </Col> */}
        <Col span={2}> <b> Confirmed </b> </Col>
        {/* <Col span={2}> </Col> */}
        <Col span={2}> <b> Recovered </b> </Col>
        {/* <Col span={2}> </Col> */}
        <Col span={2}> <b> Deaths </b> </Col>
        <Col span={8}> <b> Incident Rate </b> </Col>
       
        </Row>
        <List
    itemLayout="horizontal"
    dataSource={stateData}
    renderItem={item => (
      <List.Item>
          
    <Row style={{width:"70%",border: "1px solid grey", textAlign:'center'}} >

    <Col span={5}><Typography><CaretRightOutlined />{item.provinceState}</Typography></Col>
    {/* <Col span={2}> </Col> */}
    <Col span={2}><Typography> {item.active} </Typography></Col>
    {/* <Col span={2}>  </Col> */}
    <Col span={2}><Typography> {item.confirmed} </Typography></Col>
    {/* <Col span={2}> </Col> */}
    <Col span={2}><Typography> {item.recovered} </Typography> </Col>
    {/* <Col span={2}> </Col> */}
    <Col span={2}><Typography> {item.deaths} </Typography> </Col>
    <Col span={8}><Typography> {item.incidentRate} </Typography> </Col>
        </Row>
      </List.Item>
      )}
      /> 
      </>


) : null }

</>
)
}

export default CountryPicker;