import React, {useEffect} from 'react'
import HomeComponent from '../components/HomeComponent';
import Aboutchurch from '../components/Aboutchurch';
import Kidscomponents from '../components/Kidscomponents';
import Youtube from '../components/Youtube';

function Home() {
  
  return (
    <div className=' text-lg lg:-my-10'>
       <HomeComponent />
       <Aboutchurch />
       <Kidscomponents />
       <Youtube />
    </div>
  )
}

export default Home;