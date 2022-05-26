import React, { useState } from 'react'
import { useUnsplash } from '../lib/UnsplashContext'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = (e: any) => setSearchTerm(e.target.value)
  const unsplash = useUnsplash()

  const handleSubmit = (e: any) => {
    unsplash.search(searchTerm)
    setSearchTerm('')
  }

  return (
    <div className="flex justify-center mx-20 my-10">
      <div className="mb-3 xl:w-full">
        <div className="input-group relative flex items-stretch w-full mb-4">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            onChange={handleChange}
          />
          <button
            className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            type="button"
            id="button-addon3"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
