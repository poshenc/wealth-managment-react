import MarketItem from './MarketItem';
import classes from './MarketList.module.css';

function MarketList(props) {
  return (
    <ul className={classes.list}>
      {props.markets.map((market) => (
        <MarketItem
          key={market.id}
          id={market.id}
          image={market.image}
          ticker={market.ticker}
          price={market.price}
          movement={market.movement}
          change={market.change}
        />
      ))}
    </ul>
  )
}

export default MarketList;