import Signup from "./Signup"
import Login from "./Login"
import Main from "./Main.js"
import Addcart from "./cart.js"
import Details from "./Details";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function Rou() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Main" element={<Main/>}/>
                    <Route path="/cart" element={<Addcart/>}/>   
                    <Route path="/Details/:id" element={<Details/>}/> 

                
                </Routes>

            </Router>
        </div>
    )
}
export default Rou;