



// import "./app.css"
// import Details from "./details";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { signOut, getAuth } from "firebase/auth"
import { useEffect, useState } from "react";
// import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "./name"
import { Pagination } from "./Pagination";

function Main() {

    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const navigate = useNavigate()


    let currentUser = UserAuth()





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

        signOut(auth)
            .then(() => {
                alert("Logout successfully")
                navigate("/Login ")
            })
            .catch(() => {
                alert("error.")
            })
    }

    useEffect(() => {
        fetch("https://test-pi-zskh.onrender.com/commerce")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)

            })

    }, [])

    const change = (e) => {
        setValue(e.target.value)
    }
    const search = async (event) => {
        event.preventDefault()
        return await axios.get(`https://test-pi-zskh.onrender.com/commerce?q=${value}`)
            .then((res) => {
                setData(res.data)
                setValue("")
            })
            .catch((err) => {
                alert("error")
            })

    }

    const reset = (() => {
        fetch("https://test-pi-zskh.onrender.com/commerce")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)

            })

    })


    const [sort, setSort] = useState("")
    const sorting = async (e) => {
        let value = e.target.value
        setSort(value)
        return await axios.get(`https://test-pi-zskh.onrender.com/commerce?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const adddata = (id) => {
        fetch("https://test-pi-zskh.onrender.com/commerce/" + id)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                fetch("https://test-pi-zskh.onrender.com/cart", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(resp)
                }).then(() => {
                    window.location.reload()

                })


            })
    }



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





    const [page, setPage] = useState(1)
    const [records, setRecords] = useState(8)
    let lr = page * records
    let fr = lr - records

    let mydata = data.slice(fr, lr)
    const update = (n) => {
        setPage(n)


    }

    const next = () => {
        setPage(page + 1)
    }
    const prev = () => {
        setPage(page - 1)
    }



    const num = (() => {

    })

    const Deta = (id) => {
        navigate("/Details/" + id)
    }



    return (


        <div >
            <div class="nav" >
                <div  >
                    <img style={{ width: "70px", borderRadius: "60%" }} src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149699848.jpg?w=740&t=st=1701680943~exp=1701681543~hmac=d2e55ed6996db84900ba6cfe1043d1ea415add3e10202d64e47745cee5d251c1"></img>
                </div>
                <div style={{ marginTop: "10px", }} >
                    <h2> <span style={{ color: "purple" }}> Mobile</span><span style={{ color: "pink" }}> Store</span></h2>
                </div>
                <div >
                    <form onSubmit={search} class="d-flex" role="search" style={{ width: "500px", marginTop: "10px", cursor: "pointer" }}>
                        <input value={value} onChange={change} class="form-control me-2" type="search" placeholder="Search" />
                        <button class="btn btn-primary" type="submit">Search</button>
                        <i type="reset" onClick={reset} style={{ marginTop: "10px", marginLeft: "20px", cursor: "pointer" }} class="fa-solid fa-xmark"></i>
                    </form>
                </div>
                <div >
                    <Link to="/cart">
                        <i style={{ border: "1px solid black ", borderRadius: "50%", padding: "10px", marginTop: "10px", cursor: "pointer" }} class="fa-solid fa-cart-shopping"></i> </Link>
                    <sup style={{ fontSize: "20px", color: "white" }} >{count.length}</sup>

                </div>
                <div>
                    <h4 style={{ marginTop: "10px", border: "2px solid white", color: "white", padding: "10px", borderRadius: "20px" }}> <i class="fa-solid fa-user"></i>:{currentUser?.email}   </h4>
                </div>

                <div>
                    <form onSubmit={submitData} style={{ marginTop: "10px", }}>
                        <button type="submit" class="btn btn-danger">Logout</button>
                    </form>

                </div>
            </div>





            <div class="parent" style={{ paddingTop: "30px" }} >
                <div class="child1" >
                    <form onSubmit={submitData} >


                        <div className="mb-3" style={{ width: "300px", marginLeft: "20px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option >shop by consern</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "300px", marginLeft: "20px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Shop by category</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "300px", marginLeft: "20px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Shop by product</option>
                            </select>
                        </div>

                        <div className="mb-5" style={{ width: "300px", marginLeft: "20px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Shop by all</option>
                            </select>
                        </div>



                    </form>

                    <form style={{ textAlign: "center", marginTop: "30px", marginLeft: "10px", width: "330px", height: "60px", padding: "10px", borderRadius: "10px" }}>
                        <div className="mb-3"  >
                            <select value={sort} onChange={sorting} id="disabledSelect" class="form-select">
                                <option>select</option>
                                <option>id</option>
                                <option>name</option>
                                <option>brand</option>
                                <option>price</option>
                            </select>
                        </div>
                    </form>








                </div>


                <div class="child2"  >
                    {mydata.map((item) => (


                        <div style={{ marginTop: "5px", borderRadius: "10px", backgroundColor: "rgba(240, 247, 215, 0.871)", width: "16rem", padding: "5px", paddingLeft: "20px", borderBox: "2px" }}>
                            <img style={{ width: "200px", height: "250px" }} src={item.img} alt="." />
                            <h4><b>{item.name}</b></h4>
                            <h5></h5>
                            <h5 >price:<b>₹{item.price}/-</b></h5>
                            <h5     >
                                <a style={{ marginLeft: "15px", }} className="btn btn-primary" onClick={() => { adddata(item.id) }}>ADD CART</a>

                                <p style={{ marginLeft: "15px", position: "relative", top: "8px" }} className="btn btn-success" onClick={() => { Deta(item.id) }}>Details</p>

                                <button style={{ width: "220px", color: "dark" }} type="button" class="btn btn-outline-warning">BY NOW</button>

                            </h5>

                        </div>


                    ))}




                    <p> <Pagination total={data.length} records={records} update={update} next={next} prev={prev} /></p>

                </div>



            </div>



            <div className="fo"  >


                <div style={{ paddingTop: "20px", marginLeft: "20px" }}>
                    <h5>LOGO</h5>
                    <p>SUB LINE</p>
                </div>

                <div style={{ marginLeft: "200px" }}>
                    <h4>Pages</h4>
                    <p>About us</p>
                    <p>Our Expertise</p>
                    <p>Testimonials</p>
                    <p>Car & sparparts</p>
                    <p>Buy</p>
                </div>

                <div style={{ marginLeft: "200px" }}>
                    <h4>Legal and Help</h4>
                    <p>FAQs</p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                </div>

                <div style={{ marginLeft: "200px" }}>
                    <h4>Contact us</h4>
                    <p> <i class="fa-solid fa-location-dot"></i> Address</p>
                    <p> <i class="fa-solid fa-mobile"></i> 6281944655</p>
                    <p> <i class="fa-solid fa-envelope"></i> nishanthummuru@gmail.com</p>
                </div>

                <div style={{ marginLeft: "180px" }}>
                    <h5>Social Link</h5>
                    <br />
                    <div style={{ display: "flex", gap: "15px" }}>
                        <i class="fa-brands fa-facebook fa-xl"></i>
                        <i class="fa-brands fa-twitter fa-xl"></i>
                        <i class="fa-brands fa-instagram fa-xl"></i>
                        <i class="fa-brands fa-youtube fa-xl"></i>
                    </div>
                </div>
            </div>


        </div>




















    )
}
export default Main;