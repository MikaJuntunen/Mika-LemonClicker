import Item from '../components/Item'


import Header from '../components/Header'

function Store(props) {

    // Muodostetaan renderöitävä tuotelista.
    // Muodostetaan renderöitävä tuotelista.
const items = props.storeitems.map(item => (
    <Item key={item.id}
          item={item}
          handlePurchase={props.handlePurchase} />
  ))

  return (
    <div className="container">
      <Header balance={props.stats.balance}>store</Header>
      <div className="scrollbox items">
       {items}

      </div>
    </div>
  )
}

export default Store
