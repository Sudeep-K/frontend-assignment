'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'


const SearchResultArtist = () => {
    const query = useSelector(state => state.query.query)
    const queryResult = useSelector(state => state.queryResult.queryResult)
  return (
    <>
        <div className='mt-10 w-full container'>
            <h1 className='text-3xl font-bold mb-10'>Exploring Artists &quot;{query}&quot;</h1>
            <div className='w-full overflow-x-auto flex flex-nowrap gap-10'>
                {
                    queryResult && queryResult.artists ? queryResult.artists.hits.map((artist, index) => {
                        return (
                            <Link href={`/search/artists/${artist.artist.adamid}`} key={index}>
                                <div className='w-[150px] flex flex-col items-center gap-2 shrink-0' key={index}>
                                    <img className='rounded-full' src={artist.artist.avatar || 'data:image/jpeg;base64,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'} alt='artist' />
                                    <h1 className='text-2xl text-center font-bold'>{artist.artist.name}</h1>
                                </div>
                            </Link>
                        )
                    }) : null
                }
            </div>
        </div>
    </>
  )
}

export default SearchResultArtist