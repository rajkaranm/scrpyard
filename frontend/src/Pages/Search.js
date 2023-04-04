import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const { state } = useLocation();
  const [searchData, setSearchData] = useState();
  const search = state.search;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/search", { params: { search: search } })
      .then((res) => {
        console.log(res.data);
        setSearchData(res.data);
      });
  }, []);

  return (
    <div>
      <Topbar />
      <h3 style={{ textAlign: "center" }}>Results...</h3>
      <div style={{ margin: "1rem 10rem" }}>
        {searchData?.flag == 0 ? (
          <div>No Results</div>
        ) : (
          searchData &&
          searchData.map((product) => {
            return (
              <div key={product._id}>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={product.imgUrl}
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        {product.productName}
                      </h6>
                      <div className="d-flex justify-content-center">
                        <h6>&#8377; {product.price}</h6>
                        <h6 className="text-muted ml-2">
                          <del>
                            &#8377;{product.price + product.price * (10 / 100)}
                          </del>
                        </h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                      <a
                        href={`product/id/${product._id}`}
                        className="btn btn-sm text-dark p-0"
                      >
                        <i className="fas fa-eye text-primary mr-1"></i>View
                        Detail
                      </a>
                      <a href="" className="btn btn-sm text-dark p-0">
                        <i className="fas fa-shopping-cart text-primary mr-1"></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}
