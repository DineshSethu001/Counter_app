import react, {useState} from 'react'

const App= () => {

  const [count, setCount]=useState(0);

  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)
  const reset = () => setCount(0)
  return(
    <>
        <h1>Counter App</h1>
        <h2>count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}






export default App;
