
import "./app.css"

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { cloneElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const [cpswd, setCpswd] = useState("")

    const navigate = useNavigate()



    const firebaseConfig = {
        apiKey: "AIzaSyClEH1wG_p4Bk7y8dl88UEi1OcSmd_7Yl4",
        authDomain: "pro-app-7adb5.firebaseapp.com",
        projectId: "pro-app-7adb5",
        storageBucket: "pro-app-7adb5.appspot.com",
        messagingSenderId: "840528707586",
        appId: "1:840528707586:web:759e54f6d5ecf02251671b",
        measurementId: "G-Q000JTLWD8"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth()
    const submitData = (event) => {
        event.preventDefault()
        if (pswd !== cpswd) {
            alert("Password does not match....")
        }

        let obj = {
            Email: email,
            password: pswd

        }
        createUserWithEmailAndPassword(auth, obj.Email, obj.password)
            .then(() => {
                alert("Registred successfully")
                navigate("/Login")
            })
            .catch(() => {
                alert("error.")
            })
    }


    return (

        <div id="signup" >
            <h2 id="h" > <span style={{ color: "purple" }}> Mobile</span><span style={{ color: "pink" }}> Store</span></h2>
            <div id="blur" >


                <form onSubmit={submitData} >
                    <h2 style={{ textAlign: "center", color: "white" }} >SignUp</h2>
                    <div>
                        <label  ><b style={{ fontSize: "larger" }}>Name:</b></label>
                        <br></br>
                        <input style={{ textAlign: "center", width: "330px", padding: "5px", borderRadius: "5px" }} type="text" required placeholder="enter your full name"  value={name} onChange={e => setName(e.target.value)}  ></input>
                    </div>
                    <div>
                        <br></br>
                        <label><b style={{ fontSize: "larger" }}>E-mail:</b></label>
                        <br></br>
                        <input style={{ textAlign: "center", width: "330px", padding: "5px", borderRadius: "5px" }} type="email" required placeholder="enter your e-mail" value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <br></br>
                        <label><b style={{ fontSize: "larger" }}>Password:</b></label>
                        <br></br>
                        <input style={{ textAlign: "center", width: "330px", padding: "5px", borderRadius: "5px" }} type="password" required placeholder="password" value={pswd} onChange={e => setPswd(e.target.value)} ></input>
                    </div>
                    <br></br>
                    <div>
                        <label><b style={{ fontSize: "larger" }}>Confirm-password:</b></label>
                        <br></br>
                        <input style={{ textAlign: "center", width: "330px", padding: "5px", borderRadius: "5px" }} type="password" required placeholder="confirm-password" value={cpswd} onChange={e => setCpswd(e.target.value)}  ></input>
                    </div>
                    <br></br>

                    <button type="submit" class="btn btn-primary" style={{ marginLeft: "60px", width: "200px", padding: "8px", color: "white", backgroundColor: " rgb(8, 4, 70)" }}>Register</button>
                </form>

                <br></br>
                <a><b>If you have an account</b>
                    <Link to="/Login" style={{ textDecorationLine: "none", marginLeft: "10px", fontSize: "larger", color: "blue" }}>Login here</Link>
                </a>

            </div>
        </div>




    )
}
export default Signup;