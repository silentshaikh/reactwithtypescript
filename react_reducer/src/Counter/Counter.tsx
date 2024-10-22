import { useCustomHook } from '../Contexts/Contexts';
function Counter() {
    const custmHook = useCustomHook();
  return (
    <>
     <h1>{custmHook && custmHook.state.count < 1 ? 0: custmHook?.state.count}</h1> 
     <button onClick={() => custmHook?.dispatch({type:"INCREMENT"})}>INC</button>
     <button onClick={() => custmHook?.dispatch({type:"DECREMENT"})}>DEC</button>
    </>
  );
};
export default Counter;