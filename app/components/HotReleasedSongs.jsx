import React from 'react'
import SongCard from './SongCard';

const HotReleasedSongs = () => {
  return (
    <div className='container my-14'>
        <h1 className='text-3xl font-bold'>Trending Releases</h1>
        <div className='overflow-x-auto flex flex-nowrap gap-10 my-5'>
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
        </div>
    </div>
  )
}

export default HotReleasedSongs