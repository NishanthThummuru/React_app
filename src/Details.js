




import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



function Details() {

    let { id } = useParams()

    const [det, setDet] = useState()

    useEffect(() => {
        fetch("https://test-pi-zskh.onrender.com/commerce/" + id)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                
                setDet(resp)
            })
    }, [])

    return (

        <div>

            <div >
                <div class="nav" >
                    <div  >
                        <img style={{ width: "70px", borderRadius: "60%" }} src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149699848.jpg?w=740&t=st=1701680943~exp=1701681543~hmac=d2e55ed6996db84900ba6cfe1043d1ea415add3e10202d64e47745cee5d251c1"></img>
                    </div>
                    <div style={{ marginTop: "10px", }} >
                        <h2> <span style={{ color: "purple" }}> Mobile</span><span style={{ color: "pink" }}> Store</span></h2>
                    </div>
                    <div>  <h1 style={{color:"white"}}>Details of the Product</h1></div>
                    <div style={{ marginRight: "100px", marginTop: "10px" }}>

                        <Link to="/Main">
                            <button className="btn btn-danger">back</button>
                        </Link>
                    </div>

                </div>


            </div>


            <br></br>
            <br></br>


            {det &&
                <div class="con">
                    <div><img src={det.img} style={{ width: "500px", height: "700px" }} /></div>

                    <br></br>
                    <div style={{ marginLeft: "20px" }}>
                        <div> <h2>{det.NAME}</h2></div>

                        <br></br>
                        <div> <h3 > <span style={{ color: "rgb(89, 89, 124)" }}> Price:</span> <span style={{ color: "#20c997" }}>  <sup>₹</sup> {det.price}/-</span></h3></div>
                        <div> <h2 class="text-warning text-opacity-75" >different types colors are available:  </h2>
                            <h4> {det.colors}</h4>
                        </div>

                        <div><h5> <h3 class="text-secondary text-opacity-5o" > About the item: </h3>  {det.details} <br></br> <br></br>   {det.details1}  <br></br> <br></br>   {det.details2}  <br></br> <br></br>   {det.details3}  <br></br> <br></br>   {det.details4}  <br></br> <br></br>   {det.details5}</h5></div>
                        <br />

                        <div>  <h5>{det.p}</h5></div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Details;
