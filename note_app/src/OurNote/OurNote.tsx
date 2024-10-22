import { useContext } from "react"
import { CretContexts } from "../Contextts/Contextts"
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";

function OurNote() {
  let noteContext  =  useContext(CretContexts);
  return (
    <div className="note-container" >
      {noteContext?.searchNotes.map((e) => {
        return (
          <div className="note" key={e.id}>
        <div className="box1">
        <h3>{e.title}</h3>
        <p>{e.notes}</p>
      </div>
      <div className="box2">
        <div className="icons">
        <AiOutlineDelete className="delete" onClick={() => noteContext.onDelete(e.id)}/>
        <FiEdit3 className="edit" onClick={() => noteContext.onEdit(e.id)}/>
        </div>
        <h4>{e.date}</h4>
      </div>
        </div>
        );
      })}
      
    </div>
  )
}

export default OurNote
