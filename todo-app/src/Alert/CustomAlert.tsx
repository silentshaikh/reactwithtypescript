import { Alert } from 'antd'
import Marquee from 'react-fast-marquee';
function CustomAlert() {
  return (
    <>
       <Alert className='alert'
    banner
    type='error'
    message={
      <Marquee pauseOnHover gradient={false}>
    <h2 className='error'>error: </h2> please enter a todo.
      </Marquee>

    }
  />
    </>
  )
}

export default CustomAlert;
