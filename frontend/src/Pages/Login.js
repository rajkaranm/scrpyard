import axios from 'axios';
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


export default function Login({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const submit = () => {
        console.log(email, password)
        axios.post('http://localhost:5000/login', {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response.data.user);
            setUser(response.data.user);
            localStorage.setItem("username", response.data.user.userDetails.username);
            localStorage.setItem("_id", response.data.user._id);
            navigate("/");

          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    return (
        <div className='container mt-5' style={{"width": "30vw"}}>
            <h1 style={{"textAlign": "center"}} className='mb-5' >Login Page</h1>
            <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" for="form2Example1">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" for="form2Example2">Password</label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <button onClick={() => submit()} type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>Not a member? <a href="/register">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
