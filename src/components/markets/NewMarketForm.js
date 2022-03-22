import { useRef } from 'react'

import Card from "../ui/Card"
import classes from './NewMarketForm.module.css'

function NewMarketForm(props) {
  const tickerInputRef = useRef()
  const imageInputRef = useRef()
  const priceInputRef = useRef()
  const changeInputRef = useRef()
  const movementInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredTicker = tickerInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredPrice = priceInputRef.current.value
    const enteredChange = changeInputRef.current.value
    const enteredMovement = movementInputRef.current.value

    const marketData = {
      ticker: enteredTicker,
      image: enteredImage,
      price: enteredPrice,
      change: enteredChange,
      movement: enteredMovement
    }

    // console.log(marketData)
    props.onAddMarket(marketData)

  }
  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='ticker'>Stock Ticker</label>
        <input type='text' required id='ticker' ref={tickerInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Logo</label>
        <input type='url' required id='image' ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Price</label>
        <input type='text' required id='price' ref={priceInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='movement'>Movement</label>
        <input type='text' required id='movement' ref={movementInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='change'>Change %</label>
        <input type='text' required id='change' ref={changeInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Add Market</button>
      </div>
    </form>
  </Card>
}

export default NewMarketForm