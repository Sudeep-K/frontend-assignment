import React from 'react'
import SearchResultArtist from './../components/SearchResultArtist';
import SearchResultTrack from './../components/SearchResultTrack';

export const metadata = {
  title: 'Search Results',
  description: 'Search Results',
}

const SearchResult = () => {
  return (
    <>
        <SearchResultArtist />
        <SearchResultTrack />
    </>
  )
}

export default SearchResult