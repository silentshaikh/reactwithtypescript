import { ChangeEvent, createContext,FormEvent,useState } from "react"
import type { ContextTypes, ContType, NoteList, UserInput } from "../Type/type";
export let CretContexts = createContext<ContextTypes | null>(null);
function Contextts({children}:ContType) {
  //state for handling multiples input  
  const [userInput,setUserInput] = useState<UserInput>({userTitle:"",userSearch:"",userNotes:""});
  //state for notes array
  const [notes,setNotes] = useState<NoteList[]>([]);
  //state for edit todo
  const [togg,setTogg] = useState(false);
  //state for find edit todo id
  const [editId,setEditId] = useState(0);
  //destructuring the user input
  let {userNotes,userSearch,userTitle} = userInput;
  // handle multiple inputs
  const handleValue = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    let {name,value} = e.target;
    setUserInput((prev) => ({...prev,[name]:value}));
  };
  //handle for submition
  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     // userTitle and userNotes is empty
    if(userTitle === "" || userNotes === ""){
      alert("Please Enter Your title and note.")
    }else if((userNotes && userTitle) && togg){
      //for edit a todo
      setNotes(notes.map((e) => {
        if(e.id === editId){
          return {...e,title:userTitle, notes:userNotes};
        }else{
          return e
        }
      }))
      setTogg(false);
      setEditId(0);
      setUserInput((prev) => ({...prev,userNotes:"",userTitle:""}))
    }
    else{
      //find duplicate title
      let findDuplict = notes.find((e) => e.title.toLowerCase().split(/\s+/).join("").includes(userTitle.toLowerCase().split(/\s+/).join("")));
      // if duplicate title has found
      if(findDuplict){
        alert("Duplicate Title is not Allow");
      }else{
        //create date and month object
        let ourDate = new Date();
        let monthList:string[] = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        // create an object for notes array
        let noteObj:NoteList = {
          id:ourDate.getTime(),
          title:userInput.userTitle,
          notes:userInput.userNotes,
          date:`${ourDate.getDay()}-${monthList[ourDate.getMonth()]}-${ourDate.getFullYear()}`,
        }
        // update the note state
        setNotes((prev) => [...prev,noteObj]);
        // empty the input field
        setUserInput((prev) => ({...prev,userNotes:"",userTitle:""}))
      }
    }
  };
  //notes will be going to delete
  const onDelete = (id:number) => {
    let filtNotes = notes.filter((e) => {
      return e.id !== id;
    });
    setNotes(filtNotes);
  };
  //  notes will be going to edit
  const onEdit = (id:number) => {
    let findEditId = notes.find((e) => e.id === id);
    if(findEditId){
      setEditId(findEditId.id);
      setTogg(true);
      setUserInput((prev) => ({...prev, userNotes:findEditId.notes,userTitle:findEditId.title}));
    }
  }
  //search the notes title
  let searchNotes = notes.filter((e) => {
    return e.title.toLowerCase().split(/\s+/).join("").includes(userSearch.toLowerCase().split(/\s+/).join(""))
  })
  return (
    <>
      <CretContexts.Provider value={{userNotes,userSearch,userTitle,searchNotes,handleValue,notes,setNotes,onSubmit,onDelete,onEdit}}>
          {children}
      </CretContexts.Provider>
    </>
  )
}

export default Contextts
