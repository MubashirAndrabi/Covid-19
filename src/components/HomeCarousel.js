import React,{useEffect} from 'react';

import {Carousel} from 'antd';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchData} from '../ducks/coronaData';


function HomeCarousel(){

  const dispatch = useDispatch();

  const image = useSelector((store)=>{
    return store.coronaData.overallValues;

  })
useEffect(()=>{
  if(!Object.keys(image).length){
    dispatch(fetchData())
  }
},[])
  console.log(image);
  

    return(

        <Carousel span={{lg:6,sm:24}} style={{marginTop:'20px' }} autoplay>

<div>
    <img src={image.image} height="600px" width="1340"/>
      
      
    </div>
    <div>
    <img src="https://p1cdn4static.civiclive.com/UserFiles/Servers/Server_12408788/Image/coronavirus.jpg" height="600px" width="1340" />
      
      
    </div>
    <div>
    <img src="https://content.presspage.com/uploads/1979/1920_200227-coronavirus-remdesivir-banner.jpg?10000" height="600px" width="1340"/>
      
    </div>
    <div>
    <img src="https://www.guelphroyaldental.com/wp-content/uploads/2020/03/coronavirus.jpg" height="600px" width="1340"/>
      
    </div>
    <div>
    <img src="https://media.graytvinc.com/images/coronavirus+mgn14.jpg" height="600px" width="1340"/>
      
    </div>
  </Carousel>
    )
}


export default HomeCarousel;