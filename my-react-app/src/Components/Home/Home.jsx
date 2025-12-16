import React from 'react'
import Banner from './Banner'
import Num from './Num'
import Aboutsec from './Aboutsec'
import Recently from './Recently'
import Upcoming from './Upcoming'
import Costumes from './Costumes'
import Whychoose from './Whychoose'
import Ourgallery from './Ourgallery'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Banner />
      <Num />
      <Aboutsec />
      <Recently />
      <Upcoming />
      {/* <Costumes /> */}
      <Whychoose />
      <Ourgallery />
      {/* <Contact /> */}
    </div>
  )
}

export default Home
