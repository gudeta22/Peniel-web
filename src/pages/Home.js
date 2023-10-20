import React from 'react'
import HomeComponent from '../components/HomeComponent';
import Aboutchurch from '../components/Aboutchurch';

function Home() {
  return (
    <div className=' text-lg lg:-my-10'>
       <HomeComponent />
       <Aboutchurch />
    </div>
  )
}

export default Home;