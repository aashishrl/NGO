import React from 'react'
import Banner from '../Components/Home/Banner';
import Help from '../Components/Home/Help';
import Contributions from '../Components/Home/Contributions';
import Updates from '../Components/Home/Updates';
import Info from '../Components/Home/Info';
import Gallary from '../Components/Home/Gallary';

function Home() {
  return (
    <>
      <Banner/>
      <Help/>
      <Gallary/>
      <Info/>
      <Contributions/>
      <Updates/>
    </>
  )
}

export default Home
