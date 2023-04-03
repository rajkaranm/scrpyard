import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Topbar() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/search", {state: {search}})
    }
    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark" href="">FAQs</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">Help</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">Support</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-dark pl-2" href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a href="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Scrpyard</span></h1>
                        </a>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                            <div className="input-group">
                                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-  group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <button onClick={(e) => handleSubmit(e)} style={{"width": "30px", "height": "25px", "display": "flex", "justifyContent": "center", "alignItems": "center"}} className='btn'>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <a href="" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                        <a href="" className="btn border">
                            <i onClick={() => navigate("/cart")} className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}
        </div>
    )
}
