
import "./app.css"

import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {

  const [email, setEmail] = useState("")
  const [pswd, setPswd] = useState("")

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

    let obj = {
      Email: email,
      password: pswd

    }
    signInWithEmailAndPassword(auth, obj.Email, obj.password)
      .then(() => {
        alert("Login successfully")
        navigate("/Main")
      })
      .catch(() => {
        alert("error.")
      })
  }


  return (
    // <div id="go">
    //   <div className="container" style={{ width: "400px", marginTop: "100px" }}>
    //     <div class="card" id="g" >
    //       <div class="card-body">

    //         <form onSubmit={submitData}>
    //           <h2 style={{ textAlign: "center", }}>Login</h2>

    //           <div class="mb-3">
    //             <label class="form-label">Email address</label>
    //             <input type="email" required class="form-control" value={email} onChange={e => setEmail(e.target.value)} ></input>
    //           </div>
    //           <div class="mb-3">
    //             <label class="form-label">Password</label>
    //             <input type="password" required class="form-control" value={pswd} onChange={e => setPswd(e.target.value)}  ></input>
    //           </div>


    //           <button type="submit" class="btn btn-primary">Login</button>
    //         </form>
    //         <br></br>
    //         <div>
    //           <a ><b>If you dont't have an account </b>
    //             <Link to="/" style={{color:"white",textDecorationLine:"none", marginLeft:"10px",fontSize:"larger"}}>Register</Link>
    //           </a>
    //         </div>


    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div id="login" >
      <h2 id="h" > <span style={{ color: "purple" }}> Mobile</span><span style={{ color: "pink" }}> Store</span></h2>
      <div id="form" >


        <form onSubmit={submitData} >
          <h2 style={{ textAlign: "center", color: "azure" }} >Please Login</h2>

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


          <button type="submit" class="btn btn-primary" style={{ marginLeft: "60px", width: "200px", padding: "8px", color: "white", backgroundColor: " rgb(8, 4, 70)" }}>Login</button>
        </form>

        <br></br>
        <a><b>Don't have an account?</b>
          <Link to="/" style={{ textDecorationLine: "none", marginLeft: "10px", fontSize: "larger", color: "blue" }}>Register</Link>
        </a>

      </div>
    </div>
















  )
}
export default Login;