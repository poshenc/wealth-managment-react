import { useState, useEffect } from 'react'
import MarketList from "../components/markets/MarketList";
import axios from 'axios'

function AllMarketsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMarkets, setLoadedMarkets] = useState([])

  useEffect(() => {
    setIsLoading(true)

    axios.get('http://localhost:8000/')
      .then(response => {
        const data = response.data
        console.log('all markets', data)
        const tickers = data.map(stock => stock.ticker)
        console.log(tickers) //['AAPL', 'TSLA', 'AMZN']

        var options = {
          method: 'GET',
          url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL',
          params: { modules: 'defaultKeyStatistics,assetProfile' },
          headers: {
            'x-api-key': 'vETzRpOnRt67Kcf8CEtPc7BbsxJ2ge9Y9PydSmsZ'
          }
        };

        axios.request(options).then(function (response) {
          console.log('regularMarketPrice', response.data.quoteResponse.result[0].regularMarketPrice);
          console.log('regularMarketChange', response.data.quoteResponse.result[0].regularMarketChange)
          console.log('regularMarketChangePercent', response.data.quoteResponse.result[0].regularMarketChangePercent);
        }).catch(function (error) {
          console.error(error);
        });



        //old code
        setIsLoading(false)
        setLoadedMarkets(data)
      })
  }, [])


  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return <section>
    <h1>All Markets</h1>
    <MarketList markets={loadedMarkets} />
  </section>
}


export default AllMarketsPage;