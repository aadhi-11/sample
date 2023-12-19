import React from "react";
const UserRegistration=()=>{
    return(
        <div className="main-div">
            <div className="form-div">
            <form action="">
                <div className="form-field">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" name="Name" id="" />
                </div>
                
                <div className="form-field">
                    <label htmlFor="Phone">Phone:</label>
                    <input type="Number" name="Phone" id="" />
                </div>

                <div className="form-field">
                    <label htmlFor="Email">Email:</label>
                    <input type="Email" name="Email" id="" /> 
                </div>   

                <div className="form-field">
                    <label htmlFor="Password">Password:</label>
                    <input type="Password" name="Password" id="" /> 
                </div>  

                <div className="btn-super">
                    <input type="button" value="submit" className="btn" />    
                </div>     
            </form>
            </div>
        </div>
    )
}
export default UserRegistration;