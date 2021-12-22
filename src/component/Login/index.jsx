import axios from 'axios';
import React, { useState } from 'react'
import './Login.css';
import {ENDPOINTURL} from "../../utils/EndPoint";
import { Link ,useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState("");
    const loginHandler=async()=>{
        const resdata= await axios.post(`${ENDPOINTURL}/authenticate`,{
            "username":email,
            "password":password
        })
        setMessage(resdata.data.message);
        if(resdata.data.Status==="200"){
            //  TODO : add here dashboard path when components is ready
            navigate(`/meeting`);
        }
    }
    return (
    <>
         <div className="authincation h-100">
        <div className="container-fluid h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-12">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
                                    <h4 className="text-center mb-4">Sign in your account</h4>
                                    {/* <form action="index.html"> */}
                                    <div className="input_info">
                                        <div className="form-group">
                                            <label><strong>Email</strong></label>
                                            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <label><strong>Password</strong></label>
                                            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                                        </div>
                                       {message && <p>{message  }</p>}
                                     </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="form-group">
                                                <div className="form-check ml-2 remember_main">
                                                    <input className="form-check-input" type="checkbox" id="basic_checkbox_1"/>
                                                    <label className="form-check-label" for="basic_checkbox_1">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="form-group forgot_password">
                                                
                                                <a>Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button  className="btn btn-primary btn-block" onClick={loginHandler}>Sign me in</button>
                                        </div>
                                    {/* </form> */}
                                    <div className="new-account mt-3">
                                    <div className="sing_up_main">
                                        <p>Don't have an account? <Link to="/register"> <a className="text-primary">Sign up</a> </Link> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
    )
}

export default Login;
