import React from 'react'
import { useUnsplash } from '../lib/UnsplashContext'

export default function PaginationBar() {
  const unsplash = useUnsplash()

  const handleNextPage = () => unsplash.goToNextPage()
  const handlePrevPage = () => unsplash.goToPreviousPage()

  return (
    <div className="flex flex-col items-center mb-4 mt-4">
      {unsplash.pagination.isPagination && (
        <span className="text-sm text-gray-700">
          Showing{' '}
          <span className="font-semibold text-gray-900">
            {unsplash.pagination.perPage * unsplash.pagination.currentPage}
          </span>{' '}
          to{' '}
          <span className="font-semibold text-gray-900">
            {unsplash.pagination.perPage * unsplash.pagination.currentPage +
              unsplash.pagination.perPage}
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900">
            {unsplash.pagination.totalEntries}
          </span>{' '}
          Entries
        </span>
      )}
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900"
          onClick={handlePrevPage}
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Prev
        </button>
        <button
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900"
          onClick={handleNextPage}
        >
          Next
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
