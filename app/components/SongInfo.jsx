import React from 'react'
import { Suspense } from 'react'
import axios from 'axios';
import { SiShazam } from 'react-icons/si';
import { Link } from 'next/link';

const fetchSongInfo = async (song_id) => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/get-details',
    params: {
      key: `${song_id}`,
      locale: 'en-US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.rapid_api,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return (response.data);
  } catch (error) {
    console.error(error);
  }
}

const SongInfo = async ({ song_id }) => {
  console.log(song_id)
  const songDetails = await fetchSongInfo(song_id);
  console.log(songDetails)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='flex gap-10'>
          { songDetails ? <img className='object-cover' src={songDetails.images.coverart} alt="album cover" /> : null}
          <div className='flex flex-col gap-5'>
              <h1 className="text-6xl font-bold"><span className='underline'>{songDetails.title}</span> - {songDetails.subtitle}</h1>
              <h2 className="text-2xl"><strong>Album:</strong> {songDetails.albumadamid}</h2>
              <h2 className="text-2xl"><strong>Genre:</strong> {songDetails.genres.primary}</h2>
              <h2 className="text-2xl"><strong>Artist:</strong> {songDetails.subtitle}</h2>
              <Link href={songDetails.url}>  
                <button className="w-[150px] flex justify-center items-center gap-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <span className="text-xl font-bold">shazam</span> 
                    <span className="text-xl font-bold"><SiShazam/></span>
                </button>
              </Link>
          </div>
      </div>
    </Suspense>
  )
}

export default SongInfo