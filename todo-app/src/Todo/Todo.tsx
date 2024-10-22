import type { Todo } from "../Type/type"
import ListItem from "../ListItem/ListItem"
function Todo({todoList,deleteTodo,editTodo,taskComplete}:Todo) {
  return (
    <>
      <ol className="list">
          {todoList.map((e) => {
            return (
              <ListItem key={e.id} ids={e.id} todo={e.todo} checked={e.checked} deleteTodo={deleteTodo} editTodo={editTodo} taskComplete={taskComplete}/>
            );
          })}
      </ol>
    </>
  )
}

export default Todo;
