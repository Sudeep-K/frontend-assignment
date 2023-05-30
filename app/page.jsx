import React from 'react'
import axios from 'axios';
import TrendingComponent from './components/Trending';
import HotReleasedSongs from './components/HotReleasedSongs';

const fetchSongCharts = async () => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {
      locale: 'en-US',
      pageSize: '20',
      startFrom: '0'
    },
    headers: {
      'X-RapidAPI-Key': '2e97a37ad8mshadda66512435510p1aca9djsn1296825c9dec',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.error(err);
  }
} 

const Homepage = async () => {
  const songCharts = await fetchSongCharts();
  
  return (
    <>
        <TrendingComponent songChart={ songCharts.tracks[0] } />
        <HotReleasedSongs songCharts={ songCharts } />
    </>
  )
}

export default Homepage