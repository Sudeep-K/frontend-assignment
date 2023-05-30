import React from 'react'

const SongInfo = () => {
  return (
    <div className='flex gap-10'>
        <img className='object-cover'src="https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/c6/ff/32/c6ff32ad-35ec-457d-f1a1-5154d3613792/23UMGIM36007.rgb.jpg/400x400cc.jpg" alt="album cover" />
        <div className='flex flex-col gap-3'>
            <h1 className="text-6xl font-bold"><span className='underline'>Pearl Jam</span> - Give Way</h1>
            <h2 className="text-2xl"><strong>Album:</strong> Gigaton</h2>
            <h2 className="text-2xl"><strong>Released:</strong> 2020</h2>
            <h2 className="text-2xl"><strong>Genre:</strong> Rock</h2>
            <h2 className="text-2xl"><strong>Length:</strong> 3:19</h2>
            <h2 className="text-2xl"><strong>Composers:</strong> Damon Albarn, Mavis Staples & Terrence Thornton</h2>
            <h2 className="text-2xl"><strong>Artist:</strong> Gorillaz</h2>
        </div>
    </div>
  )
}

export default SongInfo