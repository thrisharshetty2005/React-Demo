import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Conditional from "./assets/pages/Conditional";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Test />
      <h1 className="">React is {5+5} times better with 35X</h1>*/}
      {/*<Student name="thrisha" age="12"/>*/}
      {/*<Button/>*/}
      <Conditional />
    </>
  
  );
}
export default App
