import React from 'react'
import TrendingComponent from './components/Trending';
import HotReleasedSongs from './components/HotReleasedSongs';

const Homepage = () => {
  return (
    <>
        <TrendingComponent />
        <HotReleasedSongs />
    </>
  )
}

export default Homepage