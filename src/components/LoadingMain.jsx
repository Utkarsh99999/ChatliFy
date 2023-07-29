import React from 'react'
import Loading from './LoadingPage';
const LoadingPage = ({time}) => {
  return (
    <div className='load'>
    <Loading time={time}/>
    </div>
  )
}
export default LoadingPage
