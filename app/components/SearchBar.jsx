'use client'
import React, { useEffect } from 'react'
import { Suspense } from 'react';
import { useState } from 'react';
import axios from 'axios';
import SearchSuggestion from './SearchSuggestion';

import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../GlobalRedux/Features/query/querySlice';
import { setQueryResult } from '../GlobalRedux/Features/queryResult/queryResultSlice';
import { useRouter } from 'next/navigation';

const fetchSearchData = async (searchTerm) => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {
      term: `${searchTerm}`,
      locale: 'en-US',
      offset: '0',
      limit: '5'
    },
    headers: {
      'X-RapidAPI-Key': '2e97a37ad8mshadda66512435510p1aca9djsn1296825c9dec',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  return response.data;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm) {
        const result = await fetchSearchData(searchTerm);
        setSearchResult(result);
        setModalVisibility(true);
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const { push } = useRouter()

  const submitSearchQuery = async (e) => {
    e.preventDefault()
    const result = await fetchSearchData(searchTerm)
    dispatch(setQueryResult(result))
    dispatch(setQuery(searchTerm))
    setModalVisibility(false)
    push('/search')
  }

  return (
    <>
        <form className='w-2/6' onSubmit={submitSearchQuery}>
                <div className='relative'>
                    <input value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value) } type="search" className="w-full h-10 p-4 text-sm font-bold text-grey border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search artists, labels, releases, tracks" required />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  <div className={`${searchResult.tracks && searchTerm && modalVisibility ? 'visible' : 'invisible'} absolute z-50 mt-2 w-[350px] h-[350px] overflow-y-scroll rounded-md dark:bg-gray-700 dark:text-white`}>
                      {
                        searchResult.tracks && searchTerm ? searchResult.tracks.hits.map((track, index) => {
                          return <SearchSuggestion key={index} queryResult={track} type='Music' />
                        }) : null
                      }
                      {
                        searchResult.tracks && searchTerm ? searchResult.artists.hits.map((artist, index) => {
                          return <SearchSuggestion key={index} queryResult={artist} type='Artist' />
                        }) : null
                      }
                  </div>
                </Suspense>
        </form>
    </>
  )
}

export default SearchBar