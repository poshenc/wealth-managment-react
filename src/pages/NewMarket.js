import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

import NewMarketForm from "../components/markets/NewMarketForm";

function NewMarketPage() {
  const navigate = useNavigate()

  function onAddMarket(marketData) {
    axios.post('http://localhost:8000/market', { marketData })
      .then((response) => {
        toast.success("Added the market successfully!!")
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