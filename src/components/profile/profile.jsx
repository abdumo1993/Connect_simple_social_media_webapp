import { useNavigate } from 'react-router-dom'
import logo from '../../assets/newspaper.png'
import ImageUploader from 'react-image-upload';
import { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import axios from 'axios';
import { useApi } from '../Contexts/apiContext';
import { useUpdateUser, useUser } from '../Contexts/userContext';
const Dialogue = (props) => {

    function onImageCancel() {
        props.setter();
        console.log('image uploaded. canceling...')
    }
    function onImageSubmit() {
        console.log('image uploaded. submitting...')

        return 0;
    }

    return (
        <div className="dialogue" >
            <div className="edit--dialogue">
                <ImageUploader
                    withIcon={true}
                    buttonText='choose Image'
                    singleImage={true}
                    withPreview={true}
                />
                <div className="dialog--buttons">
                    <div className="profile--button" onClick={onImageSubmit}>OK</div>
                    <div className="profile--button" onClick={onImageCancel}>Cancel</div>
                </div>
            </div>
        </div>

    )
}
export default function Profile() {
    const [showDbox, setShowDbox] = useState(false)
    const [showPreview, setShowPreview] = useState(null)
    const apiUrl = useApi();
    const user = useUser();
    const setUser = useUpdateUser();


    const navigate = useNavigate();
    function onEdit() {
        setShowDbox(true)
    }
    useEffect(() => {
        async function fetchData () {
            const prof = await axios.get(`${apiUrl}/api/profile`, {withCredentials: true})
            setUser(prof.data)
        }
        fetchData();
    }, [])
    
    return (
       <>
       <NavBar />
       {showDbox && <Dialogue showDbox={showDbox} setter = {() =>setShowDbox(false) }/>}
       {!showDbox && (

           <div className="profile">
            
            <div className="profile--picture">
                <img src={logo} alt="" />
                <div className="profile--button" onClick={onEdit} >Edit Picture</div>
            </div>
            <hr />
            <div className="profile--content">
                <div className="profile--info">
                    <p>name: {user.name}</p>
                    <p>username: {user.username}</p>
                    <p>email: {user.email}</p>
                </div>
                <hr />
                <div className="profile--options">
                    <div className="profile--button" onClick={() => navigate('/api/profile/edit')}>Edit Profile</div>
                    <div className="profile--button" onClick={() => navigate('/api/profile/delete')}>Delete Account</div>

                </div>
            </div>
        </div>
       )}
       </>
    )
}