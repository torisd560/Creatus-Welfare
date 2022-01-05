import React, { useState } from "react";
import './Login.css'
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const {signInEmailPasswordUser} = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const navigate  = useNavigate();

    const handleGoogleLogIn = (e) => {
        signInUsingGoogle(navigate , location, navigate);
        e.preventDefault();
    };

    const handleLogIn = () => {
        signInEmailPasswordUser(email, password, location, navigate);
        setEmail('');
        setPassword('');
    };

    return (
        <div>
           
            <Row xs={12} md={12} className='g-4 m-0 p-5 d-flex justify-content-center align-items-center'>
                <Col md={6}>
                    <div className='my-5 mx-auto w-75'>
                        <form >
                            <h3 className='text-center custom-text-primary fw-bold my-3'>Sign In</h3>
                            <div className="mb-3 my-5">
                                <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-warning me-2"></i>E-mail</label>
                                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key custom-text-warning me-2"></i>Password</label>
                                <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" />
                            </div>

                            <div>
                                <p className='custom-cursor-style text-primary'> Forgot Password-? </p>
                                <Button onClick={handleLogIn} className='mt-2 px-4  py-2'>Login</Button>
                                <Button className='ms-3 mt-2 custom-button' onClick={handleGoogleLogIn} ><i className="fab fa-google text-white fs-6 px-4 py-1 "></i></Button>
                                <p className=' mt-4'>Don't have an account?<Link to='/register'> Sign Up</Link></p>
                                {/* <p className='text-danger fw-bold mt-4'>{error}</p> */}
                            </div>

                        </form>
                    </div>
                </Col>
                <Col md={6}>
                    <img src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="" className='img-fluid' />
                </Col>
            </Row>
        </div>
    );
};

export default Login;