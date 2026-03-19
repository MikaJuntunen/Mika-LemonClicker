
import items from './config/items.js'
import AppRouter from './components/AppRouter'



import { useState } from 'react'

import './App.css'

function App() {
    // Luodaan tilamuuttuja, johon tallennetaan tuotelista.
    const [storeitems,setStoreitems] = useState(items)

    // Luodaan tilamuuttuja, jossa tallennetaan napautusten määrä.
    // Luodaan tilamuuttuja, johon tallennetaan pelin laskennalliset tiedot.
    const [stats, setStats] = useState({clicks: 0, balance: 0, increase: 1, itemstobuy: 0})

    const handleClick = () => {
    // Tehdään kopio stats-tilamuuttujasta.
    let newstats = {...stats}
    // Kasvatetaan napautusten lukumäärää yhdellä.
    newstats.clicks = newstats.clicks + 1;
    // Tallennetaan päivitetty stats-muuttuja.
    // Kasvatetaan sitruunoiden määrää kasvatusarvolla.
    newstats.balance = newstats.balance + newstats.increase

    setStats(newstats); 
  }



  return (
    <AppRouter stats={stats} 
               storeitems={storeitems} 
               handleClick={handleClick} />
  )






}

export default App