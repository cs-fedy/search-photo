export default async (query: string, page = 1) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
      },
    },
  )
  return await response.json()
}
