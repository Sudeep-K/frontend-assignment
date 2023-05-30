import React from 'react'
import SongCardHorizontal from './SongCardHorizontal';
import SongCard from './SongCard';
import { Suspense } from 'react'
import axios from 'axios';

const fetchArtistInfo = async (artist_id) => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/artists/get-details',
    params: {
      id: `${artist_id}`,
      l: 'en-US'
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

const fetchArtistTopSongs = async (artist_id) => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
    params: {
      id: `${artist_id}`,
      l: 'en-US'
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

const fetchLatest = async (artist_id) => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/artists/get-latest-release',
    params: {
      id: `${artist_id}`,
      l: 'en-US'
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

const ArtistInfo = async ({ artist_id }) => {
  const artistData = await fetchArtistInfo(artist_id);
  const response = await fetchArtistTopSongs(artist_id);
  const latestSong = await fetchLatest(artist_id);

  return (
    <>
      <Suspense fallback={<div>Loading cities...</div>}>
        { artistData.data ? <><div className='w-full flex flex-col items-center mt-5 gap-2'>
            <img  className='w-[200px] rounded-full' src={artistData.data[0].attributes.artwork.url} alt='artist' />
            <h1 className='text-4xl font-bold text-center'>{artistData.data[0].attributes.name}</h1>
            <h2 className='text-xl text-center'>{artistData.data[0].attributes.genreNames[0]}</h2>
        </div></> : null}
        { response.data ? <><h1 className='text-2xl font-bold mt-10 border-b-2'>Top Songs by &quot;{response.data[0].attributes.artistName}&quot;</h1>
        <div className='overflow-x-auto grid grid-rows-3 grid-flow-col gap-10 mt-5'>
            { response.data.map((song, index) => {
              return <SongCardHorizontal songInfo={song} key={index}/>
            }) }
        </div></> : null }
        { latestSong ? <><h1 className='text-2xl font-bold mt-10 border-b-2'>Latest Releases by &quot;{latestSong.data[0].attributes.artistName}&quot;</h1>
        <div className='mt-10'>
          <div className='w-[164px] flex flex-col gap-2 shrink-0'>
            <img className='drop-shadow-lg' src={ latestSong.data[0].attributes.artwork.url } alt="cover-art" />
            <div>
              <h1 className='text-2xl font-bold'>{ latestSong.data[0].attributes.name }</h1>
              <h2 className='text-px'>{ latestSong.data[0].attributes.artistName }</h2>
            </div>
          </div>
        </div></> : null}
      </Suspense>
    </>
  )
}

export default ArtistInfo