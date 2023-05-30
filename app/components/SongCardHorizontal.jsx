import React from 'react'

const SongCardHorizontal = ({ songInfo }) => {
  return (
    <div className='w-[350px] flex gap-10 border-b-2 pb-4'>
        <img className='w-[74px] rounded-lg' src={songInfo.attributes.artwork.url} alt='song' />
        <div>
            <h1 className='text-xl font-bold'>{songInfo.attributes.name}</h1>
            <h2 className='text-lg'>{songInfo.attributes.artistName}</h2>
        </div>
    </div>
  )
}

export default SongCardHorizontal