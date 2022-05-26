import React from 'react'
import PhotoItem from './PhotoItem'

export default function PhotosList({ photos }: any) {
  if (photos.length === 0)
    return (
      <div className="w-full h-full flex flex-1 justify-center items-center">
        No photos found
      </div>
    )
  return (
    <div className="grid w-5/6 mx-auto mt-12 gap-0 md:gap-4 grid-cols-1 md:grid-cols-3">
      {photos.map((photo: any) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  )
}
