/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/bestSeller'
import Policy from '../Components/Policy'
import NewletterBox from '../Components/NewletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <NewletterBox/>
    </div>
  )
}

export default Home
