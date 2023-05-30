import React from 'react'
import { FiSearch } from 'react-icons/fa'
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='bg-navy-blue'>
      <div className='container py-4 flex justify-between items-center'>
        <img src='./logo.svg' alt='logo' />
        <SearchBar />
      </div>
    </div>
  )
}

export default Header