
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    let [name,setName]=useState("");
    let [password,setPassword]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let [url,setUrl]=useState("");
    let data={name,email,phone,url,password};

    let navigate = useNavigate();


    function AddLoginDetais(event){
        event.preventDefault();
        axios.post("http://localhost:1000/admin",data)
        .then((res)=>{
            alert("Created Account Successfully");
            navigate("/login");
        })
        .catch((error)=>{
            alert(error);
        })
    }



    return (
    <>

<div id="liveAlertBtn" className="mb-3 wb-400px"></div>

        <div class="container col-md-4 border">
            <h1 class="">Create Account</h1>
            <form className="container" onSubmit={AddLoginDetais}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Admin Name</label>

                    <div className="col">
                        <input type="text" value={name} class="form-control" placeholder="name" aria-label="First name" required onChange={(event)=>{setName(event.target.value)}} />
                    </div>
                   
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>

                    <div className="col">
                        <input type="text" value={email} class="form-control" placeholder="@gmail.com" aria-label="First name" required onChange={(event)=>{setEmail(event.target.value)}} />
                    </div>
                    
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Img url</label>

                    <div className="col">
                        <input type="text" value={url} class="form-control" placeholder="Img url" aria-label="First name" required onChange={(event)=>{setUrl(event.target.value)}} />
                    </div>
                    
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Contact Number</label>

                    <div className="col">
                        <input type="" value={phone} class="form-control" placeholder="+91" aria-label="First name" required onChange={(event)=>{setPhone(event.target.value)}} />
                    </div>
                    
                    <div id="emailHelp" class="form-text">We'll never share your contact number with anyone else.</div>
                </div>
                <div class="mb-3">
                    <div class="col">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={password} class="form-control" id="exampleInputPassword1" placeholder="*****" required onChange={(event)=>{setPassword(event.target.value)}} />
                    </div>

                </div>

                <div className="d-flex justify-content-center mb-3">
                    <button type="submit" id="liveAlertBtn" class="btn btn-primary mb-3">Creat Account  </button>
                </div>

                {/* <button type="submit" id="liveAlertBtn" class="btn btn-primary mb-3">Creat Account</button> */}
            </form>
        </div>
    </>

    );
}

export default AdminLogin;