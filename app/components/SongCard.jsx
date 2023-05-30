import React from 'react'
import Link from 'next/link'

const SongCard = ({ songInfo }) => {
  return (
    <Link class='hover:overflow-visible hover:skew-y-6' href={`/search/songs/${songInfo.key}`}>
      <div className='w-[164px] flex flex-col gap-2 shrink-0'>
        <img className='drop-shadow-lg' src={ songInfo.images.coverart } alt="cover-art" />
        <div>
          <h1 className='text-2xl font-bold'>{ songInfo.title }</h1>
          <h2 className='text-px'>{ songInfo.subtitle }</h2>
        </div>
      </div>
    </Link>
  )
}

export default SongCard