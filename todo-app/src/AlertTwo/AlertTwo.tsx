import { Alert } from 'antd'
import Marquee from 'react-fast-marquee'
function AlertTwo() {
  return (
    <>
      <Alert className='alert'
    banner
    type='warning'
    message={
      <Marquee pauseOnHover gradient={false}>
    <h2 className='error'>Warning: </h2> Don't Enter a Duplicate Todo
      </Marquee>

    }
  />
    </>
  )
}

export default AlertTwo
