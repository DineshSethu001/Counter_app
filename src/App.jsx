import react, {useState} from 'react'
import './App.css'

const App= () => {

  const [count, setCount]=useState(0);

  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)
  const reset = () => setCount(0)
  return(
   <div className="container">
     <div className='counter_container'>
        <div className="counter_header">
        <h1>Counter App</h1>
        </div>
        <h2 >count: <span className='count'>{count}</span></h2>
       <div className="container_button">
       <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
       </div>
    </div>
   </div>
  )
}






export default App;
