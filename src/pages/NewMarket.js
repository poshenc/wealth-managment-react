import { useNavigate } from 'react-router-dom'

import NewMarketForm from "../components/markets/NewMarketForm";

function NewMarketPage() {
  const navigate = useNavigate()

  function onAddMarket(marketData) {
    fetch('http://localhost:3001/api/insert',
      {
        method: 'POST',
        // body: JSON.stringify(marketData),
        body: JSON.stringify({
          name: 'test'
        }),
        headers: {
          'Content-Type': 'applications/json'
        }
      }).then(() => {
        navigate('/')
      })
  }

  return <section>
    <h1>Add New Market</h1>
    <NewMarketForm onAddMarket={onAddMarket} />
  </section>
}

export default NewMarketPage;