import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";

export default function EditProfile() {
    const [profileData, setProfileData] = useState({})
    const [formData, setFormData] = useState({name: '', email:'', username: ''})
    const apiUrl = import.meta.env.VITE_API_URL
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prev => {
            return {...formData, [name]: value}
        })
    }

    useEffect(() => {
        async function fetchData () {
            const prof = await axios.get(`${apiUrl}/api/profile`, {withCredentials: true})
            setProfileData(prof.data)
            setFormData(prof.data)
            // console.log(prof)
        }
        fetchData();
    }, [])
    
    const navigate = useNavigate()
    function handleEdit(event) {
        event.preventDefault();
        axios.patch(`${apiUrl}/api/profile`, formData, {withCredentials: true})
        .then(res => {
            if (res.status === 201) navigate('/api/profile')  
        })
        .catch(err => {
            console.log(err.response.data)
        })
        
    }
    return (
        <div className="editProfile">
            <form className="formEdit" onSubmit={handleEdit}>

                <div className = 'edit--inputs'>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" onChange={handleChange} value={formData.email}/>
                </div>
                <div className = 'edit--inputs'>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={formData.name}/>
                </div>
                <div className = 'edit--inputs'>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" onChange={handleChange} value={formData.username}/>
                </div>
                <div className="edit--password">
                    <span>Edit password?</span>
                </div>
                <div className="edit--buttons">

                    <button className="profile--button" onClick={handleEdit}>Apply</button>
                    <button type="button" className="profile--button" onClick={() => navigate('/api/profile')}>cancel</button>
                </div>

            </form>
        </div>
    )
}