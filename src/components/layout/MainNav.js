import { Link } from 'react-router-dom'

import classes from './MainNav.module.css'

function MainNav() {
  return <header className={classes.header}>
    <div className={classes.logo}>Wealth Management</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Markets</Link>
        </li>
        <li>
          <Link to='/new-market'>Add New Market</Link>
        </li>
        <li>
          <Link to='/watchlist'>Watchlist</Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNav;