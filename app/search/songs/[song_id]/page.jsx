import React from 'react'
import SongInfo from './../../../components/SongInfo';

export const metadata = {
  title: 'Song Info',
  description: 'Song Info',
}

const SongInfoPage = ({ params: { song_id }}) => {
  return (
    <div className='container mt-10'>
        <SongInfo song_id={song_id} />
    </div>
  )
}

export default SongInfoPage