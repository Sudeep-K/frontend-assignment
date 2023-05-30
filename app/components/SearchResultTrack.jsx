import React from 'react'
import SongCard from './SongCard'

const SearchResultTrack = () => {
  return (
    <div className='mt-10 container'>
        <h1 className='text-3xl font-bold mb-10'>Exploring Tracks &quot;Track Name&quot;</h1>
        <div className='w-full grid grid-cols-5 gap-10'>
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

export default SearchResultTrack