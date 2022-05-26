import React from 'react'
import UnsplashProvider from './lib/UnsplashContext'
import HomePage from './pages/HomePage'

function App() {
  return (
    <UnsplashProvider>
      <HomePage />
    </UnsplashProvider>
  )
}

export default App
