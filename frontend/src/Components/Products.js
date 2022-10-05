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
    console.log(data.length)

    return (
        <>
            {/* <!-- Products Start --> */}
            <div class="container-fluid pt-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Our Top Products</span></h2>
                </div>
                <div class="row px-xl-5 pb-3">
                    {Object.keys(data).length > 0 ?
                        data.map((userData, index) => {
                            { console.log(userData, index) }
                            return (
                                userData.sellingNormalProduct.map((product) => {
                                    return (
                                        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                                            <div class="card product-item border-0 mb-4">
                                                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                    <img class="img-fluid w-100" src={product.imgUrl} alt="" />
                                                </div>
                                                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">

                                                    <h6 class="text-truncate mb-3">{product.productName}</h6>
                                                    <div class="d-flex justify-content-center">
                                                        <h6>&#8377; {product.price}</h6><h6 class="text-muted ml-2"><del>&#8377;{product.price + (product.price * (10 / 100))}</del></h6>
                                                    </div>
                                                </div>
                                                <div class="card-footer d-flex justify-content-between bg-light border">
                                                    <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                                    <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
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
