import type { InputType } from '../Type/type';
function Form({value,setValue}:InputType) {
  return (
    <>
  <header className='poke-header'>
  <h1 className='head-poke'>POKAEMON CARD</h1>
     <input type="text" name="" id="" placeholder='Enter Your Pokemon Name' value={value} onChange={(e) => setValue(e.target.value)}/>
  </header>
    </>
  )
}

export default Form
