


import Menu from './components/Menu'
import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Booster from './components/Booster'
import Lemon from './components/Lemon'
import './App.css'

function App() {

    // Luodaan tilamuuttuja, jossa tallennetaan napautusten määrä.
   // Luodaan tilamuuttuja, johon tallennetaan pelin laskennalliset tiedot.
  const [stats, setStats] = useState({clicks: 0, balance: 0, increase: 1, itemstobuy: 0})

  const handleClick = () => {
    // Tehdään kopio stats-tilamuuttujasta.
    let newstats = {...stats}
    // Kasvatetaan napautusten lukumäärää yhdellä.
    newstats.clicks = newstats.clicks + 1;
    // Tallennetaan päivitetty stats-muuttuja.
    setStats(newstats); 
  }




  return (
    <div className="root">
      <div className="root_content">
        <div className="container clicker">
          <Header>lemon clicker</Header>
          <Balance total={stats.clicks} />
          <Lemon onClick={handleClick} />
          <Booster value={stats.increase} />
        </div>
      </div>
      <Menu items={stats.itemstobuy} />
    </div>
  )




}

export default App