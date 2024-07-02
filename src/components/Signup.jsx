import './Signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import { Alert } from 'bootstrap';
function Signup(){
    //Declaration of state variables
    const [userName,setuserName] = useState("");
    const [userEmail,setuserEmail] = useState("");
    const [userContactNumber,setuserContactNumber] = useState("");
    const [userPassword,setuserPassword] = useState("");


    
    const addUser = () =>{
        Axios.post('https://hearbackend.vercel.app/HeartAttackDB/Users/registerUser', {
          userName: userName,
          userEmail: userEmail,
          userContactNumber: userContactNumber,
          userPassword: userPassword,

        }).then((response) =>{
          if(response.status == 201)
            {
              alert("User Added Successfully")
            }
        });
    };



    return ( 
        <div className = "signup-form-container">
            <div className = "signup">
                <div className ="signup-title">
                    <h1>SIGN UP</h1>
                </div>
                <div className = "signup-data">
                    <div className = "signup-usernameEmail-container">
                        <input  type="text" placeholder="Username" maxLength="20" onChange={(event) =>{
                        setuserName(event.target.value)}}/>
                    </div>
                    <div className = "signup-usernameEmail-container">
                        <input type="text" placeholder="Email" maxLength="50" onChange={(event) =>{
                        setuserEmail(event.target.value)}} />
                    </div>
                    <div className = "signup-passwordConfirm-container">
                        <input  type="text" placeholder="Phone No" maxLength="30" onChange={(event) =>{
                        setuserContactNumber(event.target.value)}}/>
                    </div>
                    <div className = "signup-passwordConfirm-container">
                        <input type="text" placeholder="Password" maxLength="30" onChange={(event) =>{
                        setuserPassword(event.target.value)}}/>
                    </div>
                </div>
                <div className = "signup-button">
                    <button onClick={addUser}>Sing Up</button>
                    <span>Already have an account? <Link to="/">Login</Link></span>
                </div>
            </div>
        </div>
     );
    
}
 
export default Signup;