import React from 'react'

const SongCard = () => {
  return (
    <div className='w-[164px] flex flex-col gap-2 shrink-0'>
      <img className='drop-shadow-lg' src="https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/2e/a7/75/2ea77552-aa74-8cf1-4765-0529f6080c26/23SYMIM03701.rgb.jpg/400x400cc.jpg" alt="cover-art" />
      <div>
        <h1 className='text-2xl font-bold'>Daylight</h1>
        <h2 className='text-px'>David Kushner</h2>
      </div>
    </div>
  )
}

export default SongCard