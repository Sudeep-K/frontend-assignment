import React from 'react'
import ArtistInfo from './../../../components/ArtistInfo';

export const metadata = {
  title: 'Artist Info',
  description: 'Artist Info',
}

const ArtistInfoPage = ({ params: {artist_id}}) => {
  return (
    <div className='container'>
        <ArtistInfo artist_id={artist_id}/>
    </div>
  )
}

export default ArtistInfoPage
