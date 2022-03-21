import { useState, useEffect } from 'react'
import MarketList from "../components/markets/MarketList";
import axios from 'axios'

function AllMarketsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMarkets, setLoadedMarkets] = useState([])

  useEffect(() => {
    setIsLoading(true)

    axios.get('http://localhost:3001/')
      .then(response => {
        const data = response.data
        setIsLoading(false)
        setLoadedMarkets(data)
      })
  }, [])


  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return <section>
    <h1>All Markets</h1>
    <MarketList markets={loadedMarkets} />
  </section>
}


export default AllMarketsPage;