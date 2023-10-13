const apiUrl = process.env.API_URL_CMS

const api = async (req, res) => {
  try {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=5',
    )
    const response = await fetch(`${apiUrl}/clients`)
    const clients = await response.json()

    res.status(200).json(clients)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export default api
