import { Route, Routes } from 'react-router-dom'

import AllMarketsPage from './pages/AllMarkets';
import FavoritesPage from './pages/Watchlists';
import NewMarketPage from './pages/NewMarket';
import SignupPage from './pages/Signup'
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMarketsPage />} />
        <Route path="/new-market" element={<NewMarketPage />} />
        <Route path="/watchlist" element={<FavoritesPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;