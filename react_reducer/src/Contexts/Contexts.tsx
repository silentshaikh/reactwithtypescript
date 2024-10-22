import { createContext, useContext, useReducer } from 'react'
import type { States,Action ,ContextType, ContextChild} from '../type';
let CreteContext = createContext<ContextType|null>(null);

function Contexts({children}:ContextChild) {
    let stateCount:States = {
        count:0,
    };
    const ourReducer = (state:States,action:Action):States => {
        switch (action.type) {
            case 'INCREMENT':
                return {count:state.count + 1};
            case 'DECREMENT':
                return {count:state.count - 1};
            default:
                return {count:state.count};
        };
    };
    const [state,dispatch] = useReducer(ourReducer,stateCount);
  return (
    <>
      <CreteContext.Provider value={{state,dispatch}}>
        {children}
      </CreteContext.Provider>
    </>
  )
};
export default Contexts;
export const useCustomHook = () => {
    return useContext(CreteContext);
};
