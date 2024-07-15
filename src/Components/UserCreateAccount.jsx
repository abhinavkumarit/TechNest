import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const UserCreatAccount = () => {

    let navigate=useNavigate();

    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [url,setImgUrl]=useState("");
    let [password,setPassword]=useState("");
    let uData={name,email,url,password};

   const handleEventCreate=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:1000/user`,uData)
        .then((res)=>{
            alert("Account created");
            navigate("/userLogin");
            
        })
        .catch((error)=>{
            alert("failed")
        })
        
   }

    return (
        <>
            

            <div className="container my-2">
                <h1 className="text-center">
                    Create Account
                </h1>
            </div>

            <div className="container border my-4">

                <form onSubmit={handleEventCreate}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>{setName(e.target.value)}} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">ImgUrl</label>
                        <input type="url" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={url} onChange={(e)=>{setImgUrl(e.target.value)}} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div className="container text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>

            </div>
        </>
    );
}

export default UserCreatAccount;