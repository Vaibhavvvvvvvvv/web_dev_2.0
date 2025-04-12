import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './Redux/Counter/counterSlice'
import Child from './Component/Child'
function App() {
  const count = useSelector(state=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Child/>
      <div>
        <h1>Redux-Toolkit</h1>
        <button onClick={()=>{
          dispatch(decrement())
        }}>-</button>
        <h5>{count}</h5>
        <button onClick={()=>{
          dispatch(increment())
        }}>+</button>
      </div>
    </>
  )
}
export default App
