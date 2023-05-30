'use client'

import React from 'react'
import SongCard from './SongCard'
import { useSelector } from 'react-redux'

const SearchResultTrack = () => {
  const query = useSelector(state => state.query.query)
  const queryResult = useSelector(state => state.queryResult.queryResult)

  return (
    <div className='mt-10 container'>
        <h1 className='text-3xl font-bold mb-10'>Exploring Tracks &quot;{query}&quot;</h1>
        <div className='w-full grid grid-cols-5 gap-10'>
            {
                    queryResult && queryResult.tracks ? queryResult.tracks.hits.map((track, index) => {
                        return (
                            <SongCard songInfo={track.track} key={index}/>
                        )
                    }) : null
            }
        </div>
    </div>
  )
}

export default SearchResultTrack