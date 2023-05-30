import React from 'react'
import { FiSearch } from 'react-icons/fa'
import SearchBar from './SearchBar';
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-navy-blue'>
      <div className='container py-4 flex justify-between items-center'>
        <Link href='/'>
          <img src='/logo.svg' alt='logo' />
        </Link>
        <SearchBar />
      </div>
    </div>
  )
}

export default Header