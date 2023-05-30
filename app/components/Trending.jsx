import React from 'react'

const TrendingComponent = () => {
  return (
    <div className="container my-5 flex gap-20">
        <img src='https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452' alt='cover-art' />
        <div className='h-1/1 flex flex-col justify-end gap-5'>
            <h1>Trending #1</h1>
            <h1 className='text-6xl font-bold'>After Hours</h1>
            <h2 className='text-4xl font-bold'>Weeknd</h2>
            <button className='w-2/3 bg-orange text-light-green font-bold text-2xl px-4 py-2 rounded-xl drop-shadow-lg'>See More</button>
        </div>
    </div>
  )
}

export default TrendingComponent