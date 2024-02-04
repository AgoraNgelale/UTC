import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
function SearchBar() {
  return (
    <div className='flex items-center bg-gray-200 rounded-full 
        px-2 w-[200px] sm:w-[400px] lg:w-[700px] text-xl'>
          <AiOutlineSearch size={25}/>
          <input type='text'
          placeholder='Search Stores'
          className='bg-transparent p-2 w-full rounded-full'
          />
    </div>
  )
}

export default SearchBar
