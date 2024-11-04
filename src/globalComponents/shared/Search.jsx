import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
        <div className="flex items-center gap-1 px-4 py-2 border border-[#54545433] rounded-md">
        <CiSearch color="#545454CC" fontSize={20} />
        <input type='search' className='outline-none' placeholder='Search' />
    </div>
  )
}

export default Search