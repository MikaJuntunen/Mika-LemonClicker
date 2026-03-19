
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

      const handlePurchase = (id) => {
    // Etsitään tunnistetta vastaavan tuotteen indeksi taulukosta.
    const index = storeitems.findIndex(storeitem => storeitem.id == id)
    // Varmistetaan, että käyttäjällä on varaa ostaa tuote.
    if (stats.balance >= storeitems[index].price) {
      // Tehdään kopiot tilamuuttujista.
      let newstoreitems = [...storeitems]
      let newstats = {...stats}
      // Kasvatetaan tuotteiden määrää yhdellä.
      newstoreitems[index].qty++
      // Vähännetään varoista tuotteen hinta.
      newstats.balance = newstats.balance - newstoreitems[index].price
            // Lasketaan tuotteen uusi hinta.
      newstoreitems[index].price =
        Math.floor(newstoreitems[index].baseprice * Math.pow(1.15,newstoreitems[index].qty))
        
      // TODO lasketaan uusi kasvatusarvo

      // Tallennetaan uudet tilamuuttujien arviot.
      setStoreitems(newstoreitems)
      setStats(newstats)
    }
  }


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
               handleClick={handleClick} 
               handlePurchase={handlePurchase} />

  )

}

export default App