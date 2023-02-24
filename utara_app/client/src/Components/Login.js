import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../asset/css/loginpage.css';

import axios from "../API/axios";
const LOGIN_URL = '/auth';

const Login = () => {
    const [Auth, setAuth] = useState();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    // const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, pwd, roles, accessToken })
            setEmail('')
            setPwd('')
            navigate(from, { replace: true })
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Username or Password..!!')
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <section className="Apploginpage">
            <div className="section">
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <h1 className="text-white">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-white">Email:</label>
                    <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />

                    <label htmlFor="password" className="text-white">Password:</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />

                    <button className="signinbnt">Sign In</button>
                </form>

                <p className="text-white">
                    Need an Account?<br />
                    <span className="line">
                        <Link to="/register"><a className="linkline">Sign Up</a></Link>
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Login;