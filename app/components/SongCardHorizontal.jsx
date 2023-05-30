import React from 'react'

const SongCardHorizontal = () => {
  return (
    <div className='w-[350px] flex gap-10 border-b-2 pb-4'>
        <img className='w-[74px] rounded-lg' src="https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/200x200bb.webp" alt='song' />
        <div>
            <h1 className='text-xl font-bold'>Song Name</h1>
            <h2 className='text-lg'>Artist Name</h2>
        </div>
    </div>
  )
}

export default SongCardHorizontal