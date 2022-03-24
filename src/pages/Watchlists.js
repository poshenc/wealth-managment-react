import { useContext } from 'react'

import WatchlistsContext from '../store/watchlists-context'
import MarketList from '../components/markets/MarketList'

function FavoritesPage() {
  const watchlistsCtx = useContext(WatchlistsContext)

  let content

  if (watchlistsCtx.totalWatchlists === 0) {
    content = <p>You got no watchlist. Start adding some!</p>
  } else {
    content = <MarketList markets={watchlistsCtx.watchlists} />
  }

  return <section>
    <h1>My Watchlist</h1>
    {content}
  </section>
}

export default FavoritesPage;