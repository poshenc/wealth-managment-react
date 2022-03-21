import Card from '../ui/Card'
import classes from './MarketItem.module.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'


function MarketItem(props) {
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
            <button>To Watchlist</button>
            {/* <FontAwesomeIcon icon={faStar} size="lg" /> */}
          </div>
        </div>
      </Card>
    </li>
  )
}

export default MarketItem;