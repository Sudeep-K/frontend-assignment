import React from 'react'
import SongCard from './SongCard';

const HotReleasedSongs = ({ songCharts }) => {
  return (
    <div className='container my-14'>
        <h1 className='text-3xl font-bold'>Trending Releases</h1>
        <div className='overflow-x-auto flex flex-nowrap gap-10 my-5'>
            {
              songCharts.tracks.map((songInfo, index) => {
                return <SongCard key={ index } songInfo={ songInfo } />
              })
            }
        </div>
    </div>
  )
}

export default HotReleasedSongs