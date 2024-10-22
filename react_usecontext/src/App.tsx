
import Box1 from './PropDrilling/Box1'
import Comp1 from './ContextsHook/Comp1'
import User1 from './ContextsHook/User1'
import User2 from './ContextsHook/User2'
import Heading from './Heading'
import Context from './ContextTwo/Context'
import Login from './ContextTwo/Login'
import Profle from './ContextTwo/Profle'

function App() {
  return (
    <>
    {/* <Heading/>
     <User1/>
     <User2/> */}
     
     <Context>
     <>
     <Login/>
     <Profle/>
     </>
     </Context>
    </>
  )
}

export default App;
