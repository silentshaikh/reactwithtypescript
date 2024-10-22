import Error from '../Error/Error';
import type { User } from '../Type/type';
function InputUser({name,upUser,error}:User) {
  return (
    <>
       <label htmlFor="">Username</label>
       <input type="text" className='input' value={name} onChange={(e) => upUser(e)} name="username" id="user" placeholder="Enter Your Name" />
       {error && <Error error= {`Invalid username. It should be in the format: "letters_Letters123" , "letters_letters123". `} />}
    </>
  );
}

export default InputUser;
