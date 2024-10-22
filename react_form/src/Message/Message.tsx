import type { Message } from '../Type/type'
import Error from '../Error/Error'
function Message({message,upMessage,error}:Message) {
  return (
    <>
         <label htmlFor="">Enter Your Query</label>
         <textarea name="usermessage" id="message" cols={30} rows={8} value={message} onChange={(e) => upMessage(e)}  placeholder="Enter Your Message"></textarea>
         {error && <Error error={`Please Enter a message atleast 10 characters.`}/>}
    </>
  )
}

export default Message
