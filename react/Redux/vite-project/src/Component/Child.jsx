import React from 'react'
import { useSelector } from 'react-redux'
const Child = () => {
     const count = useSelector(state=>state.counter.value) 
  return (
    <div>
      <h5>{count}</h5>
    </div>
  )
}

export default Child
