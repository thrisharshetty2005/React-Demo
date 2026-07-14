import React from "react";

function Test(){
    let x=10;
    let text="Goodbye";
    if (x >=10){
        text="hello";
    }
    return(
        <div>
            <h1>{text}</h1>
        </div>
    );
}

export default Test;