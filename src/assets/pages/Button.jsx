import React from "react";

function Button(){
    const handleSubmit=()=>{
      alert("Hello")
    };
    const handlerClick=(x)=>{
        alert(x);
    };
    return(
     <div>
        <button onClick={handleSubmit}>Click</button>
        <br></br>
        <button onClick={()=>handlerClick("Button is clicked")}>Submit</button>
    </div>
    );
}

export default Button;