import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";

export default function Cart({ user, setUser }) {
  let total = 0;
  const navigate = useNavigate();

  const removeCart = (_id) => {
    let data;
    for (let i = 0; i < user.cart.products.length; i++) {
      if (user.cart.products[i]._id == _id) {
        user.cart.products.splice(i, 1);
      }
    }
    setUser(user);
    console.log(user);
    axios
      .post(`http://localhost:5000/product/update/${user._id}`, user)
      .then((res) => {
        alert("Product Removed");
        window.location.reload(false);
      });
  };

  const handleSubmit = async () => {
    prompt("Enter Your Address!");
    const {
      data: { key },
    } = await axios.get("http://127.0.0.1:5000/getRazorKey");
    total = total + 100;
    const {
      data: { order },
    } = await axios.post("http://127.0.0.1:5000/checkout", { total });
    var options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "To Scrapyard",
      description: "This payment is for your orders",
      image: "https://avatars.githubusercontent.com/u/90887824?v=4",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/paymentVerification",
      prefill: {
        name: user.userDetails.userName,
        email: user.userDetails.email,
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var razor = new window.Razorpay(options);
    razor.open();
    console.log(total);
    console.log(window);
  };

  if (user)
    return (
      <div>
        <Topbar />
        <div class="container-fluid pt-5">
          <div class="row px-xl-5">
            <div class="col-lg-8 table-responsive mb-5">
              <table class="table table-bordered text-center mb-0">
                <thead class="bg-secondary text-dark">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody class="align-middle">
                  {user.cart.products.map((products) => {
                    total = total + products.price;

                    return (
                      <>
                        <tr>
                          <td class="align-middle">
                            <img
                              src={products.imgUrl}
                              alt=""
                              style={{ width: "50px" }}
                            />{" "}
                            {products.productName}
                          </td>
                          <td class="align-middle">&#8377;{products.price}</td>
                          <td class="align-middle">
                            <div
                              class="input-group quantity mx-auto"
                              style={{ width: "100px" }}
                            >
                              <div class="input-group-btn">
                                <button class="btn btn-sm btn-primary btn-minus">
                                  <i class="fa fa-minus"></i>
                                </button>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-sm bg-secondary text-center"
                                value="1"
                              />
                              <div class="input-group-btn">
                                <button class="btn btn-sm btn-primary btn-plus">
                                  <i class="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle">
                            <button
                              onClick={() => removeCart(products._id)}
                              class="btn btn-sm btn-primary"
                            >
                              <i class="fa fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div class="col-lg-4">
              <form class="mb-5" action="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control p-4"
                    placeholder="Coupon Code"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary">Apply Coupon</button>
                  </div>
                </div>
              </form>
              <div class="card border-secondary mb-5">
                <div class="card-header bg-secondary border-0">
                  <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between mb-3 pt-1">
                    <h6 class="font-weight-medium">Subtotal</h6>
                    <h6 class="font-weight-medium">&#8377;{total}</h6>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h6 class="font-weight-medium">Shipping</h6>
                    <h6 class="font-weight-medium">&#8377;100</h6>
                  </div>
                </div>
                <div class="card-footer border-secondary bg-transparent">
                  <div class="d-flex justify-content-between mt-2">
                    <h5 class="font-weight-bold">Total</h5>
                    <h5 class="font-weight-bold">&#8377;{total + 100}</h5>
                  </div>
                  <button
                    onClick={() => handleSubmit()}
                    class="btn btn-block btn-primary my-3 py-3"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
