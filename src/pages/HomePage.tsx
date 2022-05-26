import React from 'react'
import NavBar from '../components/NavBar'
import PaginationBar from '../components/PaginationBar'
import PhotosList from '../components/PhotosList'
import SearchBar from '../components/SearchBar'
import { useUnsplash } from '../lib/UnsplashContext'

export default function HomePage() {
  const unsplash = useUnsplash()
  return (
    <div>
      <NavBar />
      <SearchBar />
      <PhotosList photos={unsplash.photos} />
      <PaginationBar />
    </div>
  )
}
