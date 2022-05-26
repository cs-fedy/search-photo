import React from 'react'

export default function PhotoItem({ photo }: any) {
  return (
    <a href={photo.links.html} className="group bg-white inline-block relative">
      <img className="w-full h-full pb-4 mb-1" src={photo.urls.regular} />
      <div className="absolute top-0 left-0 w-full bg-slate-800 group-hover:flex hidden justify-center items-center">
        <p className="py-2 px-4 text-lg font-medium text-white">
          click to visit
        </p>
      </div>
    </a>
  )
}
