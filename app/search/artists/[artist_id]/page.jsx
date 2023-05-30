import React from 'react'
import ArtistInfo from './../../../components/ArtistInfo';

const ArtistInfoPage = ({ params: {artist_id}}) => {
  return (
    <div className='container'>
        <ArtistInfo artist_id={artist_id}/>
    </div>
  )
}

export default ArtistInfoPage

// latest release ko list
// ani top songs ko list