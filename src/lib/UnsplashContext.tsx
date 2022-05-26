import React, { createContext, useContext, useState, useEffect } from 'react'
import fetchData from '../utils/fetchData'
import searchPhotos from '../utils/searchPhotos'

interface IUnsplashContext {
  search: (query: string) => void
  goToNextPage: () => void
  goToPreviousPage: () => void
  photos: any[]
  pagination: {
    isPagination: boolean
    currentPage: number
    totalPages: number
    perPage: number
    totalEntries: number
  }
}

const UnsplashContext = createContext<IUnsplashContext>({} as IUnsplashContext)

export const useUnsplash = () => useContext(UnsplashContext)

export default function UnsplashProvider({ children }: any) {
  const [photos, setPhotos] = useState([])
  //* this state is used to hold the search term in order to use later when paginating
  const [term, setTerm] = useState('')
  const [pagination, setPagination] = useState({
    //* this flag is used to indicate if the response holds pagination attributes
    //* for example, when using the load new phots api, the response will not contain pagination attributes
    //* so the default value of this flag is false
    isPagination: false,
    currentPage: 1,
    totalPages: 1,
    perPage: 10,
    totalEntries: 0,
  })

  useEffect(() => {
    fetchData().then((data) => setPhotos(data))
  }, [])

  useEffect(() => {
    if (term) {
      searchPhotos(term, pagination.currentPage).then((data) =>
        setPhotos(data.results),
      )
    } else {
      fetchData(pagination.currentPage).then((data) => setPhotos(data))
    }
  }, [pagination.currentPage])

  const search = (term: string) => {
    setTerm(term)
    searchPhotos(term).then((data) => {
      setPagination({
        ...pagination,
        isPagination: true,
        totalPages: data.total_pages,
        totalEntries: data.total,
      })
      setPhotos(data.results)
    })
  }

  const goToNextPage = () => {
    if (
      !pagination.isPagination ||
      pagination.currentPage < pagination.totalPages
    ) {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage + 1,
      })
    }
  }

  const goToPreviousPage = () => {
    if (!pagination.isPagination || pagination.currentPage > 1) {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage - 1,
      })
    }
  }

  const value = { photos, search, pagination, goToNextPage, goToPreviousPage }
  return (
    <UnsplashContext.Provider value={value}>
      {children}
    </UnsplashContext.Provider>
  )
}
