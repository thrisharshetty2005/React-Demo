import React from "React";

var uname="";
function Form(){
    const handleChange=(event)=>{
        uname=event.target.value;
    };
    const handleSubmit=(event)=>{
        event.preventDefeault();
        localStorage.setition("uname",uname);
        console.log("Sessiom Date",uname);
    };
    return(
        <div>
            <h2>Login Form</h2>
            <form>
                <label>Enter Your UserName</label>
                <br></br>
                <input type="text" name="uname" onChange={handleChange}/>
                <br></br>
                
                <label>Enter Your Password</label> 
                <br></br>
                <input type="password" name="password"/>
                <br></br>
                <button type="Submit" value="Login" onClick={handleSubmit}>
                    Login
                </button>     
            </form>
        </div>
    );
}

export default Form;