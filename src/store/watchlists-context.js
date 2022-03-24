import { createContext, useState } from 'react'


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
    //Todo: API call database
    setUserWatchlists((prevUserWatchlists) => {
      return prevUserWatchlists.concat(watchlistMarket)
    })
  }

  function removeWatchlistHandler(marketId) {
    //Todo: API call database
    setUserWatchlists(prevUserWatchlists => {
      return prevUserWatchlists.filter(market => market.id !== marketId)
    })
  }

  function itemIsWatchlistHandler(marketId) {
    return userWatchlists.some(market => market.id === marketId)
  }



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