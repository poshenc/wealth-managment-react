import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const WatchlistsContext = createContext({
  watchlists: [],
  totalWatchlists: 0,
  //helps with auto completion in IDE
  addWatchlist: (watchlistMarket) => { },
  removeWatchlist: (marketId) => { },
  itemIsWatchlist: (marketId) => { }
})


export function WatchlistsContextProvider(props) {
  const [userWatchlists, setUserWatchlists] = useState([])

  function addWatchlistHandler(watchlistMarket) {
    axios.post('http://localhost:3001/watchlist', { watchlistMarket })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))

    setUserWatchlists((prevUserWatchlists) => {
      return prevUserWatchlists.concat(watchlistMarket)
    })
  }

  function removeWatchlistHandler(marketId) {
    axios.delete('http://localhost:3001/watchlist', { data: { marketId } })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))

    setUserWatchlists(prevUserWatchlists => {
      return prevUserWatchlists.filter(market => market.id !== marketId)
    })
  }

  function itemIsWatchlistHandler(marketId) {
    return userWatchlists.some(market => market.id === marketId)
  }

  useEffect(() => {
    axios.get('http://localhost:3001/watchlist', {
      params: {
        userId: 1
      }
    })
      .then(response => {
        const data = response.data
        console.log(data)
        setUserWatchlists(data)
      })
  }, [])



  const context = {
    watchlists: userWatchlists,
    totalWatchlists: userWatchlists.length,
    //point to functions, pass it to all components
    addWatchlist: addWatchlistHandler,
    removeWatchlist: removeWatchlistHandler,
    itemIsWatchlist: itemIsWatchlistHandler
  }

  return (
    <WatchlistsContext.Provider value={context}>
      {props.children}
    </WatchlistsContext.Provider>
  )

}

export default WatchlistsContext