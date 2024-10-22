import { useGLobalContext } from "../Contexts/Contexts"

function List() {
  let ourContext = useGLobalContext();
  return (
    <>
      <ul>
        {ourContext.map((e) => {
          return(
            <li key={e.id}>{e.title}</li>
          );
        })}
      </ul>
    </>
  )
}

export default List
