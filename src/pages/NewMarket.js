import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import NewMarketForm from "../components/markets/NewMarketForm";

function NewMarketPage() {
  const navigate = useNavigate()

  function onAddMarket(marketData) {
    axios.post('http://localhost:3001/market', { marketData })
      .then((response) => {
        console.log(response)
        navigate('/')
      })
      .catch((error) => console.log(error))
  }

  return <section>
    <h1>Add New Market</h1>
    <NewMarketForm onAddMarket={onAddMarket} />
  </section>
}

export default NewMarketPage;