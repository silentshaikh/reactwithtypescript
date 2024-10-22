import type { List } from "../Type/type"
import { Tooltip } from "antd";
import { CiEdit } from "react-icons/ci"
import { MdDelete } from "react-icons/md"
function ListItem({ids,todo,editTodo,deleteTodo,checked,taskComplete}:List) {
  return (
    <>
      <li >
         <div className="data">
         <input type="checkbox" checked={checked} name="" id="" onChange={() =>taskComplete(todo) } />
         <p className={checked ? "check" : "uncheck"}>{todo}</p> 
         </div>
        <div className="icons">
          {/* Use of ToolTip we will provide an error */}
        {/* <Tooltip placement="top" title="Edit" color="#55efc4" > */}
       <CiEdit className="edit" onClick={() => editTodo(ids)} />
        {/* </Tooltip> */}
        {/* <Tooltip placement="top" title="Delete" color="#fab1a0"  > */}
        <MdDelete className="del" onClick={() => deleteTodo(ids)}/>
        {/* </Tooltip> */}
          </div>
          </li>
    </>
  )
}

export default ListItem
