import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from 'axios';

export default function Login(props) {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [error, setError] = useState('');
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post('http://192.168.1.8:3000/auth/login', formData, {withCredentials:true})
            .then(res => {
                if (res.status === 200) navigate('/api/home')
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err.response.data)
            })
    }
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function renderRegistration() {
        console.log('here')
        props.switchMode();
    }
    return (
        <div className="auth--login" onSubmit={handleSubmit}>
            <form className="auth--login--form">
                {error && <div className="Login--error">{error}</div>}
                <div>
                    <label className="auth--label" htmlFor="email">Email</label>
                    <input className="auth--input" type="email" name="email" id="email" onChange={handleChange} value={formData.email} autoComplete="email"/>
                </div>
                <div>
                    <label className="auth--label" htmlFor="password">Password</label>
                    <input className="auth--input" type="password" name="password" id="password" onChange={handleChange} value={formData.password} />
                </div>
                <button className="login--button">Log In</button>
                <p className="auth--login-reg-choice">No account yet?</p>
                <button type='button' className="register--button" onClick={renderRegistration}>Register</button>

            </form>
        </div>
    )
}