import Header from '../components/Header'

function Credits(props) {
  return (
    <div className="container">
      <Header balance={props.stats.balance}>credits</Header>
      <div className="scrollbox items">
        Tekijä: Mika Juntunen
        <div>
        Kuvaus: Lemon Clicker peli     
        </div>  
      </div>
    </div>
  )
}

export default Credits