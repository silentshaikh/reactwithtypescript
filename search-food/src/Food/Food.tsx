import { useContext } from 'react'
import { CreteContext } from '../Contexts/Contexts'
import { ContextTypes } from '../type'

function Food() {
    let foodContext = useContext<ContextTypes|null>(CreteContext);
  if(foodContext === null){
    return <h1>loading</h1>
  }else{
    return (
        <>
          <div className="foodCot">
            {foodContext && foodContext.food.map((e,i) => {
                return (
                    <div className="foodCard" key={i}>
                    <h5>{e.headOne}</h5>
                    <h1>{e.headTwo}</h1>
                    <p>{e.para}</p>
                    <img src={e.img} alt={e.headOne} />
                    <button>Order Now</button>
                </div>
                );
            })}
          </div>
        </>
      )
  }
}

export default Food
