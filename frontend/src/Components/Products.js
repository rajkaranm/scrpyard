import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";


export default function Products() {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("http://localhost:5000/product/get");

            setData(req.data);
        }
        fetchData();
    }, [])

    // console.log("data", data[0].sellingNormalProduct[0].productName);
    // console.log(Object.keys(data).length);

    return (
        <>
            {/* <!-- Products Start --> */}
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Our Top Products</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    {Object.keys(data).length > 0 ?
                        data.map((userData, index) => {
                            return (
                                userData.sellingNormalProduct.map((product) => {
                                    return (
                                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                            <div className="card product-item border-0 mb-4">
                                                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                    <img className="img-fluid w-100" src={product.imgUrl} alt="" />
                                                </div>
                                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">

                                                    <h6 className="text-truncate mb-3">{product.productName}</h6>
                                                    <div className="d-flex justify-content-center">
                                                        <h6>&#8377; {product.price}</h6><h6 className="text-muted ml-2"><del>&#8377;{product.price + (product.price * (10 / 100))}</del></h6>
                                                    </div>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between bg-light border">
                                                    <a href={`product/id/${product._id}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            )

                        })
                        : <></>
                    }
                </div>
            </div>
            {/* <!-- Products End --> */}
        </>
    )
}
