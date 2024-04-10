import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from '../../redux/slices/counterSlices';

const Dashboard = () => {

  const dispatch = useDispatch()

  const count = useSelector( (state) => state?.counter?.value );

  const handalIncrement = () => {
    dispatch(increment());
  }
  
  const handalDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div>
      <h1>hii this is dashboard</h1>

      <div>
        <button onClick={() => handalIncrement()}>Increment</button>
        <div>{count}</div>
        <button onClick={() => handalDecrement()}>Decrement</button>
      </div>
    </div>
  )
}

export default Dashboard