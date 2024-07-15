import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
    let navigate = useNavigate();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [uData, setUData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1000/user")
            .then((res) => {
                setUData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleEventCall = (e) => {
        e.preventDefault();
        const user = uData.find((x) => x.email === email && x.password === password);
        if (user) {
            alert("Login successful");
            navigate("/user", { state: { user } });
        } else {
            alert("Failed to login. Please create an account.");
        }
    };

    return (
        <>
            <h2 className="text-center">User Login</h2>
            <div className="container my-4 border">
                <form onSubmit={handleEventCall}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="container text-center">
                        <a className="text-center text-primary" href="/createaccount">Create new account</a>
                    </div>
                </form>
            </div>

            
        </>
    );
}

export default UserLoginPage;
