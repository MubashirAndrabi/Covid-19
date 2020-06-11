import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {fetchDailyData} from '../ducks/dailyData';

import {Line, Bar} from 'react-chartjs-2';
import './coronaChart.css'
function CoronaChart(){

    const[state,setState] = useState({});

    const dispatch = useDispatch();

   const dailyData = useSelector((store)=>{

    return store.dailyData.dailyData

    })

    console.log(dailyData)

    const date = dailyData.map((item)=>{

        return item.reportDate

    })

    console.log(date)

    useEffect(()=>{

        dispatch(fetchDailyData())


    },[])

    // const lineChart = ( 
    //     dailyData.length ? (
    //     <Line
    //     data = {{
    //         labels: date,
    //         dataSets:[{
    //             data:dailyData.map((item)=>item.confirmed.total),
    //             label: 'Infected',
    //             borderColor: '#3333ff',
    //             fill: true,
    //         }, {
    //             data:dailyData.map((item)=>item.deaths.total),
    //             label: 'Deaths',
    //             borderColor: 'red',
    //             backgroundColor: 'rgba(255, 0, 0, 0.5)',
    //             fill: true,
    //         },
    //     ],
    //     }}
    //     /> 
    //     ) : null
    // );
    const lineChart = (
        dailyData.length ? (
          <Line
            data={{
              labels: date,
              datasets: [{
                data: dailyData.map((item) => item.confirmed.total),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((item) => item.deaths.total),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );

      const barChart = (
          dailyData.length ? (
              <Bar 
              
              
              
              
              
              />

          ) : null
      )

    // const lines = JSON.parse(JSON.stringify(lineChart));

    return( 
        
        <div className="lineChart"> 
            {lineChart}
        </div> 
    )
}

export default CoronaChart;