import react from "react";
import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";


function App() {
  return (
    <>
    Counter
    <Counter initialCount={0} />
    Counter Hooks
    <CounterHooks initialCount={0}/>
    </>
  )
}

export default App;
