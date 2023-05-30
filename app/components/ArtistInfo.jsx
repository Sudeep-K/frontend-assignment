import React from 'react'
import SongCardHorizontal from './SongCardHorizontal';
import SongCard from './SongCard';

const ArtistInfo = () => {
  return (
    <>
        <div className='w-full flex flex-col items-center mt-5 gap-2'>
            <img  className='w-[200px] rounded-full' src="https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a1/b7/ca/a1b7ca45-84c6-1939-70cb-fdfb79c23b68/c6967405-5d2d-4e64-91ec-be857bb9b0b6_ami-identity-e3de1066dd9a89fa6fadb60b1a50fdd9-2022-10-24T04-08-49.135Z_cropped.png/400x400bb.webp" alt='artist' />
            <h1 className='text-4xl font-bold text-center'>Artist Name</h1>
            <h2 className='text-xl text-center'>Artist Genre</h2>
        </div>
        <h1 className='text-2xl font-bold mt-10 border-b-2'>Top Songs by &quot;JIN&quot;</h1>
        <div className='overflow-x-auto grid grid-rows-3 grid-flow-col gap-10 mt-5'>
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
            <SongCardHorizontal />
        </div>
        <h1 className='text-2xl font-bold mt-10 border-b-2'>Latest Releases by &quot;JIN&quot;</h1>
        <div className='mt-10'>
            <SongCard />
        </div>
    </>
  )
}

export default ArtistInfo