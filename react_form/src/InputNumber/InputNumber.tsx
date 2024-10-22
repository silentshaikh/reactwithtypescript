import Error from '../Error/Error'
import type { Numbers } from '../Type/type'
function InputNumber({number,upNumber, error}:Numbers) {
  return (
    <>
      <label htmlFor="">Phone Number</label>
      <input type="text" className='input' name="usernumber" value={number} onChange={(e) => upNumber(e)} id="number" placeholder="Enter Your Phone" />
      {error && <Error error='Please Enter only 11 Digits.'/>}
    </>
  )
}

export default InputNumber
