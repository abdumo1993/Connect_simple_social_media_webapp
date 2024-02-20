import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../Contexts/apiContext";
export default function Register(props) {
    const [formData, setFormData] = useState({ email: '', password: '', Cpassword: '' })
    const [error, setError] = useState('');
    const apiUrl = useApi()

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        axios.post(`${apiUrl}/auth/register`, formData, {withCredentials: true})
            .then(res => {
                if (res.status === 201) {
                    navigate('/api/home')}
            })
            .catch(err => {
                setError(err.response.data)
            })
    }
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function renderLogin() {
        props.switchMode();
    }
    return (
        <div className="auth--login">
            <form className="auth--login--form" onSubmit={handleSubmit}>
                {error && <div className="Login--error">{error}</div>}

                <div>
                    <label className="auth--label" htmlFor="email">Email</label>
                    <input className="auth--input" type="email" name="email" id="email" onChange={handleChange} autoComplete="email"/>
                </div>
                <div>
                    <label className="auth--label" htmlFor="password">Password</label>
                    <input className="auth--input" type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <div>
                    <label className="auth--label" htmlFor="Cpassword">confirm password</label>
                    <input className="auth--input" type="password" name="Cpassword" id="Cpassword" onChange={handleChange} />
                </div>
                <button className="register--button" >Register</button>
                <p className="auth--login-reg-choice">Have account Already?</p>
                <button type='button' className="login--button" onClick={renderLogin}>Log In</button>

            </form>
        </div>
    )
}