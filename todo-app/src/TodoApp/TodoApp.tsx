import { ChangeEvent, useState} from 'react';
import Input from '../Input/Input';
import Todo from '../Todo/Todo';
import Heading from '../Heading/Heading';
import type { TodoList } from '../Type/type';
import CustomAlert from '../Alert/CustomAlert';
import AlertTwo from '../AlertTwo/AlertTwo';
function TodoApp() {
    const [inp,setInp] = useState<string>("");
    const [todo,setTodo] = useState<TodoList[]>([]);
    const [error,setError] = useState<boolean>(false);
    const [warn,setWarn] = useState<boolean>(false);
    const [toggEdit,setToggEdit] = useState<boolean>(true);
    const [editItemId,setEditItemId] = useState<number>(0);
    const todoSubmit = (e:ChangeEvent<HTMLFormElement>):void => {
      e.preventDefault();
      if(inp === ""){
        // alert("Please fill the input");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }else if(inp && !toggEdit){
        setTodo(
          todo.map((e) => {
            if(e.id === editItemId){
              return {...e,todo:inp}
            }else{
              return e;
            }
          })
        )
        setToggEdit(true)
        setEditItemId(0);
        setInp("")
      }
      else{
        let findDuplictTodo:TodoList|undefined = todo.find((e:TodoList):boolean => e.todo.toLowerCase().split(/\s+/).join("") === inp.toLowerCase().split(/\s+/).join(""));
        if(findDuplictTodo?.todo){
          setInp("");
          setWarn(true);
          setTimeout(() => {
            setWarn(false);
          }, 5000);
        }else{
          let todoApp:TodoList = {
            id:new Date().getTime(),
            todo:inp,
            checked:false,
          };
          setTodo((prev:TodoList[]):TodoList[] => [...prev,todoApp]);
          setInp("")
        } 
      }
    };
    const onDeleteTodo = (todoIndex:number) => {
      let deleteTodo = todo.filter((e) => e.id !== todoIndex);
      setTodo(deleteTodo);
    };
    const onEditTodo = (editId:number) => {
      let findTodoForEdit:TodoList|undefined = todo.find((e) => e.id === editId);
      if(findTodoForEdit){
        setToggEdit(false);
        setInp(findTodoForEdit.todo);
        setEditItemId(findTodoForEdit?.id)
      }
    };
    const onTaskCompleted = (todos:string) => {
      let completeTaskList = todo.map((e) => {
        if(e.todo === todos){
          return {...e,checked:!e.checked};
        }else{
          return e;
        }
      });
      setTodo(completeTaskList);
    }

  return (
    <>
    <div className="todoapp">
      {error ?  <CustomAlert/> : ""}
      {warn ? <AlertTwo/> : ""}
        <Heading/>
    <Input inputValue={inp} setValue={setInp} submitTodo={todoSubmit}/>
    <Todo todoList={todo} deleteTodo={onDeleteTodo} editTodo={onEditTodo} taskComplete={onTaskCompleted} /> 
    </div>
    </>
  )
}

export default TodoApp
