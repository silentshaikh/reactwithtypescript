import Error from "../Error/Error";
import type { Email } from "../Type/type"

function InputEmail({email,upEmail,error}:Email) {
  return (
    <>
      <label htmlFor="">Email Address</label>
      <input type="text" className='input' value={email} onChange={(e) => upEmail(e)} name="useremail" id="email" placeholder="Enter Your Email"/>
      {error && <Error error="Please Enter a Correct Email."/>}
    </>
  )
}

export default InputEmail;
