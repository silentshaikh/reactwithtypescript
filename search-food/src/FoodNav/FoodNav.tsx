import { useContext } from 'react'
import { CreteContext } from '../Contexts/Contexts'
import { ContextTypes } from '../type'

function FoodNav() {
    let navContext = useContext<ContextTypes | null>(CreteContext); 
  return (
    <>
    <header className='food-header'>
        <nav className='navbar'>
         {navContext && navContext.mapFood.map((e,i) => <li key={i} onClick={() => navContext.filterFood(e)}>{e}</li> )}
        </nav>
    </header>
    </>
  )
}

export default FoodNav
