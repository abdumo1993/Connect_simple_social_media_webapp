import { useNavigate } from 'react-router-dom'
import logo from '../../assets/newspaper.png'
import ImageUploader from 'react-image-upload';
import { useState } from 'react';
import NavBar from '../NavBar';
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

    const navigate = useNavigate();
    function onEdit() {
        setShowDbox(true)
    }
    
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
                    <p>name: abdurahman</p>
                    <p>username: abdurahman</p>
                    <p>email: abdurahman</p>
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