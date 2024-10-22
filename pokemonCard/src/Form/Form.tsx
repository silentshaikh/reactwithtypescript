import type { InputType } from '../Api/api';
function Form({value,setValue}:InputType) {
  return (
    <>
    <h1>POKAEMON CARD</h1>
      <form action="" className='pokeForm'>
                <input type="text" name="" id="" placeholder='Enter Your Pokemon Name' value={value} onChange={(e) => setValue(e.target.value)}/>
            </form>
    </>
  )
}

export default Form
