import Contexts from './Contexts/Contexts'
import FoodNav from './FoodNav/FoodNav'
import Food from './Food/Food'
import "./App.css";
function App() {
  return (
    <>
      <Contexts>
        <>
        <FoodNav/>
        <Food/>
        </>
      </Contexts>
    </>
  )
}

export default App
