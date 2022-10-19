import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import '../../App.css'

export default function SignInPage() {
    const [formData, setFormData] = useState();

    const login = async e => {
        e.preventDefault();
        const url = 'http://localhost:3002/login';
        const res = await axios({
            method: 'POST',
            url: url,
            data: formData
        });
        console.log(res);
    };

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={login}>
                <p>
                    <label>Username or email address</label><br />
                    <input type="text" name="username" onChange={handleChange} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br />
                    <input type="password" name="password" onChange={handleChange} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
