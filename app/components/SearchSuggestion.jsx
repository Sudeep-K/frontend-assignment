import React from 'react'

const SearchSuggestion = ({ queryResult, type }) => {
  return (
    <div className="w-full cursor-pointer py-2 px-3 hover:bg-slate-100 flex gap-4">
        <img className='w-[64px]' src={ type === 'Music' ? queryResult.track.images.coverart : queryResult.artist.avatar } alt='cover-art' />
        <div>
            <p class="text-sm font-bold text-gray-400">{ type === 'Music' ? queryResult.track.share.text : queryResult.artist.name }</p>
            <p class="text-sm font-medium text-gray-500">{ type === 'Music' ? 'Track' : 'Artist'}</p>
        </div>
    </div>
  )
}

export default SearchSuggestion