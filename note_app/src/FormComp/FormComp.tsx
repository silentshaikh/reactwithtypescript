import { useContext } from "react"
import { CretContexts } from "../Contextts/Contextts"

function FormComp() {
  let ourContextForm = useContext(CretContexts)
  return (
    <>
      <form action="" className="note-form" onSubmit={ourContextForm?.onSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" name="userTitle" id="" placeholder="Enter Your Title"  value={ourContextForm?.userTitle} onChange={(e) => ourContextForm?.handleValue(e)} />
        <label htmlFor="">Notes</label>
        <textarea name="userNotes" id="" placeholder="Enter Your Textarea" cols={2} rows={10}  value={ourContextForm?.userNotes} onChange={(e) => ourContextForm?.handleValue(e)}></textarea>
        <button type="submit">Add Notes</button>
      </form>
    </>
  )
}

export default FormComp
