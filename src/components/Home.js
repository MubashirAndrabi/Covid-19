import React from 'react';
import HomeCarousel from './HomeCarousel';
import CoronaCard from './CoronaCard';
function Home(){

    return(
        <>

<CoronaCard/>

        <HomeCarousel span={{lg:6,sm:24}}/>
        

        </>

        
    )
}


export default Home;