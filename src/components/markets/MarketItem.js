import { useContext } from 'react'

import Card from '../ui/Card'
import classes from './MarketItem.module.css'

import WatchlistsContent from '../../store/watchlists-context'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'


function MarketItem(props) {
  const watchlistsCtx = useContext(WatchlistsContent)

  const itemIsWatchlist = watchlistsCtx.itemIsWatchlist(props.id)

  function toggleWatchlistStatusHandler() {
    if (itemIsWatchlist) {
      watchlistsCtx.removeWatchlist(props.id)
    } else {
      watchlistsCtx.addWatchlist({
        id: props.id,
        ticker: props.ticker,
        image: props.image,
        price: props.price,
        movement: props.movement,
        change: props.change,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={props.image} alt={props.ticker} />
          </div>
          <div className={classes.ticker}>
            <span>{props.ticker}</span>
          </div>
          <div className={classes.price}>
            <span>{props.price}</span>
          </div>
          <div className={classes.content}>
            <span>{props.movement}</span>
            <span>{props.change}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleWatchlistStatusHandler}>{itemIsWatchlist ? 'Remove Watchlists' : 'To Watchlists'}</button>
            {/* <FontAwesomeIcon icon={faStar} size="lg" /> */}
          </div>
        </div>
      </Card>
    </li>
  )
}

export default MarketItem;