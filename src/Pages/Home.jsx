import React from 'react'
import IntroPage from '../Components/IntroPage'
import Whoweare from '../Components/Whoweare'
import OurServices from '../Components/OurServices'

const Home = () => {
  return (
    <div>
      <IntroPage />
      <Whoweare />
      <div className="-mt-24 sm:-mt-36 relative z-10">
        <OurServices />
      </div>
    </div>
  )
}

export default Home
