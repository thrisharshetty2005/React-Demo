import React from "react";

function Student(props){
    return(
       <div>
          <h2>
            Welcome {props.name} age is {props.age}
           </h2>
        </div>
    );
}

export default Student