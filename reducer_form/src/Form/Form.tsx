import { FormEvent, useReducer } from "react";
interface Input {
  name: string;
  email: string;
  number: string;
}
interface Action {
  type: string;
  field: string;
  payload?: any;
}
function Form() {
  let initVal: Input = {
    name: "",
    email: "",
    number: "",
  };
  const reducer = (state: Input, action: Action): Input => {
    switch (action.type) {
      case "HANDLE_INPUT":
        return { ...state, [action.field]: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initVal);
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.name);
    console.log(state.email);
    console.log(state.number);
  };
  return (
    <>
      <form action="" className="form" onSubmit={(e) => submitForm(e)}>
        <label htmlFor="">User Name</label>
        <input
          type="text"
          name="name"
          id=""
          required
          onChange={(e) =>
            dispatch({
              type: "HANDLE_INPUT",
              payload: e.target.value,
              field: e.target.name,
            })
          }
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id=""
          required
          onChange={(e) =>
            dispatch({
              type: "HANDLE_INPUT",
              payload: e.target.value,
              field: e.target.name,
            })
          }
        />
        <label htmlFor="">Number</label>
        <input
          type="tel"
          name="number"
          id=""
          required
          onChange={(e) =>
            dispatch({
              type: "HANDLE_INPUT",
              payload: e.target.value,
              field: e.target.name,
            })
          }
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
