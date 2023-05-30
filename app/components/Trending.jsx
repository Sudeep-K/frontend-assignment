import React from 'react'

const TrendingComponent = ({ songChart }) => {
  return (
    <div className="container my-5 flex gap-20">
        <img src={ songChart.images.coverart } alt='cover-art' />
        <div className='h-1/1 flex flex-col justify-end gap-5'>
            <h1>Trending #1</h1>
            <h1 className='text-6xl font-bold'>{ songChart.title }</h1>
            <h2 className='text-4xl font-bold'>{ songChart.subtitle }</h2>
            <button className='w-2/3 bg-orange text-light-green font-bold text-2xl px-4 py-2 rounded-xl drop-shadow-lg'>See More</button>
        </div>
    </div>
  )
}

export default TrendingComponent