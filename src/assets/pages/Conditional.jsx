import React from "react";

function Conditional(){
    //conditional using if statement
    let isloggedIn=true;
    if (isloggedIn){
        return <h1>Welcome,Admin</h1>
    } else{
        return<h1>Please try again</h1>
    } 

//using ternary operator
return (
    <div>
     {isloggedIn ? <h1>Welcome,Admin</h1> : <h1>Please try again</h1>}
    </div>
);

return <div>{isloggedIn && <h1> Welcome Admin</h1>}</div>;

return(
    <div>
        <h1>{name|| "Guest User"}</h1>
    </div>
  );


}

export default Conditional;