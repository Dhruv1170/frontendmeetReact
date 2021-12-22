import React,{useEffect, useState} from "react";
import './Register.css';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { ENDPOINTURL } from "../../utils/EndPoint";
import axios from "axios"; 
import { Name_REGEX,EMAIL_REGEX ,PASSWORD_REGEX} from "../../utils/validation";

function Registration(){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [confirmpassword,setconfirmpassword]= useState('');
    const [isnam, setIsNam] = useState('');
    const [ismail,setIsMail] = useState('');
    const [ispass, setIsPass] = useState('');
    const [iserror,setIsError] = useState('');
    
     function validation(){

        let formIsValid = true;
            if(!Name_REGEX.test(name)===true || (name=="")){
            formIsValid = false; 
            setIsNam("*please enter correct name");
            // console.log('not match');   
            }
            if(!EMAIL_REGEX.test(email)===true || (email=="")){
            formIsValid = false;
            setIsMail("*enter correct email-id"); 
            // console.log('not match');
            }
            if(!PASSWORD_REGEX.test(password)===true || (password=="")){
                formIsValid = false; 
                setIsPass("*enter valid password");
                // console.log('not match');
            }
            if(!password===confirmpassword){
                formIsValid = false; 
                // console.log('not match');
            }
            
        return formIsValid;
    }
    async  function onsubmit(){
        if(validation()){
            setIsNam("");
            setIsMail("");
            setIsPass("");
            setIsError("");
            const response=await axios.post(`${ENDPOINTURL}/register/registerUser`,{
                "name":name,
                "email":email,
                "password":password
            })
        }else{
            setIsError(" Your form is unvalid");
        }
    }
    
    return(  
             <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Sign up your account</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-validation">
                                    <div className="form-valide">
                                        <div className="row">
                                        {/* <p>{iserror}</p> */}
                                            <div className="col-xl-6">
                                                <div className="form-group row">
                                                    <label className="col-lg-4 col-form-label" for="val-username">Username
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <div className="input_box">
                                                        <input type="text"  className="form-control" id="val-username" name="val-username" placeholder="Enter a username.." onChange={(e)=>{setname(e.target.value)}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>{isnam}</p><br/>
                                                    <div className="form-group row">
                                                    <label className="col-lg-4 col-form-label" for="val-email">Email <span
                                                            className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                    <div className="input_box">
                                                        <input type="email" className="form-control" id="val-email" name="val-email" placeholder="Your valid email.." onChange={(e)=>{setemail(e.target.value)}}/>
                                                    </div>
                                                    </div>
                                                </div>
                                                <p>{ismail}</p>
                                                <div className="form-group row">
                                                    <label className="col-lg-4 col-form-label" for="val-password">Password
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                    <div className="input_box">
                                                        <input type="password" className="form-control" id="val-password" name="val-password" placeholder="Choose a safe one.." onChange={(e)=>{setpassword(e.target.value)}}/>
                                                    </div>
                                                    </div>
                                                </div>
                                                <p>{ispass}</p>
                                                <div className="form-group row">
                                                    <label className="col-lg-4 col-form-label" for="val-confirm-password">Confirm Password <span
                                                            className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                    <div className="input_box">
                                                        <input type="password" className="form-control" id="val-confirm-password" name="val-confirm-password" placeholder="..and confirm it!"/>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                        <div className="col-lg-8 ml-auto">
                                            <div className="btn_box">
                                            <p>{iserror}</p>
                                            <button  className="btn btn-primary" onClick={onsubmit}>Submit</button>
                                            {/* <p>{iserror}</p> */}
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
    </div>
        
    )
}

export default Registration ;