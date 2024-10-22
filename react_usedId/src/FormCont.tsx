import { useId } from 'react'

function FormCont() {
    let userId = useId();
    let emailId = useId();
    let maleId = useId();
    let femaleId = useId();

  return (
    <form action=''>
      <label htmlFor={userId}>UserName</label>
      <input type="text" name="" id={userId} placeholder='Enter Your Name' />
      <label htmlFor={emailId}>Email</label>
      <input type="email" name="" id={emailId} placeholder='Enter Your Email' />
      <label htmlFor="">Gender  </label>
      <label htmlFor={maleId}>Male</label>
      <input type="radio" name="gender" id={maleId} />
      <label htmlFor={femaleId}>Female</label>
      <input type="radio" name="gender" id={femaleId} />
    </form>
  )
}

export default FormCont
