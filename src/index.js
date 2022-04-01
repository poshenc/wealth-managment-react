import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import Message from './components/ui/Message';
import { WatchlistsContextProvider } from './store/watchlists-context'

ReactDOM.render(
  <WatchlistsContextProvider>
    <BrowserRouter>
      <Message />
      <App />
    </BrowserRouter>
  </WatchlistsContextProvider>,
  document.getElementById('root')
);