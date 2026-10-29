import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/counterSlice";


const App = () => {
  const {count} = useSelector((store)=> store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter is {count}</h1>
      <button onClick={()=>dispatch(increment("action payload"))}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App