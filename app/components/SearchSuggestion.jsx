import React from 'react'

const SearchSuggestion = () => {
  return (
    <div className="w-full cursor-pointer py-2 px-3 hover:bg-slate-100 flex gap-4">
        <img className='w-[64px]' src='https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/400x400cc.jpg' alt='cover-art' />
        <div>
            <p class="text-sm font-bold text-gray-400">To Summer, From Cole (Audio Hug) by Summer Walker & J. Cole</p>
            <p class="text-sm font-medium text-gray-500">Track</p>
        </div>
    </div>
  )
}

export default SearchSuggestion