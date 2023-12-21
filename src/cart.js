import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./app.css"
import axios from "axios";


function Addcart() {

    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch("https://test-pi-zskh.onrender.com/cart")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
                console.log(resp)
            })
    }, [])


    const deleteData = (id) => {
        fetch("https://test-pi-zskh.onrender.com/cart/" + id, {
            method: "DELETE"
        })
            .then(() => {

                window.location.reload()
            })
            .catch((err) => {
                alert("errror")
            })

    }



    const change = (e) => {
        setValue(e.target.value)
    }
    const search = async (event) => {
        event.preventDefault()
        return await axios.get(`http://localhost:3002/commerce?q=${value}`)
            .then((res) => {
                setData(res.data)
                setValue("")
            })
            .catch((err) => {
                alert("error")
            })

    }





    const reset = (() => {
        fetch("https://test-pi-zskh.onrender.com/cart")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)

            })

    })





    useEffect(() => {
        fetch("https://test-pi-zskh.onrender.com/cart")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
                const total = resp.reduce((acc, item) => acc + parseFloat(item.price), 0)
                setTotal(total)
            })
    }, [])


    useEffect(() => {
        fetch("https://test-pi-zskh.onrender.com/cart")

            .then((res) => {
                return res.json()
                window.location.reload()
            })
            .then((resp) => {
                setCount(resp)

            })

    }, [])



    // const [count, setCount] = useState(0)


    // const increment = () => {
    //     setCount(count + 1)
    // }

    // const decrement = () => {
    //     setCount(count - 1)
    // }








    return (
        <div>
            <div >
                <div class="nav" >
                    <div  >
                        <img style={{ width: "70px", borderRadius: "60%" }} src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149699848.jpg?w=740&t=st=1701680943~exp=1701681543~hmac=d2e55ed6996db84900ba6cfe1043d1ea415add3e10202d64e47745cee5d251c1"></img>
                    </div>
                    <div style={{ marginTop: "10px", }} >
                        <h3> <span style={{ color: "purple" }}> Mobile</span><span style={{ color: "pink" }}> Store</span></h3>
                    </div>
                    <div >
                        <form onSubmit={search} class="d-flex" role="search" style={{ width: "500px", marginTop: "10px", cursor: "pointer" }}>
                            <input value={value} onChange={change} class="form-control me-2" type="search" placeholder="Search" />
                            <button class="btn btn-primary" type="submit">Search</button>
                            <i type="reset" onClick={reset} style={{ marginTop: "10px", marginLeft: "20px", cursor: "pointer", color:"white" }} class="fa-solid fa-xmark"></i>
                        </form>
                    </div>

                    <div >
                        <Link to="/cart">  <i style={{ border: "1px solid white ", borderRadius: "50%", padding: "10px", marginTop: "10px", cursor: "pointer" }} class="fa-solid fa-cart-shopping"></i>
                        <sup style={{ fontSize: "20px", color: "white" }} >{count.length}</sup></Link>



                    </div>

                    <div style={{ marginTop: "10px", color:"white" }}>

                        <h4 >

                            Total Price: ${total}/-
                        </h4>
                    </div>

                    <div>

                        <Link to="/Main">
                            <button className="btn btn-secondary">back</button>
                        </Link>
                    </div>

                </div>


            </div>


            <br></br>
            <br></br>

            <div >
                <div>


                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Img</th>
                                <th scope="col">Mobile_Name</th>
                                <th scope="col">Price</th>
                                {/* <th scope="col"> Quantity</th> */}
                                <th scope="col">Remove</th>



                            </tr>
                        </thead>


                        {data.map((ourdata) => (




                            <tbody>
                                <tr>
                                    <th scope="row">{ourdata.id}</th>
                                    <th scope="row"><img src={ourdata.img} alt="k" style={{ width: "100px", height: "90px", borderRadius: "8px" }} /></th>
                                    <th scope="row">{ourdata.name}</th>

                                    <th scope="row">₹{ourdata.price}/-</th>
                                    {/* <th scope="row">   <span><button class="btn btn-secondary" onClick={increment}>Inc</button></span>  {count} <span><button class="btn btn-secondary" onClick={decrement}>Dec</button></span></th> */}
                                    <th scope="row"><p class="btn btn-danger" onClick={() => { deleteData(ourdata.id) }}>Remove</p></th> 

                                </tr>

                            </tbody>






                        ))}
                    </table>


                </div>
            </div>
        </div>
    )

}

export default Addcart;