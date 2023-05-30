import React from 'react'
import SearchSuggestion from './SearchSuggestion';

const SearchBar = () => {
  return (
    <>
        <form className='w-2/6'>
                <div className='relative'>
                    <input type="search" className="w-full h-10 p-4 text-sm font-bold text-grey border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search artists, labels, releases, tracks" required />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
                <div className="invisible absolute z-50 mt-2 w-[350px] h-[350px] overflow-y-scroll rounded-md dark:bg-gray-700 dark:text-white">
                    <SearchSuggestion />
                    <SearchSuggestion />
                    <SearchSuggestion />
                    <SearchSuggestion />
                    <SearchSuggestion />
                    <SearchSuggestion />
                    <SearchSuggestion />
                    <SearchSuggestion />
                </div>
        </form>
    </>
  )
}

export default SearchBar