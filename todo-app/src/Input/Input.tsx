import { ChangeEvent } from "react"
import type { InputType } from "../Type/type"
import { IoAdd } from "react-icons/io5";
// import Marquee from 'react-fast-marquee';
function Input({inputValue,setValue,submitTodo}:InputType) {
  return (
    <>
      <form action="" className="input-form" onSubmit={(e:ChangeEvent<HTMLFormElement>) => submitTodo(e)}>
        <input type="text" name="" id="" placeholder="Enter Your Todo" value={inputValue} onChange={(e:ChangeEvent<HTMLInputElement>):void => setValue(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  )
}

export default Input
