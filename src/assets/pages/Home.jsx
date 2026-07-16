import { useState, useRef, useEffect } from "react";

function Home() {
  const [count,setCount]=useState(0);
  const inputRef=useRef();
  //useEffect{()=> {},[]};
  useEffect(()=>{
    alert("Component Laoaded")
  },[]);

  const focusInput=()=>{
    console.log(inputRef);

    inputRef.current.focus();
  };


  let myStyle={
    color:"white",
    backgroundColor:"DodgerBlue",
    padding:"10px",
    fontFamily:"sana-Serif"
  }
  return (
    <div>
      <h1 style={{color: "green" ,backgroundColor:"white"}}>Welcome to Home Page</h1>
      <p style={myStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati iure quo debitis voluptate consequuntur similique maiores reprehenderit delectus alias.
      </p>

    <h2>
      count:{count}
    </h2>
    <button onClick={()=> setCount(count + 1)}>Increment</button>
    <br></br>
    <button onClick={()=> setCount(count - 1)}>Decrement</button>

    
    <div>
      <input ref={inputRef}/>
      <button onClick={focusInput}>focus</button>
    </div>
    </div>
  );
}

export default Home;