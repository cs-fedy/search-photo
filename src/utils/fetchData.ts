export default async (page = 1) => {
  const response = await fetch(`https://api.unsplash.com/photos?page=${page}`, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
  })
  return await response.json()
}
